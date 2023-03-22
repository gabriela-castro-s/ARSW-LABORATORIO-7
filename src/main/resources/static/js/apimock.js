apimock=(function(){

	var mockdata=[];

	mockdata["tatiana"]=	[{author:"tatiana","points":[{"x":150,"y":120},{"x":215,"y":115},{"x":34,"y":98}],"name":"House"},
	 {author:"tatiana","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"Build"}];
	mockdata["jhon"]=[{author:"jhon","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"House2"},
	 {author:"jhon","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"Build2"}];
	mockdata["Cristianc"]=[{author:"Cristianc","points":[{"x":65,"y":45},{"x":89,"y":43}],"name":"test"},
	{author:"Cristianc","points":[{"x":76,"y":23},{"x":56,"y":9}],"name":"test2"}];


	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);

		}

	}

})();