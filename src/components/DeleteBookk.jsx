import React from 'react'

function DeleteBookk() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h1>Delete Book</h1>
                        </center>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Book Title</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center>
                                    <button className="btn btn-danger">Delete</button>
                                    </center><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBookk