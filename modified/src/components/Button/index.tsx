import type { MouseEventHandler, ReactNode } from "react";
import "@/components/Button/index.css";
import type { Icon as IconType } from "@prefecthq/prefect-design/src/types/icon.js";
import Icon from "@/components/Icon";
import LoadingIcon from "@/components/LoadingIcon";

const sizes = ["default", "icon", "lg", "sm"] as const;

type Size = (typeof sizes)[number];

const variants = [
	"default",
	"destructive",
	"ghost",
	"outline",
	"link",
] as const;

type Variant = (typeof variants)[number];

interface IButtonProps {
	children: ReactNode;
	className?: string;
	dangerous?: boolean;
	disabled?: boolean;
	flat?: boolean;
	icon?: IconType;
	iconAppend?: IconType;
	loading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	primary?: boolean;
	size?: Size;
	solid?: boolean;
	solidAppend?: boolean;
	variant?: Variant;
	selected?: boolean;
	small?: boolean;
}

const getVariant = (props: IButtonProps): Variant => {
	// Shim for backwards compatibility.
	if (props.dangerous || props.variant === "destructive") {
		return "destructive";
	}

	if (props.primary || props.variant === "default") {
		return "default";
	}

	if (props.flat || props.variant === "ghost") {
		return "ghost";
	}

	if (props.variant === "link") {
		return "link";
	}

	// TODO: Should default be the last option here?
	return "outline";
};

const getSize = (props: IButtonProps): Size => {
	// Shim for backwards compatibility.
	if (props.size) {
		return props.size;
	}

	if (props.small) {
		return "sm";
	}

	return "default";
};

const getIconSize = (size: Size): "default" | "small" | "large" => {
	if (size === "sm") {
		return "small";
	}

	if (size === "lg") {
		return "large";
	}

	return "default";
};

const Button = (props: IButtonProps) => {
	const isDisabled = props.disabled || props.loading;
	const variant = getVariant(props);
	const size = getSize(props);
	const isIconButton = Boolean(props.icon) && !props.children;

	const classList: string[] = [];

	if (size === "default") {
		classList.push("px-3", "py-1.5");
	}

	if (size === "icon" || isIconButton) {
		classList.push("h-10", "w-10");
	}

	if (size === "lg") {
		classList.push("h-11", "rounded-md", "px-8");
	}

	if (size === "sm") {
		classList.push("text-sm", "px-2", "py-1");

		if (isIconButton) {
			classList.push("max-h-[30px]", "max-w-[30px]");
		}
	}

	return (
		<button
			aria-selected={Boolean(props.selected)}
			className={`p-button p-button--${variant} ${classList.join(" ")} ${props.className || ""}`}
			onClick={(event) => {
				if (!isDisabled && props.onClick) {
					props.onClick(event);
				}
			}}
			type="button"
		>
			<div className="p-button__content">
				{props.icon && (
					<Icon
						className="p-button__icon"
						icon={props.icon}
						size={getIconSize(size)}
						solid={props.solid}
					/>
				)}
				{props.children}
				{props.iconAppend && (
					<Icon
						className="p-button__icon"
						icon={props.icon}
						size={getIconSize(size)}
						solid={props.solidAppend || props.solid}
					/>
				)}
			</div>
			{props.loading && <LoadingIcon className="p-button__loading-icon" />}
		</button>
	);
};

export default Button;
