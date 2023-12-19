/* nextjs */
import Image from 'next/image';

/* own */
import style from './footer.module.css';

/* imagenes */
import e from '@/assets/emoji/logo/e.svg';
import icon from '@/assets/emoji/logo/icon.svg';
import emoji from '@/assets/emoji/face/face-smiling.svg';

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
          src={emoji}
          width={16}
          height={16}
          alt="e"
        />
      </span>
    </footer>
  )
}

export default Footer