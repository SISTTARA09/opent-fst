import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import NotSigned from "../../components/global/NotSigned";
import { StudentContextAPI } from "../../contexts/StudentContext";
import { URL_ENDPOINT } from "../../envirement-variables";
import SessionSection from "../../components/docs/SessionSection";
/// imports

const Docs = () => {
	const { info, isSigned } = useContext(StudentContextAPI);

	// fetch docs
	async function fetchDocs() {
		if (isSigned) {
			const response = await fetch(
				`${URL_ENDPOINT}/data/docs/${info?.branch}/${info?.semester}`
			);
			return await response.json();
		} else {
			return {};
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
			<SessionSection
				sessionName="Cour"
				sessionData={data?.docs?.courDocs}
				success={data.success}
			/>
			<SessionSection
				sessionName="TD"
				sessionData={data?.docs?.tdDocs}
				success={data.success}
			/>
			<SessionSection
				sessionName="Exams"
				sessionData={data?.docs?.examDocs}
				success={data.success}
			/>
		</section>
	) : (
		<NotSigned />
	);
};

export default Docs;
