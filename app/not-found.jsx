import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh] px-4 text-center gap-5'>
        <h1 className='text-6xl font-bold gradient-title mb-4'>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you &apos;re looking for doesn&apos;t exist or has been moved.</p>

        <Link href="/">
            <Button>Return Home</Button>
        </Link>
    </div>
  )
}

export default NotFound