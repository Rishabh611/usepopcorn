import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Test = () => {
	const [movieRating, setMovieRating] = useState(0);
	return (
		<div>
			<StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
			<p>This momvie was rated {movieRating} stars.</p>
		</div>
	);
};
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} />
		<StarRating maxRating={5} color="red" size={24} defaultRating={3} />
		<Test /> */}
	</React.StrictMode>
);
