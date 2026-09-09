import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bikendra-lohar-a8817928a/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Bikendralohar", icon: Github },
  { label: "X", href: "https://x.com/BikendraL26949", icon: Twitter },
];

export const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center gradient-accent pt-16">
    <div className="container-custom text-center">
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="inline-block mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/10 border-4 border-primary mx-auto flex items-center justify-center shadow-elegant overflow-hidden">
            <img src="/bikendra.jpg" alt="Bikendra Lohar" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          Bikendra Lohar <span className="text-primary">| Software Engineer</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-4">
          Final-year Computer Science Engineering student
        </p>
        <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
          Final-year Computer Science Engineering student with strong skills in Java, C, JavaScript, and Python, experienced in building end-to-end web applications.
        </p>

        <div className="flex flex-wrap gap-3 justify-center items-center mb-5">
          <Button size="lg" asChild className="shadow-soft hover:shadow-elegant transition-all">
            <a href="/Bikendra-Lohar-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> View Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:bikendra.lohar9807@email.com">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </a>
          </Button>
        </div>

        <div className="flex gap-3 justify-center">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Button key={label} variant="ghost" size="sm" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="mr-2 h-4 w-4" /> {label}
              </a>
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8">Ahmedabad, India · Available for software engineering opportunities</p>
      </div>
    </div>
  </section>
);
