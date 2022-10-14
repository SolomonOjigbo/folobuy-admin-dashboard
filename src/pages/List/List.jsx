import React from "react";
import { useLocation } from "react-router-dom";
import UserTable from "../../components/DataTable/UserTable";
import ProductTable from "../../components/DataTable/ProductTable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./List.scss";

const List = () => {
	const location = useLocation();

	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				{location.pathname === "/users" ? <UserTable /> : <ProductTable />}
			</div>
		</div>
	);
};

export default List;
