import { FC } from 'react';
import Header from './header';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import CountdownTimer from './count-down';

type Props = {
  address: string;
  address_link: string;
  date: string;
};

const Location: FC<Props> = ({ address, address_link, date }): JSX.Element => {
  return (
    <div className='mt-40'>
      <Header text='' paragraph={address} />
      <Link
        href={address_link}
        target='_blank'
        className='flex items-center justify-center gap-2 my-8'
        data-aos='zoom-in'
      >
        <p className='text-center text-[#a9a05c] underline italic font-serif'>
          Manzilni ko'rish
        </p>
        <MapPin size={22} color='#a9a05c' />
      </Link>

      <CountdownTimer targetDate={date} />
    </div>
  );
};

export default Location;
