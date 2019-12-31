import React, {Component} from "react";
import {connect} from "react-redux";


class TaskList extends Component {
    render() {
console.log('tasklist',this.props)

        let list;
        if(this.props.task && this.props.task.items.length > 0 ){
            list=<li>..</li>
        }


        return (
            <div><h4>The List</h4>
                <button onClick={this.props.addTask}>ADD</button>
                <ul>
                    {list}
                    <li>test</li>
                </ul>
            </div>
        )
    }
}



const mapStateToPropsTask = state => ({
    task: state.task
})

const mapDispatchToPropsTask = dispatch => ({
    addTask: () => dispatch({type: 'ADD_TASK'})
})
export default connect(mapStateToPropsTask,mapDispatchToPropsTask)(TaskList)
