import { useContext } from "react";
import PlayListSection from "./mainComponents/PlayListSection";
import VideoSection from "./mainComponents/VideoSection";
import PlayListInfo from "./mainComponents/PlayListInfo";
import { ModuleContextAPI } from "../context/ModuleContext";
import { VideoContextAPI } from "../context/VideoContext";

const MainTemplate = () => {
	const { iframeSrc } = useContext(VideoContextAPI);
	const { module } = useContext(ModuleContextAPI);
	return (
		<main className="pt-20 relative w-full px-3 m-auto container">
			<PlayListInfo module={module} />
			<div className="flex gap-16 py-6 flex-col">
				<VideoSection iframe={iframeSrc} />
				<PlayListSection module={module} />
			</div>
		</main>
	);
};

export default MainTemplate;
