import React, { createContext, useEffect, useState } from "react";
import { IsAuthContextType } from "../types/auth";
import { URL_ENDPOINT } from "../envirement-variables";

// parsing cookie
function getCookie(name: string): string | undefined {
	const cookies = document.cookie?.split(";");
	const myCookie = cookies?.find((ele) => ele.startsWith(name));
	const token = myCookie?.substring(myCookie.indexOf("=") + 1);
	return token;
}
///

export const IsAuthContext = createContext<IsAuthContextType>({
	user: null,
	isAuth: null,
	setIsAuth: null,
});

const AuthContext = ({ children }: { children: React.ReactElement }) => {
	const [user, setUser] = useState(null);

	const [isSigned, setIsAuth] = useState<boolean | null>(null);

	useEffect(() => {
		const token = getCookie("jwt");
		async function fetchUser() {
			try {
				const response = await fetch(`${URL_ENDPOINT}/user/profile`, {
					method: "GET",
					headers: {
						Authorization: `bearer ${token}`,
						credentials: "include",
					},
				});
				const user = await response.json();
				setIsAuth(true);
				setUser(user);
			} catch (error) {
				return setIsAuth(false);
			}
		}

		fetchUser();
	}, []);

	// if (isSigned === null) return <h1>Loading...</h1>;

	return (
		<IsAuthContext.Provider value={{ isAuth: isSigned, setIsAuth, user }}>
			{children}
		</IsAuthContext.Provider>
	);
};

export default AuthContext;
