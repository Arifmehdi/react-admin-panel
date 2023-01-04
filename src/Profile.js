import React from 'react';

const Profile = () => {
    return (
        <div>
                    {/* <!--start content--> */}
        <main className="page-content">
           
            <div className="profile-cover bg-dark"></div>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                      <h5 className="mb-0">My Account</h5>
                      <hr/>
                      <div className="card shadow-none border">
                        <div className="card-header">
                          <h6 className="mb-0">USER INFORMATION</h6>
                        </div>
                        <div className="card-body">
                          <form className="row g-3">
                             <div className="col-6">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" value="@jhon"/>
                             </div>
                             <div className="col-6">
                              <label className="form-label">Email address</label>
                              <input type="text" className="form-control" value="xyz@example.com"/>
                            </div>
                              <div className="col-6">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" value="jhon"/>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="card shadow-none border">
                        <div className="card-header">
                          <h6 className="mb-0">CONTACT INFORMATION</h6>
                        </div>
                        <div className="card-body">
                          <form className="row g-3">
                            <div className="col-12">
                              <label className="form-label">Address</label>
                              <input type="text" className="form-control" value="47-A, city name, United States"/>
                             </div>
                             <div className="col-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" value={"@jhon"}/>
                             </div>
                             <div className="col-6">
                              <label className="form-label">Country</label>
                              <input type="text" className="form-control" value="xyz@example.com"/>
                            </div>
                              <div className="col-6">
                                <label className="form-label">Pin Code</label>
                                <input type="text" className="form-control" value="jhon"/>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" value="Deo"/>
                            </div>
                            <div className="col-12">
                              <label className="form-label">About Me</label>
                              <textarea className="form-control" rows="4" cols="4" placeholder="Describe yourself..."></textarea>
                             </div>
                          </form>
                        </div>
                      </div>
                      <div className="text-start">
                        <button type="button" className="btn btn-primary px-4">Save Changes</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card shadow-sm border-0 overflow-hidden">
                  <div className="card-body">
                      <div className="profile-avatar text-center">
                        <img src="assets/images/avatars/avatar-1.png" className="rounded-circle shadow" width="120" height="120" alt=""/>
                      </div>
                      <div className="text-center mt-4">
                        <h4 className="mb-1">Jhon Deo, 27</h4>
                        <p className="mb-0 text-secondary">Sydney, Australia</p>
                        <div className="mt-4"></div>
                        <h6 className="mb-1">HR Manager - Codervent Technology</h6>
                        <p className="mb-0 text-secondary">University of Information Technology</p>
                      </div>
                      <hr/>
                      <div className="text-start">
                        <h5 className="">About</h5>
                        <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                      </p></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end row--> */}

          </main>
        {/* <!--end page main--> */}
        </div>
    );
};

export default Profile;