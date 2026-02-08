import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
    </div>

    <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-secondary"
      >
        ✦ Enrolling Now — Spring 2026
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl"
      >
        Upgrade Your Skills with{" "}
        <span className="text-secondary">Modern Training</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70"
      >
        Gain industry-ready expertise through hands-on courses led by seasoned professionals. 
        From data science to leadership — we prepare you for what's next.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
          <Link to="/courses">
            View Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-foreground/20 bg-card text-foreground hover:bg-card/90 px-8">
          <Link to="/trainers">
            <Users className="mr-2 h-4 w-4" /> Meet Our Trainers
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
