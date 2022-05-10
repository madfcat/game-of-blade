//save fields to custom
/*let gobCustom = new Object();
gobCustom["soul-tricks"] = [];
gobCustom["groove-tricks"] = [];
gobCustom["spins-on-trick"] = [];
gobCustom["variations"] = [];
gobCustom["spins-off-trick"] = [];*/
let columnsNames = ["soul-tricks", "groove-tricks", "spins-on-trick", "variations", "spins-off-trick"];
let gobCustom = new Object();
let thisColumnElements;

//save all custom checkboxes when clicked on any trick or variation and change radio to custom
function saveAllCustoms(thisName) {

	console.log('Saving all customs!');
	for (let i = 0; i < columnsNames.length; i++) {//for each column name
		thisColumnElements = document.getElementsByName(columnsNames[i]);//find all column checkbox elements
		gobCustom[columnsNames[i]] = [];
		for (let k = 0; k < thisColumnElements.length; k++) {//check if element is checked 
			if (thisColumnElements[k].checked == true) { //if checkbox is checked add to gobCustom
				gobCustom[columnsNames[i]].push(thisColumnElements[k].id);
			}
		}
	}
	console.log(gobCustom);
	//check Custom radio on any checkbox click
	if (thisName !== undefined) { //do not execute on load because thisName is undefined, defined on checkbox click
		console.log("right now " + thisName);
		console.log(findCustomRadio(thisName));
		document.getElementById(findCustomRadio(thisName)).checked = true;

		if (thisName.indexOf("mode") < 0 ) { //to avoid when clicked on Select All checkbox
			tickUntickSelectAll(thisName);//tick and untick only on checkbox change
		}
	}
}

//on load, delay saveAllCustoms for the first
document.addEventListener('DOMContentLoaded', function(){//add Event Listener to perform callback when loaded
	saveAllCustoms();//save all customs on load
});


//function to find Name of the Corresponding Radio Button (will work for checkboxes and select all)
function findCustomRadio(ofThisName) {
	//let firstWord = ofThisName.split("-").[0];
	//console.log(firstWord);
	let correspondingRadioId;
		if (ofThisName.indexOf("soul") >= 0) {
			correspondingRadioId = "custom-soul";
		} else if (ofThisName.indexOf("groove") >= 0) {
			correspondingRadioId = "custom-groove";
		} else if (ofThisName.indexOf("spins-on") >= 0) {
			correspondingRadioId = "custom-spins-on";
		} else if (ofThisName.indexOf("variations") >= 0) {
			correspondingRadioId = "custom-var";
		} else if (ofThisName.indexOf("spins-off") >= 0) {
			correspondingRadioId = "custom-spins-off";
		}
	return correspondingRadioId;
}

//reload saved custom checkboxes for custom radio
function reloadCustoms(columnName) {
	console.log('Reloading all customs!');
	//case for every Custom Radio
	switch(columnName) {
		case "custom-soul" :
			foundColumn = columnsNames[0];
			break;
		case "custom-groove" :
			foundColumn = columnsNames[1];
			break;
		case "custom-spins-on" :
			foundColumn = columnsNames[2];
			break;
		case "custom-var" :
			foundColumn = columnsNames[3];
			break;
		case "custom-spins-off" :
			foundColumn = columnsNames[4];
			break;
	}

	deselectAll(foundColumn);//deselect all elements of found column first
		thisColumnElements = gobCustom[foundColumn];//find all column checkbox elements
		for (let k = 0; k < thisColumnElements.length; k++) {//check if element is checked 
			console.log(gobCustom[foundColumn][k]);
			document.getElementById(gobCustom[foundColumn][k]).checked = true;
		}
	console.log(gobCustom);
}

//select all checkbox
function selectAll(gobColumn, clickedSelectAll) {
	let allElements = document.getElementsByName(gobColumn);
	for (let i = 0; i < allElements.length; i++) {
		if (document.getElementById(clickedSelectAll).checked == true) {
			allElements[i].checked = true;
		} else {
			allElements[i].checked = false;
		}
	}
}

function deselectAll(gobColumn) {
	let allElements = document.getElementsByName(gobColumn);
	for (let i = 0; i < allElements.length; i++) {
		allElements[i].checked = false;
	}
}


