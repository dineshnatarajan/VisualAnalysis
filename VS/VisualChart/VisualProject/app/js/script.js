// JavaScript Document
$(document).ready(function(){
	
	//Body function for login flyout
	$('body').on('click',function(){
		$('.flyout-login').hide();
	});
	
	//Username text field function
	$('#username').on('focus',function(){
		//When username text field is default style
		if($(this).hasClass('default')){
			$(this).removeClass('default');
			$(this).val('');
		}
		//HighLight style
		$(this).parents('.input-wrapper').addClass('current');
	});
	$('#username').on('blur',function(){
		//When username text field is empey
		if($(this).val() == ''){
			$(this).addClass('default');
			$(this).val('Username');
		}
		//HighLight style
		$(this).parents('.input-wrapper').removeClass('current');
	});
	
	//Password text field function
	$('#password-holder').on('focus',function(){
		$(this).hide();
		$('#password').show();
		$('#password').focus();
		//HighLight style
		$(this).parents('.input-wrapper').addClass('current');
	});
	$('#password').on('focus',function(){
		$(this).parents('.input-wrapper').addClass('current');
	});
	$('#password').on('blur',function(){
		//When password text field is empry
		if($(this).val() == ''){
			$(this).hide();
			$('#password-holder').show();	
		}
		//HighLight style
		$(this).parents('.input-wrapper').removeClass('current');
	});
	
	//Login flyout function
	$('.btn-login').on('click',function(event){
		//Get X and Y
		var x = $(this).offset().left+200;
		var y = $(this).offset().top+40;
		//Set the flyout position
		$('.flyout-login').css({
			'top': y,
			'left': x	
		});
		//Toggle flyout
		if($('.flyout-login').is(':hidden')){
			$('.flyout-login').show();	
		}else{
			$('.flyout-login').hide();	
		}
		event.stopPropagation();
	});
	
	//Invalid credentials
	$('.invalid-credentials').on('click',function(){
		$('#login-form').addClass('error');
	});
	
	//JQUERY for transform
	$('.form').jqTransform();
	
	//Date picker
	if($('.date-picker').length){
		$('.date-picker').datepicker({
			showOn: "both",
			buttonImage: "i/calendar.png",
			buttonImageOnly: true
		});
	}
	
	//Hidden header elements in table
	$('.table-header').each(function(){
		$(this).find('tbody').remove();
	});
	
	//Column in body of table
	$('.table-tbody').each(function(){
		$(this).find('tr:odd').addClass('odd');	
		$(this).find('tr:even').addClass('even');
		$(this).find('tr:last').addClass('last');
		//Remove last in draft section
		$('.draft-section .table-tbody tr').removeClass('last');
	});
	
	$('.details-table').each(function(){
		$(this).find('tr').removeClass('odd');
		$(this).find('tr').removeClass('even');
		$(this).find('tr:odd').addClass('odd');	
		$(this).find('tr:even').addClass('even');
	});
	
	//Checkbox function in header of table
	$('.table-header').on('click','input:checkbox',function(){
		//When checkbox is on
		if($(this).attr('checked')){
			$(this).parents('.table-header').next().find('input:checkbox').attr('checked',false);
			$(this).parents('.table-header').next().find('.jqTransformCheckbox').removeClass('jqTransformChecked');
		}
		//When chcekbox is off
		else{
			$(this).parents('.table-header').next().find('input:checkbox').attr('checked',true);
			$(this).parents('.table-header').next().find('.jqTransformCheckbox').addClass('jqTransformChecked');	
		}
	});
	
	//Checkbox function in body of table
	$('.table-tbody').on('click','input:checkbox',function(){
		var flag = true; //All checkbox is on by default
		
		var i = $('.table-tbody input:checkbox').index($(this));
		//When checkbox is on
		if($(this).attr('checked')){
			$(this).parents('.table-tbody').prev().find('input:checkbox').attr('checked',false);
			$(this).parents('.table-tbody').prev().find('.jqTransformCheckbox').removeClass('jqTransformChecked');	
		}
		//When checkbox os off
		else{
			$('.table-tbody input:checkbox').each(function(idx){
				if(!$(this).attr('checked') && idx!=i){
					flag = false;
				}	
			});	
			if(flag){
				$(this).parents('.table-tbody').prev().find('input:checkbox').attr('checked',true);
				$(this).parents('.table-tbody').prev().find('.jqTransformCheckbox').addClass('jqTransformChecked');		
			}
		}
	});
	
	//Init progress function
	$('.progress').each(function(){
		//Get the precent of progress
		var width = $(this).find('span').text();
		//Set progress
		$(this).find('.progress-inner').css({
			'width': width	
		});
	});
		
	//Switch tab function
	$('.tab-container .tab').on('click','li',function(){
		//Init number of current tab item
		var i = $('.tab-container .tab li').index($(this));
		//Set tab item
		$('.tab-container .tab li').removeClass('active');
		$(this).addClass('active');
		//Set tab content
		$('.tab-content').hide();
		$('.tab-content').eq(i).show();;
	});
	
	//Switch tab fcuntion
	$('.switch-tab-container .switch-tab').on('click','li',function(){
		var $parent = $(this).parents('.switch-tab-container');
		//Init number of current tab item
		var i = $('.switch-tab-container .switch-tab li').index($(this));
		//Set tab item
		$('.switch-tab-container .switch-tab li').removeClass('active');
		$(this).addClass('active');
		//Set tab content
		$parent.find('.switch-tab-content').hide();
		$parent.find('.switch-tab-content').eq(i).show();
	});
	
	$('.sub-tab-container .sub-tab').on('click','li',function(event){
		var $parent = $(this).parents('.sub-tab-container');
		//Init number of current tab item
		var i = $parent.find('.sub-tab li').index($(this));
		//Set tab item
		$parent.find('.sub-tab li').removeClass('active');
		$(this).addClass('active');
		//Set tab content
		$parent.find('.sub-tab-content').hide();
		$parent.find('.sub-tab-content').eq(i).show();
		event.stopPropagation();
	});
	
	//Rate
	$('.rate-bar').each(function(){
		//Get rate percent
		var l_num = parseInt($(this).find('.rate-l').text());
		var r_num = parseInt($(this).find('.rate-r').text());
		var width = $(this).width();
		total = l_num+r_num;
		//Set rate bar
		$(this).find('.rate-l').css({
			'width': l_num*width/total
		});
		$(this).find('.rate-r').css({
			'width': r_num*width/total+1
		});
	});
	
	//Modal position function
	positionModal = function(position){
		
		//Get X and Y of modal.
		var wWidth  = window.innerWidth;
		var wHeight = window.innerHeight;

		if (wWidth==undefined) {
			wWidth  = document.documentElement.clientWidth;
			wHeight = document.documentElement.clientHeight;
		}

		var boxLeft = parseInt((wWidth / 2) - ( $("#modal").width() / 2 ));
		var boxTop  = parseInt((wHeight / 2) - ( $("#modal").height() / 2 ));

		//Set the position of modal
		if(position){
			$("#modal").css({
				'position': position,
				'margin': '80px auto 0 ' + boxLeft + 'px'
			});	
		}else{
			$("#modal").css({
				'position': 'fixed',
				'margin': boxTop + 'px auto 0 ' + boxLeft + 'px'
			});	
		}

		$("#modal-background").css("opacity", "0.9");
		
		if ($("body").height() > $("#modal-background").height()){
            $("#modal-background").css("height", $("body").height() + "px");
		}
	}
	
	//Load modal function
	loadModal = function(itemId) {
        $('#modal-background').show();
		$(itemId).show();
		positionModal();
    }
	
	//Close modal function
	closeModal = function() {
        $('#modal-background').hide();
        $('.modal').hide();
    }
	
	//Close modal button
	$('.close-modal').on('click',function(){
		closeModal();
	});
	
	//Modal appear when click transactions button
	$('.btn-transactions').on('click',function(){
		closeModal();
		loadModal('#modal-finalize-transactions');
	});
	
	//Modal appear when click finalize transactions button
	$('#modal-finalize-transactions').on('click','.btn-yes',function(){
		closeModal();
		loadModal('#modal-finalize-transactions-success');
	});
	
	//Modal appear when click generate report button
	$('.btn-generate-report').on('click',function(){
		closeModal();
		loadModal('#modal-generate-report');
	});
	
	//Modal appear when click archive study button
	$('.btn-archive-study').on('click',function(){
		closeModal();
		loadModal('#modal-archived');
	});
	
	//Modal appear when click execute transactions button
	$('.btn-execute-transactions').on('click',function(){
		closeModal();
		loadModal('#modal-execute-transactions');
	});
	
	//Modal appear when click save as draft button
	$('.btn-save-as-draft').on('click',function(){
		closeModal();
		loadModal('#modal-save-draft');
	});
	
	//Modal appear when click save as execute button
	$('.btn-save-and-execute').on('click',function(){
		closeModal();
		loadModal('#modal-save-execute');
	});
	
	//Modal appear when click execute study button
	$('.btn-execute-study').on('click',function(){
		closeModal();
		loadModal('#modal-execute-study');
	});
	
	//Tab of action function
	$('.action').on('click','li',function(){
		//Get the current item
		var i = $('.action li').index($(this));
		//When the current item is active
		if($(this).find('a').hasClass('active')){
			$(this).find('a').removeClass('active');
			$('.action-content').hide();
			$('.action').removeClass('action-expend');
		}
		//When the current item is not active
		else{
			$('.action li a').removeClass('active');
			$(this).find('a').addClass('active');
			$('.action-content').hide();
			$('.action-content').eq(i).show("slide");
			$('.action').addClass('action-expend');	
		}
	});
	
	//ReInit the z-index of select
	$('.visual-analysis-content .jqTransformSelectWrapper').each(function(idx){
		var total = $('.visual-analysis-content .jqTransformSelectWrapper').length;
		$(this).css({
			'z-index': total - idx
		});
	});
	
	//Remove function in visual analysis tab
	$('.visual-analysis-content .sub-tab-container .remove').on('click',function(){
		//Get index of current button
		var i = $('.visual-analysis-content .sub-tab-container li').index($(this).parents('li'));
		var $parent = $(this).parents('.sub-tab-container');
		//Remove start
		$parent.find('.sub-tab-content').eq(i).remove();
		$(this).parents('li').remove();
		$parent.find('.sub-tab li').eq(0).addClass('active');
		$parent.find('.sub-tab-content').eq(0).show();
		//When only one item,the remove button is hidden
		if($('.visual-analysis-content .sub-tab-container .remove').length == 1){
			$('.visual-analysis-content .sub-tab-container .remove').hide();	
		}
	});
	
	$('.details-table').hide();
	
	//Insert the expand section in table
	if($('.default-expend').length){
		$('.default-expend').find('.details-table:first').show();
	}
	
	//Init the expand section in table
	$('#study-result tbody td').on('click',function(){
		var $parents = $(this).parents('tr');
		var $grandeParents = $(this).parents('#study-result');
		if(!$(this).children().hasClass('jqTransformCheckboxWrapper')){
			//When the rows is active
			if($parents.hasClass('active')){
				$parents.next().find('.details-table').slideUp(function(){
					$parents.removeClass('active');	
				});
			}
			//When the rows is not active
			else{
				//Hide the expend details
				$grandeParents.find('.details').each(function(){
					if(!$(this).find('.details-table').is(':hidden')){
						$(this).find('.details-table').slideUp(function(){
							$(this).parents('tr').prev().removeClass('active');	
						});
					}
				});
				//Set the row that is clicked active
				$parents.addClass('active');
				$parents.next().find('.details-table').slideDown();
			}	
		}
	});
	
	//Hide function of profile flyout in header of page
	var CT;
	function hideFlyout(){
		if(!CT){
			CT = null;	
		}
		CT = setTimeout(function(){
			$('.profile-flyout').hide();	
		},3000);
	}
	
	//When hover on current username in header of page
	$('#header .username').hover(function(){
		clearTimeout(CT);
		$('.profile-flyout').show();;
	},function(){
		hideFlyout();	
	});
	
	//When hover on profile flyout
	$('.profile-flyout').hover(function(){
		clearTimeout(CT);	
	},function(){
		hideFlyout();	
	});
	
	//Click the item in profile flyout
	$('.profile-flyout li').on('click',function(){
		clearTimeout(CT);
		$('.profile-flyout').hide();
	});
	
	//Init corner div
	var tl = $('<div></div>').addClass('corner').addClass('tl');
	var tr = $('<div></div>').addClass('corner').addClass('tr');
	var bl = $('<div></div>').addClass('corner').addClass('bl');
	var br = $('<div></div>').addClass('corner').addClass('br');
	
	//Corner for username in login
	$('.login-form .input-wrapper:first').append(tl).append(tr);
	$('.login-form .input-wrapper:last').append(bl).append(br);
	
	//Corner for sub-tab
	$('.sub-tab-container .sub-tab li').each(function(){
		//Init corner div
		var tl = $('<div></div>').addClass('corner').addClass('tl');
		var tr = $('<div></div>').addClass('corner').addClass('tr');
		$(this)	.append(tl).append(tr);											  
	});
	
	//Corner for table
	$('.home-tab-wrapper .table-wrapper').append(tl).append(tr).append(bl).append(br);
	$('.study-result-content .table-wrapper').append(tl).append(tr).append(bl).append(br);
	
});