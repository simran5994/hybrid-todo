const backendData = [
	{
		id: "1",
		name: "English",
		dueDate: "2024-07-15T12:34:56.789",
		label: "Workday",
	},
	{
		id: "2",
		name: "English",
		dueDate: "2024-05-15T12:34:56.789",
		label: "Learning",
	},
	{
		id: "3",
		name: "English",
		dueDate: "2024-06-11T12:34:56.789",
		label: "IMS",
	},
];
export function getData() {
	return new Promise((resolve) => {
		// setTimeout(resolve, 100, backendData);
		resolve(backendData);
	});
}
