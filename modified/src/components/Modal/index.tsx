import Button from "@/components/Button";
import Icon from "@/components/Icon";
import "@/components/Modal/index.css";
import type { Icon as IconType } from "@/types/icon";
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const getFocusableElements = (element: HTMLElement | null): HTMLElement[] => {
	const focusableQuery =
		'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';

	if (!element) {
		return [];
	}

	return Array.from(element.querySelectorAll(focusableQuery));
};

const focusOnFirstFocusable = (element: HTMLElement | null) => {
	const focusableElements = getFocusableElements(element);
	if (focusableElements.length === 0) {
		return;
	}

	focusableElements[0].focus();
};

const Modal = (props: {
	actions?: ReactNode;
	autoClose?: boolean;
	children?: ReactNode;
	hideCloseButton?: boolean;
	icon?: IconType;
	iconClassName?: string;
	onUpdateShowModal?: (value: boolean) => void;
	showModal?: boolean;
	title?: ReactNode;
}): JSX.Element | null => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (props.showModal) {
			focusOnFirstFocusable(modalRef.current);
		}

		document.body.classList.toggle(
			"p-modal__stop-bg-scroll",
			Boolean(props.showModal),
		);
	}, [props.showModal]);

	return (
		<>
			{createPortal(
				<CSSTransition
					appear={true}
					enter={true}
					exit={true}
					classNames={{
						enter: "modal-enter-from",
						enterActive: "modal-enter-active",
						enterDone: "modal-enter-to",
						exit: "modal-leave-from",
						exitActive: "modal-leave-active",
						exitDone: "modal-leave-to",
					}}
					in={Boolean(props.showModal)}
					mountOnEnter={true}
					nodeRef={modalRef}
					timeout={{
						enter: 128,
						exit: 128,
					}}
					unmountOnExit={true}
				>
					<div
						className="p-modal"
						aria-labelledby="modal-title"
						aria-modal="true"
						ref={modalRef}
						role="dialog"
						tabIndex="0"
					>
						<div className="p-modal__container">
							<div className="p-modal__background" aria-hidden="true" />
							<div className="p-modal__card">
								<div className="p-modal__header">
									<div className="p-modal__tile-icon-group">
										{props.icon && (
											<Icon
												className={`p-modal__icon ${props.iconClassName}`}
												icon={props.icon}
											/>
										)}
										<span className="p-modal__title">{props.title}</span>
									</div>
									{!props.hideCloseButton && (
										<Button
											className="p-modal__x-button"
											flat
											icon="XMarkIcon"
											onClick={() => {
												if (props.onUpdateShowModal) {
													props.onUpdateShowModal(false);
												}
											}}
											small
										/>
									)}
								</div>
								<div className="p-modal__body">{props.children}</div>
								{props.actions && (
									<div className="p-modal__footer">
										{props.actions}
										{!props.hideCloseButton && (
											<Button
												className="p-modal__close-button"
												onClick={() => {
													if (props.onUpdateShowModal) {
														props.onUpdateShowModal(false);
													}
												}}
											>
												Close
											</Button>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</CSSTransition>,
				document.getElementById("p-modal-teleport-target")!,
			)}
		</>
	);
};

export default Modal;
