import { FC } from 'react';
import { ISocial } from '../../types';

const SocialCard: FC<ISocial> = ({ title, url, icon }) => {
  return (
    <a href={url} title={title}>
      <svg className="w-11 h-11 fill-white hover:fill-gray-200 transition-colors duration-300">
        <use xlinkHref={`./sprite.svg#${icon}`} />
      </svg>
    </a>
  );
};

export default SocialCard;
