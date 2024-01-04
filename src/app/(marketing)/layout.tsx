import React, { ReactNode } from 'react';
import { Navbar } from './_components/Navbar';
import { ThemeProvider } from '@/components/providers/theme-provider';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full dark:bg-[#1F1F1F]/20'>
      <Navbar />

        <main className='h-full pt-20'>{children}</main>
    
    </div>
  );
};

export default layout;
