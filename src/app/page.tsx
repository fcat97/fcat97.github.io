import BioGenerator from '@/components/landing/bio-generator';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Projects from '@/components/landing/projects';
import Skills from '@/components/landing/skills';
import Testimonials from '@/components/landing/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <BioGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
