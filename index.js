const terminal = require('node-run-cmd');
const argv = require('minimist')(process.argv.slice(2));

let timesRan = 0;
let totalTimesToRun = argv.times;
let command = argv.command;

function onDone(exitCodes) {
	if (exitCodes > 0) {
		// test failed
		console.log("Test failed on attempt: " + timesRan);
	} else {
		// test succeeded
		checkRunTest();
	}
}
function onData(data) {
	console.log("" + data);
}
function onError(data) {
	console.log("" + data);
}

function checkRunTest() {
	if (timesRan >= totalTimesToRun) {
		console.log("Completed with no errors");
	} else {
		runTest();
	}
}
function runTest() {
	timesRan++;
	terminal.run(command, {
		onDone: onDone,
		onData: onData,
		onError: onError
	});
}

checkRunTest();