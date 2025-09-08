import React from "react";
import { useState } from "react";
import type { ContactFormData } from "../../types/footer";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Send, CheckCircle } from "lucide-react";

type Props = {
  services: string[];
  projectTypes: string[];
  budgetRanges: string[];
  timelineOptions: string[];
};

const INITIAL: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  projectType: "",
  budget: "",
  timeline: "",
};

export default function ContactForm({
  services,
  projectTypes,
  budgetRanges,
  timelineOptions,
}: Props) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setField = (field: keyof ContactFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend / API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(INITIAL);
    }, 3000);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        Request a Quote
      </h3>
      <Card className="border-slate-200 shadow-lg">
        <CardContent className="p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-800 mb-2">
                Thank You!
              </h4>
              <p className="text-slate-600">
                Your message has been sent successfully. We'll get back to you
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setField("company", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select onValueChange={(v) => setField("service", v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select onValueChange={(v) => setField("projectType", v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select onValueChange={(v) => setField("budget", v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select onValueChange={(v) => setField("timeline", v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Project Description *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Please describe your project requirements, location, and any specific details..."
                  value={formData.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-600 hover:bg-slate-700"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
