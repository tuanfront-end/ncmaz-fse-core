import*as t from"@wordpress/interactivity";var e={d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const a=(s={getContext:()=>t.getContext,store:()=>t.store},n={},e.d(n,s),n),{state:o}=(0,a.store)("ncmazfse-core",{state:{get isSaved(){const{contextIsSaved:t,postId:e}=(0,a.getContext)();return o.saveData?.[e]?o.saveData[e].isSaved:t},get saveCount(){const{contextSaveCount:t,postId:e}=(0,a.getContext)();return o.saveData?.[e]?o.saveData[e].saveCount:t},get isLoading(){const{postId:t}=(0,a.getContext)();return o.loadingList.includes(t)}},actions:{handleSave:()=>{const t=(0,a.getContext)(),{postId:e}=t;try{o.loadingList.push(e);const a=new FormData;a.append("action","handle_save"),a.append("_ajax_nonce",o.saveButtonNonce),a.append("post_id",e.toString()),a.append("user_id",o.userId.toString()),a.append("handle",o.isSaved?"remove":"add"),fetch(o.ajaxUrl,{method:"POST",body:a}).then((t=>t.json())).then((({data:a,success:s})=>{if(!s)throw new Error("Server error");const n=Boolean(a.is_saved);let r=0;if(n?r=t.contextSaveCount+1:t.contextSaveCount>0&&(r=t.contextSaveCount-1),t.contextSaveCount=r,t.contextIsSaved=n,o.saveData={...o.saveData,[e]:{isSaved:n,saveCount:r}},!o.userId){const e=t.postId,a=localStorage.getItem("savedPosts"),o=a?JSON.parse(a):[];if(n)o.push(e);else{const t=o.indexOf(e);t>-1&&o.splice(t,1)}localStorage.setItem("savedPosts",JSON.stringify(o))}})).finally((()=>{o.loadingList=o.loadingList.filter((t=>t!==e))}))}catch(t){console.log("Error Server data!",t),o.loadingList=o.loadingList.filter((t=>t!==e))}}},callbacks:{logHandleSaveInit:()=>{const t=(0,a.getContext)();if(!o.userId){const e=t.postId,a=localStorage.getItem("savedPosts"),o=a?JSON.parse(a):[];t.contextIsSaved=o.includes(e)}}}});var s,n;