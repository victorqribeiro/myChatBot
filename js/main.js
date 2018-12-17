window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = (e) => analyse( e.results[0][0].transcript.toLowerCase() );

recognition.onerror = e => console.error( e );

const getData = val => {
	const dias = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Pizza day","Saturday"];
	const dt = new Date();
	let index = dt.getDay();
	if(val.match(/tomorrow/)){
		index = (index + 1) % 7;
	}
	return val+" is "+ dias[index];
}

const rules = [
	{rule: /.*what.*day.*(today|tomorrow)/, response: 1, action: getData },
	{rule: /.*what.*your.*name.*/, response: ["I don't have a name","I haven't being named yet"]},
	{rule: /.*where.*do.*you.*live.*/, response: ["I live on the internet"]},
];

const analyse = msg => {
	btn.disabled = false;
	let response = "I didn't understand";
	let matches;
	for(let i = 0; i < rules.length; i++){
		let r = rules[i];
		matches = r.rule.exec(msg);
		if( matches ){
			response = r.response === 1 ? r.action(matches[1]) : r.response[Math.floor(Math.random()*r.response.length)] ;
			break;
		}
	}
	say(response);
}

const say = msg => {
	let what = new SpeechSynthesisUtterance(msg);
	what.lang = "en-US";
	speechSynthesis.speak(what);
}

const btn = document.createElement('button');
btn.innerText = "Speak";

btn.onclick = ()=> {
	btn.disabled = true;
	recognition.start();
}

document.body.appendChild(btn);
