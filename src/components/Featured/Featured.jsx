import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { featuredData, makeStyle } from "../../data/featuredChartData";

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title"> Total Revenue</h1>
				<MoreVertIcon fontSize="small" />
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$890</p>
				<p className="desc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
					voluptas ab officia voluptatem recusandae.
				</p>
				<div className="summary">
					{featuredData.map((item, index) => (
						<div className="item" key={index}>
							<div className="itemTitle"> {item.itemTitle}</div>
							<div className="itemResult" style={makeStyle(item.icon)}>
								<item.icon />
								<div className="resultAmount">{item.amount}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Featured;
