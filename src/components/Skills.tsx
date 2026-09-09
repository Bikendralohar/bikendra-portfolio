import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Cloud, Users2 } from "lucide-react";

const categories = [
  { title: "Programming Languages", icon: Code2, skills: ["C", "Python", "SQL", "Java", "JavaScript"] },
  { title: "Frameworks & Libraries", icon: Server, skills: ["React.js", "Node.js", "Express", "REST APIs", "HTML", "CSS", "Tailwind CSS", "Socket.IO", "PySpark", "Spark Streaming", "Recharts"] },
  { title: "Data & Streaming", icon: Database, skills: ["MongoDB", "MySQL", "Apache Kafka", "Apache Spark", "Multer"] },
  { title: "Tools & Platforms", icon: Cloud, skills: ["Docker", "Kubernetes", "AWS", "Hadoop", "GitHub", "Tableau", "Power BI", "CI/CD", "Streamlit", "RTKLib"] },
  { title: "Professional Skills", icon: Users2, skills: ["Teamwork", "Time Management", "Collaboration", "Problem Solving"] },
];

export const Skills = () => (
  <section id="skills" className="section-padding bg-muted/30">
    <div className="container-custom">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Technologies and professional capabilities developed through coursework, internship, and hands-on projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ title, icon: Icon, skills }) => (
            <Card key={title} className="p-7 shadow-soft hover:shadow-elegant transition-all">
              <div className="flex items-center gap-3 mb-5"><div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center"><Icon className="h-5 w-5 text-primary" /></div><h3 className="text-xl font-semibold">{title}</h3></div>
              <div className="flex flex-wrap gap-2">{skills.map((skill) => <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>)}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
