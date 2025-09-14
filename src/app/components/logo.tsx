import { fleurDeLeah } from '@/fonts';
import { FC } from 'react';

interface LogoProps {
  firstLetter: string;
  secondLetter: string;
}

const Logo: FC<LogoProps> = ({ firstLetter, secondLetter }): JSX.Element => {
  return (
    <div className='flex items-center justify-center py-8 rounded-t-full rounded-b-full border-2 border-[#a9a05c]'>
      <div
        className={`${fleurDeLeah.className} w-24 h-24 flex items-center justify-center text-[#a9a05c] text-6xl relative`}
      >
        <span className='absolute top-2.5 left-2.5'>{firstLetter}</span>
        <span className='absolute bottom-1 right-2.5'>{secondLetter}</span>
      </div>
    </div>
  );
};

export default Logo;
