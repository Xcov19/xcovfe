const timeOutInterval = 5000;

const domLettersPath = '.ml11 .letters';
const domLinePath = '.ml11 .line';
const domEachLetterPath = '.ml11 .letter';

// TODO: value pair is left for fade-in carousel animation.
const msgMap = {
    "Healthcare": "strengthening global healthcare",
    "burdened beds": "referring patients",
    "burdened staff": "referring patients",
    "patient queue": "onboarding patient data",
    "waiting time": "uploading Pre-Admission Results",
    "referral": "building national hospital network",
    "pandemic": "analytics"
};

const replaceInnerHtml = (wrapperObj) => {
    let innertText = wrapperObj.text();
    wrapperObj.html(innertText.replace(/([^\x00-\x80]|\w)/gi, "<span class='letter'>$&</span>"));
};

const replaceWordsInterval = (wordsMap) => {
	// Wrap every letter in a span
    const textKeys = Object.keys(wordsMap)
	const len = textKeys.length;
	let textWrapperFirst = $(`${domLettersPath}#fix-one`);
    let textWrapperSecond = $(`${domLettersPath}#fix-two`);
	let textFirst = '';
    let textSecond = '';
	let count = 0;
	setInterval(() => {
        count++;
		textFirst = textKeys[count % len];
        textSecond = wordsMap[textFirst];
		textWrapperFirst.text(textFirst);
        textWrapperSecond.text(textSecond);
        [textWrapperFirst, textWrapperSecond].forEach(replaceInnerHtml);
	}, timeOutInterval);
		
};

const replaceCharAnime = (wordsArr) => {
	
	replaceWordsInterval(wordsArr);

	anime.timeline({
	    loop: true
	  })
	  .add({
	    targets: `${domLinePath}`,
	    scaleY: [0, 1],
	    opacity: [0.5, 1],
	    easing: "easeOutExpo",
	    duration: 700
	  })
	  .add({
	    targets: `${domLinePath}`,
	    translateX: [0, document.querySelector(`${domLettersPath}`).getBoundingClientRect().width + 10],
	    easing: "easeOutExpo",
	    duration: 700,
	    delay: 100
	  }).add({
	    targets: `${domEachLetterPath}`,
	    opacity: [0, 1],
	    easing: "easeOutExpo",
	    duration: 7000,
	    offset: '-=1000',
	    delay: (el, i) => 34 * (i + 1)
	  }).add({
	    targets: '.ml11',
	    opacity: 0,
	    duration: 1000,
	    easing: "easeOutExpo",
	    delay: 1000
	  });

	
};

replaceCharAnime(msgMap);