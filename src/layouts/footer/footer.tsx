import style from './footer.module.css';

import Image from 'next/image';

import { icon } from '@/assets/emoji/logo';
import { faceSmilling } from '@/assets/emoji/face';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Image
        src={icon}
        width={24}
        height={24}
        alt="page logo"
      />
      <span className={style.layout}>
        <p>thanks for visit me</p>
        <Image
          src={faceSmilling}
          width={16}
          height={16}
          alt="e"
        />
      </span>
    </footer>
  )
}

export default Footer