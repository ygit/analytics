!function(){"use strict";var p=window.location,n=window.document,r=n.currentScript,o=r.getAttribute("data-api")||new URL(r.src).origin+"/api/event";function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var i={};i.n=e,i.u=p.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}var l=r.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function t(e){for(var t,i,a,n=e.target,r="auxclick"==e.type&&2==e.which,o="click"==e.type;n&&(void 0===n.tagName||"a"!=n.tagName.toLowerCase()||!n.href);)n=n.parentNode;n&&n.href&&(t=n.href,i=t.split("/"),a=i[i.length-1].match(/\.[0-9a-z]+$/i)[0],l.includes(a))&&((r||o)&&plausible("File Download",{props:{url:n.href}}),n.target&&!n.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){p.href=n.href},150),e.preventDefault()))}n.addEventListener("click",t),n.addEventListener("auxclick",t);var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,s=0;s<i.length;s++)e.apply(this,i[s]);function c(){a=p.pathname,e("pageview")}window.addEventListener("hashchange",c),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){a||"visible"!==n.visibilityState||c()}):c()}();