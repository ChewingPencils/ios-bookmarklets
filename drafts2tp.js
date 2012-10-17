/*
Author: Sean Korzdorfer
Date:   14:10:34 Wed May 23 2012

Call using : 

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://dl.dropbox.com/u/5591113/bin/drafts2tp.js';})();

*/

/*
function formatDate(d){
    var d_names = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday");

    var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var curr_day = d.getDay();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();

    return d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + curr_year;
}



function formatTime(d){
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    var a_p = "";

    if (curr_hour < 12){a_p = "AM";}
    else {a_p = "PM";}
    if (curr_hour == 0){curr_hour = 12;}
    if (curr_hour > 12){curr_hour = curr_hour - 12;}
    if (curr_min < 10){curr_min = "0" + curr_min;}
    if (curr_sec < 10){curr_sec = "0" + curr_sec;}

    return curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p;
}
*/

function formatDate(d){
    var curr_month = d.getMonth();
    curr_month = curr_month + 1;
    return d.getFullYear() + "-" + curr_month + "-" + d.getDate();
}

var d = new Date();

var dateString = formatDate(d);
//var timeString = formatTime(d);

//document.getElementById("demo").innerHTML= dateString +" " + timeString;


window.location='drafts://x-callback-url/create?text=- ' + encodeURIComponent(document.title)+ '%20@'+ dateString  + '%0A%09' + encodeURIComponent(document.location.href);

//http://www.webdevelopersnotes.com/tips/html/getting_current_time_using_javascript.php3


