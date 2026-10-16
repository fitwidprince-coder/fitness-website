import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function TopTrendingBlogs() {
  // Get first 6 blogs
  const trendingBlogs = blogPosts.slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="h-4 w-4" />
            Trending Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Trending Blogs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the most popular fitness and nutrition insights that are helping thousands
            achieve their health goals. Stay ahead with expert-backed content.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {trendingBlogs.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
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
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold rounded-full shadow-md">
                    #{index + 1} Trending
                  </span>
                </div>
                <div className="absolute top-4 right-4">
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

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-red-600 font-semibold group-hover:translate-x-1 transition-all duration-200"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            <span>Explore More Blogs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-3">
            Discover {blogPosts.length} expert articles on fitness, nutrition, and wellness
          </p>
        </div>
      </div>
    </section>
  );
}