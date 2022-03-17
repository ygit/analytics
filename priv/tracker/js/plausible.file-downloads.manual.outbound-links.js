!function(){"use strict";var l=window.location,i=window.document,n=i.currentScript,o=n.getAttribute("data-api")||new URL(n.src).origin+"/api/event";function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:l.href,a.d=n.getAttribute("data-domain"),a.r=i.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var r=new XMLHttpRequest;r.open("POST",o,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4==r.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,r="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}i.addEventListener("click",t),i.addEventListener("auxclick",t);var p=n.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function a(e){for(var t,a,r,i=e.target,n="auxclick"==e.type&&2==e.which,o="click"==e.type;i&&(void 0===i.tagName||"a"!=i.tagName.toLowerCase()||!i.href);)i=i.parentNode;i&&i.href&&(t=i.href,a=t.split("/"),r=a[a.length-1].match(/\.[0-9a-z]+$/i)[0],p.includes(r))&&((n||o)&&plausible("File Download",{props:{url:i.href}}),i.target&&!i.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=i.href},150),e.preventDefault()))}i.addEventListener("click",a),i.addEventListener("auxclick",a);var r=window.plausible&&window.plausible.q||[];window.plausible=e;for(var s=0;s<r.length;s++)e.apply(this,r[s])}();