var React = require('react');
var createReactClass= require('create-react-class');

var VerifyUser= require('./VerifyUser');
var ToDoApp= require('ToDoApp');

var Home = createReactClass({

    
   
    render: function(){     
        return(
            <div>
                <p>Home</p>
               
                   {/* <VerifyUser/>  */}  
                {/* <ToDoApp/>  */}               
            </div>
        )
    }
});

module.exports= Home;