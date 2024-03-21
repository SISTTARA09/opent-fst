import { URL_ENDPOINT } from "../../envirement-variables";
import { UserForm } from "../../types/user";

async function authenticateUser(path: string, payload: UserForm) {
	try {
		const response = await fetch(`${URL_ENDPOINT}/auth/${path}`, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		return await response.json();
	} catch (error) {
		alert("error in fetching authenticate user: \n");
	}
}

export { authenticateUser };
