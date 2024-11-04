const LoadingIcon = (props: {
	className?: string;
	size?: "default" | "large" | "small";
}): JSX.Element => {
	const size = props.size || "default";

	return (
		<div
			className={`p-loading-icon p-loading-icon--${size} ${props.className}`}
		>
			<div className="p-loading-icon__segment" />
			<div className="p-loading-icon__segment" />
			<div className="p-loading-icon__segment" />
			<div className="p-loading-icon__segment" />
		</div>
	);
};

export default LoadingIcon;
