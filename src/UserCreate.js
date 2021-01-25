import React from 'react'
import Button from './Button';
import Field from './Field';

const UserCreate = ({language}) => {
    return(
        <div className='ui form'>
            <Field  language={language}/>
            <Button/>
        </div>
    )
}

export default UserCreate
