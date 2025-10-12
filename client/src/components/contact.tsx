import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Use Netlify form submission
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    fetch("/", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("There was an error sending your message."));
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Contact</h2>
        </div>

        {submitted ? (
          <p className="text-center text-lg text-green-600">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <Form {...form}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" rows={6} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button type="submit" className="px-8 py-3">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
