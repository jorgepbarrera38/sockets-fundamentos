var socket = io()

//Escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor')
})

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor')
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alexis', 
    mensaje: 'Hola mundo'
}, function(){
    console.log('Se disparó el callback')
})

socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje)
})