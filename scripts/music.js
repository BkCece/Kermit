
var Music = new function() 
{
	this.queue = []
	this.isPlaying = false;
	this.audio = document.getElementById('Music');
	
	this.queueAudio = function(file)
	{
		var music = '../resources/audio/'.concat(file);
		music = 'resources/audio/rickroll.mp3';
		this.queue.push(music);
		console.log("here");
	}
	
	this.startAudio = function(index = 0)
	{
		if (this.queue.length > 0) {
			var music = this.queue[index];
			document.getElementById("file").src = music;
			console.log("here");
			console.log(document.getElementById("file"));
			this.audio.currentTime = 0;
			this.audio.play();
			this.isPlaying = true;
		}
	}
	
	this.togglePauseAudio = function()
	{
		var music = this.queue[0];
		if (this.isPlaying)
		{
			this.audio.pause();
			this.isPlaying = false;
		}
		else
		{
			this.audio.play();
			this.isPlaying = true;
		}
	}
	
	this.stopCurrentAudio = function()
	{
		var music = this.queue[0];
		this.audio.pause()
		this.audio.currentTime = 0;
		this.isPlaying = false;
	}
}