const Resume = () => {
	const pdfURL = "/Cavazos_resume_24.pdf";
	return (
		<div className=" flex flex-grow justify-center align-top h-screen">
			<iframe src={pdfURL} className="flex flex-grow h-screen" />
		</div>
	);
};

export default Resume;
