import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IsSignedContext } from "../../contexts/AuthContext";
import NotAuth from "../../components/global/NotAuth";
import ModuleBox from "../../components/docs/ModuleBox";

const Module = () => {
	const { user, isSigned } = useContext(IsSignedContext);
	const { module, session } = useParams();
	async function fetchDoc() {
		try {
			const response = await fetch(
				`http://localhost:4000/data/docs/${user?.user.branch}/${user?.user.semester}/${module}/${session}`
			);
			return await response.json();
		} catch (error) {
			alert(error.message);
		}
	}

	const { data, isLoading } = useQuery({
		queryKey: ["query-doc"],
		queryFn: fetchDoc,
	});

	if (isLoading) return <h1>Loading...</h1>;

	return isSigned ? (
		<section className="container">
			<article className="py-9  ">
				<h2 className="text-blue px-3">{session.toLocaleUpperCase()} ;</h2>
				<p className="pt-2 first-letter:pl-2 pl-5 text-justify max-w-[550px]">
					Lorem {session} ipsum dolor sit amet consectetur, adipisicing elit.
					Sed, consequuntur.
				</p>
				<div className="grid grid-cols-auto gap-6 place-items-center px-5 p-9 ">
					{data?.doc.docs.map((ele, id: number) => {
						return (
							<a href={"/imgs/blue.png"} key={id} download>
								<ModuleBox module={ele.title} />
							</a>
						);
					})}
				</div>
			</article>
		</section>
	) : (
		<NotAuth />
	);
};

export default Module;
