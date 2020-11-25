import React, {useContext } from 'react';
import SimpleContext from "./../../context/SimpleContext";
const NewPerson =()=> {
    const context=useContext(SimpleContext);

        
        return (
            
                <div>
                    <form onSubmit={event => event.preventDefault()}>
                        <div className="d-flex justify-content-center">
                            <div className="input-group w-25 ">
                                <input className="form-control" type="text" placeholder="ساخت برنامه جدید" onChange={context.setPerson} value={context.person} />
                                <div className="input-group-prepend">
                                    <button type="submit" onClick={context.handleNewPerson} className="btn btn-success fa fa-plus" />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>



        );
}
export default NewPerson;