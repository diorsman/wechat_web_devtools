"use strict";function init(){function e(e,r,o){if("object"!==("undefined"==typeof r?"undefined":_typeof(r))&&(o=r,r={}),e.error)if("object"===_typeof(e.error)){var t=e.error||{},n=t.httpCode||404,s=t.msg||t.toString();o(n,{},s),t.type!==j&&t.type!==d||l.showWeappError(t.type,t.type===j?f.parseWxssErr(t):t)}else o(404,{"Weapp-Error":encodeURIComponent(e.error)},e.error.toString());else{var i={};r.isSvg&&(i={"Content-Type":"image/svg+xml"}),o(null,i,e.data)}}function r(r,g){var j=n.getProject(r),d=n.getFileNameFromUrl(r,j);d=decodeURI(d);var v=n.isWxmlFile(d),E=n.isWxssFile(d);if(E)u(r,{project:j},function(r,o){e({error:r,data:o},g)});else if(v){var x=[];x.push(function(e){var r=p.getAppJSONSync(j),t=r.pages,n=d.replace(o.extname(d),""),s=t.findIndex(function(e){return e===n});s>-1?e(null,s):e({type:y,msgForConsole:y+"app.json 中未配置，当前页面 "+n+" 请检查后重试。",msg:"app.json 中未配置当前页面 <br> "+n+" <br>请检查后重试。"})}),x.push(function(e){s(j,{url:r},function(r,o){e(r,o)})}),x.push(function(e){i(r,{project:j},function(r,o){e(r,o)})}),t.parallel(x,function(e,o){if(e){var t=S.replace(/{{error}}/,function(){return e.msg}).replace(/{{msgForConsole}}/,function(){var r=e.type,o=void 0;return r===m?o=f.parseWxmlErr(j,e.msgForConsole):r===y?o=e.msgForConsole:r===R&&(o=f.parseWxmlLoseErr(j,e.msgForConsole)),o});return void g(500,{},t)}var n={};try{n=p.getPageJSONSync(j,r)}catch(e){l.showWeappError(e.type,f.parseJsonParseErr(e))}var s={config:n,project:j,url:r,pageFrameTpl:o[1],generateFunc:o[2].generateFunc},i=a(s);g(null,i.header,i.body)})}else{var q=c.parse(r),F=q.pathname,W=(o.basename(F),o.extname(d));n.whiteFileExtName[W]?p.getFile(j,d,function(r,o){e({error:r,data:o},{isSvg:".svg"===W},g)}):e({error:"404"},g)}}var o=(require("fs"),require("path")),t=require("async"),n=require("../utils/tools.js"),s=(require("../../stores/projectStores.js"),require("./transConfigToPf.js")),i=require("./transWxmlToJs.js"),a=require("./transWxmlToHtml.js"),p=require("../utils/projectManager.js"),u=require("./transWxssToCss.js"),l=require("../../actions/windowActions.js"),c=require("url"),f=require("../utils/parseErr.js"),g=require("../../config/config.js"),m=g.WXML_ERROR,y=g.PAGE_DEFINE_ERROR,j=g.WXSS_ERROR,d=g.WXSS_IMPORT_ERROR,R=g.WXML_LOSE_ERROR,v=require("../../config/config.js"),S=(v.weappLocalIdRegular,require("../tpl/errorTpl.js"));_exports={getResponse:r}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_exports;init(),module.exports=_exports;