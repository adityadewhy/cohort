import React, {Suspense} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import "./App.css";

const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
	return (
		<div>
			<Router>
				<Appbar />
				<Routes>
					<Route
						path="/dashboard"
						element={
							<Suspense fallback="...loading...">
								<Dashboard />{" "}
							</Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<Suspense fallback="...loading...">
								<Landing />
							</Suspense>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

function Appbar() {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<button
					onClick={() => {
						navigate("/");
					}}
				>
					Landing page
				</button>

				<button
					onClick={() => {
						navigate("/dashboard");
					}}
				>
					Dashboard
				</button>
			</div>
		</div>
	);
}

export default App;
