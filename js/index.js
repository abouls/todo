var Mystorage = React.createClass({
    handleClick: function () {
        var y = document.getElementById("there").checked ? "完成" : "未完成";
        var x = document.getElementById("here");

        var p = document.createElement('li');
        p.innerText = x.value + y;
        document.getElementById("point").appendChild(p);
    },
    render () {
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
    render () {
        return (
            <ul>
                <li class="libg" id="point">请输入待办事项</li>
                <li class="libg" id="pointb">记录表</li>
                <li class="libg" id="pointc">记录表</li>
                <li class="libg" id="pointd">记录表</li>
            </ul>
        );
    }
});

ReactDOM.render(
    <Content />,
    document.getElementById('list-content')
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









