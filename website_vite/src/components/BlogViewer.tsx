import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogViewer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState<string>('Loading...');

  useEffect(() => {
    if (!slug) return;

    fetch(`/blogs/${slug}.html`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((html) => setHtmlContent(html))
      .catch(() => setHtmlContent('<p class="text-red-500">Blog not found or failed to load.</p>'));
  }, [slug]);

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700 rounded transition"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/30 p-8 rounded-xl border border-blue-500/20 shadow-xl">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogViewer;
