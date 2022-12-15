function relogio() {
    var data=new Date()
    var horas=data.getHours()
    var minutos=data.getMinutes()
    var segundos=data.getSeconds()
    var text=document.getElementsByTagName('span')
    text[0].innerHTML=horas
    text[1].innerHTML=minutos
    text[2].innerHTML=segundos
    //document.body.style.background=`rgb(${minutos},${horas},${segundos})`
}
setInterval(relogio,1000)