import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Why Choose Me", href: "why-choose-me" },
    { label: "Process", href: "process" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-border/50 shadow-sm py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-primary text-white p-2 rounded-sm transition-transform group-hover:scale-105">
            <Scale className="h-6 w-6" />
          </div>
          <span className="font-heading text-xl md:text-2xl font-bold text-primary tracking-tight">
            John Smith Law
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <Button 
            onClick={() => handleNavClick('contact')}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-foreground py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
