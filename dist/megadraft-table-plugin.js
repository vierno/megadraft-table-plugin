!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Megadraft"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","Megadraft","ReactDOM"],t):"object"==typeof exports?exports["megadraft-table-plugin"]=t(require("React"),require("Megadraft"),require("ReactDOM")):e["megadraft-table-plugin"]=t(e.React,e.Megadraft,e.ReactDOM)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=o(r),l=n(21),i=o(l),s=n(5),u=o(s);t.default={title:"Table",type:u.default.PLUGIN_TYPE,buttonComponent:a.default,blockComponent:i.default,options:{displayOptions:[],defaultDisplay:null}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),d=n(4),f=n(5),p=o(f),h=n(6),y=n(7),b=o(y),v=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=n.onClick.bind(n),n.onSave=n.onSave.bind(n),n.onModalClose=n.onModalClose.bind(n),n.state={isEditing:!1},n}return l(t,e),s(t,[{key:"onClick",value:function(e){this.setState({isEditing:!0})}},{key:"onModalClose",value:function(){this.state.isEditing&&this.setState({isEditing:!1})}},{key:"onSave",value:function(e){this.setState({isEditing:!1});var t=i({type:p.default.PLUGIN_TYPE},e);this.props.onChange((0,h.insertDataBlock)(this.props.editorState,t))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("button",{className:this.props.className,type:"button",onClick:this.onClick,title:this.props.title},c.default.createElement(d.PluginIcon,{className:"sidemenu__button__icon"})),c.default.createElement(b.default,{isOpen:this.state.isEditing,onCloseRequest:this.onModalClose,onSaveRequest:this.onSave,data:{}}))}}]),t}(u.Component);t.default=v},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.className,n=void 0===t?"":t;return i.default.createElement("svg",{className:n,width:"24px",height:"24px",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M19.8,3H4.2C3,3,2,4,2,5.3v13.5C2,20,3,21,4.2,21h15.5c1.2,0,2.2-1,2.2-2.3V5.3C22,4,21,3,19.8,3z M9.7,13.9v-3.8 c0,0,0-0.1,0-0.2h4.8c0,0,0,0.1,0,0.2v3.8H9.7L9.7,13.9z M14.4,15.4v4.1H9.7v-4.1H14.4z M3.5,10h4.7c0,0,0,0.1,0,0.2v3.8H3.5V10z M15.9,10h4.6v4h-4.6v-3.8C15.9,10,15.9,10,15.9,10z M4.2,4.5h15.5c0.4,0,0.7,0.3,0.7,0.7v3.2h-17V5.3C3.5,4.8,3.8,4.5,4.2,4.5z M3.5,18.8v-3.4h4.7v4.1h-4C3.8,19.5,3.5,19.2,3.5,18.8z M19.8,19.5h-3.9v-4.1h4.6v3.3C20.5,19.2,20.2,19.5,19.8,19.5z",fill:"currentColor"}))}function a(e){var t=e.className,n=void 0===t?"":t;return i.default.createElement("svg",{className:n,width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},i.default.createElement("path",{d:"M20.0526316,8 L3.94736842,8 C3.42631579,8 3,8.73125 3,9.625 L3,19.375 C3,20.26875 3.42631579,21 3.94736842,21 L20.0526316,21 C20.5736842,21 21,20.26875 21,19.375 L21,9.625 C21,8.73125 20.5736842,8 20.0526316,8 L20.0526316,8 Z M3,3 L3,6 L21,6 L21,3 L3,3 L3,3 Z",id:"Shape",fill:"#999999"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.PluginIcon=r,t.HighlightIcon=a;var l=n(3),i=o(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PLUGIN_TYPE:"table-plugin"}},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(3),h=o(p),y=n(8),b=o(y),v=n(16),m=n(17),_=n(19),g=n(20),C=1,O=1,w=(c=u=function(e){function t(e){l(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onSaveRequest=n._onSaveRequest.bind(n),n.onFormItemChange=n.onFormItemChange.bind(n),n.addRow=n.addRow.bind(n),n.removeRow=n.removeRow.bind(n),n.addColumn=n.addColumn.bind(n),n.removeColumn=n.removeColumn.bind(n),n.state={data:new g.TableConfig(n.props.data),selectedCell:[],errors:{title:[]}},n}return s(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=new g.TableConfig(d({},e.data));this.setState({data:t})}},{key:"_onSaveRequest",value:function(){this.isValid()&&this.props.onSaveRequest(this.state.data)}},{key:"isValid",value:function(){var e={title:[]};return""===this.state.data.title&&(e.title=["Campo requirido"]),this.setState({errors:e}),0===e.title.length}},{key:"_changeDataValue",value:function(e,t){var n=a({},e,t),o=Object.assign({},this.state.data,n);this.setState({data:o})}},{key:"onFormItemChange",value:function(e){var t=e.target,n=t.name,o=t.value;this._changeDataValue(n,o)}},{key:"_createNewRow",value:function(){return this.state.data.rows.length>0?Array.apply(null,new Array(this.state.data.rows[0].length)).map(function(e){return""}):[]}},{key:"addRow",value:function(){var e=void 0;e=2==this.state.selectedCell.length?this.state.selectedCell[1]+1:this.state.data.rows.length+1;var t=[].concat(r(this.state.data.rows.slice(0,e)),[this._createNewRow()],r(this.state.data.rows.slice(e)));this._changeDataValue("rows",t)}},{key:"removeRow",value:function(){if(this.state.data.rows.length!==O){var e=void 0;e=2==this.state.selectedCell.length?this.state.selectedCell[1]:this.state.data.rows.length-1;var t=[].concat(r(this.state.data.rows));t.splice(e,1),this._changeDataValue("rows",t)}}},{key:"addColumn",value:function(){if(!(this.state.data.rows.length<O)){var e=void 0;e=2==this.state.selectedCell.length?this.state.selectedCell[0]+1:this.state.data.rows[0].length;var t=this.state.data.rows.map(function(t){return[].concat(r(t.slice(0,e)),[""],r(t.slice(e)))});this._changeDataValue("rows",t)}}},{key:"removeColumn",value:function(){if(this.state.data.rows[0].length!==C){var e=void 0;e=2==this.state.selectedCell.length?this.state.selectedCell[0]:this.state.data.rows[0].length-1;var t=this.state.data.rows.map(function(t){var n=[].concat(r(t));return n.splice(e,1),n});this._changeDataValue("rows",t)}}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.errors;return h.default.createElement(b.default,{className:"table-manager-modal",title:"Criar",isOpen:this.props.isOpen,onCloseRequest:this.props.onCloseRequest,width:"90%"},h.default.createElement(y.ModalBody,null,h.default.createElement("div",{className:"table-manager-modal__form"},h.default.createElement(m.Input,{title:"Título",name:"title",value:t.title,errors:n.title,onChange:this.onFormItemChange}),h.default.createElement(v.HeaderStyle,{name:"headerStyle",selectedOptions:t.headerStyle,onChange:this.onFormItemChange}),h.default.createElement(_.AddRemove,{className:"add-remove-rows",title:"Linhas",onAdd:this.addRow,onRemove:this.removeRow}),h.default.createElement(_.AddRemove,{title:"Colunas",className:"add-remove-columns",onAdd:this.addColumn,onRemove:this.removeColumn}),h.default.createElement(m.Input,{title:"Fonte",name:"source",value:t.source,onChange:this.onFormItemChange,isRequired:!1})),h.default.createElement("div",{className:"table-manager-modal__editable-table"},'"preview"')),h.default.createElement(y.ModalFooter,{className:"table-manager-modal__footer"},h.default.createElement("button",{className:"table-manager-modal__add-button bs-ui-button bs-ui-button--background-blue",onClick:this._onSaveRequest},"Adicionar")))}}]),t}(p.Component),u.propTypes={onCloseRequest:p.PropTypes.func,onSaveRequest:p.PropTypes.func},c);t.default=w},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ModalFooter=t.ModalBody=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),d=n(9),f=o(d),p=n(11),h=o(p),y=n(12),b=o(y),v=n(14),m=o(v),_=n(15),g=o(_);t.ModalBody=m.default,t.ModalFooter=g.default;var C=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleCloseClick=n.handleCloseClick.bind(n),n.handleOverlayClick=n.handleOverlayClick.bind(n),n.handlePortalClose=n.handlePortalClose.bind(n),n}return l(t,e),s(t,[{key:"handleCloseClick",value:function(){this.handleClose()}},{key:"handleOverlayClick",value:function(e){var t=e.target.classList;t.contains("bs-modal__overlay")!==!1&&this.handleClose()}},{key:"handleClose",value:function(){this.props.isOpen&&this.props.onCloseRequest()}},{key:"handlePortalClose",value:function(){this.props.onCloseRequest()}},{key:"render",value:function(){var e=h.default.modal;this.props.width&&(e=i({},e,{width:this.props.width})),this.props.height&&(e=i({},e,{height:this.props.height}));var t="bs-modal "+(this.props.className||"");return c.default.createElement(f.default,{isOpened:this.props.isOpen,closeOnEsc:!0,onClose:this.handlePortalClose},c.default.createElement("div",{onKeyDown:this.handleKeyDown,className:t,style:h.default.container},c.default.createElement("div",{className:"bs-modal__overlay",style:h.default.overlay,onClick:this.handleOverlayClick},c.default.createElement("div",{style:e},c.default.createElement("div",{className:"bs-modal__header",style:h.default.header},c.default.createElement("span",{className:"bs-modal__title",style:h.default.title},this.props.title),c.default.createElement(b.default,{onClick:this.handleCloseClick})),this.props.children))))}}]),t}(u.Component);C.propTypes={className:c.default.PropTypes.string,isOpen:c.default.PropTypes.bool,width:c.default.PropTypes.oneOfType([c.default.PropTypes.string,c.default.PropTypes.number]),height:c.default.PropTypes.oneOfType([c.default.PropTypes.string,c.default.PropTypes.number]),title:c.default.PropTypes.string,children:c.default.PropTypes.oneOfType([c.default.PropTypes.arrayOf(c.default.PropTypes.node),c.default.PropTypes.node]),onCloseRequest:c.default.PropTypes.func},C.defaultProps={isOpen:!1,title:"",onCloseRequest:function(){}},t.default=C},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),u=o(s),c=n(10),d=o(c),f={ESCAPE:27},p=function(e){function t(){r(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));return e.state={active:!1},e.handleWrapperClick=e.handleWrapperClick.bind(e),e.closePortal=e.closePortal.bind(e),e.handleOutsideMouseClick=e.handleOutsideMouseClick.bind(e),e.handleKeydown=e.handleKeydown.bind(e),e.portal=null,e.node=null,e}return l(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.closeOnEsc&&document.addEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&(document.addEventListener("mouseup",this.handleOutsideMouseClick),document.addEventListener("touchstart",this.handleOutsideMouseClick)),this.props.isOpened&&this.openPortal()}},{key:"componentWillReceiveProps",value:function(e){"undefined"!=typeof e.isOpened&&(e.isOpened&&(this.state.active?this.renderPortal(e):this.openPortal(e)),!e.isOpened&&this.state.active&&this.closePortal()),"undefined"==typeof e.isOpened&&this.state.active&&this.renderPortal(e)}},{key:"componentWillUnmount",value:function(){this.props.closeOnEsc&&document.removeEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&(document.removeEventListener("mouseup",this.handleOutsideMouseClick),document.removeEventListener("touchstart",this.handleOutsideMouseClick)),this.closePortal(!0)}},{key:"handleWrapperClick",value:function(e){e.preventDefault(),e.stopPropagation(),this.state.active||this.openPortal()}},{key:"openPortal",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];this.setState({active:!0}),this.renderPortal(e),this.props.onOpen(this.node)}},{key:"closePortal",value:function(){var e=this,t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],n=function(){e.node&&(d.default.unmountComponentAtNode(e.node),document.body.removeChild(e.node)),e.portal=null,e.node=null,t!==!0&&e.setState({active:!1})};this.state.active&&(this.props.beforeClose?this.props.beforeClose(this.node,n):n(),this.props.onClose())}},{key:"handleOutsideMouseClick",value:function(e){if(this.state.active){var t=(0,c.findDOMNode)(this.portal);t.contains(e.target)||e.button&&0!==e.button||(e.stopPropagation(),this.closePortal())}}},{key:"handleKeydown",value:function(e){e.keyCode===f.ESCAPE&&this.state.active&&this.closePortal()}},{key:"renderPortal",value:function(e){this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node));var t=e.children;"function"==typeof e.children.type&&(t=u.default.cloneElement(e.children,{closePortal:this.closePortal})),this.portal=d.default.unstable_renderSubtreeIntoContainer(this,t,this.node,this.props.onUpdate)}},{key:"render",value:function(){return this.props.openByClickOn?u.default.cloneElement(this.props.openByClickOn,{onClick:this.handleWrapperClick}):null}}]),t}(u.default.Component);t.default=p,p.propTypes={children:u.default.PropTypes.element.isRequired,openByClickOn:u.default.PropTypes.element,closeOnEsc:u.default.PropTypes.bool,closeOnOutsideClick:u.default.PropTypes.bool,isOpened:u.default.PropTypes.bool,onOpen:u.default.PropTypes.func,onClose:u.default.PropTypes.func,beforeClose:u.default.PropTypes.func,onUpdate:u.default.PropTypes.func},p.defaultProps={onOpen:function(){},onClose:function(){},onUpdate:function(){}},e.exports=t.default},function(e,t){e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={container:{color:"#333",position:"relative",fontFamily:["Open Sans","sans-serif"],fontSize:"16px"},overlay:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(51, 51, 51, 0.8)",zIndex:"2"},modal:{width:"500px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"3",backgroundColor:"#fff",borderRadius:"4px",display:"flex",flexFlow:"column"},header:{padding:"24px",borderBottom:"1px solid #ccc",display:"flex",justifyContent:"space-between",alignItems:"center"},title:{fontSize:"20px",letterSpacing:"-0.8px",textRendering:"optimizeLegibility",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},close:{height:"24px",color:"#999",cursor:"pointer",position:"relative",textDecoration:"none"},closeHover:{color:"#333"},body:{padding:"2.5rem 1.5rem",fontSize:"0.875rem",lineHeight:"1.4",letterSpacing:"-0.0125rem",overflowY:"auto"},footer:{borderTop:"1px solid #ccc",padding:"1.5rem 1.5rem"}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),d=n(11),f=o(d),p=n(13),h=o(p),y=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isHovered:!1},e}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=f.default.close;return this.state.isHovered&&(t=i({},t,f.default.closeHover)),c.default.createElement("span",{className:"bs-modal__close",onClick:this.props.onClick,onMouseEnter:function(){return e.setState({isHovered:!0})},onMouseLeave:function(){return e.setState({isHovered:!1})},style:t},c.default.createElement(h.default,null))}}]),t}(u.Component);y.propTypes={onClick:c.default.PropTypes.func},t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),u=o(s),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",fill:"currentColor"},u.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),u.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}}]),t}(u.default.Component);t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),u=o(s),c=n(11),d=o(c),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"bs-modal__body",style:d.default.body},this.props.children)}}]),t}(s.Component);f.propTypes={children:u.default.PropTypes.node},t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),u=o(s),c=n(11),d=o(c),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"bs-modal__footer",style:d.default.footer},this.props.children)}}]),t}(s.Component);f.propTypes={children:u.default.PropTypes.node},t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.name,n=e.onChange,o=e.selectedOptions,r=function(e){var r={top:o.top,bottom:o.bottom,right:o.right,left:o.left};r[e.target.value]=e.target.checked,n({target:{name:t,value:r}})};return l.default.createElement(i.FormItem,null,l.default.createElement("label",{className:"bs-ui-input__label"},"Destaque"),l.default.createElement("label",{className:"bs-ui-checkbox"},l.default.createElement(i.Checkbox,{className:"header-style",name:"header-style",value:"top",onChange:r,isChecked:o.top}),l.default.createElement(s.HighlightIcon,{className:"header-style--top"})),l.default.createElement("label",{className:"bs-ui-checkbox"},l.default.createElement(i.Checkbox,{className:"header-style",name:"header-style",value:"bottom",onChange:r,isChecked:o.bottom}),l.default.createElement(s.HighlightIcon,{className:"header-style--bottom"})),l.default.createElement("label",{className:"bs-ui-checkbox"},l.default.createElement(i.Checkbox,{className:"header-style",name:"header-style",value:"right",onChange:r,isChecked:o.right}),l.default.createElement(s.HighlightIcon,{className:"header-style--right"})),l.default.createElement("label",{className:"bs-ui-checkbox"},l.default.createElement(i.Checkbox,{className:"header-style",name:"header-style",value:"left",onChange:r,isChecked:o.left}),l.default.createElement(s.HighlightIcon,{className:"header-style--left"})))}Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderStyle=r;var a=n(3),l=o(a),i=n(17),s=n(4)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.children,n=e.isRequired,o=void 0!==n&&n,r=e.hasErrors,a=void 0!==r&&r,l=e.className,i=void 0===l?"":l,u=(0,c.default)({"bs-ui-input":!0,"bs-ui-input--required":o,"bs-ui-input--error":a},i);return s.default.createElement("div",{className:u},t)}function a(e){var t=e.name,n=e.value,o=e.isChecked,r=e.className,a=e.onChange;return s.default.createElement("input",{type:"checkbox",className:r,name:t,checked:o,value:n,onChange:a})}function l(e){var t=e.title,n=e.name,o=e.value,a=e.errors,l=void 0===a?[]:a,i=e.onChange,u=e.onBlur,c=e.isRequired,d=void 0===c||c;return s.default.createElement(r,{isRequired:d,hasErrors:0!==l.length},s.default.createElement("label",{className:"bs-ui-input__label",htmlFor:n},t),s.default.createElement("input",{className:"bs-ui-input__field",type:"text",name:n,value:o,onChange:i,onBlur:u,required:d}),s.default.createElement("p",{className:"bs-ui-input__field-error"},l.map(function(e,t){return s.default.createElement("span",{key:t},e)})))}Object.defineProperty(t,"__esModule",{value:!0}),t.FormItem=r,t.Checkbox=a,t.Input=l;var i=n(3),s=o(i),u=n(18),c=o(u)},function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var l in o)a.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.title,n=e.className,o=e.onAdd,r=e.onRemove;return l.default.createElement(i.FormItem,{className:n},l.default.createElement("label",{className:"bs-ui-input__label"},t),l.default.createElement("button",{className:"bs-ui-button bs-ui-button--blue btn-add",onClick:o},"+ Adicionar"),l.default.createElement("button",{className:"bs-ui-button bs-ui-button--red btn-remove",onClick:r},"X Remover"))}Object.defineProperty(t,"__esModule",{value:!0}),t.AddRemove=r;var a=n(3),l=o(a),i=n(17)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{top:e.top||!1,bottom:e.bottom||!1,right:e.right||!1,left:e.left||!1}};t.TableConfig=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{title:e.title||"",headerStyle:n(e.headerStyle),source:e.source||"",rows:e.rows||[[""]]}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),d=n(6),f=n(7),p=o(f),h=d.MegadraftPlugin.BlockContent,y=d.MegadraftPlugin.CommonBlock,b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleEdit=n._handleEdit.bind(n),n._onModalClose=n._onModalClose.bind(n),n._onSave=n._onSave.bind(n),n.state={isEditing:!1},n.actions=[{key:"edit",icon:d.MegadraftIcons.EditIcon,action:n._handleEdit},{key:"delete",icon:d.MegadraftIcons.DeleteIcon,action:n.props.container.remove}],n}return l(t,e),s(t,[{key:"_handleEdit",value:function(){this.setState({isEditing:!0})}},{key:"_onModalClose",value:function(){this.state.isEditing&&this.setState({isEditing:!1})}},{key:"_onSave",value:function(e){this.setState({isEditing:!1}),this.props.container.updateData(i({},e))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(y,i({},this.props,{actions:this.actions}),c.default.createElement(h,null)),c.default.createElement(p.default,{isOpen:this.state.isEditing,onCloseRequest:this._onModalClose,onSaveRequest:this._onSave,data:this.props.data}))}}]),t}(u.Component);t.default=b}])});
//# sourceMappingURL=megadraft-table-plugin.js.map