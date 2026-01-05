
import React from 'react'
import { Link } from 'react-router'


const ResumeCard = ({resume} : {resume:Resume}) => {
  return (
    <Link to={`/resumes/${resume.id}`}>
        ResumeCard
    </Link>
  )
}

export default ResumeCard