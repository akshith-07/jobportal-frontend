import React, { Component } from "react";
import "./EditJobsComponent.css";

class EditJobsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      jobID: "",
      jobCompany: "",
      jobLocation: "",
      jobPreference: "",
      jobSkills: "",
    };
  }

  jobTitleHandler = (event) => {
    this.setState({
      jobTitle: event.target.value,
    });
  };

  jobIDHandler = (event) => {
    this.setState({
      jobID: event.target.value,
    });
  };

  jobCompanyHandler = (event) => {
    this.setState({
      jobCompany: event.target.value,
    });
  };

  jobLocationHandler = (event) => {
    this.setState({
      jobLocation: event.target.value,
    });
  };

  jobPreferenceHandler = (event) => {
    this.setState({
      jobPreference: event.target.value,
    });
  };

  jobSkillsHandler = (event) => {
    this.setState({
      jobSkills: event.target.value,
    });
  };

  jobIDValidator = () => {
    if (this.state.jobID !== 0) {
      fetch("http://localhost:3500/api/v1/jobs/validate", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          jobID: this.state.jobID,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            jobTitle: data.jobTitle,
            jobID: data.jobID,
            jobCompany: data.jobCompany,
            jobLocation: data.jobLocation,
            jobPreference: data.jobPreference,
            jobSkills: data.jobSkills,
          });
        });
    }
  };

  formSubmitHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:3500/api/v1/jobs", {
      method: "PATCH",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        jobTitle: this.state.jobTitle,
        jobID: this.state.jobID,
        jobCompany: this.state.jobCompany,
        jobLocation: this.state.jobLocation,
        jobPreference: this.state.jobPreference,
        jobSkills: this.state.jobSkills,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(`The new ${data.jobTitle} job is updated successfully`);
          window.location.href = "/";
        }
      });
  };

  render() {
    const {
      jobTitle,
      jobID,
      jobCompany,
      jobLocation,
      jobPreference,
      jobSkills,
    } = this.state;
    return (
      <form className="form-container" onSubmit={this.formSubmitHandler}>
        <h2>Edit the existing job data</h2>
        <div className="form-group">
          <label>Job ID</label>
          <input
            type="text"
            placeholder="Enter the job ID"
            value={jobID}
            onChange={this.jobIDHandler}
            required
          />
        </div>

        <div>
          <button onClick={this.jobIDValidator}>Check</button>
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Enter the job title"
            value={jobTitle}
            onChange={this.jobTitleHandler}
            required
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Enter the company name"
            value={jobCompany}
            onChange={this.jobCompanyHandler}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter the job location"
            value={jobLocation}
            onChange={this.jobLocationHandler}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Preference</label>
          <select
            value={jobPreference}
            onChange={this.jobPreferenceHandler}
            required
          >
            <option value="">-- Please select --</option>
            <option value="Fresher">Fresher</option>
            <option value="Experienced">Experienced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Job Skills</label>
          <input
            type="text"
            placeholder="Enter the desired skills"
            value={jobSkills}
            onChange={this.jobSkillsHandler}
            required
          />
        </div>

        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    );
  }
}

export default EditJobsComponent;
