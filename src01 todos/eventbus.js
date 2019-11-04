(function (window) {
  const eventBus = {}
  
  eventBus.on('add',(data) =>{
    console.log('add',data)
  })

  eventBus.on('add2',(data) =>{
    console.log('add2',data)
  })

  eventBus.on('delete',(data) =>{
    console.log('delete',data)
  })

  eventBus.off ('add') 
  eventBus.off()

  eventBus.emit('add','123')
  eventBus.emit('delete','abc')

})(window)