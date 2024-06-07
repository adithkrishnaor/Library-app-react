import React from 'react'
import NavBar from './NavBar'

function ViewAll() {
    return (
        <div>
            <NavBar/>   
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <h1>View Books</h1>
                        </center>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published Year</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Junior Level Books
                                        Introduction to Computer </td>
                                    <td>Amit Garg</td>
                                    <td>2011</td>
                                    <td>Rs.600</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>2014</td>
                                    <td>Rs.750</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>2015</td>
                                    <td>Rs.600</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>2020</td>
                                    <td>Rs.550</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>2018</td>
                                    <td>Rs.450</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>2017</td>
                                    <td>Rs.350</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>2015</td>
                                    <td>Rs.500</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>2019</td>
                                    <td>Rs.400</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll