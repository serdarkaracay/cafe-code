function domainName(url){

    const regexList = [
   '(?:https?:\/\/)?',   /*https*/
   '(?:www\.)?',         /*www*/
   '([^\.]+)',           /*domain*/
   '.(.*?)',             /*extension*/
   '.*'                  /*path*/
    ]
    
    const regex = new RegExp(regexList.join(''))
    return url.match(regex)[1]
  }

const Test = require("chai").assert;
Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");