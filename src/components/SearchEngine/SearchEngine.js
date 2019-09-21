import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import './SearchEngine.css';

class SearchEngine extends Component {
    render () {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-lg-12 col-sm-12 form-section ">
                            <ul className="nav mt-5 " id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active btn btn-lg btn-info mr-3 mt-3" id="home-tab" data-toggle="tab" href="#home"
                                       role="tab" aria-controls="home" aria-selected="true">Buy Ticket</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-lg btn-info mr-3 mt-3" id="profile-tab" data-toggle="tab" href="#profile"
                                       role="tab" aria-controls="profile" aria-selected="false">Bus Charter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-lg btn-info mt-3" id="contact-tab" data-toggle="tab" href="#contact"
                                       role="tab" aria-controls="contact" aria-selected="false">Check Ticket</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <ul className="nav mt-2" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active text-white btn-lg btn-white text-center one-way mr-3 mt-2" id="one-way" data-toggle="tab" href="#oneway" role="tab" aria-controls="oneway" aria-selected="true">One Way</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white btn-lg btn-white text-center mr-3 mt-2 one-way " id="round-trip" data-toggle="tab" href="#roundtrip" role="tab" aria-controls="roundtrip" aria-selected="false">Return Trip</a>
                                        </li>
                                    </ul>
                                    <div className="tab-pane fade show active" id="oneway" role="tabpanel"
                                         aria-labelledby="one-way">
                                        <div className="row mt-5">
                                            <div className="col-lg-4 col-sm-12">
                                                <select className="form-control form-control-lg">
                                                    <option>Select Departure</option>
                                                    <option>Abia (Aba)</option>
                                                    <option>Abia (Umuahia)</option>
                                                    <option>Anambra (Awka)</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <select className="form-control form-control-lg">
                                                    <option>Select Destination</option>
                                                    <option>Abia (Aba)</option>
                                                    <option>Abia (Umuahia)</option>
                                                    <option>Anambra (Awka)</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-sm-12">
                                            <select className="form-control form-control-lg">
                                                <option>Depart on?</option>
                                                <option>Friday, 20th september</option>
                                                <option>Friday, 20th september</option>
                                                <option>Friday, 20th september</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-2 col-sm-12">
                                                <select className="form-control form-control-lg">
                                                    <option>Adult</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-sm-12">
                                                <select className="form-control form-control-lg">
                                                    <option>Children (2-10)</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-2 col-sm-12">
                                                <button type="submit" className="btn btn-lg buttonlg w-100">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade " id="roundtrip" role="tabpanel"
                                         aria-labelledby="round-trip">


                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <div className="row mt-3">
                                        <div className="col-lg-4 col-sm-12 mt-3">
                                            <input className="form-control form-control-lg" type="text" placeholder="Pickup Location"/>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mt-3">
                                            <input className="form-control form-control-lg" type="text" placeholder="Drop Off Location"/>
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mt-3">
                                            <input className="form-control form-control-lg calander" type="text" placeholder="Depart on"/>
                                        </div>

                                        <div className="col-lg-2 col-sm-12 mt-3">
                                            <button type="submit" className="btn btn-lg buttonlg w-100">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel"
                                     aria-labelledby="contact-tab">
                                    <div className="row mt-3">
                                        <div className="col-lg-4 col-sm-12 mt-3">
                                            <input className="form-control form-control-lg" type="text" placeholder="Enter Your Booking Code"/>
                                        </div>
                                        <div className="col-lg-2 col-sm-12 mt-3">
                                            <button type="submit" className="btn btn-lg buttonlg w-100"><i
                                                className="fab fa-searchengin"></i> Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default reduxForm({
    form: 'test',
})(SearchEngine)