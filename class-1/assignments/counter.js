function countDown() {
	for (let i = 30; i >= 0; i--) {
		setTimeout(function () {
			console.log(i);
		}, 1000 * (30 - i)); // Adjust the delay based on the value of i
	}
}
countDown();
