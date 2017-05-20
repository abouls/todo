/*
 This is an example from my Free Flexbox Starter Course. Check it out!
 https://unravelingflexbox.com/subscribe
 */

// var count = 0;


// function sth(){
// var x = document.getElementById("todo")

// // alert(x.value);


// // document.getElementById("demo").innerHTML = x.value;


//  if (count>20){

//                 alert("输入20条，不让输了！")

//                 }else{

//                     var p= document.createElement('li');

//                     p.innerText=x.value;

//                     document.getElementById("point").appendChild(p);

//                     count++;


//                     alert("成功记录！")


//                         }
// }


var Mystorage = React.createClass({
    handleClick: function () {
        // this.refs.myTextInput.focus();
        //
        //
        //
        //
        var y = document.getElementById("there").checked ? "完成" : "未完成";
        var x = document.getElementById("here");
        var p = document.createElement('li');

        p.innerText = x.value + y;

        document.getElementById("point").appendChild(p);


        // alert(document.getElementById("there").checked?"完成":"未完成")
        //


        // var todos =  [{"title":x.value,"finished":document.getElementById("there").checked?"完成":"未完成"}]

        // localStorage.setItem('todos',JSON.stringify(todos));


        // alert(x.value);
        //


// document.getElementById("demo").innerHTML = x.value;


    },
    render: function () {
        return (
            <div>

                <input type="button" value="储存" onClick={this.handleClick}/>
            </div>
        );
    }
});


ReactDOM.render(
    <Mystorage />,

    document.getElementById('pointd')
);


var Content = React.createClass({

    handleChange: function (event) {
        this.setState({name: event.target.value});
    },

    render: function () {
        return (
            <div>

                <input type="text" id="here" onChange={this.handleChange}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Content />,
    document.getElementById('pointb')
);


var ContentFT = React.createClass({


    handleClick: function () {


    },

    render: function () {
        return (
            <div>

                <input type="checkbox" id="there" ref="abox" onclick={this.handleClick}/>Did you finish this work?
            </div>
        );
    }
});

ReactDOM.render(
    <ContentFT />,


    document.getElementById('pointc')
);









