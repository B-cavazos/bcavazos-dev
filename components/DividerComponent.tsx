const DividerComponent = ({ header }: { header: string }) => {
	return (
		<div className="flex flex-row items-baseline kodchasan-bold text-plum text-3xl">
			<div className="md:mr-12 mr-6">
				<h3>{header}</h3>
			</div>
			<div className="grow">
				<hr className="border-sky border-2" />
			</div>
		</div>
	);
};

export default DividerComponent;
