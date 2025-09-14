import Author from '@/app/components/author';
import DateSection from '@/app/components/date';
import Location from '@/app/components/location';
import Music from '@/app/components/music';
import Showcase from '@/app/components/showcase';
import { BASE_URL } from '@/config';
import { WeddingData } from '@/types';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

// Metadata generatsiya qilish (SEO)
export async function generateMetadata({ params }: PageProps) {
  const res = await fetch(`${BASE_URL}/api/data/${params?.id}`);

  if (!res.ok) return { title: 'Not Found' };

  const page: WeddingData = await res.json();
  return { title: page.title, description: page.description };
}

// Sahifa ma’lumotlarini API route orqali olish
export default async function Page({ params }: PageProps) {
  const res = await fetch(`${BASE_URL}/api/data/${params?.id}`);

  if (!res.ok) return notFound();

  const data: WeddingData = await res.json();

  const { man, woman, logo, paragraph, families, date, address_link, address } =
    data;
  return (
    <main className='w-full'>
      <Showcase
        couple={{
          man,
          woman,
        }}
        logo={logo}
      />
      <DateSection {...{ families, paragraph, date }} />
      <Location {...{ address, address_link, date }} />
      <Music />
      <Author />
    </main>
  );
}
