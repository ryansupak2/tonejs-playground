var SamplePlayer_BD = {};
var SamplePlayer_CH = {};
var SamplePlayer_SN = {};

function StartAudioEngine(event)
{
	Tone.start();
	console.log("audio engine started!");
	console.log(Tone);

	console.log("creating sample players...");
	SamplePlayer_BD = new Tone.Player("../wav/BD-001.wav");
	SamplePlayer_CH = new Tone.Player("../wav/CH-001.wav");
	SamplePlayer_SN = new Tone.Player("../wav/SN-001.wav");

	console.log(SamplePlayer_BD);
	console.log(SamplePlayer_CH);
	console.log(SamplePlayer_SN);

	var MultibandCompressor_Master = new Tone.MultibandCompressor
	({
		lowFrequency: 200,
		highFrequency: 2000,
		low:{
				threshold: -9
			},
		mid:{
				threshold: -12
			},
		high:{
				threshold: -9
			}
	}).toDestination();

	SamplePlayer_BD.connect(MultibandCompressor_Master);
	SamplePlayer_CH.connect(MultibandCompressor_Master);
	SamplePlayer_SN.connect(MultibandCompressor_Master);
}

function PlayAudio(event)
{
	var BD_Loop = new Tone.Loop(time =>
	{
		SamplePlayer_BD.start();
	}, "4n").start(0);

	var SN_Loop = new Tone.Loop(time =>
	{
		SamplePlayer_SN.start();
	}, "2n").start("+4n");

	var CH_Loop = new Tone.Loop(time =>
	{
		SamplePlayer_CH.start();
	}, "16n").start(0);

	Tone.Transport.start();
}