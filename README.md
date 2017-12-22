# BulletProofTest [![NPM version](https://badge.fury.io/js/BulletProofTest.svg)](http://badge.fury.io/js/BulletProofTest) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/BulletProofTest/badge.svg)](https://snyk.io/test/github/rrainn/BulletProofTest) [![Dependencies](https://david-dm.org/rrainn/BulletProofTest.svg)](https://david-dm.org/rrainn/BulletProofTest) [![Dev Dependencies](https://david-dm.org/rrainn/BulletProofTest/dev-status.svg)](https://david-dm.org/rrainn/BulletProofTest?type=dev)

## Description

BulletProofTest is a package that allows you to easily test a terminal command multiple times. Once complete or on failure the process will exit.

## Install

`npm install --save BulletProofTest`

## Usage

For example the following command will run `npm test` 100 times or until failure.

`bulletprooftest --times=100 --command="npm test"`

You can adjust times and command to your use case.