//function to tick and untick Select All checkbox if elements all elements ticked or unticked manually
function tickUntickSelectAll(thisElementName) {
	let howManyElements = document.getElementsByName(thisElementName).length;
	console.log("howmanyElements = " + howManyElements);
	//how many elements ticked
	let howManyTicked = 0;
	for (let i = 0; i < howManyElements; i++) {
		if (document.getElementsByName(thisElementName)[i].checked == true) {
			howManyTicked++;
		}
	console.log(howManyTicked);
	}

	let correspondingSelectId;
	switch(thisElementName) {
		case columnsNames[0] :
			correspondingSelectId = "select-all-soul";
			break;
		case columnsNames[1] :
			correspondingSelectId = "select-all-groove";
			break;
		case columnsNames[2] :
			correspondingSelectId = "select-all-spins-on";
			break;
		case columnsNames[3] :
			correspondingSelectId = "select-all-var";
			break;
		case columnsNames[4] :
			correspondingSelectId = "select-all-spins-off";
			break;
	}

	if (howManyTicked == howManyElements) {
		document.getElementById(correspondingSelectId).checked = true;
	} else if (howManyTicked < howManyElements) {
		document.getElementById(correspondingSelectId).checked = false;
	}
}


//function for radio buttons mode
let correspondingColumn;
let trickElements;
function selectMode(clickedMode) {

	switch(clickedMode) {
		case "basic-soul":
			correspondingColumn = 'soul-tricks';
			trickElements = ['acid','makio','mizou','pornstar','soul'];
			break;
		case "basic-groove":
			correspondingColumn = 'groove-tricks';
			trickElements = ['ufo'];
			break;
		case "basic-spins-on":
			correspondingColumn = 'spins-on-trick';
			trickElements = ['alley-oop'];
			break;
		case "basic-var":
			correspondingColumn = 'variations';
			trickElements = ['backside','topside'];
			break;
		case "basic-spins-off":
			correspondingColumn = 'spins-off-trick';
			trickElements = ['to-fakie'];
			break;
		case "medium-soul":
			correspondingColumn = 'soul-tricks';
			trickElements = ['acid','makio','mistrial','mizou','pornstar','soul','xgrind'];
			break;
		case "medium-groove":
			correspondingColumn = 'groove-tricks';
			trickElements = ['fulltorque','royale','ufo','unity'];
			break;
		case "medium-spins-on":
			correspondingColumn = 'spins-on-trick';
			trickElements = ['alley-oop','inspin','outspin','truespin','zerospin'];
			break;
		case "medium-var":
			correspondingColumn = 'variations';
			trickElements = ['backside','topside','negative'];
			break;
		case "medium-spins-off":
			correspondingColumn = 'spins-off-trick';
			trickElements = ['to-fakie', 'twoseventy-off', 'threesixty-off', 'revert'];
			break;
		case "hard-soul":
			correspondingColumn = 'soul-tricks';
			trickElements = ['acid','makio','mistrial','mizou','pornstar','soul','xgrind'];
			break;
		case "hard-groove":
			correspondingColumn = 'groove-tricks';
			trickElements = ['fulltorque','royale','ufo','unity'];
			break;
		case "hard-spins-on":
			correspondingColumn = 'spins-on-trick';
			trickElements = ['alley-oop','inspin','outspin','truespin','zerospin'];
			break;
		case "hard-var":
			correspondingColumn = 'variations';
			trickElements = ['backside','topside','negative'];
			break;
		case "hard-spins-off":
			correspondingColumn = 'spins-off-trick';
			trickElements = ['to-fakie', 'twoseventy-off', 'threesixty-off', 'revert'];
			break;
	}
	deselectAll(correspondingColumn);//delect all first
	// then set trickElements to checked
	for (let i = 0; i < trickElements.length; i++) {
		document.getElementById(trickElements[i]).checked = true;
	}
	tickUntickSelectAll(correspondingColumn); //if all selected deselect on mode change
}

//CLear Button
function cleanThis() {
	document.querySelector(".trick-result").innerHTML = "";
	document.querySelector(".will-be").innerHTML = "Cleared. Now randomise!";
	document.querySelector(".more-button i").className = "fas fa-caret-down closed";
}

 //class="fas fa-caret-down"
