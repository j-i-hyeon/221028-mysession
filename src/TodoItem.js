import React, {useState} from 'react';
import { connect } from 'react-redux';

function TodoItem(props){
    const [newValue, setnewValue] = useState('');
    const [updateDP, setupdateDP] = useState('none');

    const handleChange = e => {
        setnewValue(e.target.value);
    }

    return(
        <div key={props.id}>
            <p id={props.id}> {props.cont} </p>
            <button id={props.id} onClick={()=> props.DeleteTodo(props.id)}>삭제</button>
            <button id={props.id} onClick={()=> setupdateDP('block')}>수정</button>
            <div style = {{display: updateDP}}>
                <input value={newValue} placeholder="새로운 값 입력하세요." onChange={handleChange} />
                <button onClick={() => {
                    props.UpdateTodo(props.id, newValue);
                    setupdateDP('none');
                    setnewValue('');
                }}>수정완료</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ReduxData: state
})
function mapDispatchToProps(dispatch) {
    return {
        DeleteTodo: (id) => dispatch({type:'DELETE', id}),
        UpdateTodo: (id, content) => dispatch({type:'UPDATE', id, content})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);