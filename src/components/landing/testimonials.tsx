import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jane Smith",
    title: "CEO, TechCorp",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote:
      "Working with John was an absolute pleasure. His expertise in front-end development and eye for detail are unmatched. He delivered a product that exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    title: "Project Manager, Innovate LLC",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote:
      "John is a proactive and resourceful developer. He was instrumental in solving complex challenges and ensuring our project's success. Highly recommended!",
  },
  {
    name: "Emily White",
    title: "Lead Designer, CreativeMinds",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman face",
    quote:
      "His ability to translate intricate designs into pixel-perfect, functional UI is incredible. John is a true collaborator and a valuable asset to any team.",
  },
    {
    name: "David Green",
    title: "CTO, Future Solutions",
    avatar: "https://placehold.co/100x100.png",
    hint: "man face",
    quote:
      "John's technical skills are top-notch. He writes clean, maintainable code and is always eager to learn and implement new technologies. A true professional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Others Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take my word for it. Here's what my colleagues and clients have to say about my work.
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-start justify-between p-6 space-y-4 min-h-[220px]">
                        <p className="text-lg italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
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
