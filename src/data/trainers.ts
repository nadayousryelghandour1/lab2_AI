import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import type { Trainer } from "@/components/TrainerCard";

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    specialty: "Data Science & AI",
    bio: "With over a decade of experience at leading tech firms, Sarah brings complex data concepts to life through practical, project-based teaching that empowers learners at every level.",
    image: trainer1,
  },
  {
    id: 2,
    name: "Dr. James Carter",
    specialty: "Cloud Architecture & DevOps",
    bio: "A certified AWS Solutions Architect and published researcher, James combines academic rigor with hands-on industry know-how to prepare students for enterprise-scale challenges.",
    image: trainer2,
  },
  {
    id: 3,
    name: "Liam Brooks",
    specialty: "Full-Stack Development",
    bio: "Former startup CTO turned educator, Liam specializes in modern JavaScript ecosystems and mentors aspiring developers through real-world product builds.",
    image: trainer3,
  },
];
