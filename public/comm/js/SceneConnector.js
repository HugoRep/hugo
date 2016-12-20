function SceneConnector( obj )
{
	this.data = obj;
}

/**
 * 
 * @param arg : tag name
 */
SceneConnector.prototype.serchList = function( arg ) 
{
	if( $("#content-list"))$("#content-list").remove();	
	$(".list-box").append ('<div id="content-list"></div>' )
	for( var i = 0; i < this.data.length; i++){
		var check = this.serchData( arg , this.data[i].tagData.split(","))
		if( check )this.makeDiv(i)
	}
}

/**
 * 
 * @param arg
 * @param dataArr
 * @returns {Boolean}
 */

SceneConnector.prototype.serchData = function( arg , dataArr )
{
	if ( arg == "ALL") return true;
	for( var i = 0 ; i < dataArr.length; i++ ) { 
		if( dataArr[i].replace(/\s/gi, '') == arg )return true;
	}
	return false;
}

/**
 * 
 * @param n
 */

SceneConnector.prototype.makeDiv = function( n )
{
	var html =	'<div id="img">'+
					'<div id="imgList'+n+'" class="img-list"></div>'+
					'<h1>'+this.data[n].title+'</h1>'+
					'<p>'+this.data[n].discrition+'</p>'+
					'<div>'+this.data[n].tagData+'</div>'+
				'</div>'
	$("#content-list").append ( html );	
	for( var i = 0; i < this.data[n].imgUrl.length; i++ ){
		$("#imgList"+n).append ( '<img src="'+this.data[n].imgUrl[i]+'"/>')
	}
	
}



