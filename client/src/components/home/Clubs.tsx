import { clubsData } from "../../components-data/home-data";

const Clubs = () => {
	return (
		<section id="clubs">
			<h1 className="text-center">Clubs</h1>
			<p className="text-center pt-9 w-[90vw] text-lg font-semibold sm:w-[600px] m-auto">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
				mollitia quisquam aspernatur voluptatem, officiis atque? Doloremque
				maiores ea quidem fuga deleniti eos, ullam voluptate .
			</p>
			<ul className="container grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-5 pt-14">
				{clubsData.map((club) => {
					const { id, name, members, logo } = club;
					return (
						<li
							key={id}
							className="relative flex flex-col justify-between h-[300px] sm:h-[450px] rounded-xl
                text-white max-w-[350px] border-[5px] border-gray-300"
						>
							<img
								src={logo}
								className="absolute p-0.5 object-cover h-full rounded-lg z-0 w-full"
								alt="[clubName]"
							/>
							<h3 className="z-10 pl-2"> {name} </h3>
							<span className="z-10 self-end pr-3 font-semibold text-lg">
								{members} member
							</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Clubs;
