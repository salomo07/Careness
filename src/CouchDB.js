var {dbLocal,dbRemote,toast}=require ("./initApp.js");

class CouchDB {

	connecting(){
		return dbRemote.info().then(function (result) {
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
            	toast.error("Fail putting data to database");
            }
        });
	}
	async get(key,callback)
	{
		var dbConnection=await this.connecting();
        dbConnection.get(key,(err,res)=>{
	        if(err==null)
	        {callback(res,null)}
	        else
	        {
	        	toast.error("Fail getting data from database");
	        }
	    })
	}
	async find(request,callback)
	{
		var dbConnection=await this.connecting();

	    dbConnection.find(request).then(function (res) {
		  callback(res,null);
		}).catch(function (err) {
		  callback(null,err);toast.error("Fail finding data from database");
		});
	}
	async query(ddocname,key,callback)
	{
		var dbConnection=await this.connecting();
		console.log(key);
	 //    dbConnection.query(map,{include_docs : true}).then(function (res) {
		//   callback(res,null); console.log(res)
		// }).catch(function (err) {
		//   callback(null,err);toast.error("Fail running query/map data from database");
		// });
		// dbConnection.allDocs({include_docs: true,startkey:'Salomo07'},(res,err)=>{
		// 	console.log(res,err);
		// });
		dbConnection.query(ddocname,{key:key.toString(),'include_docs': true}).then(function (res) {
		  callback(res,null); console.log(res)
		}).catch(function (err) {
		  callback(null,err);toast.error("Fail running query/map data from database");
		});
	}
}
export default CouchDB;