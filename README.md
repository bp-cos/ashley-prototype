# ashley-prototype

A quick prototype for Ashley

## how to build the project

`npm run build`

## how to run the project after build 

`node build/main.js`

## Pre-commit

Husky is used to validate all code during the pre-commit git stage.

The following scripts are run (and can be run from the commandline).
If any of the scripts fail, the commit will fail.

`npm run build:app`
`npm run format:fix`
`npm run lint`
`npm run docs`

## Pre-push

Husky is used to validate all code during the pre-push git stage.

The following scripts are run (and can be run from the commandline)
If any of the scripts fail, the push will fail.

`npm run build`
`npm run build:test`
`npm run coverage:clean`
`npm run test:run`
`npm run coverage:unit`

