"use strict";(self.webpackChunk_100rokiv_react=self.webpackChunk_100rokiv_react||[]).push([[889],{4856:function(e,t,i){i.d(t,{Z:function(){return p}});var a=i(885),n=i(2791),s=[{id:"1",text:"photo photo-borshch",imgUrl:i(5613)},{id:"2",text:"photo photo-buriak",imgUrl:i(5959)},{id:"3",text:"photo photo-cukini",imgUrl:i(2671)},{id:"4",text:"photo photo-galushki",imgUrl:i(4729)},{id:"5",text:"photo photo-indichka",imgUrl:i(6619)},{id:"6",text:"photo photo-kachana",imgUrl:i(1965)},{id:"7",text:"photo photo-knish",imgUrl:i(926)},{id:"8",text:"photo photo-kulish",imgUrl:i(2644)},{id:"9",text:"photo photo-kurcha",imgUrl:i(343)},{id:"10",text:"photo photo-sirnuku",imgUrl:i(3539)},{id:"11",text:"photo photo-sudak",imgUrl:i(4342)},{id:"12",text:"photo photo-tomatoMelon",imgUrl:i(233)}],o="Modal_overlay__b+zEz",c="Modal_modal__yEgVW",r=i(4164),d=i(184),l=document.querySelector("#modal-root");function m(e){var t=e.onClose,i=e.children,a=function e(i){var a=i.target,n=i.currentTarget,s=i.code;a!==n&&"Escape"!==s&&"IMG"!==a.nodeName||(t(!1),document.removeEventListener("keydown",e),document.body.classList.remove("no-scroll"))};return document.addEventListener("keydown",a),(0,r.createPortal)((0,d.jsx)("div",{className:o,onClick:a,children:(0,d.jsxs)("div",{className:c,children:[" ",i]})}),l)}function p(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),i=t[0],o=t[1],c=function(e){document.body.classList.add("no-scroll"),o(e.target.dataset.image)},r=s.map((function(e){var t=e.id,i=e.text,a=e.imgUrl;return(0,d.jsx)("div",{className:i,"data-image":a,onClick:c},t)}));return(0,d.jsxs)("section",{className:"galleryPhotos",children:[(0,d.jsx)("h2",{className:"galleryTitle",children:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"}),(0,d.jsx)("div",{className:"galleryList",children:r}),i&&(0,d.jsx)(m,{onClose:function(e){o(e)},children:(0,d.jsx)("img",{src:i,alt:"img",className:"modalImg"})})]})}},325:function(e,t,i){i.d(t,{Z:function(){return h}});var a="Menu_sectionMenu__R09OB",n="Menu_title__MDk6b",s="Menu_galleryMenuList__JmpqR",o="Menu_imgMenu__HX3hc",c=i.p+"static/media/menu-food.58adf538a197f23d93db.jpg",r=i.p+"static/media/menu-food.ca28c91c26b7e5c52f32.pdf",d=i.p+"static/media/menu-wine.317d868570ae8bbc78de.jpg",l=i.p+"static/media/menu-wine.9473159890214177700b.pdf",m=i.p+"static/media/menu-bar.02dd527f9d80d7dc8483.jpg",p=i.p+"static/media/menu-bar.d3b903d600ef90aa15d3.pdf",u=i(184);function h(){return(0,u.jsxs)("section",{className:a,children:[(0,u.jsx)("h2",{className:n,children:"\u041c\u0435\u043d\u044e"}),(0,u.jsxs)("ul",{className:s,children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:(0,u.jsx)("img",{className:o,src:c,alt:"\u041c\u0435\u043d\u044e 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:l,rel:"noreferrer",target:"_blank",children:(0,u.jsx)("img",{className:o,width:"550px",src:d,alt:"\u0412\u0438\u043d\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:p,rel:"noreferrer",target:"_blank",children:(0,u.jsx)("img",{className:o,width:"550px",src:m,alt:"\u0411\u0430\u0440\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})})]})]})}},5420:function(e,t,i){i.d(t,{Z:function(){return o}});var a=i(1087),n={sectionTitle:"Title_sectionTitle__eKRYc",container:"Title_container__9RC62",img:"Title_img__IONOA",title:"Title_title__IlEm8",text:"Title_text__jbAm1",textFounders:"Title_textFounders__exwMC",btnLink:"Title_btnLink__FcOez",btnBook:"Title_btnBook__Iw2PI"},s=i(184);function o(e){var t=e.img,i=e.title,o=e.textParag1,c=e.textParag2,r=e.textParag3,d=e.textParag4,l=e.btnBook,m=void 0===l||l,p=e.textClass,u=void 0===p?"text":p;return(0,s.jsxs)("section",{className:n.sectionTitle,children:[(0,s.jsx)("img",{className:n.img,src:t,alt:i}),(0,s.jsxs)("div",{className:n.container,children:[(0,s.jsx)("h1",{className:n.title,children:i}),(0,s.jsx)("p",{className:n[u],children:o}),(0,s.jsx)("p",{className:n[u],children:c}),(0,s.jsx)("p",{className:n[u],children:r}),(0,s.jsx)("p",{className:n[u],children:d}),m&&(0,s.jsx)("div",{className:n.btnLink,children:(0,s.jsx)(a.rU,{to:"/book",className:n.btnBook,children:"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u043b\u0438\u043a"})})]})]})}},9056:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});var a=i(4805),n=i(8478),s=i(5420),o=i(6742),c=i(4856),r=i(325),d=i(184);function l(){var e=(0,a.useMediaQuery)({minWidth:1024});return(0,d.jsxs)("main",{children:[(0,d.jsx)(s.Z,{img:n,title:"\u0414\u0440\u0443\u0433\u0438\u0439 \u043f\u043e\u0432\u0435\u0440\u0445",textParag1:"\u041f\u0456\u0434\u043d\u044f\u0432\u0448\u0438\u0441\u044c \u0441\u0445\u043e\u0434\u0430\u043c\u0438, \u0432\u0438 \u043e\u043f\u0438\u043d\u0438\u0442\u0435\u0441\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0456\u0439 \u0441\u0432\u0456\u0442\u043b\u0456\u0439 \u0437\u0430\u043b\u0456 \u0437 \u0432\u0435\u043b\u0438\u043a\u0438\u043c\u0438 \u0432\u0456\u043a\u043d\u0430\u043c\u0438.",textParag2:"\u0426\u0435 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0435 \u043c\u0456\u0441\u0446\u0435 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0437\u0440\u0430\u043d\u043a\u0443 \u043f\u043e\u0432\u0456\u043b\u044c\u043d\u043e \u0441\u043d\u0456\u0434\u0430\u0442\u0438 \u0432 \u043f\u0440\u043e\u043c\u0456\u043d\u043d\u044f\u0445 \u044f\u0441\u043a\u0440\u0430\u0432\u043e\u0433\u043e \u0441\u043e\u043d\u0446\u044f, \u0430 \u0432\u0432\u0435\u0447\u0435\u0440\u0456 - \u0432\u0456\u0434\u0447\u0443\u0442\u0438 \u0423\u043a\u0440\u0430\u0457\u043d\u0443 \u043d\u0430 \u0441\u043c\u0430\u043a, \u043d\u0430\u0441\u043e\u043b\u043e\u0434\u0436\u0443\u044e\u0447\u0438\u0441\u044c \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043e\u044e \u0456\u0441\u0442\u043e\u0440\u0438\u0447\u043d\u0438\u0445 \u0432\u0443\u043b\u0438\u0446\u044c \u041a\u0438\u0454\u0432\u0430.",textParag3:"\u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0440\u0430\u0437 \u043d\u0430 \u043c\u0456\u0441\u044f\u0446\u044c \u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0442\u0443\u0442 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456 \u0437\u0430\u0445\u043e\u0434\u0438, \u044f\u043a\u0456 \u0440\u043e\u0437\u0448\u0438\u0440\u044e\u044e\u0442\u044c \u0432\u0430\u0448\u0456 \u0443\u044f\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0443 \u0457\u0436\u0443. \u0420\u043e\u0437\u0443\u043c\u0456\u0454\u0442\u0435, \u044f\u043a\u0443 \u0434\u0438\u0432\u043e\u0432\u0438\u0436\u043d\u0443 \u0435\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0443 \u043c\u0430\u044f \u0446\u044f \u0437\u0430\u043b\u0430."}),(0,d.jsx)(r.Z,{}),(0,d.jsx)(c.Z,{}),e&&(0,d.jsx)(o.Z,{navClass:"footer-navigation_desktop"})]})}},8478:function(e,t,i){e.exports=i.p+"static/media/above.68c9137f4457f178edd6.jpeg"},5613:function(e,t,i){e.exports=i.p+"static/media/borshch.42e0abf7293b80c4120e.jpg"},5959:function(e,t,i){e.exports=i.p+"static/media/buriak.3dc5dad6bd6e368652c7.jpg"},2671:function(e,t,i){e.exports=i.p+"static/media/cukini.b87390e2f45de027e87a.jpg"},4729:function(e,t,i){e.exports=i.p+"static/media/galushki.b55148707d155201a327.jpg"},6619:function(e,t,i){e.exports=i.p+"static/media/indichka.5c42d81e1aed479bfbd2.jpg"},1965:function(e,t,i){e.exports=i.p+"static/media/kachana.0d53a5678f62cb58713b.jpg"},926:function(e,t,i){e.exports=i.p+"static/media/knish.47a19a96427b0ceb28df.jpg"},2644:function(e,t,i){e.exports=i.p+"static/media/kulish.0ecbc537522e273a72a8.jpg"},343:function(e,t,i){e.exports=i.p+"static/media/kurcha.fe8d22c5e52952f3a91a.jpg"},3539:function(e,t,i){e.exports=i.p+"static/media/sirnuku.f4d2c91ffe5eca65564a.jpg"},4342:function(e,t,i){e.exports=i.p+"static/media/sudak.b3e350731e5404a591d4.jpg"},233:function(e,t,i){e.exports=i.p+"static/media/tomatoMelon.492aec49a93be990ef1c.jpg"}}]);
//# sourceMappingURL=889.b0125a21.chunk.js.map