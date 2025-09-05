"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaEye } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/puranikyashaswinsharma/repos?sort=updated&per_page=6",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="command-line mb-4">
          git clone https://github.com/puranikyashaswinsharma/repos.git
        </div>
        <div className="text-green-400">Cloning repositories...</div>
        <div className="cursor mt-4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="command-line mb-4">
          echo &quot;Error fetching repositories&quot;
        </div>
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="mb-8">
        <div className="command-line mb-4">
          curl -s https://api.github.com/users/puranikyashaswinsharma/repos
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ascii-art text-center mb-8"
        >
          {`            _    _    _    _    _    _    _

   ██████╗ ██╗████████╗██╗  ██╗██╗   ██╗██████╗
   ██╔════╝ ██║╚══██╔══╝██║  ██║██║   ██║██╔══██╗
   ██║  ███╗██║   ██║   ███████║██║   ██║██████╔╝
   ██║   ██║██║   ██║   ██╔══██║██║   ██║██╔══██╗
   ╚██████╔╝███████╗   ██║  ██║╚██████╔╝██████╔╝
    ╚═════╝ ╚══════╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝

            _    _    _    _    _    _    _`}
        </motion.div>
      </div>
      <div className="space-y-4">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-green-500 p-4 hover:bg-green-900/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-green-400 text-lg font-bold truncate">
                {repo.name}
              </h3>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-100"
              >
                <FaGithub size={16} />
              </a>
            </div>
            <p className="text-green-300 mb-3 text-sm">
              {repo.description || "No description available"}
            </p>
            <div className="flex items-center space-x-6 text-xs">
              {repo.language && (
                <div className="flex items-center">
                  <span className="text-green-400 mr-1">Language:</span>
                  <span className="text-green-300">{repo.language}</span>
                </div>
              )}
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" size={12} />
                <span className="text-green-300">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center">
                <FaEye className="text-green-400 mr-1" size={12} />
                <span className="text-green-300">{repo.watchers_count}</span>
              </div>
            </div>
            <div className="text-green-400 text-xs mt-2">
              Last updated:{" "}
              {new Date(repo.updated_at || "").toLocaleDateString()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubRepos;
