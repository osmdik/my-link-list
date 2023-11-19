type ButtonLinkType = {
	buttonName: string;
	buttonUrl: string;
	iconClass: string;
	external?: boolean;
};

const ButtonLink = (props: ButtonLinkType) => {
	const { buttonName, buttonUrl, iconClass, external = false } = props;
	return (
		<div className="mb-4">
			<a
				href={buttonUrl}
				className="block py-2 rounded border border-gray-500 text-gray-600 text-center tracking-widest"
				{...external ? { external: '_blank', rel: 'noopener noreferrer' } : {}}
			>
				<i className={`${iconClass} align-bottom`}></i> {buttonName}
			</a>
		</div>
	);
};

export default ButtonLink;
