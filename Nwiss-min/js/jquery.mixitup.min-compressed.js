!function(d,c){d.MixItUp=function(){var a=this;a._execAction("_constructor",0),d.extend(a,{selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:d(),_$hide:d()}),a._execAction("_constructor",1)},d.MixItUp.prototype={constructor:d.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(a){for(var e in a){d.MixItUp.prototype[e]=a[e]}},addAction:function(a,h,g,f){d.MixItUp.prototype._addHook("_actions",a,h,g,f)},addFilter:function(a,h,g,f){d.MixItUp.prototype._addHook("_filters",a,h,g,f)},_addHook:function(a,o,n,m,l){var k=d.MixItUp.prototype[a],j={};l=1===l||"post"===l?"post":"pre",j[o]={},j[o][l]={},j[o][l][n]=m,d.extend(!0,k,j)},_init:function(a,h){var g=this;if(g._execAction("_init",0,arguments),h&&d.extend(!0,g,h),g._$body=d("body"),g._domNode=a,g._$container=d(a),g._$container.addClass(g.layout.containerClass),g._id=a.id,g._platformDetect(),g._brake=g._getPrefixedCSS("transition","none"),g._refresh(!0),g._$parent=g._$targets.parent().length?g._$targets.parent():g._$container,g.load.sort&&(g._newSort=g._parseSort(g.load.sort),g._newSortString=g.load.sort,g._activeSort=g.load.sort,g._sort(),g._printSort()),g._activeFilter="all"===g.load.filter?g.selectors.target:"none"===g.load.filter?"":g.load.filter,g.controls.enable&&g._bindHandlers(),g.controls.toggleFilterButtons){g._buildToggleArray();for(var f=0;f<g._toggleArray.length;f++){g._updateControls({filter:g._toggleArray[f],sort:g._activeSort},!0)}}else{g.controls.enable&&g._updateControls({filter:g._activeFilter,sort:g._activeSort})}g._filter(),g._init=!0,g._$container.data("mixItUp",g),g._execAction("_init",1,arguments),g._buildState(),g._$targets.css(g._brake),g._goMix(g.animation.enable)},_platformDetect:function(){var b=this,p=["Webkit","Moz","O","ms"],o=["webkit","moz"],n=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,m="undefined"!=typeof InstallTrigger,l=function(f){for(var e=0;e<p.length;e++){if(p[e]+"Transition" in f.style){return{prefix:"-"+p[e].toLowerCase()+"-",vendor:p[e]}}}return"transition" in f.style?"":!1},k=l(b._domNode);b._execAction("_platformDetect",0),b._chrome=n?parseInt(n[1],10):!1,b._ff=m?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1,b._prefix=k.prefix,b._vendor=k.vendor,b._suckMode=window.atob&&b._prefix?!1:!0,b._suckMode&&(b.animation.enable=!1),b._ff&&b._ff<=4&&(b.animation.enable=!1);for(var j=0;j<o.length&&!window.requestAnimationFrame;j++){window.requestAnimationFrame=window[o[j]+"RequestAnimationFrame"]}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(e){return e.__proto__}:function(e){return e.constructor.prototype}),b._domNode.nextElementSibling===c&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var e=this.nextSibling;e;){if(1===e.nodeType){return e}e=e.nextSibling}return null}}),b._execAction("_platformDetect",1)},_refresh:function(t,s){var r=this;r._execAction("_refresh",0,arguments),r._$targets=r._$container.find(r.selectors.target);for(var q=0;q<r._$targets.length;q++){var p=r._$targets[q];if(p.dataset===c||s){p.dataset={};for(var o=0;o<p.attributes.length;o++){var n=p.attributes[o],m=n.name,l=n.nodeValue;if(m.indexOf("data-")>-1){var b=r._helpers._camelCase(m.substring(5,m.length));p.dataset[b]=l}}}p.mixParent===c&&(p.mixParent=r._id)}if(r._$targets.length&&t||!r._origOrder.length&&r._$targets.length){r._origOrder=[];for(var q=0;q<r._$targets.length;q++){var p=r._$targets[q];r._origOrder.push(p)}}r._execAction("_refresh",1,arguments)},_bindHandlers:function(){var f=this,b=d.MixItUp.prototype._bound._filter,a=d.MixItUp.prototype._bound._sort;f._execAction("_bindHandlers",0),f.controls.live?f._$body.on("click.mixItUp."+f._id,f.selectors.sort,function(){f._processClick(d(this),"sort")}).on("click.mixItUp."+f._id,f.selectors.filter,function(){f._processClick(d(this),"filter")}):(f._$sortButtons=d(f.selectors.sort),f._$filterButtons=d(f.selectors.filter),f._$sortButtons.on("click.mixItUp."+f._id,function(){f._processClick(d(this),"sort")}),f._$filterButtons.on("click.mixItUp."+f._id,function(){f._processClick(d(this),"filter")})),b[f.selectors.filter]=b[f.selectors.filter]===c?1:b[f.selectors.filter]+1,a[f.selectors.sort]=a[f.selectors.sort]===c?1:a[f.selectors.sort]+1,f._execAction("_bindHandlers",1)},_processClick:function(p,o){var n=this,m=function(q,j,h){var e=d.MixItUp.prototype;e._handled["_"+j][n.selectors[j]]=e._handled["_"+j][n.selectors[j]]===c?1:e._handled["_"+j][n.selectors[j]]+1,e._handled["_"+j][n.selectors[j]]===e._bound["_"+j][n.selectors[j]]&&(q[(h?"remove":"add")+"Class"](n.controls.activeClass),delete e._handled["_"+j][n.selectors[j]])};if(n._execAction("_processClick",0,arguments),!n._mixing||n.animation.queue&&n._queue.length<n.animation.queueLimit){if(n._clicking=!0,"sort"===o){var l=p.attr("data-sort");(!p.hasClass(n.controls.activeClass)||l.indexOf("random")>-1)&&(d(n.selectors.sort).removeClass(n.controls.activeClass),m(p,o),n.sort(l))}if("filter"===o){var k,b=p.attr("data-filter"),a="or"===n.controls.toggleLogic?",":"";n.controls.toggleFilterButtons?(n._buildToggleArray(),p.hasClass(n.controls.activeClass)?(m(p,o,!0),k=n._toggleArray.indexOf(b),n._toggleArray.splice(k,1)):(m(p,o),n._toggleArray.push(b)),n._toggleArray=d.grep(n._toggleArray,function(e){return e}),n._toggleString=n._toggleArray.join(a),n.filter(n._toggleString)):p.hasClass(n.controls.activeClass)||(d(n.selectors.filter).removeClass(n.controls.activeClass),m(p,o),n.filter(b))}n._execAction("_processClick",1,arguments)}else{"function"==typeof n.callbacks.onMixBusy&&n.callbacks.onMixBusy.call(n._domNode,n._state,n),n._execAction("_processClickBusy",1,arguments)}},_buildToggleArray:function(){var f=this,e=f._activeFilter.replace(/\s/g,"");if(f._execAction("_buildToggleArray",0,arguments),"or"===f.controls.toggleLogic){f._toggleArray=e.split(",")}else{f._toggleArray=e.split("."),!f._toggleArray[0]&&f._toggleArray.shift();for(var h,g=0;h=f._toggleArray[g];g++){f._toggleArray[g]="."+h}}f._execAction("_buildToggleArray",1,arguments)},_updateControls:function(p,o){var n=this,m={filter:p.filter,sort:p.sort},l=function(f,e){o&&"filter"==k&&"none"!==m.filter&&""!==m.filter?f.filter(e).addClass(n.controls.activeClass):f.removeClass(n.controls.activeClass).filter(e).addClass(n.controls.activeClass)},k="filter",b=null;n._execAction("_updateControls",0,arguments),p.filter===c&&(m.filter=n._activeFilter),p.sort===c&&(m.sort=n._activeSort),m.filter===n.selectors.target&&(m.filter="all");for(var a=0;2>a;a++){b=n.controls.live?d(n.selectors[k]):n["_$"+k+"Buttons"],b&&l(b,"[data-"+k+'="'+m[k]+'"]'),k="sort"}n._execAction("_updateControls",1,arguments)},_filter:function(){var a=this;a._execAction("_filter",0);for(var f=0;f<a._$targets.length;f++){var e=d(a._$targets[f]);e.is(a._activeFilter)?a._$show=a._$show.add(e):a._$hide=a._$hide.add(e)}a._execAction("_filter",1)},_sort:function(){var f=this,e=function(k){for(var j=k.slice(),o=j.length,n=o;n--;){var m=parseInt(Math.random()*o),l=j[n];j[n]=j[m],j[m]=l}return j};f._execAction("_sort",0),f._startOrder=[];for(var h=0;h<f._$targets.length;h++){var g=f._$targets[h];f._startOrder.push(g)}switch(f._newSort[0].sortBy){case"default":f._newOrder=f._origOrder;break;case"random":f._newOrder=e(f._startOrder);break;case"custom":f._newOrder=f._newSort[0].order;break;default:f._newOrder=f._startOrder.concat().sort(function(a,j){return f._compare(a,j)})}f._execAction("_sort",1)},_compare:function(k,j,q){q=q?q:0;var p=this,o=p._newSort[q].order,n=function(b){return b.dataset[p._newSort[q].sortBy]||0},m=isNaN(1*n(k))?n(k).toLowerCase():1*n(k),l=isNaN(1*n(j))?n(j).toLowerCase():1*n(j);return l>m?"asc"==o?-1:1:m>l?"asc"==o?1:-1:m==l&&p._newSort.length>q+1?p._compare(k,j,q+1):0},_printSort:function(v){var u=this,t=v?u._startOrder:u._newOrder,s=u._$parent[0].querySelectorAll(u.selectors.target),r=s[s.length-1].nextElementSibling,q=document.createDocumentFragment();u._execAction("_printSort",0,arguments);for(var p=0;p<s.length;p++){var o=s[p],n=o.nextSibling;"absolute"!==o.style.position&&(n&&"#text"==n.nodeName&&u._$parent[0].removeChild(n),u._$parent[0].removeChild(o))}for(var p=0;p<t.length;p++){var m=t[p];if("default"!=u._newSort[0].sortBy||"desc"!=u._newSort[0].order||v){q.appendChild(m),q.appendChild(document.createTextNode(" "))}else{var l=q.firstChild;q.insertBefore(m,l),q.insertBefore(document.createTextNode(" "),m)}}r?u._$parent[0].insertBefore(q,r):u._$parent[0].appendChild(q),u._execAction("_printSort",1,arguments)},_parseSort:function(j){for(var h=this,o="string"==typeof j?j.split(" "):[j],n=[],m=0;m<o.length;m++){var l="string"==typeof j?o[m].split(":"):["custom",o[m]],k={sortBy:h._helpers._camelCase(l[0]),order:l[1]||"asc"};if(n.push(k),"default"==k.sortBy||"random"==k.sortBy){break}}return h._execFilter("_parseSort",n,arguments)},_parseEffects:function(){var g=this,f={opacity:"",transformIn:"",transformOut:"",filter:""},k=function(a,p){if(g.animation.effects.indexOf(a)>-1){if(p){var o=g.animation.effects.indexOf(a+"(");if(o>-1){var n=g.animation.effects.substring(o),m=/\(([^)]+)\)/.exec(n),l=m[1];return{val:l}}}return !0}return !1},j=function(l,e){return e?"-"===l.charAt(0)?l.substr(1,l.length):"-"+l:l},h=function(b,q){for(var p=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],o=0;o<p.length;o++){var n=p[o][0],m=p[o][1],l=q&&"scale"!==n;f[b]+=k(n)?n+"("+j(k(n,!0).val||m,l)+") ":""}};return f.opacity=k("fade")?k("fade",!0).val||"0":"1",h("transformIn"),g.animation.reverseOut?h("transformOut",!0):f.transformOut=f.transformIn,f.transition={},f.transition=g._getPrefixedCSS("transition","all "+g.animation.duration+"ms "+g.animation.easing+", opacity "+g.animation.duration+"ms linear"),g.animation.stagger=k("stagger")?!0:!1,g.animation.staggerDuration=parseInt(k("stagger")?k("stagger",!0).val?k("stagger",!0).val:100:100),g._execFilter("_parseEffects",f)},_buildState:function(f){var e=this,g={};return e._execAction("_buildState",0),g={activeFilter:""===e._activeFilter?"none":e._activeFilter,activeSort:f&&e._newSortString?e._newSortString:e._activeSort,fail:!e._$show.length&&""!==e._activeFilter,$targets:e._$targets,$show:e._$show,$hide:e._$hide,totalTargets:e._$targets.length,totalShow:e._$show.length,totalHide:e._$hide.length,display:f&&e._newDisplay?e._newDisplay:e.layout.display},f?e._execFilter("_buildState",g):(e._state=g,e._execAction("_buildState",1),void 0)},_goMix:function(j){var h=this,o=function(){h._chrome&&31===h._chrome&&l(h._$parent[0]),h._setInter(),n()},n=function(){var b=window.pageYOffset,e=window.pageXOffset;document.documentElement.scrollHeight,h._getInterMixData(),h._setFinal(),h._getFinalMixData(),window.pageYOffset!==b&&window.scrollTo(e,b),h._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(m):setTimeout(function(){m()},20)},m=function(){h._animateTargets(),0===h._targetsBound&&h._cleanUp()},l=function(f){var e=f.parentElement,p=document.createElement("div"),g=document.createDocumentFragment();e.insertBefore(p,f),g.appendChild(f),e.replaceChild(f,p)},k=h._buildState(!0);h._execAction("_goMix",0,arguments),!h.animation.duration&&(j=!1),h._mixing=!0,h._$container.removeClass(h.layout.containerClassFail),"function"==typeof h.callbacks.onMixStart&&h.callbacks.onMixStart.call(h._domNode,h._state,k,h),h._$container.trigger("mixStart",[h._state,k,h]),h._getOrigMixData(),j&&!h._suckMode?window.requestAnimationFrame?requestAnimationFrame(o):o():h._cleanUp(),h._execAction("_goMix",1,arguments)},_getTargetData:function(f,e){var h,g=this;f.dataset[e+"PosX"]=f.offsetLeft,f.dataset[e+"PosY"]=f.offsetTop,g.animation.animateResizeTargets&&(h=window.getComputedStyle(f),f.dataset[e+"MarginBottom"]=parseInt(h.marginBottom),f.dataset[e+"MarginRight"]=parseInt(h.marginRight),f.dataset[e+"Width"]=f.offsetWidth,f.dataset[e+"Height"]=f.offsetHeight)},_getOrigMixData:function(){var g=this,f=g._suckMode?{boxSizing:""}:window.getComputedStyle(g._$parent[0]),k=f.boxSizing||f[g._vendor+"BoxSizing"];g._incPadding="border-box"===k,g._execAction("_getOrigMixData",0),!g._suckMode&&(g.effects=g._parseEffects()),g._$toHide=g._$hide.filter(":visible"),g._$toShow=g._$show.filter(":hidden"),g._$pre=g._$targets.filter(":visible"),g._startHeight=g._incPadding?g._$parent.outerHeight():g._$parent.height();for(var j=0;j<g._$pre.length;j++){var h=g._$pre[j];g._getTargetData(h,"orig")}g._execAction("_getOrigMixData",1)},_setInter:function(){var b=this;b._execAction("_setInter",0),b._changingLayout&&b.animation.animateChangeLayout?(b._$toShow.css("display",b._newDisplay),b._changingClass&&b._$container.removeClass(b.layout.containerClass).addClass(b._newClass)):b._$toShow.css("display",b.layout.display),b._execAction("_setInter",1)},_getInterMixData:function(){var f=this;f._execAction("_getInterMixData",0);for(var e=0;e<f._$toShow.length;e++){var g=f._$toShow[e];f._getTargetData(g,"inter")}for(var e=0;e<f._$pre.length;e++){var g=f._$pre[e];f._getTargetData(g,"inter")}f._execAction("_getInterMixData",1)},_setFinal:function(){var b=this;b._execAction("_setFinal",0),b._sorting&&b._printSort(),b._$toHide.removeStyle("display"),b._changingLayout&&b.animation.animateChangeLayout&&b._$pre.css("display",b._newDisplay),b._execAction("_setFinal",1)},_getFinalMixData:function(){var f=this;f._execAction("_getFinalMixData",0);for(var e=0;e<f._$toShow.length;e++){var g=f._$toShow[e];f._getTargetData(g,"final")}for(var e=0;e<f._$pre.length;e++){var g=f._$pre[e];f._getTargetData(g,"final")}f._newHeight=f._incPadding?f._$parent.outerHeight():f._$parent.height(),f._sorting&&f._printSort(!0),f._$toShow.removeStyle("display"),f._$pre.css("display",f.layout.display),f._changingClass&&f.animation.animateChangeLayout&&f._$container.removeClass(f._newClass).addClass(f.layout.containerClass),f._execAction("_getFinalMixData",1)},_prepTargets:function(){var a=this,m={_in:a._getPrefixedCSS("transform",a.effects.transformIn),_out:a._getPrefixedCSS("transform",a.effects.transformOut)};a._execAction("_prepTargets",0),a.animation.animateResizeContainer&&a._$parent.css("height",a._startHeight+"px");for(var l=0;l<a._$toShow.length;l++){var k=a._$toShow[l],j=d(k);k.style.opacity=a.effects.opacity,k.style.display=a._changingLayout&&a.animation.animateChangeLayout?a._newDisplay:a.layout.display,j.css(m._in),a.animation.animateResizeTargets&&(k.style.width=k.dataset.finalWidth+"px",k.style.height=k.dataset.finalHeight+"px",k.style.marginRight=-(k.dataset.finalWidth-k.dataset.interWidth)+1*k.dataset.finalMarginRight+"px",k.style.marginBottom=-(k.dataset.finalHeight-k.dataset.interHeight)+1*k.dataset.finalMarginBottom+"px")}for(var l=0;l<a._$pre.length;l++){var k=a._$pre[l],j=d(k),h={x:k.dataset.origPosX-k.dataset.interPosX,y:k.dataset.origPosY-k.dataset.interPosY},m=a._getPrefixedCSS("transform","translate("+h.x+"px,"+h.y+"px)");j.css(m),a.animation.animateResizeTargets&&(k.style.width=k.dataset.origWidth+"px",k.style.height=k.dataset.origHeight+"px",k.dataset.origWidth-k.dataset.finalWidth&&(k.style.marginRight=-(k.dataset.origWidth-k.dataset.interWidth)+1*k.dataset.origMarginRight+"px"),k.dataset.origHeight-k.dataset.finalHeight&&(k.style.marginBottom=-(k.dataset.origHeight-k.dataset.interHeight)+1*k.dataset.origMarginBottom+"px"))}a._execAction("_prepTargets",1)},_animateTargets:function(){var t=this;t._execAction("_animateTargets",0),t._targetsDone=0,t._targetsBound=0,t._$parent.css(t._getPrefixedCSS("perspective",t.animation.perspectiveDistance+"px")).css(t._getPrefixedCSS("perspective-origin",t.animation.perspectiveOrigin)),t.animation.animateResizeContainer&&t._$parent.css(t._getPrefixedCSS("transition","height "+t.animation.duration+"ms ease")).css("height",t._newHeight+"px");for(var s=0;s<t._$toShow.length;s++){var r=t._$toShow[s],q=d(r),p={x:r.dataset.finalPosX-r.dataset.interPosX,y:r.dataset.finalPosY-r.dataset.interPosY},o=t._getDelay(s),n={};r.style.opacity="";for(var m=0;2>m;m++){var l=0===m?l=t._prefix:"";t._ff&&t._ff<=20&&(n[l+"transition-property"]="all",n[l+"transition-timing-function"]=t.animation.easing+"ms",n[l+"transition-duration"]=t.animation.duration+"ms"),n[l+"transition-delay"]=o+"ms",n[l+"transform"]="translate("+p.x+"px,"+p.y+"px)"}(t.effects.transform||t.effects.opacity)&&t._bindTargetDone(q),t._ff&&t._ff<=20?q.css(n):q.css(t.effects.transition).css(n)}for(var s=0;s<t._$pre.length;s++){var r=t._$pre[s],q=d(r),p={x:r.dataset.finalPosX-r.dataset.interPosX,y:r.dataset.finalPosY-r.dataset.interPosY},o=t._getDelay(s);(r.dataset.finalPosX!==r.dataset.origPosX||r.dataset.finalPosY!==r.dataset.origPosY)&&t._bindTargetDone(q),q.css(t._getPrefixedCSS("transition","all "+t.animation.duration+"ms "+t.animation.easing+" "+o+"ms")),q.css(t._getPrefixedCSS("transform","translate("+p.x+"px,"+p.y+"px)")),t.animation.animateResizeTargets&&(r.dataset.origWidth-r.dataset.finalWidth&&1*r.dataset.finalWidth&&(r.style.width=r.dataset.finalWidth+"px",r.style.marginRight=-(r.dataset.finalWidth-r.dataset.interWidth)+1*r.dataset.finalMarginRight+"px"),r.dataset.origHeight-r.dataset.finalHeight&&1*r.dataset.finalHeight&&(r.style.height=r.dataset.finalHeight+"px",r.style.marginBottom=-(r.dataset.finalHeight-r.dataset.interHeight)+1*r.dataset.finalMarginBottom+"px"))}t._changingClass&&t._$container.removeClass(t.layout.containerClass).addClass(t._newClass);for(var s=0;s<t._$toHide.length;s++){for(var r=t._$toHide[s],q=d(r),o=t._getDelay(s),a={},m=0;2>m;m++){var l=0===m?l=t._prefix:"";a[l+"transition-delay"]=o+"ms",a[l+"transform"]=t.effects.transformOut,a.opacity=t.effects.opacity}q.css(t.effects.transition).css(a),(t.effects.transform||t.effects.opacity)&&t._bindTargetDone(q)}t._execAction("_animateTargets",1)},_bindTargetDone:function(a){var f=this,e=a[0];f._execAction("_bindTargetDone",0,arguments),e.dataset.bound||(e.dataset.bound=!0,f._targetsBound++,a.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(b){(b.originalEvent.propertyName.indexOf("transform")>-1||b.originalEvent.propertyName.indexOf("opacity")>-1)&&d(b.originalEvent.target).is(f.selectors.target)&&(a.off(".mixItUp"),delete e.dataset.bound,f._targetDone())})),f._execAction("_bindTargetDone",1,arguments)},_targetDone:function(){var b=this;b._execAction("_targetDone",0),b._targetsDone++,b._targetsDone===b._targetsBound&&b._cleanUp(),b._execAction("_targetDone",1)},_cleanUp:function(){var a=this,e=a.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity";unBrake=function(){a._$targets.removeStyle("transition",a._prefix)},a._execAction("_cleanUp",0),a._changingLayout?a._$show.css("display",a._newDisplay):a._$show.css("display",a.layout.display),a._$targets.css(a._brake),a._$targets.removeStyle(e,a._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),a._$hide.removeStyle("display"),a._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",a._prefix),a._sorting&&(a._printSort(),a._activeSort=a._newSortString,a._sorting=!1),a._changingLayout&&(a._changingDisplay&&(a.layout.display=a._newDisplay,a._changingDisplay=!1),a._changingClass&&(a._$parent.removeClass(a.layout.containerClass).addClass(a._newClass),a.layout.containerClass=a._newClass,a._changingClass=!1),a._changingLayout=!1),a._refresh(),a._buildState(),a._state.fail&&a._$container.addClass(a.layout.containerClassFail),a._$show=d(),a._$hide=d(),window.requestAnimationFrame&&requestAnimationFrame(unBrake),a._mixing=!1,"function"==typeof a.callbacks._user&&a.callbacks._user.call(a._domNode,a._state,a),"function"==typeof a.callbacks.onMixEnd&&a.callbacks.onMixEnd.call(a._domNode,a._state,a),a._$container.trigger("mixEnd",[a._state,a]),a._state.fail&&("function"==typeof a.callbacks.onMixFail&&a.callbacks.onMixFail.call(a._domNode,a._state,a),a._$container.trigger("mixFail",[a._state,a])),a._loading&&("function"==typeof a.callbacks.onMixLoad&&a.callbacks.onMixLoad.call(a._domNode,a._state,a),a._$container.trigger("mixLoad",[a._state,a])),a._queue.length&&(a._execAction("_queue",0),a.multiMix(a._queue[0][0],a._queue[0][1],a._queue[0][2]),a._queue.splice(0,1)),a._execAction("_cleanUp",1),a._loading=!1},_getPrefixedCSS:function(h,g,m){var l=this,k={};for(i=0;2>i;i++){var j=0===i?l._prefix:"";k[j+h]=m?j+g:g}return l._execFilter("_getPrefixedCSS",k,arguments)},_getDelay:function(f){var e=this,h="function"==typeof e.animation.staggerSequence?e.animation.staggerSequence.call(e._domNode,f,e._state):f,g=e.animation.stagger?h*e.animation.staggerDuration:0;return e._execFilter("_getDelay",g,arguments)},_parseMultiMixArgs:function(g){for(var f=this,k={command:null,animate:f.animation.enable,callback:null},j=0;j<g.length;j++){var h=g[j];null!==h&&("object"==typeof h||"string"==typeof h?k.command=h:"boolean"==typeof h?k.animate=h:"function"==typeof h&&(k.callback=h))}return f._execFilter("_parseMultiMixArgs",k,arguments)},_parseInsertArgs:function(a){for(var k=this,j={index:0,$object:d(),multiMix:{filter:k._state.activeFilter},callback:null},h=0;h<a.length;h++){var g=a[h];"number"==typeof g?j.index=g:"object"==typeof g&&g instanceof d?j.$object=g:"object"==typeof g&&k._helpers._isElement(g)?j.$object=d(g):"object"==typeof g&&null!==g?j.multiMix=g:"boolean"!=typeof g||g?"function"==typeof g&&(j.callback=g):j.multiMix=!1}return k._execFilter("_parseInsertArgs",j,arguments)},_execAction:function(h,g,m){var l=this,k=g?"post":"pre";if(!l._actions.isEmptyObject&&l._actions.hasOwnProperty(h)){for(var j in l._actions[h][k]){l._actions[h][k][j].call(l,m)}}},_execFilter:function(g,f,k){var j=this;if(j._filters.isEmptyObject||!j._filters.hasOwnProperty(g)){return f}for(var h in j._filters[g]){return j._filters[g][h].call(j,k)}},_helpers:{_camelCase:function(b){return b.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})},_isElement:function(b){return window.HTMLElement?b instanceof HTMLElement:null!==b&&1===b.nodeType&&"string"===b.nodeName}},isMixing:function(){var b=this;return b._execFilter("isMixing",b._mixing)},filter:function(){var f=this,e=f._parseMultiMixArgs(arguments);f._clicking&&(f._toggleString=""),f.multiMix({filter:e.command},e.animate,e.callback)},sort:function(){var f=this,e=f._parseMultiMixArgs(arguments);f.multiMix({sort:e.command},e.animate,e.callback)},changeLayout:function(){var f=this,e=f._parseMultiMixArgs(arguments);f.multiMix({changeLayout:e.command},e.animate,e.callback)},multiMix:function(){var b=this,k=b._parseMultiMixArgs(arguments);if(b._execAction("multiMix",0,arguments),b._mixing){b.animation.queue&&b._queue.length<b.animation.queueLimit?(b._queue.push(arguments),b.controls.enable&&!b._clicking&&b._updateControls(k.command),b._execAction("multiMixQueue",1,arguments)):("function"==typeof b.callbacks.onMixBusy&&b.callbacks.onMixBusy.call(b._domNode,b._state,b),b._$container.trigger("mixBusy",[b._state,b]),b._execAction("multiMixBusy",1,arguments))}else{b.controls.enable&&!b._clicking&&(b.controls.toggleFilterButtons&&b._buildToggleArray(),b._updateControls(k.command,b.controls.toggleFilterButtons)),b._queue.length<2&&(b._clicking=!1),delete b.callbacks._user,k.callback&&(b.callbacks._user=k.callback);var j=k.command.sort,h=k.command.filter,g=k.command.changeLayout;b._refresh(),j&&(b._newSort=b._parseSort(j),b._newSortString=j,b._sorting=!0,b._sort()),h!==c&&(h="all"===h?b.selectors.target:h,b._activeFilter=h),b._filter(),g&&(b._newDisplay="string"==typeof g?g:g.display||b.layout.display,b._newClass=g.containerClass||"",(b._newDisplay!==b.layout.display||b._newClass!==b.layout.containerClass)&&(b._changingLayout=!0,b._changingClass=b._newClass!==b.layout.containerClass,b._changingDisplay=b._newDisplay!==b.layout.display)),b._$targets.css(b._brake),b._goMix(k.animate^b.animation.enable?k.animate:b.animation.enable),b._execAction("multiMix",1,arguments)}},insert:function(){var j=this,h=j._parseInsertArgs(arguments),o="function"==typeof h.callback?h.callback:null,n=document.createDocumentFragment(),m=function(){return j._refresh(),j._$targets.length?h.index<j._$targets.length||!j._$targets.length?j._$targets[h.index]:j._$targets[j._$targets.length-1].nextElementSibling:j._$parent[0].children[0]}();if(j._execAction("insert",0,arguments),h.$object){for(var l=0;l<h.$object.length;l++){var k=h.$object[l];n.appendChild(k),n.appendChild(document.createTextNode(" "))}j._$parent[0].insertBefore(n,m)}j._execAction("insert",1,arguments),"object"==typeof h.multiMix&&j.multiMix(h.multiMix,o)},prepend:function(){var f=this,e=f._parseInsertArgs(arguments);f.insert(0,e.$object,e.multiMix,e.callback)},append:function(){var f=this,e=f._parseInsertArgs(arguments);f.insert(f._state.totalTargets,e.$object,e.multiMix,e.callback)},getOption:function(b){var f=this,e=function(j,p){for(var o=p.split("."),n=o.pop(),m=o.length,l=1,k=o[0]||p;(j=j[k])&&m>l;){k=o[l],l++}return j!==c?j[n]!==c?j[n]:j:void 0};return b?f._execFilter("getOption",e(f,b),arguments):f},setOptions:function(a){var e=this;e._execAction("setOptions",0,arguments),"object"==typeof a&&d.extend(!0,e,a),e._execAction("setOptions",1,arguments)},getState:function(){var b=this;return b._execFilter("getState",b._state,b)},forceRefresh:function(){var b=this;b._refresh(!1,!0)},destroy:function(a){var h=this;h._execAction("destroy",0,arguments),h._$body.add(d(h.selectors.sort)).add(d(h.selectors.filter)).off(".mixItUp");for(var g=0;g<h._$targets.length;g++){var f=h._$targets[g];a&&(f.style.display=""),delete f.mixParent}h._execAction("destroy",1,arguments),delete d.MixItUp.prototype._instances[h._id]}},d.fn.mixItUp=function(){var h,g=arguments,b=[],a=function(f,l){var k=new d.MixItUp,j=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};k._execAction("_instantiate",0,arguments),f.id=f.id?f.id:"MixItUp"+j(),k._instances[f.id]||(k._instances[f.id]=k,k._init(f,l)),k._execAction("_instantiate",1,arguments)};return h=this.each(function(){if(g&&"string"==typeof g[0]){var f=d.MixItUp.prototype._instances[this.id];if("isLoaded"==g[0]){b.push(f?!0:!1)}else{var e=f[g[0]](g[1],g[2],g[3]);e!==c&&b.push(e)}}else{a(this,g[0])}}),b.length?b.length>1?b:b[0]:h},d.fn.removeStyle=function(b,e){return e=e?e:"",this.each(function(){for(var m=this,l=b.split(" "),k=0;k<l.length;k++){for(var j=0;2>j;j++){var a=j?l[k]:e+l[k];if(m.style[a]!==c&&"unknown"!=typeof m.style[a]&&m.style[a].length>0&&(m.style[a]=""),!e){break}}}m.attributes&&m.attributes.style&&m.attributes.style!==c&&""===m.attributes.style.nodeValue&&m.attributes.removeNamedItem("style")})}}(jQuery);