import { Link } from "react-router-dom";
import { VideoContextAPI } from "../../contexts/videos/VideoContext";
import { useContext, useEffect } from "react";

const VideoNav = ({ videos }) => {
	const { setIframePath } = useContext(VideoContextAPI);
	useEffect(() => {
		setIframePath(videos[0].path);
	}, []);
	// handle Click
	const handleClick = (path: string): void => {
		setIframePath(path);
		return;
	};
	//
	return (
		<div className=" px-3 sm:px-9">
			<h3 className="pb-6 bg-gradient-to-r text-transparent from-main w-fit to-red-500 bg-clip-text">
				watch list:
			</h3>
			<nav className=" bg-zinc-800/70 sm:ml-12 w-full sm:w-[80%] lg:w-[50%] border-2 rounded-md  border-zinc-400">
				{videos.map((video: { title: string; path: string }, id: number) => {
					const { title, path } = video;
					return (
						<Link
							to={null}
							key={id}
							className="flex py-2 text-lg font-semibold border-b border-zinc-400"
							onClick={() => handleClick(path)}
						>
							<span className=" px-3">0{id + 1}</span>
							<span className="pl-3 hover:pl-6 border-l-2 border-zinc-400 duration-150 text-white block capitalize">
								{title}
							</span>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

export default VideoNav;
