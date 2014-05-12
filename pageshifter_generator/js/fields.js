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

	//Toggle Tracking Parameters
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

		var unit = $('input:radio[name="unit"]:checked').val();
		var animation = $('input:radio[name="animation"]:checked').val();
		var typeproperty = $('input:radio[name="typeproperty"]:checked').val();
		var width = $('#width').val();
		var colheight = $('#colheight').val();
		var expheight = $('#expheight').val();
		var colCreative = $('#colCreative').val();
		var expCreative = $('#expCreative').val();
		var bgCreative = $('#bgCreative').val();
		var bgColor = $('#bgColor').val();
		var expandtypeproperty = $('input:radio[name="expandtypeproperty"]:checked').val();
		var expandTime = $('#expandTime').val();	
		var collapsetypeproperty = $('input:radio[name="collapsetypeproperty"]:checked').val();
		var collapseTime = $('#collapseTime').val();

		//Tracking
		var expandTrack = $('#expandTrack').val();
		var collapseTrack = $('#collapseTrack').val();
		var fullTrack = $('#fullTrack').val();
		var facebook = $('#facebook').val();			
		var twitter = $('#twitter').val();
		var pinterest = $('#pinterest').val();
		var instagram = $('#instagram').val();
		var tumbler = $('#tumbler').val();
		var impression = $('#impression').val();
		var skinClickTrack = $('#skinClickTrack').val();		
		var clickTrackOne = $('#clickTrackOne').val();

		//VAST Tracking
		var vastStart = $('#vastStart').val();
		var vastFirstQuartile = $('#vastFirstQuartile').val();
		var vastMidPoint = $('#vastMidPoint').val();
		var vastThirdQuartile = $('#vastThirdQuartile').val();		
		var vastComplete = $('#vastComplete').val();

		//Additional Click Trackers
		var clickTrackTwo = $('#clickTrackTwo').val();
		var clickTrackThree = $('#clickTrackThree').val();
		var clickTrackFour = $('#clickTrackFour').val();
		var clickTrackFive = $('#clickTrackFive').val();
		var clickTrackSix = $('#clickTrackSix').val();
		var clickTrackSeven = $('#clickTrackSeven').val();
		var clickTrackEight = $('#clickTrackEight').val();
		var clickTrackNine = $('#clickTrackNine').val();
		var clickTrackTen = $('#clickTrackTen').val();
		var interaction1 = $('#interaction1').val();
		var interaction2 = $('#interaction2').val();
		var interaction3 = $('#interaction3').val();
		var interaction4 = $('#interaction4').val();

		var tag = '<script> \n'  +
'// Burst Media PageShifter \n' +
'// Copyright 2014 \n' +
'\n' +
'var BMTH_setup = { \n' +
'	\'unit\': \''+unit+'\', \n' +
'	\'animation\': \''+animation+'\', \n' +
'	\'type\': \''+typeproperty+'\', \n' +
'	\'width\': \''+width+'\', \n' +
'	\'height\': \''+colheight+'\', \n' +
'	\'expandType\': \''+expandtypeproperty+'\', \n' +
'	\'expandTime\': \''+expandTime+'\', \n' +
'	\'collapseType\': \''+collapsetypeproperty+'\', \n' +
'	\'collapseTime\': \''+collapseTime+'\', \n' +
'	\'collapseCreative\': \''+colCreative+'\', \n' +
'	\'expandCreative\': \''+expCreative+'\', \n' +
'	\'expandHeight\': \''+expheight+'\', \n' +
'	\'bgCreative\': \''+bgCreative+'\', \n' +
'	\'bgColor\': \''+bgColor+'\', \n' +
'	\'expandTrack\': \''+expandTrack+'\', \n' +
'	\'collapseTrack\': \''+collapseTrack+'\', \n' +
'	\'fullTrack\': \''+fullTrack+'\', \n' +
'	\'impression\': \''+impression+'\' \n' +
'} \n' +
'\n' +
'var BMTH_clickTAG = { \n' +
'	\'skin\': \''+skinClickTrack+'\', \n' +
'	\'one\': \''+clickTrackOne+'\', \n' +
'	\'two\': \''+clickTrackTwo+'\', //Remove line if not used\n' +
'	\'three\': \''+clickTrackThree+'\', //Remove line if not used\n' +
'	\'four\': \''+clickTrackFour+'\', //Remove line if not used\n' +
'	\'five\': \''+clickTrackFive+'\', //Remove line if not used\n' +
'	\'six\': \''+clickTrackSix+'\', //Remove line if not used\n' +
'	\'seven\': \''+clickTrackSeven+'\', //Remove line if not used\n' +
'	\'eight\': \''+clickTrackEight+'\', //Remove line if not used\n' +
'	\'nine\': \''+clickTrackNine+'\', //Remove line if not used\n' +
'	\'ten\': \''+clickTrackTen+'\' //Remove line if not used\n' +
'} \n' +
'\n' +
'var BMTH_events = { \n' +
'	\'vast_start\': \''+vastStart+'\', \n' +
'	\'vast_fq\': \''+vastFirstQuartile+'\', \n' +
'	\'vast_mp\': \''+vastMidPoint+'\', \n' +
'	\'vast_tq\': \''+vastThirdQuartile+'\', \n' +
'	\'vast_co\': \''+vastComplete+'\', \n' +
'	\'facebook\': \''+facebook+'\', \n' +
'	\'pinterest\': \''+pinterest+'\', \n' +
'	\'twitter\': \''+twitter+'\', \n' +
'	\'instagram\': \''+instagram+'\', \n' +
'	\'tumbler\': \''+tumbler+'\', \n' +
'	\'i1\': \''+interaction1+'\', //Remove line if not used\n' +
'	\'i2\': \''+interaction2+'\', //Remove line if not used\n' +
'	\'i3\': \''+interaction3+'\', //Remove line if not used\n' +
'	\'i4\': \''+interaction4+'\' //Remove line if not used\n' +
'} \n' +
'\n' +
'document.write(\'<img src="\' + BMTH_setup.impression + \'" border="0" width="1" height="1" target="_blank" style="position:absolute; top:0; left:-10px; z-index:-1;">\'); \n' +
'document.write(\'<scr'+'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></scr\'+\'ipt>\'); \n' +
'document.write(\'<scr'+'ipt type="text/javascript" src="http://static-cdn.labs.burstnet.com/ads/js/burst.labs.tophat.js"></scr\'+\'ipt>\'); \n' +
'</script>';

		$('#tagBox').focus().val(tag).select();
		
	});

	//Test Page Generation Validation
	$('#generate').click(function(){

		var expandtype = $('input:radio[name="expandtypeproperty"]:checked').val();
		var collapsetype = $('input:radio[name="collapsetypeproperty"]:checked').val();
		var expandTime = $('#expandTime').val();
		var collapseTime = $('#collapseTime').val();		

		if (expandtype == 'auto' || collapsetype == 'auto') {
			if (!expandTime && !collapseTime) {

				$('#notice').slideDown(function(){
					$('#notice').html('Please enter a number of seconds for Collapsed or Expanded State.');
				});
			} else {
				$(this).parent().parent().submit();
			}
		} else {
			$(this).parent().parent().submit();
		}
	});

	$('#exportTag').click(function(){
		if (!$('#tagBox').val()){
			$('#notice').slideDown(function(){
				$('#notice').html('No point in exporting nothing!');
			});
		} else {
			$(this).parent().submit();
		}
	});

});