import*as t from"@wordpress/interactivity";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const n=(o={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},i={},e.d(i,o),i);var o,i;const{}=(0,n.store)("outermost/mega-menu",{state:{},actions:{},callbacks:{initCallbacks(){const t=(0,n.getContext)(),{width:e}=t,{ref:o}=(0,n.getElement)();"content"!==e&&(setTimeout((()=>{r(o)}),100),window.addEventListener("resize",function(t,e,n=!1){let o;return function(){const i=this,r=arguments,s=n&&!o;clearTimeout(o),o=setTimeout((function(){o=null,n||t.apply(i,r)}),e),s&&t.apply(i,r)}}((()=>{r(o)}),500)))}}}),r=t=>{const e=t?.querySelector(".wp-block-outermost-mega-menu__menu-container"),n=t?.closest(".wp-block-navigation");if(!n||!e)return;const o=n.getBoundingClientRect(),i=e.getBoundingClientRect(),r=-o.left+(window.innerWidth-i.width)/2;e.style.left=`${r}px`};