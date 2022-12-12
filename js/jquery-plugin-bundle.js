// Jquery Plugins
//1. js/plugins/jquery.superfish.min.js
//2. js/plugins/jquery.sticky.min.js

// main.min.js
//revstart.js


// Jquery Plugins

//1. js/plugins/jquery.superfish.min.js
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 */

 ;!function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var b=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return b&&a("html").css("cursor","pointer").on("click",a.noop),b}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b,d){var e,f=c.menuClass;b.cssArrows&&(f+=" "+c.menuArrowClass),e=d?"addClass":"removeClass",a[e](f)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a,b){var d=b?"addClass":"removeClass";a.children("a")[d](c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(a){return a.closest("."+c.menuClass)},l=function(a){return k(a).data("sfOptions")},m=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(k(this)),b.$path.length&&a.proxy(m,b.$path)())},o=function(){var b=a(this),c=l(b);d?a.proxy(n,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(n,b,c),c.delay))},p=function(b){var c=a(this),d=l(c),e=c.siblings(b.data.popUpSelector);return d.onHandleTouch.call(e)===!1?this:void(e.length>0&&e.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))()))},q=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,o,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,o);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",o).on(h,"a",c,p)};return{hide:function(b){if(this.length){var c=this,d=l(c);if(!d)return this;var e=d.retainPath===!0?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;if(b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f)===!1)return this;f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass),c=b.children(a.popUpSelector);return a.onBeforeShow.call(c)===!1?this:(c.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(c)}),this)},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sfOptions");return e?(b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),void d.removeData("sfOptions")):!1})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sfOptions"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sfOptions",e),g(d,e,!0),i(f,!0),j(d),q(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop,onHandleTouch:a.noop}}(jQuery,window);


