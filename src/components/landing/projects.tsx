"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, Star } from "lucide-react";
import { useAutoplayCarousel } from "@/hooks/useAutoplayCarousel";

const projects = [
  {
    title: "Cartera",
    description: "A secure and user-friendly wallet application for managing your finances on the go.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile wallet app",
    stack: ["Kotlin", "Jetpack Compose", "ObjectBox", "Firebase"],
    githubUrl: "https://github.com/fcat97/Cartera",
  },
  {
    title: "QuranApi",
    description: "A Gradle library providing an easy-to-use API for accessing Quran data in Android applications.",
    image: "https://placehold.co/600x400.png",
    hint: "api library",
    stack: ["Kotlin", "Gradle", "Android"],
    githubUrl: "https://github.com/fcat97/QuranApi",
    stars: 18,
  },
  {
    title: "driveBackupApi",
    description: "An Android library to communicate with the Google Drive app's specific data directory.",
    image: "https://placehold.co/600x400.png",
    hint: "android library google drive",
    stack: ["Kotlin", "Android", "Google Drive API"],
    githubUrl: "https://github.com/fcat97/driveBackupApi",
    stars: 5,
  },
  {
    title: "dotEnv",
    description: "A Gradle plugin that adds support for .env files, overcoming the limitations of local.properties by providing module-level configuration, typed constants, and automatic code generation for Android and Java/Kotlin projects.",
    image: "https://placehold.co/600x400.png",
    hint: "code environment variables",
    stack: ["Gradle", "Kotlin", "Android"],
    githubUrl: "https://github.com/fcat97/dotEnv",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance, built with modern web technologies.",
    image: "https://placehold.co/600x400.png",
    hint: "modern website",
    stack: ["Kotlin", "FastAPI", "MongoDB"],
    githubUrl: "https://github.com/fcat97",
  },
  {
    title: "Project Gamma",
    description: "A data visualization dashboard that presents complex datasets in an intuitive and interactive way.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard charts",
    stack: ["Jetpack Compose", "FastAPI"],
    githubUrl: "https://github.com/fcat97",
  },
];

export default function Projects() {
  const { carouselRef, plugin } = useAutoplayCarousel();

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are a few projects I've worked on recently. Want to see more? Check out my GitHub.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Carousel
            ref={carouselRef}
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card
                      className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl animate-[float_12s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {project.title}
                          {project.stars && (
                            <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span>{project.stars}</span>
                            </div>
                          )}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          data-ai-hint={project.hint}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View on GitHub
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}