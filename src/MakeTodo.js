import React, {useState} from 'react';
import {connect} from 'react-redux';

function MakeTodo(props){
    const [item, setItem] = useState('');
    const handleChange = e => {
        setItem(e.target.value);
    }

    return(
        <>
            <input type='text' value={item} onChange={handleChange}></input>
            <button onClick={()=> {
                props.AddTodo(item);
                setItem('');
            }}>Submit</button>
        </>
    )
}

const mapStateToProps = state => ({
    ReduxData: state
})
const mapDispatchToProps = dispatch => {
    return {
        AddTodo: (content) => dispatch({type : 'ADD', content}),
        DeleteTodo: (id) => dispatch({type : 'DELETE', id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MakeTodo);