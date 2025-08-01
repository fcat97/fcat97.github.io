
"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { useAutoplayCarousel } from "@/hooks/useAutoplayCarousel";

const commercialProjects = [
    {
        title: "My Robi App",
        description: "Contributed to a leading telco app with over 50 million downloads, maintaining a 4.4 rating and a 99.4% crash-free rate. Key features include account management, customizable data plans (Easyplan), family account management, and a platform for news, games, and shopping.",
        image: "/my-robi-app.png",
        hint: "telco app",
        stack: ["Kotlin", "build.gradle.kts", "Kotlin Coroutine", "Kotlin Flow", "Jetpack Compose", "Hilt", "Room", "Retrofit", "Coil"],
        url: "https://play.google.com/store/apps/details?id=net.omobio.robisc&hl=en",
        stats: [
            { icon: <Download className="h-4 w-4" />, label: "50M+ Downloads" },
            { icon: <Star className="h-4 w-4" />, label: "4.4 Rating" },
        ]
    },
    {
        title: "Muslim Bangla",
        description: "Contributed to the most popular and authentic Islamic app in Bangladesh. Revamped the entire Hafizi Quran feature, rewriting legacy Java code into modern Kotlin with an MVVM architecture. Added audio call support for the Masayel section and implemented dynamic feature loading using webviews for a seamless native-like experience.",
        image: "https://muslimbangla.com/assets/img/top-mobile-img.png",
        hint: "islamic app",
        stack: ["Kotlin", "MVVM", "Android SDK", "Webview"],
        url: "https://play.google.com/store/apps/details?id=com.tos.namajtime&hl=en-US",
        stats: [
            { icon: <Download className="h-4 w-4" />, label: "1M+ Downloads" },
            { icon: <Star className="h-4 w-4" />, label: "4.9 Rating" },
        ]
    },
    {
        title: "ATOM Store, Myanmar",
        description: "The new ATOM Store app connects you to the digital eco system everyday conveniences with all you need in one place. With this app, you can manage your ATOM mobile balances, recharge for top up and pay bill, buy packages or gift packs transfer balance to others or manage accounts for family members, Play Games & Win prizes, Watch Movies, Get Discounts through Loyalty STAR program and many lifestyle services beyond telco feature.",
        image: "/atom-store-app.png",
        hint: "mobile app store",
        stack: ["Kotlin", "MVVM", "Android SDK", "Firebase"],
        url: "https://play.google.com/store/apps/details?id=mm.com.atom.store&hl=en",
        stats: [
            { icon: <Download className="h-4 w-4" />, label: "10M+ Downloads" },
            { icon: <Star className="h-4 w-4" />, label: "4.4 Rating" },
        ]
    },
];

export default function CommercialProjects() {
    const { carouselRef, plugin } = useAutoplayCarousel();

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
                            {commercialProjects.map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div className="p-1 h-full">
                                        <Card 
                                            className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl flex flex-col h-full"
                                        >
                                            <CardHeader>
                                                <CardTitle>{project.title}</CardTitle>
                                                <CardDescription>{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow flex flex-col justify-between">
                                                <div>
                                                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                                                        <Image
                                                            src={project.image}
                                                            alt={`Background for ${project.title}`}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="blur-lg scale-110"
                                                        />
                                                        <Image
                                                            src={project.image}
                                                            alt={`Image of ${project.title}`}
                                                            data-ai-hint={project.hint}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            className="relative z-10"
                                                        />
                                                    </div>
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {project.stack.map((tech) => (
                                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                                        ))}
                                                    </div>
                                                    {project.stats && (
                                                        <div className="mt-4 flex flex-wrap gap-4 text-muted-foreground">
                                                            {project.stats.map((stat, i) => (
                                                                <div key={i} className="flex items-center gap-2">
                                                                    {stat.icon}
                                                                    <span>{stat.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {project.url && (
                                                    <Button asChild className="mt-6 w-full">
                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                            View on Play Store <ArrowRight className="ml-2 h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </CardContent>
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
