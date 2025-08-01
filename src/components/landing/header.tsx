import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold">DevCard</span>
        </a>
        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <Button key={link.name} variant="link" asChild className="text-muted-foreground transition-colors hover:text-foreground">
              <a href={link.href}>{link.name}</a>
            </Button>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
