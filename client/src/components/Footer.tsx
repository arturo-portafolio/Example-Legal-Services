import { Facebook, Instagram, Twitter, Phone, Scale } from "lucide-react";
import { SiTiktok } from "react-icons/si"; // Using generic fallback if Lucide doesn't have TikTok, but let's stick to Lucide context

// Lucide doesn't have a TikTok icon by default in some versions, 
// so we'll create a simple SVG replacement or use a generic one.
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-secondary" />
              <span className="font-heading text-xl font-bold tracking-tight">John Smith Law</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Providing clear, personal legal guidance to individuals and families.
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: TikTokIcon, label: "TikTok", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Contact Direct */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-lg font-medium hover:text-secondary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </a>
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} John Smith Law. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
