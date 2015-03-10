
$("#button").click(function() {
    var encryptKey=$("#encryptionKey").val();
    var encryptValue=$("#encryptedValue").val();
    decrypt(encryptKey,encryptValue);

});

function decrypt(encryptKey,encryptValue)
{
	//h-x/37=h
	var keyPosition=encryptKey.split("");
	var decryptValue="";
	var answer={};
	while(encryptValue!=7)
	{
		answer=divisibleValue(keyPosition.length,encryptValue)
		decryptValue+=keyPosition[answer.position];
		encryptValue=answer.value;
	};
	decryptValue=decryptValue.split("").reverse().join("");
	console.log(decryptValue);
}

function divisibleValue(keyLength,value)
{
	var result={};
	for(var i=0;i<keyLength;i++)
	{
		var calculatedResult=(value-i)/37;
		if(calculatedResult%1===0)
		{
			result.value=calculatedResult;
			result.position=i;
		}
	}
	return result;
}