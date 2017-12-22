# BulletProofTest [![NPM version](https://badge.fury.io/js/scriptutils.svg)](http://badge.fury.io/js/scriptutils) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/scriptutils/badge.svg)](https://snyk.io/test/github/rrainn/scriptutils) [![Dependencies](https://david-dm.org/rrainn/scriptutils.svg)](https://david-dm.org/rrainn/scriptutils) [![Dev Dependencies](https://david-dm.org/rrainn/scriptutils/dev-status.svg)](https://david-dm.org/rrainn/scriptutils?type=dev)

## Description

BulletProofTest is a package that allows you to easily test a terminal command multiple times. Once complete or on failure the process will exit.

## Install

`npm install --save BulletProofTest`

## Usage

For example the following command will run `npm test` 100 times or until failure.

`bulletprooftest --times=100 --command="npm test"`

You can adjust times and command to your use case.
