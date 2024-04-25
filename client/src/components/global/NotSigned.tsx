import { useForm } from "react-hook-form";
import { type UserForm } from "../../types/user";
// import { useNavigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { IsSignedContext } from "../../contexts/AuthContext";
// import { authenticateUser } from "../../utils/auth-utils";
/// imports

const NotSigned = () => {
	// rhf
	const { register, formState, handleSubmit } = useForm<UserForm>();
	const { errors } = formState;
	//

	// submit function
	async function onSubmit(payload: UserForm) {
		localStorage.setItem("OPEN_FST_UD", JSON.stringify(payload));
		location.reload();
	}
	///

	return (
		<>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h1 className=" pl-3">Sign In</h1>

				{/* start branch  */}
				<div className="field-container">
					<label htmlFor="branch">branch</label>
					<select
						{...register("branch", {
							validate: {
								blackList: function (value) {
									if (value === "choose") return "choose a branch";
								},
							},
						})}
						id="branch"
					>
						<option hidden>choose</option>
						<option value="mip">mip</option>
						<option value="bcg">bcg</option>
						<option value="gegm">gegm</option>
					</select>
					<p className="error"> {errors.branch?.message} </p>
				</div>
				{/* end branch  */}

				{/* start semester  */}
				<div className="field-container">
					<label htmlFor="semester">semester</label>
					<select
						{...register("semester", {
							validate: {
								blackList: function (value) {
									if (value === "choose") return "choose a semester";
								},
							},
						})}
						id="semester"
					>
						<option hidden>choose</option>
						<option value="s1">s1</option>
						<option value="s2">s2</option>
						<option value="s3">s3</option>
						<option value="s4">s4</option>
					</select>
					<p className="error"> {errors.semester?.message} </p>
				</div>
				{/* end semester  */}
				<button
					type="submit"
					className="rounded-lg bg-main hover:bg-main/90 font-semibold w-fit px-2 py-1 ml-3 capitalize"
				>
					sign-in
				</button>
			</form>
		</>
	);
};

export default NotSigned;
