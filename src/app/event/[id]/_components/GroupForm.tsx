"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MultiSelectCombobox } from "@/components/ui/multi-select-combobox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export type EmailOption = {
  value: string;
  label: string;
};

type GroupRegistrationFormProps = {
  emailOptions: EmailOption[];
  mini: number;
  maxi: number;
  eventId: string;
};

export default function GroupRegistrationForm({
  emailOptions,
  mini,
  maxi,
  eventId,
}: GroupRegistrationFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const groupFormSchema = z.object({
    emails: z
      .array(
        z.object({
          value: z.string(),
          label: z.string().email(),
        })
      )
      .min(mini - 1, `Please select at least ${mini - 1} participant(s)`)
      .max(maxi - 1, `You can select up to ${maxi - 1} participant(s)`),
  });

  type GroupFormValues = z.infer<typeof groupFormSchema>;

  const form = useForm<GroupFormValues>({
    resolver: zodResolver(groupFormSchema),
    defaultValues: {
      emails: [],
    },
  });

  const onSubmit = async (values: GroupFormValues) => {
    if (status == "authenticated") {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `/api/event/${eventId}/group-registration`,
          values
        );
        setIsLoading(false);
        router.refresh();
        return toast({
          title: response.data.message,
          description: "You can start participation now",
          duration: 1500,
        });
      } catch (error) {
        setIsLoading(false);
        return toast({
          title: "Something went wrong",
          variant: "destructive",
          description: "You can start participation now",
          duration: 1500,
        });
      }
    } else {
      const callbackUrl = encodeURIComponent(window.location.href);
      router.push(`/signin?callbackUrl=${callbackUrl}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="emails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Group Members for Event {eventId}</FormLabel>
              <FormControl>
                <MultiSelectCombobox
                  options={emailOptions}
                  selectedOptions={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Register Group</Button>
      </form>
    </Form>
  );
}
