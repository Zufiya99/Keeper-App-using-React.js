import React from 'react'

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
    <>
    <footer>
        <p>&copy; Written and Coded by <a href="https://www.linkedin.com/in/zufiyaidrisi9797/">Zufiya Idrisi</a> -  {year}</p>
    </footer>
    </>
  )
}
