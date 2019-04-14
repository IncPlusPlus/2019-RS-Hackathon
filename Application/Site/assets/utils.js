//Converts string yes/no or undefined to int
const valueToInt = function(val) {
	if (val === undefined || val == 0 || val.toLowerCase() == 'no') {
		return 0;
	}else return 1;
}

//Converts int to human readable value
const intToVal = function(val) {
	if (val === undefined || val == 0) {
		return 'No';
	}else return 'Yes';
}