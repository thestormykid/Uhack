var express 		= require('express'),
	app				= express(),
	bodyparser 		= require('body-parser'),
	bcrypt			= require('bcrypt-nodejs'),
	session			= require('express-session'),
	mongoose		= require('mongoose'),
	request			= require('request');
var port = 3000;

app.set('views',['./views']);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :true}));
app.use(express.static("public"));

mongoose.connection.openUri("mongodb://sjv97mhjn:1997@ds151004.mlab.com:51004/campuskart");
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

const commentchema = new mongoose.Schema({
	name : String
});

const comment = mongoose.model('Comment',commentchema);


app.get("/",function(req,res){
	res.render("home.ejs");
})
app.post("/",function(req,res){
	comment.create({name:req.body.comment},function(result,err){
	if(err){
		console.log(err);
	}
})
	});
app.listen(port,function(){
	console.log("Example App Listening On port" + port);
})