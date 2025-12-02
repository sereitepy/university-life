'use client'

import { useState } from 'react'
import Package from '.'

const PackagePage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Package open={open} setOpen={setOpen} />
    </div>
  )
}

export default PackagePage