/*function showMoreTricks() {
	 let hiddenTrick = document.getElementsByClassName("trick-name");
	 let moreButton = document.querySelector(".more-button i");
	 for (let h = 4; h < hiddenTrick.length; h++) {
	 	if (!hiddenTrick[h].style.display) {
	 		hiddenTrick[h].style.display = "block";
	 		moreButton.classList.remove("fa-caret-down");
	 		moreButton.classList.add("fa-caret-up");
	 	} else {
	 		hiddenTrick[h].removeAttribute("style");
	 		moreButton.classList.remove("fa-caret-up");
	 		moreButton.classList.add("fa-caret-down");
	 	}
	 }
}*/

function keepVisible(fromWhich) {
	let hiddenTrick = document.getElementsByClassName("trick-name");
	let moreButton = document.querySelector(".more-button i");
	 for (let h = fromWhich; h < hiddenTrick.length; h++) {
	 	if (moreButton.className.indexOf("closed") >= 0) {
	 		hiddenTrick[h].className = "trick-name invisible";
		} else if ( moreButton.className.indexOf("opened") >= 0 ) {
			hiddenTrick[h].className = "trick-name visible";
		}
	}
}

function showMoreTricks() {
	let moreButton = document.querySelector(".more-button i");
	if (moreButton.className.indexOf("closed") >= 0) {
		moreButton.className = "fas fa-caret-up opened";
	} else if ( moreButton.className.indexOf("opened") >= 0 ) {
		moreButton.className = "fas fa-caret-down closed";
	}
	keepVisible(4);
}


//Finally! Let's create random trick.

