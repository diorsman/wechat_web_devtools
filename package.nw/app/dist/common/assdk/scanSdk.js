"use strict";function init(){function e(e){var t=document.createElement("input");t.style.display="none",t.setAttribute("type","file"),t.setAttribute("accept","image/*"),global.contentDocumentBody.appendChild(t),t.addEventListener("change",function(n){e.sucCall&&e.sucCall(t.value),global.contentDocumentBody.removeChild(t)}),t.addEventListener("cancel",function(n){e.cancelCall&&e.cancelCall(n),global.contentDocumentBody.removeChild(t)}),t.click()}function t(t,r){t.args;e({sucCall:function(e){n({url:""+o,method:"post",body:c.readFileSync(e),needToken:1},function(e,t,n){if(e)return void r({errMsg:"scanCode:fail "+JSON.stringify(e)});try{n=JSON.parse(n)}catch(e){return void r({errMsg:"scanCode:fail "+JSON.stringify(e)})}if(n.result||n.path){var c=n.path?decodeURIComponent(n.path):"";r({errMsg:"scanCode:ok",result:n.result,scanType:n.scan_type,path:c,charSet:n.char_set})}else r({errMsg:"scanCode:fail"})})},cancelCall:function(){r({errMsg:"scanCode:cancel"})}})}var n=(require("../../actions/webviewActions.js"),require("../request/request.js")),c=require("fs"),r=require("../../config/urlConfig.js"),o=r.jsDecodeQRCodeURL;_exports={scanCode:t}}var _exports;init(),module.exports=_exports;