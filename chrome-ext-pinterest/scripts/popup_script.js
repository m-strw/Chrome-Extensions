document.querySelector('#add_pin').addEventListener('click', () => {
    chrome.windows.getCurrent({ populate: true }, window => {
        const site_to_pin = window.tabs.filter(tab => tab.active);

        chrome.runtime.sendMessage({
            message: 'add_pin',
            payload: {
                url: site_to_pin[0].url,
                destination_title: site_to_pin[0].title
            }
        });
    });
});

document.querySelector('#my_board').addEventListener('click', () => {
    chrome.runtime.sendMessage({
        message: 'open_board'
    });
});


// Import x3 Images from board for Popup


// if (request.message === 'get_pins') {
//     chrome.storage.local.get('pins', data => {
//         if (chrome.runtime.lastError) {
//             sendResponse({ message: 'fail' });
//             return;
//         }

//         sendResponse({
//             message: 'success',
//             payload: data.pins ? data.pins : []
//         });
//     });

//     return true;