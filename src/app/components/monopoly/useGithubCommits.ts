import { useState, useEffect } from "react";

export type GithubCommit = {
  repo: string;
  date: string;
  message: string;
};

export function useGithubCommits() {
  const [githubCommits, setGithubCommits] = useState<GithubCommit[]>([]);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch(
          "https://api.github.com/search/commits?q=author:Andrewslayton&sort=author-date&order=desc"
        );
        if (!res.ok) return;
        const data = await res.json();
        const latestCommits: GithubCommit[] = [];
        
        if (data.items) {
          for (const item of data.items) {
            latestCommits.push({
              message: item.commit.message.split("\n")[0],
              repo: item.repository.name,
              date: new Date(item.commit.author.date).toLocaleDateString(),
            });
            if (latestCommits.length >= 4) break;
          }
        }
        setGithubCommits(latestCommits);
      } catch (error) {
        console.error("Failed to fetch commits:", error);
      }
    }
    fetchCommits();
  }, []);

  return githubCommits;
}
