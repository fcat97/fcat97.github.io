
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Shahriar Zaman
              </h1>
              <h2 className="text-xl font-medium text-primary">
                Android Developer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate developer creating modern and responsive mobile applications. I specialize in building beautiful and intuitive Android apps.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">
                  View Projects <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Avatar className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 border-4 border-primary/10 shadow-lg">
              <AvatarImage src="/me.jpeg" alt="Developer Avatar" data-ai-hint="developer portrait" className="object-cover grayscale" />
              <AvatarFallback>SZ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
