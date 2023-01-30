import Image from 'next/image';
import data from '../../db.json';
import LinkCard from '@/components/LinkCard';

export default function Home() {
  return (
    <div className="flex flex-col pt-20 items-center w-full px-8 align-center">
      <Image className="rounded-full" src={data.avatar} width={100} height={100} alt={data.name} />
      <h1 className="font-semibold my-4 text-2xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard {...link} key={link.url} />
      ))}
    </div>
  );
}
