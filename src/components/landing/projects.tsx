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
import { Github } from "lucide-react";

const projects = [
  {
    title: "Cartera",
    description: "A secure and user-friendly wallet application for managing your finances on the go.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile wallet app",
    stack: ["Kotlin", "Jetpack Compose", "RoomDB"],
    githubUrl: "https://github.com/fcat97/Cartera",
  },
  {
    title: "Project Alpha",
    description: "A comprehensive project management tool designed to streamline team collaboration and workflow.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract gradients",
    stack: ["Kotlin", "Jetpack Compose", "MongoDB"],
    githubUrl: "https://github.com/fcat97",
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
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="h-full overflow-hidden transition-all duration-500 ease-in-out group-hover:[transform:rotateY(10deg)] group-hover:shadow-2xl">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
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
