"use strict";window.g_aqn=class{constructor(c,a){this.g_aqo=c,this.g_aqp=a,this.g_aqq=!1,this.g_aeT=()=>this.g_Im()}g_aqr(){}g_aqs(e,a,b,c){this.g_aqo.g_aqt(this.g_aqp,e,a,!!b,c)}g_aqu(e,a,b,c){return this.g_aqo.g_aqv(this.g_aqp,e,a,!!b,c)}g_aqw(d,a,b){this.g_aqo.g_aqx()?this.g_aqs(d,a,b):this.g_aqo.g_aqy()._OnMessageFromDOM({type:"event",component:this.g_aqp,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_aqz(c,a){this.g_aqo.g_aqA(this.g_aqp,c,a)}g_aqB(d){for(const[a,b]of d)this.g_aqz(a,b)}g_aqC(){return this.g_aqo}g_aqD(){return this.g_aqp}g_WT(){this.g_aqq||(this.g_aqo.g_aqE(this.g_aeT),this.g_aqq=!0)}g_WH(){this.g_aqq&&(this.g_aqo.g_aqF(this.g_aeT),this.g_aqq=!1)}g_Im(){}},"use strict",window.g_aqG=class extends g_aqn{constructor(c,a){super(c,a),this.g_aqH=new Map,this.g_aqI=!0,this.g_aqz("create",b=>this.g_aqJ(b)),this.g_aqz("destroy",b=>this.g_aqK(b)),this.g_aqz("set-visible",b=>this.g_aqL(b)),this.g_aqz("update-position",b=>this.g_aqM(b)),this.g_aqz("update-state",b=>this.g_aqN(b)),this.g_aqz("focus",b=>this.g_aqO(b)),this.g_aqz("set-css-style",b=>this.g_aqP(b))}g_aqQ(b){this.g_aqI=!!b}g_aqR(c,e){this.g_aqz(c,b=>{const a=b.elementId,c=this.g_aqH.get(a);return e(c,b)})}g_aqJ(d){const a=d.elementId,b=this.g_Xr(a,d);this.g_aqH.set(a,b),this.g_aqI&&document.body.appendChild(b)}g_Xr(){throw new Error("required override")}g_aqS(){}g_aqK(d){const a=d.elementId,b=this.g_aqH.get(a);this.g_aqS(b),this.g_aqI&&b.parentElement.removeChild(b),this.g_aqH.delete(a)}g_aqT(d,a,b){b||(b={}),b.elementId=a,this.g_aqs(d,b)}g_aqU(d,a,b){b||(b={}),b.elementId=a,this.g_aqw(d,b)}g_aqL(c){if(this.g_aqI){const a=this.g_aqH.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aqM(d){if(this.g_aqI){const a=this.g_aqH.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aqN(c){const a=this.g_aqH.get(c.elementId);this.g_aqV(a,c)}g_aqV(){throw new Error("required override")}g_aqO(c){const a=this.g_aqH.get(c.elementId);c.focus?a.focus():a.blur()}g_aqP(c){const a=this.g_aqH.get(c.elementId);a.style[c.prop]=c.val}g_aqW(b){return this.g_aqH.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_aqX=class b{constructor(b){this.g_aqY=b.g_aqZ,this.g_aq_=null,this.g_adW="",this.g_aq$={},this.g_ara=null,this.g_arb=null,this.g_arc=[],this.g_ard=null,this.g_abU=null,this.g_afD=null,this.g_acC=-1,this.g_are=()=>this.g_arf(),this.g_arg=[],this.g_ad$=b.g_arh,this.g_ari=!1,"html5"===this.g_ad$&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aqA("runtime","cordova-fetch-local-file",b=>this.g_arj(b)),this.g_aqA("runtime","create-job-worker",b=>this.g_ark(b)),"cordova"===this.g_ad$?document.addEventListener("deviceready",()=>this.g_VL(b)):this.g_VL(b)}g_eJ(){this.g_arl(),this.g_aq_&&(this.g_aq_.onmessage=null,this.g_aq_=null),this.g_ara&&(this.g_ara.terminate(),this.g_ara=null),this.g_arb&&(this.g_arb.g_eJ(),this.g_arb=null),this.g_abU&&(this.g_abU.parentElement.removeChild(this.g_abU),this.g_abU=null)}g_arm(){return this.g_abU}g_fA(){return this.g_adW}g_aqx(){return this.g_aqY}g_ahg(){return this.g_ad$}g_afV(){return"cordova"===this.g_ad$&&a}g_arn(){if(!this.g_afV())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_VL(d){if(d.g_aro)this.g_adW=d.g_aro;else{this.g_adW=location.origin+location.pathname;const b=this.g_adW.lastIndexOf("/");-1!==b&&(this.g_adW=this.g_adW.substr(0,b+1))}if(d.g_arp)for(const[a,b]of Object.entries(d.g_arp))this.g_aq$[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aq_=a.port1,this.g_aq_.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_arq(b)),this.g_afD=new self.g_arr(this),await this.g_afD.g_$o(),this.g_ars(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_art(),this.g_aqY?await this.g_aru(d,a.port2):await this.g_arv(d,a.port2)}g_arw(b){return this.g_aq$.hasOwnProperty(b)?this.g_aq$[b]:b}async g_arx(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_afV()){const a=await this.g_Ab("scripts/"+f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_ars(){if(this.g_arn()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_ary(d){return{baseUrl:this.g_adW,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_ade(),projectData:d.g_arz,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_arh,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_arA,jobScheduler:this.g_afD.g_arB(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_afV(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aru(e,a){let b=e.g_arC;this.g_aq$.hasOwnProperty("workerMain.js")&&(b=this.g_aq$["workerMain.js"]),this.g_ara=await this.g_arx(b,this.g_adW,{name:"Runtime"}),this.g_abU=document.createElement("canvas"),this.g_abU.style.display="none";const f=this.g_abU.transferControlToOffscreen();document.body.appendChild(this.g_abU),this.g_ara.postMessage(Object.assign(this.g_ary(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:f,workerDependencyScripts:e.g_arD||[],engineScripts:e.g_arE}),[a,f,...this.g_afD.g_arF()]),this.g_arc=h.map(b=>new b(this)),this.g_arG()}async g_arv(a,b){this.g_abU=document.createElement("canvas"),this.g_abU.style.display="none",document.body.appendChild(this.g_abU),this.g_arc=h.map(b=>new b(this)),this.g_arG();const c=a.g_arE.map(b=>new URL(b,this.g_adW).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_ary(a),{isInWorker:!1,messagePort:b,canvas:this.g_abU});this.g_arb=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_arb,d)}async g_ark(){const b=await this.g_afD.g_arH();return{outputPort:b,transferables:[b]}}g_aqy(){if(this.g_aqY)throw new Error("not available in worker mode");return this.g_arb}g_aqt(f,a,b,c,d){this.g_aq_.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_ari?void 0:d)}g_aqv(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_aq_.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_ari?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_arI(c);else if("result"===a)this.g_arJ(c);else if("runtime-ready"===a)this.g_arK();else throw new Error(`unknown message '${a}'`)}g_arI(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_arL(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_arL(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_arL(c,!1,d.toString())}):this.g_arL(c,!0,f))}g_arL(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aq_.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_arJ(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_aqA(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_arM(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_arG(){for(const b of this.g_arc)if("runtime"===b.g_aqD())return void(this.g_ard=b);throw new Error("cannot find runtime DOM handler")}g_arq(b){this.g_aqt("debugger","message",b)}g_arK(){for(const b of this.g_arc)b.g_aqr()}static g_ade(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_aqE(b){this.g_arg.push(b),this.g_arN()}g_aqF(c){const a=this.g_arg.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_arg.splice(a,1),this.g_arg.length||this.g_arl()}g_arN(){-1===this.g_acC&&this.g_arg.length&&(this.g_acC=requestAnimationFrame(this.g_are))}g_arl(){-1!==this.g_acC&&(cancelAnimationFrame(this.g_acC),this.g_acC=-1)}g_arf(){this.g_acC=-1;for(const b of this.g_arg)b();this.g_arN()}g_arO(b){this.g_ard.g_arO(b)}g_arP(b){this.g_ard.g_arP(b)}g_arQ(){this.g_ard.g_arQ()}g_arR(b){this.g_ard.g_arR(b)}g_AC(b){return!!c[b]}async g_afG(c){const a=await this.g_aqv("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_gl(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gm(b){return!this.g_gl(b)}async g_arj(c){const a=c.filename;switch(c.as){case"text":return await this.g_Af(a);case"blob":return await this.g_Ab(a);case"blob-url":return await this.g_arS(a);case"buffer":return await this.g_Ah(a);default:throw new Error("unsupported type");}}g_arT(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Af(b){const a=await this.g_arT(b);return await q(a)}g_arU(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_arV(b.filename,b.g_arW,b.g_arX)}}g_Ah(f){return new Promise((g,b)=>{d.push({filename:f,g_arW:b=>{e--,this.g_arU(),g(b)},g_arX:c=>{e--,this.g_arU(),b(c)}}),this.g_arU()})}async g_arV(c,a,b){try{const b=await this.g_arT(c),d=await r(b);a(d)}catch(c){b(c)}}async g_Ab(d,a){a||(a=s(d));const e=await this.g_Ah(d);return new Blob([e],{type:a})}async g_arS(c){const a=await this.g_Ab(c);return URL.createObjectURL(a)}g_art(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_ari=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){return window.parent&&window.parent.document.hasFocus()}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_aqn{constructor(c){super(c,"runtime"),this.g_arY=!0,this.g_arZ="any",this.g_ar_=null,c.g_aqA("canvas","update-size",b=>this.g_ar$(b)),c.g_aqA("runtime","invoke-download",b=>this.g_asa(b)),c.g_aqA("runtime","raster-svg-image",b=>this.g_asb(b)),c.g_aqA("runtime","set-target-orientation",b=>this.g_asc(b)),c.g_aqA("runtime","register-sw",()=>this.g_asd()),c.g_aqA("runtime","post-to-debugger",b=>this.g_ase(b)),c.g_aqA("runtime","before-start-ticking",()=>this.g_asf()),c.g_aqA("runtime","debug-highlight",b=>this.g_asg(b));const a=c.g_arm();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_acT()),this.g_ash=new Set,this.g_asi=new WeakSet,this.g_asj=!1}g_asf(){return window.addEventListener("visibilitychange",()=>this.g_afF(document.hidden)),document.addEventListener("pause",()=>this.g_afF(!0)),document.addEventListener("resume",()=>this.g_afF(!1)),{isSuspended:!!(document.hidden||c)}}g_aqr(){window.addEventListener("focus",()=>this.g_ask("window-focus")),window.addEventListener("blur",()=>this.g_ask("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_acU()),window.addEventListener("webkitfullscreenchange",()=>this.g_acU()),window.addEventListener("mozfullscreenchange",()=>this.g_acU()),window.addEventListener("fullscreenerror",b=>this.g_acV(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_acV(b)),window.addEventListener("mozfullscreenerror",b=>this.g_acV(b)),window.addEventListener("keydown",b=>this.g_asl("keydown",b)),window.addEventListener("keyup",b=>this.g_asl("keyup",b)),window.addEventListener("mousemove",b=>this.g_asm("mousemove",b)),window.addEventListener("mousedown",b=>this.g_asm("mousedown",b)),window.addEventListener("mouseup",b=>this.g_asm("mouseup",b)),window.addEventListener("dblclick",b=>this.g_asm("dblclick",b)),window.addEventListener("wheel",b=>this.g_asn("wheel",b)),"undefined"==typeof g_aso?(window.addEventListener("touchstart",b=>this.g_asp("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_asp("pointermove",b)),window.addEventListener("touchend",b=>this.g_asp("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_asp("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_asq("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_asq("pointermove",b)),window.addEventListener("pointerup",b=>this.g_asq("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_asq("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_asr(b)),window.addEventListener("devicemotion",b=>this.g_ass(b));const c=()=>this.g_arQ();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_ask(c,a){this.g_aqs(c,a||null,!0)}g_acT(){this.g_aqs("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_asc(b){this.g_arZ=b.targetOrientation}g_ast(){const c=this.g_arZ;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_acU(){const b=g_aqX.g_ade();b&&"any"!==this.g_arZ&&this.g_ast(),this.g_aqs("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_acV(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aqs("fullscreenerror",{isFullscreen:g_aqX.g_ade(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_afF(b){b?this.g_aqo.g_arl():this.g_aqo.g_arN(),this.g_aqs("visibilitychange",{hidden:b})}g_asl(c,a){this.g_aqw(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_asm(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aqw(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_asn(c,a){this.g_aqs(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_asq(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_aqw(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_asp(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aqw(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_asr(b){this.g_aqs("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_ass(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aqs("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_ar$(d){const a=this.g_aqC(),b=a.g_arm();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_ars(),this.g_arY&&(b.style.display="",this.g_arY=!1)}g_asa(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_asb(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_arQ(){const c=[...this.g_ash];if(this.g_ash.clear(),!this.g_asj)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_asi.has(d)||this.g_ash.add(d)})}}g_arO(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_asi.delete(c);let a;try{a=c.play()}catch(a){return void this.g_ash.add(c)}a&&a.catch(()=>{this.g_asi.has(c)||this.g_ash.add(c)})}g_arP(b){this.g_ash.delete(b),this.g_asi.add(b)}g_arR(b){this.g_asj=!!b}g_asg(d){const a=d.show;if(!a)return void(this.g_ar_&&(this.g_ar_.style.display="none"));this.g_ar_||(this.g_ar_=document.createElement("div"),this.g_ar_.id="inspectOutline",document.body.appendChild(this.g_ar_));const b=this.g_ar_;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_asd(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_ase(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_aqX.g_arM(d)}{const c=document.currentScript.src;self.g_arr=class{constructor(a){this.g_asu=a,this.g_adW=c.substr(0,c.lastIndexOf("/")+1),this.g_ahM=Math.min(navigator.hardwareConcurrency||2,16),this.g_asv=null,this.g_asw=[],this.g_ahK=null,this.g_asx=null}async g_$o(){if(this.g_asy)throw new Error("already initialised");this.g_asy=!0;const c=this.g_asu.g_arw("dispatchWorker.js");this.g_asv=await this.g_asu.g_arx(c,this.g_adW,{name:"DispatchWorker"});const a=new MessageChannel;this.g_ahK=a.port1,this.g_asv.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_asx=await this.g_arH()}async g_arH(){const f=this.g_asw.length,a=this.g_asu.g_arw("jobWorker.js"),b=await this.g_asu.g_arx(a,this.g_adW,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_asv.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_asw.push(b),d.port1}g_arB(){return{inputPort:this.g_ahK,outputPort:this.g_asx,maxNumWorkers:this.g_ahM}}g_arF(){return[this.g_ahK,this.g_asx]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aqX({g_aqZ:!1,g_arC:"workerMain.js",g_arE:["scripts/c3runtime.js"],g_arh:"html5"})}{const b=class extends g_aqn{constructor(b){super(b,"mouse"),this.g_aqz("cursor",b=>this.g_asz(b))}g_asz(b){document.body.style.cursor=b}};g_aqX.g_arM(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aqG{constructor(b){super(b,"text-input"),this.g_aqR("scroll-to-bottom",b=>this.g_asA(b))}g_Xr(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aqU("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aqU("dblclick",b)}),d.addEventListener("input",()=>this.g_aqT("change",b,{text:d.value})),this.g_aqV(d,c),d}g_aqV(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck,c.id=a.id}g_asA(b){b.scrollTop=b.scrollHeight}};g_aqX.g_arM(b)}