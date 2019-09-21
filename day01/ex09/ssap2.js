/*
    Type 
    node ssap2.js [arguments]
    in the command line to execute
*/

var arr = [];

for(var i = 2; i < process.argv.length; i++) {
    arr = arr.concat(process.argv[i].trim().split(/\s+/));
}

arr.sort((a, b) => {
    var i = 0;
	while (a[i] && b[i])
	{
		if (a[i] != b[i]) {
			if (a[i].match(/[a-zA-Z]/) && !b[i].match(/[a-zA-Z]/))
				return (-1)
			else if (!a[i].match(/[a-zA-Z]/) && b[i].match(/[a-zA-Z]/))
				return (1)
			else if (a[i].match(/[0-9]/) && !b[i].match(/[0-9]/))
				return (-1)
			else if (!a[i].match(/[0-9]/) && b[i].match(/[0-9]/))
				return (1)
			else if (a[i].toLowerCase() >= b[i].toLowerCase())
                return (1);
            else
                return (-1);
		}
		i++;
	}
	return (0);
});

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
