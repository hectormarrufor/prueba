import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <div className="viewport">
        <h2>This is the about page</h2>
      </div>
    </>
  )
}
