!function(){"use strict";var t,e,i,l=window.location,n=window.document,r=n.getElementById("plausible"),o=r.getAttribute("data-api")||(t=r.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function p(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var i={};i.n=t,i.u=l.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props));var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4==a.readyState&&e&&e.callback&&e.callback()}}}function s(t){for(var e=t.target,i="auxclick"==t.type&&2==t.which,a="click"==t.type;e&&(void 0===e.tagName||"a"!=e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==l.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){l.href=e.href},150),t.preventDefault()))}n.addEventListener("click",s),n.addEventListener("auxclick",s);var c=r.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function d(t){for(var e,i,a,n=t.target,r="auxclick"==t.type&&2==t.which,o="click"==t.type;n&&(void 0===n.tagName||"a"!=n.tagName.toLowerCase()||!n.href);)n=n.parentNode;n&&n.href&&(e=n.href,i=e.split("/"),a=i[i.length-1].match(/\.[0-9a-z]+$/i)[0],c.includes(a))&&((r||o)&&plausible("File Download",{props:{url:n.href}}),n.target&&!n.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!o||(setTimeout(function(){l.href=n.href},150),t.preventDefault()))}n.addEventListener("click",d),n.addEventListener("auxclick",d);var u=window.plausible&&window.plausible.q||[];window.plausible=a;for(var f,h=0;h<u.length;h++)a.apply(this,u[h]);function w(){f!==l.pathname&&(f=l.pathname,a("pageview"))}var g,v=window.history;v.pushState&&(g=v.pushState,v.pushState=function(){g.apply(this,arguments),w()},window.addEventListener("popstate",w)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){f||"visible"!==n.visibilityState||w()}):w()}();