# ashley-prototype

A quick prototype for Ashley

## how to build the project

`npm run build`

## Help after build

`node build/run.js ?`

## how to run the project after build 

`node build/run.js --directories|-d '["dir1", "dir2", "dirn"]'`


## Testing

Testing is an essential part of the application since there needs to be 100% coverage in order to commit.

These scripts can help with testing:

`npm run coverage`
`npm run coverage:unit`
`npm run test`
`npm run test:run`
`npm run watch:unit`

## Linting 

Linting is an essential part of the application since there needs to be 100% linting conformity in order to commit.

These scripts can help with linting:

`npm run lint`
`npm run lint:all`
`npm run watch:lint`

## Formatting 

The application is formatted by prettier.

These scripts can help with quickly format all the code:

`npm run format:check`
`npm run format:all`

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

