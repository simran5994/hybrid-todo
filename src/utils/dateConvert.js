import moment from "moment";

export default function formatDueDate(dueDate) {
	const now = moment().startOf("day");
	const due = moment(dueDate, "YYYY-MM-DD").startOf("day");
	const daysDifference = due.diff(now, "days");

	if (daysDifference > 0) {
		return `Due in ${daysDifference} days`;
	} else if (daysDifference === 0) {
		return "Due today";
	} else {
		return `Overdue by ${Math.abs(daysDifference)} days`;
	}
}
