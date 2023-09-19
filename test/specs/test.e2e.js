
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('beginning test');
        console.log('shared store values:');
        console.log(await browser.sharedStore.get('*'));
        await browser.url('/');
    })
})
