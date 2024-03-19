import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { VideoContextAPI } from "../../contexts/videos/VideoContext";
import { ModuleContextAPI } from "../../contexts/videos/ModuleContext";

const ModulesNav = ({ playlists }) => {
	const [isShow, setIsShow] = useState(true);
	const { setIframePath } = useContext(VideoContextAPI);
	const { setCurrModule } = useContext(ModuleContextAPI);

	// checking if the screen is greater than px to (show | hide) navbar
	useEffect(() => {
		const isShowTime = setInterval(() => {
			if (window.innerWidth >= 640 && !isShow) {
				// if so
				setIsShow(true);
				return;
			}
		}, 1000);
		return () => clearInterval(isShowTime);
	}, [isShow]);
	///

	// handle click
	const handleClick = (_id: string): void => {
		const targetModule = playlists.find((ele) => ele._id === _id);
		setCurrModule(targetModule);
		setIframePath(targetModule.videos[0].path);
		return;
	};
	///

	return (
		<nav
			className=" flex flex-col z-40 sm:sticky absolute top-0 h-screen bg-bgDark left-0 
		  gap-4 text-sm font-semibold py-24 border-r-2 border-stone-700/50"
		>
			<span
				className={
					isShow
						? "relative -bottom-[75vh] sm:hidden w-8 text-2xl self-end -right-5 bg-stone-500/50 text-center rounded-full"
						: "absolute left-full bottom-[3vh] sm:hidden w-8 text-2xl self-end bg-stone-500/50 text-center rounded-full"
				}
				onClick={() => setIsShow(!isShow)}
			>
				<FontAwesomeIcon
					icon={isShow ? faAngleDoubleLeft : faAngleDoubleRight}
				/>
			</span>
			{playlists.map((module, id) => {
				return (
					isShow && (
						<Link
							to={null}
							key={id}
							className="block text-center hover:text-main w-[200px] hover:border-gray-200/50 py-3 rounded-md mx-1"
							onClick={() => handleClick(module._id)}
						>
							{module.module}
						</Link>
					)
				);
			})}
		</nav>
	);
};

export default ModulesNav;
