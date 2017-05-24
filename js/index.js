class TodoInput extends React.Component {
    onChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.onChange.bind(this)}/>
        )
    }
}


class TodoItem extends React.Component {

    deleteTodo() {

        const welist = this.props.dele


        console.log(welist)

        // localStorage.clear()

    }


    render() {
        return (
            <div>
                <button onClick={this.deleteTodo.bind(this)}>delete</button>

                <li>{this.props.abc}</li>
            </div>
        )

    }
}

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: ["this is 1st", "休息","whereismy"], input: ""};
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

    deleTodo() {


    }


    render() {
        console.log(this.state.todos)
        return (
            <div>
                <TodoInput onChange={this.changeText.bind(this)}/>
                <button onClick={this.save.bind(this)}>储存</button>
                <ul>
                    {this.state.todos.map(function (todo, index) {
                    return <TodoItem dele={todo} abc={todo} key={index}></TodoItem>
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








