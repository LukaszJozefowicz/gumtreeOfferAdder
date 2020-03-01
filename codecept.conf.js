const { setHeadlessWhen } = require('@codeceptjs/configure');
const selenium = require('selenium-standalone');

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
      browser: 'chrome',
      rootElement: 'body',
      angular: false,
      smartWait: 5000,
      //disableScreenshots: true,
      capabilities: {
        'browserName': 'chrome',
        'goog:chromeOptions': {
          'args': ['--start-maximized']
        }
      },
    },
    MyHelper: {
      require: './customHelper/myHelper.js'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/startPage.page.js',
    form: './pages/offerForm.page.js'
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