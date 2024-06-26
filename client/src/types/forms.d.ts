interface DocFormFields {
	formValues: ArrayBuffer;
	formValues: ArrayBuffer;
	branch: "branch" | "mip" | "bcg" | "gegm";
	semester: "semester" | "s1" | "s2" | "s3" | "s4";
	module: string;
	session: "session" | "cour" | "td";
	title: string;
	doc: File | Blob;
	type: "img" | "pdf";
	key?: string;
}
interface VideoFormFields {
	branch: "branch" | "mip" | "bcg" | "gegm";
	semester: "semester" | "s1" | "s2" | "s3" | "s4";
	module: string;
	session: "session" | "cour" | "td";
	title: string;
	path: string;
}
export { DocFormFields, VideoFormFields };
