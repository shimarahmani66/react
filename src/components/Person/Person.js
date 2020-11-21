import React from 'react';

const Person =({fullname,deleted,changed})=>{

return(

<div >
    <p>    
    {`${fullname}  `}
    </p>
<input type="text" placeholder={fullname} onChange={changed}/>
<button onClick={deleted}>حذف</button>
</div>


    );

}
export default Person;