"use client";
import React from "react";
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
import { BorderBeam } from "@/components/magicui/border-beam";

const formSchema = z.object({
  department: z.string(),
  year: z.string().max(1),
  semester: z.string().max(1),
  phoneNumber: z.string().length(10),
  enrollmentNo: z.string(),
});

type Props = {};

const Page = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await axios.post("/api/user-detail", values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Title title="User Details"></Title>
      <div className="max-w-3xl mx-auto ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year : </FormLabel>
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
                <FormItem>
                  <FormLabel>Department : </FormLabel>
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
                <FormItem>
                  <FormLabel>Semester : </FormLabel>
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
                      placeholder="enter your phone number."
                      inputMode="numeric"
                      {...field}
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
                      placeholder="enter your enrollment number."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mx-auto " type="submit">
              Submit
            </Button>
          </form>0
        </Form>
      </div>
    </div>
  );
};
export default Page;
