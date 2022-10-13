// import { PersonOutlined, PersonOutlinedIcon } from "@mui/icons-material";
import React from "react";
import "./Widgets.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = () => {
	return (
		<div className="widget">
			<div className="left">
				<span className="title">Users</span>
				<span className="counter">34231</span>
				<span className="link">See all users</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
					20%
				</div>
				<PersonOutlinedIcon className="icon" />
			</div>
		</div>
	);
};

export default Widgets;
