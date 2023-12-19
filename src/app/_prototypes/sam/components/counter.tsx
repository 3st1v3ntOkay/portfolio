'use client'
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import style from './counter.module.css'

interface CounterProps {
  value: number
}

interface NumberProps {
  mv: MotionValue
  number: number
}

interface DigitProps {
  place: number
  value: number
}

const fontSize: number = 30;
const padding: number = 15;
const height: number = fontSize + padding;

const Number = ({ mv, number }: NumberProps) => {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className={style.number}
    >
      {number}
    </motion.span>
  )
}

function Digit({ place, value }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className={style.digit}>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

const Counter = ({ value }: CounterProps) => {
  return (
    <div
      style={{ fontSize }}
      className={style.counter}
    >
        <Digit place={100} value={value} />
        <Digit place={10} value={value} />
        <Digit place={1} value={value} />
    </div>
  )
}

export default Counter