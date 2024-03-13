import { branchesData } from "../../components-data/home-data";

const Branches = () => {
	return (
		<section id="branches">
			<h1 className="text-center pr-3">Branches</h1>
			<p className="text-center pt-9 w-[90vw] text-lg font-semibold sm:w-[600px] m-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
				voluptatibus ullam, similique itaque molestias officia aliquam est omnis
				nam delectus ipsam.
			</p>
			<div className="container flex flex-wrap lg:flex-nowrap gap-4 py-14">
				{branchesData.map((branch) => {
					const { id, name, prospects, successAverage, description, imgURL } =
						branch;
					return (
						<div
							key={id}
							className="sm:basis-1/3 grow flex flex-col border border-gray-700 rounded-md"
						>
							<div className="img-container aspect-video w-full h-[50%]">
								<img
									src={imgURL}
									className=" rounded-t-md h-full w-full object-cover "
									alt="[branch]"
								/>
							</div>
							<div className="flex pt-2 flex-col gap-1">
								<span>
									<label className="pl-1 text-gray-400 capitalize">
										Branch:
									</label>
									{name}
								</span>
								<span>
									<label className="pl-1 text-gray-400 capitalize">
										success average:
									</label>
									{successAverage}%
								</span>
								<span className="pl-1 text-gray-400 capitalize">
									prospects:
									{prospects.map((pro) => (
										<li className="pl-10 text-slate-50" key={pro}>
											{pro},
										</li>
									))}
								</span>
								<p className="first-letter:pl-2 pl-1 text-gray-400">
									{description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Branches;
