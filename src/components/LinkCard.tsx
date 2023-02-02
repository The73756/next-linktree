import { FC } from 'react';
import Image from 'next/image';
import { ILink } from '../../types';

const LinkCard: FC<ILink> = ({ url, title, icon }) => {
  return (
    <a
      className="flex text-center items-center bg-white p-1 h-[50px] rounded-sm w-full border border-gray-300 mb-2 rounded-md font-medium max-w-3xl hover:scale-[1.025] will-change-transform transition-transform duration-300 ease-in-out"
      href={url}>
      {icon && <Image alt={title} src={icon} width={10} height={10} className="h-full w-10 h-10" />}
      <span className={`flex-1 w-full text-gray-700 font-semibold ${icon ? 'mr-10' : ''} `}>
        {title}
      </span>
    </a>
  );
};

export default LinkCard;
