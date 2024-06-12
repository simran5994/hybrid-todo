import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
	DialogContent,
	DialogContentText,
	TextField,
	Grid,
	Button,
} from "@mui/material";

export default function FormDialog({ sendDataToParent, sendFormDataToParent }) {
	const [open, setOpen] = React.useState(true);

	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };

	const handleClose = () => {
		setOpen(false);
		sendDataToParent(false);
	};

	const captureData = (data) => {
		sendFormDataToParent(data);
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						console.log(formJson);
						captureData(formJson);
						handleClose();
					},
				}}
			>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>Add New Fields</DialogContentText>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoFocus
								required
								margin='dense'
								id='name'
								name='name'
								label='Name'
								fullWidth
								variant='standard'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin='dense'
								id='date'
								name='dueDate'
								label='Due Date'
								type='date'
								fullWidth
								variant='standard'
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin='dense'
								id='label'
								name='label'
								label='Label'
								fullWidth
								variant='standard'
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type='submit'>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
