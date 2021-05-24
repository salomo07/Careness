var {dbLocal,dbRemote,toast}=require ("./initApp.js");

class Functions {
	connecting(){
		return dbRemote.info().then(function (result) {
			dbLocal.sync(dbRemote);
			console.log("Online DB");return dbRemote;
		}).catch(function (err) {
			console.log("Offline DB");return dbLocal;
		});
	}
	async querying(url,callback)
	{
		var dbConnection=await this.connecting();
		dbConnection.query(url).then((res)=> {
	      callback(res,null);
	    }).catch(function (err) {
	    	callback(null,err);
			toast.error("Fail querying to database");
	    });  
	}
	async put(data,callback)
	{
		var dbConnection=await this.connecting();
		dbConnection.put(data, (err, res) => {
            if (!err) 
            {callback(res,null)}
            else
            {
            	console.log(err);
            	toast.error("Fail putting data to database");
            }
        });
	}
	async get(key,callback)
	{
		var dbConnection=await this.connecting();
		console.log(dbConnection);
        dbConnection.get(key,(err,res)=>{
	        if(err==null)
	        {callback(res,null)}
	        else
	        {
	        	console.log(err);
	        	toast.error("Fail getting data from database");
	        }
	    })
	}
	async find(options,callback)
	{
		// await dbConnection.createIndex({index: {fields: ['coll']}});
		var dbConnection=await this.connecting();
		dbConnection.find(options,(err,res)=>{
	    	if(err==null)
	        {callback(res,null)}
	        else
	        {
	        	console.log(err);
	        	toast.error("Fail finding data from database");
	        }
	    });
	}
}
export default Functions;