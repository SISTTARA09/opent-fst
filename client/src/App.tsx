import { useEffect } from "react";
import Router from "./Router";

const App = () => {
	// protect routes from direct navigating
	useEffect(() => {
		if (
			!location.pathname.includes("/auth") &&
			!location.pathname.includes("/welcome")
		) {
			localStorage.setItem("path", location.pathname);
		}
	});
	///

	return (
		<div className="relative bg-bgDark text-slate-50">
			<Router />
		</div>
	);
};

export default App;
