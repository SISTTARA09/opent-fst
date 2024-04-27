import { Link } from "react-router-dom";
import { DocType } from "../../types/docs";
import DocBox from "./DocBox";

const SessionSection = ({
	sessionName,
	sessionData,
	success,
}: {
	sessionName: string;
	sessionData: DocType[];
	success: boolean;
}) => {
	return (
		<article className="py-9">
			<h2 className="text-blue px-3">{sessionName} ;</h2>
			<p className="pt-2 first-letter:pl-2 pl-5 text-justify max-w-[550px]">
				MIP {sessionName} S1 Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Quod rerum corrupti deleniti optio, obcaecati fugit eius soluta
				qui veritatis. corrupti deleniti optio, obcaecati fugit eius soluta qui
				veritatis.
			</p>
			<div className="grid grid-cols-auto gap-6 gap-y-12 place-items-center px-5 p-9 ">
				{success &&
					sessionData.map((ele: DocType, id: number) => {
						const { module, prof, isNew } = ele;
						return (
							<Link key={id} to={`/docs/${module.replace(" ", "_")}/cour`}>
								<DocBox isNew={isNew} module={module} prof={prof} />
							</Link>
						);
					})}
			</div>
		</article>
	);
};

export default SessionSection;
