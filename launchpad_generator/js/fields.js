$(document).ready(function(){

	//Handle field highlighting and effects
	$('.highlight').mouseover(function(){
		$(this).css('border', '1px solid #f8e70d');
	});
	$('.highlight').mouseout(function(){
		$(this).css('border', '1px solid #bbb');
	});
	$('.highlight').focusin(function(){
		$(this).css('background-color', '#ddd');
	});
	$('.highlight').blur(function(){
		$(this).css('background-color','white');
	});

	//Animating the field labels
	$('.input').focusin(function() {
		jQuery(this).children('.label').animate({'margin-left': '-15px' }, 200, 'easeOutBack', function() {
			jQuery(this).children('.labelText').animate({'padding-left': '12px' }, 200, 'easeOutBack');
	 	});
	});
	$('.input').focusout(function() {
		jQuery(this).children('.label').animate({'margin-left': '5px' }, 300, 'easeInOutBack', function() {
			jQuery(this).children('.labelText').animate({'padding-left': '10px'}, 300, 'easeOutBack');
		});
	});

	//Auto Expand/Collapse Timing Field Hide/Show
	$('input[name=expandtypeproperty]').change(function()  {
        switch ($('input[name=expandtypeproperty]:checked').val()) {
            case 'click':
                $('#expandTimeInput').css('display', 'none'); 
				$('#expandTime').attr('value', ''); break;
            case 'hover':
                $('#expandTimeInput').css('display', 'none');
				$('#expandTime').attr('value', ''); break;
            default:
                $('#expandTimeInput').css('display', 'block');     
        };
	}).change();
	
	$('input[name=collapsetypeproperty]').change(function()  {
        switch ($('input[name=collapsetypeproperty]:checked').val()) {
            case 'click':
                $('#collapseTimeInput').css('display', 'none');
				$('#collapseTime').attr('value', ''); break;
            default:
                $('#collapseTimeInput').css('display', 'block');
        };
	}).change();

	//Toggle Sections
	$('#collapsedParms').click(function() {
		$('#collapsedParmsInput').toggle();
	});
	$('#launchParms').click(function() {
		$('#launchParmsInput').toggle();
	});		
	$('#tracking').click(function() {
		$('#trackingInput').toggle();
	});

	//Test Page Graphic Handling
	$('#momiq').click(function() {
		$('#momiqgraphic').css('display', 'block');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');	
		$('#generate').attr('value', 'Generate on MomIQ.tv');
	});
	$('#elladaily').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'block');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');
		$('#generate').attr('value', 'Generate on EllaDaily.com');
	});
	$('#giantrealm').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'block');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');	
		$('#nocigargraphic').css('display', 'none');		
		$('#generate').attr('value', 'Generate on GiantRealm.com');
	});	
	$('#theladbible').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'block');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');		
		$('#generate').attr('value', 'Generate on TheLadBible.com');
	});
	$('#femalefirst').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'block');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');			
		$('#generate').attr('value', 'Generate on Femalefirst.co.uk');
	});
	$('#greatbritishchefs').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'block');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');
		$('#generate').attr('value', 'Generate on Greatbritishchefs.co.uk');
	});
	$('#djmag').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'block');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'none');
		$('#generate').attr('value', 'Generate on DJMag.co.uk ');
	});	
	$('#westlondonmum').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'block');
		$('#nocigargraphic').css('display', 'none');
		$('#generate').attr('value', 'Generate on Westlondonmum.com');
	});
	$('#nocigar').click(function() {
		$('#momiqgraphic').css('display', 'none');
		$('#ellagraphic').css('display', 'none');
		$('#grgraphic').css('display', 'none');
		$('#biblegraphic').css('display', 'none');
		$('#femalefirstgraphic').css('display', 'none');
		$('#greatchefsgraphic').css('display', 'none');
		$('#djmaggraphic').css('display', 'none');
		$('#westlondongraphic').css('display', 'none');
		$('#nocigargraphic').css('display', 'block');		
		$('#generate').attr('value', 'Generate on Nocigarmagazine.com');
	});	

	//Lightbox Jquery
	$('.uploadIframe').colorbox({href:'http://upload.app2.labs.burstnet.com', iframe:true, width:'780px', height:'300px'});

	//Generate Tag 
	$('#generateTag').click(function(){

		//Collpased Creative
		var ctype = $('input:radio[name="cType"]:checked').val();
		var cwidth = $('#cwidth').val();
		var cheight = $('#cheight').val();
		var cCreative = $('#cCreative').val();
		var cbgColor = $('#cbgColor').val();
		var cpos1 = $('input:radio[name="cpos1"]:checked').val();
		var cpos2 = $('input:radio[name="cpos2"]:checked').val();
		var canimation = $('input:radio[name="canimation"]:checked').val();
		var ctpad = $('#ctpad').val();
		var cbpad = $('#cbpad').val();
		var clpad = $('#clpad').val();
		var crpad = $('#crpad').val();		

		//Launch Creative
		var ltype = $('input:radio[name="lType"]:checked').val();
		var lwidth = $('#lwidth').val();
		var lheight = $('#lheight').val();
		var lCreative = $('#lCreative').val();
		var lbgColor = $('#lbgColor').val();
		var lpos1 = $('input:radio[name="lpos1"]:checked').val();
		var lpos2 = $('input:radio[name="lpos2"]:checked').val();
		var lanimation = $('input:radio[name="lanimation"]:checked').val();
		var ltpad = $('#ltpad').val();
		var lbpad = $('#lbpad').val();
		var llpad = $('#llpad').val();
		var lrpad = $('#lrpad').val();


		//Tracking
		var impression = $('#impression').val();
		var expandTrack = $('#expandTrack').val();
		var collapseTrack = $('#collapseTrack').val();
		var fullTrack = $('#fullTrack').val();
		var facebook = $('#facebook').val();			
		var twitter = $('#twitter').val();
		var pinterest = $('#pinterest').val();
		var instagram = $('#instagram').val();
		var tumblr = $('#tumbler').val();
		var interaction1 = $('#interaction1').val();
		var interaction2 = $('#interaction2').val();
		var interaction3 = $('#interaction3').val();
		var interaction4 = $('#interaction4').val();

		//VAST Tracking
		var vastStart = $('#vastStart').val();
		var vastFirstQuartile = $('#vastFirstQuartile').val();
		var vastMidPoint = $('#vastMidPoint').val();
		var vastThirdQuartile = $('#vastThirdQuartile').val();		
		var vastComplete = $('#vastComplete').val();

		// Click Trackers
		var clickTrackOne = $('#clickTrackOne').val();
		var clickTrackTwo = $('#clickTrackTwo').val();
		var clickTrackThree = $('#clickTrackThree').val();
		var clickTrackFour = $('#clickTrackFour').val();
		var clickTrackFive = $('#clickTrackFive').val();
		var clickTrackSix = $('#clickTrackSix').val();
		var clickTrackSeven = $('#clickTrackSeven').val();
		var clickTrackEight = $('#clickTrackEight').val();
		var clickTrackNine = $('#clickTrackNine').val();
		var clickTrackTen = $('#clickTrackTen').val();

		var tag = '<script> \n'  +
'// Burst Media Launch Pad version 1.9.8 \n'  +
'\n' +
'var BMLP_setup = { \n' +
'	\'impression\': \''+impression+'\' \n' +
'} \n' +
'\n' +
'var BMLP_collapse = { \n' +
'	\'type\': \''+ctype+'\', \n' +
'	\'width\': \''+cwidth+'\', \n' +
'	\'height\': \''+cheight+'\', \n' +
'	\'creative\': \''+cCreative+'\', \n' +
'	\'bg\' : \''+cbgColor+'\', \n' +
'	\'position\': \''+cpos1+' '+cpos2+'\', \n' +
'	\'animation\': \''+canimation+'\', \n' +
'	\'padding\': [\''+ctpad+'\', \''+cbpad+'\', \''+clpad+'\', \''+crpad+'\'] \n' +
'} \n' +
'\n' +
'var BMLP_launch = { \n' +
'	\'type\': \''+ltype+'\', \n' +
'	\'width\': \''+lwidth+'\', \n' +
'	\'height\': \''+lheight+'\', \n' +
'	\'creative\': \''+lCreative+'\', \n' +
'	\'bg\' : \''+lbgColor+'\', \n' +
'	\'position\': \''+lpos1+' '+lpos2+'\', \n' +
'	\'animation\': \''+lanimation+'\', \n' +
'	\'padding\': [\''+ltpad+'\', \''+lbpad+'\', \''+llpad+'\', \''+lrpad+'\'] \n' +
'} \n' +
'\n' +
'var BMLP_clickTAG = { \n' +
'	\'one\': \''+clickTrackOne+'\', \n' +
'	\'two\': \''+clickTrackTwo+'\', \n' +
'	\'three\': \''+clickTrackThree+'\', \n' +
'	\'four\': \''+clickTrackFour+'\', \n' +
'	\'five\': \''+clickTrackFive+'\', \n' +
'	\'six\': \''+clickTrackSix+'\', \n' +
'	\'seven\': \''+clickTrackSeven+'\', \n' +
'	\'eight\': \''+clickTrackEight+'\', \n' +
'	\'nine\': \''+clickTrackNine+'\', \n' +
'	\'ten\': \''+clickTrackTen+'\' \n' +
'} \n' +
'\n' +
'var BMLP_events = { \n' +
'	\'facebook\': \''+facebook+'\', \n' +
'	\'pinterest\': \''+pinterest+'\', \n' +
'	\'twitter\': \''+twitter+'\', \n' +
'	\'instagram\': \''+instagram+'\', \n' +
'	\'tumblr\': \''+tumblr+'\', \n' +
'	\'i1\': \''+interaction1+'\', \n' +
'	\'i2\': \''+interaction2+'\', \n' +
'	\'i3\': \''+interaction3+'\', \n' +
'	\'i4\': \''+interaction4+'\', \n' +
'	\'vast_start\': \''+vastStart+'\', \n' +
'	\'vast_fq\': \''+vastFirstQuartile+'\', \n' +
'	\'vast_mp\': \''+vastMidPoint+'\', \n' +
'	\'vast_tq\': \''+vastThirdQuartile+'\', \n' +
'	\'vast_co\': \''+vastComplete+'\', \n' +
'	\'closeTrack\': \'##EVENT_cp##\', \n' +
'	\'launchTrack\': \'##EVENT_ex##\', \n' +
'	\'fullTrack\': \'##EVENT_fv##\' \n' +
'} \n' +
'\n' +
'document.write(\'<img src="\' + BMLP_setup.impression + \'" border="0" width="1" height="1" target="_blank" style="position:absolute; top:0; left:-10px; z-index:-1;">\'); \n' +
'document.write(\'<scr\'+\'ipt async src="http://static-cdn.labs.burstnet.com/ads/js/burst.labs.launchpad.js"></scr\'+\'ipt>\'); \n' +
'</script>';

		$('#tagBox').focus().val(tag).select();
		
	});

	//Test Page Generation Validation
	$('#generate').click(function(){

		$(this).parent().parent().submit();

	});

	$('#exportTag').click(function(){
		if (!$('#tagBox').val()){
			$('#notice').slideDown(function(){
				$('#notice').html('No point in exporting an empty tag!');
			});
		} else {
			$(this).parent().submit();
		}
	});

});