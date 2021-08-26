var DrumSampler = {};
var DrumPlayers = {};

function StartAudioEngine(event)
{

	Tone.start();
	console.log("audio engine started!");
	
	
	DrumSampler = new Tone.Sampler({
	urls:
		{
			A1: "../wav/BD-001.wav",
			A2: "../wav/SN-001.wav",
			A3: "../wav/CH-001.wav",
		}
	}).toDestination();
	console.log("sampler created!");
	console.log(DrumSampler);
	

	DrumPlayers = new Tone.Players({
	urls:
		{
			"BD": "../wav/BD-001.wav",
			"SN": "../wav/SN-001.wav",
			"CH": "../wav/CH-001.wav",
		}
	}).toDestination();
	console.log("players created!");
	console.log(DrumPlayers);


}

function PlayAudio(event)
{

	

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.75); },"0:3:0");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:1");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:2");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:3");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:4");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:5");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:6");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:7");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:8");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:9");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:10");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:11");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:12");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:13");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:14");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:15");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,0.3); },"0:0:15");
	

	
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,1); },"0:0:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,0.75); },"0:1:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,1); },"0:2:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,0.75); },"0:3:0");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.75); },"0:1:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.15); },"0:1:1");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.05); },"0:1:2.1");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.02); },"0:1:3.2");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A2",time,0.75); },"0:3:0");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:0");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:1");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:2");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:3");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:4");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:5");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:6");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:7");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:8");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:9");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:10");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:11");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.7); },"0:0:12");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.5); },"0:0:13");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.3); },"0:0:14");
	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A3",time,0.1); },"0:0:15");

	Tone.Transport.schedule((time) => {DrumSampler.triggerAttack("A1",time,0.3); },"0:0:15");
	

	Tone.Transport.setLoopPoints("0:0:0", "1:0:0");
	Tone.Transport.loop = true;

	Tone.Transport.swingSubdivision = "16n";
	Tone.Transport.swing = 0.15;
	Tone.Transport.bpm.value = 75;

	Tone.Transport.start();
}