var combinations = function(){
	var mod = 1000000007;
	var arg = process.argv.splice(2);
	if(arg[0]>1000){
		console.log("test numbers exceeds 1000");
		return 0;
	}

	if(arg[0]!=arg.length-1){
		console.log("inputs mismatch");
		return 0;
	}
	
	arg.shift();

	for(var i=0; i<arg.length;i++){
		if(arg[i].toString().length>15){
			console.log("argument length exceed 15");
			return 0;
		}
	}

	var result = arg.map(e=>{
		var sum = 0, n=1, m=2;
		if(e == 0){
			return n;
		};
		if(e == 1){
			return m;
		};

		for (var i = 2; i <= e; i++) {
			sum = (n+m)%mod;
			n=m;
			m=sum;
		};
		return sum;
	});
	console.log(result.join('\n'));

 };
combinations();