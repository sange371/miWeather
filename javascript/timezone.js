let saTime=moment().tz("Asia/Tokyo").format("dddd , MMMM Do , YYYY h:mm A");
let saElement=document.querySelector("#tokyo");
saElement.innerHTML=saTime;

let localTime=moment.tz.guess();
let localElement=document.querySelector("#local");
localElement.innerHTML=`Your current time zone is ${localTime} and the current time is ${moment().format("h:mm A")}`;