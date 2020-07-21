import"typeface-oxygen";import e,{useRef as t,useState as n,useEffect as r}from"react";import a from"prop-types";function i(t){return e.createElement("svg",{className:t.className,width:t.height,height:t.width,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M12 5V19",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M5 12H19",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function s(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M19 12H5",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 19L5 12L12 5",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function o(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M18 6L6 18",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M6 6L18 18",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function c(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M6 9L12 15L18 9",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function l(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M7 10L12 15L17 10",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 15V3",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function m(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M17 3.82843C17.2626 3.56578 17.5744 3.35744 17.9176 3.2153C18.2608 3.07316 18.6286 3 19 3C19.3714 3 19.7392 3.07316 20.0824 3.2153C20.4256 3.35744 20.7374 3.56578 21 3.82843C21.2626 4.09107 21.471 4.40287 21.6131 4.74603C21.7553 5.0892 21.8284 5.45699 21.8284 5.82843C21.8284 6.19986 21.7553 6.56766 21.6131 6.91082C21.471 7.25398 21.2626 7.56578 21 7.82843L7.5 21.3284L2 22.8284L3.5 17.3284L17 3.82843Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function d(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M22 3H2L10 12.46V19L14 21V12.46L22 3Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function p(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function u(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M23 4V10H17",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M1 20V14H7",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.1518 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1112 13.9917 20.7757C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function h(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M17 21V13H7V21",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M7 3V8H15",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function C(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function N(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M18.36 6.64C19.6184 7.89879 20.4753 9.50244 20.8223 11.2482C21.1693 12.9939 20.9909 14.8034 20.3096 16.4478C19.6284 18.0921 18.4748 19.4976 16.9948 20.4864C15.5148 21.4752 13.7749 22.0029 11.995 22.0029C10.2151 22.0029 8.47515 21.4752 6.99517 20.4864C5.51519 19.4976 4.36164 18.0921 3.68036 16.4478C2.99909 14.8034 2.82069 12.9939 3.16772 11.2482C3.51475 9.50244 4.37162 7.89879 5.63 6.64",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M12 2V12",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function k(t){return e.createElement("svg",{className:t.className,width:t.width,height:t.height,viewBox:"0 0 24 24",fill:"none"},e.createElement("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z",stroke:"#333333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}function g(t){return e.createElement({add:i,back:s,close:o,down:c,download:l,edit:m,filter:d,more:p,refresh:u,save:h,user:C,power:N,gear:k}[t.icon],{className:t.className,height:t.iconSize,width:t.iconSize})}function f(t){var n=[t.component,t.className,t.variant];n=n.join(" ").trim();var r=e.createElement("div",{className:"hidden"});return t.icon&&(r=e.createElement(g,{icon:t.icon,iconSize:t.iconSize})),e.createElement("button",{className:n,onClick:t.onClick,title:t.title},r,t.children)}function E(t){var n=["checkbox",t.className].join(" ").trim();return e.createElement("label",{className:n},e.createElement("input",{className:"input",type:"checkbox"}),e.createElement("p",{className:"label"},t.children),e.createElement("span",{className:"mark"}))}function v(t){return e.createElement("div",{className:"container"},t.children)}function L(a){var i=t(),s=n(""),o=s[0],c=s[1],l=function(){return c("")};function m(e){i.current.contains(e.target)||l()}return r(function(){return document.body.addEventListener("click",m),function(){return document.body.removeEventListener("click",m)}},[o]),e.createElement("div",{className:"dropdown"},e.createElement("div",{ref:i,onClick:function(){"menu-active"!==o?c("menu-active"):l()}},e.createElement(f,{variant:"icon",icon:a.icon,iconSize:a.iconSize})),e.createElement("dl",{className:"menu "+o},a.children))}function b(t){var n=["field",t.className].join(" ").trim();return e.createElement("div",{className:n},e.createElement("label",{className:"label"},t.label),t.children,e.createElement("label",{className:"message"},t.message))}function y(t){var n=["form",t.className].join(" ").trim();return e.createElement("form",{className:n,onSubmit:t.onSubmit},e.createElement("h2",{className:"title"},t.title),e.createElement("p",{className:"description"},t.description),t.children)}function w(t){var n=["input",t.className].join(" ").trim();return e.createElement("input",{className:n,pattern:t.pattern,placeholder:t.placeholder,size:t.size,type:t.type})}function j(t){var r=n(""),a=r[0],i=r[1],s=(Fragment,e.createElement(f,{variant:"icon",icon:t.icon,onClick:function(){return i("visible")}}));return a?e.createElement("div",null,s,e.createElement("div",{className:"modal"},e.createElement("div",{className:"container"},e.createElement(f,{onClick:function(){return i("")},className:"close-button",variant:"icon",icon:"close",iconSize:18}),t.children))):e.createElement(Fragment,null,s)}function T(t){var n=t.activePage,r=t.totalPages,a=r-n,i=e.createElement("a",{className:"item active"},n),s=e.createElement("div",{className:"hidden"}),o=e.createElement("a",{className:"ellipsis"},"...");function c(t){return e.createElement("a",{className:"item"},t)}return e.createElement("div",{className:"pagination"},n>2?c(1):n<=2?s:void 0,function(){if(n>3){if(n-2<=2)return c(n-2);if(n-2>=3)return o}if(n<=3)return s}(),n>=2?c(n-1):n<2?s:void 0,i,a>=1?c(n+1):a<1?s:void 0,function(){if(a>2){var e=r-(n+1);if(e<=2)return c(n+2);if(e>=3)return o}if(a<=2)return s}(),a>1?c(r):a<=1?s:void 0)}function M(t){return e.createElement("div",{className:"select"},e.createElement("select",{className:"select-element"},t.children),e.createElement("span",{className:"select-icon"}))}function W(t){var r=["sidebar",t.className].join(" ").trim(),a=n(""),i=a[0],s=a[1],o=i?e.createElement(e.Fragment,null,e.createElement(f,{variant:"text"},"Logout"),e.createElement(f,{onClick:function(){return s("")},variant:"text"},"Close")):e.createElement(f,{onClick:function(){return s("active")},variant:"text"},"Menu");return e.createElement("aside",{className:r},e.createElement("div",{className:("content "+i).trim()},t.children),e.createElement("div",{className:"mobile-menu"},o))}function H(t){return e.createElement("table",{className:("table "+t.className).trim()},t.children)}function V(t){var n=["toolbar",t.className].join(" ").trim();return e.createElement("div",{className:n},t.children)}function x(t){var n=["titlebar","container",t.className].join(" ").trim();return e.createElement("div",{className:n},e.createElement("span",{className:"abbr"},t.abbr),e.createElement("span",{className:"title"},t.children))}i.propTypes={className:a.string},s.propTypes={className:a.string},o.propTypes={className:a.string},c.propTypes={className:a.string},l.propTypes={className:a.string},m.propTypes={className:a.string},d.propTypes={className:a.string},p.propTypes={className:a.string},u.propTypes={className:a.string},h.propTypes={className:a.string},C.propTypes={className:a.string},N.propTypes={className:a.string},k.propTypes={className:a.string},g.propTypes={className:a.string,icon:a.oneOf(["add","back","close","down","download","edit","filter","more","refresh","save","user","power","gear"]).isRequired,iconSize:a.number},g.defaultProps={iconSize:24},f.propTypes={children:a.string,className:a.string,icon:a.string,iconSize:a.number,onClick:a.func,title:a.string,variant:a.oneOf(["solid","outline","text","icon"])},f.defaultProps={className:"",component:"button",icon:"",iconSize:24,variant:"solid"},E.propTypes={children:a.string.isRequired,className:a.string},v.propTypes={children:a.node.isRequired},L.Item=function(t){var n=[t.component,t.className].join(" ").trim();return e.createElement("dt",{className:n,onClick:t.onClick},t.children)},L.propTypes={children:a.node,className:a.string,icon:a.string,iconSize:a.number},L.Item.propTypes={className:a.string,children:a.string,onClick:a.func},L.defaultProps={icon:"more",iconSize:18},L.Item.defaultProps={component:"item"},b.propTypes={children:a.node,className:a.string,label:a.string,message:a.string},y.Section=function(t){var n=["section",t.className].join(" ").trim();return e.createElement("section",{className:n},e.createElement("h3",null,t.title),t.children)},y.Footer=function(t){var n=["footer",t.className].join(" ").trim();return e.createElement("section",{className:n},t.children)},y.propTypes={children:a.node,className:a.string,description:a.string,onSubmit:a.func,title:a.string},y.Section.propTypes={children:a.node,className:a.string},y.Footer.propTypes={children:a.node,className:a.string},w.propTypes={className:a.string,pattern:a.string,placeholder:a.string,size:a.number,type:a.string},w.defaultProps={size:25},j.propTypes={children:a.node,icon:a.string.isRequired},T.propTypes={activePage:a.number,totalPages:a.number},T.defaultProps={activePage:1,totalPages:1},M.Option=function(t){return e.createElement("option",{disabled:t.disabled,value:t.value},t.children)},M.propTypes={children:a.node},M.Option.propTypes={children:a.node,disabled:a.bool,value:a.oneOfType([a.string,a.number])},M.Option.defaultProps={value:""},W.Menu=function(t){var n=["menu",t.className].join(" ").trim();return e.createElement("dl",{className:n},t.label&&e.createElement("label",{className:"label"},t.label),t.children)},W.Item=function(t){var n=["item",t.active?"active":"",t.className].join(" ").trim();return e.createElement("dt",{className:n},t.children)},W.propTypes={children:a.node.isRequired,className:a.string},W.Menu.propTypes={children:a.node.isRequired,className:a.string,label:a.string},W.Item.propTypes={active:a.bool,children:a.node.isRequired,className:a.string},H.Header=function(t){return e.createElement("thead",{className:("table-header "+t.className).trim()},t.children)},H.Body=function(t){return e.createElement("tbody",{className:("table-body "+t.className).trim()},t.children)},H.HeaderCell=function(t){return e.createElement("th",{className:("table-headercell "+t.className).trim()},t.children)},H.Row=function(t){return e.createElement("tr",{className:("table-row "+t.className).trim()},t.children)},H.Cell=function(t){return e.createElement("td",{className:("table-cell "+t.className).trim()},t.children)},H.propTypes={children:a.node,className:a.string},H.Header.propTypes={children:a.node,className:a.string},H.Body.propTypes={children:a.node,className:a.string},H.HeaderCell.propTypes={children:a.node,className:a.string},H.Row.propTypes={children:a.node,className:a.string},H.Cell.propTypes={children:a.node,className:a.string},H.defaultProps={className:""},H.Header.defaultProps={className:""},H.Body.defaultProps={className:""},H.HeaderCell.defaultProps={className:""},H.Row.defaultProps={className:""},H.Cell.defaultProps={className:""},V.propTypes={className:a.string,children:a.node.isRequired},x.propTypes={abbr:a.string,className:a.string,children:a.string.isRequired};export{f as Button,E as Checkbox,v as Container,L as Dropdown,b as Field,y as Form,g as Icon,w as Input,j as Modal,T as Pagination,M as Select,W as Sidebar,H as Table,x as Titlebar,V as Toolbar};
//# sourceMappingURL=shirakami.esm.js.map
