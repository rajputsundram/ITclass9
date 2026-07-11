import Link from "next/link";
import {
  Download,
  FileText,
  ArrowRight,
  Lock,
} from "lucide-react";

interface ChapterCardProps {
  chapter: {
    id: number;
    unit: string;
    title: string;
    icon: React.ElementType;
    color: string;
    pdf?: string;
    uploaded: boolean;
  };
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  const Icon = chapter.icon;

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header */}
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${chapter.color}`}
      >
        {/* Status Badge */}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow ${
            chapter.uploaded
              ? "bg-white text-green-700"
              : "bg-yellow-400 text-slate-900"
          }`}
        >
          {chapter.uploaded ? "FREE PDF" : "COMING SOON"}
        </span>

        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-12 w-12 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Unit */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          {chapter.unit}
        </p>

        {/* Chapter */}
        <p className="mt-1 text-sm text-slate-500">
          Chapter {chapter.id}
        </p>

        {/* Title */}
        <h2 className="mt-2 min-h-[64px] text-xl font-bold text-slate-800">
          {chapter.title}
        </h2>

        {/* PDF Badge */}
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            <FileText size={16} />
            PDF Notes
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          <Link
            href={`/notes/${chapter.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Read Notes
            <ArrowRight size={18} />
          </Link>

          {chapter.uploaded ? (
            <a
              href={chapter.pdf}
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              <Download size={18} />
              Download PDF
            </a>
          ) : (
            <button
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-gray-400 px-5 py-3 font-semibold text-white"
            >
              <Lock size={18} />
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}