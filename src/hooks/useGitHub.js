import { useState, useEffect } from 'react'
import config from '../../config.json'

export const useGitHub = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        
        if (!config.github_api_key || config.github_api_key === 'your_github_token_here') {
          // Fallback to public API if no token provided
          const response = await fetch(
            `https://api.github.com/users/${config.github_username}/repos?sort=updated&per_page=6`
          )
          
          if (!response.ok) {
            throw new Error('GitHub API isteği başarısız')
          }
          
          const data = await response.json()
          setRepos(data)
        } else {
          // Use authenticated API with token
          const response = await fetch(
            `https://api.github.com/user/repos?sort=updated&per_page=6`,
            {
              headers: {
                'Authorization': `token ${config.github_api_key}`,
                'Accept': 'application/vnd.github.v3+json'
              }
            }
          )
          
          if (!response.ok) {
            throw new Error('GitHub API isteği başarısız')
          }
          
          const data = await response.json()
          setRepos(data)
        }
      } catch (err) {
        setError(err.message)
        console.error('GitHub API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (config.github_username) {
      fetchRepos()
    } else {
      setLoading(false)
    }
  }, [])

  return { repos, loading, error }
}

export const useGitHubStats = () => {
  const [stats, setStats] = useState({
    totalRepos: 0,
    totalStars: 0,
    totalForks: 0,
    languages: {}
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        
        const response = await fetch(
          `https://api.github.com/users/${config.github_username}`
        )
        
        if (!response.ok) {
          throw new Error('GitHub API isteği başarısız')
        }
        
        const userData = await response.json()
        
        // Fetch repositories for language stats
        const reposResponse = await fetch(
          `https://api.github.com/users/${config.github_username}/repos?per_page=100`
        )
        
        if (!reposResponse.ok) {
          throw new Error('GitHub API isteği başarısız')
        }
        
        const reposData = await reposResponse.json()
        
        // Calculate language statistics
        const languageStats = {}
        let totalStars = 0
        let totalForks = 0
        
        for (const repo of reposData) {
          totalStars += repo.stargazers_count
          totalForks += repo.forks_count
          
          if (repo.language) {
            languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
          }
        }
        
        setStats({
          totalRepos: userData.public_repos,
          totalStars,
          totalForks,
          languages: languageStats
        })
      } catch (err) {
        setError(err.message)
        console.error('GitHub Stats Error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (config.github_username) {
      fetchStats()
    } else {
      setLoading(false)
    }
  }, [])

  return { stats, loading, error }
}
