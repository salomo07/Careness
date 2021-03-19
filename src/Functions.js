var {dbLocal,dbRemote,toast}=require ("./initApp.js");
class Functions {
	async querying(url,callback)
	{
		dbRemote.query(url).then((res)=> {
	      callback(res,null);
	    }).catch(function (err) {
	    	callback(null,err);
			toast.error("Fail querying to database");
	    });  
	}
	async put(data,callback)
	{
		dbRemote.put(data, (err, res) => {
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
        dbRemote.get(key,(err,res)=>{
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
		// dbRemote.createIndex({index: {fields: ['coll']}});
		dbRemote.find(options,(err,res)=>{
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