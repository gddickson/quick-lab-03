import {Selector} from "testcafe";

fixture `Getting Stated`            // Notice the back-tick, NOT a single or double quote
    .page `../src/simple_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    // optional elements for all tests...
    .beforeEach( async t => {       // This is optional
        console.log("This runs before any test case and is only run once...")
    })
    .afterEach( async t => {        // This is optional
        console.log("This runs after any test case and is only run once...")
    }); // semicolon to terminate optional elements

    
    test('Test1', async t => {
        const msg = Selector('#message');
        await t
            .typeText(msg, `Hello from Test Cafe`)
            .expect (msg.value).contains('Hello', 'input contains text "hello"')
            .click(`#submit-button`)
            .expect(msg.value).eql('', 'inpit is empty');
        console.log("My first test has run...")
    });

    test
    .before( async t => {   // This is optional
        console.log("This runs before the second test case...")
    })
    ('My second test', async t => {
        console.log("My second test has run...")
    })
    .after( async t => {    // This is optional
        console.log("This runs after the second test case...")
    })
