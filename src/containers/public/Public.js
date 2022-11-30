import React from 'react'
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';


const Public = () => {
  return (
    <div className='w-full relative h-screen flex flex-col bg-main-300'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] flex-none border border-blue-500'>
          <SidebarLeft />
        </div>
        <div className='flex-auto border border-gray-500'>
          <Outlet />
        </div>
        <div className='w-[329px] flex-none border border-blue-500'>
          <SidebarRight />
        </div>
      </div>
    </div>
  )
}

export default Public