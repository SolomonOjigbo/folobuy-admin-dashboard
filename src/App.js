import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/DarkModeContext";
import { productInputs, userInputs } from "./data/formSource";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import SinglePage from "./pages/SinglePage/SinglePage";
import "./styles/Dark.scss";

function App() {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<SinglePage />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<SinglePage />} />
							<Route
								path="new"
								element={<New inputs={productInputs} title="Add New Product" />}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
