import React, { createContext, useEffect, useState } from "react";

export const StudentContextAPI = createContext<StudentType>({
	info: { branch: "", semester: "" },
	isSigned: false,
});

interface StudentType {
	info: { branch: string; semester: string };
	isSigned: boolean;
}

const StudentContext = ({ children }: { children: React.ReactElement }) => {
	const [student, setStudent] = useState({
		info: { branch: "", semester: "" },
		isSigned: false,
	});

	useEffect(() => {
		if (localStorage.getItem("OPEN_FST_UD")) {
			const userData = JSON.parse(String(localStorage.getItem("OPEN_FST_UD")));
			setStudent({ info: userData, isSigned: true });
		}
	}, []);

	return (
		<StudentContextAPI.Provider value={student}>
			{children}
		</StudentContextAPI.Provider>
	);
};

export default StudentContext;
