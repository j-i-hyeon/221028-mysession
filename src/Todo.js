import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function Todo(props) {
    return (
        <>
            {props.ReduxData.todos.map((data, index) => {
                return (
                    <TodoItem key={index} id={index} cont={data} />
                )
            })}
        </>
    )
}

const mapStateToProps = state => ({
    ReduxData: state
})

export default connect(mapStateToProps)(Todo);