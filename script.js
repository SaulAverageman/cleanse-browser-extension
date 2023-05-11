blocked_sites=new Set();
blocked_sites.add('www.instagram.com')
blocked_sites.add('www.facebook.com')

const currentUrl = window.location.href;
const urlObject = new URL(currentUrl);
const domainName = urlObject.hostname;
console.log(domainName)
if (blocked_sites.has(domainName)) {
    window.location.href = "https://m.media-amazon.com/images/I/51o+xu99W9L._AC_SL1000_.jpg";
}
  