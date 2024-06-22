"use client";
import { Heading1, Para } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ErrorResponse } from "resend";
import { handleSubmitContact } from "../api";

export default function ContactPage() {
  const [formError, setFormError] = useState<ErrorResponse>();
  const [formData, setFormData] = useState(
    {} as { name: string; email: string; message: string },
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await handleSubmitContact(formData);
    if (response) {
      setFormError(response);
    } else {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  useEffect(() => {
    if (formError) {
      toast({
        title: "Error",
        description:
          "There was an error submitting the form. Please try again later.",
        variant: "destructive",
      });
    }
  }, [formError]);

  return (
    <div className="container grid h-full max-w-screen-md place-items-center">
      <div className="flex w-full flex-col gap-2">
        <Image
          src={"/icons/contact.svg"}
          width={40}
          height={40}
          alt="Articles Icon"
          className="hidden h-auto sm:block"
        />
        <Heading1>Let&apos;s Connect!</Heading1>
        <Para muted>
          Have a question, an exciting project in mind, or just want to chat?{" "}
          <br />
          Drop me a line - I&apos;m always eager to connect with passionate
          people and explore new possibilities.
        </Para>
        <form className="grid gap-2 sm:gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Input
              placeholder="Your name..."
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              placeholder="Your email..."
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <Textarea
            className="h-40"
            placeholder="Your message..."
            name="message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <Button variant={"secondary"} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
