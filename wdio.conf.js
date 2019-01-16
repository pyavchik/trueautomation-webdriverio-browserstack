exports.config = {

    user: 'browserstackUsername',
    key: 'browserstackKey',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 10,

    capabilities: [{
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '70.0',
        'resolution': '1024x768'

    }],
    deprecationWarnings: true,
    baseUrl: 'http://localhost',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['trueautomation'],

}
