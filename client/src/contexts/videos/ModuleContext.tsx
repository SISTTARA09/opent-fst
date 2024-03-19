import { createContext, useState } from "react";

export const ModuleContextAPI = createContext(null);

const ModuleContext = ({ children }) => {
	const [currModule, setCurrModule] = useState(null);
	return (
		<ModuleContextAPI.Provider value={{ currModule, setCurrModule }}>
			{children}
		</ModuleContextAPI.Provider>
	);
};

export default ModuleContext;
