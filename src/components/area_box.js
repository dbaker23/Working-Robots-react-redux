import React from 'react';

const AreaBox = ( {name, handleClick} ) => {    
    return(
        <div className='area-box' onClick={ () => handleClick( name ) }>
            {name}
        </div>
    )
}

export default AreaBox;