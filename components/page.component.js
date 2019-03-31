const Page = ({layout, children}) => (
  <div className='page'>
    <div className='topStripes'>
      {Array.from(Array(10)).map(_ => <div />)}
    </div>
    <div className='content'>
      {(layout === 'sidebar-on-left') && (
        <>
          <div className='sidebar'>{children[0]}</div>
          <div className='mainContent'>{children[1]}</div>
        </>
      )}
      {(layout === 'two-columns-with-footer') && (
        <>
          <div className='mainContent column'>{children[0]}</div>
          <div className='mainContent column'>{children[1]}</div>
          <footer>{children[2]}</footer>
        </>
      )}
      {(layout === 'full-page') && (
        <>
          <div className='mainContent full'>{children}</div>
        </>
      )}
    </div>
  </div>
)
