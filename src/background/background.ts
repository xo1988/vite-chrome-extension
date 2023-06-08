console.log("hello background")

// when chrome start, the service work is inactive
// then add below listener to keep service work active
chrome.runtime.onStartup.addListener( () => {
    console.log(`onStartup()`);
});

