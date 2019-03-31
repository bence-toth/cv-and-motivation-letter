const getFormattedDate = () => {
  const today = new Date()
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const day = today.getDate()
  const month = monthNames[today.getMonth()]
  const year = today.getFullYear()
  return `${day} ${month} ${year}`
}

const MotivationLetter = ({name, signatureURL}) => (
  <div contentEditable className='motivationLetter'>
    <h2>Motivation letter</h2>
    <p className='dear'>Dear Mr. John Doe,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget magna risus. Nam rhoncus blandit turpis, ut hendrerit neque tempor et. Aliquam vestibulum eu nulla sit amet finibus. Mauris sapien purus, blandit ut tincidunt sed, vulputate quis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque molestie eu ligula eu consequat. Vivamus feugiat suscipit orci eu laoreet. Curabitur sagittis ligula lorem, at tempor ligula iaculis sit amet. Vestibulum blandit porttitor fringilla. Nullam dictum vestibulum justo et ultrices. Phasellus at scelerisque lorem. Quisque massa libero, ultrices vel viverra at, luctus id odio. Suspendisse ultricies semper nisl.</p>
    <p>Maecenas gravida dictum sapien ut aliquam. Etiam eu magna massa. Mauris sapien magna, molestie vitae enim in, suscipit tincidunt mi. Nam non mi sit amet orci fringilla condimentum. Nullam at augue nulla. Donec eget purus sapien. Suspendisse sit amet orci egestas, suscipit eros vitae, aliquam felis. Mauris dapibus, leo eu ornare finibus, lorem augue rhoncus purus, quis pharetra ligula quam id lacus. Sed et quam aliquet, tincidunt magna eu, sodales ipsum. Nullam eu egestas quam. Proin interdum dictum dapibus.</p>
    <p>Aenean tincidunt hendrerit luctus. Aliquam erat volutpat. Nulla eu mollis lacus. Aenean porttitor risus placerat fermentum efficitur. In id leo eu quam laoreet fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque finibus, erat at posuere dictum, ligula velit accumsan metus, vestibulum lobortis orci justo in metus. Suspendisse potenti. Mauris erat nisi, commodo vitae lectus vel, condimentum varius justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis fringilla convallis dolor, eu gravida ante facilisis quis.</p>
    <p>Yours truly,</p>
    <div className='signatureWrapper'>
      <p>{getFormattedDate()}, Copenhagen, Denmark</p>
      <div>
        <img className='signature' src={signatureURL} style={{width: 160}} />
        <p>{name}</p>
      </div>
    </div>
  </div>
)
