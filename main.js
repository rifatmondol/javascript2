
		//multiplication table
		function multiCase(n1,n2){
			var n1,n2;
			for(i = n1; i <= n2; i++){
				for(j = 1; j <= 10; j++){
					document.write(i + " " + "x" + " " + j + " " + "=" + " " + i * j + "<br>");
				}
				document.write('<br>'); 
			}
		}
		multiCase(1,5);


		// trapezium area calculation
		function trapCalc(a,b,c){
			var a,b,c,area;
			area = 0.5 * (a + b) * c;
			document.write("<br>" + "Area of trapeziam is: " + area + "<br>" + "<br>");
		}
		trapCalc(10,13,20);


		//sum,sub,multi,divide calculation 
		function ssmd(num1,num2){
			var num1,num2,sum,sub,multi,divide,dividend;
			sum = num1 + num2;
			sub = num1 - num2;
			multi = num1 * num2;
			divide = num1 / num2;
			dividend = num1 % num2;
			document.write("Sum of two number: " + sum + "<br>" + "Substraction of two number: " + sub + "<br>" + "Multipication of two number: " + multi + "<br>" + "Division of two number: " + divide + "<br>" + "Divident of two number: " + dividend + "<br>");
		}
		ssmd(20,10);