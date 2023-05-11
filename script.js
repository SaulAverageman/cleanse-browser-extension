blocked_sites=new Set();
blocked_sites.add('www.instagram.com')
blocked_sites.add('www.facebook.com')

const mycurrentUrl = window.location.href;
const myurlObject = new URL(mycurrentUrl);
const mydomainName = myurlObject.hostname;

if (blocked_sites.has(mydomainName)) {
    window.location.href = "https://m.media-amazon.com/images/I/51o+xu99W9L._AC_SL1000_.jpg";
}
  