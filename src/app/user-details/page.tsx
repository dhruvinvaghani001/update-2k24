"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import Title from "@/components/Title";
import BlurFade from "@/components/magicui/blur-fade";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  department: z.string(),
  year: z.string().max(1),
  semester: z.string().max(1),
  phoneNumber: z.string().length(10),
  enrollmentNo: z.string(),
});

type Props = {};

const Page = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      setIsLoading(true);
      const response = await axios.post("/api/user-detail", values);
      console.log(response);
      setIsLoading(false);
      toast({
        title: response.data.message,
        description: "You can start participation now",
        duration: 1500,
      });
      return router.push("/events");
    } catch (error) {
      console.log(error);
      toast({
        title: "something went wrong!",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mb-36">
      <Title
        title="Fill this details so you would not have to in Future..."
        className="mx-12"
      />
      <BlurFade delay={0.1 * 2} inView className="my-8 mx-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 border p-6 bg-card"
          >
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">
                    Select the year you are in
                  </FormLabel>
                  <FormControl>
                    <Combobox
                      options={["1", "2", "3", "4"]}
                      {...field}
                      label="Select Year"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">Select your department</FormLabel>
                  <FormControl>
                    <Combobox
                      options={["CO", "IT", "AIDS", "EL", "MH", "CL", "CH"]}
                      {...field}
                      label="Select Department"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">Select your semester</FormLabel>
                  <FormControl>
                    <Combobox
                      options={["1", "2", "3", "4", "5", "6", "7", "8"]}
                      {...field}
                      label="Select Semester"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="9897865668"
                      inputMode="numeric"
                      {...field}
                      className="max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="enrollmentNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enrollment No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ET20BTCO001"
                      {...field}
                      className="max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="flex gap-1 items-center">
              {isLoading && <Loader2 className="size-5 animate-spin" />}
              Submit
            </Button>
          </form>
        </Form>
      </BlurFade>
    </div>
  );
};
export default Page;
