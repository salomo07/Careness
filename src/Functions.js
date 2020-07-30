var {dbLocal,dbRemote,toast}=require ("./initApp.js");
class Functions {
	async querying(url,callback)
	{
		dbLocal.query(url).then((res)=> {
	      callback(res,null);
	    }).catch(function (err) {
	    	callback(null,err);
			toast.error("Fail querying to database");
	    });  
	}
	async put(data,callback)
	{
		dbLocal.put(data, (err, res) => {
            if (!err) 
            {callback(res,null)}
            else{console.log(err);toast.error("Fail putting data to database");}
        });
	}
	async get(key,callback)
	{
        dbLocal.get(key,(err,res)=>{
	        if(err==null)
	        {callback(res,null)}
	        else{console.log(err);toast.error("Fail getting data from database");}
	    })
	}
	async find(options,callback)
	{
		// dbLocal.createIndex({index: {fields: ['coll']}});
		dbLocal.find(options,(err,res)=>{
	    	if(err==null)
	        {callback(res,null)}
	        else{console.log(err);toast.error("Fail finding data from database");}
	    });
	}
}
export default Functions;