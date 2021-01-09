(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__yFMmE",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__mNABJ"}},11:function(e,t,a){e.exports={boxButton:"Button_boxButton__1gHOe",button:"Button_button__ISyvo"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__3CIu8",modal:"Modal_modal__1fX_B"}},13:function(e,t,a){e.exports={app:"App_app__2uooO",boxSpinner:"App_boxSpinner__2ndPf"}},16:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2qkrM"}},23:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(0),c=a.n(o),r=a(2),i=a.n(r),s=(a(23),a(14)),l=a(3),u=a(8),m=a(4),b=a.n(m);a(24);function j(e){var t=e.onSubmit,a=Object(o.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1];return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),i("")):u.b.error("\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0449\u0435\u0442\u0435 ;)")},children:[Object(n.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(n.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchValue",value:r,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})}var h=a(10),f=a.n(h),g=function(e){var t=e.largeImageURL,a=e.webformatURL,o=e.tags,c=e.onShowLargeImage;return Object(n.jsx)("li",{className:f.a.imageGalleryItem,children:Object(n.jsx)("img",{className:f.a.imageGalleryItemImage,url:t,src:a,alt:o,onClick:function(){c(t)}})})},d=a(16),O=a.n(d),p=function(e){var t=e.hits,a=e.onShowLargeImage;return Object(n.jsx)("ul",{className:O.a.imageGallery,children:t.map((function(e){var t=e.id,o=e.webformatURL,c=e.largeImageURL;return Object(n.jsx)(g,{webformatURL:o,largeImageURL:c,onShowLargeImage:a},t)}))})},_=a(17),S=a.n(_);function x(e){var t=e.loading;return Object(n.jsx)("div",{className:"sweet-loading",children:Object(n.jsx)(S.a,{size:20,color:"#303f9f",loading:t})})}var v=a(11),I=a.n(v),y=function(e){var t=e.onClick;return Object(n.jsx)("div",{className:I.a.boxButton,children:Object(n.jsx)("button",{type:"button",className:I.a.button,onClick:t,children:"Load more"})})},w=a(12),L=a.n(w),F=document.querySelector("#modal-root");function N(e){var t=e.onClose,a=e.onOpenLargeImage;Object(o.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(r.createPortal)(Object(n.jsx)("div",{className:L.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(n.jsx)("div",{className:L.a.modal,children:Object(n.jsx)("img",{src:a,alt:""})})}),F)}var B={fetchHits:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("16340198-dc2f265d0add10e2fffcbdf49","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},k=a(13),C=a.n(k);function G(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)(1),i=Object(l.a)(r,2),m=i[0],b=i[1],h=Object(o.useState)([]),f=Object(l.a)(h,2),g=f[0],d=f[1],O=Object(o.useState)(!1),_=Object(l.a)(O,2),S=_[0],v=_[1],I=Object(o.useState)(""),w=Object(l.a)(I,2),L=w[0],F=w[1],k=Object(o.useState)(!1),G=Object(l.a)(k,2),E=G[0],R=G[1];Object(o.useEffect)((function(){a&&m&&(v(!0),B.fetchHits(a,m).then((function(e){d((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))}))})).catch((function(e){return console.error(e)})).finally((function(){v(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[a,m]);var T=g.length>0&&!S;return Object(n.jsxs)("div",{className:C.a.app,children:[Object(n.jsx)(j,{onSubmit:function(e){a!==e&&(c(e),d([]),b(1))}}),Object(n.jsx)(p,{hits:g,onShowLargeImage:function(e){R(!0),F(e)}}),Object(n.jsx)("div",{className:C.a.boxSpinner,children:Object(n.jsx)(x,{loading:S})}),T&&Object(n.jsx)(y,{onClick:function(){b((function(e){return e+1}))}}),E&&Object(n.jsx)(N,{onOpenLargeImage:L,onClose:function(){R(!E)}}),Object(n.jsx)(u.a,{})]})}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),E()},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2kPTe",SearchForm:"Searchbar_SearchForm__2O2am",SearchFormButton:"Searchbar_SearchFormButton__3YS_a",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__16G-t",SearchFormInput:"Searchbar_SearchFormInput__WzK37"}}},[[33,1,2]]]);
//# sourceMappingURL=main.94179362.chunk.js.map