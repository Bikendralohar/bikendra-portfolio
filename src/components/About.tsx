import { Card } from "@/components/ui/card";
import { Lightbulb, BookOpen, Plane } from "lucide-react";

export const About = () => (
  <section id="about" className="section-padding">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <Card className="p-8 md:p-12 shadow-elegant mb-8">
          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="leading-relaxed mb-6">
              I’m Bikendra Lohar, a curious and motivated Computer Science Engineering student and aspiring Software Engineer who is driven by curiosity and the desire to keep growing. I enjoy learning new things, exploring new ideas, and experimenting with technologies that challenge me to think differently.
            </p>
            <p className="leading-relaxed mb-6">
              For me, every new technology is an opportunity to build something, solve a problem, or discover a better way of doing things. I enjoy turning what I learn into practical projects and continuously improving my engineering skills.
            </p>
            <p className="leading-relaxed">
              Beyond coding, I enjoy solo traveling, reading books, and playing games. My background and the journey that shaped me motivate me to work toward becoming a successful Software Engineer. I’m always looking for opportunities to learn, build, and challenge myself.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-soft hover:shadow-elegant transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"><Lightbulb className="h-7 w-7 text-primary" /></div>
              <h3 className="font-semibold text-lg">Curiosity</h3>
              <p className="text-sm text-muted-foreground">Always learning new ideas, technologies, and better ways to solve problems.</p>
            </div>
          </Card>
          <Card className="p-6 shadow-soft hover:shadow-elegant transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"><BookOpen className="h-7 w-7 text-primary" /></div>
              <h3 className="font-semibold text-lg">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">Building practical experience through projects, problem solving, and hands-on development.</p>
            </div>
          </Card>
          <Card className="p-6 shadow-soft hover:shadow-elegant transition-all">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"><Plane className="h-7 w-7 text-primary" /></div>
              <h3 className="font-semibold text-lg">Beyond Code</h3>
              <p className="text-sm text-muted-foreground">Solo travel, books, and games keep me independent, curious, and open to new perspectives.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
