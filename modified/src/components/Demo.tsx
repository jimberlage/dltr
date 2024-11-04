import { useState } from "react";
import Button from "./Button";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const Demo = (): JSX.Element => {
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<>
			<Button onClick={() => setShouldShow(true)} variant="destructive">
				Delete
			</Button>
			<ConfirmDeleteModal
				name="foo"
				onDelete={() => {
					// TODO: Something more interesting
					console.log("Deleted");

					setShouldShow(false);
				}}
				onUpdateShowModal={(shouldShowNow) => setShouldShow(shouldShowNow)}
				showModal={shouldShow}
			/>
		</>
	);
};

export default Demo;
