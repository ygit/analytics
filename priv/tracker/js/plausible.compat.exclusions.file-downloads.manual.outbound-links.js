!function(){"use strict";var e,t,a,l=window.location,n=window.document,o=n.getElementById("plausible"),p=o.getAttribute("data-api")||(e=o.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event"),c=o&&o.getAttribute("data-exclude").split(",");function s(e){console.warn("Ignoring Event: "+e)}function r(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}if(c)for(var a=0;a<c.length;a++)if("pageview"==e&&l.pathname.match(new RegExp("^"+c[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return s("exclusion rule");var r={};r.n=e,r.u=t&&t.u?t.u:l.href,r.d=o.getAttribute("data-domain"),r.r=n.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=JSON.stringify(t.props));var i=new XMLHttpRequest;i.open("POST",p,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}}}function i(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,r="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}n.addEventListener("click",i),n.addEventListener("auxclick",i);var u=o.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function f(e){for(var t,a,r,i=e.target,n="auxclick"==e.type&&2==e.which,o="click"==e.type;i&&(void 0===i.tagName||"a"!=i.tagName.toLowerCase()||!i.href);)i=i.parentNode;i&&i.href&&(t=i.href,a=t.split("/"),r=a[a.length-1].match(/\.[0-9a-z]+$/i)[0],u.includes(r))&&((n||o)&&plausible("File Download",{props:{url:i.href}}),i.target&&!i.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=i.href},150),e.preventDefault()))}n.addEventListener("click",f),n.addEventListener("auxclick",f);var d=window.plausible&&window.plausible.q||[];window.plausible=r;for(var h=0;h<d.length;h++)r.apply(this,d[h])}();