import React from 'react'
import Button from './Button';

const Header = ({title}) => {
    /** @function : OnClick button */
    const onClick = (e) => {
        console.log("Clicked...");
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker'
}


export default Header;
