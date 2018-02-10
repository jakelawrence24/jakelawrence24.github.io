var partJson = {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#61dafb"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#d042ff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));
particlesJS.load('particles-js', jsonUri, function() {});


(function($) {    
  if ($.fn.style) {
    return;
  }

  // Escape regex chars with \
  var escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
      return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
      this.setAttribute(styleName, value);
      var priority = typeof priority != 'undefined' ? priority : '';
      if (priority != '') {
        // Add priority manually
        var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
            '(\\s*;)?', 'gmi');
        this.cssText =
            this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
      }
    };
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
      return this.removeAttribute(a);
    };
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
      var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
          'gmi');
      return rule.test(this.cssText) ? 'important' : '';
    }
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node
    if (typeof node == 'undefined') {
      return this;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
      if (typeof value != 'undefined') {
        // Set style property
        priority = typeof priority != 'undefined' ? priority : '';
        style.setProperty(styleName, value, priority);
        return this;
      } else {
        // Get style property
        return style.getPropertyValue(styleName);
      }
    } else {
      // Get CSSStyleDeclaration
      return style;
    }
  };
})(jQuery);

$(document).ready(function(){

    $('#about').on('click', function(event){
      $('#contact-text').css('position', 'fixed');

      $('#particles-js').style('height', '100%',
                               'important');
      particlesJS.load('particles-js', jsonUri, function() {});
      $('#resume').style('color', '#ffffff', 'important');
      $('#resume').style('text-decoration', 'none', 'important');
      $('.resume').css('display', 'none');

      if($('#about-text').css('display') === 'none'){
          $('#about').style('color', '#c2c2c2', 'important');
          $('#about').style('text-decoration', 'underline', 'important');
          $('#about-text').css('display', 'block');
      }else{
          $('#about').css('color', '#ffffff');
          $('#about').css('text-decoration', 'none');
          $('#about-text').css('display', 'none');
      }
      event.preventDefault();
    });

    $('#resume').on('click', function(event){
        var newHeight = $('.resume').css('height').split('p')[0] * 1.2;
        $('#particles-js').style('height', newHeight.toString() + 'px',
                                 'important');
        particlesJS.load('particles-js', jsonUri, function() {});

        $('#contact-text').css('position', 'relative');

        $('#about').css('color', '#ffffff');
        $('#about').css('text-decoration', 'none');
        $('#about-text').css('display', 'none');

        if($('.resume').css('display') === 'none'){
            $('#resume').style('color', '#c2c2c2', 'important');
            $('#resume').style('text-decoration', 'underline', 'important');
            $('.resume').css('display', 'block');
        }else{
            $('#resume').style('color', '#ffffff', 'important');
            $('#resume').style('text-decoration', 'none', 'important');
            $('.resume').css('display', 'none');
        }


        event.preventDefault();
    });


});