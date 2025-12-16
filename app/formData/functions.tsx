import { RefObject } from "react"

export const handleConfirm = (ref: RefObject<HTMLInputElement | null>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
