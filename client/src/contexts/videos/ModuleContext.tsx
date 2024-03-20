import React, { createContext, useState } from "react";
import { ModuleType } from "../../types/videos";

export const ModuleContextAPI = createContext<{
	currModule: ModuleType | null;
	setCurrModule: React.Dispatch<React.SetStateAction<null | ModuleType>>;
}>({ currModule: null, setCurrModule: () => null });

const ModuleContext = ({ children }: { children: React.ReactElement }) => {
	const [currModule, setCurrModule] = useState<ModuleType | null>(null);
	return (
		<ModuleContextAPI.Provider value={{ currModule, setCurrModule }}>
			{children}
		</ModuleContextAPI.Provider>
	);
};

export default ModuleContext;
