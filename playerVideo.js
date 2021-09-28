$('#voltar').click(function() {
	$('#video').get(0).currentTime -= 10;
});

$('#start').click(function() {
	$('#video').get(0).play();
});

$('#pause').click(function() {
	$('#video').get(0).pause();
	$('#progresso').css('background-color', 'blue');
});

$('#avancar').click(function() {
	$('#video').get(0).currentTime += 10;
});

$('#full').click(function() {
	let elem = $('#video');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  elem.requestFullscreen();
});

function p() {
	let videoDuration = $('#video').get(0).duration;

	let videoCurrentTime = $('#video').get(0).currentTime;
	let calcDuration = (videoCurrentTime * 100) / videoDuration;
	
	$('#progresso').css('width', calcDuration + '%');
	console.log(calcDuration);
	setTimeout(p, 500);
}

p();
