import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

/**
 * Server component: reads a markdown file from /Legal and renders it with
 * J.Zeppelin typographic styling. No animation — legal copy should be
 * static, legible, and indexable by search engines.
 */
export default function LegalPage({ file }) {
  const fullPath = path.join(process.cwd(), 'Legal', file);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(raw);

  const components = {
    h1: ({ children }) => (
      <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] mt-0 mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl md:text-3xl tracking-tight uppercase mt-14 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-lg md:text-xl tracking-tight uppercase mt-10 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading text-base tracking-widest uppercase text-muted-foreground mt-8 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="font-body text-[15px] leading-relaxed text-foreground/90 mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="font-body text-[15px] leading-relaxed text-foreground/90 mb-5 space-y-2 list-disc pl-6 marker:text-muted-foreground/60">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="font-body text-[15px] leading-relaxed text-foreground/90 mb-5 space-y-2 list-decimal pl-6 marker:text-muted-foreground/60">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    a: ({ href, children }) => {
      const isInternal = href?.startsWith('/') || href?.startsWith('#');
      const className =
        'text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors';
      if (isInternal) {
        return (
          <Link href={href} className={className}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-foreground pl-5 py-1 my-6 font-body text-[15px] text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-0 border-t border-foreground/15" />,
    code: ({ inline, children }) =>
      inline ? (
        <code className="font-mono text-[0.85em] px-1.5 py-0.5 bg-foreground/5 border border-foreground/10">
          {children}
        </code>
      ) : (
        <pre className="font-mono text-xs bg-foreground/5 border border-foreground/10 p-4 overflow-x-auto my-5">
          <code>{children}</code>
        </pre>
      ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto border-2 border-foreground">
        <table className="w-full border-collapse font-body text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-foreground text-background">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-foreground/15 last:border-b-0">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-heading text-xs tracking-widest uppercase">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 align-top text-foreground/90 border-r border-foreground/10 last:border-r-0">
        {children}
      </td>
    ),
  };

  return (
    <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to home
      </Link>

      <article className="max-w-3xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>

        {data?.lastUpdated && (
          <p className="mt-14 pt-6 border-t border-foreground/10 font-body text-xs text-muted-foreground/50">
            Document version: {data.lastUpdated}
          </p>
        )}
      </article>
    </main>
  );
}
