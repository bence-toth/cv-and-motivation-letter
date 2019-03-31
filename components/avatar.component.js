const Avatar = ({imageURL, name, positionTitle}) => (
  <div contentEditable className='avatar'>
    <img className='avatarImage' src={imageURL} />
    <h1>{name} <small>{positionTitle}</small></h1>
  </div>
)
