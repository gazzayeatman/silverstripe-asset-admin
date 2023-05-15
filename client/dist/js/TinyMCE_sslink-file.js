!function(e){function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}var t={};o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s="./client/src/entwine/TinyMCE_sslink-file.js")}({"./client/src/entwine/TinyMCE_sslink-file.js":function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var s=t(2),r=n(s),a=t(30),d=n(a),l=t(0),i=n(l),u=t(6),c=n(u),_=t(7),h=n(_),f=t(10),p=n(f),m=t(12),j=n(m),v=t(3),y=n(v),g=t("./client/src/state/modal/ModalActions.js"),b=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}(g);d.default.addAction("sslink",{text:r.default._t("AssetAdmin.LINKLABEL_FILE","Link to a file"),onclick:function(e){return e.execCommand("sslinkfile")},priority:80},editorIdentifier).addCommandWithUrlTest("sslinkfile",/^\[file_link/);var S={init:function(e){e.addCommand("sslinkfile",function(){(0,h.default)("#"+e.id).entwine("ss").openLinkFileDialog()})}},x="insert-link__dialog-wrapper--file",C=(0,v.loadComponent)(j.default);h.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkFileDialog:function(){var o=e("#"+x);o.length||(o=e('<div id="'+x+'" />'),e("body").append(o)),o.addClass("insert-link__dialog-wrapper"),o.setElement(this),o.open()}}),e(".js-injector-boot #"+x).entwine({renderModal:function(e){var o=this,t=y.default.reducer.store.dispatch;t(b.initFormStack("insert-link","admin"));var n=function(){t(b.reset()),o.close()},s=function(){return o.handleInsert.apply(o,arguments)},r=this.getOriginalAttributes(),a=tinymce.activeEditor.selection,d=this.getFolderId(),l=a.getContent()||"",u=a.getNode().tagName,_="A"!==u&&""===l.trim();console.log(d),c.default.render(i.default.createElement(C,{isOpen:e,type:"insert-link",folderId:d,onInsert:s,onClosed:n,title:!1,bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:r,requireLinkText:_}),this[0])},buildAttributes:function(e){return{href:p.default.serialise({name:"file_link",properties:{id:e.ID}},!0)+(e.Anchor&&e.Anchor.length?"#"+e.Anchor:""),target:e.TargetBlank?"_blank":"",title:e.Description}},getFolderId:function(){var e=this.getElement();if(!e)return null;var o=Number(e.data("config").upload_folder_id);return isNaN(o)?null:o},getOriginalAttributes:function(){var o=this.getElement().getEditor(),t=e(o.getSelectedNode()),n=(t.attr("href")||"").split("#");if(!n[0])return{};var s=p.default.match("file_link",!1,n[0]);return s?{ID:s.properties.id?parseInt(s.properties.id,10):0,Anchor:n[1]||"",Description:t.attr("title"),TargetBlank:!!t.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkfile",function(e){return S.init(e)}),o.default=S},"./client/src/state/modal/ModalActionTypes.js":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={DEFINE_IMAGE_SIZE_PRESETS:"DEFINE_IMAGE_SIZE_PRESETS",INIT_FORM_SCHEMA_STACK:"INIT_FORM_SCHEMA_STACK",POP_FORM_SCHEMA:"POP_FORM_SCHEMA",PUSH_FORM_SCHEMA:"PUSH_FORM_SCHEMA",RESET:"RESET",RESET_FORM_STACK:"RESET_FORM_STACK"}},"./client/src/state/modal/ModalActions.js":function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return{type:_.default.DEFINE_IMAGE_SIZE_PRESETS,payload:{imageSizePresets:e}}}function r(e,o){return function(t,n){var s=n(),r=(0,f.default)(s.form.formState,e+".values"),a=(0,f.default)(s.form.formSchemas,o+".schema.fields");if(r){var d=Object.keys(r).filter(function(e){return null!==r[e]&&(0,j.default)(e,a)}).map(function(e){return{name:e,value:r[e]}});t((0,p.setSchemaStateOverrides)(o,{fields:d}))}}}function a(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:_.default.PUSH_FORM_SCHEMA,payload:{formSchema:{type:e,nextType:o}}}}function d(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return{type:_.default.INIT_FORM_SCHEMA_STACK,payload:{formSchema:{type:e,nextType:o}}}}function l(){return{type:_.default.POP_FORM_SCHEMA}}function i(){return{type:_.default.RESET}}function u(){return{type:_.default.RESET_FORM_STACK}}Object.defineProperty(o,"__esModule",{value:!0}),o.defineImageSizePresets=s,o.stashFormValues=r,o.pushFormStackEntry=a,o.initFormStack=d,o.popFormStackEntry=l,o.reset=i,o.resetFormStack=u;var c=t("./client/src/state/modal/ModalActionTypes.js"),_=n(c),h=t("./node_modules/redux-form/lib/structure/plain/getIn.js"),f=n(h),p=t(8),m=t("./client/src/state/modal/helpers.js"),j=n(m)},"./client/src/state/modal/helpers.js":function(e,o,t){"use strict";function n(e,o){var t=void 0;for(t=0;t<o.length;t++){var s=o[t];if(s.name===e)return s;if(s.children){var r=n(e,s.children);if(r)return r}}return!1}function s(e,o){var t=n(e,o);return t&&"hidden"!==t.type&&"Structural"!==t.schemaType&&!t.readOnly&&!t.disabled}Object.defineProperty(o,"__esModule",{value:!0}),o.findField=n,o.default=s},"./node_modules/lodash/_Hash.js":function(e,o,t){function n(e){var o=-1,t=null==e?0:e.length;for(this.clear();++o<t;){var n=e[o];this.set(n[0],n[1])}}var s=t("./node_modules/lodash/_hashClear.js"),r=t("./node_modules/lodash/_hashDelete.js"),a=t("./node_modules/lodash/_hashGet.js"),d=t("./node_modules/lodash/_hashHas.js"),l=t("./node_modules/lodash/_hashSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=d,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_ListCache.js":function(e,o,t){function n(e){var o=-1,t=null==e?0:e.length;for(this.clear();++o<t;){var n=e[o];this.set(n[0],n[1])}}var s=t("./node_modules/lodash/_listCacheClear.js"),r=t("./node_modules/lodash/_listCacheDelete.js"),a=t("./node_modules/lodash/_listCacheGet.js"),d=t("./node_modules/lodash/_listCacheHas.js"),l=t("./node_modules/lodash/_listCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=d,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Map.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),s=t("./node_modules/lodash/_root.js"),r=n(s,"Map");e.exports=r},"./node_modules/lodash/_MapCache.js":function(e,o,t){function n(e){var o=-1,t=null==e?0:e.length;for(this.clear();++o<t;){var n=e[o];this.set(n[0],n[1])}}var s=t("./node_modules/lodash/_mapCacheClear.js"),r=t("./node_modules/lodash/_mapCacheDelete.js"),a=t("./node_modules/lodash/_mapCacheGet.js"),d=t("./node_modules/lodash/_mapCacheHas.js"),l=t("./node_modules/lodash/_mapCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=d,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Symbol.js":function(e,o,t){var n=t("./node_modules/lodash/_root.js"),s=n.Symbol;e.exports=s},"./node_modules/lodash/_arrayMap.js":function(e,o){function t(e,o){for(var t=-1,n=null==e?0:e.length,s=Array(n);++t<n;)s[t]=o(e[t],t,e);return s}e.exports=t},"./node_modules/lodash/_assocIndexOf.js":function(e,o,t){function n(e,o){for(var t=e.length;t--;)if(s(e[t][0],o))return t;return-1}var s=t("./node_modules/lodash/eq.js");e.exports=n},"./node_modules/lodash/_baseGetTag.js":function(e,o,t){function n(e){return null==e?void 0===e?l:d:i&&i in Object(e)?r(e):a(e)}var s=t("./node_modules/lodash/_Symbol.js"),r=t("./node_modules/lodash/_getRawTag.js"),a=t("./node_modules/lodash/_objectToString.js"),d="[object Null]",l="[object Undefined]",i=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_baseIsNative.js":function(e,o,t){function n(e){return!(!a(e)||r(e))&&(s(e)?f:i).test(d(e))}var s=t("./node_modules/lodash/isFunction.js"),r=t("./node_modules/lodash/_isMasked.js"),a=t("./node_modules/lodash/isObject.js"),d=t("./node_modules/lodash/_toSource.js"),l=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,_=u.toString,h=c.hasOwnProperty,f=RegExp("^"+_.call(h).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},"./node_modules/lodash/_baseToString.js":function(e,o,t){function n(e){if("string"==typeof e)return e;if(a(e))return r(e,n)+"";if(d(e))return u?u.call(e):"";var o=e+"";return"0"==o&&1/e==-l?"-0":o}var s=t("./node_modules/lodash/_Symbol.js"),r=t("./node_modules/lodash/_arrayMap.js"),a=t("./node_modules/lodash/isArray.js"),d=t("./node_modules/lodash/isSymbol.js"),l=1/0,i=s?s.prototype:void 0,u=i?i.toString:void 0;e.exports=n},"./node_modules/lodash/_copyArray.js":function(e,o){function t(e,o){var t=-1,n=e.length;for(o||(o=Array(n));++t<n;)o[t]=e[t];return o}e.exports=t},"./node_modules/lodash/_coreJsData.js":function(e,o,t){var n=t("./node_modules/lodash/_root.js"),s=n["__core-js_shared__"];e.exports=s},"./node_modules/lodash/_freeGlobal.js":function(e,o,t){(function(o){var t="object"==typeof o&&o&&o.Object===Object&&o;e.exports=t}).call(o,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/lodash/_getMapData.js":function(e,o,t){function n(e,o){var t=e.__data__;return s(o)?t["string"==typeof o?"string":"hash"]:t.map}var s=t("./node_modules/lodash/_isKeyable.js");e.exports=n},"./node_modules/lodash/_getNative.js":function(e,o,t){function n(e,o){var t=r(e,o);return s(t)?t:void 0}var s=t("./node_modules/lodash/_baseIsNative.js"),r=t("./node_modules/lodash/_getValue.js");e.exports=n},"./node_modules/lodash/_getRawTag.js":function(e,o,t){function n(e){var o=a.call(e,l),t=e[l];try{e[l]=void 0;var n=!0}catch(e){}var s=d.call(e);return n&&(o?e[l]=t:delete e[l]),s}var s=t("./node_modules/lodash/_Symbol.js"),r=Object.prototype,a=r.hasOwnProperty,d=r.toString,l=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_getValue.js":function(e,o){function t(e,o){return null==e?void 0:e[o]}e.exports=t},"./node_modules/lodash/_hashClear.js":function(e,o,t){function n(){this.__data__=s?s(null):{},this.size=0}var s=t("./node_modules/lodash/_nativeCreate.js");e.exports=n},"./node_modules/lodash/_hashDelete.js":function(e,o){function t(e){var o=this.has(e)&&delete this.__data__[e];return this.size-=o?1:0,o}e.exports=t},"./node_modules/lodash/_hashGet.js":function(e,o,t){function n(e){var o=this.__data__;if(s){var t=o[e];return t===r?void 0:t}return d.call(o,e)?o[e]:void 0}var s=t("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__",a=Object.prototype,d=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashHas.js":function(e,o,t){function n(e){var o=this.__data__;return s?void 0!==o[e]:a.call(o,e)}var s=t("./node_modules/lodash/_nativeCreate.js"),r=Object.prototype,a=r.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashSet.js":function(e,o,t){function n(e,o){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=s&&void 0===o?r:o,this}var s=t("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__";e.exports=n},"./node_modules/lodash/_isKeyable.js":function(e,o){function t(e){var o=typeof e;return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}e.exports=t},"./node_modules/lodash/_isMasked.js":function(e,o,t){function n(e){return!!r&&r in e}var s=t("./node_modules/lodash/_coreJsData.js"),r=function(){var e=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},"./node_modules/lodash/_listCacheClear.js":function(e,o){function t(){this.__data__=[],this.size=0}e.exports=t},"./node_modules/lodash/_listCacheDelete.js":function(e,o,t){function n(e){var o=this.__data__,t=s(o,e);return!(t<0||(t==o.length-1?o.pop():a.call(o,t,1),--this.size,0))}var s=t("./node_modules/lodash/_assocIndexOf.js"),r=Array.prototype,a=r.splice;e.exports=n},"./node_modules/lodash/_listCacheGet.js":function(e,o,t){function n(e){var o=this.__data__,t=s(o,e);return t<0?void 0:o[t][1]}var s=t("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheHas.js":function(e,o,t){function n(e){return s(this.__data__,e)>-1}var s=t("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheSet.js":function(e,o,t){function n(e,o){var t=this.__data__,n=s(t,e);return n<0?(++this.size,t.push([e,o])):t[n][1]=o,this}var s=t("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_mapCacheClear.js":function(e,o,t){function n(){this.size=0,this.__data__={hash:new s,map:new(a||r),string:new s}}var s=t("./node_modules/lodash/_Hash.js"),r=t("./node_modules/lodash/_ListCache.js"),a=t("./node_modules/lodash/_Map.js");e.exports=n},"./node_modules/lodash/_mapCacheDelete.js":function(e,o,t){function n(e){var o=s(this,e).delete(e);return this.size-=o?1:0,o}var s=t("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheGet.js":function(e,o,t){function n(e){return s(this,e).get(e)}var s=t("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheHas.js":function(e,o,t){function n(e){return s(this,e).has(e)}var s=t("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheSet.js":function(e,o,t){function n(e,o){var t=s(this,e),n=t.size;return t.set(e,o),this.size+=t.size==n?0:1,this}var s=t("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_memoizeCapped.js":function(e,o,t){function n(e){var o=s(e,function(e){return t.size===r&&t.clear(),e}),t=o.cache;return o}var s=t("./node_modules/lodash/memoize.js"),r=500;e.exports=n},"./node_modules/lodash/_nativeCreate.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),s=n(Object,"create");e.exports=s},"./node_modules/lodash/_objectToString.js":function(e,o){function t(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=t},"./node_modules/lodash/_root.js":function(e,o,t){var n=t("./node_modules/lodash/_freeGlobal.js"),s="object"==typeof self&&self&&self.Object===Object&&self,r=n||s||Function("return this")();e.exports=r},"./node_modules/lodash/_stringToPath.js":function(e,o,t){var n=t("./node_modules/lodash/_memoizeCapped.js"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,a=n(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(s,function(e,t,n,s){o.push(n?s.replace(r,"$1"):t||e)}),o});e.exports=a},"./node_modules/lodash/_toKey.js":function(e,o,t){function n(e){if("string"==typeof e||s(e))return e;var o=e+"";return"0"==o&&1/e==-r?"-0":o}var s=t("./node_modules/lodash/isSymbol.js"),r=1/0;e.exports=n},"./node_modules/lodash/_toSource.js":function(e,o){function t(e){if(null!=e){try{return s.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,s=n.toString;e.exports=t},"./node_modules/lodash/eq.js":function(e,o){function t(e,o){return e===o||e!==e&&o!==o}e.exports=t},"./node_modules/lodash/isArray.js":function(e,o){var t=Array.isArray;e.exports=t},"./node_modules/lodash/isFunction.js":function(e,o,t){function n(e){if(!r(e))return!1;var o=s(e);return o==d||o==l||o==a||o==i}var s=t("./node_modules/lodash/_baseGetTag.js"),r=t("./node_modules/lodash/isObject.js"),a="[object AsyncFunction]",d="[object Function]",l="[object GeneratorFunction]",i="[object Proxy]";e.exports=n},"./node_modules/lodash/isObject.js":function(e,o){function t(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}e.exports=t},"./node_modules/lodash/isObjectLike.js":function(e,o){function t(e){return null!=e&&"object"==typeof e}e.exports=t},"./node_modules/lodash/isSymbol.js":function(e,o,t){function n(e){return"symbol"==typeof e||r(e)&&s(e)==a}var s=t("./node_modules/lodash/_baseGetTag.js"),r=t("./node_modules/lodash/isObjectLike.js"),a="[object Symbol]";e.exports=n},"./node_modules/lodash/memoize.js":function(e,o,t){function n(e,o){if("function"!=typeof e||null!=o&&"function"!=typeof o)throw new TypeError(r);var t=function(){var n=arguments,s=o?o.apply(this,n):n[0],r=t.cache;if(r.has(s))return r.get(s);var a=e.apply(this,n);return t.cache=r.set(s,a)||r,a};return t.cache=new(n.Cache||s),t}var s=t("./node_modules/lodash/_MapCache.js"),r="Expected a function";n.Cache=s,e.exports=n},"./node_modules/lodash/toPath.js":function(e,o,t){function n(e){return a(e)?s(e,i):d(e)?[e]:r(l(u(e)))}var s=t("./node_modules/lodash/_arrayMap.js"),r=t("./node_modules/lodash/_copyArray.js"),a=t("./node_modules/lodash/isArray.js"),d=t("./node_modules/lodash/isSymbol.js"),l=t("./node_modules/lodash/_stringToPath.js"),i=t("./node_modules/lodash/_toKey.js"),u=t("./node_modules/lodash/toString.js");e.exports=n},"./node_modules/lodash/toString.js":function(e,o,t){function n(e){return null==e?"":s(e)}var s=t("./node_modules/lodash/_baseToString.js");e.exports=n},"./node_modules/redux-form/lib/structure/plain/getIn.js":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("./node_modules/lodash/toPath.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e,o){if(!e)return e;var t=(0,s.default)(o),n=t.length;if(n){for(var r=e,a=0;a<n&&r;++a)r=r[t[a]];return r}};o.default=r},"./node_modules/webpack/buildin/global.js":function(e,o){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},0:function(e,o){e.exports=React},10:function(e,o){e.exports=ShortcodeSerialiser},12:function(e,o){e.exports=InsertMediaModal},2:function(e,o){e.exports=i18n},3:function(e,o){e.exports=Injector},30:function(e,o){e.exports=TinyMCEActionRegistrar},6:function(e,o){e.exports=ReactDom},7:function(e,o){e.exports=jQuery},8:function(e,o){e.exports=SchemaActions}});