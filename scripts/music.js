
class SuperAudio extends HTMLElement 
{
	constructor() 
	{
		super();

		this.queue = [];
		this.isPlaying = false;
	}

	queueAudio(file)
	{
		let music = new Audio('../resources/audio/'.concat(file));
		this.queue.push(music);
		console.log(file + " queued");
	}	

	startAudio()
	{
		if (this.queue.length > 0)
		{
			let music = this.queue[0];
			music.play();
			this.isPlaying = true;
			console.log("playing");
		}
	}
}