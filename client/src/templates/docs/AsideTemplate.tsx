// import { NavLink } from "react-router-dom";
// import { docsSemestres } from "../../branchesData";
// import _ from "lodash";
// const Aside = () => {
// 	const handleShowHide = (id) => {
// 		const parent = _.find(docsSemestres, { id });
// 		return (parent.isShow = !parent.isShow);
// 	};
// 	///
// 	return (
// 		<aside
// 			className="fixed bottom-0 flex z-20 justify-evenly w-screen md:sticky md:top-0 md:basis-1/3 md:h-screen md:justify-start md:pt-32 md:gap-2
// 	  md:flex-col md:max-w-[200px] md:z-0 bg-transparent md:bg-stone-800"
// 		>
// 			{docsSemestres.map((branch) => {
// 				const { id, name, semestres, isShow } = branch;
// 				return (
// 					<div key={id} className="group  flex flex-col-reverse md:flex-col">
// 						<NavLink
// 							to="#"
// 							className="text-center py-1 bg-stone-800 w-[33vw] md:w-full group-gr relative
// 						 md:py-[1px] block font-semibold"
// 							onClick={() => handleShowHide(id)}
// 						>
// 							<span
// 								className=" absolute right-2  top-1/2 -translate-y-1/2
// 						 content-[url('/svgs/up.svg')] w-5 rotate-180"
// 							></span>
// 							{name}
// 						</NavLink>
// 						{isShow && (
// 							<div
// 								id="semestre"
// 								className=" bg-stone-800 flex flex-col overflow-hidden pt-0.5 gap-1 text-center text-sm"
// 							>
// 								{/* semestres map  */}
// 								{semestres.map((semestre) => {
// 									const { id, name, path } = semestre;
// 									return (
// 										<NavLink
// 											key={id}
// 											to={path}
// 											className="w-5/6 aria-[current='page']:text-main font-semibold capitalize m-auto rounded"
// 										>
// 											{name}
// 										</NavLink>
// 									);
// 								})}
// 								{/* semestres map  */}
// 							</div>
// 						)}
// 					</div>
// 				);
// 			})}
// 		</aside>
// 	);
// };

// export default Aside;
