exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
    specs: ['test/Google.spec.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
=======
    specs: ['test/spec.js']
>>>>>>> master
}