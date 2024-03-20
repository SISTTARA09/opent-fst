import React from "react";

interface ModuleType {
	branches: string[];
	semester: string;
	module: string;
	docs: [
		{
			title: string;
			doc: string;
			type: string;
		}
	];
	__v: number;
	isNew: boolean;
	prof: string;
	owner: string;
	videos: {
		title: string;
		path: string;
	};
}

// contexts
interface VideoContextType {
	iframePath: string;
	setIframePath: React.Dispatch<React.SetStateAction<string>>;
}

interface ModuleContextType {
	currModule: ModuleType | null;
	setCurrModule: React.Dispatch<React.SetStateAction<null | ModuleType>>;
}
///

interface SessionPlaylists {
	branches: string[];
	module: string;
	semester: string;
	owner: string;
	videos: {
		title: string;
		path: string;
	}[];
	__v: number;
}

export { ModuleType, VideoContextType, SessionPlaylists, ModuleContextType };
