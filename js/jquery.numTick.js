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
				speed       : 2000,
				border      : '1px solid #ccc',
				easing      : 'easeInOutCubic'
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
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '1'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '2'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 2 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '3'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 3 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '4'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 4 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '5'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 5 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '6'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 6 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '7'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 7 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '8'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 8 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }else if (theDigit == '9'){
                    $(v).animate({
                        backgroundPosition : '0px -' + settings.height * 9 + 'px'
                    }, {
                        duration: settings.speed,
                        easing: settings.easing
                    });
                }
                
                
            });
            
            
            
		}

	});
}(jQuery));


(function($){if(!document.defaultView||!document.defaultView.getComputedStyle){var oldCurCSS=$.curCSS;$.curCSS=function(elem,name,force){if(name==='background-position'){name='backgroundPosition';}
if(name!=='backgroundPosition'||!elem.currentStyle||elem.currentStyle[name]){return oldCurCSS.apply(this,arguments);}
var style=elem.style;if(!force&&style&&style[name]){return style[name];}
return oldCurCSS(elem,'backgroundPositionX',force)+' '+oldCurCSS(elem,'backgroundPositionY',force);};}
var oldAnim=$.fn.animate;$.fn.animate=function(prop){if('background-position'in prop){prop.backgroundPosition=prop['background-position'];delete prop['background-position'];}
if('backgroundPosition'in prop){prop.backgroundPosition='('+prop.backgroundPosition;}
return oldAnim.apply(this,arguments);};function toArray(strg){strg=strg.replace(/left|top/g,'0px');strg=strg.replace(/right|bottom/g,'100%');strg=strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");var res=strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);return[parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];}
$.fx.step.backgroundPosition=function(fx){if(!fx.bgPosReady){var start=$.curCSS(fx.elem,'backgroundPosition');if(!start){start='0px 0px';}
start=toArray(start);fx.start=[start[0],start[2]];var end=toArray(fx.end);fx.end=[end[0],end[2]];fx.unit=[end[1],end[3]];fx.bgPosReady=true;}
var nowPosX=[];nowPosX[0]=((fx.end[0]-fx.start[0])*fx.pos)+fx.start[0]+fx.unit[0];nowPosX[1]=((fx.end[1]-fx.start[1])*fx.pos)+fx.start[1]+fx.unit[1];fx.elem.style.backgroundPosition=nowPosX[0]+' '+nowPosX[1];};})(jQuery);jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});