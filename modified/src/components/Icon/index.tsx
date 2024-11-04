import * as prefectIcons from "@/components/Icon/icons";
import type { Icon as IconType, PrefectIcon } from "@/types/icon";
import * as outlinedHeroIcons from "@heroicons/react/24/outline/esm/index";
import * as solidHeroIcons from "@heroicons/react/24/solid/esm/index";

const PREFECT_ICON_KEYS = Object.keys(prefectIcons);

const validateIsPrefectIcon = (iconName: IconType): iconName is PrefectIcon => {
	return PREFECT_ICON_KEYS.includes(iconName);
};

const Icon = (props: {
	className?: string;
	icon: IconType;
	size?: "small" | "default" | "large" | "sm" | "lg";
	solid?: boolean;
}): JSX.Element => {
	const iconSizeClass = props.size && `p-icon--${props.size}`;
	const className = `p-icon ${iconSizeClass || ""} ${props.className || ""}`;

	if (validateIsPrefectIcon(props.icon)) {
		const Icon = prefectIcons[props.icon];

		return <Icon className={className} />;
	}

	if (props.solid) {
		const Icon = solidHeroIcons[props.icon];

		return <Icon className={className} />;
	}

	const Icon = outlinedHeroIcons[props.icon];

	return <Icon className={className} />;
};

export default Icon;
