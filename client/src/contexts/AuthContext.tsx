import React, { createContext, useEffect, useState } from "react";
import { IsSignedContextType } from "../types/auth";
import { URL_ENDPOINT } from "../envirement-variables";

// parsing cookie
function getCookie(name: string): string | undefined {
	const cookies = document.cookie?.split(";");
	const myCookie = cookies?.find((ele) => ele.startsWith(name));
	const token = myCookie?.substring(myCookie.indexOf("=") + 1);
	return token;
}
///

export const IsSignedContext = createContext<IsSignedContextType>({
	user: null,
	isSigned: null,
	setIsSigned: null,
});

const AuthContext = ({ children }: { children: React.ReactElement }) => {
	const [user, setUser] = useState(null);

	const [isSigned, setIsSigned] = useState<boolean | null>(null);

	useEffect(() => {
		const token = getCookie("jwt");
		async function fetchUser() {
			try {
				const response = await fetch(`${URL_ENDPOINT}/user/profile`, {
					method: "GET",
					headers: {
						Authorization: `bearer ${token}`,
						// credentials: "same-origin",
					},
				});
				const user = await response.json();
				setIsSigned(true);
				setUser(user);
			} catch (error) {
				return setIsSigned(false);
			}
		}

		fetchUser();
	}, []);

	if (isSigned === null) return <></>;

	return (
		<IsSignedContext.Provider value={{ isSigned, setIsSigned, user }}>
			{children}
		</IsSignedContext.Provider>
	);
};

export default AuthContext;
