import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BoxParams {
	module: string;
	type?: string;
}

const Box = ({ module }: BoxParams): JSX.Element => {
	return (
		<div
			className="group min-w-[300px]  bg-stone-200/50 bg shadow-md shadow-[#eee3]
      sm:hover:-translate-y-1 duration-200 ease-linear"
		>
			<div className=" flex justify-center py-6 ">
				<img
					src="../../../public/svgs/pdf.svg"
					className=" h-full w-20 object-contain"
				/>
			</div>
			<div className="relative bg-gray-200/90  bg-stone-600">
				<h4
					className="relative py-2 px-2  w-fit text-white text-base sm:text-xl z-10 tr
       before:absolute before:h-full before:w-[130%] before:top-0 before:left-0 before:bg-stone-900 before:z-[-1]"
				>
					{module}
					<span className="absolute top-0 h-full block w-10 -right-10 bg-stone-800 -skew-x-[30deg]  z-[-1]"></span>
				</h4>
				<span className="absolute font-bold text-lg group-hover:translate-x-1 ease-linear duration-200 right-2 top-1/2 -translate-y-1/2 ">
					<FontAwesomeIcon icon={faArrowRight} />
				</span>
			</div>
		</div>
	);
};

export default Box;
