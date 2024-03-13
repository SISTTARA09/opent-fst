import { UserForm } from "../../types/user";

async function authenticateUser(path: string, payload: UserForm) {
	try {
		const response = await fetch(`http://localhost:4000/auth/${path}`, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		return await response.json();
	} catch (error) {
		console.log("error in fetching: \n");
	}
}

export { authenticateUser };
