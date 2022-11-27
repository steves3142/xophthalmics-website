import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default function About() {
  return (
    <div>
        About Us
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>

        <Header/>

    </div>
    
  )
}