import React from 'react';

const Person =({delFullname,fullname,deleted,changed,edited,person1})=>{

return(

<div >
    <p>    
    
     {(!delFullname) ? `${fullname}  `: ``}
      <del>{`${delFullname}  `}</del>
    </p>
<input type="text" placeholder={fullname} onChange={edited} value={person1}/>
<button onClick={deleted}>حذف</button>
<button onClick={changed}>ویرایش</button>
</div>


    );

}
export default Person;