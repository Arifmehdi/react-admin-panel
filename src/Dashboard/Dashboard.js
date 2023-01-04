import React from 'react';

const Dashboard = () => {
    return (
        <div>
            {/* <!--start content--> */}
            <section className="page-content">
                <div className="row ">
                    <div className="col-md-3 col-lg-6 col-xl-6 col-xxl-3">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Total User</p>
                                        <h4 className="my-1">4805</h4>
                                        <p className="mb-0 font-13 text-purple"><i className="bi bi-caret-down-fill"></i> 2.7 from last week</p>
                                    </div>
                                    <div className="widget-icon-large bg-gradient-purple text-white ms-auto"><i className="las la-user-tie"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-6 col-xl-6 col-xxl-3">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">In Active User</p>
                                        <h4 className="my-1">25</h4>
                                        <p className="mb-0 font-13 text-info"><i className="bi bi-caret-down-fill"></i> 2.7 from last week</p>
                                    </div>
                                    <div className="widget-icon-large bg-gradient-success text-white ms-auto"><i className="las la-user-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-6 col-xl-6 col-xxl-3">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Total Customers</p>
                                        <h4 className="my-1">5.8K</h4>
                                        <p className="mb-0 font-13 text-danger"><i className="bi bi-caret-down-fill"></i> 2.7 from last week</p>
                                    </div>
                                    <div className="widget-icon-large bg-gradient-danger text-white ms-auto"><i className="las la-user-injured"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-6 col-xl-6 col-xxl-3">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Bounce Rate</p>
                                        <h4 className="my-1">38.15%</h4>
                                        <p className="mb-0 font-13 text-success"><i className="bi bi-caret-up-fill"></i> 12.2% from last week</p>
                                    </div>
                                    <div className="widget-icon-large bg-gradient-info text-white ms-auto"><i className="las la-percent"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}


                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center pb-3">
                                    <div className="col">
                                        <h5 className="mb-0">Sales Figures</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                                            <div className="font-13"><i className="las la-dot-circle text-primary"></i><span className="ms-2">Sales</span></div>
                                            <div className="font-13"><i className="las la-dot-circle text-success"></i><span className="ms-2">Orders</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-header bg-transparent">
                                <div className="row g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Statistics</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="chart2"></div>
                            </div>
                            <ul className="list-group list-group-flush mb-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-top">New Orders<span className="badge bg-primary badge-pill">25%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Completed<span className="badge bg-orange badge-pill">65%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Pending<span className="badge bg-success badge-pill">10%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}


                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-header bg-transparent">
                                <div className="row g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Top Browser</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                            <a className="btn-outline-primary" href="#">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="categories">
                                    <div className="progress-wrapper">
                                        <p className="mb-2">Electronic <span className="float-end">85%</span></p>
                                        <div className="progress" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-gradient-purple" role="progressbar" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>
                                    <div className="my-3 border-top"></div>
                                    <div className="progress-wrapper">
                                        <p className="mb-2">Furniture <span className="float-end">70%</span></p>
                                        <div className="progress" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-header bg-transparent">
                                <div className="row g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Top Country</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                            <a className="btn-outline-primary" href="#">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="best-product p-2 mb-3">
                                    <div className="best-product-item">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="product-box border">
                                                <img src="assets/images/avatars/avatar-1.png" alt="" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-name mb-1">White Polo T-Shirt</h6>
                                                <div className="product-rating mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="sales-count ms-auto">
                                                <p className="mb-0">245 Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="best-product-item">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="product-box border">
                                                <img src="assets/images/avatars/avatar-1.png" alt="" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-name mb-1">Women Blue Heals</h6>
                                                <div className="product-rating mb-0">
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill text-warning"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                            </div>
                                            <div className="sales-count ms-auto">
                                                <p className="mb-0">98 Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-header bg-transparent">
                                <div className="row g-3 align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Last Logins</h5>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                            <a className="btn-outline-primary" href="#">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-sellers-list p-2 mb-3">
                                <div className="d-flex align-items-center gap-3 sellers-list-item">
                                    <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width="50" height="50" alt="" />
                                    <div>
                                        <h6 className="mb-1">Thomas Hardy</h6>
                                        <p className="mb-0 font-13">Customer ID #84586</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <p className="mb-0">5.0 <i className="bi bi-star-fill text-warning"></i></p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 sellers-list-item">
                                    <img src="assets/images/avatars/avatar-1.png" className="rounded-circle" width="50" height="50" alt="" />
                                    <div>
                                        <h6 className="mb-0">Victoria Hardy</h6>
                                        <p className="mb-0 font-13">Customer ID #48759</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 fs-6 ms-auto">
                                        <p className="mb-0">3.4 <i className="bi bi-star-half text-warning"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}
                <div className="card radius-10">
                    <div className="card-header bg-transparent">
                        <div className="row g-3 align-items-center">
                            <div className="col">
                                <h5 className="mb-0">Recent Orders</h5>
                            </div>
                            <div className="col">
                                <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                    <a className="btn-outline-primary" href="#">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>#ID</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#89742</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="product-box border">
                                                    <img src="assets/images/avatars/avatar-1.png" alt="" />
                                                </div>
                                                <div className="product-info">
                                                    <h6 className="product-name mb-1">Smart Mobile Phone</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2</td>
                                        <td>$214</td>
                                        <td>Apr 8, 2021</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3 fs-6">
                                                <a href={"javascript"} className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="las la-eye"></i></a>
                                                <a href={"javascript"} className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="las la-edit"></i></a>
                                                <a href={"javascript"} className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="las la-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </section>
            {/* <!--end page main--> */}
        </div>
    );
};

export default Dashboard;