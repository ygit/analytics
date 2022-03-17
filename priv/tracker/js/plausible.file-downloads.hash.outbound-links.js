!function(){"use strict";var l=window.location,r=window.document,n=r.currentScript,o=n.getAttribute("data-api")||new URL(n.src).origin+"/api/event";function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}var i={};i.n=e,i.u=l.href,i.d=n.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,i="auxclick"==e.type&&2==e.which,a="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}r.addEventListener("click",t),r.addEventListener("auxclick",t);var s=n.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function i(e){for(var t,i,a,r=e.target,n="auxclick"==e.type&&2==e.which,o="click"==e.type;r&&(void 0===r.tagName||"a"!=r.tagName.toLowerCase()||!r.href);)r=r.parentNode;r&&r.href&&(t=r.href,i=t.split("/"),a=i[i.length-1].match(/\.[0-9a-z]+$/i)[0],s.includes(a))&&((n||o)&&plausible("File Download",{props:{url:r.href}}),r.target&&!r.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=r.href},150),e.preventDefault()))}r.addEventListener("click",i),r.addEventListener("auxclick",i);var a=window.plausible&&window.plausible.q||[];window.plausible=e;for(var p,d=0;d<a.length;d++)e.apply(this,a[d]);function f(){p=l.pathname,e("pageview")}window.addEventListener("hashchange",f),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){p||"visible"!==r.visibilityState||f()}):f()}();