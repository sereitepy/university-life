'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Dispatch, SetStateAction, useState } from 'react'
import { ProgressDemo } from './progress'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'

interface Prop {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Package = ({ open, setOpen }: Prop) => {
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
            <PersonalPackage />
          </div>
        )}
      </Dialog>
    </div>
  )
}

function PersonalPackage() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = 6

  return (
    <>
      <div className=''>
        <DialogContent className=' min-w-screen h-full [&>button:first-of-type]:hidden'>
          <div className='w-240 h-140 mx-auto flex flex-col justify-between gap-10'>
            <DialogHeader className='relative'>
              <DialogClose className='absolute top-8 -left-20 hover:font-extrabold'>
                <X className='hover:font-bold' fontWeight='bold' />
              </DialogClose>
              <div className='flex justify-center items-center'>
                <ProgressDemo step={(currentStep / steps) * 100} />
              </div>
              {currentStep === 0 && (
                <div className='flex flex-col gap-3'>
                  <DialogTitle className='text-3xl w-8xl mx-auto'>
                    Let&apos;s complete this personal package information to get
                    to your most aligned university information!
                  </DialogTitle>
                  <DialogDescription className='text-xl'>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </div>
              )}
            </DialogHeader>
            <DialogFooter className='w-full h-fit'>
              <div
                className={`w-full flex ${
                  currentStep === 0
                    ? 'items-end justify-end'
                    : 'items-center justify-between'
                }`}
              >
                <Button
                  variant='secondary'
                  onClick={() => {
                    if (currentStep > 0) {
                      setCurrentStep(currentStep - 1)
                    }
                  }}
                  className={currentStep !== 0 ? 'flex' : 'hidden'}
                >
                  Back
                </Button>
                <Button
                  type={currentStep === 6 ? 'submit' : 'button'}
                  onClick={() => {
                    if (currentStep < 6) {
                      setCurrentStep(currentStep + 1)
                    }
                  }}
                >
                  {currentStep === 6 ? (
                    <p>
                      <Link href='/result'>Confirm </Link>
                    </p>
                  ) : (
                    <p>Next</p>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </div>
        </DialogContent>
      </div>
    </>
  )
}

export default Package
