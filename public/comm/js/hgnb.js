var jqxBaseFramework = window.minQuery || window.jQuery;

+function ($)
{
	var scop = $.jGnb = $.jGnb || {};
	var element = {}
	$.jGnb.propertyChangeMap = {};
	
	var depthCountCheck =""
	var nodeIDName = "" 
	var nodeIDName2 = ""

	//////////////////////////////////////////////////////////////////
	// property
	//////////////////////////////////////////////////////////////////
	
	$.jGnb.propertyChangeMap['easing'] = function(){
		console.log ( 'easing' );
	};
	
	$.jGnb.propertyChangeMap["duration"] = function(){
		console.log ( 'duration' ) ;
	};
	
	$.jGnb.propertyChangeMap['anchor'] = function(){
		console.log ( 'anchor');
	};
	
	$.jGnb.propertyChangeMap['exception'] = function (){
		console.log ( 'exception' );
	};
	
	$.jGnb.propertyChangeMap['activeclass'] = function(){
		console.log ('activeclass' );
	};
	
	$.jGnb.propertyChangeMap['wrapper'] = function(){
		console.log ( 'wrapper' ) ;
	};
	
	$.jGnb.propertyChangeMap['bindingwindow'] = function (){
		console.log ( 'bindingwindow');
	};
	
	$.jGnb.propertyChangeMap['correction'] = function (){
		console.log ( 'correction');
	};
	
	/**
	 * default property
	 */
	
	$.jGnb.defaults = {
			easing       : 'swing',
			duration     : 1000,
	        exception    : null,
	        activeclass  : 'active',
	        wrapper      : null,
	        bindingwindow: true,
	        correction   : null
	}

	/**
	 * initialize
	 */
	
	$.fn.jGnb = function( option ){		
		element = this;		//target element;
		var options = $.extend({}, $.jGnb.defaults , option);
		for( var i in options )$.jGnb.propertyChangeMap[i]();
		return $.jGnb
	}
	
	/**
	 * Recursion function
	 * 
	 * dataObj : menu Object Data
	 * 		- name  : menuName
	 * 		- depth : sub menu Depth
	 * 
	 * depthCount : menu depth   
	 */
	
	$.fn.jGnb.setData = function ( dataObj , depthCount ) 
	{
		if( depthCount == null) depthCount = 0;
		
		for( var i = 0; i < dataObj.length; i++ ) 
		{
			scop.privateMethods.menuRender( dataObj[i] , depthCount , i )	//set data
				
			if( dataObj[i].depth ) 
			{
				$.fn.jGnb.setData( dataObj[i].depth , depthCount+1 );
			}
		}
	}
	
	/**
	 * public method--------------------------
	 */
	
	$.fn.jGnb.easing = function(){
		console.log ( 'easing' );
	}
	

	/**
	 * jGnb private Method 
	 * _init : 
	 */
	
	$.jGnb.privateMethods ={
		//_prop:0 , 
		_init:function (){
			console.log ( 'method init');
			
		},
		_event:function (){
			
		},
		
		/**
		 * 
		 * @param obj
		 * @param depthCount
		 * @param n
		 * @param len
		 */
		
		menuRender:function ( obj , depthCount , n  )
		{
			//this["_prop"+depthCount] = null;
			
			this["_prop"+depthCount] = n;
			var nodeID = 'jGnb_' + this.prependZero ( n , depthCount , this );
			
			var html = 	'<ul>\n'+
							'<li id="'+nodeID+'"><a href="'+obj.url+'">'+obj.name+'</a></li>\n'+
						'</ul>\n';
			
			console.log ( depthCount , n , obj.name , nodeIDName , nodeID );
			
			if( depthCount == 0 )
			{
				$(element.selector).append ( html );
				nodeIDName = nodeID;
			}
			else if ( depthCount == 1 ) 
			{
				$("#"+nodeIDName).append ( html );
				nodeIDName2 = nodeID
			}
			
			else {
				$("#"+nodeIDName2).append ( html );
			}
			
			
			target = $('#'+nodeID);
			target.addClass ( 'menuStyle');
			
			target.on ( 'mouseover' , function (){
				//console.log ( 'mouseOver' );
			})
			
			target.on ( 'mouseout' , function(){
				
			})
			
			target.on ( 'click' , function ( e ) {

			})
		},
		
		/**
		 * @param num
		 * @param len
		 * @param scop
		 * @returns {String}
		 */
		prependZero:function(num, len , scop ) {
			num = ""
			for( var i = 0; i <= len ; i++ )num += String(scop["_prop"+i]); 
	        return num;
		},
		//menu Event Handler 
		menuOver:function ( depth , id ) {
			console.log ( 'menuOver' );
		},
		menuOut:function ( depth , id ) {
			console.log ( 'menuOut' );
		},
		menuClick:function ( depth , id ) {
			console.log ( 'click' );
		},
		menuReset:function ( depth , id ) {
			
		},
		menuEvent:function ( target , depth , id )
		{
			taret.bind ( eventConst  , eventHandler );
		},
		
	} 	
}(jqxBaseFramework)