"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import WeekNav from "@/components/WeekNav";
import { getWeekNeighbors } from "@/data/weeks";
import type { WeekNotebookData } from "@/data/weeks-notebook";

type TabId = "contenido" | "ejercicios" | "bibliografia" | "reflexion";

type WeekNotebookProps = {
  data: WeekNotebookData;
};

type Block =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; text: string }
  | { type: "code"; text: string };

const tabs: { id: TabId; label: string }[] = [
  { id: "contenido", label: "Contenido" },
  { id: "ejercicios", label: "Ejercicios" },
  { id: "bibliografia", label: "Bibliografía" },
  { id: "reflexion", label: "Reflexión" },
];

const hashToTab: Record<string, TabId> = {
  "#contenido": "contenido",
  "#ejercicios": "ejercicios",
  "#bibliografia": "bibliografia",
  "#reflexion": "reflexion",
};

const hasEmoji = (line: string) => /\p{Extended_Pictographic}/u.test(line);

const isSectionHeading = (line: string) =>
  /^\d+\.\s+/.test(line) && (hasEmoji(line) || line === line.toUpperCase());

const isSubsectionHeading = (line: string) =>
  /^\d+\.\d+/.test(line) || /^Ejercicio\s+\d+/.test(line);

const isMinorHeading = (line: string) =>
  /:\s*$/.test(line) ||
  /^¿/.test(line) ||
  /^¡/.test(line) ||
  (hasEmoji(line) && /¿/.test(line));

const isImagePlaceholder = (line: string) => line.startsWith("[INSERTAR");

const isListItem = (line: string) =>
  /^[-•]\s?/.test(line) || /^\p{Extended_Pictographic}\s+/u.test(line);

const isNumberedItem = (line: string) =>
  /^\d+\.\s+/.test(line) && !isSectionHeading(line);

const isCodeLine = (line: string) =>
  line.startsWith("$") ||
  line.startsWith("C:\\") ||
  line.startsWith("<") ||
  line.startsWith("#") ||
  line.startsWith("mi-proyecto-web/") ||
  line.includes("mvn ") ||
  line.includes("openjdk") ||
  line.includes("javac") ||
  line.includes("pom.xml") ||
  /[├└│]/.test(line);

const cleanListItem = (line: string) =>
  line
    .replace(/^[-•]\s?/, "")
    .replace(/^\p{Extended_Pictographic}\s+/u, "")
    .replace(/^\d+\.\s+/, "");

const parseContent = (text: string): Block[] => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const blocks: Block[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];

  const flushList = () => {
    if (listItems.length) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length) {
      blocks.push({ type: "code", text: codeLines.join("\n") });
      codeLines = [];
    }
  };

  lines.forEach((line) => {
    if (isCodeLine(line)) {
      flushList();
      codeLines.push(line);
      return;
    }

    flushCode();

    if (isImagePlaceholder(line)) {
      flushList();
      blocks.push({ type: "image", text: line.replace(/^\[|\]$/g, "") });
      return;
    }

    if (isSectionHeading(line)) {
      flushList();
      blocks.push({ type: "heading", level: 2, text: line });
      return;
    }

    if (isSubsectionHeading(line)) {
      flushList();
      blocks.push({ type: "heading", level: 3, text: line });
      return;
    }

    if (isMinorHeading(line)) {
      flushList();
      blocks.push({ type: "heading", level: 4, text: line });
      return;
    }

    if (isListItem(line) || isNumberedItem(line)) {
      listItems.push(cleanListItem(line));
      return;
    }

    flushList();
    blocks.push({ type: "paragraph", text: line });
  });

  flushCode();
  flushList();

  return blocks;
};

