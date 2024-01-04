'use client';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { ArrowRight, Loader, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas , Documents, & Plans. Unified. Welcome to{' '}
        <span className='underline'>Jotion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && <Loader className='  animate-spin mx-auto h-8 w-8' />}
      {isAuthenticated && !isLoading && (
        <Button asChild className='group'>
          <Link href={'/documents'}>
           Enter Jotion
            <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode='modal'>
            <Button size={'sm'}>Get Jotion Free</Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};
