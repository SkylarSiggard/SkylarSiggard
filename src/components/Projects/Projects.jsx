import './Projects';
import React from 'react';

export default function Projects() {
    return (
        <div className="Projects">
            <h1>My Projects</h1>
                <div class="container-projects">
                    <div class="box-projects">
                        <a href="https://github.com/my-repo">
                        <img src="image1.jpg" alt="Project 1"/>
                        <div class="caption">
                        <h2>Project 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </a>
                    </div>
                    <div class="box-projects">
                        <a href="https://github.com/my-repo">
                        <img src="image2.jpg" alt="Project 2"/>
                        <div class="caption">
                        <h2>Project 2</h2>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </a>
                    </div>
                    <div class="box-projects">
                        <a href="https://github.com/my-repo">
                        <img src="image3.jpg" alt="Project 3"/>
                        <div class="caption">
                        <h2>Project 3</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </a>
                    </div>
                    <div class="box-projects">
                        <a href="https://github.com/my-repo">
                        <img src="image4.jpg" alt="Project 4"/>
                        <div class="caption">
                        <h2>Project 4</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        </a>
                    </div>
                </div>
        </div>
    );
}