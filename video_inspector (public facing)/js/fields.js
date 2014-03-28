$(document).ready(function(){

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

	$('#embedplayer').click(function() {
		$('#embedgraphic').css('display', 'block');
		$('#slidergraphic').css('display', 'none');
	});
	$('#sliderplayer').click(function() {
		$('#embedgraphic').css('display', 'none');
		$('#slidergraphic').css('display', 'block');
	});	

	$('#generate').click(function(){
		var player = $('input:radio[name="player"]:checked').val();

		if ($('#url').val() == '') {
			$('#notice').slideDown(function(){
				$('#notice').html('Please enter a Vast or Vpaid URL.');
			});					

		} else {
			if (player == 'embed' || player == 'slider') {
				$(this).parent().parent().submit();
			} else {
				$('#notice').slideDown(function(){
					$('#notice').html('Please select either the Embedded or Sliding Player.');
				});
			}
		}

	});
});