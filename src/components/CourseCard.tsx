import { motion } from "framer-motion";
import { Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
}

const levelColor: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Intermediate: "bg-amber-100 text-amber-800 border-amber-200",
  Advanced: "bg-rose-100 text-rose-800 border-rose-200",
};

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
  >
    <span className="mb-4 text-3xl">{course.icon}</span>
    <h3 className="font-display text-xl font-semibold text-card-foreground">{course.name}</h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

    <div className="mt-5 flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> {course.duration}
      </span>
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <BarChart3 className="h-3.5 w-3.5" /> {course.level}
      </span>
      <Badge variant="outline" className={`ml-auto text-[10px] ${levelColor[course.level]}`}>
        {course.level}
      </Badge>
    </div>
  </motion.div>
);

export default CourseCard;
