
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.




/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);





/*
 *
 * we need this for radio button on search header by jquery ui
 * more info: https://gist.github.com/760885 */
(function( $ ){
//plugin buttonset vertical
$.fn.buttonsetv = function() {
  $(this).buttonset();
  $('label:first', this).removeClass('ui-corner-left').addClass('ui-corner-top');
  $('label:last', this).removeClass('ui-corner-right').addClass('ui-corner-bottom');
  mw = 0; // max witdh
  $('label', this).each(function(index){
     w = $(this).width();
     if (w > mw) mw = w; 
  })
  $('label', this).each(function(index){
    $(this).width(mw);
  })
};
})( jQuery );







/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};






/**
 * jTweetsAnywhere V1.3.1
 * http://thomasbillenstein.com/jTweetsAnywhere/
 *
 * Copyright 2011, Thomas Billenstein
 * Licensed under the MIT license.
 * http://thomasbillenstein.com/jTweetsAnywhere/license.txt
 */


/**
 * The code below is used as supplied by Twitter (https://dev.twitter.com/docs/intents)
 *
 * Twitter says:

 * "Some sites may prefer to embed the unobtrusive Web Intents pop-up Javascript inline
 * or without a dependency to platform.twitter.com. The snippet below will offer the
 * equivalent functionality without the external dependency."
 */
