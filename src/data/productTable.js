

export const productColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "product",
		headerName: "Product",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.name}
				</div>
			);
		},
	},
	{
		field: "stock",
		headerName: "Stock",
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
    {
        field: "price",
        headerName: "Price",
        width: 100,
    },
];

export const productRows = [
	{
		id: 1,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 2,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 3,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 4,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 5,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 6,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 7,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 8,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 9,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
	{
		id: 10,
		name: "Apple Airpods",
		img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		stock: 123,
		status: "active",
		price: "$120.00",
	},
];
