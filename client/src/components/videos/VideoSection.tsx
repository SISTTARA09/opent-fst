import { useContext } from "react";
import { VideoContextAPI } from "../../contexts/videos/VideoContext";

const VideoSection = () => {
	const { iframePath } = useContext(VideoContextAPI);

	return (
		<div className="w-full aspect-video sm:w-5/6 md:w-2/3 m-auto">
			<iframe
				className="w-full h-full"
				src={iframePath}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoSection;
