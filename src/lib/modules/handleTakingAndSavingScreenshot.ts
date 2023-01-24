async function takeScreenshot() {
	return new Promise((resolve) => {
		chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
			resolve(dataUrl);
		});
	});
}

const handleTakingAndSavingScreenshot = () => {
	let dataUrl = takeScreenshot();
	console.log(dataUrl);
};

export { handleTakingAndSavingScreenshot };
