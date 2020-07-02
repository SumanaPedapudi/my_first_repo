document.getElementById('j').innerHTML="Java Script"
document.getElementById('n').innerHTML = "Java script is a scripting language to change CSS properties and also HTML tags properties.It is wrriten in script tag.The script tag can be placed anywhere in HTML code.We can also create an external java script file with .js extension to use same java script for multiple webpages.Java script is case sensitive.We can add text along with the code using comments.Single line comments //,Multi-line comments /*...*/ We can perform arithematic and logical operations and display them in the webpage.";
		var a = 1;
		var b = 'sumana'
		console.log(a);
		console.log(b);
		var array = [1,2,3,4,5]
		array[3] = "3";
		console.log(array);
		var ar=[];
		document.write("<b>Array elements : </b>"+"<br>")
		for (i = 0; i < 5; i++) {
			ar[i] = window.prompt("Enter values for array");
			document.write("Entered value at index "+i+" is "+ar[i]+"<br>");
		}
		
		function firstname(){
			var f = document.getElementById('fn').value;
			var a = /^[A-Za-z]+$/;
			if(f.match(a)) {
				 return true;
			}
		else{
			alert('Please enter a valid name');
			return false;
			}
		}
		firstname();

		function mathfunctions() {
			// body...
			document.getElementById('power').innerHTML = 'Power value = '+Math.pow(2,5);
			document.getElementById('sr').innerHTML = 'Square root value = '+Math.sqrt(12);
			document.getElementById('absolute').innerHTML = 'Absolute value = '+Math.abs(-18.99);
			var randomno = Math.random();
			document.getElementById('rno').innerHTML = 'Random number = '+ randomno;
			document.getElementById('ceil').innerHTML= 'Ceil value = '+Math.ceil(randomno);
			document.getElementById('floor').innerHTML ='Floor value = '+ Math.floor(randomno);
			document.getElementById('tf').innerHTML = 'Sine value = '+Math.sin(randomno);
		}
		mathfunctions();
		function submitform() {
			var name = document.getElementById('fn').value;
			var email = document.getElementById('mail').value;
			var pno = document.getElementById('no').value;
			if(document.getElementById('m').checked){
				var g = document.getElementById('m').value;
			}
			else if(document.getElementById('f').checked){
				var g = document.getElementById('f').value;
			}
			else{
				var g = document.getElementById('fn').value;
			}
			var college = document.getElementById('college').value;
			// body...
			document.write("<b>"+"Details entered in the form : "+"</b>"+"<br>");
			document.write("Name: "+name+"<br>");
			document.write("Email: "+email+"<br>");
			document.write("Phone no :"+pno+"<br>");
			document.write("Gender :"+g+"<br>");
			document.write("College: "+college+"<br>");
		}
