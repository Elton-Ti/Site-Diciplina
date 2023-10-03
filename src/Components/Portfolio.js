import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Modal from "react-modal"; // Importe o react-modal
import YouTubeVideo from './YouTubeVideo';

let id = 0;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedProject: null,
    };
  }

  openModal = (project) => {
    this.setState({
      showModal: true,
      selectedProject: project,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedProject: null,
    });
  };

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" 
          style={{ 
            borderRadius: "30px",
            border: "1px solid rgba(0, 0, 0, 0.1)"
          }}>
            <Zmage
              alt={project.title}
              src={projectImage}
              onClick={() => this.openModal(project)}               
            />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projetos dos Alunos</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>

        {/* Modal */}
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Description"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height:"90%",
              maxWidth: "900px",
              border: "none",
              borderRadius: "8px",
              padding: "20px",
            },
          }}
        >
          <button
            onClick={this.closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "red",
            }}
          >
            &times;
          </button>
          {this.state.selectedProject && (
            <div>
              <h2>{this.state.selectedProject.title}</h2>
              <p>{this.state.selectedProject.description}</p> 
              <h6>{this.state.selectedProject.alunos}</h6>  
              <span>{this.state.selectedProject.text}</span>
              <p></p>     
              <a href={this.state.selectedProject.url} target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>       
              <p></p>
              {this.state.selectedProject.video && (
                <YouTubeVideo videoId={this.state.selectedProject.video} />
              )}            
            </div>

            
          )}
        </Modal>
      </section>
    );
  }
}

export default Portfolio;
