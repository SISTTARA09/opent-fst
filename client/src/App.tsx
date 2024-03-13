import { useEffect } from "react";
import Router from "./Router";
import AuthContext from "./contexts/AuthContext";

const App = () => {
	useEffect(() => {
		localStorage.setItem("path", location.pathname);
	});

	return (
		<div className="relative bg-bgDark text-slate-50">
			<AuthContext>
				<Router />
			</AuthContext>
		</div>
	);
};

export default App;
