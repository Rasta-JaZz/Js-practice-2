import { modals } from "./modules/modal"
import { forms } from "./modules/forms"
import formValidator from "./modules/formValidator"

window.addEventListener("DOMContentLoaded", () => {
	modals(".button-design", ".popup-design", ".popup-close")

	modals(".button-consultation", ".popup-consultation", ".popup-close")

	forms()

	formValidator()
})
