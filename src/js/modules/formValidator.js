const formValidator = () => {
	const phoneInputs = document.querySelectorAll('input[name="phone"]'),
		userEmail = document.querySelectorAll('input[name="email"]'),
		userComment = document.querySelectorAll('textarea[name="message"]'),
		userName = document.querySelectorAll('input[name="name"]')

	const forms = [phoneInputs, userEmail, userComment, userName]

	const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	const cyrillicReg = /^[а-яА-ЯёЁ0-9]+$/

	const span = document.createElement("span")
	span.style.color = "red"

	const error = {
		email: "Некорректный email",
		cyrillic: "Допустимы только русские символы",
	}

	forms.forEach((arr) => {
		arr.forEach((elem) => {
			switch (elem.name) {
				case "email":
					elem.addEventListener("change", () => {
						if (!emailReg.test(elem.value)) {
							span.textContent = error.email
							elem.parentNode.insertBefore(span, elem)
						} else {
							span.remove()
						}
					})
					break
				case "phone":
					elem.addEventListener("input", () => {
						elem.value = isNaN(+elem.value) ? "" : +elem.value
					})
				default:
					elem.addEventListener("change", () => {
						if (!cyrillicReg.test(elem.value)) {
							span.textContent = error.cyrillic
							elem.parentNode.insertBefore(span, elem)
						} else {
							span.remove()
						}
					})
					break
			}
		})
	})
}

export default formValidator
