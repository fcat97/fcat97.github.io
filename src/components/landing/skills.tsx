
import {
  CodeXml,
  Component,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const skills = [
  { name: "Kotlin", icon: <CodeXml className="h-10 w-10" /> },
  { name: "Jetpack Compose", icon: <Component className="h-10 w-10" /> },
  { name: "Android SDK", icon: <Smartphone className="h-10 w-10" /> },
  { name: "FastAPI", icon: <Server className="h-10 w-10" /> },
  { name: "MongoDB", icon: <Database className="h-10 w-10" /> },
];

export default function Skills() {
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
        <div className="mx-auto grid max-w-5xl justify-items-center gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center space-y-2">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                {skill.icon}
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
