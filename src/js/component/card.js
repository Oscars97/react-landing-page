import React from "react";

const Card = () => {
	return (
		<div className="card col-3">
			<img
				className="card-img-top"
				src="https://picsum.photos/200/200"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content .
				</p>
				<a href={"#"} className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
