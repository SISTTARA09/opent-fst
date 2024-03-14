import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContext from "./contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthContext>
			<App />
		</AuthContext>
	</React.StrictMode>
);
