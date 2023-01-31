import { FC } from 'react';
import sprite from '@/assets/icons/sprite.svg';

interface SocialCardProps {
  title: string;
  url: string;
  icon: string;
}

const SocialCard: FC<SocialCardProps> = ({ title, url, icon }) => {
  return (
    <a href={url} title={title}>
      <svg className="w-11 h-11 fill-white hover:fill-gray-2  00 transition-colors trans">
        <use xlinkHref={`${sprite}#${icon}`} />
      </svg>
    </a>
  );
};

export default SocialCard;
