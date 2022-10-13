import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

//  Featured Chart Data
// export const featuredData = [
// 	{
// 		icon: KeyboardArrowDownIcon,
// 		itemTitle: "Today",
// 		amount: "7.1k",
// 	},
// 	{
// 		icon: KeyboardArrowUpOutlinedIcon,
// 		itemTitle: "Last Week",
// 		amount: "24.8k",
// 	},
// 	{
// 		icon: KeyboardArrowUpOutlinedIcon,
// 		itemTitle: "Last Month",
// 		amount: "65.3k",
// 	},
// ];

function createData(icon, itemTitle, amount) {
	return { icon, itemTitle, amount };
}

export const featuredData = [
	createData(KeyboardArrowDownIcon, "Today", "$890"),
	createData(KeyboardArrowUpOutlinedIcon, "Last Week", "$24.8k"),
	createData(KeyboardArrowUpOutlinedIcon, "Last Month", "$65.3k"),
];

export const makeStyle = (icon) => {
	if (icon === KeyboardArrowDownIcon) {
		return {
			color: "red",
		};
	} else {
		return {
			color: "green",
		};
	}
};
