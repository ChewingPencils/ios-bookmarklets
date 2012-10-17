/*
Author: Sean Korzdorfer
Date:   14:10:34 Wed May 23 2012

Call using : 

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://dl.dropbox.com/u/5591113/bin/drafts2vp.js';})();

*/





window.location='drafts://x-callback-url/create?text=' + '[' + encodeURIComponent(document.title)+ ']('+ encodeURIComponent(document.location.href)+ ')';





