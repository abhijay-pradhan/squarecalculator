function calculate() {
	var y = document.getElementById("s").value;
	var x ="Area : " + y * y + " sq. " + document.getElementById("si").value;
	document.getElementById("ans").innerHTML = x;
	var p ="Perimeter : " + y * 4 + " " + document.getElementById("si").value;
	document.getElementById("perimeter").innerHTML = p;
}