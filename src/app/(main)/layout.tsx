'use client';
import { useConvexAuth } from 'convex/react';
import { Loader, Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';
import { Navigation } from './_components/Navigation';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className='h-screen flex items-center justify-center '>
        <Loader className='animate-spin h-8 w-8 opacity-70  ' />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect('/');
  }

  return (
    <div className='h-screen flex  dark:bg-[1F1F1F]'>
      <Navigation />
      <main className='flex-1 h-full'>{children}</main>
    </div>
  );
};

export default MainLayout;
