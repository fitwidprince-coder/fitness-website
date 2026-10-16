"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { CTASection } from "../components/home/CTASection";

const categories = ["All", "Weight Loss", "Nutrition", "Injury Recovery", "Meal Planning", "Strength Training", "Lifestyle"];

export default function BlogPage() {
  // Initialize with persisted value or default to 12
  const [visibleBlogs, setVisibleBlogs] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('blogVisibleCount');
      return saved ? parseInt(saved, 10) : 12;
    }
    return 12;
  });

  // Persist visibleBlogs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('blogVisibleCount', visibleBlogs.toString());
  }, [visibleBlogs]);

  const loadMoreBlogs = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  const displayedBlogs = blogPosts.slice(0, visibleBlogs);
  const hasMoreBlogs = visibleBlogs < blogPosts.length;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold mb-4">
              Fitness Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Fitness Tips & Nutrition Advice
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay motivated and informed with science-backed fitness insights, workout guides,
              and nutrition strategies from certified trainer Prince Rajput.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          {visibleBlogs > 12 && (
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
                <span>📚</span>
                Showing {visibleBlogs} of {blogPosts.length} articles
                <span className="text-xs">(progress saved)</span>
              </span>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {displayedBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {hasMoreBlogs ? (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreBlogs}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors hover:shadow-lg"
              >
                Load More Articles ({blogPosts.length - visibleBlogs} remaining)
              </button>
            </div>
          ) : (
            <div className="text-center mt-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-lg">
                <span className="font-semibold">All articles loaded!</span>
                <span className="text-sm">Showing {blogPosts.length} of {blogPosts.length} articles</span>
              </div>
              {visibleBlogs > 12 && (
                <button
                  onClick={() => setVisibleBlogs(12)}
                  className="text-sm text-gray-500 hover:text-orange-600 transition-colors underline"
                >
                  Reset to show only 12 articles
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Fitness Tips
            </h2>
            <p className="text-gray-300 mb-8">
              Get weekly fitness insights, nutrition advice, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <CTASection />
    </div>
  );
}