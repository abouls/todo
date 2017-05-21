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


    render() {
        console.log(this.props)
        const todo = this.props.children
        return ( <li className="libg" >{todo}</li>)

    }
}

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: [], input: ""};
    }

    componentWillMount() {
        const rows = localStorage.getItem("listtodo")
        const row = JSON.parse(rows)
        this.setState({
            todos: row
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
                        return <TodoItem key={index}>{todo}</TodoItem>
                    })}
                    <button onClick={this.deleTodo.bind(this)}>删除</button>
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








