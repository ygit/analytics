!function(){"use strict";var l=window.location,n=window.document,o=n.currentScript,p=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event",s=o&&o.getAttribute("data-exclude").split(",");function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}if(s)for(var i=0;i<s.length;i++)if("pageview"==e&&l.pathname.match(new RegExp("^"+s[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var a={};a.n=e,a.u=l.href,a.d=o.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var r=new XMLHttpRequest;r.open("POST",p,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4==r.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,i="auxclick"==e.type&&2==e.which,a="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}n.addEventListener("click",t),n.addEventListener("auxclick",t);var u=o.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function i(e){for(var t,i,a,r=e.target,n="auxclick"==e.type&&2==e.which,o="click"==e.type;r&&(void 0===r.tagName||"a"!=r.tagName.toLowerCase()||!r.href);)r=r.parentNode;r&&r.href&&(t=r.href,i=t.split("/"),a=i[i.length-1].match(/\.[0-9a-z]+$/i)[0],u.includes(a))&&((n||o)&&plausible("File Download",{props:{url:r.href}}),r.target&&!r.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=r.href},150),e.preventDefault()))}n.addEventListener("click",i),n.addEventListener("auxclick",i);var a=window.plausible&&window.plausible.q||[];window.plausible=e;for(var r,d=0;d<a.length;d++)e.apply(this,a[d]);function f(){r!==l.pathname&&(r=l.pathname,e("pageview"))}var h,w=window.history;w.pushState&&(h=w.pushState,w.pushState=function(){h.apply(this,arguments),f()},window.addEventListener("popstate",f)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){r||"visible"!==n.visibilityState||f()}):f()}();