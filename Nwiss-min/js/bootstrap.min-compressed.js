/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}}}return !1}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;d(this).one("bsTransitionEnd",function(){h=!0});var f=function(){h||d(g).trigger(d.support.transition.end)};return setTimeout(f,a),this},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)})}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)};i.VERSION="3.3.1",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()}var l=g(this),k=l.attr("data-target");k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));var d=g(k);a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())};var h=g.fn.alert;g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this},g(document).on("click.bs.alert.data-api",j,i.prototype.close)}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)})}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1};h.VERSION="3.3.1",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))},this),0)},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');if(d.length){var j=this.$element.find("input");"radio"==j.prop("type")&&(j.prop("checked")&&this.$element.hasClass("active")?i=!1:d.find(".active").removeClass("active")),i&&j.prop("checked",!this.$element.hasClass("active")).trigger("change")}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))}i&&this.$element.toggleClass("active")};var g=f.fn.button;f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),b.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))})}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()})}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))};j.VERSION="3.3.1",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();break;case 39:this.next();break;default:return}b.preventDefault()}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)},j.prototype.getItemForDirection=function(l,k){var o="prev"==l?-1:1,n=this.getItemIndex(k),m=(n+o)%this.$items.length;return this.$items.eq(m)},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},j.prototype.slide=function(x,w){var v=this.$element.find(".item.active"),u=w||this.getItemForDirection(x,v),t=this.interval,s="next"==x?"left":"right",r="next"==x?"first":"last",q=this;if(!u.length){if(!this.options.wrap){return}u=this.$element.find(".item")[r]()}if(u.hasClass("active")){return this.sliding=!1}var p=u[0],o=g.Event("slide.bs.carousel",{relatedTarget:p,direction:s});if(this.$element.trigger(o),!o.isDefaultPrevented()){if(this.sliding=!0,t&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=g(this.$indicators.children()[this.getItemIndex(u)]);c&&c.addClass("active")}var a=g.Event("slid.bs.carousel",{relatedTarget:p,direction:s});return g.support.transition&&this.$element.hasClass("slide")?(u.addClass(x),u[0].offsetWidth,v.addClass(s),u.addClass(s),v.one("bsTransitionEnd",function(){u.removeClass([x,s].join(" ")).addClass("active"),v.removeClass(["active",s].join(" ")),q.sliding=!1,setTimeout(function(){q.$element.trigger(a)},0)}).emulateTransitionEnd(j.TRANSITION_DURATION)):(v.removeClass("active"),u.addClass("active"),this.sliding=!1,this.$element.trigger(a)),t&&this.cycle(),this}};var i=g.fn.carousel;g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this};var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()}};g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);f.call(a,a.data())})})}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");return g(e)}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);!d&&b.toggle&&"show"==a&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()})}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g(this.options.trigger).filter('[href="#'+a.id+'"], [data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.1",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var b=this.$element.hasClass("width");return b?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));var k=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!g.support.transition){return d.call(this)}var c=g.camelCase(["scroll",k].join("-"));this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);this.addAriaAndCollapsedClass(f(a),a)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)};var h=g.fn.collapse;g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);k.attr("data-target")||l.preventDefault();var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":g.extend({},k.data(),{trigger:this});j.call(c,a)})}(jQuery),+function(j){function i(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=p(g),b={relatedTarget:this};c.hasClass("open")&&(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b)))}))}function p(a){var f=a.attr("data-target");f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));var e=f&&j(f);return e&&e.length?e:a.parent()}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)})}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)};l.VERSION="3.3.1",l.prototype.toggle=function(r){var q=j(this);if(!q.is(".disabled, :disabled")){var c=p(q),b=c.hasClass("open");if(i(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click",i);var a={relatedTarget:this};if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)}return !1}},l.prototype.keydown=function(a){if(/(38|40|27|32)/.test(a.which)&&!/input|textarea/i.test(a.target.tagName)){var t=j(this);if(a.preventDefault(),a.stopPropagation(),!t.is(".disabled, :disabled")){var s=p(t),r=s.hasClass("open");if(!r&&27!=a.which||r&&27==a.which){return 27==a.which&&s.find(m).trigger("focus"),t.trigger("click")}var q=" li:not(.divider):visible a",f=s.find('[role="menu"]'+q+', [role="listbox"]'+q);if(f.length){var c=f.index(a.target);38==a.which&&c>0&&c--,40==a.which&&c<f.length-1&&c++,~c||(c=0),f.eq(c).trigger("focus")}}}};var k=j.fn.dropdown;j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this},j(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',l.prototype.keydown)}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)})}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};h.VERSION="3.3.1",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.options.backdrop&&i.adjustBackdrop(),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var b=f.Event("shown.bs.modal",{relatedTarget:a});d?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)}))},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")},this))},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")},h.prototype.hideModal=function(){var b=this;this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")})},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;if(this.$backdrop=f('<div class="modal-backdrop '+j+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",f.proxy(function(b){b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var c=function(){k.removeBackdrop(),a&&a()};f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()}else{a&&a()}}},h.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},h.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},h.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)},h.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},h.prototype.measureScrollbar=function(){var d=document.createElement("div");d.className="modal-scrollbar-measure",this.$body.append(d);var c=d.offsetWidth-d.clientWidth;return this.$body[0].removeChild(d),c};var g=f.fn.modal;f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")})}),e.call(b,a,this)})}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),i=j.data("bs.tooltip"),c="object"==typeof a&&a,b=c&&c.selector;(i||"destroy"!=a)&&(b?(i||j.data("bs.tooltip",i={}),i[b]||(i[b]=new h(this,c))):i||j.data("bs.tooltip",i=new h(this,c)),"string"==typeof a&&i[a]())})}var h=function(d,c){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",d,c)};h.VERSION="3.3.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(this.options.viewport.selector||this.options.viewport);for(var n=this.options.trigger.split(" "),m=n.length;m--;){var l=n[m];if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)}),a},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);return d&&d.$tip&&d.$tip.is(":visible")?void (d.hoverState="in"):(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()},d.options.delay.show)):d.show())},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()},d.options.delay.hide)):d.hide()},h.prototype.show=function(){var F=f.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(F);var E=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(F.isDefaultPrevented()||!E){return}var D=this,C=this.tip(),B=this.getUID(this.type);this.setContent(),C.attr("id",B),this.$element.attr("aria-describedby",B),this.options.animation&&C.addClass("fade");var A="function"==typeof this.options.placement?this.options.placement.call(this,C[0],this.$element[0]):this.options.placement,z=/\s?auto?\s?/i,y=z.test(A);y&&(A=A.replace(z,"")||"top"),C.detach().css({top:0,left:0,display:"block"}).addClass(A).data("bs."+this.type,this),this.options.container?C.appendTo(this.options.container):C.insertAfter(this.$element);var x=this.getPosition(),w=C[0].offsetWidth,v=C[0].offsetHeight;if(y){var u=A,t=this.options.container?f(this.options.container):this.$element.parent(),s=this.getPosition(t);A="bottom"==A&&x.bottom+v>s.bottom?"top":"top"==A&&x.top-v<s.top?"bottom":"right"==A&&x.right+w>s.width?"left":"left"==A&&x.left-w<s.left?"right":A,C.removeClass(u).addClass(A)}var c=this.getCalculatedOffset(A,x,w,v);this.applyPlacement(c,A);var a=function(){var b=D.hoverState;D.$element.trigger("shown.bs."+D.type),D.hoverState=null,"out"==b&&D.leave(D)};f.support.transition&&this.$tip.hasClass("fade")?C.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top=z.top+u,z.left=z.left+t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})}},z),0),x.addClass("in");var s=x[0].offsetWidth,r=x[0].offsetHeight;"top"==y&&r!=v&&(z.top=z.top+v-r);var q=this.getViewportAdjustedDelta(y,z,s,r);q.left?z.left+=q.left:z.top+=q.top;var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";x.offset(z),this.replaceArrow(o,x[0][a],p)},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()}var j=this,i=this.tip(),c=f.Event("hide.bs."+this.type);return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)},h.prototype.fixTitle=function(){var b=this.$element;(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(a){a=a||this.$element;var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;return f.extend({},l,j,i,k)},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};if(!this.$viewport){return r}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)}else{var m=u.left-q,l=u.left+q+t;m<p.left?r.left=p.left-m:l>p.width&&(r.left=p.left+p.width-l)}return r},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())}while(document.getElementById(b));return b},h.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(a){var d=this;a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),d.tip().hasClass("in")?d.leave(d):d.enter(d)},h.prototype.destroy=function(){var b=this;clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type)})};var g=f.fn.tooltip;f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this}}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),i=j.data("bs.popover"),c="object"==typeof a&&a,b=c&&c.selector;(i||"destroy"!=a)&&(b?(i||j.data("bs.popover",i={}),i[b]||(i[b]=new h(this,c))):i||j.data("bs.popover",i=new h(this,c)),"string"==typeof a&&i[a]())})}var h=function(d,c){this.init("popover",d,c)};if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")}h.VERSION="3.3.1",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()},h.prototype.getContent=function(){var d=this.$element,c=this.options;return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},h.prototype.tip=function(){return this.$tip||(this.$tip=f(this.options.template)),this.$tip};var g=f.fn.popover;f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this}}(jQuery),+function(f){function e(i,b){var a=f.proxy(this.process,this);this.$body=f("body"),this.$scrollElement=f(f(i).is("body")?window:i),this.options=f.extend({},e.DEFAULTS,b),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.refresh(),this.process()}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()})}e.VERSION="3.3.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var a="offset",j=0;f.isWindow(this.$scrollElement[0])||(a="position",j=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var k=f(this),c=k.data("target")||k.attr("href"),b=/^#./.test(c)&&f(c);return b&&b.length&&b.is(":visible")&&[[b[a]().top+j,c]]||null}).sort(function(d,c){return d[0]-c[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)}if(k&&i<m[0]){return this.activeTarget=null,this.clear()}for(j=m.length;j--;){k!=l[j]&&i>=m[j]&&(!m[j+1]||i<=m[j+1])&&this.activate(l[j])}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var g=f.fn.scrollspy;f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);h.call(a,a.data())})})}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()})}var j=function(a){this.element=g(a)};j.VERSION="3.3.1",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")};var i=g.fn.tab;g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this};var h=function(a){a.preventDefault(),f.call(g(this),"show")};g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()})}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};h.VERSION="3.3.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();if(null!=r&&"top"==this.affixed){return r>p?"top":!1}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;return null!=r&&r>=l?"top":null!=q&&l+k>=t-q?"bottom":!1},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(h.RESET).addClass("affix");var d=this.$target.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-d},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=f("body").height();"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));var l=this.getState(m,a,o,n);if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented()){return}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")}"bottom"==l&&this.$element.offset({top:m-a-n})}};var g=f.fn.affix;f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)})})}(jQuery);