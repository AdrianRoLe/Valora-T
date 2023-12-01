import "./App.css";
import Emoji from "./Emoji";

const App = () => {
	return (
		<div>
			<div
				style={{
					textAlign: "center",
					height: "10vh",
					marginTop: "10vh",
				}}
			>
				<h1>VALORA LA VISITA</h1>
			</div>
			<div
				className="App"
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-evenly",
					height: "50vh",
					alignItems: "center",
				}}
			>
				<Emoji src={"./review_1.png"} initialCount={0} />
				<Emoji src={"./review_2.png"} initialCount={0} />
				<Emoji src={"./review_3.png"} initialCount={0} />
				<Emoji src={"./review_4.png"} initialCount={0} />
				<Emoji src={"./review_5.png"} initialCount={0} />
			</div>
		</div>
	);
};

export default App;
