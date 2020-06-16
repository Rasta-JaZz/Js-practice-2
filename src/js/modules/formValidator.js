const formValidator = () => {
	const phoneInputs = document.querySelectorAll('input[name="phone"]'),
		userEmail = document.querySelectorAll('input[name="email"]'),
		userComment = document.querySelectorAll('textarea[name="message"]'),
		userName = document.querySelectorAll('input[name="name"]')

	const forms = [phoneInputs, userEmail, userComment, userName]

	const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	const cyrillicReg = /^[а-яА-ЯёЁ0-9]+$/

	forms.forEach((arr) => {
		arr.forEach((elem) => {
			switch (elem.name) {
				case "name":
					elem.addEventListener("change", () => {
						if (!cyrillicReg.test(elem.value)) return (elem.value = "")
					})
					break
				case "message":
					elem.addEventListener("change", () => {
						if (!cyrillicReg.test(elem.value)) return (elem.value = "")
					})
					break
				case "email":
					elem.addEventListener("change", () => {
						if (!emailReg.test(elem.value)) return (elem.value = "")
					})
					break
				case "phone":
					elem.addEventListener("input", () => {
						elem.value = isNaN(+elem.value) ? "" : +elem.value
					})
			}
		})
	})
}

export default formValidator
