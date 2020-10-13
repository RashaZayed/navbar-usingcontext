import React, {useContext} from 'react';
import MyContext from '../MyContext';
import styles from './styles.module.css'



const Navbar = (props) =>{
    const context = useContext(MyContext);

    return(
    <nav>
        <p>Hello, {context.name}</p>
    </nav>
    )
}
export default Navbar;