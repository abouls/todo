class TodoInput extends React.Component {
    onChange(event) {
       return this.props.onChange(event.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.onChange.bind(this)}/>
        )
    }
}


class TodoItem extends React.Component {
    deleteTodo() {
        console.log(this.props.abc)
        console.log(this.props.dele)
        this.props.dele
    }


    render() {
        return (
            <div>
                <input type="checkbox" onClick={this.deleteTodo.bind(this)} ></input>

                <li>{this.props.abc}</li>
            </div>
        )

    }
}

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: ["this is 1st", "休息","whereismy"], input: "",};
    }

    componentWillMount() {
        const rows = localStorage.getItem("listtodo")
        const row = JSON.parse(rows)
         this.setState({
             todos:row
        })


    }

    changeText(text) {

        this.setState({input: text})
    }

    save() {
        var todo = this.state.input
        const newTodos = this.state.todos
        newTodos.push(todo)
        this.setState({
            todos: newTodos

        })
        localStorage.setItem("listtodo", JSON.stringify(this.state.todos))

    }

    dele(){
        const i =this.refs.meansmark.deleteTodo()
        const newTodos =this.state.todos
        newTodos.splice(i,1)
        this.setState({
            todos: newTodos

        })
        localStorage.setItem("listtodo", JSON.stringify(this.state.todos))


    }


    render() {
        return (
            <div>
                <TodoInput onChange={this.changeText.bind(this)}/>
                <button onClick={this.save.bind(this)}>储存</button>
                <button onClick={this.dele.bind(this)}>删除所选</button>
                <ul>
                    {this.state.todos.map(function (todo, index) {
                    return <TodoItem ref="meansmark" dele={index} abc={todo}  key={index}></TodoItem>
                    })}

                </ul>
            </div>
        );
    }
}
;

ReactDOM.render(
    <TodoList />,
    document.getElementById('list-content')
);








