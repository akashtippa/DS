exports.config = {
      directConnect: true,
    // Capabilities to be passed to the webdriver instance.
          capabilities: {
            'browserName': 'chrome'
          },
          framework: 'jasmine',
          //seleniumAddress: 'http://localhost:4444/wd/hub',
          specs: ['DsWeb.js'],
          
          jasmineNodeOpts: {
              // showColors: true,
               defaultTimeoutInterval: 30000,
              // isVerbose: true,
              // includeStackTrace: true,
          }
}