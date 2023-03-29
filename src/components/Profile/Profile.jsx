import './Profile';
import './Profile.sass'
import React from 'react';
import Photo from '../Assets/Skylar/FamilyPhotos.JPG.jpeg'


export default function Profile() {
    return (
        <div className="Profile">
            <section>
                <div className="container">
                    <div className="col-1">
                        <img src={Photo} alt="Profile Picture"/>
                </div>
			<div className="col-2">
                <div className="box"><a href="https://github.com/SkylarSiggard">Github</a></div>
				<div className="box"><a href="https://www.linkedin.com/in/skylar-siggard/">Linkedin</a></div>
				<div className="box"><a href="tryhackme.com/p/siggardskylar ">TryHackMe</a></div>
				<div className="box"><a href="www.codewars.com/users/Mango_Magnum">CodeWars</a></div>
                <div className="box"><a href="https://app.hackthebox.com/profile/1239357">HackTheBox</a></div>
			</div>
		</div>
            </section>
            <section>
                <div className="container">
                    <div className="bio-box">
                        <p>With a passion for technology and an appetite for continuous learning, this skilled professional is making waves in the computer software industry. Currently working with Typescript, they bring a wealth of experience in full-stack development, Python, React, HTML, CSS, and JavaScript.
                            After graduating from Utah Valley University with a bachelor's degree in Criminal Justice, they embarked on a career in tech, earning a Full-Stack Web Development certificate from DevMountain. Alongside their academic pursuits, they were also actively involved in the Cybersecurity Club and CTF Cybersecurity Team.
                            Always eager to learn more and stay ahead of the curve, they have decided to pursue a Masters of Cybersecurity at UVU, starting in August 2023. In preparation for the program, they have already taken prerequisite and refresher courses, demonstrating their dedication to excellence and their commitment to mastering their craft.
                            With a demonstrated history of success and a drive to always do better, our intern developer is a force to be reckoned with in the tech world. Keep an eye out for their future achievements!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}