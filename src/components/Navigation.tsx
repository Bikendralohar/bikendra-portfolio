import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
    <div className="container-custom"><div className="flex items-center justify-between h-16 md:h-20">
      <a href="#home" className="text-xl md:text-2xl font-bold text-primary">Bikendra</a>
      <div className="hidden md:flex items-center space-x-1">{navItems.map((item) => <a key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent">{item.label}</a>)}</div>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
    </div>{isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border"><div className="flex flex-col space-y-2">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg">{item.label}</a>)}</div></div>}</div>
  </nav>;
};
