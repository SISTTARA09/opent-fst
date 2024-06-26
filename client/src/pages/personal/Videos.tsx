import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PlayListInfo from "../../components/videos/PlaylistInfo";
import VideoSection from "../../components/videos/VideoSection";
import VideoNav from "../../components/videos/VideoNav";
import ModulesNav from "../../components/videos/ModulesNav";
import { ModuleContextAPI } from "../../contexts/videos/ModuleContext";
import { ModuleContextType, ModuleType } from "../../types/videos";
import { URL_ENDPOINT } from "../../envirement-variables";
import { StudentContextAPI } from "../../contexts/StudentContext";
import NotSigned from "../../components/global/NotSigned";
/// imports

const Playlist = () => {
	// user context
	const { info, isSigned } = useContext(StudentContextAPI);
	///

	// module context
	const { currModule, setCurrModule } =
		useContext<ModuleContextType>(ModuleContextAPI);
	///

	// use params
	const { session } = useParams();
	///

	const [currSessionData, setCurrSessionData] = useState(null);

	// on change the session fetch the data
	useEffect(() => {
		async function fetchVideos() {
			try {
				if (!isSigned) return;
				const response = await fetch(
					`${URL_ENDPOINT}/data/playlists/${info?.branch}/${info?.semester}/${session}`
				);
				const data = await response.json();
				setCurrSessionData(data?.playlists);
				// set the current watching module or set the first one as default
				setCurrModule(
					data?.playlists.find(
						(ele: ModuleType) =>
							ele.module === localStorage.getItem("curr-module")
					) || data?.playlists[0]
				);
				///
			} catch (error: unknown) {
				alert("something went wrong in fetching !!!");
			}
		}
		fetchVideos();
	}, [info?.branch, info?.semester, isSigned, session, setCurrModule]);
	///

	// before load set the current module to the localstorage
	useEffect(() => {
		window.addEventListener("beforeunload", () =>
			localStorage.setItem("curr-module", String(currModule?.module))
		);
		return () =>
			window.removeEventListener("beforeunload", () =>
				localStorage.setItem("curr-module", String(currModule?.module))
			);
	}, [currModule]);
	///

	// on the first load show blank, because we need to run "useEffect"
	if (!currModule) return <></>;
	///

	const { module, owner, videos } = currModule;

	return isSigned ? (
		<section className="py-0">
			<div className="contain flex relative ">
				<ModulesNav playlists={currSessionData} />
				<main className="pt-20 relative w-full px-3 m-auto container">
					<PlayListInfo module={module} owner={owner} />
					<div className="flex gap-16 py-6 flex-col">
						<VideoSection />
						<CourOrTd />
						<VideoNav videos={videos} />
					</div>
				</main>
			</div>
		</section>
	) : (
		<NotSigned />
	);
};

function CourOrTd() {
	return (
		<div className="cour-td flex gap-3 *:bg-stone-200/60 w-fit ">
			<NavLink
				to={"/videos/cour"}
				className={"capitalize font-semibold p-1 px-2 rounded-sm"}
			>
				cour
			</NavLink>
			<NavLink
				to={"/videos/td"}
				className={"capitalize font-semibold p-1 px-3 rounded-sm"}
			>
				td
			</NavLink>
		</div>
	);
}

export default Playlist;
