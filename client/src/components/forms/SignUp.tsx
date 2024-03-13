import { useForm } from "react-hook-form";
import { type UserForm } from "../../types/user";
import { authenticateUser } from "./controllers";
// imports

let renderCount = 0;

async function onSubmit(payload: UserForm) {
	const response = await authenticateUser("signup", payload);
	console.log(response);
}

const SignUp = () => {
	const { register, formState, handleSubmit } = useForm<UserForm>();
	const { errors } = formState;
	renderCount++;
	return (
		<>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h1 className=" pl-3">Sign Up {renderCount / 2}</h1>
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
					<p className="error">{errors.email?.message}</p>
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
			</form>
		</>
	);
};

export default SignUp;
