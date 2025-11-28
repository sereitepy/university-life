'use client'

import { Progress } from '@/components/ui/progress'

interface Props {
  step: number
}
export function ProgressDemo({ step }: Props) {
  return <Progress value={step} className='w-full my-10' />
}
