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
        <p key={index}>{content.name} {content.exercises}</p>
      ))}
    </div>
  )
}

function Total({ courseContent }) {
  return (
    <p><strong>
      Number of exercises {courseContent.reduce((acc, curr) => acc + curr.exercises, 0)}
    </strong>
    </p>
  )
}

function Part({ part, exercises }) {
  return (
    <p>{part} {exercises}</p>
  )

}

function Course({ course }) {
  return (
    <div>
      <h2>{course.name}</h2>
      <Content courseContent={course.parts} />
      <Total courseContent={course.parts} />
    </div>
  )

}

function App() {
  const title = 'Web development curriculum'


  // Array of parts and exercises
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header course={title} />
      {
        courses.map((course, inx) => {
          return <Course course={course} key={inx} />
        }
        )
      }
    </div >
  )
}

export default App
