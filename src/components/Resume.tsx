import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Code, Heart } from "lucide-react";

export const Resume = () => (
  <section id="resume" className="section-padding bg-muted/30">
    <div className="container-custom">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Professional Snapshot</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        <Card className="p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><GraduationCap className="h-6 w-6 text-primary" /></div><h3 className="text-2xl font-semibold">Education</h3></div>
          <div className="space-y-5">
            <div className="border-l-2 border-primary pl-6"><p className="text-sm text-muted-foreground">Jul 2023 – Present</p><h4 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h4><p className="text-muted-foreground">Pandit Deendayal Energy University (PDEU), Gandhinagar, India</p><p className="text-sm mt-1">CGPA: 7.51 / 10.0</p></div>
            <div className="border-l-2 border-primary/50 pl-6"><p className="text-sm text-muted-foreground">Jun 2020 – May 2022</p><h4 className="text-lg font-semibold">Class XII (PCMC)</h4><p className="text-muted-foreground">Annapurna Model College, Butwal, Nepal</p><p className="text-sm mt-1">CGPA: 2.98 / 4.0</p></div>
          </div>
        </Card>

        <Card className="p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Briefcase className="h-6 w-6 text-primary" /></div><h3 className="text-2xl font-semibold">Internship</h3></div>
          <div className="border-l-2 border-primary pl-6"><p className="text-sm text-muted-foreground">Jun 2026 – Aug 2026 · Remote · Bengaluru, Karnataka</p><h4 className="text-lg font-semibold">Web Developer Internship — Zidio Development</h4><p className="text-sm mt-2">Developed and maintained end-to-end web applications, collaborated with team members using Git/GitHub, and implemented responsive UI using HTML, CSS, JavaScript, and React.</p></div>
        </Card>

        <Card className="p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Code className="h-6 w-6 text-primary" /></div><h3 className="text-2xl font-semibold">Core Technologies</h3></div>
          <div className="flex flex-wrap gap-2">{["C", "Python", "SQL", "Java", "JavaScript", "React.js", "Node.js", "Express", "MongoDB", "MySQL", "Apache Kafka", "PySpark", "Docker", "Kubernetes", "AWS", "GitHub", "CI/CD"].map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 shadow-soft"><div className="flex items-center gap-3 mb-5"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Award className="h-6 w-6 text-primary" /></div><h3 className="text-xl font-semibold">Awards & Achievements</h3></div><ul className="space-y-2 text-sm text-foreground/90"><li>• Volunteered at the AIMV 2nd IEEE International Conference.</li><li>• Solved 150+ problems across LeetCode, Codeforces, and GeeksforGeeks.</li><li>• LeetCode contest rating: 1629.</li><li>• Codeforces contest rating: 579.</li><li>• Received an NPTEL certificate in understanding incubation and entrepreneurship.</li></ul></Card>
          <Card className="p-8 shadow-soft"><div className="flex items-center gap-3 mb-5"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Heart className="h-6 w-6 text-primary" /></div><h3 className="text-xl font-semibold">Interests</h3></div><ul className="space-y-2 text-sm text-foreground/90"><li>• Learning new technologies and ideas</li><li>• Solo traveling</li><li>• Reading books</li><li>• Playing games</li></ul></Card>
        </div>
      </div>
    </div>
  </section>
);
