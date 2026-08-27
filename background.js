function toggleEditMode() {
    document.designMode = document.designMode === "on" ? "off" : "on" ;
} 


chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
            target: {tabId  : tab.id },
            function: toggleEditMode

        });
    }
});