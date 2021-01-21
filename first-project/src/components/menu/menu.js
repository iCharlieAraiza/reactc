import React from 'react';

const Menu = ({name='Defaul page'})=>{
    return(
        <header>
            <a href="/"> { name } </a>
        </header>
    )
}

export default Menu;