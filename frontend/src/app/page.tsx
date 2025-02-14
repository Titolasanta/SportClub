// pages/index.tsx
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/beneficios');  // Redirect to the benefits page
  }, [router]);

  return null;  // No content needed, it's just a redirect
};

export default Home;
