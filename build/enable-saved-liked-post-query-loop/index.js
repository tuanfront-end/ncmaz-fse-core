(()=>{"use strict";var e,t={541:()=>{const e=window.React,t=window.wp.i18n,o=window.wp.hooks,r=window.wp.blockEditor,s=window.wp.components;(0,o.addFilter)("editor.BlockEdit","enable-saved-liked-post-query-loop/add-inspector-controls",(function(o){return n=>{if("core/query"!==n.name)return(0,e.createElement)(o,{...n});const{attributes:a,setAttributes:l}=n,{showUserSavedPosts:i,showUserLikedPosts:h,query:d}=a;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o,{...n}),(0,e.createElement)(r.InspectorControls,null,!d?.inherit&&(0,e.createElement)(s.PanelBody,{title:(0,t.__)("Saved & Liked posts setting"),initialOpen:!1},(0,e.createElement)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Show user's saved posts"),help:(0,t.__)("Show saved posts of the user. Note: Leave the Author filter blank to get the posts based on the current user (viewer). If Author has a value, the posts will be filtered based on that user."),checked:i,onChange:e=>{l({showUserSavedPosts:e,showUserLikedPosts:!e&&h})}}),(0,e.createElement)(s.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Show user's liked posts"),help:(0,t.__)("Show liked posts of the user. Note: Leave the Author filter blank to get the posts based on the current user (viewer). If Author has a value, the posts will be filtered based on that user."),checked:h,onChange:e=>{l({showUserLikedPosts:e,showUserSavedPosts:!e&&i})}}))))}}))}},o={};function r(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,s,n)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(l=!1,n<a&&(a=n));if(l){e.splice(d--,1);var h=s();void 0!==h&&(t=h)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2030:0,2178:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var s,n,a=o[0],l=o[1],i=o[2],h=0;if(a.some((t=>0!==e[t]))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(i)var d=i(r)}for(t&&t(o);h<a.length;h++)n=a[h],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},o=self.webpackChunkncmaz_fse_core=self.webpackChunkncmaz_fse_core||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=r.O(void 0,[2178],(()=>r(541)));s=r.O(s)})();