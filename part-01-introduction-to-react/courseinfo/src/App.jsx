/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Header({ course }) {
  return (
    <h1>{course}</h1>
  )
}

function Content({ courseContent }) {
  return (
    <div>
      {courseContent.map((content, index) => (
        <p key={index}>{content.part} {content.exercises}</p>
      ))}
    </div>
  )
}

function Total({ courseContent }) {
  return (
    <p>Number of exercises {courseContent.reduce((acc, curr) => acc + curr.exercises, 0)}</p>
  )
}

function Part({ part, exercises }) {
  return (
    <p>{part} {exercises}</p>
  )

}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Array of parts and exercises
  const courseContent = [
    {
      part: part1,
      exercises: exercises1
    },
    {
      part: part2,
      exercises: exercises2
    },
    {
      part: part3,
      exercises: exercises3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content courseContent={courseContent} />
      <Total courseContent={courseContent} />
    </div>
  )
}

export default App
