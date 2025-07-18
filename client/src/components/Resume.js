import React, { Component } from "react";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "./Extras";
import axios from "axios";

export class Resume extends Component {

  componentDidMount() {
    const data = {
      ...this.props.user,
    };

    axios.post("http://localhost:4000/get-resume", data).then((res) => {
      const resume = { step: 1, ...res.data };

      this.setState((prevState) => ({ ...resume }));
    });
  }

  state = {
    step: 1,
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  save = () => {
    const data = {
      user: this.props.user,
      resume: this.state,
    };
    const promise = axios
      .post("http://localhost:4000/save", data)
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
    return promise;
  };

  render() {
    const { step } = this.state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    } = this.state;
    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      website,
      github,
      linkedin,
      twitter,
      facebook,
      instagram,

      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Project Information...
      title1,
      link1,
      projectDescription1,
      title2,
      link2,
      projectDescription2,
      title3,
      link3,
      projectDescription3,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    };
    switch (step) {
      case 1:
        return (
          <div>
            <NavBar />
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Profile
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  save={this.save}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <NavBar />
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Education
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  save={this.save}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <NavBar />
            <div className="App mt-3">
              <div className="container col-lg-8 mx-auto text-center">
                <Projects
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  save={this.save}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <NavBar />
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Experience
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  save={this.save}
                />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <NavBar />
            <div className="App mt-3">
              <div className="container col-lg-10 mx-auto text-center">
                <Extras
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  save={this.save}
                />
              </div>
            </div>
          </div>
        );
      default:
        return <div />;
    }
  }
}

export default Resume;
