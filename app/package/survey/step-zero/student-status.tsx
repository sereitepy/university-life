import { Dispatch, SetStateAction, useState } from 'react'
import { FormData } from '@/app/formData'
import { Button } from '@/components/ui/button'

interface StudentStatusProp {
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export default function StudentStatus({
  formData,
  setFormData,
}: StudentStatusProp) {
  const [userStatus, setUserStatus] = useState(formData.student_status || '')
  const status = [
    {
      id: 'highschool-student',
      value: 'Highschool Student',
    },
    {
      id: 'recent-highschool-graduate',
      value: 'Recent Highschool Graduate',
    },
    {
      id: 'university-student',
      value: 'University Student',
    },
    {
      id: 'none-student',
      value: 'Not a Student',
    },
  ]

  const handleStudentStatus = (id: string) => {
    setFormData({
      ...formData,
      student_status: id,
    })
    setUserStatus(id)
  }

  return (
    <div className='flex items-center justify-center gap-6'>
      {status.map(item => (
        <div key={item.id}>
          <Button
            onClick={() => handleStudentStatus(item.id)}
            // variant='ghost'
            className={`p-8 ${
              userStatus === item.id
                ? 'border-2 border-lime-400 bg-lime-700 hover:bg-lime-800'
                : 'bg-primary/20 border-2 border-white/20 hover:bg-primary/30'
            }`}
            style={{
              boxShadow:
                '0 4px 16px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              transform: 'perspective(1000px) rotateX(1deg)',
            }}
          >
            {item.value}
          </Button>
        </div>
      ))}
    </div>
  )
}
