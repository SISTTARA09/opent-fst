import { useQuery } from "@tanstack/react-query";
import PlayListInfo from "../../components/videos/PlaylistInfo";
import VideoSection from "../../components/videos/VideoSection";
import VideoNav from "../../components/videos/VideoNav";
import { useContext, useEffect } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import ModulesNav from "../../components/videos/ModulesNav";
import { useParams } from "react-router-dom";
import { ModuleContextAPI } from "../../contexts/videos/ModuleContext";
import NotAuth from "../../components/global/NotAuth";

async function fetchVideos(
	branch: string,
	semester: string,
	session: string
): Promise<any> {
	try {
		const response = await fetch(
			`http://localhost:4000/data/playlists/${branch}/${semester}/${session}`
		);

		return await response.json();
	} catch (error) {
		console.log("error in fetching playlist");
		console.log(error.message);
	}
	return;
}

const Videos = () => {
	// module context
	const { currModule, setCurrModule } = useContext(ModuleContextAPI);
	///

	// user context
	const { user, isSigned } = useContext(IsSignedContext);
	///

	// use params
	const { session } = useParams();
	///

	const { data, isLoading } = useQuery({
		queryKey: ["query-videos"],
		queryFn: () => fetchVideos(user?.user.branch, user?.user.semester, session),
	});

	useEffect(() => {
		// on the first load show the first module
		setCurrModule(data?.playlists[0]);
		///
	}, [data, setCurrModule]);

	// on the first load sohw blank, because we need to run "useEffect"
	if (!currModule) return <></>;
	///

	const { module, owner, videos } = currModule;

	return isSigned ? (
		<section className="p-0">
			{/* <div>
				{" "}
				<h4 onClick={() => setCurrPlaylist(courPlaylists)}>cour</h4>:
				<h4 onClick={() => setCurrPlaylist(tdPlaylists)}>td</h4>{" "}
			</div> */}
			<div className="contain flex relative ">
				<ModulesNav playlists={data.playlists} />
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
