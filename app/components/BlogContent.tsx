"use client";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="blog-content prose prose-lg max-w-none">
      <style jsx global>{`
        .blog-content h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          border-bottom: 2px solid #f97316;
          padding-bottom: 0.5rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-content p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }
        .blog-content ul, .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .blog-content li {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
        }
        .blog-content ul li {
          list-style-type: disc;
          list-style-color: #f97316;
        }
        .blog-content ol li {
          list-style-type: decimal;
          list-style-color: #f97316;
        }
        .blog-content blockquote {
          border-left: 4px solid #f97316;
          background: #fef3c7;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
          font-style: italic;
          color: #92400e;
        }
        .blog-content blockquote p {
          margin-bottom: 0;
          font-size: 1.25rem;
        }
        .blog-content strong, .blog-content b {
          color: #1f2937;
          font-weight: 700;
        }
        .blog-content em, .blog-content i {
          color: #7c3aed;
          font-style: italic;
        }
        .blog-content cite {
          font-style: normal;
          color: #6b7280;
          font-size: 0.875rem;
        }
        .blog-content hr {
          border: none;
          height: 2px;
          background: linear-gradient(to right, #f97316, #dc2626);
          margin: 2rem 0;
        }
        .blog-content code {
          background: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.875rem;
          color: #dc2626;
        }
        .blog-content pre {
          background: #1f2937;
          color: #f9fafb;
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .blog-content pre code {
          background: none;
          padding: 0;
          color: inherit;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .blog-content th, .blog-content td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }
        .blog-content th {
          background: #f97316;
          color: white;
          font-weight: 600;
        }
        .blog-content tr:nth-child(even) {
          background: #f9fafb;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}