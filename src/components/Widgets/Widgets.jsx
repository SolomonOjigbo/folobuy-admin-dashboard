// import { PersonOutlined, PersonOutlinedIcon } from "@mui/icons-material";
import React from "react";
import "./Widgets.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({ type }) => {
	let data;

	const diff = 20;
	const amount = 100;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				icon: (
					<PersonOutlinedIcon
						className="icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: (
					<ShoppingCartOutlinedIcon
						className="icon"
						style={{
							color: "orange",
							backgroundColor: "rgba(234, 255, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "earnings":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: (
					<MonetizationOnOutlinedIcon
						className="icon"
						style={{
							color: "green",
							backgroundColor: "rgba(10, 176, 7, 0.2)",
						}}
					/>
				),
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "View account balance",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className="icon"
						style={{
							color: "purple",
							backgroundColor: "rgba(89, 3, 68, 0.2)",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title"> {data.title}</span>
				<span className="counter">
					{" "}
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link"> {data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widgets;
