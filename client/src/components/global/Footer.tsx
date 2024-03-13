import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faP, faS } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
	return (
		<footer id="footer" className="  bg-mainBg">
			<div className="container m-auto flex h-[40vh] items-center justify-center ">
				<div className="basis-full pl-2 sm:pl-10">
					{[
						["Home", "/"],
						["Docs", "/docs"],
						["cours", "/cours"],
						["About", "/about"],
					].map(([title, path], index) => {
						return (
							<NavLink
								className="font-semibold flex flex-col w-fit   text-black hover:pl-1 ease-linear duration-150 py-1"
								key={index}
								to={path}
							>
								{title}
							</NavLink>
						);
					})}
					<div className="socials">
						<h4 className="py-3  text-bgDark">dev Contact: </h4>
						<a
							href="mailto:suitablepanther@gmail.com"
							className="text-yellow-500 text-xl p-2"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
						<NavLink
							to="https://api.whatsapp.com/message/AGDJL622YGLRB1/?autoload=1&app_absent=0"
							className="text-green-500 text-xl p-2"
						>
							<FontAwesomeIcon icon={faWhatsapp} />
						</NavLink>
						<NavLink
							to="https://instagram.com/panthersuit"
							className="text-pink-500 text-xl p-2"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</NavLink>
						<NavLink
							to="https://sisttara.com"
							className=" text-bgDark text-xl"
						>
							<FontAwesomeIcon icon={faS} />
							<FontAwesomeIcon icon={faP} />
						</NavLink>
					</div>
				</div>
				<div className="relative basis-full h-full flex justify-center items-center">
					<span className="absolute bg-bgDark w-1 h-1/2 left-0 top-1/2 -translate-y-1/2 "></span>
					<div className=" grow max-w-[350px] flex flex-col gap-1">
						<h4 className="p-3  text-black">subscribe;</h4>
						<input
							type="email"
							name="email"
							className="border-0 focus:border-0 rounded-sm p-1"
							placeholder="e-mail@example.ex"
						/>
						<button
							type="submit"
							className=" focus:border-[2px] w-fit self-end font-semibold bg-bgDark p-1 rounded-sm capitalize"
						>
							subscribe
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
