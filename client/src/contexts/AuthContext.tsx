import React, { createContext, useEffect, useState } from "react";
import { UserForm } from "../types/user";

export interface ContextType {
	isSigned: boolean;
	setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
	user: null | { user: UserForm };
}

// parsing cookie
function getCookie(name: string) {
	const cookies = document.cookie?.split(";");
	const myCookie = cookies?.find((ele) => ele.startsWith(name));
	const token = myCookie?.substring(myCookie.indexOf("=") + 1);
	return token;
}
///

export const IsSignedContext = createContext(null);

const AuthContext = ({ children }: { children: React.ReactElement }) => {
	const [user, setUser] = useState<null | { user: UserForm }>(null);

	const [isSigned, setIsSigned] = useState<boolean>(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch("http://localhost:4000/user/profile", {
					method: "GET",
					headers: {
						Authorization: `bearer ${getCookie("jwt")}`,
					},
				});
				const user = await response.json();
				setIsSigned(true);
				setUser(user);
				console.log("user: ", user);
			} catch (error) {
				return setIsSigned(false);
			}
		};
		fetchUser();
	}, []);

	return (
		<IsSignedContext.Provider value={{ isSigned, setIsSigned, user }}>
			{children}
		</IsSignedContext.Provider>
	);
};

export default AuthContext;
