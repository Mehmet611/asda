// Utility helper functions

// Format date to Turkish locale
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', { 
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  })
}

// Format date to relative time (e.g., "2 gün önce")
export const formatRelativeTime = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)
  
  if (diffInSeconds < 60) {
    return 'Az önce'
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return `${minutes} dakika önce`
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return `${hours} saat önce`
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400)
    return `${days} gün önce`
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000)
    return `${months} ay önce`
  } else {
    const years = Math.floor(diffInSeconds / 31536000)
    return `${years} yıl önce`
  }
}

// Debounce function
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Capitalize first letter
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number (Turkish format)
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Format phone number
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
  }
  return phone
}

// Get file extension
export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Copy text to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (err) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Get random color
export const getRandomColor = () => {
  const colors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Generate gradient colors
export const generateGradient = (color1, color2, direction = 'to right') => {
  return `linear-gradient(${direction}, ${color1}, ${color2})`
}

// Local storage helpers
export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Error getting from localStorage:', error)
      return null
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error('Error setting to localStorage:', error)
      return false
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Error removing from localStorage:', error)
      return false
    }
  }
}

// Theme helpers
export const theme = {
  toggle: () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    storage.set('theme', newTheme)
    return newTheme
  },
  
  init: () => {
    const savedTheme = storage.get('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

// Animation helpers
export const animation = {
  // Intersection Observer for scroll animations
  observe: (elements, callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver(callback, { ...defaultOptions, ...options })
    
    elements.forEach(element => {
      if (element) observer.observe(element)
    })
    
    return observer
  },
  
  // Parallax effect
  parallax: (element, speed = 0.5) => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      element.style.transform = `translateY(${rate}px)`
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
}
