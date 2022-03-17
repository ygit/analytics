!function(){"use strict";var l=window.location,n=window.document,o=n.currentScript,c=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event",p=o&&o.getAttribute("data-exclude").split(",");function s(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}if(p)for(var a=0;a<p.length;a++)if("pageview"==e&&l.pathname.match(new RegExp("^"+p[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return s("exclusion rule");var r={};r.n=e,r.u=t&&t.u?t.u:l.href,r.d=o.getAttribute("data-domain"),r.r=n.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=JSON.stringify(t.props));var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,r="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}n.addEventListener("click",t),n.addEventListener("auxclick",t);var u=o.getAttribute("file-types")||[".pdf",".xlsx",".docx",".txt",".rtf",".csv",".exe",".key",".pps",".ppt",".pptx",".7z",".pkg",".rar",".gz",".zip",".avi",".mov",".mp4",".mpeg",".wmv",".midi",".mp3",".wav",".wma"];function a(e){for(var t,a,r,i=e.target,n="auxclick"==e.type&&2==e.which,o="click"==e.type;i&&(void 0===i.tagName||"a"!=i.tagName.toLowerCase()||!i.href);)i=i.parentNode;i&&i.href&&(t=i.href,a=t.split("/"),r=a[a.length-1].match(/\.[0-9a-z]+$/i)[0],u.includes(r))&&((n||o)&&plausible("File Download",{props:{url:i.href}}),i.target&&!i.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!o||(setTimeout(function(){l.href=i.href},150),e.preventDefault()))}n.addEventListener("click",a),n.addEventListener("auxclick",a);var r=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i=0;i<r.length;i++)e.apply(this,r[i])}();