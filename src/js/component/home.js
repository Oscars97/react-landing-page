import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card img="https://picsum.photos/200/200" />
					<Card img="https://picsum.photos/200/200" />
					<Card img="https://picsum.photos/200/200" />
					<Card img="https://picsum.photos/200/200" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
