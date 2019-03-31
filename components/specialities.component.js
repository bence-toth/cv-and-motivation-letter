const Specialities = ({items}) => (
  <div contentEditable className="specialities">
    <h2 contentEditable>Specialties</h2>
    <ul>
      {items.map(({iconName, text}) => (
        <li>
          <div className='iconContainer'>
            <i className={iconName}></i>
          </div>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </div>
)
