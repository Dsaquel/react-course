import { useState } from 'react'
import './Arrays.css'

const Arrays = () => {
  const [students, setStudents] = useState(['bla', 'blaa', 'blaaaa', 'blaaaaa'])

  const handleClick = () => {
    const studentsTemp = [...students]
    studentsTemp.pop()
    setStudents(studentsTemp)
  }

  return (
    <div className="arraysPage">
      <h1>Arrays</h1>
      <div className="studentList">
        {students.map((student, i) => {
          return (
            <div className="student" key={i}>
              {student}
            </div>
          )
        })}
        <button onClick={handleClick}>Supprimer le last</button>
      </div>
    </div>
  )
}

export default Arrays
