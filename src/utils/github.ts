/* ============================================
   GITHUB API UTILITIES
   ============================================ */

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  stars: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

/**
 * Fetch GitHub user information
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Failed to fetch user');

    const data = await response.json();
    return {
      login: data.login,
      name: data.name || data.login,
      bio: data.bio || '',
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
    };
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

/**
 * Fetch user's repositories
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=30&sort=updated`
    );
    if (!response.ok) throw new Error('Failed to fetch repos');

    const data = await response.json();

    return data
      .filter((repo: any) => !repo.fork) // Exclude forked repositories
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        language: repo.language,
        topics: repo.topics || [],
        updated_at: repo.updated_at,
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Format repository data for display
 */
export function formatGitHubRepo(repo: GitHubRepo): {
  title: string;
  description: string;
  skills: string[];
  link: string;
  stars: number;
} {
  const skills = repo.topics.length > 0 ? repo.topics : [repo.language || 'Code'].filter(Boolean);

  return {
    title: repo.name,
    description: repo.description || 'No description provided',
    skills: skills,
    link: repo.url,
    stars: repo.stars,
  };
}

/**
 * Get language color
 */
export function getLanguageColor(language: string | null): string {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    React: '#61dafb',
    Vue: '#2c3e50',
    Go: '#00add8',
    Java: '#b07219',
    Rust: '#ce422b',
    Ruby: '#cc342d',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Shell: '#89e051',
  };

  return colors[language || ''] || '#858585';
}

/**
 * Calculate repository stats
 */
export function getRepoStats(repos: GitHubRepo[]): {
  totalRepos: number;
  totalStars: number;
  languages: string[];
  topics: string[];
} {
  const languages = new Set<string>();
  const topics = new Set<string>();
  let totalStars = 0;

  repos.forEach((repo) => {
    if (repo.language) languages.add(repo.language);
    if (repo.topics) repo.topics.forEach((topic) => topics.add(topic));
    totalStars += repo.stars;
  });

  return {
    totalRepos: repos.length,
    totalStars,
    languages: Array.from(languages),
    topics: Array.from(topics).slice(0, 10), // Top 10 topics
  };
}

/**
 * Filter repositories by language or topic
 */
export function filterRepos(
  repos: GitHubRepo[],
  filter: string,
  filterType: 'language' | 'topic' = 'language'
): GitHubRepo[] {
  return repos.filter((repo) => {
    if (filterType === 'language') {
      return repo.language?.toLowerCase() === filter.toLowerCase();
    } else {
      return repo.topics.some((topic) => topic.toLowerCase() === filter.toLowerCase());
    }
  });
}

/**
 * Sort repositories
 */
export function sortRepos(
  repos: GitHubRepo[],
  sortBy: 'stars' | 'updated' | 'name' = 'updated'
): GitHubRepo[] {
  const sorted = [...repos];

  switch (sortBy) {
    case 'stars':
      return sorted.sort((a, b) => b.stars - a.stars);
    case 'updated':
      return sorted.sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

/**
 * Format date
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
