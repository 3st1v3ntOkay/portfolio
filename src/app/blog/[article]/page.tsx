import { DateComp, HeaderComp, Row } from "@/components";
import Link from "next/link";
import style from './page.module.css';
import { articlePage, articles } from '@/app/data';
import Image from "next/image";
import { dateFormater } from "@/utils/time";
import { StaticPageParams } from "@/models/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return articlePage;
}

export default function Page({ params }: StaticPageParams) {
  const { article } = params;
  const data = articles.find(({ id, ..._ }) => id === article);

  return (
    <div className={style["content-grid"]}>
      <main className={`${style["main"]} ${style.breakout}`}>
        {data ? (
          <div>
            <HeaderComp>
              <Link href="/blog">Back</Link>
              <h2>{data.title}</h2>
            </HeaderComp>

            <Row type='space'>
              <Row>
                <Image
                  src={data.avatar}
                  width={24}
                  height={24}
                  alt="esteban jimenez valdez avatar"
                />
                <p>{data.author}</p>
              </Row>
              <DateComp date={data.date.toString()}>
                {dateFormater('en-US', data.date)}
              </DateComp>
            </Row>

            <p>{data.description}</p>
            {data.images.map(({
              id,
              image,
              width,
              height,
              alt,
            }) => (
              <Image
                key={id}
                width={width}
                height={height}
                src={image}
                alt={alt}
              />
            ))}
          </div>
        ) : (
          <div>
            <p>info dead</p>
          </div>
        )}
      </main>
    </div>
  )
}