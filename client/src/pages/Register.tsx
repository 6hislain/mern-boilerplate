const Register = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card border border-secondary shadow">
          <div className="card-header bg-body-secondary">Register</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input id="name" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input id="email" type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm" className="form-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control" id="confirm" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
