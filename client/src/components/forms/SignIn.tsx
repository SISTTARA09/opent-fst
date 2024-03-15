import { useForm } from "react-hook-form";
import { type UserForm } from "../../types/user";
import { authenticateUser } from "./controllers";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { IsSignedContext } from "../../contexts/AuthContext";
// imports

const SignIn = () => {
	// rhf
	const { register, formState, handleSubmit } = useForm<UserForm>();
	const { errors } = formState;
	//

	// if user is signed
	const { isSigned } = useContext(IsSignedContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (isSigned) navigate("/");
	});
	///

	// submit function
	async function onSubmit(payload: UserForm) {
		const data = await authenticateUser("signin", payload);
		if (data.success) {
			// hard navigation to reset the auth
			return location.assign("/user/profile");
		}
		if (data.error) {
			Object(document).querySelector(`.error.${data.error.type}`).textContent =
				data.error?.message;
		}
	}
	///

	return (
		isSigned === false && (
			<>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<h1 className=" pl-3">Sign In</h1>

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
						<p className="error password">{errors.password?.message}</p>
					</div>
					{/* end branch  */}

					<button
						type="submit"
						className="rounded-lg bg-main hover:bg-main/90 font-semibold w-fit px-2 py-1 ml-3 capitalize"
					>
						sign-in
					</button>

					{/* not registered prompt */}
					<p className=" text-center">
						not registered ?
						<NavLink to="/auth/signup" className="font-semibold text-main">
							{" "}
							sign-up
						</NavLink>
					</p>
					{/* not registered prompt */}
				</form>
			</>
		)
	);
};

export default SignIn;
