import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time GNSS Analytics System",
    role: "Lead Developer",
    period: "Apr 2026 – Present",
    description: "Engineered a distributed pipeline for real-time GNSS/NMEA processing and anomaly detection. Built streaming workflows and dashboards for faster debugging and operational visibility.",
    highlights: ["10,000+ messages/sec with zero data loss", "95.89% anomaly detection success rate", "50% faster debugging with Streamlit dashboards"],
    technologies: ["Python", "Apache Kafka", "Apache Spark", "Spark Streaming", "Streamlit", "RTKLib"],
    github: "https://github.com/Bikendralohar/realtime_satelite_anamoly_detection",
  },
  {
    title: "ATS Resume Analyser",
    role: "Backend Developer",
    period: "Mar 2026 – Present",
    description: "Built an AI-driven recruitment engine for resume parsing, skill extraction, and semantic matching against job descriptions, with scalable backend services for real-time evaluation.",
    highlights: ["AI-powered resume parsing and skill extraction", "Semantic candidate-to-job matching", "Real-time resume processing and evaluation"],
    technologies: ["React", "Node.js", "Express.js", "Multer", "Google Gemini", "Groq", "Recharts"],
    github: "https://github.com/Bikendralohar/TalentMatch-Engine",
  },
  {
    title: "University Placement Hub",
    role: "Backend Developer / UI Designer",
    period: "Apr 2026 – Jul 2026",
    description: "Developed a role-based university placement portal that streamlines student, recruiter, and TPO workflows with automated candidate scoring and real-time ATS tracking.",
    highlights: ["Designed for 500+ users", "60% reduction in manual screening workload", "150ms latency under load testing"],
    technologies: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "JWT", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/Bikendralohar/uni-placement-hub",
  },
  {
    title: "IntellMeet — AI Chat",
    role: "AI / Full-Stack Project",
    period: "Project",
    description: "IntellMeet is an AI-powered enterprise meeting and collaboration platform, organized as separate backend and frontend applications.",
    highlights: ["AI-powered meeting and collaboration concept", "Separate frontend and backend architecture", "Live deployment available"],
    technologies: ["React", "Node.js", "Express", "AI"],
    github: "https://github.com/Bikendralohar/intellmeet-AI-chat",
    live: "https://intellmeet-ai-chat.vercel.app/",
  },
  {
    title: "Crop Disease Detection",
    role: "AI Project",
    period: "Project",
    description: "Built an AI-based crop disease analyser that helps identify whether crops are diseased from leaf images, with model training, evaluation, and a web interface.",
    highlights: ["Image-based disease detection", "Model training and evaluation", "Web interface for disease analysis"],
    technologies: ["Python", "AI/ML", "Image Classification"],
    github: "https://github.com/Bikendralohar/crop_disease_analyser",
  },
];

export const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container-custom">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of systems, AI applications, and full-stack projects I’ve built.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="p-7 shadow-soft hover:shadow-elegant transition-all flex flex-col">
              <div className="flex-1 space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground"><span>{project.role}</span><span>•</span><span>{project.period}</span></div>
                </div>
                <p className="text-foreground/85 leading-relaxed">{project.description}</p>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">HIGHLIGHTS</h4>
                  <ul className="space-y-1 text-sm text-foreground/80">{project.highlights.map((item) => <li key={item}>• {item}</li>)}</ul>
                </div>
                <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
              </div>
              <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t border-border">
                <Button variant="outline" size="sm" asChild><a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> Source Code</a></Button>
                {project.live && <Button size="sm" asChild><a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" /> Live Project</a></Button>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
