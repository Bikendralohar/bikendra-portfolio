import { Card } from "@/components/ui/card";
import { 
  User, 
  FileText, 
  Briefcase, 
  Code, 
  Users, 
  Globe, 
  Target, 
  MessageSquare 
} from "lucide-react";

const sections = [
  { icon: User, title: "Introduction & Philosophy", href: "#about" },
  { icon: FileText, title: "Resume/CV", href: "#resume" },
  { icon: Code, title: "Projects & Research", href: "#projects" },
  { icon: Briefcase, title: "Skills & Mastery", href: "#skills" },
  { icon: Users, title: "Leadership & Collaboration", href: "#experience" },
  { icon: Globe, title: "Global Awareness", href: "#global" },
  { icon: Target, title: "Future Aspirations", href: "#aspirations" },
  { icon: MessageSquare, title: "Testimonials", href: "#testimonials" },
];

export const TableOfContents = () => {
  return (
    <section id="contents" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Table of Contents
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <a
                key={index}
                href={section.href}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