//2. js/plugins/jquery.sticky.min.js
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=Array.prototype.slice,i=Array.prototype.splice,n={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},r=e(window),s=e(document),o=[],a=r.height(),c=function(){for(var t=r.scrollTop(),i=s.height(),n=i-a,c=t>n?n-t:0,p=0,l=o.length;l>p;p++){var d=o[p],u=d.stickyWrapper.offset().top,f=u-d.topSpacing-c;if(d.stickyWrapper.css("height",d.stickyElement.outerHeight()),f>=t)null!==d.currentTop&&(d.stickyElement.css({width:"",position:"",top:"","z-index":""}),d.stickyElement.parent().removeClass(d.className),d.stickyElement.trigger("sticky-end",[d]),d.currentTop=null);else{var h=i-d.stickyElement.outerHeight()-d.topSpacing-d.bottomSpacing-t-c;if(0>h?h+=d.topSpacing:h=d.topSpacing,d.currentTop!==h){var g;d.getWidthFrom?(padding=d.stickyElement.innerWidth()-d.stickyElement.width(),g=e(d.getWidthFrom).width()-padding||null):d.widthFromWrapper&&(g=d.stickyWrapper.width()),null==g&&(g=d.stickyElement.width()),d.stickyElement.css("width",g).css("position","fixed").css("top",h).css("z-index",d.zIndex),d.stickyElement.parent().addClass(d.className),null===d.currentTop?d.stickyElement.trigger("sticky-start",[d]):d.stickyElement.trigger("sticky-update",[d]),d.currentTop===d.topSpacing&&d.currentTop>h||null===d.currentTop&&h<d.topSpacing?d.stickyElement.trigger("sticky-bottom-reached",[d]):null!==d.currentTop&&h===d.topSpacing&&d.currentTop<h&&d.stickyElement.trigger("sticky-bottom-unreached",[d]),d.currentTop=h}var m=d.stickyWrapper.parent(),y=d.stickyElement.offset().top+d.stickyElement.outerHeight()>=m.offset().top+m.outerHeight()&&d.stickyElement.offset().top<=d.topSpacing;y?d.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):d.stickyElement.css("position","fixed").css("top",h).css("bottom","").css("z-index",d.zIndex)}}},p=function(){a=r.height();for(var t=0,i=o.length;i>t;t++){var n=o[t],s=null;n.getWidthFrom?n.responsiveWidth&&(s=e(n.getWidthFrom).width()):n.widthFromWrapper&&(s=n.stickyWrapper.width()),null!=s&&n.stickyElement.css("width",s)}},l={init:function(t){return this.each(function(){var i=e.extend({},n,t),r=e(this),s=r.attr("id"),a=s?s+"-"+n.wrapperClassName:n.wrapperClassName,c=e("<div></div>").attr("id",a).addClass(i.wrapperClassName);r.wrapAll(function(){return 0==e(this).parent("#"+a).length?c:void 0});var p=r.parent();i.center&&p.css({width:r.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===r.css("float")&&r.css({"float":"none"}).parent().css({"float":"right"}),i.stickyElement=r,i.stickyWrapper=p,i.currentTop=null,o.push(i),l.setWrapperHeight(this),l.setupChangeListeners(this)})},setWrapperHeight:function(t){var i=e(t),n=i.parent();n&&n.css("height",i.outerHeight())},setupChangeListeners:function(e){if(window.MutationObserver){var t=new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&l.setWrapperHeight(e)});t.observe(e,{subtree:!0,childList:!0})}else window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){l.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){l.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){l.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){l.setWrapperHeight(e)}))},update:c,unstick:function(){return this.each(function(){for(var t=this,n=e(t),r=-1,s=o.length;s-->0;)o[s].stickyElement.get(0)===t&&(i.call(o,s,1),r=s);-1!==r&&(n.unwrap(),n.css({width:"",position:"",top:"","float":"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",c,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",c),window.attachEvent("onresize",p)),e.fn.sticky=function(i){return l[i]?l[i].apply(this,t.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):l.init.apply(this,arguments)},e.fn.unstick=function(i){return l[i]?l[i].apply(this,t.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.sticky"):l.unstick.apply(this,arguments)},e(function(){setTimeout(c,0)})});



//revstart.js

var	revapi1, tpj;

	jQuery(function() {
		tpj = jQuery;

		/* Home */
		if(tpj("#rev_slider_1_1").length){
			
			if ($(window).width() > 576) {

       
				revapi1 = tpj("#rev_slider_1_1").show().revolution({
					sliderType:"standard",
					sliderLayout:"fullwidth",
					delay:9000,
					navigation: {
						arrows:{
							enable:false
						},
						bullets: {
							enable:true,
							hide_onleave:false,
							h_align:"center",
							space:10,
							direction:"horizontal",
							h_offset:0,
							v_offset:0
						}
					},
					responsiveLevels: [1240, 1024, 768, 480],
					gridwidth:[1200, 1024, 768, 480],
					gridheight:[950, 800, 600, 500],
					disableProgressBar:"on"
				});

			} else {
				$("#slide-home11-btn").click(function() {
					window.location = "https://zgripcea-constantin.ro/avocat-gabriel-zgripcea.html";
				});
			}


		}

		/* Home 02 */
		if(tpj("#rev_slider_2_1").length){
			revapi1 = tpj("#rev_slider_2_1").show().revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:9000,
				navigation: {
					arrows:{
						enable:true,
						hide_onleave:false,
						left : {
							h_offset:30
						},
						right : {
							h_offset:30
						}
					},
					bullets: {
						enable:true,
						hide_onleave:false,
						h_align:"center",
						space:10,
						direction:"horizontal",
						h_offset:0,
						v_offset:0
					}
				},
				responsiveLevels: [1240, 1024, 768, 480],
				gridwidth:[1200, 1024, 768, 480],
				gridheight:[880, 800, 600, 500],
				disableProgressBar:"on"
			});
		}

		/* Home 03 */
		if(tpj("#rev_slider_3_1").length){
			revapi1 = tpj("#rev_slider_3_1").show().revolution({
				sliderType:"standard",
				sliderLayout:"fullwidth",
				delay:9000,
				navigation: {
					arrows:{
						enable:true,
						hide_onleave:false,
						left : {
							h_offset:30
						},
						right : {
							h_offset:30
						}
					},
					bullets: {
						enable:false
					}
				},
				responsiveLevels: [1240, 1024, 768, 480],
				gridwidth:[1200, 1024, 768, 480],
				gridheight:[945, 800, 600, 500],
				disableProgressBar:"on"
			});
		}
	});


