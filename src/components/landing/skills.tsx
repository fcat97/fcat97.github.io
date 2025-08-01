"use client"

import React from "react";
import {
  CodeXml,
  Component,
  Database,
  Server,
  Smartphone,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Kotlin", icon: <CodeXml className="h-10 w-10" /> },
  { name: "Jetpack Compose", icon: <Component className="h-10 w-10" /> },
  { name: "Android SDK", icon: <Smartphone className="h-10 w-10" /> },
  { name: "Python", icon: <CodeXml className="h-10 w-10" /> },
  { name: "FastAPI", icon: <Server className="h-10 w-10" /> },
  { name: "MongoDB", icon: <Database className="h-10 w-10" /> },
];

export default function Skills() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true })
    );
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", onSelect)

        return () => {
            api.off("select", onSelect)
        }
    }, [api])


  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technology I 🫰</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm proficient in a variety of modern mobile and backend development technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
            <Carousel 
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {skills.map((skill, index) => (
                        <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
                            <div className={cn("flex flex-col items-center justify-center space-y-2 p-4 transition-transform duration-300 ease-in-out",
                              {
                                'scale-125': index === current,
                              }
                            )}>
                                <div className={cn(
                                  "flex h-24 w-24 items-center justify-center rounded-full bg-muted text-primary transition-all hover:bg-primary hover:text-primary-foreground",
                                  {
                                    'bg-primary text-primary-foreground': index === current
                                  }
                                  )}>
                                    {skill.icon}
                                </div>
                                <span className="text-lg font-medium">{skill.name}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
