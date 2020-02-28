import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../views/projects";

import epLogo from "../../img/ep-logo.png";

export const Navbar = () => {
	return (
		<div clasName="navbar container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="website-logo nav-item">
					<Link to={"/"} className="" href="">
						<img src="https://i.imgur.com/KK3xtxv.png" className="website-logo-icon" />
					</Link>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link to={"/skills"} className="nav-link" href="">
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/projects"} className="nav-link" href="">
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/contact"} className="nav-link" href="">
								Contact Me
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
