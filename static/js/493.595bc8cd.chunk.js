"use strict";(self.webpackChunk_100rokiv_react=self.webpackChunk_100rokiv_react||[]).push([[493],{5420:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(1087),a={sectionTitle:"Title_sectionTitle__eKRYc",container:"Title_container__9RC62",img:"Title_img__IONOA",none:"Title_none__81aBZ",imgFounders:"Title_imgFounders__NL1zs",title:"Title_title__IlEm8",text:"Title_text__jbAm1",textFounders:"Title_textFounders__exwMC",btnLink:"Title_btnLink__FcOez",btnBook:"Title_btnBook__Iw2PI"},s=r(184);function l(e){var t=e.img,r=e.title,l=e.textParag1,i=e.textParag2,o=e.textParag3,c=e.textParag4,u=e.btnBook,m=void 0===u||u,d=e.textClass,f=void 0===d?"text":d,h=e.imgClass,x=void 0===h?"img":h;return(0,s.jsxs)("section",{className:a.sectionTitle,children:[(0,s.jsx)("img",{className:a[x],src:t,alt:r}),(0,s.jsxs)("div",{className:a.container,children:[(0,s.jsx)("h1",{className:a.title,children:r}),(0,s.jsx)("p",{className:a[f],children:l}),(0,s.jsx)("p",{className:a[f],children:i}),(0,s.jsx)("p",{className:a[f],children:o}),(0,s.jsx)("p",{className:a[f],children:c}),m&&(0,s.jsx)("div",{className:a.btnLink,children:(0,s.jsx)(n.rU,{to:"/book",className:a.btnBook,children:"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u043b\u0438\u043a"})})]})]})}},493:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n,a,s,l=r(4805),i=r(9434),o=r(5420),c=r(6742),u=r(1413),m=r(5290),d=r(9997),f=r(7187),h=r(5970),x=r(2426),_=r.n(x),v=r(2791),j=r(2034),g=r(7023),b=r(3816),p=function(e){return e.email.loading},N=function(e){return e.email.success},y=r(1232),O=["title","titleId"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function Z(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function C(e,t){var r=e.title,l=e.titleId,i=Z(e,O);return v.createElement("svg",k({width:10,height:10,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:t,"aria-labelledby":l},i),r?v.createElement("title",{id:l},r):null,n||(n=v.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),a||(a=v.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),s||(s=v.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var F=v.forwardRef(C),T=(r.p,"GiftVouchersForm_section__TXhTI"),P="GiftVouchersForm_form__XWxW9",w="GiftVouchersForm_input__DhyOs",I="GiftVouchersForm_btn__r+m+G",B="GiftVouchersForm_errorOverlay__QXWep",M="GiftVouchersForm_errorMessage__92lfV",V="GiftVouchersForm_successbox__t-91O",G="GiftVouchersForm_select__M94zS",z=r(184);function E(){var e=(0,i.I0)(),t=(0,i.v9)(N),r=(0,m.cI)({defaultValues:{name:"",tel:"",sum:""}}),n=r.control,a=r.register,s=r.handleSubmit,l=r.reset,o=r.formState.errors;(0,v.useEffect)((function(){e((0,y.r)(!1))}),[]);return(0,z.jsx)("section",{className:T,children:!0===t?(0,z.jsx)("div",{className:V,children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}):(0,z.jsxs)("form",{className:P,onSubmit:s((function(t,r){r.preventDefault();var n=_()(new Date).format("DD-MM-yyyy, HH:mm");e((0,j.s)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),e((0,g.a)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),e((0,b.I)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),l()})),children:[(0,z.jsx)(m.Qr,{name:"sum",control:n,rules:{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,z.jsx)(d.ZP,{placeholder:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0443\u043c\u0443 ...",className:G,isClearable:!0,onChange:r,value:n,options:[{value:"1000",label:"1000 \u0433\u0440\u043d"},{value:"1500",label:"1500 \u0433\u0440\u043d"},{value:"2000",label:"2000 \u0433\u0440\u043d"},{value:"2500",label:"2500 \u0433\u0440\u043d"},{value:"3000",label:"3000 \u0433\u0440\u043d"}]})}}),(0,z.jsx)(h.B,{errors:o,name:"sum",render:function(e){var t=e.message;return(0,z.jsxs)("div",{className:B,children:[(0,z.jsx)(F,{}),(0,z.jsx)("p",{className:M,children:t})]})}}),(0,z.jsx)("label",{htmlFor:"",children:(0,z.jsx)("input",(0,u.Z)((0,u.Z)({className:w},a("name",{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435",pattern:{value:/[A-Za-z]|[\u0431\u0432\u0433\u0491\u0434\u0436\u0437\u043a\u043b\u043c\u043d\u043f\u0440\u0441\u0442\u0444\u0445\u0446\u0447\u0448\u0449\u0439\u0430\u0435\u0454\u0438\u0456\u0457\u043e\u0443\u044e\u044f\u044c]/,message:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"}})),{},{type:"text",placeholder:"\u0406\u043c\u2018\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u043e\u0433\u043e, \u0445\u0442\u043e \u0434\u0430\u0440\u0443\u0454"}))}),(0,z.jsx)(h.B,{errors:o,name:"name",render:function(e){var t=e.message;return(0,z.jsxs)("div",{className:B,children:[(0,z.jsx)(F,{}),(0,z.jsx)("p",{className:M,children:t})]})}}),(0,z.jsx)(m.Qr,{control:n,name:"tel",rules:{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},render:function(e){var t=e.field,r=t.onChange,a=t.value;return(0,z.jsx)(f.ZP,{maxLength:"16",value:a,placeholder:"(99) 999-99-99",name:"query",control:n,onChange:r,defaultCountry:"UA",international:!0,error:a&&(0,f.tm)(a)?"true":"false"})}}),(0,z.jsx)(h.B,{errors:o,name:"tel",render:function(e){var t=e.message;return(0,z.jsxs)("div",{className:B,children:[(0,z.jsx)(F,{}),(0,z.jsx)("p",{className:M,children:t})]})}}),(0,z.jsx)("button",{className:I,type:"submit",children:"\u041f\u043e\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438"})]})})}var S=r(2990);var D=function(){var e=(0,l.useMediaQuery)({minWidth:1024}),t=(0,i.v9)(p);return(0,z.jsxs)("main",{children:[(0,z.jsx)(o.Z,{imgClass:"none",title:"\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442",textClass:"textFounders",textParag1:"\u041c\u0438 \u0434\u0443\u0436\u0435 \u0445\u043e\u0447\u0435\u043c\u043e, \u0430\u0431\u0438 \u0432\u0438 \u043c\u0430\u043b\u0438 \u043d\u0430\u0433\u043e\u0434\u0443 \u043f\u043e\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u0433\u0430\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0438\u0439 \u0434\u043e\u0441\u0432\u0456\u0434 \u0441\u0432\u043e\u0457\u043c \u0431\u043b\u0438\u0437\u044c\u043a\u0438\u043c \u043b\u044e\u0434\u044f\u043c. \u0417 \u0446\u0456\u0454\u044e \u0434\u0443\u043c\u043a\u043e\u044e \u043c\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u043f\u043e\u0434\u0430\u0440\u0443\u043d\u043a\u043e\u0432\u0456 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0438 \u043d\u0430 \u0441\u0443\u043c\u0438 \u0432\u0456\u0434 1 000 \u0433\u0440\u043d.",textParag2:"\u0429\u0430\u0441\u043b\u0438\u0432\u0447\u0438\u043a \u043c\u043e\u0436\u0435 \u0437\u0430\u0432\u0456\u0442\u0430\u0442\u0438 \u0443 \u043d\u0430\u0448 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 6 \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0432\u0456\u0434 \u0434\u0430\u0442\u0438 \u043f\u0440\u0438\u0434\u0431\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435, \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442 \u043d\u0435 \u0434\u0456\u0454 \u043d\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0441\u0442\u0440\u0430\u0432 \u0456 \u043d\u0430\u043f\u043e\u0457\u0432 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0430\u0431\u043e \u043a\u0443\u043f\u0456\u0432\u043b\u044e \u043a\u0432\u0438\u0442\u043a\u0456\u0432 \u043d\u0430 \u043d\u0430\u0448\u0456 \u043f\u043e\u0434\u0456\u0457 \u2013 \u0417\u0432\u0430\u043d\u0443 \u0412\u0435\u0447\u0435\u0440\u044e \u0447\u0438 \u0422\u0435\u0430\u0442\u0440 \u0407\u0436\u0456.",textParag3:"\u0420\u0430\u0434\u0438\u043c\u043e \u043d\u0435 \u0434\u0440\u0443\u043a\u0443\u0432\u0430\u0442\u0438 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442 \u2013 \u043d\u0430\u043c \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0439\u043e\u0433\u043e \u043d\u0430 \u0435\u043a\u0440\u0430\u043d\u0456 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0443.",btnBook:!1}),!0===t?(0,z.jsx)(S.Z,{}):(0,z.jsx)(E,{}),e&&(0,z.jsx)(c.Z,{navClass:"footer-navigation_desktop"})]})}}}]);
//# sourceMappingURL=493.595bc8cd.chunk.js.map