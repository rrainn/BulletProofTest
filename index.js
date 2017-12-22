#!/usr/bin/env node
'use strict';
const terminal = require('node-run-cmd');
const argv = require('minimist')(process.argv);

let timesRan = 0;
let totalTimesToRun = argv.times;
let command = argv.command || argv.cmd;

if (!totalTimesToRun || !command) {
	return console.log("Please ensure you have defined times and command.");
}

function onDone(exitCodes) {
	if (exitCodes > 0) {
		// test failed
		compelete("Failed");
	} else {
		// test succeeded
		checkRunTest();
	}
}
function onData(data) {
	process.stdout.write(data);
}
function onError(data) {
	process.stdout.write(data);
}

function checkRunTest() {
	if (timesRan >= totalTimesToRun) {
		compelete("Success");
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

function complete(status) {
	if (status == "Success") {
		console.log("Completed with no errors");
	} else {
		console.log("Test failed on attempt: " + timesRan);
	}
}

checkRunTest();
