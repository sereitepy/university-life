export interface FormData {
  student_status: string
  personal: {
    age: string
    gender: string
    grade: string
    highschool: string
    graduation_year?: string
    bacII_grade: string
    academic_performance: string
  }
  career_interests: {
    values: string[]
    willing_work_abroad: string
    interesting_careers: string[]
    lifestyle: string[]
    plan_after_graduation: string
    internship_importance: number
  }
  academic: {
    preferred_learning_style: string
    hobbies: string[]
    interested_subjects: string[]
    extracurricular: string[]
    influence: string[]
  }
  campus: {
    study_location: string
    campus_importance: number
    facilities_importance: {
      clubs: number
      class_sizes: number
      labs: number
      library: number
      workshop: number
      tutoring: number
      canteen: number
      study_room: number
      cafe: number
    }
    flexible_schedule_importance: number
  }
  financial: {
    budget: string
    volunteer_internship: string
    scholarship_need: string
  }
}
