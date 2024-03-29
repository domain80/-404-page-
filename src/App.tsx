import "./App.css";

function App() {
	return (
		<div className="App">
			<h2>404 not found</h2>
			<div className="container">
				<picture>
					<img
						alt="scarecrow"
						src="./Scarecrow.png"
					/>
				</picture>

				<article className="article">
					<h1 className="article_title">I have bad news for you</h1>
					<p className="article_paragraph">
						The page you were looking for might be removed or is temporarily
						unavailable
					</p>
					<button className="article_button"> Back to homepage </button>
				</article>
			</div>
			<footer>
				created by <a href="github.com/1jack80">1jack80</a> - devChallenges.io{" "}
			</footer>
		</div>
	);
}

export default App;
