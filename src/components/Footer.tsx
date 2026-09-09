import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => (
  <footer id="contact" className="bg-card border-t border-border py-12">
    <div className="container-custom"><div className="max-w-5xl mx-auto text-center space-y-6">
      <h3 className="text-2xl font-bold">Let’s Connect</h3>
      <p className="text-muted-foreground max-w-md mx-auto">Open to software engineering opportunities, collaborations, and conversations about technology.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="outline" asChild><a href="mailto:bikendra.lohar9807@email.com"><Mail className="mr-2 h-4 w-4" /> Email</a></Button>
        <Button variant="outline" asChild><a href="https://www.linkedin.com/in/bikendra-lohar-a8817928a/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a></Button>
        <Button variant="outline" asChild><a href="https://github.com/Bikendralohar" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
        <Button variant="outline" asChild><a href="https://x.com/BikendraL26949" target="_blank" rel="noopener noreferrer"><Twitter className="mr-2 h-4 w-4" /> X</a></Button>
      </div>
      <div className="pt-8 border-t border-border w-full"><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bikendra Lohar. All rights reserved.</p><p className="text-xs text-muted-foreground mt-2">Built with React, TypeScript, and Tailwind CSS</p></div>
    </div></div>
  </footer>
);
