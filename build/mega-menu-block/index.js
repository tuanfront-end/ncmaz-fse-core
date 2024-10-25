(()=>{"use strict";var e,t={102:()=>{const e=window.React,t=window.wp.blocks,n=window.wp.hooks,l=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.coreData,i=window.wp.data,r=window.wp.element,s=window.wp.components,c=window.wp.primitives,m=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),p=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),u=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),_=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})),h=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"})),d=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"})),w=JSON.parse('{"UU":"outermost/mega-menu"}'),g=(0,e.createElement)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M20,12 L4,12 L4,13.5 L20,13.5 L20,12 Z M10,6.5 L4,6.5 L4,8 L10,8 L10,6.5 Z M20,17.5 L4,17.5 L4,19 L20,19 L20,17.5 Z M20,5.62462724 L16.000015,9 L12,5.62462724 L12.9791165,4.5 L16.000015,7.04920972 L19.0208935,4.5 L20,5.62462724 Z"}));(0,t.registerBlockType)(w.UU,{icon:g,edit:function({attributes:t,setAttributes:n}){const{label:c,menuSlug:w,title:g,description:v,disableWhenCollapsed:f,collapsedUrl:b,justifyMenu:E,width:x}=t,y=(0,i.useSelect)((e=>e("core").getSite()?.url)),k=y?y+"/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=menu":"",C=(0,i.useSelect)((e=>e("core/editor").getEditorSettings()?.__experimentalFeatures?.layout)),{hasResolved:L,records:M}=(0,o.useEntityRecords)("postType","wp_template_part",{per_page:-1});let V=[];L&&(V=M?.filter((e=>"menu"===e.area)).map((e=>({label:e.title.rendered,value:e.slug})))||[]);const S=V.length>0,T=!w||V.some((e=>e.value===w)),B=(0,e.createElement)(s.Notice,{status:"warning",isDismissible:!1},(0,r.createInterpolateElement)((0,l.__)("No menu templates could be found. Create a new one in the <a>Site Editor</a>.","ncmfse"),{a:(0,e.createElement)("a",{href:k,target:"_blank",rel:"noreferrer"})})),H=(0,e.createElement)(s.Notice,{status:"warning",isDismissible:!1},(0,l.__)("The selected menu template no longer exists. Choose another.","ncmfse")),N=(0,a.useBlockProps)({className:"wp-block-navigation-item wp-block-outermost-mega-menu__toggle"}),O=[{value:"left",icon:m,label:(0,l.__)("Justify menu left","ncmfse"),iconLabel:(0,l.__)("Left","ncmfse")},{value:"center",icon:p,label:(0,l.__)("Justify menu center","ncmfse"),iconLabel:(0,l.__)("Center","ncmfse")},{value:"right",icon:u,label:(0,l.__)("Justify menu right","ncmfse"),iconLabel:(0,l.__)("Right","ncmfse")}],Z=[{value:"content",icon:_,label:(0,l.sprintf)(
// translators: %s: container size (i.e. 600px etc)
// translators: %s: container size (i.e. 600px etc)
(0,l.__)("Content width (%s wide)","ncmfse"),C.contentSize),iconLabel:(0,l.__)("Content","ncmfse")},{value:"wide",icon:h,label:(0,l.sprintf)(
// translators: %s: container size (i.e. 600px etc)
// translators: %s: container size (i.e. 600px etc)
(0,l.__)("Wide width (%s wide)","ncmfse"),C.wideSize),iconLabel:(0,l.__)("Wide","ncmfse")},{value:"full",icon:d,label:(0,l.__)("Full width","ncmfse"),iconLabel:(0,l.__)("Full","ncmfse")}];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,{group:"settings"},(0,e.createElement)(s.PanelBody,{className:"outermost-mega-menu__settings-panel",title:(0,l.__)("Settings","ncmfse"),initialOpen:!0},(0,e.createElement)(s.TextControl,{label:(0,l.__)("Label","ncmfse"),type:"text",value:c,onChange:e=>n({label:e}),autoComplete:"off"}),(0,e.createElement)(s.ComboboxControl,{label:(0,l.__)("Menu Template","ncmfse"),value:w,options:V,onChange:e=>n({menuSlug:e||""}),help:S&&(0,r.createInterpolateElement)((0,l.__)("Create and modify menu templates in the <a>Site Editor</a>.","ncmfse"),{a:(0,e.createElement)("a",{href:k,target:"_blank",rel:"noreferrer"})})}),!S&&B,S&&!T&&H,(0,e.createElement)(s.TextareaControl,{className:"settings-panel__description",label:(0,l.__)("Description","ncmfse"),type:"text",value:v||"",onChange:e=>{n({description:e})},help:(0,l.__)("The description will be displayed in the menu if the current theme supports it.","ncmfse"),autoComplete:"off"}),(0,e.createElement)(s.TextControl,{label:(0,l.__)("Title","ncmfse"),type:"text",value:g||"",onChange:e=>{n({title:e})},help:(0,l.__)("Additional information to help clarify the purpose of the link.","ncmfse"),autoComplete:"off"}),(0,e.createElement)(s.ToggleControl,{label:(0,l.__)("Disable in navigation overlay","ncmfse"),checked:f,onChange:e=>{n({disableWhenCollapsed:e})},help:(0,l.__)("When the navigation options are displayed in an overlay, typically on mobile devices, disable the mega menu.","ncmfse")}),f&&(0,e.createElement)(s.TextControl,{label:(0,l.__)("Url","ncmfse"),type:"text",value:b||"",onChange:e=>{n({collapsedUrl:e})},help:(0,l.__)("When the navigtion menu is collapsed, link to this URL instead.","ncmfse"),autoComplete:"off"})),(0,e.createElement)(s.PanelBody,{className:"outermost-mega-menu__layout-panel",title:(0,l.__)("Layout","ncmfse"),initialOpen:!0},(0,e.createElement)(s.__experimentalHStack,{alignment:"top",justify:"space-between"},(0,e.createElement)(s.__experimentalToggleGroupControl,{className:"block-editor-hooks__flex-layout-justification-controls",label:(0,l.__)("Justification","ncmfse"),value:E,onChange:e=>{n({justifyMenu:e||"center"})},isDeselectable:!0},O.map((({value:t,icon:n,iconLabel:l})=>(0,e.createElement)(s.__experimentalToggleGroupControlOptionIcon,{key:t,value:t,icon:n,label:l,disabled:"center"!==t&&"content"!==x,style:"center"!==t&&"content"!==x?{opacity:.5}:{}})))),(0,e.createElement)(s.__experimentalToggleGroupControl,{className:"block-editor-hooks__flex-layout-justification-controls",label:(0,l.__)("Width","ncmfse"),value:x||"content",onChange:e=>{n("content"!==e?{width:e||"",justifyMenu:"center"}:{width:e})},__nextHasNoMarginBottom:!0},Z.map((({value:t,icon:n,iconLabel:l})=>(0,e.createElement)(s.__experimentalToggleGroupControlOptionIcon,{key:t,value:t,icon:n,label:l}))))),(0,e.createElement)(s.BaseControl,{help:(0,l.__)('Mega-menu with width "Full" or "Wide" will always be centered.',"ncmfse")},(0,e.createElement)("p",null)))),(0,e.createElement)("div",{...N},(0,e.createElement)("div",{className:"wp-block-navigation-item__content wp-block-outermost-mega-menu__toggle"},(0,e.createElement)(a.RichText,{identifier:"label",className:"wp-block-navigation-item__label",value:c,onChange:e=>n({label:e}),"aria-label":(0,l.__)("Mega menu link text","ncmfse"),placeholder:(0,l.__)("Add label…","ncmfse"),allowedFormats:["core/bold","core/italic","core/image","core/strikethrough"]}),(0,e.createElement)("span",{className:"wp-block-outermost-mega-menu__toggle-icon"},(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},(0,e.createElement)("path",{d:"M1.50002 4L6.00002 8L10.5 4",strokeWidth:"1.5"}))),v&&(0,e.createElement)("span",{className:"wp-block-navigation-item__description"},v))))}}),(0,n.addFilter)("blocks.registerBlockType","outermost-mega-menu-add-to-navigation",((e,t)=>{var n;return"core/navigation"===t?{...e,allowedBlocks:[...null!==(n=e.allowedBlocks)&&void 0!==n?n:[],"outermost/mega-menu"]}:e}))}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,a,o)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){n=e[m][0],a=e[m][1],o=e[m][2];for(var r=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](n[s])))?n.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={9546:0,4302:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,i=n[0],r=n[1],s=n[2],c=0;if(i.some((t=>0!==e[t]))){for(a in r)l.o(r,a)&&(l.m[a]=r[a]);if(s)var m=s(l)}for(t&&t(n);c<i.length;c++)o=i[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},n=self.webpackChunkncmaz_fse_core=self.webpackChunkncmaz_fse_core||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[4302],(()=>l(102)));a=l.O(a)})();