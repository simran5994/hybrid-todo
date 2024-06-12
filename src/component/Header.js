import React from "react";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";

const Header = () => {
	return (
		<AppBar position='static'>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<TextField
					id='search'
					label='Search'
					variant='outlined'
					size='small'
					color='primary'
					sx={{ backgroundColor: "#FFF", marginRight: "auto" }}
					onChange={(e) => console.log(e.target.value)}
				/>
				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1, textAlign: "center" }}
				>
					Hybrid Aplication View
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
