import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <>
            <h1>This is movie Page</h1>
            <Link href='/movie/shiv'>
                Go To
            </Link>
        </>
    );
};

export default Page;