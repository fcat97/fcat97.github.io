"use client";

import type { GenerateBioVariationsOutput } from "@/ai/flows/generate-bio-variations";
import { generateBioVariations } from "@/ai/flows/generate-bio-variations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  keywords: z
    .string()
    .min(10, "Please enter at least 10 keywords.")
    .max(200, "Please enter at most 200 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function BioGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateBioVariationsOutput | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
    },
  });

  async function handleGenerate(data: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateBioVariations({ keywords: data.keywords });
      setResult(response);
    } catch (error) {
      console.error("Failed to generate bio variations:", error);
      toast({
        title: "Error",
        description: "Failed to generate bio. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({
      title: "Copied to clipboard!",
      description: "You can now paste the bio anywhere you like.",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="bio-generator" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                AI Powered
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Need a Bio? Let AI Help!
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Struggling to write the perfect introduction? Enter some keywords about your skills and experience, and let our AI generate professional bio variations for you.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Bio Generator</CardTitle>
                <CardDescription>Enter comma-separated keywords (e.g., React, Next.js, UI/UX design).</CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleGenerate)}>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="keywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Keywords</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., Full-stack developer, 5 years experience, loves TypeScript..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Bio
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </div>
          <div className="space-y-4">
            {isLoading && (
              <div className="space-y-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            )}
            {result && (
              <div className="space-y-4">
                {result.bioVariations.map((bio, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-6">
                      <p className="text-card-foreground">{bio}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bio, index)}
                        className="absolute right-2 top-2"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
