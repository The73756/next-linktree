import Image from 'next/image';
import LinkCard from '@/components/LinkCard';
import SocialCard from '@/components/SocialCard';
import { get } from '@vercel/edge-config';
import { ILinksResponse } from '../types';

export default async function Home() {
  const data = await get<ILinksResponse>('linktree');

  if (!data) return <div>Not found</div>; //сделать фаллбек

  return (
    <div className="flex flex-col pt-20 items-center w-full px-8 align-center">
      <Image className="rounded-full" src={data.avatar} width={100} height={100} alt={data.name} />
      <h1 className="font-semibold my-4 text-2xl text-white mb-5">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard {...link} key={link.url} />
      ))}
      <div className="flex gap-1 flex-wrap max-w-xl justify-center mt-3 duration-200 ease-in-out">
        {data.socials.map((link) => (
          <SocialCard {...link} key={link.url} />
        ))}
      </div>
    </div>
  );
}
