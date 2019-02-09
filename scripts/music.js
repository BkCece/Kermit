var Music = function() 
{
	this.queue = []
	this.isPlaying = false;
	
	this.queueAudio = function(file)
	{
		var music = new Audio('resources/audio/'.concat(file));
		this.queue.push(music);
	}
	
	this.startAudio = function(index = 0)
	{
		if (this.queue.length > 0)
			var music = this.queue[index];
			music.currentTime = 0;
			music.play();
			this.isPlaying = true;
	}
	
	this.togglePauseAudio = function()
	{
		var music = this.queue[0];
		if (this.isPlaying)
		{
			music.pause();
			this.isPlaying = false;
		}
		else
		{
			music.play();
			this.isPlaying = true;
		}
	
	}
	
	this.stopCurrentAudio = function()
	{
		var music = this.queue.shift();
		music.pause()
		music.currentTime = 0;
		this.isPlaying = false;
	}
}