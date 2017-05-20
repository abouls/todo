class TodoInput extends React.Component {
    onChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.onChange.bind(this)}/>
        )
    }
}
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <TodoInput/>
                <ul>

                    <li className="libg" id="pointb">记录表</li>
                    <li className="libg" id="pointc">记录表</li>
                    <li className="libg" id="pointd">记录表</li>
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








