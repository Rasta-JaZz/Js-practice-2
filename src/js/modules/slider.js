const slider = (slides, dir, prev, next) => {
	let slideIndex = 1
	const items = document.querySelectorAll(slides)

	function showSlides(n) {
		if (n > items.length) slideIndex = 1
		if (n < 1) slideIndex = items.length

		items.forEach((elem) => {
			elem.classList.add("animated")
			elem.style.display = "none"
		})

		items[slideIndex - 1].style.display = "block"
	}

	showSlides(slideIndex)

	function nextSlide(n) {
		showSlides((slideIndex += 1))
	}

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next)

		prevBtn.addEventListener("click", () => {
			nextSlide(-1)
			items[slideIndex - 1].classList.remove("slideInRight")
			items[slideIndex - 1].classList.add("slideInLeft")
		})

		nextBtn.addEventListener("click", () => {
			nextSlide(1)
			items[slideIndex - 1].classList.remove("slideInLeft")
			items[slideIndex - 1].classList.add("slideInRight")
		})
	} catch (error) {
		console.log(error)
	}

	if (dir === "vertical") {
		setInterval(() => {
			nextSlide(1)
			items[slideIndex - 1].classList.add("slideInDown")
		}, 3000)
	} else {
		setInterval(() => {
			nextSlide(1)
			items[slideIndex - 1].classList.remove("slideInRight")
			items[slideIndex - 1].classList.add("slideInLeft")
		}, 3000)
	}
}

export default slider
