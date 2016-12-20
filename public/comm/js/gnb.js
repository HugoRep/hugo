
var menuList = [{ name:"Monitoring" , url:"#"},
				 { name:"Device Connectivity" , url:"#"
	 				,depth:[{ name:"- Machine/Device/Sensor Management" , url:"#"},
							{ name:"- Unit Management"					, url:"#"},
							{ name:"- Sensor Monitoring"				, url:"#"},
							{ name:"- Sensor History Management"		, url:"#"},
							{ name:"- Protocol Management"				, url:"#"}]
	 			} ,
                {name:"Analytics Model", url:"#"
                	,depth:[
							{ name:"- Analytics Model Management"	, url:"#"},
							{ name:"- Analytics Model Deployment"	, url:"#"}]
	 			},
                {name:"Alarm & Event", url:"#"
                	,depth:[
							{ name:"- Uncleared Alarm List"	, url:"#"},
							{ name:"- Alarm/Event History"	, url:"#"
								,depth:[
										{ name:"- Alarm History"	, url:"#"},
										{ name:"- Event History"	, url:"#"}]
							},
							{ name:"- Alarm Management"		, url:"#"},
							{ name:"- Event Management"				, url:"#"},
							{ name:"- Dispatching Rule Management"	, url:"#"}]
	 			},
				{name:"Admin", url:"#"
	 				,depth:[
							{ name:"- User Management"		, url:"#"},
							{ name:"- Menu Management"		, url:"#"},
							{ name:"- Other Settings"		, url:"#"},
							{ name:"- Log Management"		, url:"#"}]
				}];

function gnbInit( node , obj , depth , count , mode )		 			
{
	ECP_GNB_Setting.mode = mode;
	
	ECP_GNB_Method.recursionInit( node , obj , 0 , 0 );
	ECP_GNB_Setting.activeMode = mode
	ECP_GNB_Method.active();
	
	
	$(".user-profile-button").on('click' , function ( e ) {
		$(".login-box").css ( 'display' , 'block')
	});
      
	$(".user-profile-button").on('mouseleave' , function ( e ) {    	  
		$(".login-box").css ( 'display' , 'none')
	});
}


var ECP_GNB_Setting = {
	menuWidth:[ 107 , 171 , 142 , 130 , 78],
	depthWidth:[ 0 , 277 , 228 , 229 , 170],
	menuArray:[],
	subMenuArray:[],
	secMenuArray:[],
	interval_id:false,
	activeMode:false,
	oneDepth:0,
	twoDepth:0,
}




