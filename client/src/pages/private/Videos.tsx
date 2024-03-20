import { useQuery } from "@tanstack/react-query";
import PlayListInfo from "../../components/videos/PlaylistInfo";
import VideoSection from "../../components/videos/VideoSection";
import VideoNav from "../../components/videos/VideoNav";
import { useContext, useEffect, useState } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import ModulesNav from "../../components/videos/ModulesNav";
import { NavLink, useParams } from "react-router-dom";
import { ModuleContextAPI } from "../../contexts/videos/ModuleContext";
import NotAuth from "../../components/global/NotAuth";
import { ModuleType } from "../../types/videos";
import { IsSignedContextType } from "../../types/auth";
/// imports

// query function
async function fetchVideos(branch: string, semester: string) {
	try {
		const response = await fetch(
			`http://localhost:4000/data/playlists/${branch}/${semester}`
		);

		return await response.json();
	} catch (error: unknown) {
		console.log("error in fetching playlist");
		console.log(error);
	}
}
///

const Sessions = {
	COUR: "cour",
	TD: "td",
} as const;

const Videos = () => {
	// user context
	const { user, isSigned } = useContext<IsSignedContextType>(IsSignedContext);
	///
	// module context
	const { currModule, setCurrModule } = useContext<{
		currModule: ModuleType | null;
		setCurrModule: React.Dispatch<React.SetStateAction<ModuleType | null>>;
	}>(ModuleContextAPI);
	///

	console.log(currModule);

	// use params
	const { session } = useParams();
	///

	// query data
	const { data } = useQuery({
		queryKey: ["query-videos"],
		queryFn: () => fetchVideos(user?.user.branch, user?.user.semester),
	});
	///
	const [currSessionData, setCurrSessionData] = useState(
		data?.playlists.courPlaylists
	);

	useEffect(() => {
		if (!currSessionData) {
			switch (session) {
				case Sessions.COUR:
					setCurrSessionData(data?.playlists.courPlaylists);
					break;
				case Sessions.TD:
					setCurrSessionData(data?.playlists.tdPlaylists);
					break;
				default:
					break;
			}
		}
		if (currSessionData) {
			setCurrModule(currSessionData[0]);
		}
		///
	}, [data, setCurrModule, currSessionData, session]);

	function handleSession(session: string) {
		switch (session) {
			case Sessions.COUR:
				setCurrSessionData(data?.playlists.courPlaylists);
				setCurrModule(currSessionData[0]);
				break;
			case Sessions.TD:
				setCurrSessionData(data?.playlists.tdPlaylists);
				setCurrModule(currSessionData[0]);
				break;
			default:
				break;
		}
	}

	// on the first load sohw blank, because we need to run "useEffect"
	if (!currModule) return <></>;
	///
	console;
	const { module, owner, videos } = currModule;

	return isSigned ? (
		<section className="p-0">
			<div className=" flex gap-3">
				<NavLink to={"/videos/cour"} onClick={() => handleSession("cour")}>
					Cour
				</NavLink>
				<NavLink to={"/videos/td"} onClick={() => handleSession("td")}>
					td
				</NavLink>
			</div>
			<div className="contain flex relative ">
				<ModulesNav playlists={currSessionData} />
				<main className="pt-20 relative w-full px-3 m-auto container">
					<PlayListInfo module={module} owner={owner} />
					<div className="flex gap-16 py-6 flex-col">
						<VideoSection />
						<VideoNav videos={videos} />
					</div>
				</main>
			</div>
		</section>
	) : (
		<NotAuth />
	);
};

export default Videos;
