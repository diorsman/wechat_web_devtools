"use strict";function init(){var e=require("../../../lib/react.js"),t=(require("../../../lib/react-dom.js"),require("../../../stores/webviewStores.js")),a=e.createClass({displayName:"Modal",getInitialState:function(){return{title:"",content:"",confirmText:"确定",cancelText:"取消",showCancel:!0,confirmColor:"#3CC51F",cancelColor:"#000000",hidden:!0,lazyLoaded:!1}},componentDidMount:function(){t.on("SEND_AS_SDK",this._handleAssdkCommand)},componentWillUnmount:function(){t.removeListener("SEND_AS_SDK",this._handleAssdkCommand)},componentWillReceiveProps:function(e){e.webviewID!=this.__showOnWebviewID&&this.setState({hidden:!0})},_handleAssdkCommand:function(e,t,a){var n=t.args;"showModal"===e&&(this.callback=a,this.__showOnWebviewID=this.props.webviewID,this.setState({title:n.title||"",content:n.content||"",confirmText:n.confirmText||"确定",cancelText:n.cancelText||"取消",showCancel:n.showCancel!==!1,confirmColor:n.confirmColor||"#3CC51F",cancelColor:n.cancelColor||"#000000",hidden:!1,lazyLoaded:!0}))},handleCancelClick:function(){this.callback({errMsg:"showModal:ok",confirm:0}),this.hide()},handleConfrimClick:function(){this.callback({errMsg:"showModal:ok",confirm:1}),this.hide()},hide:function(){this.setState({hidden:!0})},render:function(){return this.state.lazyLoaded?e.createElement("div",{className:"wx-modal",style:{display:this.state.hidden?"none":"block"}},e.createElement("div",{className:"wx-modal-mask"}),e.createElement("div",{className:"wx-modal-dialog"},e.createElement("div",{className:"wx-modal-dialog-hd"},e.createElement("strong",null,this.state.title)),e.createElement("div",{className:"wx-modal-dialog-bd"},this.state.content),e.createElement("div",{className:"wx-modal-dialog-ft"},e.createElement("a",{className:"wx-modal-btn-default",style:{color:this.state.cancelColor,display:this.state.showCancel?"":"none"},onClick:this.handleCancelClick},this.state.cancelText),e.createElement("a",{className:"wx-modal-btn-primary",style:{color:this.state.confirmColor},onClick:this.handleConfrimClick},this.state.confirmText)))):null}});_exports=a}var _exports;init(),module.exports=_exports;