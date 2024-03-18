import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//
const App = () => {
	const client = new QueryClient(); // creating new client
	return (
		<div className="relative bg-bgDark text-slate-50">
			<QueryClientProvider client={client}>
				<Router />
			</QueryClientProvider>
		</div>
	);
};

export default App;
