import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetAllJobsComponent from "./components/GetAllJobsComponent/GetAllJobsComponent";
import AddNewJobsComponent from "./components/AddNewJobsComponent/AddNewJobsComponent";
import EditJobsComponent from "./components/EditJobsComponent/EditJobsComponent";
// import jobPortalImage from "./job-portal.jpg";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <img src={jobPortalImage} alt="Job Portal" className="logo" /> */}

        <h1 className="head">Job Portal WebsiteApp</h1>
        <p className="first">Find your dream job now </p>
        <p className="second">5 lakh+ jobs for you to explore</p>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/admin/add">Add Jobs</Link>
          <Link to="/admin/edit">Edit Jobs</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<GetAllJobsComponent />}></Route>
          <Route path="/admin/add" element={<AddNewJobsComponent />}></Route>
          <Route path="/admin/edit" element={<EditJobsComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
