import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { handleSubmit, control, reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = () => {
    reset(); // Netlify handles sending
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Contact</h2>
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg">For inquiries about commissioned work or exhibitions</p>
            <div className="space-y-2">
              <p className="text-gray-600">theelementsart@gmail.com</p>
              <p className="text-gray-600">Vienna, Austria</p>
            </div>
          </div>

          <Form>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <FormField
                control={control}
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
                control={control}
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

              <FormField
                control={control}
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
                control={control}
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
                <Button
                  type="submit"
                  className="border-2 border-black bg-transparent text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
