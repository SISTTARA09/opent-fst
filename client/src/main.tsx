import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import AuthContext from "./contexts/AuthContext.tsx";
import React from "react";
import StudentContext from "./contexts/StudentContext.tsx";
import AuthContext from "./contexts/AuthContext.tsx";
/// imports

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthContext>
			<StudentContext>
				<App />
			</StudentContext>
		</AuthContext>
	</React.StrictMode>
);
