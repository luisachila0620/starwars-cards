import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

function convertPeopleIntoHTML(people) {
	//<p key={planet.name}>{planet.name}</p>;
	return (
		<div className="card">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{people.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

function convertPlanetIntoHTML(planet) {
	//<p key={planet.name}>{planet.name}</p>;
	return (
		<div className="card">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{planet.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export const Home = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<button
				type="button"
				onClick={() => {
					actions.getPlanets();
					actions.getPeople();
					//actions.getChars();
				}}>
				get API list
			</button>
			{store.planets.length == 0 ? <p>No planets</p> : ""}
			<div className="w-100 people">
				<div className="d-inline-flex">{store.people.map(convertPeopleIntoHTML)}</div>
			</div>
			<div className="w-100 planets">
				<div className="d-inline-flex">{store.planets.map(convertPlanetIntoHTML)}</div>
			</div>
		</div>
	);
};
