import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    // Netlify handles submission automatically
    reset();
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
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* Name */}
              <FormField
                control={undefined} // Not needed here
                name="name"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Name"
                      />
                    </FormControl>
                    <FormMessage>{errors.name?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={undefined}
                name="email"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Email"
                      />
                    </FormControl>
                    <FormMessage>{errors.email?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Subject */}
              <FormField
                control={undefined}
                name="subject"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...register("subject")}
                        placeholder="Subject"
                      />
                    </FormControl>
                    <FormMessage>{errors.subject?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={undefined}
                name="message"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Message"
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage>{errors.message?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button type="submit" className="border-2 border-black bg-transparent text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
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
