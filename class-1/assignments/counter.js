// Create a counter in Javascript (counts down from 30 to 0)

function countDown() {
	for (let i = 30; i >= 0; i--) {
		setTimeout(function () {
			console.log(i);
		}, 1000 * (30 - i)); // Adjust the delay based on the value of i
	}
}
countDown();