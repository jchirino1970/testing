// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { __metadata } = require('tslib')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sonarqube-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
          reports: ['html', 'lcovonly', 'text-summary'],
          fixWebpackSourcePaths: true,
          thresholds: {
            statements: 100,
            lines: 100,
            branches: 100,
            functions: 100
          } 
      },
      sonarqubeReporter: {
        basePath: 'src/app',
        outputFolder: 'reports',
        filePattern: '**/*spec.ts',
        encoding: 'utf-8',
        legacyMode: false,
        reportName: (metadat)=>{
          return metadat.concat('xml').join('.');
        }
      },
      angularCli: {
        environment: 'dev'
      },
      reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'coverage-istanbul']
      : ['progress', 'kjhtml','sonarqube'],
    //reporters: ['progress', 'kjhtml', 'sonarqube'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
          base: 'Chrome',
          flags: [ '--headless','--disable-gpu','--no-sandbox', '--remote-debugging-port=9222']
      }

    },   
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};
