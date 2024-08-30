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
<<<<<<< HEAD
import { BorderBeam } from "@/components/magicui/border-beam";
=======
import BlurFade from "@/components/magicui/blur-fade";
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f

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
<<<<<<< HEAD
    <div>
      <Title title="User Details"></Title>
      <div className="max-w-3xl mx-auto ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
=======
    <div className="mb-36">
      <Title
        title="Fill this details so you would not have to in Future..."
        className="mx-12"
      />
      <BlurFade delay={0.25 * 2} inView className="my-8 mx-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 border p-6 bg-card"
          >
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
<<<<<<< HEAD
                <FormItem>
                  <FormLabel>Year : </FormLabel>
=======
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">
                    Select the year you are in
                  </FormLabel>
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
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
<<<<<<< HEAD
                <FormItem>
                  <FormLabel>Department : </FormLabel>
=======
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">Select your department</FormLabel>
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
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
<<<<<<< HEAD
                <FormItem>
                  <FormLabel>Semester : </FormLabel>
=======
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="ml-1">Select your semester</FormLabel>
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
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
<<<<<<< HEAD
                      placeholder="enter your phone number."
                      inputMode="numeric"
                      {...field}
=======
                      placeholder="9897865668"
                      inputMode="numeric"
                      {...field}
                      className="max-w-xs"
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
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
<<<<<<< HEAD
                      placeholder="enter your enrollment number."
                      {...field}
=======
                      placeholder="ET20BTCO001"
                      {...field}
                      className="max-w-xs"
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<<<<<<< HEAD
            <Button className="mx-auto " type="submit">
              Submit
            </Button>
          </form>0
        </Form>
      </div>
=======
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </BlurFade>
>>>>>>> 7c4c025ea3f36fafafadca5800032b1531fc078f
    </div>
  );
};
export default Page;
