import { useForm } from "react-hook-form";
import { type UserForm } from "../../types/user";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { IsAuthContext } from "../../contexts/AuthContext";
import { authenticateUser } from "../../utils/auth-utils";
// imports

// on submit
async function onSubmit(payload: UserForm) {
	const data = await authenticateUser("signup", payload);
	if (data.success) {
		Object(document).querySelector("#success").innerHTML =
			"<h3>you recieved a email, verify it:) </h3>";
	}
	if (data.error) {
		Object(document).querySelector(`.error.${data.error.type}`).textContent =
			data.error?.message;
	}
}
///

const SignUp = () => {
	// rhf
	const { register, formState, handleSubmit } = useForm<UserForm>();
	const { errors } = formState;
	///

	// if user is signed
	const { isAuth: isSigned } = useContext(IsAuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (isSigned) navigate("/");
	});
	///

	return (
		isSigned === false && (
			<>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<h1 className=" pl-3">Sign Up </h1>
					<div className=" flex gap-3">
						{/* start first name */}
						<div className="field-container">
							<label htmlFor="fName">first name</label>
							<input
								id="fName"
								{...register("fName", {
									required: {
										value: true,
										message: "Enter your first name!!",
									},
									minLength: {
										value: 3,
										message: "Enter 3 chars or more",
									},
								})}
							/>
							<p className="error"> {errors.fName?.message} </p>
						</div>
						{/* end first name */}

						{/* start last name */}
						<div className="field-container">
							<label htmlFor="lName">last name</label>
							<input
								id="lName"
								{...register("lName", {
									required: {
										value: true,
										message: "Enter your last name!!",
									},
									minLength: {
										value: 3,
										message: "Enter 3 chars or more",
									},
								})}
							/>
							<p className="error"> {errors.lName?.message} </p>
						</div>
						{/* end last name */}
					</div>

					{/* start email  */}
					<div className="field-container">
						<label htmlFor="email">email</label>
						<input
							type="email"
							{...register("email", {
								required: {
									value: true,
									message: "Enter your email",
								},
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "Enter a valid email!!",
								},
								// check if the email is available
							})}
							id="email"
						/>
						<p className="error email">{errors.email?.message}</p>
					</div>
					{/* end email  */}

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

					{/* start password  */}
					<div className="field-container">
						<label htmlFor="password">password</label>
						<input
							type="password"
							{...register("password", {
								required: {
									value: true,
									message: "enter your password",
								},
								minLength: {
									value: 6,
									message: "Enter at least 6!!",
								},
							})}
							id="password"
						/>
						<p className="error"> {errors.password?.message} </p>
					</div>
					{/* end branch  */}

					<button
						type="submit"
						className="w-fit font-semibold bg-main hover:bg-main/90  rounded-lg px-2 py-1 ml-3 capitalize"
					>
						register
					</button>
					{/*already registered */}
					<p className=" text-center">
						already registered ?
						<NavLink to="/auth/signin" className="font-semibold text-main">
							{" "}
							sign-in
						</NavLink>
					</p>
					{/*already registered */}
				</form>
				<div className="w-fit m-auto p-6" id="success"></div>
			</>
		)
	);
};

export default SignUp;
