const Skills = ({fields}) => (
  <ul contentEditable className='skills'>
    {fields.map(({title, skills}) => (
      <li>
        <h3>{title}</h3>
        <ul>
          {skills.map(skill => (<li>{skill}</li>))}
        </ul>
      </li>
    ))}
  </ul>
)
