var se=e=>{throw TypeError(e)};var He=(e,t,n)=>t.has(e)||se("Cannot "+n);var re=(e,t,n)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ie=(e,t,n,o)=>(He(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var V,y,be,O,le,Ne,G,ee,Q,X,A={},we=[],Ae=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function T(e,t){for(var n in t)e[n]=t[n];return e}function Le(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Fe(e,t,n){var o,s,r,a={};for(r in t)r=="key"?o=t[r]:r=="ref"?s=t[r]:a[r]=t[r];if(arguments.length>2&&(a.children=arguments.length>3?V.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return U(e,a,o,s,null)}function U(e,t,n,o,s){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++be,__i:-1,__u:0};return s==null&&y.vnode!=null&&y.vnode(r),r}function $(e){return e.children}function M(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function Ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ce(e)}}function ae(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!B.__r++||le!==y.debounceRendering)&&((le=y.debounceRendering)||Ne)(B)}function B(){var e,t,n,o,s,r,a,c;for(O.sort(G);e=O.shift();)e.__d&&(t=O.length,o=void 0,r=(s=(n=e).__v).__e,a=[],c=[],n.__P&&((o=T({},s)).__v=s.__v+1,y.vnode&&y.vnode(o),ne(n.__P,o,s,n.__n,n.__P.namespaceURI,32&s.__u?[r]:null,a,r??H(s),!!(32&s.__u),c),o.__v=s.__v,o.__.__k[o.__i]=o,Pe(a,o,c),o.__e!=r&&Ce(o)),O.length>t&&O.sort(G));B.__r=0}function Se(e,t,n,o,s,r,a,c,u,_,d){var i,h,p,k,I,N=o&&o.__k||we,m=t.length;for(n.__d=u,qe(n,t,N),u=n.__d,i=0;i<m;i++)(p=n.__k[i])!=null&&(h=p.__i===-1?A:N[p.__i]||A,p.__i=i,ne(e,p,h,s,r,a,c,u,_,d),k=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&oe(h.ref,null,p),d.push(p.ref,p.__c||k,p)),I==null&&k!=null&&(I=k),65536&p.__u||h.__k===p.__k?u=Ie(p,u,e):typeof p.type=="function"&&p.__d!==void 0?u=p.__d:k&&(u=k.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=u,n.__e=I}function qe(e,t,n){var o,s,r,a,c,u=t.length,_=n.length,d=_,i=0;for(e.__k=[],o=0;o<u;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(a=o+i,(s=e.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?U(null,s,null,null,null):te(s)?U($,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?U(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,r=null,(c=s.__i=Ue(s,n,a,d))!==-1&&(d--,(r=n[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&i--,typeof s.type!="function"&&(s.__u|=65536)):c!==a&&(c==a-1?i--:c==a+1?i++:(c>a?i--:i++,s.__u|=65536))):s=e.__k[o]=null;if(d)for(o=0;o<_;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),ze(r,r))}function Ie(e,t,n){var o,s;if(typeof e.type=="function"){for(o=e.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=e,t=Ie(o[s],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=H(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Ue(e,t,n,o){var s=e.key,r=e.type,a=n-1,c=n+1,u=t[n];if(u===null||u&&s==u.key&&r===u.type&&!(131072&u.__u))return n;if((typeof r!="function"||r===$||s)&&o>(u!=null&&!(131072&u.__u)?1:0))for(;a>=0||c<t.length;){if(a>=0){if((u=t[a])&&!(131072&u.__u)&&s==u.key&&r===u.type)return a;a--}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&s==u.key&&r===u.type)return c;c++}}return-1}function _e(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ae.test(t)?n:n+"px"}function q(e,t,n,o,s){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||_e(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||_e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n.u=o.u:(n.u=ee,e.addEventListener(t,r?X:Q,r)):e.removeEventListener(t,r?X:Q,r);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ce(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ee++;else if(t.t<n.u)return;return y.event&&(t=y.event(t)),"handleEvent"in n?n.handleEvent(t):n(t)}}}function ne(e,t,n,o,s,r,a,c,u,_){var d,i,h,p,k,I,N,m,v,g,b,P,z,F,w,E,L=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),r=[c=t.__e=n.__e]),(d=y.__b)&&d(t);e:if(typeof L=="function")try{if(m=t.props,v="prototype"in L&&L.prototype.render,g=(d=L.contextType)&&o[d.__c],b=d?g?g.props.value:d.__:o,n.__c?N=(i=t.__c=n.__c).__=i.__E:(v?t.__c=i=new L(m,b):(t.__c=i=new M(m,b),i.constructor=L,i.render=We),g&&g.sub(i),i.props=m,i.state||(i.state={}),i.context=b,i.__n=o,h=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&L.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=T({},i.__s)),T(i.__s,L.getDerivedStateFromProps(m,i.__s))),p=i.props,k=i.state,i.__v=t,h)v&&L.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&L.getDerivedStateFromProps==null&&m!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,b),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,b)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=m,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(x){x&&(x.__=t)}),P=0;P<i._sb.length;P++)i.__h.push(i._sb[P]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,b),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,k,I)})}if(i.context=b,i.props=m,i.__P=e,i.__e=!1,z=y.__r,F=0,v){for(i.state=i.__s,i.__d=!1,z&&z(t),d=i.render(i.props,i.state,i.context),w=0;w<i._sb.length;w++)i.__h.push(i._sb[w]);i._sb=[]}else do i.__d=!1,z&&z(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++F<25);i.state=i.__s,i.getChildContext!=null&&(o=T(T({},o),i.getChildContext())),v&&!h&&i.getSnapshotBeforeUpdate!=null&&(I=i.getSnapshotBeforeUpdate(p,k)),Se(e,te(E=d!=null&&d.type===$&&d.key==null?d.props.children:d)?E:[E],t,n,o,s,r,a,c,u,_),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),N&&(i.__E=i.__=null)}catch(x){if(t.__v=null,u||r!=null){for(t.__u|=u?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,t.__e=c}else t.__e=n.__e,t.__k=n.__k;y.__e(x,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Me(n.__e,t,n,o,s,r,a,u,_);(d=y.diffed)&&d(t)}function Pe(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)oe(n[o],n[++o],n[++o]);y.__c&&y.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(r){r.call(s)})}catch(r){y.__e(r,s.__v)}})}function Me(e,t,n,o,s,r,a,c,u){var _,d,i,h,p,k,I,N=n.props,m=t.props,v=t.type;if(v==="svg"?s="http://www.w3.org/2000/svg":v==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(_=0;_<r.length;_++)if((p=r[_])&&"setAttribute"in p==!!v&&(v?p.localName===v:p.nodeType===3)){e=p,r[_]=null;break}}if(e==null){if(v===null)return document.createTextNode(m);e=document.createElementNS(s,v,m.is&&m),c&&(y.__m&&y.__m(t,r),c=!1),r=null}if(v===null)N===m||c&&e.data===m||(e.data=m);else{if(r=r&&V.call(e.childNodes),N=n.props||A,!c&&r!=null)for(N={},_=0;_<e.attributes.length;_++)N[(p=e.attributes[_]).name]=p.value;for(_ in N)if(p=N[_],_!="children"){if(_=="dangerouslySetInnerHTML")i=p;else if(!(_ in m)){if(_=="value"&&"defaultValue"in m||_=="checked"&&"defaultChecked"in m)continue;q(e,_,null,p,s)}}for(_ in m)p=m[_],_=="children"?h=p:_=="dangerouslySetInnerHTML"?d=p:_=="value"?k=p:_=="checked"?I=p:c&&typeof p!="function"||N[_]===p||q(e,_,p,N[_],s);if(d)c||i&&(d.__html===i.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(i&&(e.innerHTML=""),Se(e,te(h)?h:[h],t,n,o,v==="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:n.__k&&H(n,0),c,u),r!=null)for(_=r.length;_--;)Le(r[_]);c||(_="value",v==="progress"&&k==null?e.removeAttribute("value"):k!==void 0&&(k!==e[_]||v==="progress"&&!k||v==="option"&&k!==N[_])&&q(e,_,k,N[_],s),_="checked",I!==void 0&&I!==e[_]&&q(e,_,I,N[_],s))}return e}function oe(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(s){y.__e(s,n)}}function ze(e,t,n){var o,s;if(y.unmount&&y.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||oe(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){y.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&ze(o[s],t,n||typeof e.type!="function");n||Le(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function We(e,t,n){return this.constructor(e,n)}function Be(e,t,n){var o,s,r,a;y.__&&y.__(e,t),s=(o=typeof n=="function")?null:t.__k,r=[],a=[],ne(t,e=(!o&&n||t).__k=Fe($,null,[e]),s||A,A,t.namespaceURI,!o&&n?[n]:s?null:t.firstChild?V.call(t.childNodes):null,r,!o&&n?n:s?s.__e:t.firstChild,o,a),Pe(r,e,a)}V=we.slice,y={__e:function(e,t,n,o){for(var s,r,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),a=s.__d),a)return s.__E=s}catch(c){e=c}throw e}},be=0,M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},n),this.props)),e&&T(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ae(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ae(this))},M.prototype.render=$,O=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(e,t){return e.__v.__b-t.__v.__b},B.__r=0,ee=0,Q=ce(!1),X=ce(!0);var Je=0;function l(e,t,n,o,s,r){t||(t={});var a,c,u=t;"ref"in t&&(a=t.ref,delete t.ref);var _={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Je,__i:-1,__u:0,__source:s,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return y.vnode&&y.vnode(_),_}var J,C,K,ue,Y=0,xe=[],S=y,pe=S.__b,de=S.__r,he=S.diffed,fe=S.__c,me=S.unmount,ge=S.__;function Ee(e,t){S.__h&&S.__h(C,e,Y||t),Y=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function f(e){return Y=1,Re($e,e)}function Re(e,t,n){var o=Ee(J++,2);if(o.t=e,!o.__c&&(o.__=[$e(void 0,t),function(c){var u=o.__N?o.__N[0]:o.__[0],_=o.t(u,c);u!==_&&(o.__N=[_,o.__[1]],o.__c.setState({}))}],o.__c=C,!C.u)){var s=function(c,u,_){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(h){return!!h.__c});if(d.every(function(h){return!h.__N}))return!r||r.call(this,c,u,_);var i=o.__c.props!==c;return d.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(i=!0)}}),r&&r.call(this,c,u,_)||i};C.u=!0;var r=C.shouldComponentUpdate,a=C.componentWillUpdate;C.componentWillUpdate=function(c,u,_){if(this.__e){var d=r;r=void 0,s(c,u,_),r=d}a&&a.call(this,c,u,_)},C.shouldComponentUpdate=s}return o.__N||o.__}function D(e,t){var n=Ee(J++,3);!S.__s&&Ke(n.__H,t)&&(n.__=e,n.i=t,C.__H.__h.push(n))}function je(){for(var e;e=xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(Z),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){C=null,pe&&pe(e)},S.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ge&&ge(e,t)},S.__r=function(e){de&&de(e),J=0;var t=(C=e.__c).__H;t&&(K===C?(t.__h=[],C.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(W),t.__h.forEach(Z),t.__h=[],J=0)),K=C},S.diffed=function(e){he&&he(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(xe.push(t)!==1&&ue===S.requestAnimationFrame||((ue=S.requestAnimationFrame)||Ve)(je)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),K=C=null},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(o){return!o.__||Z(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],S.__e(o,n.__v)}}),fe&&fe(e,t)},S.unmount=function(e){me&&me(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{W(o)}catch(s){t=s}}),n.__H=void 0,t&&S.__e(t,n.__v))};var ve=typeof requestAnimationFrame=="function";function Ve(e){var t,n=function(){clearTimeout(o),ve&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);ve&&(t=requestAnimationFrame(n))}function W(e){var t=C,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),C=t}function Z(e){var t=C;e.__c=e.__(),C=t}function Ke(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function $e(e,t){return typeof t=="function"?t(e):t}const Ge=({show:e,isDarkMode:t,listToEdit:n,onCancel:o,onOk:s})=>{const[r,a]=f({name:"",store:"",description:""});D(()=>{n&&a(n)},[n]);const c=d=>{const i=d.target,{name:h,value:p}=i;a(k=>({...k,[h]:p}))},u=()=>{s(r),a({name:"",store:"",description:""})},_=()=>{o(),a({name:"",store:"",description:""})};return e?l("div",{className:"popup",children:l("div",{className:"popup-content",children:[l("h3",{children:n?"Bevásárlólista szerkesztése":"Új bevásárlólista"}),l("label",{children:"Bevásárlólista neve"}),l("input",{type:"text",name:"name",placeholder:"Lista neve",value:r.name,onInput:c,className:"popup-input"}),l("label",{children:"Üzlet neve"}),l("input",{type:"text",name:"store",placeholder:"Üzlet neve",value:r.store,onInput:c,className:"popup-input"}),l("label",{children:"Lista leírása"}),l("textarea",{name:"description",placeholder:"Leírás",value:r.description,onInput:c,className:"popup-textarea",rows:4}),l("div",{className:"popup-buttons",children:[l("button",{className:"popup-button cancel",onClick:_,style:{backgroundColor:t?"darkred":"red"},children:"Cancel"}),l("button",{className:"popup-button ok",onClick:u,style:{backgroundColor:t?"darkgreen":"green"},children:"Ok"})]})]})}):null},Te=({show:e,onCancel:t,onConfirm:n})=>e?l("div",{className:"popup-overlay",children:l("div",{className:"popup-content",children:[l("h2",{children:"Biztosan törölni szeretné ezt az elemet?"}),l("div",{className:"popup-buttons",children:[l("button",{onClick:t,className:"cancel-button",children:"Mégse"}),l("button",{onClick:n,className:"confirm-button",children:"OK"})]})]})}):null,Qe=({list:e,onDelete:t,onClick:n,onEdit:o})=>l("div",{className:"shopping-list-item",onClick:n,children:[l("img",{src:(r=>`/Images/${(r==null?void 0:r.toLowerCase())||"store"}.png`)(e==null?void 0:e.store),alt:(e==null?void 0:e.store)||"Áruház",className:"store-icon"}),l("span",{className:"list-name",children:(e==null?void 0:e.name)||"Nincs név"}),l("img",{src:"/Images/editicon.png",alt:"edit",className:"edit-icon",onClick:r=>{r.stopPropagation(),o(e)}}),l("img",{src:"/Images/trashbin.png",alt:"delete",className:"delete-icon",onClick:r=>{r.stopPropagation(),t(e==null?void 0:e.id)}})]}),ye=({shoppingLists:e,isDarkMode:t,loggedInUser:n,setSelectedList:o})=>{const[s,r]=f(""),[a,c]=f(!1),[u,_]=f(!1),[d,i]=f(null),[h,p]=f(null),[k,I]=f([]);D(()=>{const E=JSON.parse(localStorage.getItem("shoppingLists")||"[]").filter(L=>L.owner===n);I(E)},[n]);const N=w=>{r(w.target.value)},m=()=>{p(null),c(!0)},v=w=>{p(w),c(!0)},g=()=>{c(!1),p(null)},b=w=>{const E=JSON.parse(localStorage.getItem("shoppingLists")||"[]");let L;if(h)L=E.map(x=>x.id===h.id?{...x,...w}:x);else{const x={...w,owner:n,id:Date.now(),item:[]};L=[...E,x]}localStorage.setItem("shoppingLists",JSON.stringify(L)),I(L.filter(x=>x.owner===n)),c(!1),p(null)},P=()=>{const E=JSON.parse(localStorage.getItem("shoppingLists")||"[]").filter(L=>L.id!==d);localStorage.setItem("shoppingLists",JSON.stringify(E)),I(E.filter(L=>L.owner===n)),_(!1)},z=w=>{i(w),_(!0)},F=w=>{o(w)};return l("div",{className:`left-pane ${t?"dark":"light"}`,children:[l("input",{type:"text",placeholder:"Keresés a listák között",value:s,onInput:N,className:"search-input"}),l("div",{className:"lists-container",children:k.filter(w=>w.name.toLowerCase().includes(s.toLowerCase())).map(w=>l(Qe,{list:w,onDelete:z,onEdit:v,onClick:()=>F(w)},w.id))}),l("div",{className:"add-button-container",children:l("button",{className:"add-button",onClick:m,children:"+"})}),l(Ge,{show:a,isDarkMode:t,listToEdit:h,onCancel:g,onOk:b}),l(Te,{show:u,onCancel:()=>_(!1),onConfirm:P})]})},Xe=({id:e,name:t,price:n,category:o,quantity:s,unit:r,hasBought:a,onDelete:c,onEdit:u,onToggleBought:_})=>{const d=`/Images/${o}.png`;return l("div",{className:"item",children:[l("img",{src:d,alt:o,className:"item-image"}),l("div",{className:"item-details",children:[l("span",{className:"item-name",children:t}),l("span",{className:"item-info",children:[n," Ft - ",s," ",r]})]}),l("input",{type:"checkbox",className:"purchase-checkbox",checked:a,onChange:i=>_(e,i.target.checked)}),l("img",{src:"/Images/editicon.png",alt:"Szerkesztés",className:"edit-icon",onClick:()=>u(e)}),l("img",{src:"/Images/trashbin.png",alt:"Törlés",className:"trash-icon",onClick:()=>c(e)})]})},R={getShoppingLists:()=>{const e=localStorage.getItem("shoppingLists");return e?JSON.parse(e):[]},addItemToList:(e,t)=>{const n=R.getShoppingLists(),o=n.findIndex(s=>s.id===e);o!==-1&&(n[o].item.push(t),localStorage.setItem("shoppingLists",JSON.stringify(n)))},updateShoppingList:(e,t)=>{const n=R.getShoppingLists(),o=n.findIndex(s=>s.id===e);o!==-1&&(n[o]=t(n[o]),localStorage.setItem("shoppingLists",JSON.stringify(n)))}},Ye=({items:e})=>{const t=e.filter(n=>!n.hasBought).reduce((n,o)=>n+o.price*o.quantity,0);return l("div",{className:"price-counter",children:l("strong",{children:["Összes ár: ",t.toFixed(2)," Ft"]})})},Oe=({show:e,isDarkMode:t,onCancel:n,onOk:o,itemToEdit:s=null,selectedListId:r})=>{const[a,c]=f({name:"",category:"",price:"",quantity:"",unit:""});D(()=>{s&&c(s)},[s]);const u=d=>{const{name:i,value:h}=d.target;c(p=>({...p,[i]:h}))},_=()=>{if(!a.name||!a.price||!a.quantity){alert("Minden mezőt ki kell tölteni!");return}const d={...a,price:parseFloat(a.price),quantity:parseFloat(a.quantity)};o(d),c({name:"",category:"",price:"",quantity:"",unit:""})};return e?l("div",{className:"popup",children:l("div",{className:`popup-content ${t?"dark":"light"}`,children:[l("h3",{children:s?"Termék szerkesztése":"Új termék hozzáadása"}),l("label",{children:"Termék neve"}),l("input",{type:"text",name:"name",value:a.name,onChange:u}),l("label",{children:"Kategória"}),l("input",{type:"text",name:"category",value:a.category,onChange:u}),l("label",{children:"Ár"}),l("input",{type:"text",name:"price",value:a.price,onChange:u}),l("label",{children:"Mennyiség"}),l("input",{type:"text",name:"quantity",value:a.quantity,onChange:u}),l("label",{children:"Egység"}),l("input",{type:"text",name:"unit",value:a.unit,onChange:u}),l("div",{className:"popup-buttons",children:[l("button",{className:"popup-button cancel",onClick:n,style:{backgroundColor:t?"darkred":"red"},children:"Cancel"}),l("button",{className:"popup-button ok",onClick:_,style:{backgroundColor:t?"darkgreen":"green"},children:"Ok"})]})]})}):null},Ze=({selectedList:e,isDarkMode:t})=>{const[n,o]=f([]),[s,r]=f(!1),[a,c]=f(null),[u,_]=f(!1),[d,i]=f(null);D(()=>{if(e){const g=(e.item||[]).map((b,P)=>({...b,id:b.id||P+1}));o(g)}},[e]);const h=g=>{const b={...e,item:g};R.updateShoppingList(e.id,()=>b),o(g),e.item=g},p=g=>{c(g),r(!0)},k=()=>{const b=n.filter(P=>P.id!==a).map((P,z)=>({...P,id:z+1}));h(b),r(!1),c(null)},I=()=>{r(!1),c(null)},N=g=>{const b=n.find(P=>P.id===g);b&&(i(b),_(!0))},m=g=>{const b=n.map(P=>P.id===g.id?{...g}:P);h(b),_(!1),i(null)},v=(g,b)=>{const P=n.map(z=>z.id===g?{...z,hasBought:b}:z);h(P)};return l("div",{className:`items-space ${t?"dark":"light"}`,children:[l("div",{className:"items",children:n.length>0?n.map(g=>l(Xe,{...g,onDelete:()=>p(g.id),onEdit:()=>N(g.id),onToggleBought:v},g.id)):l("p",{children:"No items in the list."})}),l(Ye,{items:n}),l(Te,{show:s,onCancel:I,onConfirm:k}),l(Oe,{show:u,isDarkMode:t,onCancel:()=>_(!1),onOk:m,itemToEdit:d,selectedListId:e.id})]})},De=({toggleTheme:e,isDarkMode:t})=>l("button",{className:"theme-toggle",onClick:e,children:t?"Világos módra váltás":"Sötét módra váltás"}),et=({onLogout:e})=>l("div",{className:"logout-container",children:l("img",{src:"./Images/logout.png",alt:"Logout",className:"logout-icon",onClick:e})}),ke=({isDarkMode:e,selectedList:t,toggleTheme:n,onLogout:o})=>{const[s,r]=f(!1),[a,c]=f(t);D(()=>{c(t||{id:null,name:"Nincs lista",item:[]})},[t]);const u=()=>{r(!0)},_=()=>{r(!1)},d=i=>{if(!a||!a.id){alert("Nincs kiválasztott lista!");return}R.addItemToList(a.id,i);const h={...a,item:[...a.item||[],i]};c(h),r(!1)};return l("div",{className:`right-pane ${e?"dark":"light"}`,children:[l("h2",{children:["Bevásárlólista: ",a?a.name:"Nincs kiválasztva"]}),a&&l($,{children:[l("div",{className:"button-container",children:l("button",{className:"add-item-button",onClick:u,children:"Új elem hozzáadása"})}),l("div",{className:"items-space-container",children:l(Ze,{selectedList:a,isDarkMode:e})}),a&&l(Oe,{show:s,isDarkMode:e,onCancel:_,onOk:d,selectedListId:a.id})]}),l("div",{className:"theme-toggle",children:l(De,{toggleTheme:n,isDarkMode:e})}),l(et,{onLogout:o})]})},tt=({loggedInUser:e,onLogout:t})=>{const[n,o]=f(!0),[s,r]=f(null),[a,c]=f(!1);D(()=>{const _=()=>{c(window.innerWidth<=768)};return window.addEventListener("resize",_),_(),()=>window.removeEventListener("resize",_)},[]);const u=()=>{o(_=>!_)};return l("div",{className:`shopping-lists-layout ${n?"dark":"light"}`,children:a?s?l(ke,{isDarkMode:n,selectedList:s,toggleTheme:u,onLogout:t}):l(ye,{shoppingLists:[],isDarkMode:n,loggedInUser:e,setSelectedList:r}):l($,{children:[l(ye,{shoppingLists:[],isDarkMode:n,loggedInUser:e,setSelectedList:r}),l(ke,{isDarkMode:n,selectedList:s,toggleTheme:u,onLogout:t})]})})},nt=({setCurrentView:e,onLoginSuccess:t})=>{const[n,o]=f(""),[s,r]=f(""),[a,c]=f("");return l("form",{onSubmit:_=>{if(_.preventDefault(),!JSON.parse(localStorage.getItem("users")||"[]").find(h=>h.username===n&&h.password===s)){c("Hibás felhasználónév vagy jelszó!");return}c(""),t(n)},className:"login-form",children:[l("input",{type:"text",placeholder:"Felhasználónév",onInput:_=>o(_.target.value),required:!0}),l("input",{type:"password",placeholder:"Jelszó",onInput:_=>r(_.target.value),required:!0}),l("button",{type:"submit",children:"Bejelentkezés"}),a&&l("div",{className:"error",children:a}),l("p",{children:["Még nem regisztrált? ",l("button",{type:"button",onClick:()=>e("registration"),children:"Regisztrálj itt!"})]})]})},ot=({setCurrentView:e})=>{const[t,n]=f(""),[o,s]=f(""),[r,a]=f(""),[c,u]=f(""),[_,d]=f("");return l("form",{onSubmit:h=>{if(h.preventDefault(),r!==c){d("A jelszavak nem egyeznek!");return}const p=JSON.parse(localStorage.getItem("users")||"[]");if(p.some(N=>N.username===o)){d("Ez a felhasználónév már létezik!");return}const I={email:t,username:o,password:r};p.push(I),localStorage.setItem("users",JSON.stringify(p)),d(""),e("login")},className:"registration-form",children:[l("input",{type:"email",placeholder:"Email",onInput:h=>n(h.target.value),required:!0}),l("input",{type:"text",placeholder:"Felhasználónév",onInput:h=>s(h.target.value),required:!0}),l("input",{type:"password",placeholder:"Jelszó",onInput:h=>a(h.target.value),required:!0}),l("input",{type:"password",placeholder:"Jelszó megerősítése",onInput:h=>u(h.target.value),required:!0}),l("button",{type:"submit",children:"Regisztrálás"}),_&&l("div",{className:"error",children:_}),l("p",{children:["Már regisztráltál? ",l("button",{type:"button",onClick:()=>e("login"),children:"Jelentkezz be itt!"})]})]})},st=()=>{const[e,t]=f("login"),[n,o]=f(!1),[s,r]=f(null),[a,c]=f(!0);return D(()=>{a?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"))},[a]),l("div",{className:"app",children:[e==="login"&&!n?l($,{children:[l("img",{src:"./Images/shopping-cart.png",alt:"Shopping Cart",className:"logo"}),l("h2",{children:"Bejelentkezés"}),l(nt,{setCurrentView:t,onLoginSuccess:i=>{o(!0),r(i),t("shopping-lists")}})]}):e==="registration"?l($,{children:[l("img",{src:"./Images/shopping-cart.png",alt:"Shopping Cart",className:"logo"}),l("h2",{children:"Regisztráció"}),l(ot,{setCurrentView:t})]}):l(tt,{loggedInUser:s,onLogout:()=>{o(!1),r(null),t("login")}}),(e==="login"||e==="registration")&&l(De,{toggleTheme:()=>{localStorage.removeItem("item"),c(i=>!i)},isDarkMode:a})]})};var j;class rt{constructor(){re(this,j);isSecureContext&&(async()=>ie(this,j,await navigator.serviceWorker.register("sw.js")))()}}j=new WeakMap;new rt;Be(l(st,{}),document.getElementById("app"));