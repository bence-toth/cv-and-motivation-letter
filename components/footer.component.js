const Footer = ({personal, contacts}) => (
  <>
    <Avatar
      imageURL={personal.imageURL}
      name={personal.name}
      positionTitle={personal.positionTitle}
    />
    <div className='footerContent' contentEditable>
      <p>I’m looking forward to working with you!</p>
      <Contacts rows={contacts} />
    </div>
  </>
)
