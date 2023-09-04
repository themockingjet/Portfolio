//
//
//

export function About() {
	return (
		<section className="flex flex-col h-auto px-6">
			<div className="flex space-x-4">
				<p className="font-semibold tracking-tighter text-2xl py-6">About Me</p>
				<hr className="flex-1 h-1 bg-black self-center"></hr>
			</div>
			<div className="flex flex-col space-y-6">
				<p className="">
					Hello, I'm Jet Joseph and I enjoy coding. I initially began exploring various fields in the IT industry,
					from Web Development to IT Operations Specialist. However, I realized that my true passion lies in web
					development.
				</p>
				<p className="">
					Fast-forward to today, I've been learning and building projects to improve my skills in back-end and
					front-end development. I'm currently looking for opportunities to work with other passionate developers.
				</p>
				<p className="">Here are the few technologies I've been working with recently:</p>

				<div className="flex flex-wrap">
					<div className="flex flex-wrap w-full h-full font-roboto-mono">
						<div className="basis-1/2 py-2">
							<p className="font-semibold">Languages</p>
							<ul className="list-disc list-inside">
								<li>JavaScript</li>
								<li>TypeScript</li>
								<li>HTML & CSS</li>
							</ul>
						</div>

						<div className="basis-1/2 py-2">
							<p className="font-semibold">Frameworks</p>
							<ul className="list-disc list-inside">
								<li>React</li>
								<li>Node.js</li>
								<li>Express</li>
								<li>Tailwind CSS</li>
							</ul>
						</div>

						<div className="basis-1/2 py-2">
							<p className="font-semibold">Databases</p>
							<ul className="list-disc list-inside">
								<li>MySQL</li>
								<li>MongoDB</li>
							</ul>
						</div>

						<div className="basis-1/2 py-2">
							<p className="font-semibold">Tools</p>
							<ul className="list-disc list-inside">
								<li>GitHub</li>
								<li>VS Code</li>
								<li>Postman</li>
							</ul>
						</div>

						<div className="basis-1/2">
							<p className="font-semibold">Others</p>
							<ul className="list-disc list-inside">
								<li>RESTful API</li>
								<li>JSON Web Tokens</li>
								<li>OAuth</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
