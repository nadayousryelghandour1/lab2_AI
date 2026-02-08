import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainerCard from "@/components/TrainerCard";
import { trainers } from "@/data/trainers";
import { motion } from "framer-motion";

const Trainers = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Meet Our Trainers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Learn from experienced professionals who are passionate about sharing their expertise and helping you succeed.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Trainers;
