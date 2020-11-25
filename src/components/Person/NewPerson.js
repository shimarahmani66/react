import React, { Component } from 'react';
import SimpleContext from "./../../context/SimpleContext";
class NewPerson extends Component {
    static contextType=SimpleContext;
    render() {
        
        return (
            
                <div>
                    <form onSubmit={event => event.preventDefault()}>
                        <div className="d-flex justify-content-center">
                            <div className="input-group w-25 ">
                                <input className="form-control" type="text" placeholder="ساخت برنامه جدید" onChange={this.context.setPerson} value={this.context.state.person} />
                                <div className="input-group-prepend">
                                    <button type="submit" onClick={this.context.handleNewPerson} className="btn btn-success fa fa-plus" />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>



        );
    }
}
export default NewPerson;