var ECP_GNB_Method = {
		setGnb:function( node , obj , depth , count )
		{
			if( depth == 0 )
			{
				node.append ( '<ul class="gnbMenu" ></ul>');
			}
			else if ( depth == 1 ) 
			{
				node.append ( '<ul class="sub_menu" id="gnb_subMenu_'+count+'" style="display:none;"></ul>');
				node.children('ul').css ( 'width' , ECP_GNB_Setting.depthWidth[count] )
			}
			else if ( depth == 2 )
			{
				node.append ( '<ul class="sec_menu" id="gnb_secMenu'+count+'" style="display:block;left:'+ECP_GNB_Setting.depthWidth[depth]+'px"></ul>');
			}
			
			for( var i = 0; i < obj.length; i ++ )
			{
				var menuName = obj[i].name;
				var menuLink = obj[i].url;
				var idName="";
				
				if(depth == 0 )idName =  "gnb_"+count+"_"+i;
				else if(depth == 1 )idName =  "gnbSub_"+count+"_"+i;
				else if(depth == 2 )idName =  "gnbSec_"+count+"_"+i;
				node.children('ul').append ('<li id="'+idName+'"><a href='+menuLink+'>'+menuName+'</a></li>' );
				
				var menuTarget = $("#"+idName+" a");
				if( depth  == 0 )
				{
					$("#"+idName).css ( 'width' , ECP_GNB_Setting.menuWidth[i] )
					menuTarget.bind ( 'mouseover' , $.proxy( this , "menuOver" ,  i ));
					menuTarget.bind ( 'mouseout' , $.proxy( this , 'gnb_active' , menuTarget , i ));
					ECP_GNB_Setting.menuArray.push (menuTarget )
				}
				else if ( depth == 1 )
				{
					menuTarget.bind ( 'mouseover' , $.proxy( this , 'subMenuOver' ,  i , count));
					menuTarget.bind ( 'mouseout' , $.proxy( this , 'gnb_active' , menuTarget , i , count));
					ECP_GNB_Setting.subMenuArray.push ( menuTarget );
					if( obj[i].depth != undefined )
					{
						var target = $("#"+idName);
						target.append( '<span class="sub_blet"><img src="../comm/img/ecp/gnb_arrow_icon.png"/></span>')
					}
				}
				else if ( depth == 2 )
				{
					menuTarget.bind ( 'mouseover' , $.proxy( this , 'secMenuOver' , menuTarget , i , count));
					menuTarget.bind ( 'mouseout' , $.proxy( this , 'gnb_active' , menuTarget , i , count));
					ECP_GNB_Setting.secMenuArray.push ( menuTarget );
					
				}
				$(".login-box, .user-profile-button").bind ( 'mouseover' , function (e )
				{
					$(".login-box")
					$(".user-profile-button > a").addClass ( 'active');
				});
				
				$(".login-box, .user-profile-button").bind ( 'mouseout' , function (e ) {
					$(".user-profile-button > a").removeClass ( 'active');
				});
				
				if( obj[i].depth == undefined ) continue;
				ECP_GNB_Method.recursionInit(  $("#"+idName) , obj[i].depth , depth+1  , i );
			}
		},
		recursionInit:function ( node , obj , depth , count )
		{
			ECP_GNB_Method.setGnb( node , obj , depth , count );
		},
		menuOver:function(  menuNum )
		{
			clearTimeout ( ECP_GNB_Setting.interval_id )
			this.menuReset();
			this.subMenuReset();

			ECP_GNB_Setting.menuArray[menuNum].addClass ( 'tab_menu-hover')
			$("#gnb_subMenu_"+menuNum).css ( 'display' , 'block')
		},
		subMenuOver:function( menuNum , count)
		{
			clearTimeout ( ECP_GNB_Setting.interval_id )
			this.subMenuReset();
			this.secMenuReset();
			var idName = "gnbSub_"+count+"_"+menuNum;	
			var menuTarget = $("#"+idName+" > a");
			menuTarget.addClass ( 'sub-menu-hover')
			$("#gnb_secMenu"+menuNum).css ( 'display' , 'block')
		},
		secMenuOver:function ( target , menuNum , count)
		{
			clearTimeout ( ECP_GNB_Setting.interval_id )
			this.secMenuReset();
			var idName = "gnbSub_"+count+"_"+menuNum;	
			var menuTarget = $("#"+idName+" a");
			target.addClass ( 'sec-menu-hover')
			
		},
		gnb_active:function ()
		{
			clearTimeout ( ECP_GNB_Setting.interval_id );
			ECP_GNB_Setting.interval_id = setTimeout( $.proxy(  this , 'gnbReset' ), 500 )
		},
		gnbReset:function()
		{
			this.menuReset();
			this.subMenuReset();
			this.secMenuReset();
			this.active( ECP_GNB_Setting.oneDepth , ECP_GNB_Setting.twoDepth);
		},
		menuReset:function()
		{
			for( var i=0; i < ECP_GNB_Setting.menuArray.length; i++ )
			{
				ECP_GNB_Setting.menuArray[i].removeClass ( 'tab_menu-hover');
				$("#gnb_subMenu_"+i).css( 'display' , 'none');
			}
		},
		subMenuReset:function()
		{
			for(var i = 0; i < ECP_GNB_Setting.subMenuArray.length; i++ )
			{
				ECP_GNB_Setting.subMenuArray[i].removeClass ( 'sub-menu-hover');
			}
			$("#gnb_secMenu"+1).css ( 'display' , 'none');
		},
		secMenuReset:function()
		{
			for(var i = 0; i < ECP_GNB_Setting.secMenuArray.length; i++ )
			{
				ECP_GNB_Setting.secMenuArray[i].removeClass ( 'sec-menu-hover')
			}
		},
		active:function( oneDepth  , twoDepth )
		{

			if( !ECP_GNB_Setting.activeMode || ECP_GNB_Setting.activeMode == undefined  )return;
			ECP_GNB_Setting.oneDepth = oneDepth;
			ECP_GNB_Setting.twoDepth = twoDepth;
			
			this.menuOver(oneDepth);
			this.subMenuOver( twoDepth , oneDepth )
		},
		gnbWidth:function( value )
		{
			$(".ecp_gnb").css ( 'width' , value )
				
		}
}