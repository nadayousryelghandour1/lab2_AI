import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
        <GraduationCap className="h-5 w-5 text-secondary" />
        SmartTrain
      </div>
      <p className="max-w-md text-sm text-muted-foreground">
        Empowering professionals with modern, industry-relevant training programs since 2020.
      </p>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Smart Training Center. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
