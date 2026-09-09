import { Card } from "@/components/ui/card";
import { Target, Rocket, BookOpen } from "lucide-react";

export const Aspirations = () => (
  <section id="aspirations" className="section-padding">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Career Direction</h2>
        <p className="text-center text-muted-foreground mb-12">Focused on becoming a successful Software Engineer through continuous learning and practical problem solving.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 shadow-soft"><Target className="h-8 w-8 text-primary mb-4" /><h3 className="text-xl font-semibold mb-2">Build</h3><p className="text-sm text-muted-foreground">Create useful, reliable software and turn ideas into practical products.</p></Card>
          <Card className="p-7 shadow-soft"><Rocket className="h-8 w-8 text-primary mb-4" /><h3 className="text-xl font-semibold mb-2">Grow</h3><p className="text-sm text-muted-foreground">Take on challenging engineering problems and grow through real-world experience.</p></Card>
          <Card className="p-7 shadow-soft"><BookOpen className="h-8 w-8 text-primary mb-4" /><h3 className="text-xl font-semibold mb-2">Keep Learning</h3><p className="text-sm text-muted-foreground">Stay curious about new technologies, ideas, and better ways of building software.</p></Card>
        </div>
      </div>
    </div>
  </section>
);
