'use client'

let toastId = 0

export const toast = {
  success: (message: string) => {
    console.log('Success:', message)
    // In a real implementation, this would show a toast notification
    alert(`✅ ${message}`)
  },
  error: (message: string) => {
    console.error('Error:', message)
    // In a real implementation, this would show a toast notification
    alert(`❌ ${message}`)
  },
  info: (message: string) => {
    console.log('Info:', message)
    alert(`ℹ️ ${message}`)
  }
}