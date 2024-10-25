(()=>{"use strict";var e,t={305:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,s=JSON.parse('{"UU":"ncmfse/reading-progress"}'),c=window.wp.primitives,l=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-2.2 6.6H7l1.6-2.2c.3-.4.5-.7.6-.9.1-.2.2-.4.2-.5 0-.2-.1-.3-.1-.4-.1-.1-.2-.1-.4-.1s-.4 0-.6.1c-.3.1-.5.3-.7.4l-.2.2-.2-1.2.1-.1c.3-.2.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.9.2.2.1.4.3.6.5.1.2.2.5.2.7 0 .3-.1.6-.2.9-.1.3-.4.7-.7 1.1l-.5.6h1.6v1.2z"}));(0,e.registerBlockType)(s.UU,{icon:l,edit:function(e){const{clientId:s,attributes:c,setAttributes:l}=e,{selector:a}=c,i=(0,n.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,r.__)("Settings","ncmfse")},(0,t.createElement)(o.TextControl,{label:(0,r.__)("Selector","ncmfse"),value:a,onChange:e=>{l({selector:e})},__nextHasNoMarginBottom:!0,help:(0,r.__)('Selector to calculate the reading progress. Tip: Find the unique class of the block you want to calculate the reading progress for, otherwise add an "Additional CSS class" to it in the Advanced settings.',"ncmfse")}))),(0,t.createElement)("div",{...i},(0,t.createElement)("span",{className:"wp-block-ncmfse-reading-progress__number"},"10%")))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,o,s)=>{if(!r){var c=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],s=e[p][2];for(var l=!0,a=0;a<r.length;a++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(l=!1,s<c&&(c=s));if(l){e.splice(p--,1);var i=o();void 0!==i&&(t=i)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[r,o,s]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1802:0,4062:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,c=r[0],l=r[1],a=r[2],i=0;if(c.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var p=a(n)}for(t&&t(r);i<c.length;i++)s=c[i],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},r=self.webpackChunkncmaz_fse_core=self.webpackChunkncmaz_fse_core||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[4062],(()=>n(305)));o=n.O(o)})();