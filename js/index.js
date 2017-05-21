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
class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: [], input: ""};
    }

    componentWillMount() {
        var rows = localStorage.getItem("listtodo")
        this.setState({
            todos: rows
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


    render() {
        return (
            <div>
                <TodoInput onChange={this.changeText.bind(this)}/>
                <button onClick={this.save.bind(this)}>储存</button>
                <ul>
                    {this.state.todos.map(function (todo, index) {
                        return <li className="libg" key={index}>{todo}</li>
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








