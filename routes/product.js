exports.addProduct=function(req,res){
	
	var a=req.params.a;
	var b=req.params.b;
	var multiply=a*b;
	 var data = {
        "multiplication": {
            
            product:multiply

        }
    }

    
	     res.send(data);
	 }

