import React, {useState} from 'react';

const Counter = ({init=0, min = 0})=>{
    const [count, setCount] = useState(init);


    const add = ()=>{
        setCount(el=>el+1)
    }

    const substract = ()=>{
        setCount(el=>el-1)
    }

    return(
        <>
            <h3> {count}</h3>
            <input type="button" value="+" onClick={add}/>
            <input type="button" value="–" onClick={substract} disabled={ count <= min ? true : false}/>
        </>
    )

}

export default Counter;