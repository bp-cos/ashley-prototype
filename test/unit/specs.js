function getSpecFiles() {
  const tests = [];

  tests.push('**/*spec.js');

  return tests;
}

const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();
var reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 3,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
});
jasmine.addReporter(reporter);

/**
 * Add the Stop On First Failure Reported
 */
jasmine.addReporter({});

jasmine.showColors(true);
jasmine.loadConfig({
  spec_dir: 'tsc-out/test',
  spec_files: getSpecFiles(),
  helpers: ['../test/unit/helper.js'],
  stopSpecOnExpectationFailure: false,
  random: false
});
jasmine.execute();
