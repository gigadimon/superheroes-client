"use strict";(self.webpackChunksuperheroes_client=self.webpackChunksuperheroes_client||[]).push([[599],{7372:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(5861),a=r(885),i=r(4687),s=r.n(i),c=r(2791),o=r(7689),u=(r(3037),r(8688),r(9187)),l=r(6075),p={fieldTitle:"HeroDescription_fieldTitle__aPzep",fieldText:"HeroDescription_fieldText__dTvNR"},d=r(184);function f(e){var t=e.hero,r=t.origin_description,n=t.superpowers,a=t.catch_phrase;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{className:p.field,children:[(0,d.jsx)("span",{className:p.fieldTitle,children:"Description: "}),(0,d.jsx)("span",{className:p.fieldText,children:r||"Nothing"})]}),(0,d.jsxs)("p",{className:p.field,children:[(0,d.jsx)("span",{className:p.fieldTitle,children:"Superpowers: "}),(0,d.jsx)("span",{className:p.fieldText,children:null!==n&&void 0!==n&&n.length?n.map((function(e,t,r){return t!==r.length-1?"".concat(e,", "):e})):"Nothing"})]}),(0,d.jsxs)("p",{className:p.field,children:[(0,d.jsx)("span",{className:p.fieldTitle,children:"Catch Phrase: "}),(0,d.jsx)("span",{className:p.fieldText,children:a||"Nothing"})]})]})}var h="HeroTitle_nameWrapper__2kCIZ",m="HeroTitle_nickname__g8Hig",v="HeroTitle_realName__LiVkb";function x(e){var t=e.hero,r=t.nickname,n=t.real_name;return(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h1",{className:m,children:r}),(0,d.jsx)("h2",{className:v,children:n||"Nothing"})]})}var _=r(5717),j=r(6731),N=r(6713),g="Slider_sliderWrapper__I1K5v",y="Slider_slider__mTBsc",w="Slider_galleryButton__WP4jA";function Z(e){var t=e.images,r=(0,o.UO)().heroId;return(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)(_.Z,{className:y,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,children:null!==t&&void 0!==t&&t.length?t.map((function(e){return(0,d.jsx)("div",{children:(0,d.jsx)("img",{height:"250",src:e?"".concat(u.YQ,"/").concat(e):"".concat(u.YQ,"/default.png"),alt:"avatar hero ".concat(r)})},e)})):(0,d.jsx)("img",{height:"250",src:"".concat(u.YQ,"/default.png"),alt:"avatar hero"})}),(0,d.jsx)(j.rU,{to:"avatars",className:w,children:(0,d.jsx)(N.Z,{variant:"contained",children:"Open gallery"})})]})}var b="HeroPage_heroSection__9cQCV";function k(){var e=(0,c.useState)({}),t=(0,a.Z)(e,2),r=t[0],i=t[1],p=(0,o.UO)().heroId;function h(e){return Array.from(e).reduce((function(e,t){var r=(0,a.Z)(t,2),n=r[0],i=r[1];return e[n]=i,e}),{})}function m(){return(m=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h(t),Object.values(r).filter((function(e){return e})).length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,u.Ww)(p,t);case 5:(n=e.sent)&&(a=n.data.data,i(a));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){(0,u.iH)(p).then((function(e){i(e)}))}),[p]),(0,d.jsxs)("section",{className:b,children:[(0,d.jsx)(l.u,{editHero:function(e){return m.apply(this,arguments)}}),(0,d.jsx)(x,{hero:r}),(0,d.jsx)(Z,{images:r.images}),(0,d.jsx)(f,{hero:r})]})}},6075:function(e,t,r){r.d(t,{u:function(){return _}});var n=r(5861),a=r(885),i=r(4687),s=r.n(i),c=r(5700),o=r(2791),u=r(7689),l=r(8993),p=r(6713),d={form:"Form_form__pVoDp",textInput:"Form_textInput__mO+aF",submit:"Form_submit__2RJ79",file:"Form_file__+2nLS",avatar:"Form_avatar__SRuty"},f=r(184);function h(e){var t=e.submitHandler,r=(0,o.useState)(!1),n=(0,a.Z)(r,2),i=n[0],s=n[1],c=(0,u.UO)().heroId;function h(e){if(e.currentTarget.files.length)return s(!0);s(!1)}return(0,o.useEffect)((function(){var e;return null===(e=document.getElementById("avatar"))||void 0===e||e.addEventListener("change",h),function(){var e;null===(e=document.getElementById("avatar"))||void 0===e||e.removeEventListener("change",h)}}),[]),(0,f.jsxs)("form",{id:"form",encType:"multipart/form-data",className:d.form,onSubmit:function(e){t(e),s(!1)},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(l.Z,{required:!c,label:"nickname",id:"nickname",size:"small",name:"nickname",className:"".concat(d.textInput," ").concat(d.input)}),(0,f.jsx)(l.Z,{label:"real name",id:"real_name",name:"real_name",size:"small",className:"".concat(d.textInput," ").concat(d.input)}),(0,f.jsx)(l.Z,{label:"superpowers",id:"superpowers",name:"superpowers",size:"small",className:"".concat(d.textInput," ").concat(d.input)})]}),(0,f.jsx)(l.Z,{fullWidth:!0,label:"description",id:"origin_description",name:"origin_description",className:"".concat(d.longInput," ").concat(d.input)}),(0,f.jsx)(l.Z,{fullWidth:!0,label:"catch phrase",id:"catch_phrase",name:"catch_phrase",className:"".concat(d.longInput," ").concat(d.input)}),(0,f.jsx)("label",{htmlFor:"avatar",className:d.avatar,children:i?"File uploaded":"Upload avatar"}),(0,f.jsx)("input",{id:"avatar",name:"avatar",type:"file",className:d.file}),(0,f.jsx)(p.Z,{type:"submit",className:d.submit,children:c?"edit hero":"create hero"})]})}var m=r(7138),v="Modal_formContainer__qjdQf",x="Modal_title__3HkNf";function _(e){var t=e.editHero,r=e.createHero,i=(0,o.useContext)(m.t),l=i.open,p=i.closeModal,d=(0,u.UO)().heroId;function _(e){for(var t=0,r=Array.from(e);t<r.length;t++){var n=(0,a.Z)(r[t],2),i=n[0];n[1]||e.delete(i)}}function j(){return(j=(0,n.Z)(s().mark((function e(n){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=n.currentTarget,_(i=new FormData(a)),!d){e.next=9;break}return e.next=7,t(i);case 7:e.next=11;break;case 9:return e.next=11,r(i);case 11:a.reset(),p();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,f.jsx)(c.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},onClick:p,open:l,children:(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h1",{className:x,children:d?"Enter new data for hero":"Enter new hero`s data"}),(0,f.jsx)(h,{submitHandler:function(e){return j.apply(this,arguments)}})]})})}},9187:function(e,t,r){r.d(t,{CZ:function(){return u},Cc:function(){return m},Ww:function(){return p},XS:function(){return f},YQ:function(){return o},_Q:function(){return j},iH:function(){return x}});var n=r(5861),a=r(4687),i=r.n(a),s=r(1044),c=r(5264);s.ZP.defaults.baseURL="http://146.59.87.87:8080/api/heroes";var o="http://146.59.87.87:8080/avatars";function u(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)({method:"post",url:"/",data:t,headers:{"Content-Type":"multipart/form-data"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),c.Notify.failure(null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)({method:"patch",url:"/".concat(t),data:r,headers:{"Content-Type":"multipart/form-data"}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),c.Notify.failure(null===(n=e.t0.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.error);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.delete("/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),c.Notify.failure(null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(i().mark((function e(){var t,r,n,a,o,u,l=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:5,r=l.length>1&&void 0!==l[1]?l[1]:1,e.prev=2,e.next=5,(0,s.ZP)("?limit=".concat(t,"&page=").concat(r));case 5:return n=e.sent,a=n.data.data,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(2),c.Notify.failure(null===(o=e.t0.response)||void 0===o||null===(u=o.data)||void 0===u?void 0:u.error);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),v.apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(i().mark((function e(t){var r,n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ZP)("/".concat(t));case 3:return r=e.sent,n=r.data.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),c.Notify.failure(null===(a=e.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function j(e){return N.apply(this,arguments)}function N(){return(N=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.patch("".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),c.Notify.failure(null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.error);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}c.Notify.init({clickToClose:!0})}}]);
//# sourceMappingURL=599.85a474a5.chunk.js.map