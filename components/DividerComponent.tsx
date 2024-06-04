const DividerComponent = ({ header }: { header: string }) => {
	return (
		<div className="flex flex-row items-baseline kodchasan-bold text-plum text-3xl mb-4 md:mb-8 lg:mb-18">
			<div className="md:mr-12 mr-6">
				<h2>{header}</h2>
			</div>
			<div className="grow">
				<hr className="border-sky border-2 invisible md:visible" />
			</div>
		</div>
	);
};

export default DividerComponent;
