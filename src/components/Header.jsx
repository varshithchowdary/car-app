import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';

function Header() {
  const { user, isSignedIn } = useUser();
  
  return (
    <div className='flex items-center justify-between p-4'>
      <img src="/logo.svg" width={150} height={100} alt="Logo" />
      <ul className='flex gap-16'>
        <li className='font-medium  hover:scale-105 transition-all cursor-pointer hover:text-gray-800' >Home</li>
        <li className='font-medium  hover:scale-105 transition-all cursor-pointer  hover:text-gray-800' >Search</li>
        <li className='font-medium  hover:scale-105 transition-all cursor-pointer  hover:text-gray-800' >New</li>
        <li className='font-medium  hover:scale-105 transition-all cursor-pointer  hover:text-gray-800' >Preowned</li>
      </ul>
      <div>
        {isSignedIn ? (
          <div className='flex items-center gap-4'>
            <UserButton />
            <Button>Submit Listing</Button>
          </div>
        ) : (
          <Button>Submit Listing</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
