import User1 from "../assests/user1.jpg";
import User2 from "../assests/user2.jpg";
import User3 from "../assests/user3.jpg";
import User4 from "../assests/user4.png";
import User5 from "../assests/user5.jpg";
import User6 from "../assests/user6.png";
import User7 from "../assests/user7.jpg";
import User8 from "../assests/user8.jpg";
import User9 from "../assests/user9.jpg";
import User10 from "../assests/user10.webp";

export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: User1,
		status: "active",
		email: "1snow@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: User2,
		email: "2snow@gmail.com",
		status: "passive",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		img: User3,
		email: "3snow@gmail.com",
		status: "pending",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		img: User4,
		email: "4snow@gmail.com",
		status: "active",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		img: User5,
		email: "5snow@gmail.com",
		status: "passive",
		age: 22,
	},
	{
		id: 6,
		username: "Melisandre",
		img: User6,
		email: "6snow@gmail.com",
		status: "active",
		age: 15,
	},
	{
		id: 7,
		username: "Clifford",
		img: User7,
		email: "7snow@gmail.com",
		status: "passive",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		img: User8,
		email: "8snow@gmail.com",
		status: "active",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: User9,
		email: "snow@gmail.com",
		status: "pending",
		age: 65,
	},
	{
		id: 10,
		username: "Roxie",
		img: User10,
		email: "snow@gmail.com",
		status: "active",
		age: 65,
	},
];
