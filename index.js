setInterval( () => {
    
    // Firstly we execute time for date functionality

    date = new Date();
 
    // Than from this date function we can take time in Hour,Minute & Seconds 
    
    hourTime = date.getHours();
    minuteTime = date.getMinutes();
    secondTime = date.getSeconds();

    // Using Formula for take hour , minute & seconds
    
    // for a hour needle rotate 30 Degree in clock
    //  and some minute is alredy done with hour that's why we add minute , in a minute needle rotate minute/2
    hourRotation = 30 * hourTime + minuteTime/2;

    // For a minute , min needle rotate 6 deg with minTime 
    minuteRotation = 6 * minuteTime;

    // For a second , sec needle rotate 6 deg with secTime
    secondRotation = 6* secondTime;

    // taking CSS id & Giving style to transform

    Hour.style.transform = `rotate( ${hourRotation}deg)`;
    Minute.style.transform = `rotate( ${minuteRotation}deg)`;
    Second.style.transform = `rotate( ${secondRotation}deg)`;
    
    var sound = new Audio('Clock-Ticking.mp3');
    sound.play();

} , 1000)