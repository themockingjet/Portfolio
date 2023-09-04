//
//
//

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export function Introduction() {
	return (
		<section className="px-6 max-h-screen h-screen ">
			<div className="flex flex-col space-y-10 h-full justify-center items-center">
				<div>
					<p className="pl-4 font-roboto-mono text-lg font-bold">Hi, my name is</p>
					<h1 className="text-5xl w-full font-black tracking-tight">Jet Joseph</h1>
					<h3 className="text-2xl py-2 font-bold tracking-tight">Aspiring Web Developer</h3>
					<p className="text-base py-2 tracking-tight">
						I am a budding web developer with a passion for crafting robust and efficient web solutions.
						Currently, I'm focused on honing my skills in front-end and back-end development, with a particular
						interest in creating seamless user experiences and optimizing website performance.
					</p>
				</div>
				<div className="flex space-x-5 self-start">
					<FontAwesomeIcon size="3x" icon={faSquareGithub} className="text-black dark:text-white" />
					<FontAwesomeIcon size="3x" icon={faLinkedin} className="text-black dark:text-white" />
					<FontAwesomeIcon size="3x" icon={faFacebook} className="text-black dark:text-white" />
				</div>
			</div>
		</section>
	);
}
