import React from 'react'

import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return(
        <div className='col-span-2 flex flex-col items-center px-4
        md:items-start'>
                    {/* SaturnBay Logo */}
        <img className='m-3 mr-5 mt-5 h-12 w-12 cursor-pointer
        tranistion-all duration-500 ease-out 
        hover:rotate-12 scale-115 active:scale-125'
        src="https://images2.imgbox.com/35/18/xNmPaLnd_o.png"
        alt='' />
                    {/* SideBarIcons */}
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} title="Lists" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

        </div>
    )
}

export default Sidebar