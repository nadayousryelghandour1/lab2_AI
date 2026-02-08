import { motion } from "framer-motion";

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

const TrainerCard = ({ trainer, index }: { trainer: Trainer; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
  >
    <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-secondary/20">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <h3 className="font-display text-xl font-semibold text-card-foreground">{trainer.name}</h3>
    <span className="mt-1 text-sm font-medium text-secondary">{trainer.specialty}</span>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{trainer.bio}</p>
  </motion.div>
);

export default TrainerCard;
