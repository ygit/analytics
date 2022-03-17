!function(){"use strict";var e,t,i,l=window.location,n=window.document,r=n.getElementById("plausible"),o=r.getAttribute("data-api")||(e=r.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function a(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var i={};i.n=e,i.u=l.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}function p(e){for(var t=e.target,i="auxclick"==e.type&&2==e.which,a="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}n.addEventListener("click",p),n.addEventListener("auxclick",p);var s=r.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function c(e){for(var t,i,a,n=e.target,r="auxclick"==e.type&&2==e.which,o="click"==e.type;n&&(void 0===n.tagName||"a"!=n.tagName.toLowerCase()||!n.href);)n=n.parentNode;n&&n.href&&(t=n.href,i=t.split("/"),a=i[i.length-1].match(/\.[0-9a-z]+$/i)[0],s.includes(a))&&((r||o)&&plausible("File Download",{props:{url:n.href}}),n.target&&!n.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=n.href},150),e.preventDefault()))}n.addEventListener("click",c),n.addEventListener("auxclick",c);var d=window.plausible&&window.plausible.q||[];window.plausible=a;for(var f,u=0;u<d.length;u++)a.apply(this,d[u]);function h(){f=l.pathname,a("pageview")}window.addEventListener("hashchange",h),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){f||"visible"!==n.visibilityState||h()}):h()}();