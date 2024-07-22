import './index.css'

kintone.events.on('app.record.index.show', (event) => {
  const el =  kintone.app.getHeaderSpaceElement()
  el.textContent = 'Hello kintone!!'
})