//create random number
rand = function(min, max) {
  if (min==null && max==null)
    return 0;    
  
  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

function findTrick(trickColumn) {//find checked tricks
	//randomise soul or groove trick
	let whichTricks = document.getElementsByName(trickColumn);
	let chooseRandomFrom = [];
	let addingTrick;
	for (let i = 0; i < whichTricks.length; i++) {
		if (whichTricks[i].checked == true) {
			addingTrick = document.querySelector("#" + whichTricks[i].id + " ~ label").innerHTML; //find trick name inside label
			chooseRandomFrom.push(addingTrick);
		}
	}
	console.log(chooseRandomFrom);
	if (chooseRandomFrom.length > 0) {
		return(chooseRandomFrom[rand(0,(chooseRandomFrom.length-1))]); //choose random trick
	}
}


let topsideOrNot = ["topside", ""];
let backsideOrNot = ["backside", ""];
let switchOrNot = ["switch", ""];
let aoVariationsPossible = ["alley-oop", "inspin", "outspin", "truespin", "zerospin"]; //write all possible ao variations IDs here; choose from these if checked
let grabVariationsPossible = ["christ", "freestyle", "parallel", "rocket"];//write all possible grab variations IDs here; choose from these if checked
let grabTricks = ["backslide", "fastslide", "fish", "makio", "pudslide", "sueslide"];
let nonTopTricks = ["misfit", "kind", "boardwalk", "fish", "deadfish", "sweatstance"];
let nonAoTricks = ["misfit", "kind", "awol", "soyale"]; // ao trick which don't need alley-opp in the name
let spinAoPossible = ["fullcab", "fivefourty-on", "threesixty-on"];
let spinGroovePossible = ["twoseventy-on", "fakie-twoseventy-on", "fourfifty-on", "fakie-fourfifty-on"];
let roughToughPossible = ["rough", "tough"];
let threesixtySpinPossible = ["outspin", "inspin"];
let negativeOrNot = ["negative", ""];
let farsideOrNot = ["farside", ""];
let disasterOrNot = ["disaster", ""];
let medspinOrNot = ["medspin", ""];
let illusionOrNot = ["illusion", ""];
let illusionSpinPossible = ["outspin", "inspin", "fakie 270", "fakie 450", "fullcab"]; //put all fakie spins labels for illusion here
let spinOffSoulPossible = ["oneeighty-off", "threesixty-off", "fivefourty-off", "seventwenty-off", "ninehudred-off"];
let spinOffGroovePossible = ["to-fakie", "twoseventy-off", "fourfifty-off", "sixthirty-off", "eightten-off"];
let rewindOrNot = ["rewind", ""];
let trueOrAo = ["truespin", "alley-oop"];


//add span
function addWrapTag(wrapTag,toThisSpan, wrapTagClassName) {
	let nameWithSpans;
	if (!(toThisSpan == "")) {
		nameWithSpans = "<"+ wrapTag + " class=\"" + wrapTagClassName + "\">" + toThisSpan.trim() + "</" + wrapTag + ">"; //trim to delete spaces
	} else {
		nameWithSpans = "";
	}
	return nameWithSpans;
}

//randomise topside, backside, switch etc
function randomVariation(trickVariation) {
	return trickVariation[rand(0,(trickVariation.length-1))];
}

function addMedspin(spinWhichVariationFormula) {
	//add medspin for 270, 360, 450 and 540
	let medspinFormula = "";
	if (document.getElementById("medspin").checked && spinWhichVariationFormula !== "" && !(spinWhichVariationFormula.includes("fakie"))) {
		medspinFormula = randomVariation(medspinOrNot);
		console.log("medspinFormula = " + medspinFormula);
		if (medspinFormula !== "") {
			medspinFormula += " ";
		}
	}
	return medspinFormula;
}

function addIllusion(thisFormula) {
	//add illusion only for outspin, inspin, fakie270, fakie450 and fullcab
	let isIllusion = false;
	for (let i = 0; i < illusionSpinPossible.length; i++) {
		if (thisFormula.includes(illusionSpinPossible[i]) && !(thisFormula.includes("360")) && !(thisFormula.includes("medspin"))) {
			console.log("Illusion possible!");
			isIllusion = true;
		}
	}

	let illusionFormula = "";
	if (document.getElementById("illusion").checked && isIllusion) {
		illusionFormula = randomVariation(illusionOrNot);
		console.log("illusionFormula = " + illusionFormula);
		if (illusionFormula !== "") {
			illusionFormula += " ";
		}
	}
	return illusionFormula;
}

function addRewind(thisChosenSpinOff) { //also adds out if it's not rewind
	//add medspin for 270, 360, 450 and 540
	let rewindFormula = " out";
	if (document.getElementById("rewind").checked && thisChosenSpinOff !== "") {
		rewindFormula = randomVariation(rewindOrNot);
		//console.log("rewindFormula = " + rewindFormula);
		if (rewindFormula !== "") { //it's rewind
			rewindFormula = " " + rewindFormula; //add space to rewind word
		} else {
			rewindFormula = " out";
		}
	} else if (thisChosenSpinOff === "") { //if empty spin off then no out
		rewindFormula = "";
	}

	if (thisChosenSpinOff === " to fakie" || thisChosenSpinOff === "") { //delete rewind if to fakie chosen
		rewindFormula = "";
	}

	return rewindFormula;
}

function addSpinOff(spinOffPossible) {
	let chosenSpinOff = [""];
	for (let h = 0; h < spinOffPossible.length; h++) {
		console.log("now checking possible spin " + spinOffPossible[h])
		if (document.getElementById(spinOffPossible[h]).checked) {
			chosenSpinOff.push(document.querySelector("#" + spinOffPossible[h] + " ~ label").innerHTML);
		}
	}
	spinOffFormula = randomVariation(chosenSpinOff);
	if (spinOffFormula !== "") {
		spinOffFormula = " " + spinOffFormula;
	}
	//add rewind if needed
	spinOffFormula += addRewind(spinOffFormula);
	return spinOffFormula;
}

function randomiseTrick() {
	let randomSoulTrick = findTrick("soul-tricks");
	let randomGrooveTrick = findTrick("groove-tricks");

	let isGroove;
	let trickFormula;
	let topsideFormula = "";
	let backsideFormula = "";
	let ifGrabTrick;

	//find which trick will be rolled
	if (randomSoulTrick == undefined && randomGrooveTrick == undefined) { //nothing is chosen
		isGroove = 2;
		console.log("Please, choose at least one soul or groove trick!");
	} else if (randomSoulTrick !== undefined && randomGrooveTrick !== undefined) { //soul and groove tricks, randomise
		isGroove = rand(0,1);	//randomise groove or soul trick
		console.log("Is groove? (0 - no, 1 yes) Answer: " + isGroove);
	} else if (randomSoulTrick !== undefined && randomGrooveTrick == undefined) { //only soul tricks chosen
		isGroove = 0;
		console.log("Only soul tricks chosen!")
	} else if (randomSoulTrick == undefined && randomGrooveTrick !== undefined) { //only groove tricks chosen
		isGroove = 1;
		console.log("Only groove tricks chosen!")
	}

	//add rocket, parallel, christ, freestyle
	let chosenGrabVariatons = [""];
	for (let h = 0; h < grabVariationsPossible.length; h++) {
		if (document.getElementById(grabVariationsPossible[h]).checked) {
			chosenGrabVariatons.push(grabVariationsPossible[h]);
		}
	}
	let grabVariationFormula = randomVariation(chosenGrabVariatons);
	if (isGroove == 0) { //
		ifGrabTrick = grabTricks.includes(randomSoulTrick);
	} else if (isGroove == 1) {
		ifGrabTrick = grabTricks.includes(randomGrooveTrick);
	}

	if (grabVariationFormula != "" && ifGrabTrick) {//it is grab trick
		grabVariationFormula += " ";
	} else { //trick can not be grabbed
		grabVariationFormula = "";
	}	

	//SOUL TRICK
	if (isGroove == 0) { //randomise soul trick
		console.log(randomSoulTrick);
		//topside or not
		if (document.getElementById("topside").checked) {
			topsideFormula = randomVariation(topsideOrNot);
			if (topsideFormula !== "") {
				topsideFormula += " "; //add space to word if not empty
			}
			console.log("For topside " + topsideFormula);
		}

		//add rough, tough
		let chosenRoughVariatons = [""];
		for (let s = 0; s < roughToughPossible.length; s++) {
			if (document.getElementById(roughToughPossible[s]).checked) {
				chosenRoughVariatons.push(roughToughPossible[s]);
			}
		}
		let roughVariationFormula = randomVariation(chosenRoughVariatons);//find random variation
		if (roughVariationFormula != "") { //if not empty, add space after
			roughVariationFormula += " ";
			if (randomSoulTrick == "awol" || randomSoulTrick == "tea kettle") {
				roughVariationFormula = "";
			}
		}

		//add negative
		let negativeFormula = "";
		if (document.getElementById("negative").checked) {
			negativeFormula = randomVariation(negativeOrNot);
			if (negativeFormula !== "") {
				negativeFormula = negativeFormula + " ";
			}
		}

		//ao, truespin, inspin, outspin, zerospin
		let chosenAoVariatons = [""];
		for (let s = 0; s < aoVariationsPossible.length; s++) {
			if (document.getElementById(aoVariationsPossible[s]).checked) {
				chosenAoVariatons.push(aoVariationsPossible[s]);
			}
		}
		let aoVariationFormula = randomVariation(chosenAoVariatons);//find random variation
		if (aoVariationFormula != "") { //if not empty, add space after
			aoVariationFormula += " ";
		}
		console.log("AO Variation is " + aoVariationFormula);

		//fullcab, 540, 360
		let chosenSpinAoVariatons = [""];
		for (let s = 0; s < spinAoPossible.length; s++) {//decide from which to choose
			if (document.getElementById(spinAoPossible[s]).checked) {
				chosenSpinAoVariatons.push(document.querySelector("#" + spinAoPossible[s] + " ~ label").innerHTML);//changing IDs to Labels
			}
		}
		console.log("This are chosen Spins (fullcab and 540)" + chosenSpinAoVariatons);
		let spinAoVariationFormula = randomVariation(chosenSpinAoVariatons);//find random variation
		console.log("spinAoVariationFormula = " + spinAoVariationFormula);
		if (spinAoVariationFormula != "" && spinAoVariationFormula != "360" ) {//if not empty and not 360 (fullcab and 540)
			spinAoVariationFormula += " ";
			if (nonAoTricks.includes(randomSoulTrick) && aoVariationFormula !== "truespin ") { //if it's already aotrick, aoVariation equal to alley-oop, so next condition leaves 540 and fullcab
				aoVariationFormula = "alley-oop ";
			}
			if (aoVariationFormula == "") { //if not set, then add alley-oop. fullcab and 540 are ao by definiton
				aoVariationFormula = "alley-oop ";
			} else if (!(aoVariationFormula == "truespin " || aoVariationFormula == "alley-oop ")) {
				spinAoVariationFormula = ""; //give higher priority to zerospins, inspins and outspins and remove fullcab and 540 
			}
		} else if (spinAoVariationFormula == "360") {//if 360
			spinAoVariationFormula += " ";
			//if it's ao trick
			if (threesixtySpinPossible.includes(aoVariationFormula)) {
				console.log("Super! It's " + aoVariationFormula + ". You don't need to decide!"); //cool! it's outspin or inspin already!
			} else if (aoVariationFormula == "" || chosenAoVariatons == "" || (!(chosenAoVariatons.includes("outspin")) && !(chosenAoVariatons.includes("inspin")))){ //nothing is chosen for ao variations or outspin and inspin not chosen
				console.log("No ao variations or outspin and inspin not chosen! I will randomise it for 360.")
				aoVariationFormula = randomVariation(threesixtySpinPossible) + " ";//randomise outspin or inspin
				console.log("I choose " + aoVariationFormula + " for 360!");
			} else if (aoVariationFormula !== "outspin " || aoVariationFormula !== "inspin ") {
				spinAoVariationFormula = "";
			}
		}

		//remove alley-oop from misfit, kind, awol, soyale
		if (nonAoTricks.includes(randomSoulTrick) && (aoVariationFormula.indexOf("alley-oop") >= 0 || aoVariationFormula.indexOf("inspin") >= 0 || aoVariationFormula.indexOf("outspin") >= 0)) {
			aoVariationFormula = "";
		}

		//remove topside from misfit and kind
		if (nonTopTricks.includes(randomSoulTrick) && topsideFormula.indexOf("topside") >= 0) {
			topsideFormula = "";
		}

		//remove inspin and outspin from misfit, kind, soyale, awol
		if ( nonAoTricks.includes(randomSoulTrick) && (aoVariationFormula.indexOf("inspin") >= 0 || aoVariationFormula.indexOf("outspin") >= 0)) {
				aoVariationFormula = "";
		}


		//change special trick names to awol, tea kettle, kindgrind, misfit, sweatstance, fish, boardwalk, soyale

		//ao or truespin torque soul to soyale
		if (trueOrAo.includes(aoVariationFormula.trim()) && (randomSoulTrick.indexOf("torque soul") >= 0)) {
			if (aoVariationFormula.indexOf("alley-oop") >= 0) { //its ao then delete ao
				aoVariationFormula = "";
			}
			randomSoulTrick = "soyale";
		}
		//tough soyale to awol
		if ((roughVariationFormula.indexOf("tough") >= 0) && (randomSoulTrick.indexOf("soyale") >= 0)) {
			roughVariationFormula = "";
			randomSoulTrick = "awol";
		}
		//tough soyale to awol
		if ((roughVariationFormula.indexOf("rough") >= 0) && (randomSoulTrick.indexOf("pornstar") >= 0)) {
			roughVariationFormula = "";
			randomSoulTrick = "tea kettle";
		}
		//topside makio to fish
		if ((topsideFormula.indexOf("topside") >= 0) && (randomSoulTrick.indexOf("makio") >= 0)) {
			topsideFormula = "";
			randomSoulTrick = "fish";
		}
		//topside mizou to sweatstance
		if ((topsideFormula.indexOf("topside") >= 0) && (randomSoulTrick.indexOf("mizou") >= 0)) {
			topsideFormula = "";
			randomSoulTrick = "sweatstance";
		}
		//ao and true sweat to kind
		if (trueOrAo.includes(aoVariationFormula.trim()) && (randomSoulTrick.indexOf("sweatstance") >= 0)) {
			if (aoVariationFormula.indexOf("alley-oop") >= 0) { //its ao then delete ao
				aoVariationFormula = "";
			}
			randomSoulTrick = "kind";
		}
		//ao and true topside mistrial to misfit
		if (trueOrAo.includes(aoVariationFormula.trim()) && (topsideFormula.indexOf("topside") >= 0) && (randomSoulTrick.indexOf("mistrial") >= 0)) {
			if (aoVariationFormula.indexOf("alley-oop") >= 0) { //its ao then delete ao
				aoVariationFormula = "";
			}
			topsideFormula = "";
			randomSoulTrick = "misfit";
		}
		//topside makio to fish
		if ((topsideFormula.indexOf("topside") >= 0) && (randomSoulTrick.indexOf("monorail") >= 0)) {
			topsideFormula = "";
			randomSoulTrick = "boardwalk";
		}
		//topside makio to fish
		if ((topsideFormula.indexOf("topside") >= 0) && (randomSoulTrick.indexOf("training wheel") >= 0)) {
			topsideFormula = "";
			randomSoulTrick = "deadfish";
		}


		//generate soul trick name
//		trickFormula = spinAoVariationFormula + aoVariationFormula + negativeFormula + topsideFormula + grabVariationFormula + roughVariationFormula + randomSoulTrick;
		//addWrapTag
		trickFormula = addWrapTag("span",spinAoVariationFormula,"spin-variation") + addWrapTag("span",aoVariationFormula,"ao-variation") + addWrapTag("span",negativeFormula,"negative-variation") + addWrapTag("span",topsideFormula, "topside-variation") + addWrapTag("span",grabVariationFormula,"grab-variation") + addWrapTag("span",roughVariationFormula,"rough-variation") + addWrapTag("span",randomSoulTrick,"soul-name");

		//add medspin
//		trickFormula = addMedspin(spinAoVariationFormula) + trickFormula;
		//addWrapTag
		trickFormula = addWrapTag("span",addMedspin(spinAoVariationFormula),"medspin-variation") + trickFormula;

		//add illusion
//		trickFormula = addIllusion(trickFormula) + trickFormula;
		//addWrapTag
		trickFormula = addWrapTag("span",addIllusion(trickFormula),"illusion-variation") + trickFormula;

		//add spin off
//		trickFormula += addSpinOff(spinOffSoulPossible);
		//addWrapTag
		trickFormula += addWrapTag("span",addSpinOff(spinOffSoulPossible),"spin-off-variation");

	//GROOVE TRICK
	} else if (isGroove == 1) { //randomise groove trick
		console.log(randomGrooveTrick);
		//backside or not
		if (document.getElementById("backside").checked) {
			backsideFormula = randomVariation(backsideOrNot);
			if (backsideFormula !== "") {
				backsideFormula += " "; //add space to word if not empty
			}
			console.log("For backside " + backsideFormula);
		}

		//add 270, fakie 270, 450, fakie 450
		let chosenSpinGrooveVariatons = [""];
		for (let j = 0; j < spinGroovePossible.length; j++) {//decide from which to choose
			if (document.getElementById(spinGroovePossible[j]).checked) {
				chosenSpinGrooveVariatons.push(document.querySelector("#" + spinGroovePossible[j] + " ~ label").innerHTML);//changing IDs to Labels
			}
		}
		console.log("This are chosen Spins for groove " + chosenSpinGrooveVariatons);
		let spinGrooveVariationFormula = randomVariation(chosenSpinGrooveVariatons);//find random variation
		console.log("spinGrooveVariationFormula = " + spinGrooveVariationFormula);
		if (spinGrooveVariationFormula !== "") {
			spinGrooveVariationFormula += " ";
		}
		//generate groove trick name
//		trickFormula = spinGrooveVariationFormula + grabVariationFormula + backsideFormula + randomGrooveTrick;
		//addWrapTag
		trickFormula = addWrapTag("span",spinGrooveVariationFormula,"spin-variation") + addWrapTag("span",grabVariationFormula, "grab-variation") + addWrapTag("span",backsideFormula, "backside-variation") + addWrapTag("span",randomGrooveTrick,"groove-name");

		//add medspin
//		trickFormula = addMedspin(spinAoVariationFormula) + trickFormula;
		//addWrapTag
		trickFormula = addWrapTag("span",addMedspin(spinGrooveVariationFormula),"medspin-variation") + trickFormula;

		//add illusion
//		trickFormula = addIllusion(trickFormula) + trickFormula;
		//addWrapTag
		trickFormula = addWrapTag("span",addIllusion(trickFormula),"illusion-variation") + trickFormula;

		//add spin off
//		trickFormula += addSpinOff(spinOffGroovePossible);
		//addWrapTag
		trickFormula += addWrapTag("span",addSpinOff(spinOffGroovePossible),"spin-off-variation");

	} else if (isGroove == 2) { //nothing is chosen. please, choose trick!
		trickFormula = "Nothing is chosen! Please, choose any soul or groove trick.";
	}

	//add farside
	let farsideFormula = "";
	if (document.getElementById("farside").checked) {
		farsideFormula = randomVariation(farsideOrNot);
		if (farsideFormula !== "") {
			farsideFormula += " ";
		}
	}
//	trickFormula = farsideFormula + trickFormula;
	//addWrapTag
	trickFormula = addWrapTag("span",farsideFormula,"farside-variation") + trickFormula;


	//add switch
	let switchFormula = "";
	if (document.getElementById("switch").checked) {
		switchFormula = randomVariation(switchOrNot);
		if (switchFormula !== "") {
			switchFormula += " ";
		}
	}
//	trickFormula = switchFormula + trickFormula;
	//addWrapTag
	trickFormula = addWrapTag("span",switchFormula,"switch-variation") + trickFormula;

	//add disaster
	let disasterFormula = "";
	if (document.getElementById("disaster").checked) {
		disasterFormula = randomVariation(disasterOrNot);
		if (disasterFormula !== "") {
			disasterFormula += " ";
		}
	}
//	trickFormula = disasterFormula + trickFormula;
	//addWrapTag
	trickFormula = addWrapTag("span",disasterFormula,"disaster-variation") + trickFormula;

	//add result to screen
	console.log(trickFormula);

	keepVisible(3);//keep visible or hide 5 and more

	document.querySelector(".will-be").innerHTML = ""; //clear result will be here phrase

	
/*	let resultBlock = "<div>" + (document.querySelector(".result-block")).innerHTML + "</div>";
	trickFormula = addWrapTag("div",trickFormula,"trick-name");
	resultBlock.innerHTML = trickFormula + resultBlock;*/

	/*if (resultBlock.innerHTML.indexOf(trickFormula + "</br>") >=0 && itsAlreadyRandomed < 20) {//repeating trick
		itsAlreadyRandomed++;
		console.log("Already randomed " + itsAlreadyRandomed);
		randomiseTrick();
	} else if (itsAlreadyRandomed > 20) { //too many randomisations
		itsAlreadyRandomed = 0;
		console.log("No more variants? Try to add more variations!")
	} else {
		itsAlreadyRandomed = 0;
		resultBlock.innerHTML = trickFormula + "</br>" + resultBlock.innerHTML;
	}*/

	//trickFormula += "<br>";

/*	working withouth letsdoit
	let resultBlock = document.querySelector(".trick-result");
	resultBlock.innerHTML = addWrapTag("div",trickFormula,"trick-name") + resultBlock.innerHTML; */
	return trickFormula;
}

//replaceAll function
String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 


//to avoid repeating trick names!
let itsAlreadyRandomed = 0;
function letsDoIt() {
	let resultBlock = document.querySelector(".trick-result");
	let okayTrick = addWrapTag("div",randomiseTrick(),"trick-name");
	console.log("okayTrick = " + okayTrick);
	resultBlockNoClasses = resultBlock.innerHTML.replaceAll('class="trick-name invisible"', 'class="trick-name"');
	resultBlockNoClasses = resultBlockNoClasses.replaceAll('class="trick-name visible"', 'class="trick-name"');
	if (resultBlockNoClasses.indexOf(okayTrick) < 0) {
		itsAlreadyRandomed = 0;
		resultBlock.innerHTML = okayTrick + resultBlock.innerHTML;
	} else if (resultBlockNoClasses.indexOf(okayTrick) >= 0 && itsAlreadyRandomed < 50) {
		itsAlreadyRandomed++;
		console.log("Already randomed " + itsAlreadyRandomed);
		letsDoIt();
	} else if (itsAlreadyRandomed == 50) { //too many randomisations
		itsAlreadyRandomed = 0;
		console.log("No more variants? Try to add more variations!");
		document.querySelector(".will-be").innerHTML = "Can't find variants :( Randomise more, add more variations or clear to start again!";
	}
}