//
//
//

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export function Introduction() {
	//
	return (
		<section className="px-6 max-h-screen h-screen overflow-hidden">
			<div className="flex flex-col space-y-10 h-full justify-center items-center">
				<div className="flex flex-col">
					<p className="font-roboto-mono text-lg font-bold text-dark-blue">Hi, my name is</p>
					<h1 className="text-4xl w-full font-black tracking-tight text-dark-blue dark:text-light-blue">
						Jet Joseph.
					</h1>
					<h3 className="text-xl py-1 font-medium tracking-tight text-dark-blue">Aspiring Web Developer</h3>
					<p className="py-4 text-dark-blue leading-tight">
						I am a budding web developer with a passion for crafting robust and efficient web solutions.
					</p>
				</div>
				<div className="flex space-x-5 self-start">
					<FontAwesomeIcon size="3x" icon={faSquareGithub} className="text-dark-blue dark:text-light-blue" />
					<FontAwesomeIcon size="3x" icon={faLinkedin} className="text-dark-blue dark:text-light-blue" />
					<FontAwesomeIcon size="3x" icon={faFacebook} className="text-dark-blue dark:text-light-blue" />
				</div>
			</div>
		</section>
	);
}
