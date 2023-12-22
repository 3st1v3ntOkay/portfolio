import style from './page.module.css';

import Link from "next/link";
import Image from "next/image";
import { articlePage, articles } from '@/app/data';

import { DateComp, HeaderComp, Row } from "@/components";
import { dateFormater } from "@/utils/time";
import { StaticPageParams } from "@/models/types";
import { Footer, Main, Top } from '@/layouts';

export const dynamicParams = false;

export function generateStaticParams() {
  return articlePage;
}

export default function Page({ params }: StaticPageParams) {
  const { article } = params;
  const data = articles.find(({ id, ..._ }) => id === article);

  return (
    <div className={style.flow}>
      {/* <Top /> */}

      <Main>
        {data ? (
          <>
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
          </>
        ) : (
          <div>
            <p>info dead</p>
          </div>
        )}
      </Main>

      {/* <Footer /> */}
    </div>
  )
}