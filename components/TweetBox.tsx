
import React, { useState } from 'react'
import { CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon }
    from '@heroicons/react/outline'

function TweetBox() {
    const [input, setInput] = useState<string>('')


  return (
    <div className='flex space-x-2 p-5'>
        <img 
        className='mt-4 h-14 w-14 rounded-full object-cover'
        src='https://links.papareact.com/gll' 
        alt=''
        />

        <div className="flex flex-1 pl-2">
            <form className="flex flex-1 flex-col">
                <input
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                type="text"
                placeholder="What's Happening?" 
                className='h-24 w-full text-xl outline-none
                placeholder:text-xl'/>
                <div className="flex items-center">
                    <div className='flex flex-1 space-x-2 text-saturnbay'>
                        <PhotographIcon className='h-5 w-5 cursor-pointer
                        tranistion-transform duration-150 ease-out
                        hover:scale-150' />
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer
                        tranistion-transform duration-150 ease-out
                        hover:scale-150' />
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer
                        tranistion-transform duration-150 ease-out
                        hover:scale-150' />
                        <CalendarIcon className='h-5 w-5 cursor-pointer
                        tranistion-transform duration-150 ease-out
                        hover:scale-150' />
                        <LocationMarkerIcon className='h-5 w-5 cursor-pointer
                        tranistion-transform duration-150 ease-out
                        hover:scale-150' />
                    </div>

                    <button
                    disabled={!input}
                    className="rounded-full bg-saturnbay px-5 py-2
                    font-bold text-white disabled:opacity-40">Blaz'n</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox