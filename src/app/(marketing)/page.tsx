import { Button } from '@/components/ui/button';
import { Heading } from './_components/Heading';
import { Heroes } from './_components/Heroes';
import { Footer } from './_components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-full'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heading />

        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
