"use strict";(self.webpackChunksuperheroes_client=self.webpackChunksuperheroes_client||[]).push([[499],{3499:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(885),a="Gallery_list__QACVh",u=n(7689),c=n(2791),i=n(9187),o=n(6713),s=n(5562),l={item:"ImageItem_item__qIMBR",image:"ImageItem_image__n7Ivz"},p=n(184);function f(t){var e=t.image,n=t.setImages,r=(0,u.TH)().pathname;return(0,p.jsxs)("li",{className:l.item,children:[(0,p.jsx)("img",{className:l.image,height:"250",src:e?"".concat(i.YQ,"/").concat(e):"".concat(i.YQ,"/default.png"),alt:"hero avatar"}),(0,p.jsx)(o.Z,{variant:"contained",className:l.button,onClick:function(){return function(t){(0,i._Q)("".concat(r,"/").concat(t)).then((function(e){s.Notify.success(e.data.message,{timeout:2e3,clickToClose:!0}),n((function(e){return e.filter((function(e){return e!==t}))}))}))}(e)},children:"Remove"})]},e)}function d(){var t=(0,u.UO)().heroId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),o=n[0],s=n[1];return(0,c.useEffect)((function(){(0,i.iH)(t).then((function(t){s(t.images)}))}),[t]),(0,p.jsx)("ul",{className:a,children:o.map((function(t){return(0,p.jsx)(f,{image:t,setImages:s},t)}))})}},9187:function(t,e,n){n.d(e,{CZ:function(){return s},Cc:function(){return h},Ww:function(){return p},XS:function(){return d},YQ:function(){return o},_Q:function(){return x},iH:function(){return y}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1044),i=n(5264);c.ZP.defaults.baseURL="http://146.59.87.87:8080/api/heroes";var o="http://146.59.87.87:8080/avatars";function s(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.ZP)({method:"post",url:"/",data:e,headers:{"Content-Type":"multipart/form-data"}});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),i.Notify.failure(null===(n=t.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function p(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.ZP)({method:"patch",url:"/".concat(e),data:n,headers:{"Content-Type":"multipart/form-data"}});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),i.Notify.failure(null===(r=t.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.error);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.ZP.delete("/".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),i.Notify.failure(null===(n=t.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(u().mark((function t(){var e,n,r,a,o,s,l=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:5,n=l.length>1&&void 0!==l[1]?l[1]:1,t.prev=2,t.next=5,(0,c.ZP)("?limit=".concat(e,"&page=").concat(n));case 5:return r=t.sent,a=r.data.data,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(2),i.Notify.failure(null===(o=t.t0.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.error);case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),m.apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n,r,a,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.ZP)("/".concat(e));case 3:return n=t.sent,r=n.data.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),i.Notify.failure(null===(a=t.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.error);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.ZP.patch("".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),i.Notify.failure(null===(n=t.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.error);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}i.Notify.init({clickToClose:!0})}}]);
//# sourceMappingURL=499.7aa11b72.chunk.js.map