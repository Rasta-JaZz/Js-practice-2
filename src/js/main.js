import { modals } from "./modules/modal"
import { forms } from "./modules/forms"
import formValidator from "./modules/formValidator"
import slider from "./modules/slider"

window.addEventListener("DOMContentLoaded", () => {
	modals(".button-design", ".popup-design", ".popup-close")
	modals(".button-consultation", ".popup-consultation", ".popup-design .popup-close")
	modals(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true, true)

	forms()

	formValidator()

	slider(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn")
	slider(".main-slider-item", "vertical")
})
