#!/usr/bin/env node
'use strict';
const terminal = require('node-run-cmd');
const prettyMs = require('pretty-ms');
const argv = require('minimist')(process.argv);
const chalk = require('chalk');

let timesRan = 0;
let totalTimesToRun = argv.times;
let command = argv.command || argv.cmd;
let timeTook = [];
let startTime = 0;

if (!totalTimesToRun || !command) {
	return console.log("Please ensure you have defined times and command.");
}

function onDone(exitCodes) {
	timeTook.push(Date.now() - startTime);
	if (exitCodes > 0) {
		// test failed
		complete("Failed");
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
		complete("Success");
	} else {
		runTest();
	}
}
function runTest() {
	startTime = Date.now();
	timesRan++;
	terminal.run(command, {
		onDone: onDone,
		onData: onData,
		onError: onError
	});
}

function complete(status) {
	console.log("Total time took: " + prettyMs(timeTook.reduce((total, time) => total + time, 0)));
	console.log("Average time took: " + prettyMs(timeTook.reduce((total, time) => total + time, 0)/totalTimesToRun));
	console.log("Max time took: " + prettyMs(Math.max.apply(Math, timeTook)));
	console.log("Min time took: " + prettyMs(Math.min.apply(Math, timeTook)));

	if (status == "Success") {
		console.log(chalk.bold.green("Completed " + totalTimesToRun + " times with no errors"));
	} else {
		console.log(chalk.bold.red("Test failed on attempt: " + timesRan + " of " + totalTimesToRun));
	}
}

checkRunTest();
