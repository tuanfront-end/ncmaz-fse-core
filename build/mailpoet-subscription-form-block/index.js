(()=>{"use strict";var e,t={88:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.primitives,l=(0,t.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(n.Path,{d:"M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z"})),a=window.wp.i18n,o=window.wp.blockEditor,i=window.wp.components,s=window.wp.data,r=window.wp.element,c=JSON.parse('{"UU":"ncmfse/mailpoet-subscription-form"}');(0,e.registerBlockType)(c.UU,{edit:function(e){const{setAttributes:n,attributes:l,clientId:c}=e,{mailpoetListId:m,submitButtonStyle:u,showNameField:d,successMessage:p,showLabel:h,emailLabel:b,emailPlaceholder:f,nameLabel:w,namePlaceholder:g,inputRadius:_,inputPadding:v}=l,E=window.mailpoetLists?.map((e=>({label:e.name,value:e.id})))||[];(0,r.useEffect)((()=>{E.length&&(m||n({mailpoetListId:E[0]?.value}))}),[E.length,m]);const{innerBlocks:k}=(0,s.useSelect)((e=>{const{getBlocks:t}=e(o.store);return{innerBlocks:t(c)}}),[c]),{replaceInnerBlocks:C}=(0,s.useDispatch)(o.store),x=e=>{switch(e){case"default":return[["core/buttons",{},[["core/button",{text:(0,a.__)("Subscribe","ncmfse"),width:100,tagName:"button",type:"submit",style:{spacing:{padding:{top:"0.65rem",bottom:"0.65rem"}}}}]]]];case"inline-email-input":return[["outermost/icon-block",{icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>',iconColorValue:"#ffffff",iconBackgroundColorValue:"#000000",itemsJustification:"center",width:"36px",hasNoIconFill:!0,style:{border:{radius:"99px"},spacing:{padding:"8px"}}}]];default:return[]}};(0,r.useEffect)((()=>{if(!k?.length)return;if("outermost/icon-block"===k[0]?.name&&"inline-email-input"===u)return;if("core/buttons"===k[0]?.name&&"default"===u)return;const e=x(u).map((([e,t,n])=>window.wp.blocks.createBlock(e,t,n?.map((([e,t])=>window.wp.blocks.createBlock(e,t))))));C(c,e,!1)}),[u,k,c,C]);const y=(0,o.useBlockProps)({style:{"--input-radius":`${_}px`,"--input-padding":`${v}px`}}),{children:B,...P}=(0,o.useInnerBlocksProps)(y,{template:x(u),templateLock:"insert"});return(0,t.createElement)("div",{...y},(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(i.Notice,{status:"warning",isDismissible:!1},(0,a.__)("Please make sure you have the MailPoet plugin installed and configured. This block requires MailPoet to work.","ncmfse")),(0,t.createElement)(i.PanelBody,{title:(0,a.__)("Settings","ncmfse")},(0,t.createElement)(i.SelectControl,{label:(0,a.__)("Select MailPoet List","ncmfse"),help:(0,a.__)("This form adds the subscribers to these lists.","ncmfse"),value:m,options:E,onChange:e=>n({mailpoetListId:e})}),(0,t.createElement)(i.ToggleControl,{label:(0,a.__)("Show Name Field","ncmfse"),checked:d,onChange:e=>n({showNameField:e})}),(0,t.createElement)(i.ToggleControl,{label:(0,a.__)("Show Label","ncmfse"),checked:h,onChange:e=>n({showLabel:e})}),d&&(0,t.createElement)(t.Fragment,null,h&&(0,t.createElement)(i.TextControl,{label:(0,a.__)("Name Label","ncmfse"),value:w,onChange:e=>n({nameLabel:e})}),(0,t.createElement)(i.TextControl,{label:(0,a.__)("Name Placeholder","ncmfse"),value:g,onChange:e=>n({namePlaceholder:e})})),h&&(0,t.createElement)(i.TextControl,{label:(0,a.__)("Email Label","ncmfse"),value:b,onChange:e=>n({emailLabel:e})}),(0,t.createElement)(i.TextControl,{label:(0,a.__)("Email Placeholder","ncmfse"),value:f,onChange:e=>n({emailPlaceholder:e})}),(0,t.createElement)(i.RadioControl,{label:(0,a.__)("Submit Button Style","ncmfse"),onChange:e=>n({submitButtonStyle:e}),options:[{label:(0,a.__)("Default","ncmfse"),value:"default"},{label:(0,a.__)("Inline Email Input","ncmfse"),value:"inline-email-input"}],selected:u}),(0,t.createElement)(i.TextareaControl,{label:(0,a.__)("Success Message","ncmfse"),help:(0,a.__)("This message will be displayed after the user submits the form.","ncmfse"),value:p,onChange:e=>n({successMessage:e})})),(0,t.createElement)(i.PanelBody,{title:(0,a.__)("Styles","ncmfse")},(0,t.createElement)(i.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Input Radius (px)","ncmfse"),max:100,min:0,onChange:e=>n({inputRadius:e}),value:_}),(0,t.createElement)(i.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Input Padding (px)","ncmfse"),max:100,min:0,onChange:e=>n({inputPadding:e}),value:v}))),(0,t.createElement)("div",{...P},!!d&&(0,t.createElement)("div",{className:"form-item__name"},h&&(0,t.createElement)("label",{htmlFor:"name"},w),(0,t.createElement)("input",{type:"text",name:"name",placeholder:g})),(0,t.createElement)("div",{className:"form-item__email"},h&&(0,t.createElement)("label",{htmlFor:"email"},b),(0,t.createElement)("div",{className:"form-item__email-content"},(0,t.createElement)("input",{type:"email",name:"email",placeholder:f}),"inline-email-input"===u?(0,t.createElement)("button",{type:"submit"},B):"")),"default"===u?B:""))},save:function(){return(0,t.createElement)(o.InnerBlocks.Content,null)},icon:l})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,a,o)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],s=!0,r=0;r<n.length;r++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](n[r])))?n.splice(r--,1):(s=!1,o<i&&(i=o));if(s){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={4562:0,454:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,r]=n,c=0;if(i.some((t=>0!==e[t]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(r)var m=r(l)}for(t&&t(n);c<i.length;c++)o=i[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},n=globalThis.webpackChunktodo_list=globalThis.webpackChunktodo_list||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[454],(()=>l(88)));a=l.O(a)})();