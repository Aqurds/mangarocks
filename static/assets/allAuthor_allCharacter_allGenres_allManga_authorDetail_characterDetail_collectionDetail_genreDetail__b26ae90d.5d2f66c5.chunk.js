(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1128:function(e,t,r){"use strict";r.d(t,"a",function(){return g});var n,o=r(0),a=r.n(o),i=(r(6),r(11)),l=r.n(i),s=r(5),c=r.n(s),p=r(149),u=r.n(p),f=r(29),b=r(1132),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function h(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g={H1:"h1",H2:"h2",H3:"h3",HEADLINE:"headline",SMALLBODY:"smallbody"},w=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.getTrailingIcon=function(){var e=n.props,t=e.trailingIconProps,r=e.trailingIcon,o=t.label,i=t.position,l=void 0===i?b.a.TOP:i,s=h(t,["label","position"]);return a.a.createElement(b.b,m({label:o,position:l},s),d(f.a,{name:r,className:u.a.trailingIcon}))},v(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),y(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=e.tag,o=e.actions,i=e.uppercase,l=e.trailingIcon,s=(e.trailingIconProps,h(e,["className","children","tag","actions","uppercase","trailingIcon","trailingIconProps"])),p=c()(u.a.root,t);return a.a.createElement("div",m({className:p},s),d("div",{className:c()(u.a.textGroup,u.a[n])},void 0,i?r.toUpperCase():r,l&&this.getTrailingIcon()),o&&d("div",{className:u.a.actionWrap},void 0,o))}}]),t}();w.defaultProps={className:null,tag:g.H3,uppercase:!1,actions:null,trailingIcon:null,trailingIconProps:{}};w.ActionWrap=function(e){var t=e.className,r=e.children,n=h(e,["className","children"]);return a.a.createElement("div",m({className:c()(u.a.action,t)},n),r)},t.b=l()(u.a)(w)},1130:function(e,t,r){"use strict";var n=r(1128);r.d(t,"a",function(){return n.a}),t.b=n.b},1131:function(e,t,r){"use strict";var n,o=r(0),a=r.n(o),i=(r(6),r(51)),l=r(23),s=r(8),c=r(2),p=r(4),u=r(53),f=r(24),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),d(t,[{key:"render",value:function(){var e=this.props,t=e.subscriptionEligible,r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["subscriptionEligible"]);return delete r.dispatch,t?m(u.a.Provider,{value:{location:f.A}},void 0,a.a.createElement(l.a,b({to:"/membership"},r),"Remove all Ads on Manga Rock")):null}}]),t}();y.defaultProps={subscriptionEligible:!1},t.a=Object(i.a)(function(e){return{subscriptionEligible:p.cb||!!(e[c.B]&&e[c.B].subscriptionPlan&&e[c.B].subscriptionPlan.eligible)}},null,null,{areStatesEqual:function(e,t){return Object(s.o)(e,t,null,function(e){return!!(e[c.B]&&e[c.B].subscriptionPlan&&e[c.B].subscriptionPlan.eligible)})}})(y)},1132:function(e,t,r){"use strict";r.d(t,"a",function(){return y});var n,o=r(0),a=r.n(o),i=(r(6),r(5)),l=r.n(i),s=r(11),c=r.n(s),p=r(169),u=r(1133),f=r.n(u),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var y={LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom"},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.PureComponent),d(t,[{key:"render",value:function(){var e,t,r,n=this.props,o=n.label,i=n.children,s=n.position,c=n.className,u=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(n,["label","children","position","className"]),f=Math.random().toString(36).substr(2),d="string"==typeof o?m("span",{},void 0,o):o,y=void 0;return y="string"==typeof i?m("span",{},void 0,i):a.a.Children.only(i),a.a.createElement("div",b({className:l()("mdl-tooltip--wrapper",c)},u),a.a.cloneElement(y,{id:f}),m(p.a,{},void 0,a.a.cloneElement(d,{htmlFor:f,className:l()("mdl-tooltip",(e={},t="mdl-tooltip--"+s,r=void 0!==s,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e))})))}}]),t}();h.defaultProps={position:"bottom",className:null},t.b=c()(f.a)(h)},1133:function(e,t,r){var n=r(1134),o=r(15);"string"==typeof n&&(n=[[e.i,n,""]]),e.exports=n.locals||{},e.exports._getContent=function(){return n},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return o(n,e)}},1134:function(e,t,r){(t=e.exports=r(14)(!1)).push([e.i,'@-webkit-keyframes menuAnimation{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes menuAnimation{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.mdl-tooltip--wrapper{display:inline-block}.mdl-tooltip{color:rgba(0,0,0,.54);font-size:14px;font-size:.875rem;font-weight:400;line-height:16px;color:#fff;max-width:400px}@media (max-width:599px){.mdl-tooltip{font-size:.875rem;line-height:16px}}.mdl-tooltip--bottom:after{content:"";position:absolute;top:-10px;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.87)}.mdl-tooltip--left:before{right:-10px;border-color:transparent transparent transparent rgba(0,0,0,.87)}.mdl-tooltip--left:before,.mdl-tooltip--right:before{content:"";position:absolute;top:30%;margin-left:-5px;border-width:5px;border-style:solid}.mdl-tooltip--right:before{left:-5px;border-color:transparent rgba(0,0,0,.87) transparent transparent}.mdl-tooltip--top:before{content:"";position:absolute;bottom:-10px;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:rgba(0,0,0,.87) transparent transparent}',""]),t.locals={customcontainermaxwidth:"1280px"}},1138:function(e,t,r){"use strict";var n,o=r(0),a=r.n(o),i=r(28),l=r.n(i),s=(r(6),r(1130)),c=r(1236),p=r.n(c),u=r(1131),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var d=b("br",{}),y=b("b",{},void 0,"Thank you!"),h=b("img",{src:"/svg/sad.svg",alt:"Please put MangaRock in your white list"}),v=b("br",{}),g=b("br",{}),w=b("br",{}),x=b("br",{}),O=b("b",{},void 0,"Thank you!"),_=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),m(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.noTitle,n=e.isBottomAds,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["className","noTitle","isBottomAds"]);return n?a.a.createElement("span",f({className:t,id:"bottom-banner-ads",style:{width:728}},o),b("div",{className:p.a.warning},void 0,b("div",{className:p.a.imgWr},void 0,b("img",{className:p.a.sImg,src:"/svg/sad.svg",alt:"Please put MangaRock in your white list"})),b("div",{className:p.a.warningText},void 0,"We know you don’t like ads, but they help us pay for the site.",d,"Please add us to your adblocker’s whitelist. ",y))):b(a.a.Fragment,{},void 0,a.a.createElement("span",f({className:t},o),!r&&b(s.b,{className:p.a.title,tag:s.a.H2},void 0,"SPONSORED CONTENT"),b("div",{className:p.a.warning},void 0,b("div",{className:p.a.imgWr},void 0,h),b("div",{className:p.a.warningText},void 0,"We know you don’t like ads, but they help us pay for the site.",v,g,"Please add us to your adblocker’s whitelist.",w,x,O)),!r&&b("div",{className:p.a.text},void 0,"We work hard to make sure the ads are non-intrusive & won’t interfere with your reading.")),b(u.a,{className:p.a.removeAdsPrompt}))}}]),t}();_.defaultProps={className:null,noTitle:!1,isBottomAds:!1};var k=l()(p.a)(_);t.a=k},1164:function(e,t,r){"use strict";var n,o=r(0),a=r.n(o),i=r(51),l=(r(6),r(5)),s=r.n(l),c=r(28),p=r.n(c),u=r(348),f=r(4),b=r(2),m=r(8),d=r(1138),y=r(1452),h=r.n(y),v=r(1131),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}),x=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var O=w(d.a,{}),_=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={isMobile:Object(m.n)()},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),x(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.adsID,r=e.havingAdBlocker,n=e.isHomePage,o=e.isRightRail,a=this.state.isMobile,i=void 0===a?null:a;if(!r){var l=document.createElement("script");l.type="text/javascript",l.innerHTML="\n        window._taboola = window._taboola || [];\n        _taboola.push({\n            mode: 'thumbnails-"+(i&&!o?"c":"rr")+"',\n            container: '"+t+"',\n            placement: '"+(i&&!o?"Mobile Below Article Thumbnails":"Right Rail Thumbnails"+(n?" Mobile":" 2nd"))+"',\n            target_type: 'mix'\n        });\n      ",this.taboola.appendChild(l)}}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;var t=this.props,r=(t.adsClassName,t.className),n=(t.url,t.havingAdBlocker),o=t.adsID,i=(t.isRightRail,t.isHomePage,t.dispatch,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["adsClassName","className","url","havingAdBlocker","adsID","isRightRail","isHomePage","dispatch"])),l=w("div",{className:h.a.ads},void 0,w("div",{id:o}),a.a.createElement("div",{ref:function(t){e.taboola=t}}));return w(a.a.Fragment,{},void 0,a.a.createElement(u.a,g({noPadding:!0,className:s()(h.a.root,r)},i),n?O:l),!n&&w(v.a,{className:h.a.removeAdsPrompt}))}}]),t}();_.defaultProps={className:null,adsClassName:null,url:"/iframe/taboola.html",havingAdBlocker:!1,adsID:"taboola-article-thumbnails",isHomePage:!1,isRightRail:!0};var k=Object(i.a)(function(e){return{havingAdBlocker:e[b.v][f.I]||!1}})(p()(h.a)(_));t.a=k},1236:function(e,t,r){var n=r(1237),o=r(15);"string"==typeof n&&(n=[[e.i,n,""]]),e.exports=n.locals||{},e.exports._getContent=function(){return n},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return o(n,e)}},1237:function(e,t,r){(t=e.exports=r(14)(!1)).push([e.i,"@-webkit-keyframes _1i0c_{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes _1i0c_{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}._1BvnL,.UuD8-{padding:20px}.UuD8-{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff9800;color:#fff}._3NGlH{color:#ff9800;padding:20px;font-size:14px;font-size:.875rem}._1OAUI{margin-right:20px}._2rokJ{width:50px;height:50px}._3frpA{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0}.vcs4p{display:block;text-align:center;padding-bottom:12px}",""]),t.locals={customcontainermaxwidth:"1280px",title:"_1BvnL",warning:"UuD8-",text:"_3NGlH",imgWr:"_1OAUI",sImg:"_2rokJ",warningText:"_3frpA",removeAdsPrompt:"vcs4p",menuAnimation:"_1i0c_"}},1452:function(e,t,r){var n=r(1453),o=r(15);"string"==typeof n&&(n=[[e.i,n,""]]),e.exports=n.locals||{},e.exports._getContent=function(){return n},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return o(n,e)}},1453:function(e,t,r){(t=e.exports=r(14)(!1)).push([e.i,"@-webkit-keyframes _3WQ94{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes _3WQ94{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@media (max-width:479px){.tRKb_{margin-left:-10px;margin-right:-10px}}@media (max-width:599px){._288GW{margin-left:20px}}._3B6_7{padding:20px 20px 0}",""]),t.locals={customcontainermaxwidth:"1280px",root:"tRKb_",removeAdsPrompt:"_288GW",ads:"_3B6_7",menuAnimation:"_3WQ94"}}}]);