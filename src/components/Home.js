import React from 'react';

const Home = ({ currentUser, handleLogout }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">User Details</h2>
              <div className="mb-3">
                <label className="form-label"><strong>Full Name:</strong></label>
                <div className="form-control">{currentUser.fullName}</div>
              </div>
              <div className="mb-3">
                <label className="form-label"><strong>Email:</strong></label>
                <div className="form-control">{currentUser.email}</div>
              </div>
              <div className="mb-3">
                <label className="form-label"><strong>Course:</strong></label>
                <div className="form-control">{currentUser.course}</div>
              </div>
              <div className="mb-3">
                <label className="form-label"><strong>College:</strong></label>
                <div className="form-control">{currentUser.college}</div>
              </div>
              <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
