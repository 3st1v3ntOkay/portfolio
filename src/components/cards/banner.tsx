import Image from 'next/image';
import style from './css/card.module.css';
import type { BannerProps } from "./models/types";

const Banner = ({
  banner,
  avatar,
}: BannerProps) => {
  return (
    <section className={style.banner}>
      <Image
        className={style.cover}
        src={banner}
        width={1200}
        height={1779}
        alt="cat smilling"
      />
      <Image
        className={style.avatar}
        src={avatar}
        width={64}
        height={64}
        alt="cat smilling"
      />
    </section>
  )
}

export { Banner };