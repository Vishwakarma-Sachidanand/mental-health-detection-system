"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm } from "@/services/contact.service";
import { SITE_CONFIG } from "@/constants/site";
import { GridBackground } from "@/components/common/animated-background";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactPageContent() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const result = await submitContactForm(data);
    toast({
      title: result.success ? "Message Sent!" : "Error",
      description: result.message,
      variant: result.success ? "success" : "destructive",
    });
    if (result.success) reset();
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "MindScope AI", href: SITE_CONFIG.linkedin },
    { icon: Github, label: "GitHub", value: "mindscope-ai", href: SITE_CONFIG.github },
  ];

  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-8" />

          <SectionHeader
            badge="Contact"
            title="Get in Touch"
            description="Have questions about our project? We'd love to hear from you."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card p-6 sm:p-8 space-y-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" {...register("name")} />
                    {errors.name && (
                      <p className="text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </motion.form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-semibold">Contact Information</h3>
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === "Email" || info.label === "Phone" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <Icon className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="glass-card overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-blue-400" />
                    <p className="text-sm font-medium">University Campus</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Department of Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
