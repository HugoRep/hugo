/**
 * 
 */

+function()
{
	
	/**
	 * prototype member variable
	 * scope : this.__proto__;
	 */
	
	// ie 10 이하  __proto 예외 처리
	var scope = this.__proto__;
	

	ECPMethod = 
	{
		/**
		 * initialize
		 */
			
		init:+function()
		{			
			
			//scope.privateMethod.events.events()
		}(),
		
		monitoringScroll:function( scrollTarget , topposition )
		{
			
			var topHeight = topposition;
			scrollTarget.mCustomScrollbar({
				setHeight:$(window).height()-topHeight,
				theme:"minimal-dark"
				
			});
			
			$(window).resize(function() 
			{
				scrollTarget.css ( 'height' , $(window).height()-topHeight );
				
			});
		},
		
		gnb:function()
		{
			
		},
		
		/**
		 * Machine List
		 */
		cardLnb:function( gridId )
		{
			if(!gridId){
			    gridId = "gridTable";
			}
			
			$(".one_depth").on ( 'mousedown', "a" , function ( e )
			{
				if ( $(this).parent().find ( 'ul').css ( 'display') =="block" ){
					$(this).parent().find( 'ul').css ('display' ,'none');
					$(this).css('background', '#d3d6e0 url(../comm/img/ecp/lnb_arrow_top.png) 195px 18px no-repeat')
				}else{
					$(this).parent().find( 'ul').css ('display' ,'block');
					$(this).css('background', '#d3d6e0 url(../comm/img/ecp/lnb_arrow_bottom.png) 195px 18px no-repeat')
				}				
			});
			
			$(".one_depth").on ( 'mouseover', "a" , function (e ){
				if ( $(this).parent().find ( 'ul').css ( 'display') =="block" )$(this).css('background', '#d3d6e0 url(../comm/img/ecp/lnb_arrow_bottom.png) 195px 18px no-repeat')
				else $(this).css('background', '#d3d6e0 url(../comm/img/ecp/lnb_arrow_top.png) 195px 18px no-repeat')				
			})
			
			$(".one_depth").on ( 'mouseout', "a" , function (e ){
				if ( $(this).parent().find ( 'ul').css ( 'display') =="block" )$(this).css('background', '#f6f6f7 url(../comm/img/ecp/lnb_arrow_bottom.png) 195px 18px no-repeat')
				else $(this).css('background', '#f6f6f7 url(../comm/img/ecp/lnb_arrow_top.png) 195px 18px no-repeat')
			})
			
			$(".one_depth").on ( 'mouseover' , "ul li", function ( e ) {
				$(this).css ( 'background' , "#d3d6e0")
			})
			
			$(".one_depth").on ( 'mouseout', "ul li" , function ( e ) {
				$(this).css ( 'background' , "#fff")
			})
			
			$(".lnb-floating-button").on('click' , function (e){
				
				if( $(".lnb_wrap").css('width').split('px')[0] < 200)
				{
					$('.lnb_wrap label[for="menu_state"] i').css("right", 20);
					$('.lnb_wrap label[for="menu_state"] i').css('background', 'url(../comm/img/ecp/lnb_close_btn.png) 0px 0px no-repeat')
					$(".lnb_wrap").css('background' , '#fff' );
					try{
						$("#"+gridId).jqxGrid('width' , $(window).width()-270);
					}catch (e){}
				}
				else
				{
					$('.lnb_wrap label[for="menu_state"] i').css("right", 5);
					$('.lnb_wrap label[for="menu_state"] i').css('background', 'url(../comm/img/ecp/lnb_open_btn.png) 0px 0px no-repeat');
					$(".lnb_wrap").css('background' , '#eeeff4' );
					try{
						$("#"+gridId).jqxGrid('width' , $(window).width()-65);
					}catch (e){}
				}	
			})
			
			$(".lnb_add_btn").on ( 'click' , function (e){
				if( $(".lnb_add_layer").css('display') == 'none' ) $(".lnb_add_layer").css('display' ,'block');
				else $(".lnb_add_layer").css('display' ,'none');				
			})
		},
		gridList:function()
		{

			var id = document.getElementById('gridTable')
			if ( id == null)return;
			
		 	var columnMultiLine = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 10px;">' + value + '</div>';
	        }
		 	
		 	var columnrenderer = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 19px;">' + value + '</div>';
	        }
		 	
		 	var cellsrenderer = function (row, column, value) 
		 	{
		 	
		 		//짝수 일경우만 스타일 적용
		 		//if (row%2 == 1)return '<div class="row-custom-color">' + value + '</div>'; 
		 	}
		 	
		 	var dataObj = [	{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	},
							{ Apply:"Y", Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"ON", Spec:"Y",	Description:"-"	}];
	        var source =
	        {
	            localdata: dataObj,
	            datatype: "array"
	        };
	        
	     
		 	$("#gridTable").jqxGrid(
		 	{
		 	   	source: source,
				width:"100%",
				height:"500px",
				columnsheight:"47px",
				rowsheight:32,
				scrollbarsize:5,
		 	    columns: [
		 	        { text: 'Apply'			 		, datafield: 'Apply'		, width:57		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Sensor</p>Name'		, datafield: 'Sensor'		, width:72		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Device'		 		, datafield: 'Device'		, width:91		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Deivce</br>Area'		, datafield: 'DeivceArea'	, width:65		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Start</br>Adress'		, datafield: 'Start'		, width:67		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Offset'				, datafield: 'Offset'		, width:60		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Length'				, datafield: 'Length'		, width:65		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Data Type'				, datafield: 'Data'			, width:82		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Read</br>Transaction'	, datafield: 'Read'			, width:100		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'White</br>Transaction'	, datafield: 'White'		, width:99		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Scanning'				, datafield: 'Scanning'		, width:83		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Spec</br>Y/N'			, datafield: 'Spec'			, width:55		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Description'			, datafield: 'Description'	, width:95		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Apply'			 		, datafield: 'Apply2'		, width:57		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Sensor</p>Name'		, datafield: 'Sensor2'		, width:72		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Device'		 		, datafield: 'Device2'		, width:91		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Deivce</br>Area'		, datafield: 'DeivceArea2'	, width:65		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Start</br>Adress'		, datafield: 'Start2'		, width:67		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Offset'				, datafield: 'Offset2'		, width:60		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Length'				, datafield: 'Length2'		, width:65		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Data Type'				, datafield: 'Data2'		, width:82		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Read</br>Transaction'	, datafield: 'Read2'		, width:100		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'White</br>Transaction'	, datafield: 'White2'		, width:99		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Scanning'				, datafield: 'Scanning2'	, width:83		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Spec</br>Y/N'			, datafield: 'Spec2'		, width:55		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Description'			, datafield: 'Description2'	, width:95		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	    ]
		 	});
		 	$(window).bind('resize' , function(e)
		 	{
		 		$("#gridTable").jqxGrid('height' , $(window).height()-286)
		 		
		 		if( $(".lnb_wrap") )return
		 		if( $(".lnb_wrap").css('width').split('px')[0] > 200)
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-270);
				}
				else
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-65);
				}	
		 	});
		 	$(window).resize();
		},

		/**
		 *
		 **/

		gridEdit:function()
		{
			
			var id = document.getElementById('gridTable')
			if ( id == null)return;
			
		 	var columnMultiLine = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 10px;">' + value + '</div>';
	        }
		 	
		 	var columnrenderer = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 19px;">' + value + '</div>';
	        }


		 	var cellsrenderer = function (row, column, value) 
		 	{	 	
	        	if ( column =="toggleButton" || column =="Description")
	        	{
	        		return '<div class="toggle-btn"><img style="display:none;" src="../comm/img/ecp/comp_toggle_on.png"/><img src="../comm/img/ecp/comp_toggle_off.png"/></div>';
	        	}
	        	if( column == "Spec")
	        	{
	        		return '<div class="edit-btn">' + value + '<a href="#">Edit</a></div>';
	        	}
		 	}
		 	
		 	var applyRenderers = function ( row , colum , value )
			{
				if( value == 'N')return '<span class="grid-inactive">'+value+'</span>';
				else return;
			}
		 	
	        setTimeout ( function(){
	        	$(".toggle-btn").bind('click' , function(e){
		        	if(  $(this).find('img:first-child').css('display' ) == "none")
		        	{
		        		$(this).find('img:last-child').css('display' , 'none');
		        		$(this).find('img:first-child').css('display' , 'block');
		        	}
		        	else
		        	{
		        		$(this).find('img:last-child').css('display' , 'block');
		        		$(this).find('img:first-child').css('display' , 'none');
		        	}
		        })
		        
	        } , 1000)
	        
		 	var dataObj = [	{ Apply:'Y' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'N' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'Y' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'N' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'Y' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'N' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'Y' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							{ Apply:'N' , Sensor:"Tmp_001", Device:"Device_001", DeivceArea:"A", Start:"1000", Offset:"3", Length:"1", Data:"Integer", Read:"-", White:"Scenario2", Scanning:"", Spec:"Y",	Description:"-"	},
							];
	        var source =
	        {
	            localdata: dataObj,
	            datatype: "array",
	        };
	        

		 	$("#gridTable").jqxGrid(
		 	{
		 	   	source: source,
				width:"100%",
				height:"500px",
				columnsheight:"47px",
				rowsheight:32,
				scrollbarsize:5,
				editable: true,
				selectionmode: 'checkbox',
		 	    columns: [
		 	        { text: 'Apply'			 		, datafield: 'Apply'		, width:57			, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer:applyRenderers },
		 	        { text: 'Sensor</p>Name'		, columntype:'lastname' 	, datafield: 'Sensor'		, width:72			, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Device'		 		, columntype:'dropdownlist' , displayfield:'Device'		, datafield: 'Device'		, width:91		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer , createeditor:dropdown_list},
		 	        { text: 'Deivce</br>Area'		, columntype:'dropdownlist' , datafield: 'DeivceArea'	, width:65			, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer , createeditor:deivceArea_dropdown_list },
		 	        { text: 'Start</br>Adress'		, datafield: 'Start'		, width:67		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Offset'				, datafield: 'Offset'		, width:60		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Length'				, datafield: 'Length'		, width:65		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Data Type'				, datafield: 'Data'			, width:82		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Read</br>Transaction'	, datafield: 'Read'			, width:100		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'White</br>Transaction'	, datafield: 'White'		, width:99		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Scanning'				, columntype:'button' 		, datafield: 'toggleButton'		, width:83		, renderer: columnrenderer , cellsrenderer: cellsrenderer , buttonclick:toggleButtonClick },
					{ text: 'Spec</br>Y/N'			, datafield: 'Spec'			, width:55		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Description'			, columntype:'button' 		, datafield: 'Description'	, renderer: columnrenderer 		, cellsalign: 'center' },
		 	    ]
		 	});


			var mydata =[
 					{ value: "Device Area", label: "Device1" },
 					{ value: "Device Area", label: "Device2" },
 					{ value: "Device Area", label: "Device3" },
 					{ value: "Device Area", label: "Device4" },
 					{ value: "Device Area", label: "Device5" },
 					{ value: "Device Area", label: "Device6" },
 					{ value: "Device Area", label: "Device7" },
 					{ value: "Device Area", label: "Device8" }
			];

			function dropdown_list( row, cellvalue, editor )
			{
				editor.jqxDropDownList({source: mydata
					,width: 82
					,height:22
					,selectedIndex:1
					,theme:"sensor-dropdown"
					,dropDownHeight:100
										}
				);
			}
			
			var deivceArea_data =[
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "B" },
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "A" },
		 					{ value: "Device Area", label: "A" }
					];

			
			function deivceArea_dropdown_list( row, cellvalue, editor )
			{
				editor.jqxDropDownList({source: deivceArea_data
					,width: 56
					,height:22
					,selectedIndex:1
					,theme:"sensor-dropdown"
					,dropDownHeight:100
										}
				);
			}
			

			function toggleButtonClick ( row , cellvalue, editor )
			{				
				console.log ( cellvalue.currentTarget );
				//
			}

			$(window).bind('resize' , function(e)
		 	{
		 		$("#gridTable").jqxGrid('height' , $(window).height()-306)
		 		if( $(".lnb_wrap") ) return;
		 		if( $(".lnb_wrap").css('width').split('px')[0] > 200)
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-270);
				}
				else
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-65);
				}	
		 	});
				 	$(window).resize();
				 	
		 	$('#gridTable').jqxGrid('scrolloffset', 100, -100 , 100 , 100);
		},
		
		gridModel:function()
		{
			
			var id = document.getElementById('gridTable');
			if ( id == null)return;
			
		 	var columnMultiLine = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 10px;">' + value + '</div>';
	        }
		 	
		 	var columnrenderer = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 19px;">' + value + '</div>';
	        }


		 	var cellsrenderer = function ( row, column, value) 
		 	{	 	
		 		if ( column == "Machine" ){
		 			return '<div class="edit-btn"><a href="#">'+ value + '</a></div>';
		 		}else if ( column == "Model" ){
		 			return '<div class="model-export-btn"><a href="#"></a></div>';
		 		}else if ( column == "Anomaly" || column == "Root" || column == "RUL"){
		 			if(value=="") return;
		 			return '<div class="grid-round-icon"><span></span></div>';
		 		}else if ( column == "Processing"){
		 			return '<div class="grid-text-color-type01">'+value+'</div>';	
		 		}
		 	}
		 	
		 	var dataObj = [	{ Revision:"1" , Description:"Analytics model for CNC Drill-bit" , Anomaly:"true" , Root:"" 	, RUL:"" 	 , Machine:"1" , Processing:"Y" , Updated:"2016-04-21 12:30:16" , Model:"0"	},
		 	               	{ Revision:"2" , Description:"Analytics model for CNC Drill-bit" , Anomaly:"true" , Root:"true" , RUL:"" 	 , Machine:"1" , Processing:"N" , Updated:"2016-04-21 12:30:16" , Model:"10"	},
		 	               	{ Revision:"3" , Description:"Analytics model for CNC Drill-bit" , Anomaly:"true" , Root:"true" , RUL:"true" , Machine:"2" , Processing:"N" , Updated:"2016-04-21 12:30:16" , Model:"1"	},
		 	                { Revision:"4" , Description:"Analytics model for CNC Drill-bit" , Anomaly:"true" , Root:"true" , RUL:"true" , Machine:"3" , Processing:"N" , Updated:"2016-04-21 12:30:16" , Model:"1"	},
							];
	        var source =
	        {
	            localdata: dataObj,
	            datatype: "array",
	        };
	        
	         
			
		 	$("#gridTable").jqxGrid(
		 	{
		 	   	source: source,
				width:"100%",
				height:"100%",
				columnsheight:"47px",
				rowsheight:32,
				scrollbarsize:5,
				selectionmode: 'checkbox',
		 	    columns: [
		 	        { text: 'Revision'				, datafield: 'Revision'		, width:104		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Description'			, datafield: 'Description'	, width:210		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Anomaly</br>Detection'	, datafield: 'Anomaly'		, width:92		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'Root</br>Cause'		, datafield: 'Root'			, width:92		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	        { text: 'RUL</br>Prediction'	, datafield: 'RUL'			, width:92		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Machine</br>Count'		, datafield: 'Machine'		, width:90		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Processing'			, datafield: 'Processing'	, width:104		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Updated Time'			, datafield: 'Updated'		, width:142		, renderer: columnrenderer 		, cellsalign: 'center' , cellsrenderer: cellsrenderer },
					{ text: 'Model</br>Export'		, datafield: 'Model'		, minwidth:76		, renderer: columnMultiLine 	, cellsalign: 'center' , cellsrenderer: cellsrenderer },
		 	    ]
		 	});
		 	
		 	$(window).bind('resize' , function(e)
		 	{
		 		$("#gridTable").jqxGrid('height' , $(window).height()-306)
		 		
		 		if( $(".lnb_wrap").css('width').split('px')[0] > 200)
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-270);
				}
				else
				{
					$("#gridTable").jqxGrid('width' , $(window).width()-65);
				}	
		 	});
				 	$(window).resize();
				 	
		 	$('#gridTable').jqxGrid('scrolloffset', 100, -100 , 100 , 100);
		},

				
		sensorLnb:function( unitDiv , deviceDiv )
		{
			
			var unitData = [ { id: "1", text: "Unit_001", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "2", text: "Unit_002", parentid: "0", value: "$2.3", checked: false, expanded : true  , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "3", text: "Unit_003", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "4", text: "Unit_004", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "sensor1_1", text: "Sensor_001", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_2", text: "Sensor_002", parentid: "1", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor1_3", text: "Sensor_003", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_4", text: "Sensor_004", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_5", text: "Sensor_005", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_6", text: "Sensor_006", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_7", text: "Sensor_007", parentid: "1", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor1_8", text: "Sensor_008", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_1", text: "Sensor_001", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_2", text: "Sensor_002", parentid: "2", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor2_3", text: "Sensor_003", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_4", text: "Sensor_004", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_5", text: "Sensor_005", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_6", text: "Sensor_006", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_7", text: "Sensor_007", parentid: "2", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor2_8", text: "Sensor_008", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_1", text: "Sensor_001", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_2", text: "Sensor_002", parentid: "3", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor3_3", text: "Sensor_003", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_4", text: "Sensor_004", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_5", text: "Sensor_005", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_6", text: "Sensor_006", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_7", text: "Sensor_007", parentid: "3", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor3_8", text: "Sensor_008", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_1", text: "Sensor_001", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_2", text: "Sensor_002", parentid: "4", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor4_3", text: "Sensor_003", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_4", text: "Sensor_004", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_5", text: "Sensor_005", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_6", text: "Sensor_006", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_7", text: "Sensor_007", parentid: "4", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor4_8", text: "Sensor_008", parentid: "4", value: "$2.3", checked: false , expanded : true }			                            
            
			];
			
			var deviceData = [ { id: "1", text: "device_001", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "2", text: "device_002", parentid: "0", value: "$2.3", checked: false, expanded : true  , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "3", text: "device_003", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "4", text: "device_004", parentid: "0", value: "$2.3", checked: false, expanded : false , icon: "../comm/img/ecp/sensor_monitoring_tree_icon.png"}
            ,{ id: "sensor1_1", text: "Sensor_001", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_2", text: "Sensor_002", parentid: "1", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor1_3", text: "Sensor_003", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_4", text: "Sensor_004", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_5", text: "Sensor_005", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_6", text: "Sensor_006", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor1_7", text: "Sensor_007", parentid: "1", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor1_8", text: "Sensor_008", parentid: "1", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_1", text: "Sensor_001", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_2", text: "Sensor_002", parentid: "2", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor2_3", text: "Sensor_003", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_4", text: "Sensor_004", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_5", text: "Sensor_005", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_6", text: "Sensor_006", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor2_7", text: "Sensor_007", parentid: "2", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor2_8", text: "Sensor_008", parentid: "2", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_1", text: "Sensor_001", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_2", text: "Sensor_002", parentid: "3", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor3_3", text: "Sensor_003", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_4", text: "Sensor_004", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_5", text: "Sensor_005", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_6", text: "Sensor_006", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor3_7", text: "Sensor_007", parentid: "3", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor3_8", text: "Sensor_008", parentid: "3", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_1", text: "Sensor_001", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_2", text: "Sensor_002", parentid: "4", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor4_3", text: "Sensor_003", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_4", text: "Sensor_004", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_5", text: "Sensor_005", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_6", text: "Sensor_006", parentid: "4", value: "$2.3", checked: false , expanded : true }
            ,{ id: "sensor4_7", text: "Sensor_007", parentid: "4", value: "$2.3", checked: false  , expanded : true }
            ,{ id: "sensor4_8", text: "Sensor_008", parentid: "4", value: "$2.3", checked: false , expanded : true }			                            
            
			];
			
			// prepare the data
			
			var unitSource =
			{
			    datatype: "json",
			    datafields: [
			        { name: 'id' },
			        { name: 'parentid' },
			        { name: 'icon' },
			        { name: 'text' },
			        { name: 'value' },
			        { name: 'checked' },
			        { name: 'expanded' }
			    ],
			    id: 'id',
			    localdata: unitData
			};
			var deviceSource =
			{
			    datatype: "json",
			    datafields: [
			        { name: 'id' },
			        { name: 'parentid' },
			        { name: 'icon' },
			        { name: 'text' },
			        { name: 'value' },
			        { name: 'checked' },
			        { name: 'expanded' }
			    ],
			    id: 'id',
			    localdata: deviceData
			};
			
			dataAdapter = new $.jqx.dataAdapter(unitSource);
			dataAdapter.dataBind();
			unitRecords = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);
			
			dataAdapter = new $.jqx.dataAdapter(deviceSource);
			dataAdapter.dataBind();
			deviceRecords = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);
			
			
			unitDiv.jqxTree({  hasThreeStates: true,  checkboxes: true, width: '229px',source: unitRecords });
			deviceDiv.jqxTree({  hasThreeStates: true,  checkboxes: true, width: '229px' ,source: deviceRecords });
			
			
			$(".tab_Button a").on('click' , function ( e ) {
				if( $(this).parent().index() )
				{
					unitDiv.css ( 'display' , 'none')
					deviceDiv.css ( 'display' , 'block')
					$(".tab_Button").find('a').removeClass('active')
					$(this).addClass('active');
				}
				else
				{
					
					deviceDiv.css ( 'display' , 'none')
					unitDiv.css ( 'display' , 'block')
					$(".tab_Button").find('a').removeClass('active')
					$(this).addClass('active');
				}
				
			})
			deviceDiv.css ( 'display' , 'none')
		},
		
		gridUnit:function()
		{

			var id = document.getElementById('unitGrid')
			if ( id == null)return;
			
		 	var columnMultiLine = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 10px;">' + value + '</div>';
	        }
		 	
		 	var columnrenderer = function (value) 
		 	{
	            return '<div style="text-align: center; margin-top: 19px;">' + value + '</div>';
	        }
		 	
		 	var cellsrenderer = function (row, column, value) 
		 	{
		 		if( row == 0 ) return '<div class="nospec">' + value + '</div>';
		 		else if ( row ==1 ) return '<div class="outof_spec">' + value + '</div>';
		 		else if ( row == 2 ) return '<div class="outof_control">' + value + '</div>';
		 		else if ( row == 3 ) return '<div class="in_range">' + value + '</div>';
		 		 
		 	}
		 	
		 	var valuerenderer = function (row, column, value)
		 	{
	 		
		 		if( row == 0 ) return '<div class="nospec_box">' + value + '</div>';
		 		else if ( row ==1 ) return '<div class="outof_spec_box">' + value + '</div>';
		 		else if ( row == 2 ) return '<div class="outof_control_box">' + value + '</div>';
		 		else if ( row == 3 ) return '<div class="in_range_box">' + value + '</div>';
		 	}
		 	
		 	var dataObj = [	{ data0:"Sensor_001", data1:"Tmp_001", data2:"14", data3:"A", data4:"1000", data5:"3", data6:"1", data7:"Integer" , data8:"Integer" , data9:"Integer" , data10:"Integer" , data11:"Integer"},
		 	               	{ data0:"Sensor_002", data1:"Tmp_001", data2:"14", data3:"A", data4:"1000", data5:"3", data6:"1", data7:"Integer" , data8:"Integer" , data9:"Integer" , data10:"Integer" , data11:"Integer"},
		 	           		{ data0:"Sensor_003", data1:"Tmp_001", data2:"14", data3:"A", data4:"1000", data5:"3", data6:"1", data7:"Integer" , data8:"Integer" , data9:"Integer" , data10:"Integer" , data11:"Integer"},
		 	           		{ data0:"Sensor_004", data1:"Tmp_001", data2:"14", data3:"A", data4:"1000", data5:"3", data6:"1", data7:"Integer" , data8:"Integer" , data9:"Integer" , data10:"Integer" , data11:"Integer"}]
	        var source =
	        {
	            localdata: dataObj,
	            datatype: "array"
	        };
	        
	     
		 	$("#unitGrid").jqxGrid(
		 	{
		 	   	source: source,
				width:"100%",
				height:"180px",
				columnsheight:"27px",
				rowsheight:32,
				scrollbarsize:5,				
				columns: [
	                 { text: 'Sensor'	, datafield: 'data0' , align: 'center', cellsalign: 'center', width: 108 , cellsrenderer: cellsrenderer },
	                 { text: 'Type'		, datafield: 'data1' , align: 'center', cellsalign: 'center', width: 62 },
	                 { text: 'Value'	, datafield: 'data2' , align: 'center', cellsalign: 'center', width: 67 , cellsrenderer: valuerenderer },
	                 { text: 'Measure'	, datafield: 'data3' , align: 'center', cellsalign: 'center', width: 87 },
	                 { text: 'UCL'		, columngroup: 'LimitInfo', datafield: 'data4' , align: 'center', cellsalign: 'center', width: 60 },
	                 { text: 'LCL'		, columngroup: 'LimitInfo', datafield: 'data5' , align: 'center', cellsalign: 'center', width: 60 },
	                 { text: 'USL'		, columngroup: 'LimitInfo', datafield: 'data6' , align: 'center', cellsalign: 'center', width: 60 },
	                 { text: 'LSL'		, columngroup: 'LimitInfo', datafield: 'data7' , align: 'center', cellsalign: 'center', width: 60 },
	                 { text: 'Target'	, columngroup: 'LimitInfo', datafield: 'data8' , align: 'center', cellsalign: 'center', width: 60 },
	                 { text: 'Count'	, columngroup: 'Summary', datafield: 'data9' , align: 'center', cellsalign: 'center', width: 80 },
	                 { text: 'MinValue'	, columngroup: 'Summary', datafield: 'data10' , align: 'center', cellsalign: 'center', width:80 },
	                 { text: 'MaxValue'	, columngroup: 'Summary', datafield: 'data11' , align: 'center', cellsalign: 'center', width: 80 },
	                 { text: 'Last Received time'	, datafield: 'Discontinued9' , align: 'center', cellsalign: 'center' },
	                 
	                 
	               ],
	               columngroups: [
	                   { text: 'Limit Info.', align: 'center', name: 'LimitInfo' },
	                   { text: 'Summary', align: 'center', name: 'Summary' }
	               ]
		 	
		 	});
		 	
		 	$(window).bind('resize' , function(e)
		 	{
		 		$("#unitGrid").jqxGrid('height' , $(window).height()-286)
		 		
		 		if( $(".lnb_wrap") )return;
		 		if( $(".lnb_wrap").css('width').split('px')[0] > 200)
				{
					$("#unitGrid").jqxGrid('width' , $(window).width()-270);
				}
				else
				{
					$("#unitGrid").jqxGrid('width' , $(window).width()-65);
				}	
		 	});
		 	$(window).resize();
		
		},
		monitoringSlider:function ( sliderId ) 
		{
			 var range = document.getElementById(sliderId);

			 noUiSlider.create(range, {
					start: [4, 20],
					tooltips: [ true, true ],
					connect: true,
					step:0.5,
					limit:4,
					range: {
						'min': 0,
						'max': 24
					},
					pips: {
						mode: 'values',
						values: [0, 2, 4, 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20 , 22 , 24],
						format: wNumb({
							prefix: '',
							postfix:':00',
					})
				}
			});
			 
			range.noUiSlider.on('update', function ( values, handle ) {
				if ( handle ) {
					$(".noUi-handle-upper > .noUi-tooltip").text(sliderTimeCheck(values[handle]))
				} else {
					$(".noUi-handle-lower > .noUi-tooltip").text(sliderTimeCheck(values[handle]))
				}
			});
			
			function sliderTimeCheck( value ) 
			{
				var valueSplit  = value.split('.');
				var time = "";
				var min = ""
				
				if(valueSplit[0].length  == 1 ) time = 0+ valueSplit[0];
				else time = valueSplit[0];
				
				if ( valueSplit[1] == "50" ) min = "30";
				else min = "00";
				
				return time +":" +min
			}
			
			/************************************************************************************
			 * Slider Event 
			 ************************************************************************************/
			range.noUiSlider.on ( 'update' , function ( value , handle )
			{
				//console.log ( handle  , value ) ;
			});
			
			range.noUiSlider.on('hover', function( value ){
				console.log ( 'aaa')
			});
		},
		
		/**
		 * calendarTarget : 캘린더 node
		 * calendarButton : 캘린더 버튼 node
		 * dimDiv : 캘린더 팝업 검정 dim 노드
		 */
		
		calendarPopup:function ( calendarTarget , calendarButton , dimDiv )
		{
			var calendar_prop = { 
					week_Day_Mode:true ,
					active_Name:"Week"
			}	
			/************************************************************************************
			 * Summary week Day
			 ************************************************************************************/
			
			$('.tp_btn').find('a').click ( function ( e ) {
				var removeDiv = $(this).parent().find('a');
				removeDiv.removeClass('active');
				$(this).addClass('active');
				
				calendar_prop.active_Name = $(this).text();
				
				if( $(this).text() == "Week" ) calendar_prop.week_Day_Mode = true;
				else calendar_prop.week_Day_Mode = false;
				 
			});
			
			/************************************************************************************
			 * Aui calendar
			 ************************************************************************************/
				
			calendarTarget.jqxCalendar({ width: '284px',
										 height: '342px',
										 enableWeekend:true,
										 selectionMode: 'default',
										 titleFormat:["MMM yyyy" , "yyyy" , "yyyy"],
										 enableAutoNavigation:false,
			});
			
			/**
			 *  calendar view Change Event
			 */
			calendarTarget.on('viewChange', function (event) {
				var headerText = $(".jqx-calendar-title-content").text()
				if ( headerText.length == 4) {
					$(".calendar-ok-btn").css ( 'display' , 'none');
					$("#cellTableViewjqxcalendar").css("margin-top" , 15 );
				}else{
					$(".calendar-ok-btn").css ( 'display' , 'block');
					$("#cellTableViewjqxcalendar").css("margin-top" , 0 );
				}
			});
			
			$(".jqx-calendar-cell-month").on ( 'click' , function (){console.log ( 'test')})
			
			/************************************************************************************
			 * Aui calendar button
			 ************************************************************************************/
			
			calendarButton.on ( 'click' , function (e){
				$(".calendar_popup").css ( "display" , "block");
				
				var topMarginTop = 32;			// top margin top Position;
				var leftMarginLeft = 36;		// left margin left position;
				
				var btnPosTop = 291;			// 캘린더 ok button top Position;
				var btnPosLeft = 211;			// 캘린더 ok button left Position;
				
				var topValue = $(this).offset().top + topMarginTop;
				var leftValue = $(this).offset().left - leftMarginLeft;
				
				calendarTarget.css ( { top:topValue , left:leftValue })
				$(".calendar-ok-btn").css ({ top:topValue+btnPosTop , left:leftValue+btnPosLeft })
				
				
				/**
				 * Week , Day 
				 */

				if( $(this).attr('id') == "day_calendar" )
				{
					calendar_prop.week_Day_Mode = false;
				}
				else
				{
					console.log ( calendar_prop.active_Name )
					if( calendar_prop.active_Name =="Week" )calendar_prop.week_Day_Mode = true;
					else calendar_prop.week_Day_Mode = false;
					
				}
			});
			
			/************************************************************************************
			 * Aui calendar Event
			 ************************************************************************************/
			calendarTarget.on('click' , function (event ){
				var selectionMode = calendarTarget.jqxCalendar('selectionMode');
				if ( selectionMode == "range"){
					rangetoogle = false;
					calendarRange();
				}
			})
			
			
			calendarTarget.on('change', function (event){
				var jsDate = event.args.date;
				var type = event.args.type; 
				var range = event.args.range;
				
				if( calendar_prop.week_Day_Mode ) calendarRange();		//7일 계산
				else 
				{
					calendarTarget.jqxCalendar({ selectionMode: 'default' });
					console.log ( calendarTarget.jqxCalendar('selectionMode') )
					//calendarTarget.jqxCalendar('clear');
					//calendarTarget.jqxCalendar({ selectionMode: 'none' });
				}
				
			});
			
			var rangetoogle = false;		//Week Mode
			
			/**
			 * 날자 계산
			 */
			function calendarRange()
			{
				if( rangetoogle )return;
				rangetoogle = true;
				
				calendarTarget.jqxCalendar({ selectionMode: 'range' });
				var selectionMode = calendarTarget.jqxCalendar('selectionMode');
				var getDate = new Date (calendarTarget.jqxCalendar('getDate') )
				calendarTarget.jqxCalendar('clear');

				var date1 = new Date();
				date1.setDate(getDate.getUTCDate()+1);	//현재 날자
				var date2 = new Date();
				date2.setDate(getDate.getUTCDate()+7);	//7일간 날자
				calendarTarget.jqxCalendar('setRange', date1, date2);
			}
			
			
			$(".calendar-ok-btn").on( 'click' , function (){              
	              var range = calendarTarget.jqxCalendar('getRange');
	              var from = range.from;
	              var to = range.to;	              
	              var getDate = calendarTarget.jqxCalendar('getDate')
	              alert( getDate ) 
	              console.log ( to , from )
	              $(".calendar_popup").css ( "display" , "none");
			})
			
			dimDiv.on ( 'click' ,function ( e){
				$(".calendar_popup").css ( "display" , "none");
				
				calendarTarget.jqxCalendar('clear');		// 캘린더 초기화
				calendarTarget.jqxCalendar('refresh');
			});
		},
		
		/**
		 * 
		 */
		
		deploy:function ()
		{
			
		},

		/**********************************************************
		 * getter , setter
		 **********************************************************/
		get:
		{
			
		},
		set:
		{
			
			
		}
	}	
}();
