const WorkExperience = ({positions}) => (
  <div contentEditable className='workExperience'>
    <h2>Work experience</h2>
    {positions.map(({company, positionTitle, date, description}) => (
      <section className={`commonSection ${!description ? 'brief' : ''}`}>
        <h3>{positionTitle} <small>{company}, {date}</small></h3>
        {description && (
          <p>{description}</p>
        )}
      </section>
    ))}
  </div>
)
