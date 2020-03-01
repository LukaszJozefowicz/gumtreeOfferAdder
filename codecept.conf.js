const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './testFiles/*.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'https//gumtree.pl',
      driver: 'hosted',
      browser: 'firefox',
      rootElement: 'body',
      angular: false,
      smartWait: 5000
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/loginPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'gumtreeClicker',
  translation: 'pl-PL',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}