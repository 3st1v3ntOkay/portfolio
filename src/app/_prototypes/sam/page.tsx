'use client'

import React from 'react'
import { Counter } from './components';
import { useState } from 'react';
import Link from 'next/link';

const TwitchCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link href="./">Back</Link>

      <p>Choose a number:</p>
      <input
        type="number"
        value={count}
        min={0}
        onChange={(e) => setCount(+e.target.value)}
      />

      <Counter value={count} />
    </>
  )
}

export default TwitchCounter;