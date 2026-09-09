import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-muted-foreground mb-12">Practical software development experience through internship and team collaboration.</p>

        <Card className="p-8 shadow-soft hover:shadow-elegant transition-all">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Briefcase className="h-6 w-6 text-primary" /></div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Web Developer Internship</h3>
              <div className="flex flex-wrap gap-2 text-muted-foreground mt-2 mb-4">
                <span className="font-medium">Zidio Development</span><span>•</span><span>Jun 2026 – Aug 2026</span><span>•</span><span>Remote · Bengaluru, Karnataka</span>
              </div>
              <ul className="space-y-2 text-foreground/85 mb-6">
                <li>• Developed and maintained end-to-end web applications using JavaScript and Python.</li>
                <li>• Collaborated with team members effectively using Git and GitHub.</li>
                <li>• Implemented responsive UI with HTML, CSS, JavaScript, and React.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Kubernetes", "Docker", "JavaScript", "Python"].map((tech) => <span key={tech} className="px-3 py-1 rounded-full bg-secondary/20 text-sm">{tech}</span>)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
