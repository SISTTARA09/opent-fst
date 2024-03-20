import React, { createContext, useState } from "react";
import { ModuleContextType, ModuleType } from "../../types/videos";

export const ModuleContextAPI = createContext<ModuleContextType>({
	currModule: null,
	setCurrModule: () => null,
});

const ModuleContext = ({ children }: { children: React.ReactElement }) => {
	const [currModule, setCurrModule] = useState<ModuleType | null>(null);

	return (
		<ModuleContextAPI.Provider value={{ currModule, setCurrModule }}>
			{children}
		</ModuleContextAPI.Provider>
	);
};

export default ModuleContext;
