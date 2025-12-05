"use client";

import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { loginSchema } from "../../schemas/user-schema";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData } from "../../types/auth";
import { api } from "@/app/axios";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token) {
        router.replace("/admin");
      }
    }
  }, [router]);

  const onSubmit = async (values: LoginData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await api.post("/api/auth/login", values);
      const { token, message } = response.data || {};

      if (!token) {
        setErrorMessage("Login failed. Please try again.");
        toast.error("Login failed");
        return;
      }

      // Persist token for client usage and middleware via cookie
      localStorage.setItem("access_token", token);
      document.cookie = `access_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;

      toast.success(message || "Login successful");
      router.replace("/admin");
    } catch (error: unknown) {
      const msg =
        // @ts-expect-error - best-effort error message extraction
        (error?.response?.data?.message ||
        // @ts-expect-error - best-effort error message extraction
        error?.response?.data?.error) ||
        "Invalid credentials";
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="m@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {errorMessage && (
                  <div className="text-sm font-medium text-red-600">
                    {errorMessage}
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        {/* <a
                          href="#"
                          className="text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a> */}
                      </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin size-4" /> : "Login"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
