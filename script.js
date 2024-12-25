function addText() {
	var out=document.querySelector("#out")
	var str=document.getElementById("inp").value
	var maxlength=document.getElementById("len").value
	var strNew
	if ((+maxlength===NaN)||(maxlength<3)) {
		strNew="length error"
	} else {
		strNew=truncate(str, maxlength)
	}
	out.innerHTML=strNew
}
	
function truncate(str, maxlength) {
	if(str.length>maxlength) {
		var str2=str.slice(0, maxlength-3)+"..."
		return str2
	} else {
		return str
	}
}