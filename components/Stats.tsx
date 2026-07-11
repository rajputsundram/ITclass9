import { BookOpen, Download, GraduationCap } from "lucide-react";

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Total Chapters */}
          <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>

            <h2 className="text-5xl font-bold text-blue-600">
              6
            </h2>

            <p className="mt-2 text-lg font-medium text-gray-700">
              Total Chapters
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Complete chapter-wise computer notes.
            </p>

          </div>

          {/* Free Notes */}

          <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-5xl font-bold text-green-600">
              100%
            </h2>

            <p className="mt-2 text-lg font-medium text-gray-700">
              Free Notes
            </p>

            <p className="mt-3 text-sm text-gray-500">
              No registration. Read anytime.
            </p>

          </div>

          {/* Download */}

          <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
              <Download className="w-8 h-8 text-purple-600" />
            </div>

            <h2 className="text-4xl font-bold text-purple-600">
              PDF
            </h2>

            <p className="mt-2 text-lg font-medium text-gray-700">
              Download Available
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Download notes for offline study.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}