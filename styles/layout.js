import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cat Translator - What is Your Cat Thinking?',
  description: 'Upload your cat\'s photo and our AI will analyze their expression, body language, and behavior to tell you what they might be thinking. Free cat mind reading tool to better understand your feline friend.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
