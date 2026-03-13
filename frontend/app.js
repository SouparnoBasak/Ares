const express = require('express');
//dotenv.config();
const path = require('path');
//const dotenv = require('dotenv');

const app = express();
const PORT = 3000;
const url=process.env.BACKEND_URL || 'http://localhost:4000/api';
app.set('view engine','ejs');
const fetch=(...args)=>
	import ('node-fetch').then(({default: fetch})=> fetch(...args));

app.get('/',async function(req,res){
	const options={
		method:'GET'
	};
	fetch(url , options).then(res=>res.json()).then(json=>console.log(json)).catch(err=>console.error('error'+err));
	try{
		let response=await fetch(url,options);
		response=await response.json();
		res.render('index',response)
	} catch(err){
		console.log(err);
		res.status(500).json({msg:`internal server error`});
	}
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
