"use strict";function init(){function e(e,i){var t=e.args,r=t.tempFilePath,a=l.getFileStat(r);if(r&&a){var s=o.getCurrentProjectConfig(),n=o.getCurrentProject(),f=l.getSavedFileList(n);if(1024*s.Setting.MaxFileStorageSize*1024<f.totalSize+a.size)i({errMsg:"saveFile:fail the maximum size of the file storage limit is exceeded"});else{var v=l.saveFileForever(r);i(v===!1?{errMsg:"saveFile:fail"}:{errMsg:"saveFile:ok",savedFilePath:v})}}else i({errMsg:"saveFile:fail file not found"})}function i(e,i){var t=e.args,r=t.filePath,a=f.extname(r).toLowerCase();if(!v[a])return void i({errMsg:"openDocument:fail filetype not supported"});var s=l.getRealPath(r);return n.existsSync(s)?(nw.Shell.openItem(s),void i({errMsg:"openDocument:ok"})):void i({errMsg:"openDocument:fail fail file not exist"})}function t(e,i){var t=o.getCurrentProject(),r=l.getSavedFileList(t);i({errMsg:"getSavedFileList:ok",fileList:r.fileList})}function r(e,i){var t=e.args;if(t.filePath){var r=l.getFileStat(t.filePath);i(r?{errMsg:"getSavedFileInfo:ok",size:r.size,createTime:parseInt(r.ctime.getTime()/1e3)}:{errMsg:"getSavedFileInfo:fail file doesn't exist"})}else i({errMsg:"getSavedFileInfo:fail"})}function a(e,i){var t=e.args;i(t.filePath?l.removeSavedFile(t.filePath)?{errMsg:"removeSavedFile:ok"}:{errMsg:"removeSavedFile:fail file doesn't exist"}:{errMsg:"removeSavedFile:fail"})}function s(e,i){var t=e.args,r=o.getCurrentProject();if(t.base64Data){var a=l.saveBase64DataToFile(r,t.base64Data,".jpg");i(a?{errMsg:"base64ToTempFilePath:ok",tempFilePath:a}:{errMsg:"base64ToTempFilePath:fail"})}else i({errMsg:"base64ToTempFilePath:fail"})}var o=(require("../../actions/webviewActions.js"),require("../../stores/projectStores.js")),l=require("../../utils/file.js"),n=require("fs"),f=require("path"),v={".doc":!0,".xls":!0,".ppt":!0,".pdf":!0,".docx":!0,".xlsx":!0,".pptx":!0};_exports={saveFile:e,openDocument:i,getSavedFileList:t,getSavedFileInfo:r,removeSavedFile:a,base64ToTempFilePath:s}}var _exports;init(),module.exports=_exports;