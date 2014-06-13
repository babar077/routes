exports.addNumber=function(req,res){
	var random = Math.floor((Math.random() * 4) + 1);
	var data={
		Status: 'ok',
		number:random



	};
	res.send(data);
}
//