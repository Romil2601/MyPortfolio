import React, { useEffect, useState } from "react";

const GitHubStats = ({ darkMode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Function to update the theme based on Tailwind's dark mode
    const updateTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("tokyonight"); // Dark mode theme
      } else {
        setTheme("default"); // Light mode theme
      }
    };

    // Set theme on initial load
    updateTheme();

    // Observe changes when Tailwind toggles dark mode
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 my-8 transition-all duration-500">
      {/* Profile Stats */}
      <img
        src="https://github-readme-stats.vercel.app/api?username=Romil2601&show_icons=true&theme=light&cache_seconds=86400"
        alt="GitHub stats"
      />


      {/* Top Languages */}
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Romil2601&layout=compact&theme=light&cache_seconds=86400"
        alt="Top languages"
      />
    </div>
  );
};

export default GitHubStats;