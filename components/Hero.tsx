export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">

      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              📘 Class 9 Information Technology Notes
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
              Learn IT
              <br />
              <span className="text-yellow-300">
                Chapter by Chapter
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Welcome to the <strong>GVIS Class 9 IT Notes Portal</strong>.
              Read well-organized chapter-wise notes online or download PDFs
              anytime to prepare for your exams.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-yellow-300">
                📖 Start Learning
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                📚 Browse Chapters
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

              <h2 className="text-3xl font-bold text-white">
                👋 Welcome Students
              </h2>

              <p className="mt-4 text-slate-200 leading-7">
                Everything you need for <strong>Class 9 Information Technology</strong>
                <span> is available in one place.</span>
                 
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <div className="text-3xl">📚</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Chapter-wise Notes
                    </h3>
                    <p className="text-sm text-slate-300">
                      Easy to understand and exam-oriented.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <div className="text-3xl">📖</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Read Online
                    </h3>
                    <p className="text-sm text-slate-300">
                      Access notes directly in your browser.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <div className="text-3xl">⬇️</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Download PDFs
                    </h3>
                    <p className="text-sm text-slate-300">
                      Save notes for offline study.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <div className="text-3xl">💯</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Free Access
                    </h3>
                    <p className="text-sm text-slate-300">
                      Available for all GVIS students.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}