//main.min.js
function gt3_menu_line(){var t=jQuery(".main-nav__list");t.length&&t.each(function(){var t=jQuery(this),e="";t.append('<span class="menu_item_line"></span>');var o=t.find("> .menu-item"),n=t.find("> .current-menu-item"),i=t.find("> .current-menu-ancestor"),a=t.find(".menu_item_line");(n.length||i.length)&&(e=n.length?n:i.length?i:"",a.css({width:e.find(">a").outerWidth()}),a.css({left:e.find(">a").offset().left-t.offset().left})),o.mouseenter(function(){a.css({width:jQuery(this).find("> a").outerWidth()}),a.css({left:jQuery(this).find("> a").offset().left-jQuery(this).parent().offset().left})}),t.mouseleave(function(){e.length?(a.css({width:e.find("> a").outerWidth()}),a.css({left:e.find("> a").offset().left-t.offset().left})):(a.css({width:"0"}),a.css({left:"100%"}))})})}function oconnor_video_background(){jQuery(".video-bg").each(function(){jQuery(this).find("iframe").css({height:jQuery(this).height()+"px"})})}function oconnor_content_update(){var t=jQuery(".frame16x10");t.size()>0&&oconnor_iframe16x10(t)}function oconnor_iframe16x10(t){t.each(function(){jQuery(this).height(jQuery(this).width()/16*10.5)})}function gt3_popup_video(){var t=jQuery(".swipebox-video, .swipebox");t.length&&t.swipebox({useCSS:!0,useSVG:!0,initialIndexOnArray:0,hideCloseButtonOnMobile:!1,removeBarsOnMobile:!0,hideBarsDelay:3e3,videoMaxWidth:1140,autoplayVideos:!1,beforeOpen:function(){},afterOpen:null,afterClose:function(){},loopAtEnd:!1})}!function(t){"use strict";var e=window,o=document;jQuery(o).ready(function(){oconnor_content_update(),jQuery(".main-nav__list").superfish({hoverClass:"main-nav__list-visible",delay:300,animation:{opacity:"show"},animationOut:{opacity:"hide"}}),jQuery(".main-nav__btn").on("click",function(){jQuery(this).toggleClass("open"),jQuery(".main-nav__list").hasClass("open")?jQuery(".main-nav__list").removeClass("open"):jQuery(".main-nav__list").addClass("open")}),jQuery(".header-content").size()>0&&jQuery(".header-content").sticky({topSpacing:0,zIndex:300}),jQuery(".search-icon-btn").on("click",function(t){t.preventDefault(),jQuery(this).toggleClass("open"),jQuery(".search-block__dropdown").hasClass("open")?jQuery(".search-block__dropdown").removeClass("open"):jQuery(".search-block__dropdown").addClass("open")}),jQuery(".blog-slider-01").size()>0&&jQuery(".blog-slider-01").each(function(){jQuery(this).nivoSlider({directionNav:!0,controlNav:!1,effect:"fade",pauseTime:4e3,slices:1})}),jQuery(".appointment-box-wrapp").size()>0&&jQuery(".available-appoinment-btn").leanModal({top:200,closeButton:".appointment-popup-close"});var n=jQuery(".shortcode-counter");if(n.size()>0&&(jQuery(e).width()>760?n.each(function(){if(jQuery(this).offset().top<jQuery(e).height()){if(!jQuery(this).hasClass("done")){var t=jQuery(this).find(".stat-count").attr("data-count");jQuery(this).find(".stat-temp").stop().animate({width:t},{duration:3e3,step:function(t){jQuery(this).parents(".counter-wrapper").find(".stat-count").html(Math.floor(t))}}),jQuery(this).addClass("done"),jQuery(this).find(".stat-count")}}else jQuery(this).waypoint(function(){if(!jQuery(this).hasClass("done")){var t=jQuery(this).find(".stat-count").attr("data-count");jQuery(this).find(".stat-temp").stop().animate({width:t},{duration:3e3,step:function(t){jQuery(this).parents(".counter-wrapper").find(".stat-count").html(Math.floor(t))}}),jQuery(this).addClass("done"),jQuery(this).find(".stat-count")}},{offset:"bottom-in-view"})}):n.each(function(){var t=jQuery(this).find(".stat-count").attr("data-count");jQuery(this).find(".stat-temp").animate({width:t},{duration:3e3,step:function(t){jQuery(this).parents(".counter-wrapper").find(".stat-count").html(Math.floor(t))}}),jQuery(this).find(".stat-count")},{offset:"bottom-in-view"})),jQuery(".shortcode_skills").size()>0&&(jQuery(e).width()>760?jQuery(".module_skills").waypoint(function(){jQuery(".skill_div").each(function(){var t=jQuery(this).attr("data-percent");jQuery(this).stop().animate({width:t},1500)})},{offset:"99.99%"}):jQuery(".skill_div").each(function(){jQuery(".skill_div").each(function(){var t=jQuery(this).attr("data-percent");jQuery(this).stop().animate({width:t},1e3)})})),jQuery(".gallery-wrapp").size()>0){var i=jQuery(".gallery-01").isotope({itemSelector:".gallery-01__item",layoutMode:"fitRows"});i.imagesLoaded().progress(function(){i.isotope("layout")}),jQuery(".gallery-01-filters").on("click",".gallery-01-btn",function(){var t=jQuery(this).attr("data-filter");i.isotope({filter:t})}),jQuery(".gallery-01-btn-wrapp").each(function(t,e){var o=jQuery(e);o.on("click",".gallery-01-btn",function(t){t.preventDefault(),o.find(".is-checked").removeClass("is-checked"),jQuery(this).addClass("is-checked")})})}var a=jQuery(".video-bg");if(a.size()>0&&(a.each(function(){0==jQuery(this).children().length&&jQuery(this).parent().hide()}),jQuery(".play-video").on("click",function(t){a.each(function(){jQuery(this).find(".video-frame").attr("src",jQuery(this).find(".play-video").attr("data-video-url"))}),a.removeClass("show_video_now"),jQuery(this).parent().find(".video-frame")[0].src+="&autoplay=1",t.preventDefault(),oconnor_video_background(),jQuery(this).parent(".video-bg").addClass("show_video_now")})),jQuery(".music-post").size()>0)for(var s=document.querySelectorAll("audio"),r=0,c=s.length;r<c;r++){var l=["playpause","progress","volume"];"AUDIO"===s[r].tagName&&l.push("chromecast"),new MediaElementPlayer(s[r],{pluginPath:"https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.5/",shimScriptAccess:"always",autoRewind:!1,features:l,currentMessage:"Now playing:"})}jQuery(e).on("scroll",function(){jQuery(e).scrollTop()>0?jQuery(".back2top").fadeIn():jQuery(".back2top").fadeOut();var t=parseInt(jQuery(".footer_wrapper").height())+parseInt(jQuery(".footer_wrapper").attr("data-pad-top"))+parseInt(jQuery(".footer_wrapper").attr("data-pad-bottom"))+30;jQuery(e).scrollTop()>jQuery(o).height()-jQuery(e).height()-t?jQuery(".back2top").css({bottom:t+"px"}):jQuery(".back2top").css({bottom:"30px"})}),jQuery(".back2top").on("click",function(){return jQuery("body,html").animate({scrollTop:0},400),!1});let d=document.querySelector("#trigger");if(d){let f=new IntersectionObserver(function(t,e){t.forEach(function(t){if(t.isIntersecting){let e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js",document.head.appendChild(e),f.unobserve(d)}})});f.observe(d)}jQuery(".contact_form").size()>0&&jQuery("#ajax-contact-form").on("submit",function(){jQuery("#note").html("");var e=t(this).serialize(),o="";return grecaptcha.getResponse().length>0?t.ajax({type:"POST",url:"contact_form/contact_process.php",data:e,success:function(t){"OK"==t?(o='<div class="notification_ok">Your message has been sent. Thank you!</div>',jQuery("#fields").hide()):o=t,jQuery("#note").html(o)}}):jQuery("#note").html('<div class="notification_error">Please complete the reCAPTCHA.</div>'),!1}),setTimeout("gt3_menu_line();",50),jQuery('a[href="#"]').on("click",function(t){t.preventDefault()}),jQuery(".testimonials_rotators").length&&jQuery(".testimonials_rotators").slick({dots:!0,arrows:!1,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery(".testimonial_rotator").length&&jQuery(".testimonial_rotator").slick({dots:!0,arrows:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1}),gt3_popup_video(),jQuery("body").addClass("page-loaded")}),jQuery(e).resize(function(){oconnor_content_update(),oconnor_video_background(),setTimeout("oconnor_video_background();",1e3)}),jQuery(e).load(function(){})}(jQuery);




window.onload = function () {

        // Lazy Loading Images
        const lazyloadImages = document.querySelectorAll(".lazy");

        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });


        // desktop Images for slider
        if ($(window).width() > 576) {
            $('.tp-bgimg').eq(0).css('backgroundImage', 'url(img/slider/slider_11.jpg)');
            $('.tp-bgimg').eq(1).css('backgroundImage', 'url(img/slider/slider_12.jpg)');

        } else{
            setTimeout(() => {
            $('.tp-bgimg').eq(1).css('backgroundImage', 'url(img/slider/slider_12.jpg)');

            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/fonts.css') );

            },10000)
        }

    }


    const loadFont = (url) => {
        // the 'fetch' equivalent has caching issues
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            let css = xhr.responseText;
            css = css.replace(/}/g, 'font-display: swap; }');
      
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
          }
        };
        
        xhr.send();
      }
      
      loadFont('https://fonts.googleapis.com/css2?family=Prata&family=Lato');
