import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<SinglePage />} />
							<Route path="new" element={<New title="Add New User" />} />
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<SinglePage />} />
							<Route path="new" element={<New title="Add New Product" />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
