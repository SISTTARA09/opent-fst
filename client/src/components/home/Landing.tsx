const Landing = () => {
	return (
		<section
			id="landing"
			className="relative flex h-screen bg-center bg-cover bg-[url('../imgs/landingdark.png')]"
		>
			<span className="absolute bg-gradient-to-r  from-[#00000022] to-[#00000033] top-0 left-0 bottom-0 right-0"></span>
			<div className=" landing container sm:text-lg md:text-xl lg:text-2xl text-white lg:pr-24">
				<h1>welcome To fst Settat</h1>
				<p className="text-white text-justify font-semibold py-5 px-2 md:px-7 ">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
					distinctio dolorem temporibus assumenda quibusdam magnam eum
					consectetur, nam, esse labore porro quos accusantium illo voluptatibus
					consequatur deserunt est delectus neque.
				</p>
				<p className=" text-white text-justify font-semibold py-5 px-2 md:px-7 ">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
					distinctio dolorem temporibus assumenda quibusdam magnam eum
					consectetur, nam, esse labore porro quos accusantium illo voluptatibus
					consequatur deserunt est delectus neque.
				</p>
			</div>
		</section>
	);
};

export default Landing;
