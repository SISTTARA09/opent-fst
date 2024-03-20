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

interface VideoContextType {
	iframePath: string;
	setIframePath: React.Dispatch<React.SetStateAction<string>>;
}

export { ModuleType, VideoContextType };