import React, { useEffect, useState } from "react";

const GitHubStats = ({darkMode}) => {
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
        key={`stats-${theme}`} // 👈 Forces image to refresh on theme change
        src={`https://github-readme-stats.vercel.app/api?username=Romil2601&show_icons=true&theme=${theme}`}
        alt="GitHub Stats"
        className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      />

      {/* Top Languages */}
      <img
        key={`langs-${theme}`} // 👈 Forces image to refresh on theme change
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Romil2601&layout=compact&theme=${theme}`}
        alt="Top Languages"
        className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      />

      {/* Streak Stats */}
      <img
        key={`streak-${theme}`} // 👈 Forces image to refresh on theme change
        src={`https://github-readme-streak-stats.herokuapp.com/?user=Romil2601&theme=${theme}`}
        alt="GitHub Streak"
        className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default GitHubStats;