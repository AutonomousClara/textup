const STORAGE_KEY = 'textup_api_key'

export function validateApiKey(key: string): boolean {
  return key.startsWith('gsk_') && key.length > 20
}

export function saveApiKey(key: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, key)
  }
}

export function getApiKey(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY)
  }
  return null
}

export function clearApiKey(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export function hasApiKey(): boolean {
  return !!getApiKey()
}
