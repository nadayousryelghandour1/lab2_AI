import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";

const Courses = () => (
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
            Our Courses
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Industry-aligned programs crafted to give you practical, job-ready skills — whether you're just starting out or leveling up.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Courses;
