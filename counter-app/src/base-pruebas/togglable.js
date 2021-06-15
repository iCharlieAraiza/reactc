import React, {useState} from 'react'

const Togglable = (props) => {

    const[visible, setVisible] = useState(true);

    let style = { display: visible ? 'block' : 'none' };

    const handlerClick = ()=>{
        setVisible(!visible);
    }

    return (
        <div style={style}>
            { props.children }
            <button onClick={handlerClick}>Da click</button>
        </div>
    )
}

export default Togglable
