import { useEffect, useState } from "react";
import FormDialog from "./FormDialog";
import React from "react";
import { getData } from "../common/data";
import CardView from "./CardView";
import { Box, Button } from "@mui/material";

const Dashboard = () => {
	const [displayForm, setDisplayForm] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await getData();
		setData(data);
	};

	function handleDataFromChild(data) {
		setDisplayForm(data);
	}
	function handleNewData(newData) {
		console.log(newData);
		let obj = {
			id: Math.random(),
			name: newData.name,
			dueDate: newData.dueDate,
			label: newData.label,
		};
		setData([...data, obj]);
	}

	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<Box sx={{ marginTop: "20px" }}>
					<Button
						onClick={() => setDisplayForm(true)}
						sx={{
							backgroundColor: "#1976d2",
							minWidth: "200px",
							fontWeight: "bold",
							color: "#fff",
							"&:hover": {
								backgroundColor: "#005aa7",
							},
						}}
					>
						ADD ✚
					</Button>
				</Box>
			</div>
			{displayForm && (
				<FormDialog
					sendDataToParent={handleDataFromChild}
					sendFormDataToParent={handleNewData}
				/>
			)}
			<div>
				{data.map((item) => (
					<CardView
						key={item.id}
						style={{ marginTop: "20px" }}
						name={item.name}
						dueDate={item.dueDate}
						label={item.label}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
