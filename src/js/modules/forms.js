export function forms(state) {
	const form = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input")

	const message = {
		loading: "Загрузка...",
		success: "Спасибо! Скоро мы с вами свяжемся",
		fail: "Ошибка сервера...",
	}

	const postData = async (url, data) => {
		document.querySelector(".status").textContent = message.loading

		let res = await fetch(url, {
			method: "POST",
			body: data,
		})

		return await res.text()
	}

	const clearForm = () => {
		inputs.forEach((elem) => (elem.value = ""))
	}

	form.forEach((elem) => {
		elem.addEventListener("submit", (e) => {
			e.preventDefault()

			const statusMessage = document.createElement("div")
			statusMessage.classList.add("status")
			elem.appendChild(statusMessage)

			let formData = new FormData(elem)

			if (elem.getAttribute("data-calc") === "end") {
				for (let key in state) {
					formData.append(key, state[key])
				}
			}

			postData("assets/server.php", formData)
				.then((res) => {
					console.log("res :>> ", res)
					statusMessage.textContent = message.success
				})
				.catch(() => {
					statusMessage.textContent = message.fail
				})
				.finally(() => {
					clearForm()
					setTimeout(() => {
						statusMessage.remove()
					}, 5000)
				})
		})
	})
}
