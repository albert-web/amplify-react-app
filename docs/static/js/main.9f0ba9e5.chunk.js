(this["webpackJsonpamplify-react-app"]=this["webpackJsonpamplify-react-app"]||[]).push([[0],{119:function(e,t,a){e.exports=a(172)},124:function(e,t,a){},126:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},127:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a.n(n),o=a(104),r=a.n(o),i=(a(124),a(54)),s=a(73),l=a(74),u=a.n(l),p=a(105),m=a(65),f=(a(126),a(127),a(103)),d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],r=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,f.a.get("cryptoapi","/coins?limit=".concat(h.limit,"&start=").concat(h.start));case 4:t=e.sent,o(t.coins),console.log(j),E(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[]);var l=Object(n.useState)({start:0,limit:3}),d=Object(m.a)(l,2),h=d[0],g=d[1],v=function(e,t){g(Object(s.a)(Object(s.a)({},h),{},Object(i.a)({},e,t)))},b=Object(n.useState)(!0),w=Object(m.a)(b,2),j=w[0],E=w[1];return c.a.createElement("div",{className:"App"},c.a.createElement("input",{placeholder:"start here...",onChange:function(e){return v("start",e.target.value)}}),c.a.createElement("input",{placeholder:"limit to...",onChange:function(e){return v("limit",e.target.value)}}),c.a.createElement("button",{onClick:r},"Fetch Coins"),j&&c.a.createElement("h3",null,"Loading coin data ..."),!j&&a.map((function(e){return c.a.createElement("div",{key:e.symbol},c.a.createElement("h2",null,e.name," - ",e.symbol),c.a.createElement("h5",null,"$",e.price_usd))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={aws_project_region:"us-east-2",aws_cloud_logic_custom:[{name:"cryptoapi",endpoint:"https://w4w33dsu0j.execute-api.us-east-2.amazonaws.com/local",region:"us-east-2"}]};a(71).default.configure(h),r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.9f0ba9e5.chunk.js.map