/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'my website';

    const image = await fetch(new URL('../../../../public/cover.png', import.meta.url)).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (<div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {/* <img src={image} width={64} height={64} /> */}
        <svg
          width="75"
          viewBox="0 0 75 65"
          fill="#000"
          style={{ margin: '0 75px' }}
        >
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
        <div style={{ marginTop: 40 }}>{title}</div>
      </div>),
      {}
    )
  } catch (error) {
    return new Response("failed to generate OG image", { status: 500 })
  }
}