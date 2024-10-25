(()=>{"use strict";var e,o={829:()=>{const e=window.wp.blocks,o=window.React,t=window.wp.i18n,r=window.wp.coreData,l=window.wp.blockEditor,n=window.wp.components,c=(0,l.withColors)({activeColor:"active-color",activeBgColor:"active-background-color",activeBorderColor:"active-border-color"})((function(e){const{clientId:c,attributes:s,setAttributes:i,context:{postId:a},activeColor:u,activeBgColor:v,activeBorderColor:d,setActiveColor:p,setActiveBgColor:m,setActiveBorderColor:C}=e,{customActiveBgColor:g,customActiveBorderColor:h,customActiveColor:w,showCountText:_}=s,{records:f}=(0,r.useEntityRecords)("root","comment",{per_page:-1,post:a}),b=f?.length||0,k=(0,l.__experimentalUseMultipleOriginColorsAndGradients)(),B=[{label:(0,t.__)("Active Text/Icon ","ncmfse"),value:u.color||w,onChange:e=>{p(e),i({customActiveColor:e})},resetAllFilter:()=>{p(void 0),i({customActiveColor:"#16a34a"})}},{label:(0,t.__)("Active Background ","ncmfse"),value:v.color||g,onChange:e=>{m(e),i({customActiveBgColor:e})},resetAllFilter:()=>{m(void 0),i({customActiveBgColor:void 0})}},{label:(0,t.__)("Active Border ","ncmfse"),value:d.color||h,onChange:e=>{C(e),i({customActiveBorderColor:e})},resetAllFilter:()=>{C(void 0),i({customActiveBorderColor:void 0})}}],A=(0,l.useBlockProps)({className:"nc-post-reaction-button",style:{"--active-color":u.slug?`var( --wp--preset--color--${u.slug} )`:w,"--active-background-color":v.slug?`var( --wp--preset--color--${v.slug} )`:g,"--active-border-color":d.slug?`var( --wp--preset--color--${d.slug} )`:h}}),{children:x,...E}=(0,l.useInnerBlocksProps)(A,{template:[["outermost/icon-block",{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M8 13.5H16M8 8.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>',iconColor:"contrast-2",iconColorValue:"var:preset|color|contrast-2",iconBackgroundColor:"shadcn-accent",iconBackgroundColorValue:"var:preset|color|shadcn-accent",itemsJustification:"center",width:"34px",hasNoIconFill:!0,style:{border:{radius:"99px"},spacing:{padding:"8px"}}}]],templateLock:"insert"});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,t.__)("Post Comment Count Button","ncmfse")},(0,o.createElement)(n.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Show Count","ncmfse"),help:(0,t.__)("Show/Hide count number","ncmfse"),checked:_,onChange:e=>{i({showCountText:e})}}))),(0,o.createElement)(l.InspectorControls,{group:"color"},B.map((({onChange:e,label:t,value:r,resetAllFilter:n})=>(0,o.createElement)(l.__experimentalColorGradientSettingsDropdown,{__experimentalIsRenderedInSidebar:!0,key:`like-btns-color-${t}`,settings:[{colorValue:r,label:t,onColorChange:e,isShownByDefault:!0,resetAllFilter:n,enableAlpha:!0}],panelId:c,...k}))),(0,o.createElement)("p",{className:"outermost-icon-block__color-settings__help"},(0,o.createElement)("strong",null,(0,t.__)("Active: ","ncmfse")),(0,t.__)(" Set the color for the active state (liked/saved/hovering) of the button.","ncmfse"))),(0,o.createElement)("div",{...A},(0,o.createElement)("div",{...E},x,_?(0,o.createElement)("span",{className:"nc__count"},b):null)))})),s=JSON.parse('{"UU":"ncmfse/comment-count-btn"}'),i=window.wp.primitives,a=(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(i.Path,{d:"M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-2.2 6.6H7l1.6-2.2c.3-.4.5-.7.6-.9.1-.2.2-.4.2-.5 0-.2-.1-.3-.1-.4-.1-.1-.2-.1-.4-.1s-.4 0-.6.1c-.3.1-.5.3-.7.4l-.2.2-.2-1.2.1-.1c.3-.2.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.9.2.2.1.4.3.6.5.1.2.2.5.2.7 0 .3-.1.6-.2.9-.1.3-.4.7-.7 1.1l-.5.6h1.6v1.2z"}));(0,e.registerBlockType)(s.UU,{icon:a,edit:c,save:function(){return(0,o.createElement)(l.InnerBlocks.Content,null)}})}},t={};function r(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,e=[],r.O=(o,t,l,n)=>{if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],l=e[u][1],n=e[u][2];for(var s=!0,i=0;i<t.length;i++)(!1&n||c>=n)&&Object.keys(r.O).every((e=>r.O[e](t[i])))?t.splice(i--,1):(s=!1,n<c&&(c=n));if(s){e.splice(u--,1);var a=l();void 0!==a&&(o=a)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,l,n]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={5896:0,3008:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var l,n,c=t[0],s=t[1],i=t[2],a=0;if(c.some((o=>0!==e[o]))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(i)var u=i(r)}for(o&&o(t);a<c.length;a++)n=c[a],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},t=self.webpackChunkncmaz_fse_core=self.webpackChunkncmaz_fse_core||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var l=r.O(void 0,[3008],(()=>r(829)));l=r.O(l)})();