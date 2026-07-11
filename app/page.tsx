import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import ChapterCard from "@/components/ChapterCard";

import { chapters } from "@/data/chapters";

export default function Home() {
  const unit1 = chapters.filter((chapter) => chapter.unit === "Unit 1");
  const unit2 = chapters.filter((chapter) => chapter.unit === "Unit 2");

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <Stats />

      {/* Chapters Section */}
      <section className="relative py-24">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-100 opacity-40 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Main Heading */}
          <div className="mb-20 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              📘 Class 9 • Information Technology (402)
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-800 md:text-5xl">
              Chapter-wise Notes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Learn every chapter with simple notes and downloadable PDFs.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 shadow-md">
              <span className="text-lg font-semibold text-slate-700">
                📚 {chapters.length} Chapters
              </span>
            </div>
          </div>

          {/* ================= UNIT 1 ================= */}
          <div className="mb-20">
            <div className="mb-10 text-center">
              <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-700">
                UNIT 1
              </span>

              <h3 className="mt-4 text-3xl font-bold text-slate-800">
                Employability Skills
              </h3>

              <p className="mt-2 text-slate-500">
                Develop communication, self-management, ICT, entrepreneurship,
                and green skills.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {unit1.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </div>

          {/* ================= UNIT 2 ================= */}
          <div>
            <div className="mb-10 text-center">
              <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold text-emerald-700">
                UNIT 2
              </span>

              <h3 className="mt-4 text-3xl font-bold text-slate-800">
                Subject Specific Skills
              </h3>

              <p className="mt-2 text-slate-500">
                Learn practical IT skills through hands-on exercises and projects.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {unit2.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}