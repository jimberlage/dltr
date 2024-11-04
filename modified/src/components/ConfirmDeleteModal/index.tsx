import "@/components/ConfirmDeleteModal/index.css";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const ConfirmDeleteModal = (props: {
	action?: "Delete" | "Remove";
	label?: string;
	name?: string;
	onDelete?: () => void;
	onUpdateShowModal?: (value: boolean) => void;
	showModal?: boolean;
}): JSX.Element => {
	const action = props.action || "Delete";
	const name = props.name || "";

	return (
		<Modal
			actions={
				<Button
					onClick={() => {
						if (props.onDelete) {
							props.onDelete();
						}
					}}
					variant="destructive"
				>
					{action}
				</Button>
			}
			icon="ExclamationCircleIcon"
			iconClassName="delete-modal__icon"
			onUpdateShowModal={props.onUpdateShowModal}
			showModal={props.showModal}
			title={
				<div className="delete-modal__title">
					{action} {props.label || name}
				</div>
			}
		>
			<span className="delete-modal__message">
				Are you sure you want to {action.toLowerCase()} {name}?
			</span>
		</Modal>
	);
};

export default ConfirmDeleteModal;
