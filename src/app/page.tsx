import Link from "next/link"
import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div>
      <nav>
        <ul>
          <li className="w-screen justify-center mt-10 flex gap-10">
            <Link href="/login">Login</Link>
            <Link href="/home">Home</Link>
            <Link href="/logs">Logs</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LandingPage