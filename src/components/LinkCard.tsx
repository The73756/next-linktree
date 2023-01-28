import { FC } from 'react';

interface LinkCardProps {
  url: string;
  title: string;
  icon?: string;
}
const LinkCard: FC<LinkCardProps> = ({ url, title, icon }) => {
  return (
    <a
      className="flex items-center p-4 rounded-sm w-full border border-gray-300 mb-2 rounded-md font-medium max-w-screen-lg hover:scale-[1.025] will-change-transform transition-transform duration-300 ease-in-out"
      href={url}>
      <span>{title} </span>
    </a>
  );
};

export default LinkCard;
