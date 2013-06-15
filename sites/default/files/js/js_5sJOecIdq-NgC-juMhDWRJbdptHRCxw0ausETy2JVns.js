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
;
/*
 * Match Heights Plugin
 * Match the heights of targeted elements
 * 
 * Version 1.3
 * Updated 4/7/2010
 * Copyright (c) 2010 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function(a){a.fn.matchHeights=function(b){b=jQuery.extend(this,{minHeight:null,maxHeight:null},b);tallest=b.minHeight?b.minHeight:0;this.each(function(){if(a(this).innerHeight()>tallest)tallest=a(this).outerHeight()});if(b.maxHeight&&tallest>b.maxHeight)tallest=b.maxHeight;return this.each(function(){extra=a(this).innerHeight()-a(this).height();extra+=a(this).outerHeight()-a(this).innerHeight();a.browser.msie&&a.browser.version==6||b.maxHeight?a(this).css({height:tallest-extra}):a(this).css({"min-height":tallest-extra})})}})(jQuery);;
jQuery(window).load(function(){
  window.setTimeout(nucleus_set_equal_height, 100);
  var slideshow = jQuery('#slideshow-wrapper .view-slideshow .views-slideshow-cycle-main-frame');
  if(slideshow) {
    nucleus_customize_slideshow();
    jQuery(window).resize(nucleus_customize_slideshow);
  }
  jQuery('#search-block-form .button input.form-submit').val(" ");
  jQuery('.block-user #user-login-form input[name=name]').val(Drupal.t('Username'));
  jQuery(".block-user #user-login-form input[name=name]").focus(function(){
    if(this.value == Drupal.t('Username')) {
      this.value='';
    }
  }).blur(function(){
    if(this.value == '') {
      this.value = Drupal.t('Username');
    }
  });
  jQuery('.block-user #user-login-form .form-item-pass').after('<div class="form-item form-type-password form-item-pass-tmp"><input type="text" class="form-text" maxlength="60" size="15" name="pass-tmp" id="edit-pass-tmp" value="' + Drupal.t('Password') + '"></div>');
  jQuery('.block-user #user-login-form .form-item-pass').hide();
  jQuery('#edit-pass-tmp').focus(function(){
	jQuery('.block-user #user-login-form .form-item-pass-tmp').hide();
    jQuery('.block-user #user-login-form .form-item-pass').show();
    jQuery('.block-user #user-login-form #edit-pass').focus();
  });
  jQuery('.block-user #user-login-form #edit-pass').blur(function(){
    if(this.value == '') {
      jQuery('.block-user #user-login-form .form-item-pass').hide();
	  jQuery('.block-user #user-login-form .form-item-pass-tmp').show();
    }
  });
  jQuery('ul.openid-links li.openid-link').click(function() {
    jQuery('.block-user #user-login-form .form-item-pass-tmp').hide();
  });
  jQuery('ul.openid-links li.user-link').click(function() {
    jQuery('.block-user #user-login-form .form-item-pass').hide();
    jQuery('.block-user #user-login-form .form-item-pass-tmp').show();
  });
  jQuery(".block input.form-text").focus(function(){
	if(jQuery(this).attr('id') != "edit-pass-tmp" && jQuery(this).attr('name') != 'search_block_form') {
	  jQuery(this).addClass('active');
	}
	if(jQuery(this).attr('name') == 'search_block_form') {
	  console.log(jQuery('#search_block_form'));
	  jQuery('#search-block-form').addClass('active');
	}
  }).blur(function(){
	jQuery(this).removeClass('active');
	if(jQuery(this).attr('name') == 'search_block_form') {
	  jQuery('#search-block-form').removeClass('active');
	}
  });

  var header_top = jQuery('#header-top-wrapper');
  var header_top_button = jQuery('#header-wrapper a.accordion').addClass('active');
  var header_top_height = header_top.height();
  header_top_button.click(function() {
    if(header_top_button.hasClass('active')) {
      header_top_button.removeClass('active');
      header_top.css({'overflow': 'hidden'});
      header_top.stop(true, false).animate({"height": "0px"}, 500, function(){
      });      
    }
    else {
      header_top.stop(true, false).animate({"height": header_top_height + "px"}, 500, function(){
        header_top_button.addClass('active');
        header_top.css({'overflow': 'visible'});
      });
    }
  });
}); 

function nucleus_loop_until_change_height(counter, sidebar_second_height){
  if(counter == 10) {
    return;
  }
  var sidebar_second_height_cur = jQuery('#sidebar-second-wrapper > .grid-inner').height();
  if(sidebar_second_height_cur != sidebar_second_height) {
    nucleus_sidebar_equal_height();
    return;
  }
  window.setTimeout(function(){
    nucleus_loop_until_change_height(counter + 1, sidebar_second_height);
  }, 500);
}


function nucleus_set_equal_height() {
	jQuery('#panel-fourth-wrapper .panel-column > .grid-inner').matchHeights();
	jQuery('#panel-seventh-wrapper .panel-column > .grid-inner').matchHeights();
	jQuery('#sidebar-home-second-wrapper .grid-inner, #sidebar-home-third-wrapper .grid-inner').matchHeights();
	jQuery('#sidebar-home-first-wrapper .grid-inner, .container-home-inner .container-inner').matchHeights();	
	jQuery('#sidebar-first-wrapper > .grid-inner, #sidebar-second-wrapper > .grid-inner, #main-content').matchHeights();
	jQuery('#panel-social-wrapper .grid-inner').matchHeights();
	jQuery('.quicktabs-wrapper ul.quicktabs-tabs li a').click(function(){
      window.setTimeout(nucleus_sidebar_equal_height, 500);
	});
	jQuery('.quicktabs-wrapper ul.quicktabs-tabs li a.ajax-processed').click(function(){
	  var sidebar_second_height = jQuery('#sidebar-second-wrapper > .grid-inner').height();
	  nucleus_loop_until_change_height(0, sidebar_second_height);
	});
	jQuery('.quick-accordion .ui-accordion-header').click(function(){
      window.setTimeout(nucleus_sidebar_equal_height, 500);
	});
	jQuery('.quicktabs-ui-wrapper .ui-state-default').click(function(){
      window.setTimeout(nucleus_sidebar_equal_height, 500);
	});
}

function nucleus_sidebar_equal_height() {
  jQuery('#sidebar-first-wrapper > .grid-inner, #sidebar-second-wrapper > .grid-inner, #main-content > .grid-inner').matchHeights();
}

function nucleus_customize_slideshow() {
	var screen_width = jQuery(window).width();
	var container_width = jQuery('div.container').width();
	var slideshow = jQuery('#slideshow-wrapper .view-slideshow .views-slideshow-cycle-main-frame');
	if(slideshow && screen_width > container_width) {
		slideshow.css({'width': screen_width + "px", 'overflow': 'hidden'});
	}
}

;
