// A Jquery Visual Number Ticker - jQuery.numTick
// by Onur Celik [ www.onur.ws ] : [ onur@onur.ws ]

(function($){
	$.fn.extend({
		numTick : function(settings){
			// default settings..
			settings = $.extend({
				numbersUrl	: 'http://onur.ws/numTick/img/sprite.png',
				width  		: 30,
				height 		: 30,
				speed       : 1000,
				border      : '1px solid #ccc'
			}, settings);
            
			// define the number ticker
			var numberTicker = $(this);

            // get the numbers and the length
            var numbers         = numberTicker.text();
            var howMany         = numbers.length;
            
            // split the numbers one by one
            var splitted       = numbers.split('');
            
            // console the variables
            console.log('the number is : ' + numbers + ' -> ' + howMany + ' digits, splitted : ' + splitted);
            
            // empty the number ticker div to append the digits one by one later on
            numberTicker.text('');
            
            // set the number ticker div's css
            numberTicker.css({
                width   : settings.width * howMany,
                height  : settings.height,
                border  : settings.border,
                overFlow: 'hidden'
            });
            
            // append the digits wrapped with numberTickerDigit classed divs        
            $(splitted).each(function(k,v){
                numberTicker.append('<div class="numberTickerDigit">'+v+'</div>');
            }); 

            $('#'+ this.attr('id') +' div.numberTickerDigit').each(function(k,v){
                // cache the digit
                var theDigit = $(v).text();

                $(v).css({
                    float               : 'left',
                    width               : settings.width + 'px',
                    height              : settings.height + 'px',
                    background          : 'url(' + settings.numbersUrl + ') no-repeat',
                    backgroundPosition  : '0px 0px'
                }).text('');
                
                
                if (theDigit == 0){
                    $(v).animate({
                        backgroundPosition : 'left top'
                    }, settings.speed);
                }else if (theDigit == '1'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height + 'px'
                    }, settings.speed);
                }else if (theDigit == '2'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 2 + 'px'
                    }, settings.speed);
                }else if (theDigit == '3'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 3 + 'px'
                    }, settings.speed);
                }else if (theDigit == '4'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 4 + 'px'
                    }, settings.speed);
                }else if (theDigit == '5'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 5 + 'px'
                    }, settings.speed);
                }else if (theDigit == '6'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 6 + 'px'
                    }, settings.speed);
                }else if (theDigit == '7'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 7 + 'px'
                    }, settings.speed);
                }else if (theDigit == '8'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 8 + 'px'
                    }, settings.speed);
                }else if (theDigit == '9'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 9 + 'px'
                    }, settings.speed);
                }
                
                
            });
            
            
            
		}

	});
}(jQuery));



// these codes below, makes the jquery available to animate background position
(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			fx.start = [start[0],start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);
