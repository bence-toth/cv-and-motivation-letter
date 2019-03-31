fetch('./assets/index.styl')
  .then(response => response.text())
  .then(stylusCode => stylus(stylusCode).render((_, css) => {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }))

fetch('./assets/data.json')
  .then(response => response.json())
  .then(data => {
    document.title = `CV - ${data.personal.name} (${data.personal.positionTitle})`
    ReactDOM.render(<Resume data={data} />, window.root)
  })
