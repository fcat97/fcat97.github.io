import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const commercialProjects = [
    {
        title: "Enterprise Mobile Banking App",
        description: "Developed key features for a leading bank's mobile application, focusing on performance, security, and user experience. My contributions included implementing a new secure transaction module and optimizing data synchronization, resulting in a 20% reduction in app load time.",
        image: "https://placehold.co/600x400.png",
        hint: "mobile banking app",
        stack: ["Kotlin", "Java", "Dagger", "RxJava", "MVVM"],
    },
     {
        title: "Retail POS System",
        description: "Contributed to the development of a point-of-sale system for a major retail chain. I was responsible for integrating a new payment gateway and building a real-time inventory tracking feature, which improved checkout efficiency by 15%.",
        image: "https://placehold.co/600x400.png",
        hint: "retail point of sale",
        stack: ["Java", "Android SDK", "SQLite", "Retrofit"],
    },
];

export default function CommercialProjects() {
    return (
        <section id="commercial-projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contributions in Commercial Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of the commercial projects I've had the privilege to contribute to.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
                    {commercialProjects.map((project, index) => (
                        <Card 
                            key={index} 
                            className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl"
                        >
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={project.image}
                                    alt={`Image of ${project.title}`}
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
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
