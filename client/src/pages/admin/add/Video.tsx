import { VideoFormFields } from "../../../types/forms";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { URL_ENDPOINT } from "../../../envirement-variables";
import NotAuth from "../../../components/global/NotAuth";
import { IsAuthContext } from "../../../contexts/AuthContext";
/// imports

const Video = () => {
	const [resMsg, setResMsg] = useState<string>("");
	const { register, formState, handleSubmit } = useForm<VideoFormFields>({
		defaultValues: {
			semester: "semester",
			branch: "branch",
		},
	});
	const { errors } = formState;
	const { isAuth } = useContext(IsAuthContext);
	///

	async function onSubmit(formData: VideoFormFields) {
		try {
			const response = await fetch(`${URL_ENDPOINT}/admin/add/video`, {
				method: "PATCH",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const resData = await response.json();
			setResMsg(resData.message);
		} catch (error: unknown) {
			setResMsg("Something went wrong!!");
		}
	}

	return isAuth ? (
		<>
			<h1> Add a video</h1>

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-3 *:w-full">
					{/* start branch  */}
					<div className="field-container">
						<label htmlFor="branch">branch</label>
						<select
							{...register("branch", {
								validate: {
									blackList: function (fieldValue) {
										return fieldValue !== "branch" || "choose a branch";
									},
								},
							})}
							id="branch"
						>
							<option hidden>branch</option>
							<option value="mip">mip</option>
							<option value="bcg">bcg</option>
							<option value="gegm">gegm</option>
						</select>
						<p className="error">
							{errors.branch && String(errors.branch.message)}{" "}
						</p>
					</div>
					{/* end branch  */}

					{/* start semester  */}
					<div className="field-container">
						<label htmlFor="semester">semester</label>
						<select
							{...register("semester", {
								validate: {
									blackList: function (fieldValue) {
										return fieldValue !== "semester" || "choose a semester";
									},
								},
							})}
							id="semester"
							required
						>
							<option hidden>semester</option>
							<option value="s1">s1</option>
							<option value="s2">s2</option>
							<option value="s3">s3</option>
							<option value="s4">s4</option>
						</select>
						<p className="error semester">
							{errors.semester && String(errors.semester.message)}
						</p>
					</div>
					{/* end semester  */}
				</div>

				<div className="flex gap-3 *:w-full">
					{/* start module  */}
					<div className="field-container">
						<label htmlFor="module">module</label>
						<input
							type="text"
							{...register("module", {
								required: {
									value: true,
									message: "Enter the module!!",
								},
							})}
							id="module"
							placeholder="ex: algebre 2"
						/>
						<p className="error">
							{errors.module && String(errors.module.message)}
						</p>
					</div>
					{/* end module  */}

					{/* start session  */}
					<div className="field-container">
						<label htmlFor="session">session</label>
						<select
							{...register("session", {
								validate: {
									blackList: function (fieldValue) {
										return fieldValue !== "session" || "choose a session!!";
									},
								},
							})}
							id="session"
						>
							<option hidden>session</option>
							<option value="cour">cour</option>
							<option value="td">td</option>
						</select>
						<p className="error"> {errors.session?.message} </p>
					</div>
					{/* end session  */}
				</div>

				{/* start title  */}
				<div className="field-container">
					<label htmlFor="title">title</label>
					<input
						type="text"
						{...register("title", {
							required: {
								value: true,
								message: "Enter the title!!",
							},
						})}
						id="title"
						placeholder="document title"
					/>
					<p className="error">
						{errors.title && String(errors.title.message)}
					</p>
				</div>
				{/* end title  */}

				{/* start path */}
				<div className="field-container">
					<label htmlFor="path">path</label>
					<input
						type="text"
						{...register("path", {
							required: {
								value: true,
								message: "Enter the path!!",
							},
						})}
						id="path"
						multiple={false}
					/>
					<p className="error">{errors.path && String(errors.path.message)}</p>
				</div>
				{/* end path */}

				<button type="submit">submit</button>
			</form>
			<div className="result">{resMsg}</div>
		</>
	) : (
		<NotAuth />
	);
};

export default Video;
