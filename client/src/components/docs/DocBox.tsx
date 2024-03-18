import { faArrowRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BoxParams {
	module: string;
	prof: string;
	isNew: boolean;
}

const DocBox = ({ module, prof, isNew }: BoxParams): JSX.Element => {
	return (
		<div
			className="relative group min-w-[300px] rounded-lg bg-gray-600/60 shadow-md shadow-[#eee3]
      sm:hover:-translate-y-1 duration-200 ease-linear"
		>
			{isNew && (
				<span className=" animate-ping absolute bg-red-500 w-3 h-3 rounded-full top-0 left-0"></span>
			)}
			<h4 className="text-right font-mono pr-1">
				<span className=" text-base text-teal-300">pr: </span>
				{prof || "Unknown"}
			</h4>
			<div className=" flex justify-center text-gray-300 py-6 text-5xl font-bold">
				<FontAwesomeIcon icon={faFolderOpen} />
			</div>
			<div className="relative ">
				<h4 className="relative py-2 px-2  w-fit text-white text-base sm:text-xl ">
					{module}
				</h4>
				<span className="absolute font-bold text-lg text-teal-300 group-hover:translate-x-1 ease-linear duration-200 right-2 top-1/2 -translate-y-1/2 ">
					<FontAwesomeIcon icon={faArrowRight} />
				</span>
			</div>
		</div>
	);
};

export default DocBox;
