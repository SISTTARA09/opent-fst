const PlayListInfo = ({ owner, module }) => {
	return (
		<div className="flex flex-col gap-3 ">
			<h2> {module} </h2>
			<p className="text-justify">
				provided by {owner} ipsum dolor sit amet consectetur adipisicing elit.
				Magni, at?{" "}
			</p>
		</div>
	);
};

export default PlayListInfo;
