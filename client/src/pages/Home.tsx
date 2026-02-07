import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  FileText, 
  Scale, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone
} from "lucide-react";

export default function Home() {
  const scrollTo = useScrollTo();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground overflow-x-hidden">
      <Navigation />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-muted/30 overflow-hidden">
          {/* Abstract decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-primary leading-[1.1] mb-6"
              >
                Clear, personal <br />
                <span className="text-secondary">legal guidance.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
              >
                I help individuals navigate legal issues with clarity and confidence. 
                Expert advice tailored to your specific situation.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollTo('contact')}
                  className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-md shadow-lg shadow-primary/20"
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollTo('services')}
                  className="border-primary/20 text-primary hover:bg-primary/5 text-lg h-14 px-8 rounded-md"
                >
                  View Services
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <SectionHeading title="About Me" centered={false} className="mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am an independent attorney dedicated to providing clear, practical legal advice tailored to your situation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  The legal system can be overwhelming. My goal is to strip away the complexity and focus on what matters most to you. With a focus on personal attention and transparent communication, I guide you through each step of your legal matter, ensuring you feel informed and empowered to make the right decisions.
                </p>
                
                <div className="border-l-4 border-secondary pl-6 py-2 bg-muted/30 rounded-r-lg">
                  <p className="font-heading text-xl font-bold text-primary italic">
                    "Law isn't just about rules; it's about finding the right path forward for people."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Placeholder for lawyer portrait using a generic professional image */}
                {/* Descriptive comment for unplash image */}
                {/* professional man lawyer suit office portrait */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                    alt="John Smith - Attorney" 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section-padding bg-muted/40">
          <div className="container-custom">
            <SectionHeading 
              title="Services" 
              subtitle="Comprehensive legal support tailored to your unique needs."
            />
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Family Law",
                  desc: "Compassionate support with divorce, child custody, alimony, and related domestic matters.",
                  icon: Users
                },
                {
                  title: "Immigration",
                  desc: "Expert guidance on visas, residency applications, citizenship, and complex immigration procedures.",
                  icon: Shield
                },
                {
                  title: "Contracts",
                  desc: "Drafting, reviewing, and negotiating agreements for individuals, freelancers, and small businesses.",
                  icon: FileText
                },
                {
                  title: "Civil Disputes",
                  desc: "Strategic advice and representation in personal disputes, mediation, and conflict resolution.",
                  icon: Scale
                },
                {
                  title: "Consultations",
                  desc: "One-time, focused legal consultations to answer your key questions and clarify your rights.",
                  icon: MessageSquare
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-primary">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
              
              {/* Call to Action Card */}
              <motion.div 
                variants={fadeInUp}
                className="bg-primary p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center text-white"
              >
                <h3 className="text-xl font-bold mb-3 font-heading">Not sure what you need?</h3>
                <p className="text-white/80 mb-6">Let's discuss your situation to find the best way forward.</p>
                <Button 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold w-full"
                  onClick={() => scrollTo('contact')}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE ME SECTION */}
        <section id="why-choose-me" className="section-padding bg-primary text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="container-custom relative z-10">
            <SectionHeading 
              title="Why Choose Me" 
              light={true}
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Personal Attention",
                  desc: "You work directly with me on every detail of your case, never handed off to an assistant.",
                  icon: Users
                },
                {
                  title: "Clear Communication",
                  desc: "I explain your options in simple, understandable language—no confusing legal jargon.",
                  icon: MessageSquare
                },
                {
                  title: "Flexible Appointments",
                  desc: "Remote and in-person meetings available by appointment to fit your busy schedule.",
                  icon: Clock
                },
                {
                  title: "Focused on Results",
                  desc: "I aim to achieve practical, timely outcomes that fit your real-world needs and goals.",
                  icon: CheckCircle2
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="flex justify-center md:justify-start mb-4">
                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading 
              title="How It Works" 
              subtitle="A simple, transparent process designed to give you peace of mind."
            />
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  desc: "We discuss your situation and goals in depth. I listen carefully to understand the full context of your legal matter."
                },
                {
                  step: "02",
                  title: "Strategy & Plan",
                  desc: "I outline your options and recommend a clear path forward, explaining the potential outcomes, timeline, and costs involved."
                },
                {
                  step: "03",
                  title: "Ongoing Support",
                  desc: "I guide you through each step until your matter is resolved, keeping you informed and prepared at every turn."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-12 last:mb-0 group"
                >
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-heading font-bold text-muted-foreground/20 group-hover:text-secondary/50 transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-heading">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <SectionHeading 
                    title="Contact" 
                    centered={false} 
                    className="mb-6"
                  />
                  <p className="text-xl text-muted-foreground mb-10">
                    Ready to discuss your situation? I'm here to listen and help you find a solution.
                  </p>
                  
                  <div className="space-y-6">
                    <a 
                      href="tel:+15551234567"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Call Me</div>
                        <div className="text-xl font-bold text-primary">+1 (555) 123-4567</div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:example@lawoffice.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
<div className="min-w-0 flex-1">
  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email Me</div>
  <div className="text-xl font-bold text-primary break-all">example@lawoffice.com</div>
</div>
                    </a>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>I respond as soon as possible during business hours.</span>
                  </div>
                </div>
                
                <div className="bg-primary relative hidden md:block">
                  {/* Decorative background image for contact section */}
                  {/* office desk writing notepad pen */}
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
                    alt="Office desk" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <blockquote className="font-heading text-2xl italic mb-6">
                      "Dedicated to protecting your rights and securing your future."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-12 bg-secondary rounded-full" />
                      <span className="font-medium">John Smith</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
