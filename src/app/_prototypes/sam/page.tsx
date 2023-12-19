'use client'

import React from 'react'
import { Counter } from './components';
import { useState } from 'react';
import { SimpleLink } from '@/components';

const TwitchCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleLink link="./">Back</SimpleLink>

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