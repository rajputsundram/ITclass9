import Link from 'next/link'
import {
  BookOpen,
  Download,
  FileText,
  ArrowLeft,
} from 'lucide-react'

const chapters = [
  {
    id: 1,
    title: 'Communication Skills–I',
    description:
      'Learn about communication, methods of communication, active listening, barriers and body language.',
    pdf: '/pdf/Chapter -1 Questions.pdf',
  },
  {
    id: 2,
    title: 'Self-Management Skills–I',
    description:
      'Learn about self-confidence, motivation, stress management, goal setting and self-management.',
    pdf: '/pdf/Chapter -2 Question.pdf',
  },
  {
    id: 3,
    title: 'ICT Skills–I',
    description:
      'Learn about ICT, computers, hardware, software, internet, email and other ICT tools.',
    pdf: '/pdf/Chapter 3 Question.pdf',
  },
  {
    id: 4,
    title: 'Entrepreneurial Skills–I',
    description:
      'Learn about entrepreneurship, entrepreneurs, opportunities, risk-taking and entrepreneurial qualities.',
    pdf: '/pdf/Chapter 4 Question.pdf',
  },
  {
    id: 5,
    title: 'Green Skills–I',
    description:
      'Learn about green skills, sustainable development, environmental conservation and the 3Rs.',
    pdf: '/pdf/Chapter 5 Question.pdf',
  },
]

export default function Class9NotesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 mb-5"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <BookOpen className="text-blue-600" size={28} />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Class 9 Employability Skills
              </h1>

              <p className="text-slate-500 mt-1">
                Chapter-wise Notes and Study Material
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chapters */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            Chapters
          </h2>

          <p className="text-slate-500 mt-1">
            Select a chapter to read or download the PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-6"
            >
              {/* Chapter number */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FileText
                    size={24}
                    className="text-blue-600"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    Chapter {chapter.id}
                  </p>

                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {chapter.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-6 mt-4">
                {chapter.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={chapter.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  <BookOpen size={17} />
                  Read PDF
                </a>

                <a
                  href={chapter.pdf}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                >
                  <Download size={17} />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}