const WeekNotebook = ({ data }: WeekNotebookProps) => {
  const [activeTab, setActiveTab] = useState<TabId>("contenido");
  const neighbors = useMemo(() => getWeekNeighbors(data.number), [data.number]);

  const contentBlocks = useMemo(
    () => parseContent(data.contentText || ""),
    [data.contentText]
  );
  const exerciseBlocks = useMemo(
    () => parseContent(data.exercisesText || ""),
    [data.exercisesText]
  );
  const reflectionBlocks = useMemo(
    () => parseContent(data.reflectionText || ""),
    [data.reflectionText]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const targetTab = hashToTab[window.location.hash];
    if (!targetTab) {
      return;
    }

    setActiveTab(targetTab);
    setTimeout(() => {
      const target = document.getElementById(targetTab);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, []);

  const renderBlocks = (blocks: Block[]) =>
    blocks.map((block, index) => {
      if (block.type === "heading") {
        const className =
          block.level === 2
            ? "section-title"
            : block.level === 3
            ? "subsection-title"
            : "minor-title";
        const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";

        return (
          <Tag key={`${block.type}-${index}`} className={className}>
            {block.text}
          </Tag>
        );
      }

      if (block.type === "list") {
        return (
          <ul key={`${block.type}-${index}`} className="content-list">
            {block.items.map((item, itemIndex) => (
              <li key={`${index}-item-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        );
      }

      if (block.type === "image") {
        return (
          <div key={`${block.type}-${index}`} className="image-placeholder">
            {block.text}
          </div>
        );
      }

      if (block.type === "code") {
        return (
          <pre key={`${block.type}-${index}`} className="code-block">
            <code>{block.text}</code>
          </pre>
        );
      }

      return (
        <p key={`${block.type}-${index}`} className="content-paragraph">
          {block.text}
        </p>
      );
    });

  const activeBlocks =
    activeTab === "contenido"
      ? contentBlocks
      : activeTab === "ejercicios"
      ? exerciseBlocks
      : reflectionBlocks;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-black-100/[0.06] pointer-events-none" />

      <div className="relative">
        <div className="container mx-auto px-6 py-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 mb-8 border border-slate-200 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all bg-white/90"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver
          </Link>

          <WeekNav currentWeek={data.number} />

          <div className="max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] border border-slate-200 rounded-full text-slate-500">
                Cuaderno de Aprendizaje
              </span>
              <span className="px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] border border-slate-200 rounded-full text-slate-500 animate-2025">
                2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight animate-rise text-slate-900">
              Semana {data.number}: {data.title}
            </h1>
            <p className="mt-3 text-lg text-slate-600 animate-rise animation-delay-150">
              {data.subtitle}
            </p>
            <p className="mt-4 text-slate-600 max-w-2xl animate-rise animation-delay-300">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.28em] border transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {activeTab === "bibliografia" ? (
          <div id="bibliografia" className="space-y-6 animate-rise">
            {data.bibliography.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {data.bibliography.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow-md transition-all"
                  >
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-500 break-all">
                      {item.url}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6 text-slate-500">
                Bibliografía en construcción.
              </div>
            )}
          </div>
        ) : (
          <div
            id={activeTab}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-lg animate-rise"
          >
            {renderBlocks(activeBlocks)}
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href={neighbors.prev ? `/projects/semana-${neighbors.prev}` : "/#projects"}
            className="text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-800 transition-all"
          >
            {neighbors.prev ? `Semana ${neighbors.prev}` : "Volver al inicio"}
          </Link>
          <Link
            href="/#projects"
            className="text-xs uppercase tracking-[0.3em] border border-slate-200 px-4 py-2 rounded-full text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all"
          >
            Ver todas las semanas
          </Link>
          <Link
            href={neighbors.next ? `/projects/semana-${neighbors.next}` : "/#projects"}
            className="text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-800 transition-all"
          >
            {neighbors.next ? `Semana ${neighbors.next}` : "Fin del cuaderno"}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .section-title {
          margin: 32px 0 20px;
          background: #eef2ff;
          color: #1e1b4b;
          border: 1px solid #c7d2fe;
          padding: 14px 22px;
          border-radius: 12px;
          font-size: 1.25rem;
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }
        .subsection-title {
          margin: 26px 0 12px;
          color: #1f2a44;
          font-size: 1.1rem;
          font-weight: 600;
          padding-left: 16px;
          border-left: 4px solid #6366f1;
        }
        .minor-title {
          margin: 18px 0 8px;
          color: #4c5fd0;
          font-size: 1rem;
          font-weight: 600;
        }
        .content-paragraph {
          margin-bottom: 14px;
          color: #475569;
          line-height: 1.7;
        }
        .content-list {
          margin: 12px 0 18px 22px;
          color: #475569;
          list-style: disc;
        }
        .content-list li {
          margin-bottom: 8px;
        }
        .image-placeholder {
          margin: 18px 0;
          background: #f8fafc;
          border: 2px dashed #c7d2fe;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          color: #64748b;
          font-style: italic;
        }
        .image-placeholder::before {
          content: "📷";
          display: block;
          font-size: 2rem;
          margin-bottom: 8px;
        }
        .code-block {
          margin: 18px 0;
          background: #0f172a;
          color: #e2e8f0;
          padding: 18px 20px;
          border-radius: 14px;
          font-size: 0.9rem;
          overflow-x: auto;
          line-height: 1.6;
          font-family: "Courier New", monospace;
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-2025 {
          0%,
          100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }
        .animate-rise {
          animation: rise 0.6s ease-out both;
        }
        .animate-2025 {
          animation: pulse-2025 2.6s ease-in-out infinite;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default WeekNotebook;
