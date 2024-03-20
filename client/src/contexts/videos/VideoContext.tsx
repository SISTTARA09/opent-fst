import React, { createContext, useState } from "react";
import { VideoContextType } from "../../types/videos";

export const VideoContextAPI = createContext<VideoContextType>({
	iframePath: "",
	setIframePath: () => "",
});

const VideoContext = ({ children }: { children: React.ReactElement }) => {
	const [iframePath, setIframePath] = useState<string>(
		"https://www.youtube.com/embed/qopmfZ30_TQ?si=IwqMFRFAaTOcGPk9"
	);

	return (
		<VideoContextAPI.Provider value={{ iframePath, setIframePath }}>
			{children}
		</VideoContextAPI.Provider>
	);
};

export default VideoContext;
