"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { FaArrowLeft } from "react-icons/fa";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API or CMS
    const samplePosts: BlogPost[] = [
      {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with Next.js 14",
        date: "2024-01-15",
        content: `
# Getting Started with Next.js 14

Next.js 14 introduces several exciting features that make building modern web applications even easier. In this post, we'll explore the key features and how to get started.

## What's New in Next.js 14

### App Router
The new App Router provides a more intuitive way to organize your application with nested routes and layouts.

### Server Components
Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance.

### Turbopack
The new bundler that's up to 700x faster than Webpack for development.

## Getting Started

To create a new Next.js 14 project, run:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
\`\`\`

This will set up a new project with TypeScript, Tailwind CSS, and the App Router.

## Conclusion

Next.js 14 is a powerful framework that makes it easy to build fast, scalable web applications. With its new features and improved developer experience, it's the perfect choice for modern web development.
        `,
        tags: ["Next.js", "React", "Web Development"],
      },
      {
        slug: "mastering-typescript",
        title: "Mastering TypeScript for React Developers",
        date: "2024-01-10",
        content: `
# Mastering TypeScript for React Developers

TypeScript has become an essential tool for React developers. In this comprehensive guide, we'll explore advanced TypeScript concepts and best practices for React applications.

## Why TypeScript?

TypeScript provides:
- Static type checking
- Better IDE support
- Improved code maintainability
- Enhanced developer experience

## Advanced Types

### Utility Types
TypeScript provides several utility types that make working with complex types easier:

\`\`\`typescript
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type PickUser = Pick<User, 'name' | 'email'>;
\`\`\`

### Generics
Generics allow you to create reusable components that work with multiple types:

\`\`\`typescript
function List<T>({ items }: { items: T[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{String(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Best Practices

1. Use strict mode
2. Avoid any type
3. Use interfaces for objects
4. Leverage utility types
5. Use type guards for runtime checks

## Conclusion

Mastering TypeScript takes time, but the benefits are worth it. Start small, gradually adopt more advanced features, and always prioritize type safety in your React applications.
        `,
        tags: ["TypeScript", "React", "JavaScript"],
      },
      {
        slug: "building-portfolio-website",
        title: "Building a Stunning Portfolio Website",
        date: "2024-01-05",
        content: `
# Building a Stunning Portfolio Website

A portfolio website is essential for showcasing your work and attracting potential clients or employers. In this post, we'll discuss how to create an impressive portfolio that stands out.

## Planning Your Portfolio

### Define Your Goals
- What type of work do you want to showcase?
- Who is your target audience?
- What action do you want visitors to take?

### Choose Your Tech Stack
Popular choices include:
- React/Next.js for interactivity
- Tailwind CSS for styling
- Framer Motion for animations
- Vercel for deployment

## Design Principles

### Keep it Simple
A clean, minimal design often works best. Focus on your work, not flashy animations.

### Mobile-First
Ensure your portfolio looks great on all devices. Use responsive design techniques.

### Fast Loading
Optimize images, use lazy loading, and minimize JavaScript for better performance.

## Essential Sections

1. **Hero Section**: Introduce yourself and your skills
2. **About**: Tell your story and background
3. **Projects**: Showcase your best work
4. **Skills**: Highlight your technical abilities
5. **Contact**: Make it easy for people to reach you

## Adding Interactivity

Use libraries like Framer Motion to add subtle animations that enhance the user experience without being distracting.

## SEO and Performance

- Use semantic HTML
- Optimize meta tags
- Compress images
- Use a CDN for assets

## Conclusion

Building a portfolio website is an investment in your career. Take the time to create something you're proud of, and keep it updated with your latest work.
        `,
        tags: ["Portfolio", "Web Design", "Career"],
      },
    ];

    const foundPost = samplePosts.find((p) => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

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

  if (!post) {
    return (
      <>
        <Header />
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Post Not Found
            </h1>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>

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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mb-4 mt-8">
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              } else if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mb-3 mt-6">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              } else if (paragraph.startsWith("```")) {
                return null; // Skip code block markers for now
              } else if (paragraph.trim() === "") {
                return <br key={index} />;
              } else {
                return (
                  <p
                    key={index}
                    className="mb-4 text-gray-700 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </motion.article>
      <Footer />
    </>
  );
};

export default BlogPost;
