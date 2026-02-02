'use client'

import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  showCount?: boolean
  maxLength?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, showCount, maxLength = 5000, value, ...props }, ref) => {
    const charCount = typeof value === 'string' ? value.length : 0
    
    return (
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          maxLength={maxLength}
          className={`
            w-full min-h-[200px] p-4 rounded-xl
            glass text-white placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-500/50
            resize-none
            ${error ? 'ring-2 ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <span></span>
          )}
          
          {showCount && (
            <span className={charCount > maxLength * 0.9 ? 'text-yellow-500' : ''}>
              {charCount.toLocaleString()} caracteres
            </span>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
