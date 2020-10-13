
var n_audio_to_load = 0;
var n_audio_loaded = 0;
var load_home = false;



home_initializeAudios();


function home_initializeAudios(){
	regularAudio = document.querySelectorAll(".audios-container .audio_regular")[0];
	actionAudio = document.querySelectorAll(".audios-container .audio_action")[0];
	hoverAudio = document.querySelectorAll(".audios-container .audio_hover");

	preloadImageAudio = document.querySelectorAll(".audios-container .audio_preload_image");

	capsuleLoadedAudio = document.querySelectorAll(".audios-container .audio_capsule_loaded")[0];

	window.AudioContext = window.AudioContext || window.webkitAudioContext;
  	audioContext = new AudioContext();

  	audioBuffers = {};
  	audioPlaying = {};
  	gainNode = audioContext.createGain();
  	gainNode.connect(audioContext.destination);
  	initAudioAndVideo();
}


function initAudioAndVideo(){
	for (var i = 0; i < preloadImageAudio.length; i++) {
		loadAudioFromUrl(preloadImageAudio[i].src);
	};
	for (var i = 0; i < hoverAudio.length; i++) {
		loadAudioFromUrl(hoverAudio[i].src);
	};
	loadAudioFromUrl(regularAudio.src);
	loadAudioFromUrl(actionAudio.src);
	loadAudioFromUrl(capsuleLoadedAudio.src);

	var audios = document.querySelectorAll(".capsules-container .capsule .capsule-sound");
	for (var i = 0; i < audios.length; i++) {
		if(audios[i].src != undefined && audios[i].src != ""){
			loadAudioFromUrl(audios[i].src);
		}
	};
}

function loadAudioFromUrl(url) {
	if(audioBuffers[url] == undefined){
		n_audio_to_load++;
		audioBuffers[url] = false;
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		request.onload = function() {
			var audioData = request.response;
			audioContext.decodeAudioData(audioData, function(buffer) {
				n_audio_loaded++;
				audioBuffers[url] = buffer;
				if(n_audio_to_load == n_audio_loaded){
					if(load_home){
						home_docLoad();
					}
					load_home = true;
				}
			},
			function(err){  });
		}
		request.send();
	}
}
