var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");

for (let i = 0; i < draggables.length; i++) {
	draggables[i].addEventListener("dragstart", function (e) {
		e.dataTransfer.setData("srcId", e.target.id);
	});
}

dropTarget.addEventListener("dragover", function (e) {
	e.preventDefault();
});

dropTarget.addEventListener("drop", function (e) {
	e.preventDefault();
	let target = e.target;
	let srcId = e.dataTransfer.getData("srcId");

	target.appendChild(document.getElementById(srcId));
});
