import React from 'react'

export default function About() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Md Robiul Islam
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>I am Md Robiul Islam Robin, </strong> a passionate software engineer and dedicated student currently pursuing my education at Shahjalal University of Science and Technology. My journey in the world of technology began with a curiosity to understand how software shapes our lives and a determination to contribute to its advancement.  </div>
                </div>
            </div>
        </div>
    )
}
