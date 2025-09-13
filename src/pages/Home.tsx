import HeroSection from '@/components/Hero';
import Stack from '@/components/Stack';
import * as React from 'react';

const Home = () => {
    return (
        <div className=' text-center'>
            <HeroSection></HeroSection>
            <Stack></Stack>
        </div>
    );
};

export default Home;