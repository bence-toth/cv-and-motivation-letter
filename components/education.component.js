const Education = ({schools, breakDate}) => (
  <div contentEditable className='education'>
    <h2>Education</h2>
    {schools.map(({institute, course, date, description}) => (
      <section className='commonSection'>
        <h3>{course} <small>{institute},{breakDate && (<br />)} {date}</small></h3>
        <p>{description}</p>
      </section>
    ))}
  </div>
)
