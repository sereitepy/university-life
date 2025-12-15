'use client'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Dispatch, SetStateAction } from 'react'
import Survey from './survey'

interface Prop {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>

}

const Package = ({ open, setOpen}: Prop) => {
  return (
    <div className=''>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className='ring-1 ring-offset-1 ring-foreground active:bg-white/20 cursor-pointer hover:bg-primary hover:inset-shadow-sm transition-all duration-200 ease-in-out hover:inset-shadow-background active:shadow-2xs active:backdrop-blur-3xl bg-white/10 inset-shadow-neutral-600 inset-shadow-sm
    
     hover:text-neutral-50 font-semibold dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'
          >
            Get your personal package
          </button>
        </DialogTrigger>

        {open && (
          <div className=''>
            <Survey />
          </div>
        )}
      </Dialog>
    </div>
  )
}

export default Package
