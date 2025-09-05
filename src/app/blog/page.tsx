"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API or CMS
    const samplePosts: BlogPost[] = [
      {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with Next.js 14",
        date: "2024-01-15",
        excerpt:
          "Learn how to build modern web applications with Next.js 14 and its new features.",
        tags: ["Next.js", "React", "Web Development"],
      },
      {
        slug: "mastering-typescript",
        title: "Mastering TypeScript for React Developers",
        date: "2024-01-10",
        excerpt:
          "A comprehensive guide to using TypeScript effectively in React applications.",
        tags: ["TypeScript", "React", "JavaScript"],
      },
      {
        slug: "building-portfolio-website",
        title: "Building a Stunning Portfolio Website",
        date: "2024-01-05",
        excerpt:
          "Tips and tricks for creating an impressive portfolio that showcases your skills.",
        tags: ["Portfolio", "Web Design", "Career"],
      },
    ];
    setPosts(samplePosts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              My Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development and
              technology.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
