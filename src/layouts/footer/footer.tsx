import Image from 'next/image';
import e from './images/e.svg';
import Link from 'next/link';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.space}>
        <p className={style.author}>@estebanjimenezvaldez</p>
        <div className={style["content-x"]}>
          <Image
            src={e}
            width={32}
            height={32}
            alt="e"
          />
          <div className={style["content-y"]}>
            <p className={style.version}>version 1.0.0</p>
            <p className={style.url}>me.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer