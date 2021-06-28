import './Project.css';

const Project = ({ projectTitle, projectDescription, image }) => {
    return (
        <div className="project">
            <img src={image} alt="" />
            <div className="project__overlay">
                <h1 class="project__title">{projectTitle}</h1>
                <p class="project__description">{projectDescription}</p>
            </div>
        </div>
    );
}

export default Project;