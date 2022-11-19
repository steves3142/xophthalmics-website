import React from 'react'

type Props = {}; 

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <p>Solutions</p>
      <p>News</p>
      <p>About Us</p>
      <p>Contact</p>
      <p>Buy</p>

    </header>
  )
}

export default Header