const express = require('express');
const path = require('path')
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo')
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assests'));


app.get('/',function(req,res){

    Todo.find({},function(err,todos){
         if(err){
             console.log('error in fetching todos!');
             return;
         }
    
     return res.render('home',{
         title:"My Todos List",
         todo_list : todos
     });

    });
});

app.get('/home',function(req,res){
    res.send('<h1>Welcome to the Homepage!</h1>');
});

app.post('/create-todo',function(req,res){
    
    Todo.create({
        type: req.body.type,
        todo: req.body.todo
    },function(err,newTodo){
        if(err){
            console.log('error in creating a todo!',err);
            return;
        }

        console.log('**********', newTodo);
        return res.redirect('/');
    });

});

app.get('/delete-todo/', function(req,res){
        console.log(req.query);
        let id = req.query.id;

        Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting todo from database!');
                return;
            }
            return res.redirect('/');
        });
        
        
});

app.listen(process.env.PORT || port, function(err){
    if(err){
        console.log('error ',err);
    }
    console.log('Express Server is running on port:',port);
});