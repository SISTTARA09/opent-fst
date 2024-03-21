import { useContext } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
import NotAuth from "../../components/global/NotAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DocBox from "../../components/docs/DocBox";
import { DocType } from "../../types/docs";
import { URL_ENDPOINT } from "../../envirement-variables";
/// imports

const Docs = () => {
	const { isSigned, user } = useContext(IsSignedContext);

	// fetch docs
	async function fetchDocs() {
		try {
			const response = await fetch(
				`${URL_ENDPOINT}/data/docs/${user?.user.branch}/${user?.user.semester}`
			);
			return await response.json();
		} catch (error: unknown) {
			alert("error in getting docs: \n");
		}
	}
	///

	const { data, isLoading, isError } = useQuery({
		queryKey: ["query-docs"],
		queryFn: fetchDocs,
	});

	if (isLoading) return <h1>loading...</h1>;
	if (isError) return <>something went wrong!!</>;

	return isSigned ? (
		<section className="container">
			<article className="py-9">
				<h2 className="text-blue px-3">COUR ;</h2>
				<p className="pt-2 first-letter:pl-2 pl-5 text-justify max-w-[550px]">
					MIP COUR S1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quod rerum corrupti deleniti optio, obcaecati fugit eius soluta qui
					veritatis. corrupti deleniti optio, obcaecati fugit eius soluta qui
					veritatis.
				</p>
				<div className="grid grid-cols-auto gap-6 gap-y-12 place-items-center px-5 p-9 ">
					{data.docs.courDocs.map((ele: DocType, id: number) => {
						const { module, prof, isNew }: DocType = ele;
						return (
							<Link key={id} to={`/docs/${module.replace(" ", "_")}/cour`}>
								<DocBox isNew={isNew} module={module} prof={prof} />
							</Link>
						);
					})}
				</div>
			</article>
			<article className="py-9  ">
				<h2 className="text-blue px-3">TD ;</h2>
				<p className="pt-2 first-letter:pl-2 pl-5 text-justify max-w-[550px]">
					MIP COUR S1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quod rerum corrupti deleniti optio, obcaecati fugit eius soluta qui
					veritatis. corrupti deleniti optio, obcaecati fugit eius soluta qui
					veritatis.
				</p>
				<div className="grid grid-cols-auto gap-6 gap-y-9 gap place-items-center px-5 p-9 ">
					{data.docs.tdDocs.map((ele: DocType, id: number) => {
						const { module, prof, isNew }: DocType = ele;
						return (
							<Link key={id} to={`/docs/${module.replace(" ", "_")}/td`}>
								<DocBox isNew={isNew} module={module} prof={prof} />
							</Link>
						);
					})}
				</div>
			</article>
		</section>
	) : (
		<NotAuth />
	);
};

export default Docs;
