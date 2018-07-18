import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
const { AwesomeReport } = require('jasmine-awesome-report');
const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true
};

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    customProcessors: [DisplayProcessor],
  }));

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
