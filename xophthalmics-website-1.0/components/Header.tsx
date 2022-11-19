import React from 'react'

type Props = {}; 

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

      <p className="font-serif">Solutions</p>
      <p className="font-serif">News</p>
      <p className="font-serif">About Us</p>
      <p className="font-serif">Contact</p>
      <p className="font-serif">Buy</p>

    </header>
  )
}

export default Header