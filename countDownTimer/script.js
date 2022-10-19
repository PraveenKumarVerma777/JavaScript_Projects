
const currentYear= new Date()
const getupcomingnewYear= currentYear.getFullYear()
const newYearsDate= `30 Aug ${getupcomingnewYear+1}`
const days1    = document.getElementById("day")
const hours1   = document.getElementById("hour")
const minutes1 = document.getElementById("min")
const seconds1 = document.getElementById("sec")
function countdown(){
    const newYearDate= new Date(newYearsDate)
    const currentDate= new Date()
    let totalseconds= (newYearDate-currentDate)/1000;
    const Days=Math.floor(totalseconds/3600/24)
    const Hours= Math.floor(totalseconds/3600)%24
    const Minutes= Math.floor(totalseconds/60)%60
    const Seconds= Math.floor(totalseconds%60)
    days1.innerHTML= Days;
    hours1. innerHTML= formatTime(Hours);
    minutes1.innerHTML= formatTime(Minutes);
    seconds1.innerHTML= formatTime(Seconds);
}

function formatTime(time){
    return time <10 ?(`0${time}`) :time
}
//initial call
countdown() 
setInterval(countdown,1000)

