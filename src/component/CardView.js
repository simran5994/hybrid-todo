import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import formatDueDate from "../utils/dateConvert";

const CardView = ({ name, dueDate, label }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [clr, setClr] = useState("");

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		axios
			.post("https://your-analytics-endpoint.com/track", {
				event: "Card Clicked",
				name: name,
				dueDate: dueDate,
				label: label,
			})
			.then((response) => {
				console.log("Event tracked:", response.data);
			})
			.catch((error) => {
				console.error("Error tracking event:", error);
			});
	};

	useEffect(() => {
		const c = formatDueDate(dueDate);
		if (c.includes("in")) {
			setClr("green");
		} else if (c.includes("today")) {
			setClr("orange");
		} else if (c.includes("Overdue")) {
			setClr("red");
		}
	}, [dueDate]);

	return (
		<Card
			sx={{
				maxWidth: 600,
				margin: "20px auto",
				boxShadow: isHovered ? 6 : 1,
				cursor: "pointer",
				transition: "box-shadow 0.3s ease-in-out",
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant='h5' component='div'>
						{name}
					</Typography>
					{/* <Typography variant='body2' color='textSecondary'>
						{formatDueDate(dueDate)}
					</Typography> */}
					<Chip
						label={formatDueDate(dueDate)}
						color='primary'
						sx={{
							marginLeft: "10px",
							backgroundColor: clr,
							color: "#fff",
						}}
					/>
				</Box>
				<Chip label={label} sx={{ marginTop: "10px" }} />
			</CardContent>
		</Card>
	);
};

export default CardView;