(function(){function e(e){for(var e=e||window.event,g=e.target||e.srcElement,i,k;g&&"a"!==g.nodeName.toLowerCase();)g=g.parentNode;if(g&&"a"===g.nodeName.toLowerCase()&&g.href&&(i=g.href.match(a)))i=Math.round(f/2-c/2),k=0,h>d&&(k=Math.round(h/2-d/2)),window.open(g.href,"intent",b+",width="+c+",height="+d+",left="+i+",top="+k),e.returnValue=!1,e.preventDefault&&e.preventDefault()}if(!window.__twitterIntentHandler){var a=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,b="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
c=550,d=420,h=screen.height,f=screen.width;document.addEventListener?document.addEventListener("click",e,!1):document.attachEvent&&document.attachEvent("onclick",e);window.__twitterIntentHandler=!0}})();
(function(){if(!window.__JTA_I18N)JTA_I18N=function(){function e(a,c){function d(a,b,d){var e=c?c[a]||a:a;1!==b&&"object"===typeof e&&(e=h(a,e,b));if(e&&d)for(p in d)e=e.replace(p,c?c[d[p]]||d[p]:d[p]);return e}function h(a,b,c){for(pat in b){var d=/(\d+)\s*-\s*(\d+)/;if(d=d.exec(pat)){var e=d[2];if(c>=d[1]&&c<=e)return b[pat]}d=/([<>]=?)\s*(\d+)/;if(d=d.exec(pat)){e=d[1];d=d[2];if(">"===e&&c>d)return b[pat];if(">="===e&&c>=d)return b[pat];if("<"===e&&c<d)return b[pat];if("<="===e&&c<=d)return b[pat]}d=
/\s*,\s*/;if(d=pat.split(d))for(e=0;e<d.length;e++)if(c===~~d[e])return b[pat]}return a}this.getLocale=function(){return a};this._=this.get=function(a,b){return d(a,1,b)};this.__=this.nget=function(a,b,c,e){return 1===c?d(a,1,e):d(b,c,e)}}var a={};return{addResourceBundle:function(b,c,d){a[b]||(a[b]={});a[b][c]=d},getResourceBundle:function(b,c){return new e(c,a[b]?a[b][c]:null)}}}(),window.__JTA_I18N=!0})();JTA_I18N.addResourceBundle("jTweetsAnywhere","en",{$$monthNames:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")});
(function(e){e.fn.jTweetsAnywhere=function(a){var b=e.extend({username:"tbillenstein",list:null,searchParams:null,count:0,tweetProfileImagePresent:null,tweetFilter:defaultTweetFilter,showTweetFeed:!0,showFollowButton:!1,showConnectButton:!1,showLoginInfo:!1,showTweetBox:!1,locale:"en",tweetDataProvider:defaultTweetDataProvider,rateLimitDataProvider:defaultRateLimitDataProvider,mainDecorator:defaultMainDecorator,tweetFeedDecorator:defaultTweetFeedDecorator,tweetDecorator:defaultTweetDecorator,tweetProfileImageDecorator:defaultTweetProfileImageDecorator,
tweetBodyDecorator:defaultTweetBodyDecorator,tweetUsernameDecorator:defaultTweetUsernameDecorator,tweetTextDecorator:defaultTweetTextDecorator,tweetAttributesDecorator:defaultTweetAttributesDecorator,tweetTwitterBirdDecorator:defaultTweetTwitterBirdDecorator,tweetTimestampDecorator:defaultTweetTimestampDecorator,tweetSourceDecorator:defaultTweetSourceDecorator,tweetGeoLocationDecorator:defaultTweetGeoLocationDecorator,tweetInReplyToDecorator:defaultTweetInReplyToDecorator,tweetRetweeterDecorator:defaultTweetRetweeterDecorator,
tweetActionsDecorator:defaultTweetActionsDecorator,tweetActionReplyDecorator:defaultTweetActionReplyDecorator,tweetActionRetweetDecorator:defaultTweetActionRetweetDecorator,tweetActionFavoriteDecorator:defaultTweetActionFavoriteDecorator,tweetFeedControlsDecorator:defaultTweetFeedControlsDecorator,tweetFeedControlsMoreBtnDecorator:defaultTweetFeedControlsMoreBtnDecorator,tweetFeedControlsPrevBtnDecorator:defaultTweetFeedControlsPrevBtnDecorator,tweetFeedControlsNextBtnDecorator:defaultTweetFeedControlsNextBtnDecorator,
tweetFeedAutorefreshTriggerDecorator:defaultTweetFeedAutorefreshTriggerDecorator,tweetFeedAutorefreshTriggerContentDecorator:defaultTweetFeedAutorefreshTriggerContentDecorator,connectButtonDecorator:defaultConnectButtonDecorator,loginInfoDecorator:defaultLoginInfoDecorator,loginInfoContentDecorator:defaultLoginInfoContentDecorator,followButtonDecorator:defaultFollowButtonDecorator,tweetBoxDecorator:defaultTweetBoxDecorator,linkDecorator:defaultLinkDecorator,usernameDecorator:defaultUsernameDecorator,
hashtagDecorator:defaultHashtagDecorator,loadingDecorator:defaultLoadingDecorator,errorDecorator:defaultErrorDecorator,noDataDecorator:defaultNoDataDecorator,tweetTimestampFormatter:defaultTweetTimestampFormatter,tweetTimestampTooltipFormatter:defaultTweetTimestampTooltipFormatter,tweetVisualizer:defaultTweetVisualizer,loadingIndicatorVisualizer:defaultLoadingIndicatorVisualizer,autorefreshTriggerVisualizer:defaultAutorefreshTriggerVisualizer,onDataRequestHandler:defaultOnDataRequestHandler,onRateLimitDataHandler:defaultOnRateLimitDataHandler,
onOptionsInitializingHandler:defaultOnOptionsInitializingHandler,_tweetFeedConfig:{autoConformToTwitterStyleguide:!1,showTwitterBird:!0,showTimestamp:{refreshInterval:0},showSource:!1,showGeoLocation:!0,showInReplyTo:!0,showActionReply:!1,showActionRetweet:!1,showActionFavorite:!1,showProfileImages:null,showUserScreenNames:null,showUserFullNames:!1,expandHovercards:!1,includeRetweets:!0,paging:{mode:"none",_limit:0,_offset:0},autorefresh:{mode:"none",interval:60,duration:3600,max:-1,_startTime:null,
_triggerElement:null},_pageParam:0,_maxId:null,_recLevel:0,_noData:!1,_clearBeforePopulate:!1},_tweetBoxConfig:{counter:!0,width:515,height:65,label:null,defaultContent:"",onTweet:function(){}},_connectButtonConfig:{size:"medium"},_baseSelector:null,_baseElement:null,_tweetFeedElement:null,_tweetFeedControlsElement:null,_followButtonElement:null,_loginInfoElement:null,_connectButtonElement:null,_tweetBoxElement:null,_loadingIndicatorElement:null,_noDataElement:null,_tweetsCache:[],_autorefreshTweetsCache:[],
_stats:{dataRequestCount:0,rateLimitPreventionCount:0,rateLimit:{remaining_hits:150,hourly_limit:150}},_resourceBundle:null},a);b._baseSelector=this.selector;b.onOptionsInitializingHandler(b);setupOptions(b);if(b.mainDecorator)return e.ajaxSetup({cache:!0}),this.each(function(){b._baseElement=e(this);b._tweetFeedElement=b.tweetFeedDecorator?e(b.tweetFeedDecorator(b)):null;b._tweetFeedControlsElement=b.tweetFeedControlsDecorator?e(b.tweetFeedControlsDecorator(b)):null;b._followButtonElement=b.followButtonDecorator?
e(b.followButtonDecorator(b)):null;b._tweetBoxElement=b.tweetBoxDecorator?e(b.tweetBoxDecorator(b)):null;b._connectButtonElement=b.connectButtonDecorator?e(b.connectButtonDecorator(b)):null;b._loginInfoElement=b.loginInfoDecorator?e(b.loginInfoDecorator(b)):null;b.mainDecorator(b);populateTweetFeed(b);populateAnywhereControls(b);bindEventHandlers(b);setupAutorefresh(b)})};defaultMainDecorator=function(a){a._tweetFeedElement&&a._baseElement.append(a._tweetFeedElement);a._tweetFeedControlsElement&&
a._baseElement.append(a._tweetFeedControlsElement);a._connectButtonElement&&a._baseElement.append(a._connectButtonElement);a._loginInfoElement&&a._baseElement.append(a._loginInfoElement);a._followButtonElement&&a._baseElement.append(a._followButtonElement);a._tweetBoxElement&&a._baseElement.append(a._tweetBoxElement)};defaultTweetFeedControlsDecorator=function(a){var b="";"prev-next"==a._tweetFeedConfig.paging.mode?(a.tweetFeedControlsPrevBtnDecorator&&(b+=a.tweetFeedControlsPrevBtnDecorator(a)),
a.tweetFeedControlsNextBtnDecorator&&(b+=a.tweetFeedControlsNextBtnDecorator(a))):"endless-scroll"!=a._tweetFeedConfig.paging.mode&&a.tweetFeedControlsMoreBtnDecorator&&(b+=a.tweetFeedControlsMoreBtnDecorator(a));return'<div class="jta-tweet-list-controls">'+b+"</div>"};defaultTweetFeedControlsMoreBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-more">'+a._resourceBundle._("More")+"</span>"};defaultTweetFeedControlsPrevBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-prev">'+
a._resourceBundle._("Prev")+"</span>"};defaultTweetFeedControlsNextBtnDecorator=function(a){return'<span class="jta-tweet-list-controls-button jta-tweet-list-controls-button-next">'+a._resourceBundle._("Next")+"</span>"};defaultTweetFeedAutorefreshTriggerDecorator=function(a,b){var c="";b.tweetFeedAutorefreshTriggerContentDecorator&&(c=b.tweetFeedAutorefreshTriggerContentDecorator(a,b));return'<li class="jta-tweet-list-autorefresh-trigger">'+c+"</li>"};defaultTweetFeedAutorefreshTriggerContentDecorator=
function(a,b){return'<span class="jta-tweet-list-autorefresh-trigger-content">'+b._resourceBundle.__("%count% new tweet","%count% new tweets",a,{"%count%":a})+"</span>"};defaultTweetFeedDecorator=function(){return'<ul class="jta-tweet-list"></ul>'};defaultTweetDecorator=function(a,b){var c="";b._tweetFeedConfig.showProfileImages&&(c+=b.tweetProfileImageDecorator(a,b));b.tweetBodyDecorator&&(c+=b.tweetBodyDecorator(a,b));return'<li class="jta-tweet-list-item">'+(c+'<div class="jta-clear">&nbsp;</div>')+
"</li>"};defaultTweetProfileImageDecorator=function(a){var b=a.retweeted_status||a,a=getScreenName(a);return'<div class="jta-tweet-profile-image">'+('<a class="jta-tweet-profile-image-link" href="http://twitter.com/'+a+'" target="_blank"><img src="'+(b.user?b.user.profile_image_url:b.profile_image_url)+'" alt="'+a+'"'+(isAnywherePresent()?"":' title="'+a+'"')+"/></a>")+"</div>"};defaultTweetBodyDecorator=function(a,b){var c="";b.tweetTextDecorator&&(c+=b.tweetTextDecorator(a,b));b.tweetAttributesDecorator&&
(c+=b.tweetAttributesDecorator(a,b));b.tweetActionsDecorator&&(c+=b.tweetActionsDecorator(a,b));return'<div class="jta-tweet-body '+(b._tweetFeedConfig.showProfileImages?"jta-tweet-body-list-profile-image-present":"")+'">'+c+"</div>"};defaultTweetTextDecorator=function(a,b){var c=a.text;if(a.retweeted_status&&(b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserScreenNames||b._tweetFeedConfig.showUserFullNames||null==b._tweetFeedConfig.showUserFullNames))c=a.retweeted_status.text;
b.linkDecorator&&(c=b.linkDecorator(c,b));b.usernameDecorator&&(c=b.usernameDecorator(c,b));b.hashtagDecorator&&(c=b.hashtagDecorator(c,b));if(b._tweetFeedConfig.showUserScreenNames||b._tweetFeedConfig.showUserFullNames||a.retweeted_status&&(null==b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserFullNames))c=b.tweetUsernameDecorator(a,b)+" "+c;return'<span class="jta-tweet-text">'+c+"</span>"};defaultTweetUsernameDecorator=function(a,b){var c=getScreenName(a),d=getFullName(a),
e=null;if(c&&(b._tweetFeedConfig.showUserScreenNames||null==b._tweetFeedConfig.showUserScreenNames&&a.retweeted_status))e='<span class="jta-tweet-user-screen-name"><a class="jta-tweet-user-screen-name-link" href="http://twitter.com/'+c+'" target="_blank">'+c+"</a></span>";var f=null;if(d&&(b._tweetFeedConfig.showUserFullNames||null==b._tweetFeedConfig.showUserFullNames&&a.retweeted_status))f='<span class="jta-tweet-user-full-name">'+(e?" ":"")+'<a class="jta-tweet-user-full-name-link" href="http://twitter.com/'+
c+'" name="'+c+'" target="_blank">'+d+"</a></span>";c="";e&&(c+=e);f&&(e&&(c+=" "),c+=f);if(e||f)c='<span class="jta-tweet-user-name">'+(a.retweeted_status?"RT ":"")+c+"</span>";return c};defaultTweetAttributesDecorator=function(a,b){var c="";if(b.tweetTwitterBirdDecorator||b.tweetTimestampDecorator||b.tweetSourceDecorator||b.tweetGeoLocationDecorator||b.tweetInReplyToDecorator||a.retweeted_status&&b.tweetRetweeterDecorator)c+='<span class="jta-tweet-attributes">',b.tweetTwitterBirdDecorator&&(c+=
b.tweetTwitterBirdDecorator(a,b)),b.tweetTimestampDecorator&&(c+=b.tweetTimestampDecorator(a,b)),b.tweetSourceDecorator&&(c+=b.tweetSourceDecorator(a,b)),b.tweetGeoLocationDecorator&&(c+=b.tweetGeoLocationDecorator(a,b)),b.tweetInReplyToDecorator&&(c+=b.tweetInReplyToDecorator(a,b)),a.retweeted_status&&b.tweetRetweeterDecorator&&(c+=b.tweetRetweeterDecorator(a,b)),c+="</span>";return c};defaultTweetTimestampDecorator=function(a,b){var c=a.retweeted_status||a,d=formatDate(c.created_at),e=b.tweetTimestampFormatter(d,
b),f=b.tweetTimestampTooltipFormatter(d);return'<span class="jta-tweet-timestamp"><a class="jta-tweet-timestamp-link" data-timestamp="'+d+'" href="http://twitter.com/'+getScreenName(a)+"/status/"+c.id+'" target="_blank" title="'+f+'">'+e+"</a></span>"};defaultTweetTwitterBirdDecorator=function(a,b){var c=getScreenName(a),d="https://twitter.com/intent/user?screen_name="+c,c=c+" "+b._resourceBundle._("on Twitter");return'<span class="jta-tweet-twitter-bird"><a href="'+d+'" target="_blank" title="'+
c+'"><span class="jta-tweet-twitter-bird-icon">&nbsp;</span></a></span>'};defaultTweetTimestampTooltipFormatter=function(a){return(new Date(a)).toLocaleString()};defaultTweetTimestampFormatter=function(a,b){var c=new Date,d=parseInt((c.getTime()-Date.parse(a))/1E3),e="";if(60>d)e+=b._resourceBundle.__("%secs% second ago","%secs% seconds ago",d,{"%secs%":d});else if(3600>d)c=parseInt((d+30)/60),e+=b._resourceBundle.__("%mins% minute ago","%mins% minutes ago",c,{"%mins%":c});else if(86400>d)c=parseInt((d+
1800)/3600),e+=b._resourceBundle.__("%hours% hour ago","%hours% hours ago",c,{"%hours%":c});else{var f=new Date(a),j=b._resourceBundle._("$$monthNames"),e=e+(j[f.getMonth()]+" "+f.getDate());f.getFullYear()<c.getFullYear()&&(e+=", "+f.getFullYear());c=parseInt((d+43200)/86400);e+=" ("+b._resourceBundle.__("%days% day ago","%days% days ago",c,{"%days%":c})+")"}return e};defaultTweetSourceDecorator=function(a,b){var c=(a.retweeted_status||a).source.replace(/\&lt\;/gi,"<").replace(/\&gt\;/gi,">").replace(/\&quot\;/gi,
'"');return'<span class="jta-tweet-source"> '+b._resourceBundle._("via")+' <span class="jta-tweet-source-link">'+c+"</span></span>"};defaultTweetGeoLocationDecorator=function(a,b){var c="",d=a.retweeted_status||a,e=null;if(d.geo&&d.geo.coordinates)e=d.geo.coordinates.join();else if(d.place&&d.place.full_name)e=d.place.full_name;if(e){c=b._resourceBundle._("here");if(d.place&&d.place.full_name)c=d.place.full_name;c='<span class="jta-tweet-location"> '+b._resourceBundle._("from")+' <a class="jta-tweet-location-link" href="'+
("http://maps.google.com/maps?q="+e)+'" target="_blank">'+c+"</a></span>"}return c};defaultTweetInReplyToDecorator=function(a,b){var c=a.retweeted_status||a,d="";c.in_reply_to_status_id&&c.in_reply_to_screen_name&&(d="http://twitter.com/"+c.in_reply_to_screen_name+"/status/"+c.in_reply_to_status_id,c=b._resourceBundle._("in reply to")+" "+c.in_reply_to_screen_name,d='<span class="jta-tweet-inreplyto"> <a class="jta-tweet-inreplyto-link" href="'+d+'" target="_blank">'+c+"</a></span>");return d};defaultTweetRetweeterDecorator=
function(a,b){var c="";if(a.retweeted_status)var d=getUserScreenName(a),c=(a.retweeted_status.retweet_count||0)-1,d='<a class="jta-tweet-retweeter-link" href="http://twitter.com/'+d+'" target="_blank">'+d+"</a>",e=b._resourceBundle.__(" and %rtc% other"," and %rtc% others",c,{"%rtc%":c}),c='<br/><span class="jta-tweet-retweeter">'+b._resourceBundle._("Retweeted by")+" "+d+(0<c?e:"")+"</span>";return c};defaultTweetActionsDecorator=function(a,b){var c="";if(b.tweetActionReplyDecorator||b.tweetActionRetweetDecorator||
b.tweetActionFavoriteDecorator)c+='<span class="jta-tweet-actions">',b.tweetActionReplyDecorator&&(c+=b.tweetActionReplyDecorator(a,b)),b.tweetActionRetweetDecorator&&(c+=b.tweetActionRetweetDecorator(a,b)),b.tweetActionFavoriteDecorator&&(c+=b.tweetActionFavoriteDecorator(a,b)),c+="</span>";return c};defaultTweetActionReplyDecorator=function(a,b){var c="https://twitter.com/intent/tweet?in_reply_to="+a.id,d=b._resourceBundle._("Reply");return'<span class="jta-tweet-action-reply"><a href="'+c+'">'+
d+"</a></span>"};defaultTweetActionRetweetDecorator=function(a,b){var c="https://twitter.com/intent/retweet?tweet_id="+a.id,d=b._resourceBundle._("Retweet");return'<span class="jta-tweet-action-retweet"><a href="'+c+'">'+d+"</a></span>"};defaultTweetActionFavoriteDecorator=function(a,b){var c="https://twitter.com/intent/favorite?tweet_id="+a.id,d=b._resourceBundle._("Favorite");return'<span class="jta-tweet-action-favorite"><a href="'+c+'">'+d+"</a></span>"};defaultConnectButtonDecorator=function(){return'<div class="jta-connect-button"></div>'};
defaultLoginInfoDecorator=function(){return'<div class="jta-login-info"></div>'};defaultLoginInfoContentDecorator=function(a,b){var c="";if(b.isConnected())var c=b.currentUser.data("screen_name"),d=b.currentUser.data("profile_image_url"),c='<div class="jta-login-info-profile-image"><a href="http://twitter.com/'+c+'" target="_blank"><img src="'+d+'" alt="'+c+'" title="'+c+'"/></a></div><div class="jta-login-info-block"><div class="jta-login-info-screen-name"><a href="http://twitter.com/'+c+'" target="_blank">'+
c+'</a></div><div class="jta-login-info-sign-out">'+a._resourceBundle._("Sign out")+'</div></div><div class="jta-clear">&nbsp;</div>';return c};defaultFollowButtonDecorator=function(){return'<div class="jta-follow-button"></div>'};defaultTweetBoxDecorator=function(){return'<div class="jta-tweet-box"></div>'};defaultLinkDecorator=function(a){return a.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1" class="jta-tweet-a jta-tweet-link" target="_blank" rel="nofollow">$1</a>')};
defaultUsernameDecorator=function(a){return isAnywherePresent()?a:a.replace(/\B@(\w+)/gi,'@<a href="http://twitter.com/$1" class="jta-tweet-a twitter-anywhere-user" target="_blank" rel="nofollow">$1</a>')};defaultHashtagDecorator=function(a){return a.replace(/#([a-zA-Z0-9_]+)/gi,'<a href="http://search.twitter.com/search?q=%23$1" class="jta-tweet-a jta-tweet-hashtag" title="#$1" target="_blank" rel="nofollow">#$1</a>')};defaultLoadingDecorator=function(a){return'<li class="jta-loading">'+a._resourceBundle._("loading")+
" ...</li>"};defaultErrorDecorator=function(a,b){return'<li class="jta-error">'+b._resourceBundle._("ERROR")+": "+a+"</li>"};defaultNoDataDecorator=function(a){return'<li class="jta-nodata">'+a._resourceBundle._("No more data")+"</li>"};defaultTweetFilter=function(){return!0};defaultTweetVisualizer=function(a,b,c){a[c](b)};defaultLoadingIndicatorVisualizer=function(a,b,c,d){defaultVisualizer(a,b,"append","fadeIn",600,"fadeOut",200,d)};defaultAutorefreshTriggerVisualizer=function(a,b,c,d){defaultVisualizer(a,
b,"prepend","slideDown",600,"fadeOut",200,d)};defaultVisualizer=function(a,b,c,d,e,f,j,g){var i=function(){g&&g()};if(a)b.hide(),a[c](b),b[d](e,i);else b[f](j,function(){b.remove();i()})};defaultOnDataRequestHandler=function(){return!0};defaultOnRateLimitDataHandler=function(){};defaultOnOptionsInitializingHandler=function(){};updateLoginInfoElement=function(a,b){a._loginInfoElement&&a.loginInfoContentDecorator&&(a._loginInfoElement.children().remove(),a._loginInfoElement.append(a.loginInfoContentDecorator(a,
b)),e(a._baseSelector+" .jta-login-info-sign-out").bind("click",function(){twttr.anywhere.signOut()}))};getFeedUrl=function(a,b){var c="https:"==document.location.protocol?"https:":"http:";a.searchParams?c+="//search.twitter.com/search.json?"+(a.searchParams instanceof Array?a.searchParams.join("&"):a.searchParams)+"&rpp=100":a.list?c="favorites"==a.list?c+("//api.twitter.com/1/favorites/"+a.username+".json?count=20"):c+("//api.twitter.com/1/"+a.username+"/lists/"+a.list+"/statuses.json?per_page=20"):
(c+="//api.twitter.com/1/statuses/user_timeline.json?screen_name="+a.username+"&count=20",a._tweetFeedConfig.includeRetweets&&(c+="&include_rts=true"));b&&(c+=(a._tweetFeedConfig._maxId?"&max_id="+a._tweetFeedConfig._maxId:"")+"&page="+a._tweetFeedConfig._pageParam);return c+"&callback=?"};isAnywherePresent=function(){return"undefined"!=typeof twttr&&"undefined"!=typeof twttr.anywhere};clearTweetFeed=function(a){a._tweetFeedElement&&a._tweetFeedElement.empty()};setupOptions=function(a){a._resourceBundle=
JTA_I18N.getResourceBundle("jTweetsAnywhere",a.locale);a._tweetBoxConfig.label=a._resourceBundle._("What's happening?");if("string"!=typeof a.username){if(!a.searchParams)a.searchParams=["q=from:"+a.username.join(" OR from:")];a.username=a.username[0]}"object"==typeof a.showTweetFeed&&e.extend(!0,a._tweetFeedConfig,a.showTweetFeed);if("object"==typeof a.showTweetBox)e.extend(!0,a._tweetBoxConfig,a.showTweetBox),a.showTweetBox=!0;if("object"==typeof a.showConnectButton)a._connectButtonConfig=a.showConnectButton,
a.showConnectButton=!0;if(null==a._tweetFeedConfig.showProfileImages)a._tweetFeedConfig.showProfileImages=a.tweetProfileImagePresent;if(null==a._tweetFeedConfig.showProfileImages)a._tweetFeedConfig.showProfileImages=(a.list||a.searchParams)&&a.tweetProfileImageDecorator;if(a._tweetFeedConfig.autoConformToTwitterStyleguide)a._tweetFeedConfig.showUserFullNames=null,a._tweetFeedConfig.showTwitterBird=!0,a._tweetFeedConfig.showActionReply=!0,a._tweetFeedConfig.showActionRetweet=!0,a._tweetFeedConfig.showActionFavorite=
!0;if(null==a._tweetFeedConfig.showUserScreenNames){if(a.list||a.searchParams)a._tweetFeedConfig.showUserScreenNames=!0;if(!a.tweetUsernameDecorator)a._tweetFeedConfig.showUserScreenNames=!1}if(null==a._tweetFeedConfig.showUserFullNames){if(a.list||a.searchParams)a._tweetFeedConfig.showUserFullNames=!0;if(!a.tweetUsernameDecorator)a._tweetFeedConfig.showUserFullNames=!1}a.count=validateRange(a.count,0,a.searchParams?100:20);a._tweetFeedConfig.autorefresh.interval=Math.max(30,a._tweetFeedConfig.autorefresh.interval);
if(0>=a._tweetFeedConfig.autorefresh.max)a._tweetFeedConfig.autorefresh.max=-1;a._tweetFeedConfig.paging._offset=0;a._tweetFeedConfig.paging._limit=a.count;if(0==a.count||!a.showTweetFeed)a.tweetFeedDecorator=null,a.tweetFeedControlsDecorator=null;if("none"==a._tweetFeedConfig.paging.mode)a.tweetFeedControlsDecorator=null;if(!a.showFollowButton)a.followButtonDecorator=null;if(!a.showTweetBox)a.tweetBoxDecorator=null;if(!a.showConnectButton)a.connectButtonDecorator=null;if(!a.showLoginInfo)a.loginInfoDecorator=
null;if(!a._tweetFeedConfig.showTwitterBird)a.tweetTwitterBirdDecorator=null;if(!a._tweetFeedConfig.showTimestamp)a.tweetTimestampDecorator=null;if(!a._tweetFeedConfig.showSource)a.tweetSourceDecorator=null;if(!a._tweetFeedConfig.showGeoLocation)a.tweetGeoLocationDecorator=null;if(!a._tweetFeedConfig.showInReplyTo)a.tweetInReplyToDecorator=null;if(!a._tweetFeedConfig.showActionReply)a.tweetActionReplyDecorator=null;if(!a._tweetFeedConfig.showActionRetweet)a.tweetActionRetweetDecorator=null;if(!a._tweetFeedConfig.showActionFavorite)a.tweetActionFavoriteDecorator=
null};setupAutorefresh=function(a){a._tweetFeedConfig.autorefresh._startTime=(new Date).getTime();startAutorefresh(a);startTimestampRefresh(a)};populateTweetFeed=function(a){a.tweetDecorator&&a._tweetFeedElement&&getPagedTweets(a,function(a,c){c._tweetFeedConfig._clearBeforePopulate&&clearTweetFeed(c);hideLoadingIndicator(c,function(){e.each(a,function(a,b){c.tweetVisualizer(c._tweetFeedElement,e(c.tweetDecorator(b,c)),"append",c)});if(c._tweetFeedConfig._noData&&c.noDataDecorator&&!c._tweetFeedConfig._noDataElement)c._tweetFeedConfig._noDataElement=
e(c.noDataDecorator(c)),c._tweetFeedElement.append(c._tweetFeedConfig._noDataElement);c._tweetFeedConfig._clearBeforePopulate&&c._tweetFeedElement.scrollTop(0);addHovercards(c)})})};populateTweetFeed2=function(a){if(a._tweetFeedElement&&0<a._autorefreshTweetsCache.length)if("trigger-insert"==a._tweetFeedConfig.autorefresh.mode)if(a._tweetFeedConfig.autorefresh._triggerElement)a.tweetFeedAutorefreshTriggerContentDecorator&&a._tweetFeedConfig.autorefresh._triggerElement.html(a.tweetFeedAutorefreshTriggerContentDecorator(a._autorefreshTweetsCache.length,
a));else{if(a.tweetFeedAutorefreshTriggerDecorator)a._tweetFeedConfig.autorefresh._triggerElement=e(a.tweetFeedAutorefreshTriggerDecorator(a._autorefreshTweetsCache.length,a)),a._tweetFeedConfig.autorefresh._triggerElement.bind("click",function(){a.autorefreshTriggerVisualizer(null,a._tweetFeedConfig.autorefresh._triggerElement,a,function(){insertTriggerTweets(a)});a._tweetFeedConfig.autorefresh._triggerElement=null}),a.autorefreshTriggerVisualizer(a._tweetFeedElement,a._tweetFeedConfig.autorefresh._triggerElement,
a)}else insertTriggerTweets(a)};insertTriggerTweets=function(a){if(a.tweetDecorator&&0<a._autorefreshTweetsCache.length){for(;0<a._autorefreshTweetsCache.length;){var b=a._autorefreshTweetsCache.pop();a._tweetsCache.unshift(b);a._tweetFeedConfig.paging._offset++;a.tweetVisualizer(a._tweetFeedElement,e(a.tweetDecorator(b,a)),"prepend",a)}addHovercards(a)}};addHovercards=function(a){isAnywherePresent()&&twttr.anywhere(function(b){b(a._baseSelector+" .jta-tweet-list").hovercards({expanded:a._tweetFeedConfig.expandHovercards});
b(a._baseSelector+" .jta-tweet-profile-image img").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.alt}});b(a._baseSelector+" .jta-tweet-retweeter-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.text}});b(a._baseSelector+" .jta-tweet-user-screen-name-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,username:function(a){return a.text}});b(a._baseSelector+" .jta-tweet-user-full-name-link").hovercards({expanded:a._tweetFeedConfig.expandHovercards,
username:function(a){return a.name}})})};populateAnywhereControls=function(a){isAnywherePresent()&&twttr.anywhere(function(b){a.tweetBoxDecorator&&b(a._baseSelector+" .jta-tweet-box").tweetBox(a._tweetBoxConfig);a.followButtonDecorator&&b(a._baseSelector+" .jta-follow-button").followButton(a.username);if(a.connectButtonDecorator){var c=e.extend({authComplete:function(){updateLoginInfoElement(a,b)},signOut:function(){updateLoginInfoElement(a,b)}},a._connectButtonConfig);b(a._baseSelector+" .jta-connect-button").connectButton(c);
updateLoginInfoElement(a,b)}})};bindEventHandlers=function(a){a.tweetFeedControlsDecorator&&("prev-next"==a._tweetFeedConfig.paging.mode?(e(a._baseSelector+" .jta-tweet-list-controls-button-prev").bind("click",function(){!isLoading(a)&&0<a._tweetFeedConfig.paging._offset&&prevPage(a,!0)}),e(a._baseSelector+" .jta-tweet-list-controls-button-next").bind("click",function(){isLoading(a)||nextPage(a,!0)})):"endless-scroll"==a._tweetFeedConfig.paging.mode?a._tweetFeedElement.bind("scroll",function(){!isLoading(a)&&
e(this)[0].scrollHeight-e(this).scrollTop()==e(this).outerHeight()&&nextPage(a,!1)}):e(a._baseSelector+" .jta-tweet-list-controls-button-more").bind("click",function(){isLoading(a)||nextPage(a,!1)}))};nextPage=function(a,b){doPage(a,b,Math.min(a._tweetFeedConfig.paging._offset+a._tweetFeedConfig.paging._limit,a._tweetsCache.length))};prevPage=function(a,b){doPage(a,b,Math.max(0,a._tweetFeedConfig.paging._offset-a._tweetFeedConfig.paging._limit))};doPage=function(a,b,c){a._tweetFeedConfig.paging._offset=
c;a._tweetFeedConfig._clearBeforePopulate=b;populateTweetFeed(a)};startAutorefresh=function(a){"none"!=a._tweetFeedConfig.autorefresh.mode&&"prev-next"!=a._tweetFeedConfig.paging.mode&&0!=a._tweetFeedConfig.autorefresh.duration&&(0>a._tweetFeedConfig.autorefresh.duration||(new Date).getTime()-a._tweetFeedConfig.autorefresh._startTime<=1E3*a._tweetFeedConfig.autorefresh.duration)&&window.setTimeout(function(){processAutorefresh(a)},1E3*a._tweetFeedConfig.autorefresh.interval)};stopAutorefresh=function(a){a._tweetFeedConfig.autorefresh.duration=
0};processAutorefresh=function(a){0!=a._tweetFeedConfig.autorefresh.duration&&(getRateLimitedData(a,!0,getFeedUrl(a,!1),function(a,c){var d=(a.results||a).slice(0);d.reverse();e.each(d,function(a,b){if(b.id_str)b.id=b.id_str;if(b.in_reply_to_status_id_str)b.in_reply_to_status_id=b.in_reply_to_status_id_str;if(!isTweetInAutorefreshCache(b,c)&&!isTweetInCache(b,c)&&c.tweetFilter(b,c)&&(c._autorefreshTweetsCache.unshift(b),0<c._tweetFeedConfig.autorefresh.max))for(;c._autorefreshTweetsCache.length>c._tweetFeedConfig.autorefresh.max;)c._autorefreshTweetsCache.pop()});
populateTweetFeed2(c)}),startAutorefresh(a))};startTimestampRefresh=function(a){a.tweetTimestampDecorator&&"object"==typeof a._tweetFeedConfig.showTimestamp&&0<a._tweetFeedConfig.showTimestamp.refreshInterval&&window.setTimeout(function(){processTimestampRefresh(a)},1E3*a._tweetFeedConfig.showTimestamp.refreshInterval)};processTimestampRefresh=function(a){e.each(a._tweetFeedElement.find(".jta-tweet-timestamp-link"),function(b,c){var d=e(c).attr("data-timestamp");e(c).html(a.tweetTimestampFormatter(d,
a))});startTimestampRefresh(a)};isTweetInCache=function(a,b){for(var c=b._tweetsCache.length,d=0;d<c;d++)if(a.id==b._tweetsCache[d].id)return!0;return!1};isTweetInAutorefreshCache=function(a,b){for(var c=b._autorefreshTweetsCache.length,d=0;d<c;d++)if(a.id==b._autorefreshTweetsCache[d].id)return!0;return!1};showLoadingIndicator=function(a){if(a._tweetFeedElement&&a.loadingDecorator&&!a._loadingIndicatorElement)a._loadingIndicatorElement=e(a.loadingDecorator(a)),a.loadingIndicatorVisualizer(a._tweetFeedElement,
a._loadingIndicatorElement,a,null),a._tweetFeedElement.scrollTop(1E6)};hideLoadingIndicator=function(a,b){a._loadingIndicatorElement?(a.loadingIndicatorVisualizer(null,a._loadingIndicatorElement,a,b),a._loadingIndicatorElement=null):b&&b()};isLoading=function(a){return null!=a._loadingIndicatorElement};formatDate=function(a){return a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3")};getUserScreenName=function(a){return a.user?a.user.screen_name:a.from_user};getScreenName=function(a){a=
a.retweeted_status||a;return a.user?a.user.screen_name:a.from_user};getFullName=function(a){a=a.retweeted_status||a;return a.user?a.user.name:void 0};validateRange=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};showError=function(a,b){a.errorDecorator&&a._tweetFeedElement&&a._tweetFeedElement.append(a.errorDecorator(b,a))};getPagedTweets=function(a,b){a._tweetFeedConfig._recLevel=0;getRecPagedTweets(a,a._tweetFeedConfig.paging._offset,a._tweetFeedConfig.paging._limit,b)};getRecPagedTweets=function(a,
b,c,d){++a._tweetFeedConfig._recLevel;if(b+c<=a._tweetsCache.length||3<a._tweetFeedConfig._recLevel||a._tweetFeedConfig._noData){b+c>a._tweetsCache.length&&(c=Math.max(0,a._tweetsCache.length-b));for(var h=[],f=0;f<c;f++)h[f]=a._tweetsCache[b+f];d(h,a)}else++a._tweetFeedConfig._pageParam,getRateLimitedData(a,!1,getFeedUrl(a,!0),function(a,f){var h=a.results||a;0==h.length?f._tweetFeedConfig._noData=!0:e.each(h,function(a,b){if(b.id_str)b.id=b.id_str;if(b.in_reply_to_status_id_str)b.in_reply_to_status_id=
b.in_reply_to_status_id_str;if(!f._tweetFeedConfig._maxId)f._tweetFeedConfig._maxId=b.id;f.tweetFilter(b,f)&&f._tweetsCache.push(b)});getRecPagedTweets(f,b,c,d)})};getRateLimitedData=function(a,b,c,d){getRateLimit(a,function(e){e&&0>=e.remaining_hits?(a._stats.rateLimitPreventionCount++,hideLoadingIndicator(a,null)):getData(a,b,c,d)})};getData=function(a,b,c,d){a._stats.dataRequestCount++;a.onDataRequestHandler(a._stats,a)?(b||showLoadingIndicator(a),a.tweetDataProvider(c,function(b){b.error?showError(a,
b.error):d(b,a)})):hideLoadingIndicator(a,null)};getRateLimit=function(a,b){a.rateLimitDataProvider(function(c){a._stats.rateLimit=c;a.onRateLimitDataHandler(a._stats,a);b(c)})};defaultTweetDataProvider=function(a,b){e.getJSON(a,b)};defaultRateLimitDataProvider=function(a){e.getJSON("http://api.twitter.com/1/account/rate_limit_status.json?callback=?",a)}})(jQuery);


