	try{
		var date = window.prompt("Enter date")
		aaaaaa 
		console.log(date)
	}
catch{
function f() {
	// body...
	document.getElementById('demo').innerHTML = "onclick event"
}
function f1(){
	document.getElementById('d1').innerHTML ="double click event"
}
}
finally{
	n = window.prompt("Enter a number")
	document.write("Entered number is "+n+"<br>")
	document.write('<b>Fibanocci Series: </b>');
	var a = 0;
	var b = 1;
	document.write(a+" "+b+" ")
	function fs(n) {
		var c = 1;
		for (var i = 2; i <= n; i++) {
			c = a+b;
			document.write(" "+c+" ");
			a = b;
			b = c;
		}
	}
	fs(n);
	document.write('<br><b>Checking whether the entered number is in between 10 -100 : </b>')
	function no(n) {
		// body...
		switch(n){
		 default:
		 	if(n > 10 && n < 100){
		 		document.write(n +" is in between 10 - 100")
		 		break;
		 	}
		 	else{
		 		document.write(n+" is not in between 10-100");
		 	}
		}
	}
no(n);
var about  = "HTML stands for Hypertext Markup Language. It is used to create a webpage. It will just give the structure of browser. Any HTML file can opened by using a webbrowser. HTML has various tags. Each tag has a specific function. Every element has opening and closing tag. But few elements don't have a closing tag(ex:br,img). Only the content in the body is visible in the page. We can insert images, tables etc. We can also change colors and background colors. For writing HTML code we use editors. In Windows we have Notepad as editor. We can also use Sublime TextEditor. After writing the code in the editor it has to be saved with .html extension. We can open the saved file in any webbrowser."
var words= about.split(" ");
document.write("<br>The 5th word in the string is "+words[4]);
document.write("<br>The 7th word in the string is "+words[6]);
document.write("<br>The 10th word in the string is "+words[9]);
}