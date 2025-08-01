import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 snap-start min-h-screen flex items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row sm:gap-4">
            <Button asChild size="lg">
              <a href="mailto:nayeem.zxc@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon_lg" className="w-14 h-14 sm:w-12 sm:h-12">
                <a href="https://github.com/fcat97" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon_lg" className="w-14 h-14 sm:w-12 sm:h-12">
                <a href="https://www.linkedin.com/in/sz97/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
