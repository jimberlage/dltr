import Demo from "./components/Demo";

export const MODAL_TELEPORT_TARGET = "#p-modal-teleport-target";

const createTeleportTarget = () => {
	if (document.body.querySelector(MODAL_TELEPORT_TARGET)) {
		return;
	}

	const element = document.createElement("div");
	element.id = MODAL_TELEPORT_TARGET.slice(1);
	document.body.appendChild(element);
};

function App() {
	createTeleportTarget();

	return <Demo />;
}

export default App;
