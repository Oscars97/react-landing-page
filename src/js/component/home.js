import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
