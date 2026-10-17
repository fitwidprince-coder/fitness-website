import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogContent } from "@/app/components/BlogContent";
import { SocialShare } from "@/app/components/SocialShare";

import { SITE_URL } from "@/lib/site";
const BASE_URL = SITE_URL;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.id === resolvedParams.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Prince Rajput Fitness Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.id}`,
      type: "article",
      images: [
        {
          url: `${BASE_URL}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${BASE_URL}${post.image}`],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                  <span>/</span>
                  <span>{post.category}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>

                <p className="text-white/90 text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <BlogContent content={post.content} />
            </div>

            {/* Social Share */}
            <SocialShare title={post.title} url={typeof window !== 'undefined' ? window.location.href : `https://yourwebsite.com/blog/${post.id}`} />

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12 border border-orange-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
                  PR
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">About Prince Rajput</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Certified Fitness Trainer & Nutrition Expert with 12+ years of experience helping clients
                    achieve their fitness goals through personalized training and evidence-based nutrition strategies.
                    Specializing in weight loss, muscle building, and injury recovery.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                      ISSA Certified
                    </span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                      NASM Certified
                    </span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                      Nutrition Specialist
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/?page=contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 hover:shadow-lg"
                    >
                      Get Personal Training
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Related Articles</h3>
                  <p className="text-gray-600">More fitness insights you might enjoy</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          <Link href={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{relatedPost.readTime}</span>
                          <Link
                            href={`/blog/${relatedPost.id}`}
                            className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Reading Progress & Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-gray-900 mb-1">Enjoyed this article?</h4>
                  <p className="text-gray-600 text-sm">Share it with fellow fitness enthusiasts</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                  <Link
                    href="/?page=contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                  >
                    Get Personal Training
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-semibold mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Weekly Fitness Insights
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Join thousands of fitness enthusiasts who receive expert tips, nutrition advice,
                workout guides, and exclusive content delivered straight to their inbox.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto border border-white/20">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                  Start Getting Fit Tips 🚀
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe anytime. Your privacy is protected.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Weekly fitness tips
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Nutrition guidance
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Workout plans
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Exclusive content
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}