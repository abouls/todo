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

    onClick() {
        const e = this.props.dele
        return this.props.sth(e)
    }


    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>删除</button>
                <li>{this.props.abc}</li>
            </div>
        )

    }
}

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: ["this is 1st", "休息", "whereismy"], input: "",};

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

    dele(e) {
        const newTodos = this.state.todos
        newTodos.splice(e, 1)
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
                <ul>
                    {
                        this.state.todos.map((todo, index) => {
                            return (
                                <div>
                                    <TodoItem dele={index} abc={todo} key={index} sth={this.dele.bind(this)}></TodoItem>
                                </div>)
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








