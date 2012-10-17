/*
Author: Sean Korzdorfer
Date:   14:10:34 Wed May 23 2012

Call using : 

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://dl.dropbox.com/u/5591113/bin/drafts-url.js';})();

*/


function formatsDate(d){
    var curr_month = d.getMonth();
    curr_month = curr_month + 1;
    return d.getFullYear() + "-" + curr_month + "-" + d.getDate();
}




var d = new Date();
var dateString = formatsDate(d);
/*var curr_hour = d.getHours();
var curr_min = d.getMinutes();
var curr_sec = d.getSeconds();
if (curr_hour < 10){curr_hour = "0" + curr_hour;}
if (curr_min < 10){curr_min = "0" + curr_min;}
if (curr_sec < 10){curr_sec = "0" + curr_sec;}*/



window.location='drafts://x-callback-url/create?text=' + encodeURIComponent(document.title) + '%20@' + dateString + '%0A' + encodeURIComponent(document.location.href);


