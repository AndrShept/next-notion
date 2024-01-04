'use client';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react';
import { Logo } from './Logo';
import { ThemeButton } from '@/components/ThemeButton';
import { useConvexAuth } from 'convex/react';
import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Loader, Loader2 } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        'w-full z-50 sticky top-0 bg-background dark:bg-[#1F1F1F]   flex items-center p-6',
        {
          'border-b shadow-sm': scrolled,
        }
      )}
    >
      <Logo />
      <div className='md:ml-auto justify-end w-full flex items-center gap-x-2'>
        
        {isLoading && <Loader2 className='animate-spin' />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button  size={'sm'}>
                Sign In
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild variant={'ghost'} size={'sm'}>
              <Link href={'/documents'}>Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl='/' />

          </>
        )}
        <div className='ml-1'>

        <ThemeButton  />
        </div>
      </div>
    </div>
  );
};
