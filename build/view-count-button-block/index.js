(()=>{"use strict";var e,o={47:()=>{const e=window.wp.blocks,o=window.React,t=window.wp.i18n,r=window.wp.coreData,l=window.wp.blockEditor,c=window.wp.components,n=(0,l.withColors)({activeColor:"active-color",activeBgColor:"active-background-color",activeBorderColor:"active-border-color",activeIconBgColor:"active-icon-background-color"})((function(e){const{clientId:n,attributes:i,setAttributes:s,context:{postId:a},activeColor:C,activeBgColor:u,activeBorderColor:v,activeIconBgColor:d,setActiveColor:p,setActiveBgColor:g,setActiveBorderColor:m,setActiveIconBgColor:w}=e,{customActiveBgColor:h,customActiveBorderColor:_,customActiveColor:b,customActiveIconBgColor:f,showCountText:B}=i,{records:k}=(0,r.useEntityRecords)("postType","post_view",{post_status:"publish",per_page:1,meta_query:[{key:"post_id",value:a,compare:"="}]});let A=0;k?.length&&(A=k[0].acf.view_count||0);const x=(0,l.__experimentalUseMultipleOriginColorsAndGradients)(),I=[{label:(0,t.__)("Active Text/Icon","ncmfse"),value:C.color||b,onChange:e=>{p(e),s({customActiveColor:e})},resetAllFilter:()=>{p(void 0),s({customActiveColor:"#2563eb"})}},{label:(0,t.__)("Active Background","ncmfse"),value:u.color||h,onChange:e=>{g(e),s({customActiveBgColor:e})},resetAllFilter:()=>{g(void 0),s({customActiveBgColor:void 0})}},{label:(0,t.__)("Active Border","ncmfse"),value:v.color||_,onChange:e=>{m(e),s({customActiveBorderColor:e})},resetAllFilter:()=>{m(void 0),s({customActiveBorderColor:void 0})}},{label:(0,t.__)("Active Icon Background","ncmfse"),value:d.color||f,onChange:e=>{w(e),s({customActiveIconBgColor:e})},resetAllFilter:()=>{w(void 0),s({customActiveIconBgColor:"#2563eb1a"})}}],E=(0,l.useBlockProps)({className:"nc-post-reaction-button",style:{"--active-color":C.slug?`var( --wp--preset--color--${C.slug} )`:b,"--active-background-color":u.slug?`var( --wp--preset--color--${u.slug} )`:h,"--active-border-color":v.slug?`var( --wp--preset--color--${v.slug} )`:_,"--active-icon-background-color":d.slug?`var( --wp--preset--color--${d.slug} )`:f}}),{children:y,...O}=(0,l.useInnerBlocksProps)(E,{template:[["outermost/icon-block",{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" /><path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="2" /></svg>',iconColorValue:"#334155",iconBackgroundColorValue:"#f3f4f6",itemsJustification:"center",width:"34px",hasNoIconFill:!0,style:{border:{radius:"99px"},spacing:{padding:"8px"}}}]],templateLock:"insert"});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(c.PanelBody,{title:(0,t.__)("Post View Count Button","ncmfse")},(0,o.createElement)(c.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Show Count","ncmfse"),help:(0,t.__)("Show/Hide count number","ncmfse"),checked:B,onChange:e=>{s({showCountText:e})}}))),(0,o.createElement)(l.InspectorControls,{group:"color"},I.map((({onChange:e,label:t,value:r,resetAllFilter:c})=>(0,o.createElement)(l.__experimentalColorGradientSettingsDropdown,{__experimentalIsRenderedInSidebar:!0,key:`like-btns-color-${t}`,settings:[{colorValue:r,label:t,onColorChange:e,isShownByDefault:!0,resetAllFilter:c,enableAlpha:!0}],panelId:n,...x}))),(0,o.createElement)("p",{className:"outermost-icon-block__color-settings__help"},(0,o.createElement)("strong",null,(0,t.__)("Active: ","ncmfse")),(0,t.__)("Set the color for the active state (liked/saved/hovering) of the button.","ncmfse"))),(0,o.createElement)("div",{...E},(0,o.createElement)("div",{...O},y,B?(0,o.createElement)("span",{className:"nc__count"},A):null)))})),i=JSON.parse('{"UU":"ncmfse/view-count-btn"}'),s=window.wp.primitives,a=(0,o.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(s.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"}));(0,e.registerBlockType)(i.UU,{icon:a,edit:n,save:function(){return(0,o.createElement)(l.InnerBlocks.Content,null)}})}},t={};function r(e){var l=t[e];if(void 0!==l)return l.exports;var c=t[e]={exports:{}};return o[e](c,c.exports,r),c.exports}r.m=o,e=[],r.O=(o,t,l,c)=>{if(!t){var n=1/0;for(C=0;C<e.length;C++){for(var[t,l,c]=e[C],i=!0,s=0;s<t.length;s++)(!1&c||n>=c)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(i=!1,c<n&&(n=c));if(i){e.splice(C--,1);var a=l();void 0!==a&&(o=a)}}return o}c=c||0;for(var C=e.length;C>0&&e[C-1][2]>c;C--)e[C]=e[C-1];e[C]=[t,l,c]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={2850:0,5718:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var l,c,[n,i,s]=t,a=0;if(n.some((o=>0!==e[o]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(s)var C=s(r)}for(o&&o(t);a<n.length;a++)c=n[a],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(C)},t=globalThis.webpackChunktodo_list=globalThis.webpackChunktodo_list||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var l=r.O(void 0,[5718],(()=>r(47)));l=r.O(l)})();