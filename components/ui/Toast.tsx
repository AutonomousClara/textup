'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)
    
    return () => clearTimeout(timer)
  }, [duration, onClose])
  
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  }
  
  const colors = {
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    error: 'bg-red-500/10 border-red-500/30 text-red-400',
    info: 'bg-purple-500/10 border-purple-500/30 text-purple-400'
  }
  
  return (
    <div
      className={`
        fixed bottom-4 right-4 z-50
        flex items-center gap-3 px-4 py-3 rounded-xl
        border backdrop-blur-md
        transition-all duration-300
        ${colors[type]}
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
      `}
    >
      <span className="text-lg">{icons[type]}</span>
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
        className="ml-2 opacity-50 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  )
}

// Toast container hook
export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'success' | 'error' | 'info' }>>([])
  
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
  }
  
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }
  
  const ToastContainer = () => (
    <>
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ transform: `translateY(-${index * 60}px)` }}>
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </>
  )
  
  return { showToast, ToastContainer }
}
