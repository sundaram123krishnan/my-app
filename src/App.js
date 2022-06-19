// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <>

      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Textutils</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>

  );

}

export default App;
