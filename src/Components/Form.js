import React, {useContext} from 'react';
import MyContext from '../MyContext'

const Form = props => {
    const context = useContext(MyContext);
    const onChange = (e) => {
       context.setName(e.target.value) 
       console.log(context.name)
        
    }
    
    return (
        <div>
        <label>your Name:</label>
        <input type='text' onChange={onChange} />
        </div>
    )
}
export default Form ;