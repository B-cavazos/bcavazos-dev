import { HomeCopy } from "@/config/site";

function AboutBio() {
	return (
		<div className="flex flex-col-reverse ml-12 mt-12">
			<h3 className="text-4xl text-end text-lilac lowercase kodchasan-bold mt-4 mb-2 mr-4">
				Who is She?
			</h3>
			<div className="mr-12">
				<p>
					{HomeCopy.description[0]}
					<br />
					<br />
					{HomeCopy.description[1]}
				</p>
			</div>
		</div>
	);
}

export default AboutBio;

//add scroll to text when screen size gets too small before breakpoint
