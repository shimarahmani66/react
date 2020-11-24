import React from 'react';

const Person = ({ delFullname, fullname, deleted, changed, edited, person1 }) => {

    return (

        <div className="d-flex justify-content-center mt-3">
            <div className="card w-50  p-3  bg-info">
                <div className="">
                    <div>

                        <div className="text-light">
                            {(!delFullname) ? `${fullname}  ` : ``}
                        </div>
                        <del className="text-danger">{`${delFullname}  `}</del>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder={fullname} onChange={edited} value={person1} />
                        </div>
                        <div className="col-md-3">
                            <button className="fa fa-trash btn btn-danger mr-1  p-2" onClick={deleted} />
                            <button className="fa fa-pencil-square-o btn btn-success  p-2" onClick={changed} />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );

}
export default Person;