import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className=' h-screen flex flex-col  bg-primary   '>
      <div className='flex-1 mx-auto  flex flex-col'>
        <h1 className='text-secondary'>asdsadas</h1>
        <Button variant={'outline'} className=' mx-auto my-auto'>
          sadasdsa
        </Button>
        <div className='p-4 h-40 w-40 rounded-xl bg-primary/80 border  text-secondary'>saadssad</div>
      </div>
      <div className=' '>
        <h1 className='text-secondary'>asdsadas</h1>
        <Button variant={'secondary'} className=' mx-auto my-auto'>
          sadasdsa
        </Button>
        <div className='p-4 h-10 w-10 bg-primary/30'>saadssad</div>
      </div>
    </main>
  );
}
