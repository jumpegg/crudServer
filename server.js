var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// view 파일 경로 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// js, css, img 파일 경로 설정
app.use(express.static('public'));

// bodyParser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(5000, function(){
	console.log('listening on port 5000');
})
app.get('/', (req,res)=>{
	res.render('index.html')
})
app.get('/getArr', (req,res) => {
	var arr=[];
	for(var i=100; i--;){
		arr.push(Math.floor(Math.random()*100));
	}
	res.json(arr);
})
app.post('/insert', (req,res)=>{
	res.json(req.body);
})