import { administrationData } from "../../components-data/home-data";
const Administration = () => {
	return (
		<section id="Administration">
			<h1>Administration</h1>
			<div className="container grid grid-cols-auto py-9 m-auto gap-7">
				{administrationData.map((freind) => {
					const {
						id,
						imgURL,
						contact,
						assignement,
						homeLand,
						fullName,
						description,
					} = freind;
					return (
						<div
							key={id}
							className="box border  border-zinc-700 relative pt-6 
           rounded-md ease-linear duration-200
           shadow hover:shadow-zinc-500"
						>
							<div className=" relative py-2 flex gap-5  px-3 items-center">
								<img
									src={imgURL}
									className=" w-14 h-14 rounded-xl inline"
									alt="[profile]"
								/>
								<h2 className="inline">{fullName}</h2>
								<span className="absolute -translate-x-1/2 h-px w-[30%] bottom-0 left-1/2 bg-slate-400"></span>
							</div>
							<div className="info">
								<div className="flex gap-2 pt-2 pl-3">
									<span className="text-gray-400 capitalize"> contact:</span>
									<span>{contact}</span>
								</div>
								<div className="flex gap-2 pt-2 pl-3">
									<span className="text-gray-400 capitalize">Assignment:</span>
									<span>{assignement}</span>
								</div>
								<div className="flex gap-2 pt-2 pl-3">
									<span className="text-gray-400 capitalize">homeLand:</span>
									<span>{homeLand}</span>
								</div>
								<span className="absolute -translate-x-1/2 h-px w-[30%] bottom-[24%] left-1/2 bg-slate-400"></span>
								<p className="py-3 pl-2 capitalize">{description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Administration;
