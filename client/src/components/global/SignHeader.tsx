import { NavLink } from "react-router-dom";

const Welcome = () => {
	return (
		<header className="bg-main/20 flex justify-between items-center py-2 px-3">
			<div className="flex">
				<span className="w-fit pl-1 text-main text-4xl uppercase">
					fst
					<span className="font-mono text-base lowercase text-white">
						Talib
					</span>
				</span>
				<div className="self-end  absolute left-full flex flex-col"></div>
			</div>
			<nav className=" flex gap-3">
				<NavLink
					className="hover:text-main p-2 duration-200 font-semibold"
					to={"/auth/signin"}
				>
					Sign-in
				</NavLink>
				<NavLink
					className="font-semibold border-[1.6px] rounded-lg border-main hover:border-white duration-200 p-2"
					to={"/auth/signup"}
				>
					Sign-up
				</NavLink>
			</nav>
		</header>
	);
};

export default Welcome;
