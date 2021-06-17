let nowDate = new Date();
function formatDate(date){
    let days=["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let day=days[date.getDay()];

    let hours=date.getHours();
    if (hours<10) {
        hours =`0${hours}`;
        
    }
    let minutes=date.getMinutes();
    if (minutes<0) {
        minutes=`0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
}
let currentDate=document.querySelector("#displayDate");
currentDate.innerHTML=formatDate(nowDate);

