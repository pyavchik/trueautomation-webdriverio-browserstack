describe('TrueAutomation.IO page WebdirverIO + TrueAutomation', () => {
    it('Test example', () => {
        browser.url('https://trueautomation.io');
        $('a.login-btn').click();
        $('div.sign-up-container > a').click();
        $("[name='email']").setValue('your@gmail.com');
    });
});

