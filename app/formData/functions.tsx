import { RefObject } from "react"

export const handleConfirm = (ref: RefObject<HTMLInputElement | null>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}

export const scrollToElement = (ref: RefObject<HTMLElement | null>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}