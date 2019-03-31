const Contacts = ({rows}) => (
  <ul contentEditable className='contacts'>
    {rows.map(({text, linkURL, iconName}) => (
      <li>
        <a href={linkURL}>
          <i className={iconName}></i>
          {text}
        </a>
      </li>
    ))}
  </ul>
)
