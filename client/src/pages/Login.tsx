const Login = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card border border-secondary shadow">
          <div className="card-header bg-body-secondary">Login</div>
          <div className="card-body">
            <form>
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

export default Login;
