import { createContext, useState } from "react";

export const VideoContextAPI = createContext(null);
const VideoContext = ({ children }) => {
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