/* Complement script dependency for jtweetsanywhere above */
JTA_I18N.addResourceBundle("jTweetsAnywhere","de",{More:"Mehr",Prev:"Zur&uuml;ck",Next:"Weiter","%count% new tweet":"%count% neuer Tweet","%count% new tweets":"%count% neue Tweets","What's happening?":"Was ist los?","%secs% second ago":"vor %secs% Sekunde","%secs% seconds ago":"vor %secs% Sekunden","%mins% minute ago":"vor %mins% Minute","%mins% minutes ago":"vor %mins% Minuten","%hours% hour ago":"vor %hours% Stunde","%hours% hours ago":"vor %hours% Stunden","%days% day ago":"vor %days% Tag","%days% days ago":"vor %days% Tagen",
via:"via","on Twitter":"bei Twitter",Reply:"Antworten",Retweet:"Retweet",Favorite:"Als Favorit markieren",here:"hier","in reply to":"als Antwort auf",from:"von"," and %rtc% other":" und %rtc% Weiteren"," and %rtc% others":" und %rtc% Weiteren","Retweeted by":"Retweetet von","Sign out":"Abmelden",loading:"laden",ERROR:"FEHLER",$$monthNames:"Jan,Feb,M&auml;r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(",")});










/* 
 *
 * supersized.core.3.2.0.min.js */
(function(a){a(document).ready(function(){a("body").append('<div id="supersized"></div>')});a.supersized=function(b){var c="#supersized",d=this;d.$el=a(c);d.el=c;vars=a.supersized.vars;d.$el.data("supersized",d);api=d.$el.data("supersized");d.init=function(){a.supersized.vars.options=a.extend({},a.supersized.defaultOptions,b);d.options=a.supersized.vars.options;d._build()};d._build=function(){d._start()};d._start=function(){if(d.options.start_slide){vars.current_slide=d.options.start_slide-1}else{vars.current_slide=Math.floor(Math.random()*d.options.slides.length)}var f=d.options.new_window?' target="_blank"':"";imageLink=(api.getField("url"))?"href='"+api.getField("url")+"'":"";var e=a('<img src="'+api.getField("image")+'"/>');e.appendTo(d.el).wrap('<a class="image-loading activeslide" '+imageLink+f+"></a>").css("visibility","hidden");e.load(function(){d._origDim(a(this));d.resizeNow();d.launch()});d.$el.css("visibility","hidden")};d.launch=function(){d.$el.css("visibility","visible");a(window).resize(function(){d.resizeNow()})};d.resizeNow=function(){return d.$el.each(function(){a("img",d.el).each(function(){thisSlide=a(this);var f=(thisSlide.data("origHeight")/thisSlide.data("origWidth")).toFixed(2);var e=d.$el.width(),h=d.$el.height(),i;if(d.options.fit_always){if((h/e)>f){g()}else{j()}}else{if((h<=d.options.min_height)&&(e<=d.options.min_width)){if((h/e)>f){d.options.fit_landscape&&f<1?g(true):j(true)}else{d.options.fit_portrait&&f>=1?j(true):g(true)}}else{if(e<=d.options.min_width){if((h/e)>f){d.options.fit_landscape&&f<1?g(true):j()}else{d.options.fit_portrait&&f>=1?j():g(true)}}else{if(h<=d.options.min_height){if((h/e)>f){d.options.fit_landscape&&f<1?g():j(true)}else{d.options.fit_portrait&&f>=1?j(true):g()}}else{if((h/e)>f){d.options.fit_landscape&&f<1?g():j()}else{d.options.fit_portrait&&f>=1?j():g()}}}}}function g(k){if(k){if(thisSlide.width()<e||thisSlide.width()<d.options.min_width){if(thisSlide.width()*f>=d.options.min_height){thisSlide.width(d.options.min_width);thisSlide.height(thisSlide.width()*f)}else{j()}}}else{if(d.options.min_height>=h&&!d.options.fit_landscape){if(e*f>=d.options.min_height||(e*f>=d.options.min_height&&f<=1)){thisSlide.width(e);thisSlide.height(e*f)}else{if(f>1){thisSlide.height(d.options.min_height);thisSlide.width(thisSlide.height()/f)}else{if(thisSlide.width()<e){thisSlide.width(e);thisSlide.height(thisSlide.width()*f)}}}}else{thisSlide.width(e);thisSlide.height(e*f)}}}function j(k){if(k){if(thisSlide.height()<h){if(thisSlide.height()/f>=d.options.min_width){thisSlide.height(d.options.min_height);thisSlide.width(thisSlide.height()/f)}else{g(true)}}}else{if(d.options.min_width>=e){if(h/f>=d.options.min_width||f>1){thisSlide.height(h);thisSlide.width(h/f)}else{if(f<=1){thisSlide.width(d.options.min_width);thisSlide.height(thisSlide.width()*f)}}}else{thisSlide.height(h);thisSlide.width(h/f)}}}if(thisSlide.parent().hasClass("image-loading")){a(".image-loading").removeClass("image-loading")}if(d.options.horizontal_center){a(this).css("left",(e-a(this).width())/2)}if(d.options.vertical_center){a(this).css("top",(h-a(this).height())/2)}});if(d.options.image_protect){a("img",d.el).bind("contextmenu mousedown",function(){return false})}return false})};d._origDim=function(e){e.data("origWidth",e.width()).data("origHeight",e.height()).css("visibility","visible")};d.getField=function(e){return d.options.slides[vars.current_slide][e]};d.init()};a.supersized.vars={current_slide:0,options:{}};a.supersized.defaultOptions={start_slide:1,new_window:1,image_protect:1,min_width:0,min_height:0,vertical_center:1,horizontal_center:1,fit_always:0,fit_portrait:1,fit_landscape:0};a.fn.supersized=function(b){return this.each(function(){(new a.supersized(b))})}})(jQuery);







// Sticky Plugin
// =============
// Author: Anthony Garand
// Date: 2/14/2011
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen

(function($){
	$.fn.sticky = function(options) {
		var defaults = {
			topSpacing: 0,
			className: 'is-sticky'
		};  
		var options = $.extend(defaults, options);
		return this.each(function() {
			var topPadding = options.topSpacing,
			stickyElement = $(this),
			stickyElementHeight = stickyElement.outerHeight(),
			stickyElementWidth = stickyElement.outerWidth(),
			elementPosition = stickyElement.offset().top - $(window).scrollTop(),
			regPosition = stickyElement.offset().top,
			stickyId = stickyElement.attr("id");
			stickyElement.wrapAll('<div id="' + stickyId + 'StickyWrapper" class="clearfix"></div>');
			stickyElement.parent().css("height",stickyElementHeight).css("width",stickyElementWidth);
			$(window).scroll(function(){
				elementPosition = stickyElement.offset().top - $(window).scrollTop();
				if (elementPosition <= topPadding) {
					stickyElement.css("position","fixed").css("top",topPadding).addClass(options.className);
				}
				if ($(window).scrollTop() <= regPosition - topPadding) {
					stickyElement.css("position","static").css("top",$(window).scrollTop()).removeClass(options.className);
				}
			});
		});
	};
})(jQuery);










/* hoverIntent by Brian Cherne */

(function($){
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
	
})(jQuery);






/*	
 *	jQuery carouFredSel 5.5.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(I($){8($.1R.1K)J;$.1R.1K=I(y,z){8(1i.V==0){1c(M,\'5O 4C 6x 1o "\'+1i.3Y+\'".\');J 1i}8(1i.V>1){J 1i.1P(I(){$(1i).1K(y,z)})}F A=1i,$19=1i[0];8(A.1q(\'4t\')){F B=A.1A(\'6a\');A.X(\'68\',M)}Q{F B=O}A.44=I(o,b,c){o=4p($19,o);8(o.1c){H.1c=o.1c;1c(H,\'6w "1c" 7v 7d 73 6R 3J 5B 6B 4v-1k.\')}F e=[\'G\',\'1m\',\'T\',\'17\',\'1a\',\'1b\'];1o(F a=0,l=e.V;a<l;a++){o[e[a]]=4p($19,o[e[a]])}8(K o.1m==\'14\'){8(o.1m<=50)o.1m={\'G\':o.1m};Q o.1m={\'1j\':o.1m}}Q{8(K o.1m==\'1l\')o.1m={\'1I\':o.1m}}8(K o.G==\'14\')o.G={\'P\':o.G};Q 8(o.G==\'1d\')o.G={\'P\':o.G,\'S\':o.G,\'1u\':o.G};8(K o.G!=\'1k\')o.G={};8(b)2y=$.26(M,{},$.1R.1K.4x,o);7=$.26(M,{},$.1R.1K.4x,o);8(K 7.G.12!=\'1k\')7.G.12={};8(7.G.2K==0&&K c==\'14\'){7.G.2K=c}C.4A=(7.2L);C.2r=(7.2r==\'4E\'||7.2r==\'1s\')?\'1a\':\'17\';F f=[[\'S\',\'3c\',\'27\',\'1u\',\'5D\',\'2Z\',\'1s\',\'32\',\'1E\',0,1,2,3],[\'1u\',\'5D\',\'2Z\',\'S\',\'3c\',\'27\',\'32\',\'1s\',\'3V\',3,2,1,0]];F g=f[0].V,5G=(7.2r==\'2U\'||7.2r==\'1s\')?0:1;7.d={};1o(F d=0;d<g;d++){7.d[f[0][d]]=f[5G][d]}F h=A.11();1x(K 7.G.P){W\'1k\':7.G.12.2M=7.G.P.2M;7.G.12.2i=7.G.P.2i;7.G.P=O;18;W\'1l\':8(7.G.P==\'1d\'){7.G.12.1d=M}Q{7.G.12.2p=7.G.P}7.G.P=O;18;W\'I\':7.G.12.2p=7.G.P;7.G.P=O;18}8(K 7.G.1v==\'1y\'){7.G.1v=(h.1v(\':2P\').V>0)?\':P\':\'*\'}8(7[7.d[\'S\']]==\'T\'){7[7.d[\'S\']]=3C(h,7,\'27\')}8(4n(7[7.d[\'S\']])&&!7.2L){7[7.d[\'S\']]=3Z(3g($1D.3e(),7,\'3c\'),7[7.d[\'S\']]);C.4A=M}8(7[7.d[\'1u\']]==\'T\'){7[7.d[\'1u\']]=3C(h,7,\'2Z\')}8(!7.G[7.d[\'S\']]){8(7.2L){1c(M,\'6k a \'+7.d[\'S\']+\' 1o 5B G!\');7.G[7.d[\'S\']]=3C(h,7,\'27\')}Q{7.G[7.d[\'S\']]=(5p(h,7,\'27\'))?\'1d\':h[7.d[\'27\']](M)}}8(!7.G[7.d[\'1u\']]){7.G[7.d[\'1u\']]=(5p(h,7,\'2Z\'))?\'1d\':h[7.d[\'2Z\']](M)}8(!7[7.d[\'1u\']]){7[7.d[\'1u\']]=7.G[7.d[\'1u\']]}8(!7.G.P&&!7.2L){8(7.G[7.d[\'S\']]==\'1d\'){7.G.12.1d=M}8(!7.G.12.1d){8(K 7[7.d[\'S\']]==\'14\'){7.G.P=1O.35(7[7.d[\'S\']]/7.G[7.d[\'S\']])}Q{F i=3g($1D.3e(),7,\'3c\');7.G.P=1O.35(i/7.G[7.d[\'S\']]);7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];8(!7.G.12.2p)7.1B=O}8(7.G.P==\'6Z\'||7.G.P<1){1c(M,\'2b a 4q 14 3T P G: 6k 3J "1d".\');7.G.12.1d=M}}}8(!7[7.d[\'S\']]){7[7.d[\'S\']]=\'1d\';8(!7.2L&&7.G.1v==\'*\'&&!7.G.12.1d&&7.G[7.d[\'S\']]!=\'1d\'){7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];7.1B=O}}8(7.G.12.1d){7.3S=(7[7.d[\'S\']]==\'1d\')?3g($1D.3e(),7,\'3c\'):7[7.d[\'S\']];8(7.1B===O){7[7.d[\'S\']]=\'1d\'}7.G.P=2J(h,7,0)}Q 8(7.G.1v!=\'*\'){7.G.12.4c=7.G.P;7.G.P=3R(h,7,0)}8(K 7.1B==\'1y\'){7.1B=(7[7.d[\'S\']]==\'1d\')?O:\'5r\'}7.G.P=2N(7.G.P,7,7.G.12.2p,$19);7.G.12.2q=7.G.P;7.1t=O;8(7.2L){8(!7.G.12.2M)7.G.12.2M=7.G.P;8(!7.G.12.2i)7.G.12.2i=7.G.P;7.1B=O;7.1h=[0,0,0,0];F j=$1D.1W(\':P\');8(j)$1D.3f();F k=3Z(3g($1D.3e(),7,\'3c\'),7[7.d[\'S\']]);8(K 7[7.d[\'S\']]==\'14\'&&k<7[7.d[\'S\']]){k=7[7.d[\'S\']]}8(j)$1D.3j();F m=5k(1O.2O(k/7.G[7.d[\'S\']]),7.G.12);8(m>h.V){m=h.V}F n=1O.35(k/m),5g=7[7.d[\'1u\']],69=4n(5g);h.1P(I(){F a=$(1i),5e=n-66(a,7,\'72\');a[7.d[\'S\']](5e);8(69){a[7.d[\'1u\']](3Z(5e,5g))}});7.G.P=m;7.G[7.d[\'S\']]=n;7[7.d[\'S\']]=m*n}Q{7.1h=5T(7.1h);8(7.1B==\'32\')7.1B=\'1s\';8(7.1B==\'5a\')7.1B=\'2U\';1x(7.1B){W\'5r\':W\'1s\':W\'2U\':8(7[7.d[\'S\']]!=\'1d\'){F p=4l(3p(h,7),7);7.1t=M;7.1h[7.d[1]]=p[1];7.1h[7.d[3]]=p[0]}18;2z:7.1B=O;7.1t=(7.1h[0]==0&&7.1h[1]==0&&7.1h[2]==0&&7.1h[3]==0)?O:M;18}}8(K 7.2t==\'1r\'&&7.2t)7.2t=\'7D\'+A.6L(\'6Q\');8(K 7.G.3r!=\'14\')7.G.3r=7.G.P;8(K 7.1m.1j!=\'14\')7.1m.1j=5N;8(K 7.1m.G==\'1y\')7.1m.G=(7.G.12.1d||7.G.1v!=\'*\')?\'P\':7.G.P;7.T=3w($19,7.T,\'T\');7.17=3w($19,7.17);7.1a=3w($19,7.1a);7.1b=3w($19,7.1b,\'1b\');7.T=$.26(M,{},7.1m,7.T);7.17=$.26(M,{},7.1m,7.17);7.1a=$.26(M,{},7.1m,7.1a);7.1b=$.26(M,{},7.1m,7.1b);8(K 7.1b.48!=\'1r\')7.1b.48=O;8(K 7.1b.34!=\'I\'&&7.1b.34!==O)7.1b.34=$.1R.1K.5M;8(K 7.T.1G!=\'1r\')7.T.1G=M;8(K 7.T.56!=\'14\')7.T.56=0;8(K 7.T.3W==\'1y\')7.T.3W=M;8(K 7.T.55!=\'1r\')7.T.55=M;8(K 7.T.3q!=\'14\')7.T.3q=(7.T.1j<10)?7l:7.T.1j*5;8(7.2j){7.2j=4Z(7.2j)}8(H.1c){1c(H,\'3n S: \'+7.S);1c(H,\'3n 1u: \'+7.1u);8(7.3S)1c(H,\'71 \'+7.d[\'S\']+\': \'+7.3S);1c(H,\'5A 76: \'+7.G.S);1c(H,\'5A 7i: \'+7.G.1u);1c(H,\'4i 3T G P: \'+7.G.P);8(7.T.1G)1c(H,\'4i 3T G 4Y 6A: \'+7.T.G);8(7.17.Y)1c(H,\'4i 3T G 4Y 4X: \'+7.17.G);8(7.1a.Y)1c(H,\'4i 3T G 4Y 5x: \'+7.1a.G)}};A.5t=I(){A.1q(\'4t\',M);F a={\'4U\':A.16(\'4U\'),\'4T\':A.16(\'4T\'),\'3K\':A.16(\'3K\'),\'32\':A.16(\'32\'),\'2U\':A.16(\'2U\'),\'5a\':A.16(\'5a\'),\'1s\':A.16(\'1s\'),\'S\':A.16(\'S\'),\'1u\':A.16(\'1u\'),\'4R\':A.16(\'4R\'),\'1E\':A.16(\'1E\'),\'3V\':A.16(\'3V\'),\'4P\':A.16(\'4P\')};1x(a.3K){W\'4N\':F b=\'4N\';18;W\'5X\':F b=\'5X\';18;2z:F b=\'6S\'}$1D.16(a).16({\'6T\':\'2P\',\'3K\':b});A.1q(\'5V\',a).16({\'4U\':\'1s\',\'4T\':\'4g\',\'3K\':\'4N\',\'32\':0,\'1s\':0,\'4R\':0,\'1E\':0,\'3V\':0,\'4P\':0});8(7.1t){A.11().1P(I(){F m=2o($(1i).16(7.d[\'1E\']));8(2s(m))m=0;$(1i).1q(\'1V\',m)})}};A.5S=I(){A.4L();A.13(L(\'4J\',H),I(e,a){e.1e();8(!C.22){8(7.T.Y){7.T.Y.31(2l(\'43\',H))}}C.22=M;8(7.T.1G){7.T.1G=O;A.X(L(\'2X\',H),a)}J M});A.13(L(\'4I\',H),I(e){e.1e();8(C.1U){3P(R)}J M});A.13(L(\'2X\',H),I(e,a,b){e.1e();1F=3d(1F);8(a&&C.1U){R.22=M;F c=2C()-R.2Q;R.1j-=c;8(R.1p)R.1p.1j-=c;8(R.1Q)R.1Q.1j-=c;3P(R,O)}8(!C.1Y&&!C.1U){8(b)1F.3v+=2C()-1F.2Q}8(!C.1Y){8(7.T.Y){7.T.Y.31(2l(\'6s\',H))}}C.1Y=M;8(7.T.6d){F d=7.T.3q-1F.3v,3G=3F-1O.2O(d*3F/7.T.3q);7.T.6d.1z($19,3G,d)}J M});A.13(L(\'1G\',H),I(e,b,c,d){e.1e();1F=3d(1F);F v=[b,c,d],t=[\'1l\',\'14\',\'1r\'],a=2Y(v,t);F b=a[0],c=a[1],d=a[2];8(b!=\'17\'&&b!=\'1a\')b=C.2r;8(K c!=\'14\')c=0;8(K d!=\'1r\')d=O;8(d){C.22=O;7.T.1G=M}8(!7.T.1G){e.23();J 1c(H,\'3n 43: 2b 2R.\')}8(C.1Y){8(7.T.Y){7.T.Y.2v(2l(\'43\',H));7.T.Y.2v(2l(\'6s\',H))}}C.1Y=O;1F.2Q=2C();F f=7.T.3q+c;3x=f-1F.3v;3G=3F-1O.2O(3x*3F/f);1F.T=7a(I(){8(7.T.5Q){7.T.5Q.1z($19,3G,3x)}8(C.1U){A.X(L(\'1G\',H),b)}Q{A.X(L(b,H),7.T)}},3x);8(7.T.5I){7.T.5I.1z($19,3G,3x)}J M});A.13(L(\'2H\',H),I(e){e.1e();8(R.22){R.22=O;C.1Y=O;C.1U=M;R.2Q=2C();2f(R)}Q{A.X(L(\'1G\',H))}J M});A.13(L(\'17\',H)+\' \'+L(\'1a\',H),I(e,b,f,g){e.1e();8(C.22||A.1W(\':2P\')){e.23();J 1c(H,\'3n 43 6I 2P: 2b 2R.\')}8(7.G.3r>=N.U){e.23();J 1c(H,\'2b 5F G (\'+N.U+\', \'+7.G.3r+\' 5E): 2b 2R.\')}F v=[b,f,g],t=[\'1k\',\'14/1l\',\'I\'],a=2Y(v,t);F b=a[0],f=a[1],g=a[2];F h=e.4w.3U(H.3o.3B.V);8(K b!=\'1k\'||b==2c)b=7[h];8(K g==\'I\')b.24=g;8(K f!=\'14\'){8(7.G.1v!=\'*\'){f=\'P\'}Q{F i=[f,b.G,7[h].G];1o(F a=0,l=i.V;a<l;a++){8(K i[a]==\'14\'||i[a]==\'5y\'||i[a]==\'P\'){f=i[a];18}}}1x(f){W\'5y\':e.23();J A.1A(h+\'7j\',[b,g]);18;W\'P\':8(!7.G.12.1d&&7.G.1v==\'*\'){f=7.G.P}18}}8(R.22){A.X(L(\'2H\',H));A.X(L(\'3k\',H),[h,[b,f,g]]);e.23();J 1c(H,\'3n 7o 2R.\')}8(b.1j>0){8(C.1U){8(b.3k)A.X(L(\'3k\',H),[h,[b,f,g]]);e.23();J 1c(H,\'3n 7y 2R.\')}}8(b.4u&&!b.4u.1z($19)){e.23();J 1c(H,\'6y "4u" 6z O.\')}1F.3v=0;A.X(\'6r\'+h,[b,f]);8(7.2j){F s=7.2j,c=[b,f];1o(F j=0,l=s.V;j<l;j++){F d=h;8(!s[j][1])c[0]=s[j][0].1A(\'6c\',h);8(!s[j][2])d=(d==\'17\')?\'1a\':\'17\';c[1]=f+s[j][3];s[j][0].X(\'6r\'+d,c)}}J M});A.13(L(\'6K\',H,O),I(e,f,g){e.1e();F h=A.11();8(!7.1N){8(N.Z==0){8(7.3h){A.X(L(\'1a\',H),N.U-1)}J e.23()}}8(7.1t)1M(h,7);8(K g!=\'14\'){8(7.G.12.1d){g=47(h,7,N.U-1)}Q 8(7.G.1v!=\'*\'){F i=(K f.G==\'14\')?f.G:4V(A,7);g=6t(h,7,N.U-1,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}8(!7.1N){8(N.U-g<N.Z){g=N.U-N.Z}}7.G.12.2q=7.G.P;8(7.G.12.1d){F j=2J(h,7,N.U-g);8(7.G.P+g<=j&&g<N.U){g++;j=2J(h,7,N.U-g)}7.G.P=2N(j,7,7.G.12.2p,$19)}Q 8(7.G.1v!=\'*\'){F j=3R(h,7,N.U-g);7.G.P=2N(j,7,7.G.12.2p,$19)}8(7.1t)1M(h,7,M);8(g==0){e.23();J 1c(H,\'0 G 3J 1m: 2b 2R.\')}1c(H,\'6m \'+g+\' G 4X.\');N.Z+=g;1Z(N.Z>=N.U){N.Z-=N.U}8(!7.1N){8(N.Z==0&&f.4d)f.4d.1z($19);8(!7.3h)2T(7,N.Z,H)}A.11().1g(N.U-g,N.U).7g(A);8(N.U<7.G.P+g){A.11().1g(0,(7.G.P+g)-N.U).4f(M).3O(A)}F h=A.11(),2n=6l(h,7,g),1T=6b(h,7),28=h.1L(g-1),2d=2n.2I(),2x=1T.2I();8(7.1t)1M(h,7);8(7.1B){F p=4l(1T,7),k=p[0],2k=p[1]}Q{F k=0,2k=0}F l=(k<0)?7.1h[7.d[3]]:0;8(f.1H==\'5z\'&&7.G.P<g){F m=h.1g(7.G.12.2q,g),4m=7.G[7.d[\'S\']];m.1P(I(){F a=$(1i);a.1q(\'4j\',a.1W(\':2P\')).3f()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=36(h.1g(0,g),7,\'S\'),29=4a(2E(1T,7,M),7,!7.1t);8(m)7.G[7.d[\'S\']]=4m;8(7.1t){1M(h,7,M);8(2k>=0){1M(2d,7,7.1h[7.d[1]])}1M(28,7,7.1h[7.d[3]])}8(7.1B){7.1h[7.d[1]]=2k;7.1h[7.d[3]]=k}F o={},1w=f.1j;8(f.1H==\'4g\')1w=0;Q 8(1w==\'T\')1w=7.1m.1j/7.1m.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=20(1w,f.1I);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1u\']]==\'1d\'){R.1f.1n([$1D,29])}8(7.1t){F q=7.1h[7.d[3]];8(2x.4s(28).V){F r={};r[7.d[\'1E\']]=28.1q(\'1V\');8(k<0)28.16(r);Q R.1f.1n([28,r])}8(2x.4s(2d).V){F s={};s[7.d[\'1E\']]=2d.1q(\'1V\');R.1f.1n([2d,s])}8(2k>=0){F t={};t[7.d[\'1E\']]=2x.1q(\'1V\')+7.1h[7.d[1]];R.1f.1n([2x,t])}}Q{F q=0}o[7.d[\'1s\']]=q;F u=[2n,1T,29,1w];8(f.2a)f.2a.3E($19,u);1X.2a=3z(1X.2a,$19,u);1x(f.1H){W\'2u\':W\'2e\':W\'2G\':W\'2h\':R.1p=20(R.1j,R.1I);R.1Q=20(R.1j,R.1I);R.1j=0;18}1x(f.1H){W\'2e\':W\'2G\':W\'2h\':F v=A.4f().3O($1D);18}1x(f.1H){W\'2h\':v.11().1g(0,g).1J();W\'2e\':W\'2G\':v.11().1g(7.G.P).1J();18}1x(f.1H){W\'2u\':R.1p.1f.1n([A,{\'2g\':0}]);18;W\'2e\':v.16({\'2g\':0});R.1p.1f.1n([A,{\'S\':\'+=0\'},I(){v.1J()}]);R.1Q.1f.1n([v,{\'2g\':1}]);18;W\'2G\':R=4y(R,A,v,7,M);18;W\'2h\':R=4z(R,A,v,7,M,g);18}F w=I(){F b=7.G.P+g-N.U;8(b>0){A.11().1g(N.U).1J();2n=A.11().1g(N.U-(g-b)).3X().6e(A.11().1g(0,b).3X())}8(m){m.1P(I(){F a=$(1i);8(!a.1q(\'4j\'))a.3j()})}8(7.1t){F c=A.11().1L(7.G.P+g-1);c.16(7.d[\'1E\'],c.1q(\'1V\'))}R.1f=[];8(R.1p)R.1p=20(R.4B,R.1I);F d=I(){1x(f.1H){W\'2u\':W\'2e\':A.16(\'1v\',\'\');18}R.1Q=20(0,2c);C.1U=O;F a=[2n,1T,29];8(f.24)f.24.3E($19,a);1X.24=3z(1X.24,$19,a);8(1S.V){A.X(L(1S[0][0],H),1S[0][1]);1S.6p()}8(!C.1Y)A.X(L(\'1G\',H))};1x(f.1H){W\'2u\':R.1p.1f.1n([A,{\'2g\':1},d]);2f(R.1p);18;W\'2h\':R.1p.1f.1n([A,{\'S\':\'+=0\'},d]);2f(R.1p);18;2z:d();18}};R.1f.1n([A,o,w]);C.1U=M;A.16(7.d[\'1s\'],-(n-l));1F=3d(1F);2f(R);4D(7.2t,A.1A(L(\'3H\',H)));A.X(L(\'2B\',H),[O,29]);J M});A.13(L(\'6V\',H,O),I(e,f,g){e.1e();F h=A.11();8(!7.1N){8(N.Z==7.G.P){8(7.3h){A.X(L(\'17\',H),N.U-1)}J e.23()}}8(7.1t)1M(h,7);8(K g!=\'14\'){8(7.G.1v!=\'*\'){F i=(K f.G==\'14\')?f.G:4V(A,7);g=5w(h,7,0,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}F j=(N.Z==0)?N.U:N.Z;8(!7.1N){8(7.G.12.1d){F k=2J(h,7,g),i=47(h,7,j-1)}Q{F k=7.G.P,i=7.G.P}8(g+k>j){g=j-i}}7.G.12.2q=7.G.P;8(7.G.12.1d){F k=4F(h,7,g,j);1Z(7.G.P-g>=k&&g<N.U){g++;k=4F(h,7,g,j)}7.G.P=2N(k,7,7.G.12.2p,$19)}Q 8(7.G.1v!=\'*\'){F k=3R(h,7,g);7.G.P=2N(k,7,7.G.12.2p,$19)}8(7.1t)1M(h,7,M);8(g==0){e.23();J 1c(H,\'0 G 3J 1m: 2b 2R.\')}1c(H,\'6m \'+g+\' G 5x.\');N.Z-=g;1Z(N.Z<0){N.Z+=N.U}8(!7.1N){8(N.Z==7.G.P&&f.4d)f.4d.1z($19);8(!7.3h)2T(7,N.Z,H)}8(N.U<7.G.P+g){A.11().1g(0,(7.G.P+g)-N.U).4f(M).3O(A)}F h=A.11(),2n=4G(h,7),1T=4H(h,7,g),28=h.1L(g-1),2d=2n.2I(),2x=1T.2I();8(7.1t)1M(h,7);8(7.1B){F p=4l(1T,7),l=p[0],2k=p[1]}Q{F l=0,2k=0}8(f.1H==\'5z\'&&7.G.12.2q<g){F m=h.1g(7.G.12.2q,g),4m=7.G[7.d[\'S\']];m.1P(I(){F a=$(1i);a.1q(\'4j\',a.1W(\':2P\')).3f()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=36(h.1g(0,g),7,\'S\'),29=4a(2E(1T,7,M),7,!7.1t);8(m)7.G[7.d[\'S\']]=4m;8(7.1B){8(7.1h[7.d[1]]<0){7.1h[7.d[1]]=0}}8(7.1t){1M(h,7,M);1M(2d,7,7.1h[7.d[1]])}8(7.1B){7.1h[7.d[1]]=2k;7.1h[7.d[3]]=l}F o={},1w=f.1j;8(f.1H==\'4g\')1w=0;Q 8(1w==\'T\')1w=7.1m.1j/7.1m.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=20(1w,f.1I);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1u\']]==\'1d\'){R.1f.1n([$1D,29])}8(7.1t){F q=2x.1q(\'1V\');8(2k>=0){q+=7.1h[7.d[1]]}2x.16(7.d[\'1E\'],q);8(28.4s(2d).V){F r={};r[7.d[\'1E\']]=2d.1q(\'1V\');R.1f.1n([2d,r])}F s=28.1q(\'1V\');8(l>=0){s+=7.1h[7.d[3]]}F t={};t[7.d[\'1E\']]=s;R.1f.1n([28,t])}o[7.d[\'1s\']]=-n;8(l<0){o[7.d[\'1s\']]+=l}F u=[2n,1T,29,1w];8(f.2a)f.2a.3E($19,u);1X.2a=3z(1X.2a,$19,u);1x(f.1H){W\'2u\':W\'2e\':W\'2G\':W\'2h\':R.1p=20(R.1j,R.1I);R.1Q=20(R.1j,R.1I);R.1j=0;18}1x(f.1H){W\'2e\':W\'2G\':W\'2h\':F v=A.4f().3O($1D);18}1x(f.1H){W\'2h\':v.11().1g(7.G.12.2q).1J();18;W\'2e\':W\'2G\':v.11().1g(0,g).1J();v.11().1g(7.G.P).1J();18}1x(f.1H){W\'2u\':R.1p.1f.1n([A,{\'2g\':0}]);18;W\'2e\':v.16({\'2g\':0});R.1p.1f.1n([A,{\'S\':\'+=0\'},I(){v.1J()}]);R.1Q.1f.1n([v,{\'2g\':1}]);18;W\'2G\':R=4y(R,A,v,7,O);18;W\'2h\':R=4z(R,A,v,7,O,g);18}F w=I(){F b=7.G.P+g-N.U,5C=(7.1t)?7.1h[7.d[3]]:0;A.16(7.d[\'1s\'],5C);8(b>0){A.11().1g(N.U).1J()}F c=A.11().1g(0,g).3O(A).2I();8(b>0){1T=3p(h,7)}8(m){m.1P(I(){F a=$(1i);8(!a.1q(\'4j\'))a.3j()})}8(7.1t){8(N.U<7.G.P+g){F d=A.11().1L(7.G.P-1);d.16(7.d[\'1E\'],d.1q(\'1V\')+7.1h[7.d[3]])}c.16(7.d[\'1E\'],c.1q(\'1V\'))}R.1f=[];8(R.1p)R.1p=20(R.4B,R.1I);F e=I(){1x(f.1H){W\'2u\':W\'2e\':A.16(\'1v\',\'\');18}R.1Q=20(0,2c);C.1U=O;F a=[2n,1T,29];8(f.24)f.24.3E($19,a);1X.24=3z(1X.24,$19,a);8(1S.V){A.X(L(1S[0][0],H),1S[0][1]);1S.6p()}8(!C.1Y)A.X(L(\'1G\',H))};1x(f.1H){W\'2u\':R.1p.1f.1n([A,{\'2g\':1},e]);2f(R.1p);18;W\'2h\':R.1p.1f.1n([A,{\'S\':\'+=0\'},e]);2f(R.1p);18;2z:e();18}};R.1f.1n([A,o,w]);C.1U=M;1F=3d(1F);2f(R);4D(7.2t,A.1A(L(\'3H\',H)));A.X(L(\'2B\',H),[O,29]);J M});A.13(L(\'2W\',H),I(e,b,c,d,f,g,h){e.1e();F v=[b,c,d,f,g,h],t=[\'1l/14/1k\',\'14\',\'1r\',\'1k\',\'1l\',\'I\'],a=2Y(v,t);F f=a[3],g=a[4],h=a[5];b=3u(a[0],a[1],a[2],N,A);8(b==0)J;8(K f!=\'1k\')f=O;8(C.1U){8(K f!=\'1k\'||f.1j>0)J O}8(g!=\'17\'&&g!=\'1a\'){8(7.1N){8(b<=N.U/2)g=\'1a\';Q g=\'17\'}Q{8(N.Z==0||N.Z>b)g=\'1a\';Q g=\'17\'}}8(g==\'17\')b=N.U-b;A.X(L(g,H),[f,b,h]);J M});A.13(L(\'7h\',H),I(e,a,b){e.1e();F c=A.1A(L(\'3Q\',H));J A.1A(L(\'4K\',H),[c-1,a,\'17\',b])});A.13(L(\'7k\',H),I(e,a,b){e.1e();F c=A.1A(L(\'3Q\',H));J A.1A(L(\'4K\',H),[c+1,a,\'1a\',b])});A.13(L(\'4K\',H),I(e,a,b,c,d){e.1e();8(K a!=\'14\')a=A.1A(L(\'3Q\',H));F f=7.1b.G||7.G.P,2i=1O.35(N.U/f)-1;8(a<0)a=2i;8(a>2i)a=0;J A.1A(L(\'2W\',H),[a*f,0,M,b,c,d])});A.13(L(\'5J\',H),I(e,s){e.1e();8(s)s=3u(s,0,M,N,A);Q s=0;s+=N.Z;8(s!=0){1Z(s>N.U)s-=N.U;A.7m(A.11().1g(s,N.U))}J M});A.13(L(\'2j\',H),I(e,s){e.1e();8(s)s=4Z(s);Q 8(7.2j)s=7.2j;Q J 1c(H,\'5O 7n 3J 2j.\');F n=A.1A(L(\'3H\',H)),x=M;1o(F j=0,l=s.V;j<l;j++){8(!s[j][0].1A(L(\'2W\',H),[n,s[j][3],M])){x=O}}J x});A.13(L(\'3k\',H),I(e,a,b){e.1e();8(K a==\'I\'){a.1z($19,1S)}Q 8(2V(a)){1S=a}Q 8(K a!=\'1y\'){1S.1n([a,b])}J 1S});A.13(L(\'7w\',H),I(e,b,c,d,f){e.1e();F v=[b,c,d,f],t=[\'1l/1k\',\'1l/14/1k\',\'1r\',\'14\'],a=2Y(v,t);F b=a[0],c=a[1],d=a[2],f=a[3];8(K b==\'1k\'&&K b.3b==\'1y\')b=$(b);8(K b==\'1l\')b=$(b);8(K b!=\'1k\'||K b.3b==\'1y\'||b.V==0)J 1c(H,\'2b a 4q 1k.\');8(K c==\'1y\')c=\'4e\';8(7.1t){b.1P(I(){F m=2o($(1i).16(7.d[\'1E\']));8(2s(m))m=0;$(1i).1q(\'1V\',m)})}F g=c,3N=\'3N\';8(c==\'4e\'){8(d){8(N.Z==0){c=N.U-1;3N=\'61\'}Q{c=N.Z;N.Z+=b.V}8(c<0)c=0}Q{c=N.U-1;3N=\'61\'}}Q{c=3u(c,f,d,N,A)}8(g!=\'4e\'&&!d){8(c<N.Z)N.Z+=b.V}8(N.Z>=N.U)N.Z-=N.U;F h=A.11().1L(c);8(h.V){h[3N](b)}Q{A.65(b)}N.U=A.11().V;F i=A.1A(\'4M\');3M(7,N.U,H);2T(7,N.Z,H);A.X(L(\'4O\',H));A.X(L(\'2B\',H),[M,i]);J M});A.13(L(\'6D\',H),I(e,b,c,d){e.1e();F v=[b,c,d],t=[\'1l/14/1k\',\'1r\',\'14\'],a=2Y(v,t);F b=a[0],c=a[1],d=a[2];8(K b==\'1y\'||b==\'4e\'){A.11().2I().1J()}Q{b=3u(b,d,c,N,A);F f=A.11().1L(b);8(f.V){8(b<N.Z)N.Z-=f.V;f.1J()}}N.U=A.11().V;F g=A.1A(\'4M\');3M(7,N.U,H);2T(7,N.Z,H);A.X(L(\'2B\',H),[M,g]);J M});A.13(L(\'2a\',H)+\' \'+L(\'24\',H),I(e,a){e.1e();F b=e.4w.3U(H.3o.3B.V);8(2V(a))1X[b]=a;8(K a==\'I\')1X[b].1n(a);J 1X[b]});A.13(L(\'6a\',H,O),I(e,a){e.1e();J A.1A(L(\'3H\',H),a)});A.13(L(\'3H\',H),I(e,a){e.1e();8(N.Z==0)F b=0;Q F b=N.U-N.Z;8(K a==\'I\')a.1z($19,b);J b});A.13(L(\'3Q\',H),I(e,a){e.1e();F b=7.1b.G||7.G.P;F c=1O.2O(N.U/b-1);8(N.Z==0)F d=0;Q 8(N.Z<N.U%b)F d=0;Q 8(N.Z==b&&!7.1N)F d=c;Q F d=1O.6E((N.U-N.Z)/b);8(d<0)d=0;8(d>c)d=c;8(K a==\'I\')a.1z($19,d);J d});A.13(L(\'6G\',H),I(e,a){e.1e();$i=3p(A.11(),7);8(K a==\'I\')a.1z($19,$i);J $i});A.13(L(\'1g\',H),I(e,f,l,b){e.1e();F v=[f,l,b],t=[\'14\',\'14\',\'I\'],a=2Y(v,t);f=(K a[0]==\'14\')?a[0]:0,l=(K a[1]==\'14\')?a[1]:N.U,b=a[2];f+=N.Z;l+=N.Z;1Z(f>N.U){f-=N.U}1Z(l>N.U){l-=N.U}1Z(f<0){f+=N.U}1Z(l<0){l+=N.U}F c=A.11();8(l>f){F d=c.1g(f,l)}Q{F d=c.1g(f,N.U).3X().6e(c.1g(0,l).3X())}8(K b==\'I\')b.1z($19,d);J d});A.13(L(\'1Y\',H)+\' \'+L(\'22\',H)+\' \'+L(\'1U\',H),I(e,a){e.1e();F b=e.4w.3U(H.3o.3B.V);8(K a==\'I\')a.1z($19,C[b]);J C[b]});A.13(L(\'6c\',H,O),I(e,a,b,c){e.1e();J A.1A(L(\'4v\',H),[a,b,c])});A.13(L(\'4v\',H),I(e,a,b,c){e.1e();F d=O;8(K a==\'I\'){a.1z($19,7)}Q 8(K a==\'1k\'){2y=$.26(M,{},2y,a);8(b!==O)d=M;Q 7=$.26(M,{},7,a)}Q 8(K a!=\'1y\'){8(K b==\'I\'){F f=46(\'7.\'+a);8(K f==\'1y\')f=\'\';b.1z($19,f)}Q 8(K b!=\'1y\'){8(K c!==\'1r\')c=M;46(\'2y.\'+a+\' = b\');8(c!==O)d=M;Q 46(\'7.\'+a+\' = b\')}Q{J 46(\'7.\'+a)}}8(d){1M(A.11(),7);A.44(2y);A.4Q();F g=3L(A,7,O);A.X(L(\'2B\',H),[M,g])}J 7});A.13(L(\'4O\',H),I(e,a,b){e.1e();8(K a==\'1y\'||a.V==0)a=$(\'6M\');Q 8(K a==\'1l\')a=$(a);8(K a!=\'1k\')J 1c(H,\'2b a 4q 1k.\');8(K b!=\'1l\'||b.V==0)b=\'a.6g\';a.6O(b).1P(I(){F h=1i.6h||\'\';8(h.V>0&&A.11().6j($(h))!=-1){$(1i).21(\'4S\').4S(I(e){e.25();A.X(L(\'2W\',H),h)})}});J M});A.13(L(\'2B\',H),I(e,b,c){e.1e();8(!7.1b.1C)J;8(b){F d=7.1b.G||7.G.P,l=1O.2O(N.U/d);8(7.1b.34){7.1b.1C.11().1J();7.1b.1C.1P(I(){1o(F a=0;a<l;a++){F i=A.11().1L(3u(a*d,0,M,N,A));$(1i).65(7.1b.34(a+1,i))}})}7.1b.1C.1P(I(){$(1i).11().21(7.1b.3i).1P(I(a){$(1i).13(7.1b.3i,I(e){e.25();A.X(L(\'2W\',H),[a*d,0,M,7.1b])})})})}7.1b.1C.1P(I(){$(1i).11().2v(2l(\'5s\',H)).1L(A.1A(L(\'3Q\',H))).31(2l(\'5s\',H))});J M});A.13(L(\'4M\',H),I(e){F a=A.11(),3D=7.G.P;8(7.G.12.1d)3D=2J(a,7,0);Q 8(7.G.1v!=\'*\')3D=3R(a,7,0);8(!7.1N&&N.Z!=0&&3D>N.Z){8(7.G.12.1d){F b=47(a,7,N.Z)-N.Z}Q 8(7.G.1v!=\'*\'){F b=5u(a,7,N.Z)-N.Z}Q{b=7.G.P-N.Z}1c(H,\'77 78-1N: 79 \'+b+\' G 4X.\');A.X(\'17\',b)}7.G.P=2N(3D,7,7.G.12.2p,$19);J 3L(A,7)});A.13(L(\'68\',H,O),I(e,a){e.1e();A.X(L(\'5v\',H),a);J M});A.13(L(\'5v\',H),I(e,a){e.1e();1F=3d(1F);A.1q(\'4t\',O);A.X(L(\'4I\',H));8(a){A.X(L(\'5J\',H))}8(7.1t){1M(A.11(),7)}A.16(A.1q(\'5V\'));A.4L();A.4W();$1D.7f(A);J M})};A.4L=I(){A.21(L(\'\',H));A.21(L(\'\',H,O))};A.4Q=I(){A.4W();3M(7,N.U,H);2T(7,N.Z,H);8(7.T.2m){F c=3m(7.T.2m);$1D.13(L(\'4k\',H,O),I(){A.X(L(\'2X\',H),c)}).13(L(\'4h\',H,O),I(){A.X(L(\'2H\',H))})}8(7.T.Y){7.T.Y.13(L(7.T.3i,H,O),I(e){e.25();F a=O,c=2c;8(C.1Y){a=\'1G\'}Q 8(7.T.3W){a=\'2X\';c=3m(7.T.3W)}8(a){A.X(L(a,H),c)}})}8(7.17.Y){7.17.Y.13(L(7.17.3i,H,O),I(e){e.25();A.X(L(\'17\',H))});8(7.17.2m){F c=3m(7.17.2m);7.17.Y.13(L(\'4k\',H,O),I(){A.X(L(\'2X\',H),c)}).13(L(\'4h\',H,O),I(){A.X(L(\'2H\',H))})}}8(7.1a.Y){7.1a.Y.13(L(7.1a.3i,H,O),I(e){e.25();A.X(L(\'1a\',H))});8(7.1a.2m){F c=3m(7.1a.2m);7.1a.Y.13(L(\'4k\',H,O),I(){A.X(L(\'2X\',H),c)}).13(L(\'4h\',H,O),I(){A.X(L(\'2H\',H))})}}8($.1R.2A){8(7.17.2A){8(!C.51){C.51=M;$1D.2A(I(e,a){8(a>0){e.25();F b=52(7.17.2A);A.X(L(\'17\',H),b)}})}}8(7.1a.2A){8(!C.53){C.53=M;$1D.2A(I(e,a){8(a<0){e.25();F b=52(7.1a.2A);A.X(L(\'1a\',H),b)}})}}}8($.1R.3A){F d=(7.17.54)?I(){A.X(L(\'17\',H))}:2c,3y=(7.1a.54)?I(){A.X(L(\'1a\',H))}:2c;8(3y||3y){8(!C.3A){C.3A=M;F f={\'7x\':30,\'7A\':30,\'7C\':M};1x(7.2r){W\'4E\':W\'5H\':f.7N=3y;f.7O=d;18;2z:f.7Q=3y;f.6v=d}$1D.3A(f)}}}8(7.1b.1C){8(7.1b.2m){F c=3m(7.1b.2m);7.1b.1C.13(L(\'4k\',H,O),I(){A.X(L(\'2X\',H),c)}).13(L(\'4h\',H,O),I(){A.X(L(\'2H\',H))})}}8(7.17.2w||7.1a.2w){$(3I).13(L(\'5K\',H,O,M,M),I(e){F k=e.5L;8(k==7.1a.2w){e.25();A.X(L(\'1a\',H))}8(k==7.17.2w){e.25();A.X(L(\'17\',H))}})}8(7.1b.48){$(3I).13(L(\'5K\',H,O,M,M),I(e){F k=e.5L;8(k>=49&&k<58){k=(k-49)*7.G.P;8(k<=N.U){e.25();A.X(L(\'2W\',H),[k,0,M,7.1b])}}})}8(7.T.1G){A.X(L(\'1G\',H),7.T.56)}8(C.4A){$(3t).13(L(\'6C\',H,O,M,M),I(e){A.X(L(\'4I\',H));8(7.T.55&&!C.1Y){A.X(L(\'1G\',H))}1M(A.11(),7);A.44(2y);F a=3L(A,7,O);A.X(L(\'2B\',H),[M,a])})}};A.4W=I(){F a=L(\'\',H),3s=L(\'\',H,O);57=L(\'\',H,O,M,M);$(3I).21(57);$(3t).21(57);$1D.21(3s);8(7.T.Y)7.T.Y.21(3s);8(7.17.Y)7.17.Y.21(3s);8(7.1a.Y)7.1a.Y.21(3s);8(7.1b.1C){7.1b.1C.21(3s);8(7.1b.34){7.1b.1C.11().1J()}}3M(7,\'3f\',H);2T(7,\'2v\',H)};F C={\'2r\':\'1a\',\'1Y\':M,\'1U\':O,\'22\':O,\'53\':O,\'51\':O,\'3A\':O},N={\'U\':A.11().V,\'Z\':0},1F={\'6F\':2c,\'T\':2c,\'3k\':2c,\'2Q\':2C(),\'3v\':0},R={\'22\':O,\'1j\':0,\'2Q\':0,\'1I\':\'\',\'1f\':[]},1X={\'2a\':[],\'24\':[]},1S=[],H=$.26(M,{},$.1R.1K.5P,z),7={},2y=y,$1D=A.6H(\'<\'+H.59.4C+\' 6J="\'+H.59.5R+\'" />\').3e();H.3Y=A.3Y;H.45=$.1R.1K.45++;A.44(2y,M,B);A.5t();A.5S();A.4Q();8(2V(7.G.2K)){F D=7.G.2K}Q{F D=[];8(7.G.2K!=0){D.1n(7.G.2K)}}8(7.2t){D.6N(5U(7.2t))}8(D.V>0){1o(F a=0,l=D.V;a<l;a++){F s=D[a];8(s==0){5b}8(s===M){s=3t.6P.6h;8(s.V<1){5b}}Q 8(s===\'5W\'){s=1O.35(1O.5W()*N.U)}8(A.1A(L(\'2W\',H),[s,0,M,{1H:\'4g\'}])){18}}}F E=3L(A,7,O),5Y=3p(A.11(),7);8(7.5Z){7.5Z.1z($19,5Y,E)}A.X(L(\'2B\',H),[M,E]);A.X(L(\'4O\',H));J A};$.1R.1K.45=1;$.1R.1K.4x={\'2j\':O,\'3h\':M,\'1N\':M,\'2L\':O,\'2r\':\'1s\',\'G\':{\'2K\':0},\'1m\':{\'1I\':\'6U\',\'1j\':5N,\'2m\':O,\'2A\':O,\'54\':O,\'3i\':\'4S\',\'3k\':O}};$.1R.1K.5P={\'1c\':O,\'3o\':{\'3B\':\'\',\'60\':\'6W\'},\'59\':{\'4C\':\'6X\',\'5R\':\'6Y\'},\'5c\':{}};$.1R.1K.5M=I(a,b){J\'<a 70="#"><62>\'+a+\'</62></a>\'};I 20(d,e){J{1f:[],1j:d,4B:d,1I:e,2Q:2C()}}I 2f(s){8(K s.1p==\'1k\'){2f(s.1p)}1o(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];8(!b)5b;8(b[3])b[0].4J();b[0].63(b[1],{64:b[2],1j:s.1j,1I:s.1I})}8(K s.1Q==\'1k\'){2f(s.1Q)}}I 3P(s,c){8(K c!=\'1r\')c=M;8(K s.1p==\'1k\'){3P(s.1p,c)}1o(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];b[0].4J(M);8(c){b[0].16(b[1]);8(K b[2]==\'I\')b[2]()}}8(K s.1Q==\'1k\'){3P(s.1Q,c)}}I 3d(t){8(t.T)74(t.T);J t}I 3z(b,t,c){8(b.V){1o(F a=0,l=b.V;a<l;a++){b[a].3E(t,c)}}J[]}I 75(a,c,x,d,f){F o={\'1j\':d,\'1I\':a.1I};8(K f==\'I\')o.64=f;c.63({2g:x},o)}I 4y(a,b,c,o,d){F e=2E(4G(b.11(),o),o,M)[0],5d=2E(c.11(),o,M)[0],41=(d)?-5d:e,2D={},3l={};2D[o.d[\'S\']]=5d;2D[o.d[\'1s\']]=41;3l[o.d[\'1s\']]=0;a.1p.1f.1n([b,{\'2g\':1}]);a.1Q.1f.1n([c,3l,I(){$(1i).1J()}]);c.16(2D);J a}I 4z(a,b,c,o,d,n){F e=2E(4H(b.11(),o,n),o,M)[0],5f=2E(c.11(),o,M)[0],41=(d)?-5f:e,2D={},3l={};2D[o.d[\'S\']]=5f;2D[o.d[\'1s\']]=0;3l[o.d[\'1s\']]=41;a.1Q.1f.1n([c,3l,I(){$(1i).1J()}]);c.16(2D);J a}I 3M(o,t,c){8(t==\'3j\'||t==\'3f\'){F f=t}Q 8(o.G.3r>=t){1c(c,\'2b 5F G: 7b 7c (\'+t+\' G, \'+o.G.3r+\' 5E).\');F f=\'3f\'}Q{F f=\'3j\'}F s=(f==\'3j\')?\'2v\':\'31\',h=2l(\'2P\',c);8(o.T.Y)o.T.Y[f]()[s](h);8(o.17.Y)o.17.Y[f]()[s](h);8(o.1a.Y)o.1a.Y[f]()[s](h);8(o.1b.1C)o.1b.1C[f]()[s](h)}I 2T(o,f,c){8(o.1N||o.3h)J;F a=(f==\'2v\'||f==\'31\')?f:O,4o=2l(\'7e\',c);8(o.T.Y&&a){o.T.Y[a](4o)}8(o.17.Y){F b=a||(f==0)?\'31\':\'2v\';o.17.Y[b](4o)}8(o.1a.Y){F b=a||(f==o.G.P)?\'31\':\'2v\';o.1a.Y[b](4o)}}I 4p(a,b){8(K b==\'I\')b=b.1z(a);8(K b==\'1y\')b={};J b}I 3w(a,b,c){8(K c!=\'1l\')c=\'\';b=4p(a,b);8(K b==\'1l\'){F d=5h(b);8(d==-1)b=$(b);Q b=d}8(c==\'1b\'){8(K b==\'1r\')b={\'48\':b};8(K b.3b!=\'1y\')b={\'1C\':b};8(K b.1C==\'I\')b.1C=b.1C.1z(a);8(K b.1C==\'1l\')b.1C=$(b.1C);8(K b.G!=\'14\')b.G=O}Q 8(c==\'T\'){8(K b.3b!=\'1y\')b={\'Y\':b};8(K b==\'1r\')b={\'1G\':b};8(K b==\'14\')b={\'3q\':b};8(K b.Y==\'I\')b.Y=b.Y.1z(a);8(K b.Y==\'1l\')b.Y=$(b.Y)}Q{8(K b.3b!=\'1y\')b={\'Y\':b};8(K b==\'14\')b={\'2w\':b};8(K b.Y==\'I\')b.Y=b.Y.1z(a);8(K b.Y==\'1l\')b.Y=$(b.Y);8(K b.2w==\'1l\')b.2w=5h(b.2w)}J b}I 3u(a,b,c,d,e){8(K a==\'1l\'){8(2s(a))a=$(a);Q a=2o(a)}8(K a==\'1k\'){8(K a.3b==\'1y\')a=$(a);a=e.11().6j(a);8(a==-1)a=0;8(K c!=\'1r\')c=O}Q{8(K c!=\'1r\')c=M}8(2s(a))a=0;Q a=2o(a);8(2s(b))b=0;Q b=2o(b);8(c){a+=d.Z}a+=b;8(d.U>0){1Z(a>=d.U){a-=d.U}1Z(a<0){a+=d.U}}J a}I 47(i,o,s){F t=0,x=0;1o(F a=s;a>=0;a--){F j=i.1L(a);t+=(j.1W(\':P\'))?j[o.d[\'27\']](M):0;8(t>o.3S)J x;8(a==0)a=i.V;x++}}I 5u(i,o,s){J 5i(i,o.G.1v,o.G.12.4c,s)}I 6t(i,o,s,m){J 5i(i,o.G.1v,m,s)}I 5i(i,f,m,s){F t=0,x=0;1o(F a=s,l=i.V-1;a>=0;a--){x++;8(x==l)J x;F j=i.1L(a);8(j.1W(f)){t++;8(t==m)J x}8(a==0)a=i.V}}I 4V(a,o){J o.G.12.4c||a.11().1g(0,o.G.P).1v(o.G.1v).V}I 2J(i,o,s){F t=0,x=0;1o(F a=s,l=i.V-1;a<=l;a++){F j=i.1L(a);t+=(j.1W(\':P\'))?j[o.d[\'27\']](M):0;8(t>o.3S)J x;x++;8(x==l)J x;8(a==l)a=-1}}I 4F(i,o,s,l){F v=2J(i,o,s);8(!o.1N){8(s+v>l)v=l-s}J v}I 3R(i,o,s){J 5j(i,o.G.1v,o.G.12.4c,s,o.1N)}I 5w(i,o,s,m){J 5j(i,o.G.1v,m+1,s,o.1N)-1}I 5j(i,f,m,s,c){F t=0,x=0;1o(F a=s,l=i.V-1;a<=l;a++){x++;8(x==l)J x;F j=i.1L(a);8(j.1W(f)){t++;8(t==m)J x}8(a==l)a=-1}}I 3p(i,o){J i.1g(0,o.G.P)}I 6l(i,o,n){J i.1g(n,o.G.12.2q+n)}I 6b(i,o){J i.1g(0,o.G.P)}I 4G(i,o){J i.1g(0,o.G.12.2q)}I 4H(i,o,n){J i.1g(n,o.G.P+n)}I 1M(i,o,m){F x=(K m==\'1r\')?m:O;8(K m!=\'14\')m=0;i.1P(I(){F j=$(1i);F t=2o(j.16(o.d[\'1E\']));8(2s(t))t=0;j.1q(\'6f\',t);j.16(o.d[\'1E\'],((x)?j.1q(\'6f\'):m+j.1q(\'1V\')))})}I 3L(a,o,p){F b=a.3e(),$i=a.11(),$v=3p($i,o),42=4a(2E($v,o,M),o,p);b.16(42);8(o.1t){F p=o.1h,r=p[o.d[1]];8(o.1B){8(r<0)r=0}F c=$v.2I();c.16(o.d[\'1E\'],c.1q(\'1V\')+r);a.16(o.d[\'32\'],p[o.d[0]]);a.16(o.d[\'1s\'],p[o.d[3]])}a.16(o.d[\'S\'],42[o.d[\'S\']]+(36($i,o,\'S\')*2));a.16(o.d[\'1u\'],5l($i,o,\'1u\'));J 42}I 2E(i,o,a){F b=36(i,o,\'S\',a),6i=5l(i,o,\'1u\',a);J[b,6i]}I 5l(i,o,a,b){8(K b!=\'1r\')b=O;8(K o[o.d[a]]==\'14\'&&b)J o[o.d[a]];8(K o.G[o.d[a]]==\'14\')J o.G[o.d[a]];F c=(a.5m().2S(\'S\')>-1)?\'27\':\'2Z\';J 3C(i,o,c)}I 3C(i,o,b){F s=0;1o(F a=0,l=i.V;a<l;a++){F j=i.1L(a);F m=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s<m)s=m}J s}I 3g(b,o,c){8(!b.1W(\':P\'))J 0;F d=b[o.d[c]](),5n=(o.d[c].5m().2S(\'S\')>-1)?[\'7p\',\'7q\']:[\'7r\',\'7s\'];1o(F a=0,l=5n.V;a<l;a++){F m=2o(b.16(5n[a]));d-=(2s(m))?0:m}J d}I 36(i,o,b,c){8(K c!=\'1r\')c=O;8(K o[o.d[b]]==\'14\'&&c)J o[o.d[b]];8(K o.G[o.d[b]]==\'14\')J o.G[o.d[b]]*i.V;F d=(b.5m().2S(\'S\')>-1)?\'27\':\'2Z\',s=0;1o(F a=0,l=i.V;a<l;a++){F j=i.1L(a);s+=(j.1W(\':P\'))?j[o.d[d]](M):0}J s}I 5p(i,o,b){F s=O,v=O;1o(F a=0,l=i.V;a<l;a++){F j=i.1L(a);F c=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s===O)s=c;Q 8(s!=c)v=M;8(s==0)v=M}J v}I 66(i,o,d){J i[o.d[\'7t\'+d]](M)-3g(i,o,\'7u\'+d)}I 4n(x){J(K x==\'1l\'&&x.3U(-1)==\'%\')}I 3Z(s,o){8(4n(o)){o=o.5o(0,o.V-1);8(2s(o))J s;s*=o/3F}J s}I L(n,c,a,b,d){8(K a!=\'1r\')a=M;8(K b!=\'1r\')b=M;8(K d!=\'1r\')d=O;8(a)n=c.3o.3B+n;8(b)n=n+\'.\'+c.3o.60;8(b&&d)n+=c.45;J n}I 2l(n,c){J(K c.5c[n]==\'1l\')?c.5c[n]:n}I 4a(a,o,p){8(K p!=\'1r\')p=M;F b=(o.1t&&p)?o.1h:[0,0,0,0];F c={};c[o.d[\'S\']]=a[0]+b[1]+b[3];c[o.d[\'1u\']]=a[1]+b[0]+b[2];J c}I 2Y(c,d){F e=[];1o(F a=0,6n=c.V;a<6n;a++){1o(F b=0,6o=d.V;b<6o;b++){8(d[b].2S(K c[a])>-1&&K e[b]==\'1y\'){e[b]=c[a];18}}}J e}I 5T(p){8(K p==\'1y\')J[0,0,0,0];8(K p==\'14\')J[p,p,p,p];Q 8(K p==\'1l\')p=p.3a(\'7z\').6q(\'\').3a(\'7B\').6q(\'\').3a(\' \');8(!2V(p)){J[0,0,0,0]}1o(F i=0;i<4;i++){p[i]=2o(p[i])}1x(p.V){W 0:J[0,0,0,0];W 1:J[p[0],p[0],p[0],p[0]];W 2:J[p[0],p[1],p[0],p[1]];W 3:J[p[0],p[1],p[2],p[1]];2z:J[p[0],p[1],p[2],p[3]]}}I 4l(a,o){F x=(K o[o.d[\'S\']]==\'14\')?1O.2O(o[o.d[\'S\']]-36(a,o,\'S\')):0;1x(o.1B){W\'1s\':J[0,x];W\'2U\':J[x,0];W\'5r\':2z:J[1O.2O(x/2),1O.35(x/2)]}}I 4b(x,o,a,b){F v=x;8(K a==\'I\'){v=a.1z(b,v)}Q 8(K a==\'1l\'){F p=a.3a(\'+\'),m=a.3a(\'-\');8(m.V>p.V){F c=M,5q=m[0],2F=m[1]}Q{F c=O,5q=p[0],2F=p[1]}1x(5q){W\'7E\':v=(x%2==1)?x-1:x;18;W\'7F\':v=(x%2==0)?x-1:x;18;2z:v=x;18}2F=2o(2F);8(!2s(2F)){8(c)2F=-2F;v+=2F}}8(K v!=\'14\')v=1;8(v<1)v=1;J v}I 2N(x,o,a,b){J 5k(4b(x,o,a,b),o.G.12)}I 5k(v,i){8(K i.2M==\'14\'&&v<i.2M)v=i.2M;8(K i.2i==\'14\'&&v>i.2i)v=i.2i;8(v<1)v=1;J v}I 4Z(s){8(!2V(s))s=[[s]];8(!2V(s[0]))s=[s];1o(F j=0,l=s.V;j<l;j++){8(K s[j][0]==\'1l\')s[j][0]=$(s[j][0]);8(K s[j][1]!=\'1r\')s[j][1]=M;8(K s[j][2]!=\'1r\')s[j][2]=M;8(K s[j][3]!=\'14\')s[j][3]=0}J s}I 5h(k){8(k==\'2U\')J 39;8(k==\'1s\')J 37;8(k==\'4E\')J 38;8(k==\'5H\')J 40;J-1}I 4D(n,v){8(n)3I.2t=n+\'=\'+v+\'; 7G=/\'}I 5U(n){n+=\'=\';F b=3I.2t.3a(\';\');1o(F a=0,l=b.V;a<l;a++){F c=b[a];1Z(c.7H(0)==\' \'){c=c.5o(1,c.V)}8(c.2S(n)==0){J c.5o(n.V,c.V)}}J 0}I 3m(p){8(p&&K p==\'1l\'){F i=(p.2S(\'7I\')>-1)?M:O,r=(p.2S(\'2H\')>-1)?M:O}Q{F i=r=O}J[i,r]}I 52(a){J(K a==\'14\')?a:2c}I 2V(a){J K(a)==\'1k\'&&(a 7J 7K)}I 2C(){J 7L 7M().2C()}I 1c(d,m){8(K d==\'1k\'){F s=\' (\'+d.3Y+\')\';d=d.1c}Q{F s=\'\'}8(!d)J O;8(K m==\'1l\')m=\'1K\'+s+\': \'+m;Q m=[\'1K\'+s+\':\',m];8(3t.4r&&3t.4r.6u)3t.4r.6u(m);J O}$.1R.6g=I(o,c){J 1i.1K(o,c)};$.26($.1I,{\'7P\':I(t){F a=t*t;J t*(-a*t+4*a-6*t+4)},\'7R\':I(t){J t*(4*t*t-9*t+6)},\'7S\':I(t){F a=t*t;J t*(33*a*a-7T*a*t+7U*a-67*t+15)}})})(7V);',62,492,'|||||||opts|if|||||||||||||||||||||||||||||||||var|items|conf|function|return|typeof|cf_e|true|itms|false|visible|else|scrl|width|auto|total|length|case|trigger|button|first||children|visibleConf|bind|number||css|prev|break|tt0|next|pagination|debug|variable|stopPropagation|anims|slice|padding|this|duration|object|string|scroll|push|for|pre|data|boolean|left|usePadding|height|filter|a_dur|switch|undefined|call|triggerHandler|align|container|wrp|marginRight|tmrs|play|fx|easing|remove|carouFredSel|eq|sz_resetMargin|circular|Math|each|post|fn|queu|c_new|isScrolling|cfs_origCssMargin|is|clbk|isPaused|while|sc_setScroll|unbind|isStopped|stopImmediatePropagation|onAfter|preventDefault|extend|outerWidth|l_cur|w_siz|onBefore|Not|null|l_old|crossfade|sc_startScroll|opacity|uncover|max|synchronise|pR|cf_c|pauseOnHover|c_old|parseInt|adjust|old|direction|isNaN|cookie|fade|removeClass|key|l_new|opts_orig|default|mousewheel|updatePageStatus|getTime|css_o|ms_getSizes|adj|cover|resume|last|gn_getVisibleItemsNext|start|responsive|min|cf_getItemsAdjust|ceil|hidden|startTime|scrolling|indexOf|nv_enableNavi|right|is_array|slideTo|pause|cf_sortParams|outerHeight||addClass|top||anchorBuilder|floor|ms_getTotalSize||||split|jquery|innerWidth|sc_clearTimers|parent|hide|ms_getTrueInnerSize|infinite|event|show|queue|ani_o|bt_pauseOnHoverConfig|Carousel|events|gi_getCurrentItems|pauseDuration|minimum|ns2|window|gn_getItemIndex|timePassed|go_getNaviObject|dur2|wN|sc_callCallbacks|touchwipe|prefix|ms_getTrueLargestSize|vI|apply|100|perc|currentPosition|document|to|position|sz_setSizes|nv_showNavi|before|appendTo|sc_stopScroll|currentPage|gn_getVisibleItemsNextFilter|maxDimention|of|substr|marginBottom|pauseOnEvent|get|selector|ms_getPercentage||cur_l|sz|stopped|_cfs_init|serialNumber|eval|gn_getVisibleItemsPrev|keys||cf_mapWrapperSizes|cf_getAdjust|org|onEnd|end|clone|none|mouseleave|Number|isHidden|mouseenter|cf_getAlignPadding|orgW|ms_isPercentage|di|go_getObject|valid|console|not|cfs_isCarousel|conditions|configuration|type|defaults|fx_cover|fx_uncover|upDateOnWindowResize|orgDuration|element|cf_setCookie|up|gn_getVisibleItemsNextTestCircular|gi_getOldItemsNext|gi_getNewItemsNext|finish|stop|slideToPage|_cfs_unbind_events|updateSizes|absolute|linkAnchors|marginLeft|_cfs_bind_buttons|marginTop|click|float|textAlign|gn_getVisibleOrg|_cfs_unbind_buttons|backward|scrolled|cf_getSynchArr||mousewheelPrev|bt_mousesheelNumber|mousewheelNext|wipe|pauseOnResize|delay|ns3||wrapper|bottom|continue|classnames|new_w|nw|old_w|seco|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|cf_getItemAdjustMinMax|ms_getLargestSize|toLowerCase|arr|substring|ms_hasVariableSizes|sta|center|selected|_cfs_build|gn_getVisibleItemsPrevFilter|destroy|gn_getScrollItemsNextFilter|forward|page|directscroll|Item|the|new_m|innerHeight|needed|enough|dx|down|onPauseStart|jumpToStart|keyup|keyCode|pageAnchorBuilder|500|No|configs|onPauseEnd|classname|_cfs_bind_events|cf_getPadding|cf_readCookie|cfs_origCss|random|fixed|itm|onCreate|namespace|after|span|animate|complete|append|ms_getPaddingBorderMargin||_cfs_destroy|secp|_cfs_currentPosition|gi_getNewItemsPrev|_cfs_configuration|onPausePause|concat|cfs_tempCssMargin|caroufredsel|hash|s2|index|Set|gi_getOldItemsPrev|Scrolling|l1|l2|shift|join|_cfs_slide_|paused|gn_getScrollItemsPrevFilter|log|wipeRight|The|found|Callback|returned|automatically|second|resize|removeItem|round|timer|currentVisible|wrap|or|class|_cfs_slide_prev|attr|body|unshift|find|location|id|moved|relative|overflow|swing|_cfs_slide_next|cfs|div|caroufredsel_wrapper|Infinity|href|Available|Width|be|clearTimeout|fx_fade|widths|Preventing|non|sliding|setTimeout|hiding|navigation|should|disabled|replaceWith|prependTo|prevPage|heights|Page|nextPage|2500|prepend|carousel|resumed|paddingLeft|paddingRight|paddingTop|paddingBottom|outer|inner|option|insertItem|min_move_x|currently|px|min_move_y|em|preventDefaultEvents|caroufredsel_cookie_|even|odd|path|charAt|immediate|instanceof|Array|new|Date|wipeUp|wipeDown|quadratic|wipeLeft|cubic|elastic|106|126|jQuery'.split('|'),0,{}))






/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */







/**********************************************!
 * NWMatcher 1.2.4 - Fast CSS3 Selector Engine
 * Copyright (C) 2007-2011 Diego Perini
 * See http://nwbox.com/license
 */
(function(v){var c='nwmatcher-1.2.4',l=typeof exports=='object'?exports:((v.NW||(v.NW={}))&&(v.NW.Dom||(v.NW.Dom={}))),i=v.document,m=i.documentElement,K=[].slice,bO={}.toString,bl,W,G,X,q,bm,bn,bo,bp,L='[#.:]?',bq='([~*^$|!]?={1})',y='[\\x20\\t\\n\\r\\f]*',br='[\\x20]|[>+~][^>+~]',bs='[-+]?\\d*n?[-+]?\\d*',Y='"[^"]*"'+"|'[^']*'",bP='\\([^()]+\\)|\\(.*\\)',bQ='\\{[^{}]+\\}|\\{.*\\}',bR='\\[[^[\\]]*\\]|\\[.*\\]',Z='\\[.*\\]|\\(.*\\)|\\{.*\\}',r='(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)',B='(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+',bt='('+Y+'|'+B+')',C=y+'('+r+'+:?'+r+'+)'+y+'(?:'+bq+y+bt+')?'+y,bS=C.replace(bt,'([\\x22\\x27]*)((?:\\\\?.)*?)\\3'),M='((?:'+bs+'|'+Y+'|'+L+'|'+r+'+|\\['+C+'\\]|\\(.+\\)|'+y+'|,)+)',bT='.+',ba='(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:'+L+B+')|'+br+'|\\['+C+'\\]|\\('+M+'\\)|\\{'+bT+'\\}|,)+',bU=ba.replace(M,'.*'),N=new RegExp(ba,'g'),O=new RegExp('^'+y+'|'+y+'$','g'),bV=new RegExp('^((?!:not)('+L+'|'+B+'|\\([^()]*\\))+|\\['+C+'\\])$'),bb=new RegExp('([^,\\\\\\[\\]]+|'+bR+'|'+bP+'|'+bQ+'|\\\\.)+','g'),bW=new RegExp('(\\['+C+'\\]|\\('+M+'\\)|[^\\x20>+~]|\\\\.)+','g'),bu=/[\x20\t\n\r\f]+/g,bv=new RegExp(B+'|^$'),t=(function(){var g=(i.appendChild+'').replace(/appendChild/g,'');return function(b,a){var d=b&&b[a]||false;return d&&typeof d!='string'&&g==(d+'').replace(new RegExp(a,'g'),'')}})(),bX=t(i,'hasFocus'),P=t(i,'querySelector'),bY=t(i,'getElementById'),bZ=t(m,'getElementsByTagName'),Q=t(m,'getElementsByClassName'),ca=t(m,'getAttribute'),cb=t(m,'hasAttribute'),bw=(function(){var b=false,a=m.id;m.id='length';try{b=!!K.call(i.childNodes,0)[0]}catch(e){}m.id=a;return b})(),bx='nextElementSibling'in m&&'previousElementSibling'in m,R=t(m,'matchesSelector')?'matchesSelector':t(m,'oMatchesSelector')?'oMatchesSelector':t(m,'msMatchesSelector')?'msMatchesSelector':t(m,'mozMatchesSelector')?'mozMatchesSelector':t(m,'webkitMatchesSelector')?'webkitMatchesSelector':null,cc=bY?(function(){var b=true,a='x'+String(+new Date),d=i.createElementNS?'a':'<a name="'+a+'">';(d=i.createElement(d)).name=a;m.insertBefore(d,m.firstChild);b=!!i.getElementById(a);m.removeChild(d);return b})():true,by=bZ?(function(){var b=i.createElement('div');b.appendChild(i.createComment(''));return!!b.getElementsByTagName('*')[0]})():true,bz=Q?(function(){var b,a=i.createElement('div'),d='\u53f0\u5317';a.appendChild(i.createElement('span')).setAttribute('class',d+'abc '+d);a.appendChild(i.createElement('span')).setAttribute('class','x');b=!a.getElementsByClassName(d)[0];a.lastChild.className=d;return b||a.getElementsByClassName(d).length!=2})():true,cd=ca?(function(){var b=i.createElement('input');b.setAttribute('value',5);return b.defaultValue!=5})():true,bA=cb?(function(){var b=i.createElement('option');b.setAttribute('selected','selected');return!b.hasAttribute('selected')})():true,ce=R?(function(){try{m[R](':buggy');return true}catch(e){}return false})():true,cf=(function(){var b=i.createElement('select');b.appendChild(i.createElement('option'));return!b.firstChild.selected})(),bB,bc,z,bC,n,bD=/opera/i.test(bO.call(v.opera)),cg=bD&&parseFloat(opera.version())>=11,bE=P?(function(){var h=[],f=i.createElement('div'),c,k=function(b,a,d,g){var j=false;a.appendChild(d);try{j=a.querySelectorAll(b).length==g}catch(e){}while(a.firstChild){a.removeChild(a.firstChild)}return j};c=i.createElement('p');c.setAttribute('class','');k('[class^=""]',f,c,1)&&h.push('[*^$]=[\\x20\\t\\n\\r\\f]*(?:""|'+"'')");c=i.createElement('option');c.setAttribute('selected','selected');k(':checked',f,c,0)&&h.push(':checked');c=i.createElement('input');c.setAttribute('type','hidden');k(':enabled',f,c,1)&&h.push(':enabled',':disabled');c=i.createElement('link');c.setAttribute('href','x');k(':link',f,c,1)||h.push(':link');if(bA){h.push('\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)')}return h.length?new RegExp(h.join('|')):{'test':function(){return false}}})():true,bF=new RegExp('(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\.'+B+')'),ch=new RegExp(':[-\\w]+'),ci=new RegExp(!(by&&bz)?!bD?'^(?:\\*|[.#]?-?[_a-zA-Z]{1}'+r+'*)$':'^(?:\\*|#-?[_a-zA-Z]{1}'+r+'*)$':'^#?-?[_a-zA-Z]{1}'+r+'*$'),cj={'a':1,'A':1,'area':1,'AREA':1,'link':1,'LINK':1},ck={checked:1,disabled:1,ismap:1,multiple:1,readonly:1,selected:1},S={value:'defaultValue',checked:'defaultChecked',selected:'defaultSelected'},bG={'class':'className','for':'htmlFor'},cl={'action':2,'cite':2,'codebase':2,'data':2,'href':2,'longdesc':2,'lowsrc':2,'src':2,'usemap':2},bH={'class':0,'accept':1,'accept-charset':1,'align':1,'alink':1,'axis':1,'bgcolor':1,'charset':1,'checked':1,'clear':1,'codetype':1,'color':1,'compact':1,'declare':1,'defer':1,'dir':1,'direction':1,'disabled':1,'enctype':1,'face':1,'frame':1,'hreflang':1,'http-equiv':1,'lang':1,'language':1,'link':1,'media':1,'method':1,'multiple':1,'nohref':1,'noresize':1,'noshade':1,'nowrap':1,'readonly':1,'rel':1,'rev':1,'rules':1,'scope':1,'scrolling':1,'selected':1,'shape':1,'target':1,'text':1,'type':1,'valign':1,'valuetype':1,'vlink':1},cm={'accept':1,'accept-charset':1,'alink':1,'axis':1,'bgcolor':1,'charset':1,'codetype':1,'color':1,'enctype':1,'face':1,'hreflang':1,'http-equiv':1,'lang':1,'language':1,'link':1,'media':1,'rel':1,'rev':1,'target':1,'text':1,'type':1,'vlink':1},D={},H={'=':"n=='%m'",'^=':"n.indexOf('%m')==0",'*=':"n.indexOf('%m')>-1",'|=':"(n+'-').indexOf('%m-')==0",'~=':"(' '+n+' ').indexOf(' %m ')>-1",'$=':"n.substr(n.length-'%m'.length)=='%m'"},E={ID:new RegExp('^\\*?#('+r+'+)|'+Z),TAG:new RegExp('^('+r+'+)|'+Z),CLASS:new RegExp('^\\*?\\.('+r+'+$)|'+Z)},w={spseudos:/^\:((root|empty|nth-)?(?:(first|last|only)-)?(child)?-?(of-type)?)(?:\(([^\x29]*)\))?(.*)/,dpseudos:/^\:(link|visited|target|lang|not|active|focus|hover|checked|disabled|enabled|selected)(?:\((["']*)(.*?(\(.*\))?[^'"()]*?)\2\))?(.*)/,attribute:new RegExp('^\\['+bS+'\\](.*)'),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:new RegExp('^#('+r+'+)(.*)'),tagName:new RegExp('^('+r+'+)(.*)'),className:new RegExp('^\\.('+r+'+)(.*)')},bI=function(b,a){var d=-1,g;if(!b.length&&Array.slice)return Array.slice(a);while((g=a[++d]))b[b.length]=g;return b},bJ=function(b,a,d){var g=-1,j;while((j=a[++g]))d(b[b.length]=j);return b},F=function(a,d){var g,j=i;X=a;i=a.ownerDocument||a;if(d||j!==i){m=i.documentElement;n=i.createElement('DiV').nodeName=='DiV';bC=n?'.toUpperCase()':'';z=!n&&typeof i.compatMode=='string'?i.compatMode.indexOf('CSS')<0:(function(){var b=i.createElement('div').style;return b&&(b.width=1)&&b.width=='1px'})();g=i.createElement('div');g.appendChild(i.createElement('p')).setAttribute('class','xXx');g.appendChild(i.createElement('p')).setAttribute('class','xxx');bB=!n&&Q&&z&&(g.getElementsByClassName('xxx').length!=2||g.getElementsByClassName('xXx').length!=2);bc=!n&&P&&z&&(g.querySelectorAll('[class~=xxx]').length!=2||g.querySelectorAll('.xXx').length!=2);o.CACHING&&l.setCache(true,i)}},bd=function(b,a){var d=-1,g=null;while((g=a[++d])){if(g.getAttribute('id')==b){break}}return g},I=!cc?function(b,a){b=b.replace(/\\/g,'');return a.getElementById&&a.getElementById(b)||bd(b,a.getElementsByTagName('*'))}:function(b,a){var d=null;b=b.replace(/\\/g,'');if(n||a.nodeType!=9){return bd(b,a.getElementsByTagName('*'))}if((d=a.getElementById(b))&&d.name==b&&a.getElementsByName){return bd(b,a.getElementsByName(b))}return d},cn=function(b,a){F(a||(a=i));return I(b,a)},co=function(b,a){var d=b=='*',g=a,j=[],h=g.firstChild;d||(b=b.toUpperCase());while((g=h)){if(g.tagName>'@'&&(d||g.tagName.toUpperCase()==b)){j[j.length]=g}if((h=g.firstChild||g.nextSibling))continue;while(!h&&(g=g.parentNode)&&g!==a){h=g.nextSibling}}return j},A=!by&&bw?function(b,a){return n||a.nodeType==11?co(b,a):K.call(a.getElementsByTagName(b),0)}:function(b,a){var d=-1,g=d,j=[],h,f=a.getElementsByTagName(b);if(b=='*'){while((h=f[++d])){if(h.nodeName>'@')j[++g]=h}}else{while((h=f[++d])){j[d]=h}}return j},cp=function(b,a){F(a||(a=i));return A(b,a)},bK=function(b,a){return be('[name="'+b.replace(/\\/g,'')+'"]',a)},cq=function(b,a){var d=-1,g=d,j=[],h,f=A('*',a),c;b=' '+(z?b.toLowerCase():b).replace(/\\/g,'')+' ';while((h=f[++d])){c=n?h.getAttribute('class'):h.className;if(c&&c.length&&(' '+(z?c.toLowerCase():c).replace(bu,' ')+' ').indexOf(b)>-1){j[++g]=h}}return j},J=function(b,a){return(bz||bB||n||!a.getElementsByClassName)?cq(b,a):K.call(a.getElementsByClassName(b.replace(/\\/g,'')),0)},cr=function(b,a){F(a||(a=i));return J(b,a)},bf='compareDocumentPosition'in m?function(b,a){return(b.compareDocumentPosition(a)&16)==16}:'contains'in m?function(b,a){return b!==a&&b.contains(a)}:function(b,a){while((a=a.parentNode)){if(a===b)return true}return false},bL=!cd?function(b,a){return b.getAttribute(a)||''}:function(b,a){a=a.toLowerCase();a=bG[a]||a;if(S[a]){return b[S[a]]||''}return(cl[a]?b.getAttribute(a,2)||'':ck[a]?b.getAttribute(a)?a:'':((b=b.getAttributeNode(a))&&b.value)||'')},bg=!bA?function(b,a){return n?!!b.getAttribute(a):b.hasAttribute(a)}:function(b,a){a=a.toLowerCase();a=bG[a]||a;if(S[a]){return!!b[S[a]]}b=b.getAttributeNode(a);return!!(b&&(b.specified||b.nodeValue))},cs=function(b){b=b.firstChild;while(b){if(b.nodeType==3||b.nodeName>'@')return false;b=b.nextSibling}return true},ct=function(b){return bg(b,'href')&&cj[b.nodeName]},cu=function(b,a){var d=1,g=a?'nextSibling':'previousSibling';while((b=b[g])){if(b.nodeName>'@')++d}return d},cv=function(b,a){var d=1,g=a?'nextSibling':'previousSibling',j=b.nodeName;while((b=b[g])){if(b.nodeName==j)++d}return d},cw=function(b){for(var a in b){o[a]=!!b[a];if(a=='SIMPLENOT'){bh={};T={};bi={};U={};o['USE_QSAPI']=false;N=new RegExp(bU,'g')}else if(a=='USE_QSAPI'){o[a]=!!b[a]&&P;N=new RegExp(ba,'g')}}},u=function(b){if(o.VERBOSITY){if(typeof v.DOMException!='undefined'){var a=new Error();a.message='SYNTAX_ERR: (Selectors) '+b;a.code=12;throw a;}else{throw new Error(12,'SYNTAX_ERR: (Selectors) '+b);}}else{var d=v.console;if(d&&d.log){d.log(b)}else{if(/exception/i.test(b)){v.status=b;v.defaultStatus=b}else{v.status+=b}}}},o={CACHING:false,SHORTCUTS:false,SIMPLENOT:true,USE_HTML5:false,USE_QSAPI:P,VERBOSITY:true},bM='f&&f(c[k]);r[r.length]=c[k];continue main;',V=function(b,a,d){var g=typeof b=='string'?b.match(bb):b;if(g.length==1){a+=bN(g[0],d?bM:'f&&f(k);return true;')}else{var j=-1,h={},f;while((f=g[++j])){f=f.replace(O,'');if(!h[f]&&(h[f]=true)){a+=bN(f,d?bM:'f&&f(k);return true;')}}}if(d){return new Function('c,s,r,d,h,g,f','var N,n,x=0,k=-1,e;main:while((e=c[++k])){'+a+'}return r;')}else{return new Function('e,s,r,d,h,g,f','var N,n,x=0,k=e;'+a+'return false;')}},bN=function(b,a){var d,g,j,h=0,f,c,k,x,p,s;while(b){h++;if((c=b.match(w.universal))){f=''}else if((c=b.match(w.id))){a='if('+(n?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+c[1]+'"){'+a+'}'}else if((c=b.match(w.tagName))){a='if(e.nodeName'+(n?'=="'+c[1]+'"':bC+'=="'+c[1].toUpperCase()+'"')+'){'+a+'}'}else if((c=b.match(w.className))){a='if((n='+(n?'s.getAttribute(e,"class")':'e.className')+')&&n.length&&(" "+'+(z?'n.toLowerCase()':'n')+'.replace('+bu+'," ")+" ").indexOf(" '+(z?c[1].toLowerCase():c[1])+' ")>-1){'+a+'}'}else if((c=b.match(w.attribute))){f=c[1].split(':');f=f.length==2?f[1]:f[0]+'';if(c[2]&&!H[c[2]]){u('Unsupported operator in attribute selectors "'+b+'"');return''}p=false;s='false';if(c[2]&&c[4]&&(s=H[c[2]])){bH['class']=z?1:0;c[4]=c[4].replace(/\\([0-9a-f]{2,2})/,'\\x$1');p=(n?cm:bH)[f.toLowerCase()];s=s.replace(/\%m/g,p?c[4].toLowerCase():c[4])}else if(c[2]=='!='||c[2]=='='){s='n'+c[2]+'="'+c[4]+'"'}f='n=s.'+(c[2]?'get':'has')+'Attribute(e,"'+c[1]+'")'+(p?'.toLowerCase();':';');a=f+'if('+(c[2]?s:'n')+'){'+a+'}'}else if((c=b.match(w.adjacent))){a=bx?'var N'+h+'=e;if(e&&(e=e.previousElementSibling)){'+a+'}e=N'+h+';':'var N'+h+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+a+'break;}}e=N'+h+';'}else if((c=b.match(w.relative))){a=bx?('var N'+h+'=e;e=e.parentNode.firstElementChild;while(e&&e!==N'+h+'){'+a+'e=e.nextElementSibling}e=N'+h+';'):('var N'+h+'=e;e=e.parentNode.firstChild;while(e&&e!==N'+h+'){if(e.nodeName>"@"){'+a+'}e=e.nextSibling}e=N'+h+';');}else if((c=b.match(w.children))){a='var N'+h+'=e;if(e&&e!==h&&e!==g&&(e=e.parentNode)){'+a+'}e=N'+h+';';}else if((c=b.match(w.ancestor))){a='var N'+h+'=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){'+a+'}e=N'+h+';';}else if((c=b.match(w.spseudos))&&c[1]){switch(c[2]){case'root':if(c[7]){a='if(e===h||s.contains(h,e)){'+a+'}';}else{a='if(e===h){'+a+'}';}break;case'empty':a='if(s.isEmpty(e)){'+a+'}';break;default:if(c[2]&&c[6]){if(c[6]=='n'){a='if(e!==h){'+a+'}';break;}else if(c[6]=='even'){d=2;g=0;}else if(c[6]=='odd'){d=2;g=1;}else{g=((j=c[6].match(/(-?\d+)$/))?parseInt(j[1],10):0);d=((j=c[6].match(/(-?\d*)n/))?parseInt(j[1],10):0);if(j&&j[1]=='-')d=-1;}p=g<1&&d>1?'(n-('+g+'))%'+d+'==0':d>+1?(c[3]=='last')?'(n-('+g+'))%'+d+'==0':'n>='+g+'&&(n-('+g+'))%'+d+'==0':d<-1?(c[3]=='last')?'(n-('+g+'))%'+d+'==0':'n<='+g+'&&(n-('+g+'))%'+d+'==0':d===0?'n=='+g:(c[3]=='last')?d==-1?'n>='+g:'n<='+g:d==-1?'n<='+g:'n>='+g;a='if(e!==h){n=s['+(c[5]?'"nthOfType"':'"nthElement"')+'](e,'+(c[3]=='last'?'true':'false')+');if('+p+'){'+a+'}}';}else{d=c[3]=='first'?'previous':'next';j=c[3]=='only'?'previous':'next';g=c[3]=='first'||c[3]=='last';s=c[5]?'&&n.nodeName!=e.nodeName':'&&n.nodeName<"@"';a='if(e!==h){'+('n=e;while((n=n.'+d+'Sibling)'+s+');if(!n){'+(g?a:'n=e;while((n=n.'+j+'Sibling)'+s+');if(!n){'+a+'}')+'}')+'}';}break;}}else if((c=b.match(w.dpseudos))&&c[1]){switch(c[1]){case'not':f=c[3].replace(O,'');if(o.SIMPLENOT&&!bV.test(f)){u('Negation pseudo-class only accepts simple selectors "'+b+'"');return'';}else{if('compatMode'in i){a='if(!'+V([f],'',false)+'(e,s,r,d,h,g)){'+a+'}';}else{a='if(!s.match(e, "'+f.replace(/\x22/g,'\\"')+'",g)){'+a+'}';}}break;case'checked':p='if((typeof e.form!="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)';a=(o.USE_HTML5?p+'||(/^option$/i.test(e.nodeName)&&e.selected)':p)+'){'+a+'}';break;case'disabled':a='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&e.disabled){'+a+'}';break;case'enabled':a='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&!e.disabled){'+a+'}';break;case'lang':p='';if(c[3])p=c[3].substr(0,2)+'-';a='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+c[3].toLowerCase()+'")||(n&&(n=="'+c[3].toLowerCase()+'"||n.substr(0,3)=="'+p.toLowerCase()+'"))){'+a+'break;}}while((e=e.parentNode)&&e!==g);';break;case'target':j=i.location?i.location.hash:'';if(j){a='if(e.id=="'+j.slice(1)+'"){'+a+'}';}break;case'link':a='if(s.isLink(e)&&!e.visited){'+a+'}';break;case'visited':a='if(s.isLink(e)&&e.visited){'+a+'}';break;case'active':if(n)break;a='if(e===d.activeElement){'+a+'}';break;case'hover':if(n)break;a='if(e===d.hoverElement){'+a+'}';break;case'focus':if(n)break;a=bX?'if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href)){'+a+'}':'if(e===d.activeElement&&(e.type||e.href)){'+a+'}';break;case'selected':f=cf?'||(n=e.parentNode)&&n.options[n.selectedIndex]===e':'';a='if(/^option$/i.test(e.nodeName)&&(e.selected'+f+')){'+a+'}';break;default:break;}}else{f=false;x=true;for(f in D){if((c=b.match(D[f].Expression))&&c[1]){k=D[f].Callback(c,a);a=k.source;x=k.status;if(x)break;}}if(!x){u('Unknown pseudo-class selector "'+b+'"');return'';}if(!f){u('Unknown token in selector "'+b+'"');return'';}}if(!c){u('Invalid syntax in selector "'+b+'"');return'';}b=c&&c[c.length-1];}return a;},bj=function(b,a,d,g){var j;if(!(b&&b.nodeName>'@')){u('Invalid element argument');return false;}else if(!a||typeof a!='string'){u('Invalid selector argument');return false;}else if(d&&d.nodeType==1&&!bf(d,b)){return false;}else if(X!==d){F(d||(d=b.ownerDocument));}a=a.replace(O,'');o.SHORTCUTS&&(a=NW.Dom.shortcuts(a,b,d));if(bm!=a){if((j=a.match(N))&&j[0]==a){bl=(j=a.match(bb)).length<2;bm=a;bo=j;}else{u('The string "'+a+'", is not a valid CSS selector');return false;}}else j=bo;if(!n&&o.USE_QSAPI&&b[R]&&!(bc&&bF.test(a))&&!(ce&&ch.test(a))&&!bE.test(a)){try{if(b[R](a)){if(typeof g=='function'){g(b);}return true;}return false;}catch(e){}}if(!T[a]||bh[a]!==d){T[a]=V(bl?[a]:j,'',false);bh[a]=d;}return T[a](b,bk,[],i,m,d,g);},be=function(b,a,d){var g,j,h,f,c,k,x=b;if(arguments.length===0){u('Missing required selector parameters');return[];}else if(b===''){u('Empty selector string');return[];}else if(typeof b!='string'){return[];}else if(X!==a){F(a||(a=i));}if(o.CACHING&&(f=l.loadResults(x,a,i,m))){return d?bJ([],f,d):f;}if(!cg&&ci.test(b)){switch(b.charAt(0)){case'#':if((h=I(b.slice(1),a))){f=[h];}else f=[];break;case'.':f=J(b.slice(1),a);break;default:f=A(b,a);break;}}else if(!n&&o.USE_QSAPI&&!(bc&&bF.test(b))&&!bE.test(b)){try{f=a.querySelectorAll(b);}catch(e){}}if(f){f=d?bJ([],f,d):bw?K.call(f):bI([],f);o.CACHING&&l.saveResults(x,a,i,f);return f;}b=b.replace(O,'');o.SHORTCUTS&&(b=NW.Dom.shortcuts(b,a));if((j=bn!=b)){if((c=b.match(N))&&c[0]==b){W=(c=b.match(bb)).length<2;bn=b;bp=c;}else{u('The string "'+b+'", is not a valid CSS selector');return[];}}else c=bp;if(a.nodeType==11){f=a.childNodes;}else if(!n&&W){if(j){c=b.match(bW);k=c[c.length-1];G=k.split(':not')[0];q=b.length-k.length;}if((c=G.match(E.ID))&&(k=c[1])){if((h=I(k,a))){if(bj(h,b)){d&&d(h);f=[h];}else f=[];}}else if((c=b.match(E.ID))&&(k=c[1])){if((h=I(k,i))){if('#'+k==b){d&&d(h);f=[h];}if(/[>+~]/.test(b)){a=h.parentNode;}else{b=b.replace('#'+k,'*');q-=k.length+1;a=h;}}else f=[];}if(f){o.CACHING&&l.saveResults(x,a,i,f);return f;}if(!Q&&(c=G.match(E.TAG))&&(k=c[1])){if((f=A(k,a)).length===0){return[];}b=b.slice(0,q)+b.slice(q).replace(k,'*');}else if((c=G.match(E.CLASS))&&(k=c[1])){if((f=J(k,a)).length===0){return[];}if(bv.test(b.charAt(b.indexOf(k)-1))){b=b.slice(0,q)+b.slice(q).replace('.'+k,'');}else{b=b.slice(0,q)+b.slice(q).replace('.'+k,'*');}}else if((c=b.match(E.CLASS))&&(k=c[1])){if((f=J(k,a)).length===0){return[];}for(var p=0,s=[];f.length>p;++p){s=bI(s,f[p].getElementsByTagName('*'));}f=s;if(bv.test(b.charAt(b.indexOf(k)-1))){b=b.slice(0,q)+b.slice(q).replace('.'+k,'');}else{b=b.slice(0,q)+b.slice(q).replace('.'+k,'*');}}else if(Q&&(c=G.match(E.TAG))&&(k=c[1])){if((f=A(k,a)).length===0){return[];}b=b.slice(0,q)+b.slice(q).replace(k,'*');}}if(!f){f=/^(?:applet|object)$/i.test(a.nodeName)?a.childNodes:A('*',a);}if(!U[b]||bi[b]!==a){U[b]=V(W?[b]:c,'',true);bi[b]=a}f=U[b](f,bk,[],i,m,a,d);o.CACHING&&l.saveResults(x,a,i,f);return f},bh={},T={},bi={},U={},bk={nthElement:cu,nthOfType:cv,getAttribute:bL,hasAttribute:bg,byClass:J,byName:bK,byTag:A,byId:I,contains:bf,isEmpty:cs,isLink:ct,select:be,match:bj};Tokens={prefixes:L,encoding:r,operators:bq,whitespace:y,identifier:B,attributes:C,combinators:br,pseudoclass:M,pseudoparms:bs,quotedvalue:Y};l.emit=u;l.byId=cn;l.byTag=cp;l.byName=bK;l.byClass=cr;l.getAttribute=bL;l.hasAttribute=bg;l.match=bj;l.select=be;l.compile=V;l.contains=bf;l.configure=cw;l.setCache=function(){return};l.loadResults=function(){return};l.saveResults=function(){return};l.shortcuts=function(b){return b};l.Config=o;l.Snapshot=bk;l.Operators=H;l.Selectors=D;l.Tokens=Tokens;l.registerOperator=function(b,a){H[b]||(H[b]=a)};l.registerSelector=function(b,a,d){D[b]||(D[b]={Expression:a,Callback:d})};F(i,true)})(this);


/***********************************************************************************************!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);
