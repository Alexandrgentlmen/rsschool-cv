document.addEventListener('DOMContentLoaded', () => {

	const accordions = document.querySelectorAll('.experience__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.experience__plus');
			const content = self.querySelector('.experience__accardeon-content');
			console.log('accardions');
			self.classList.toggle('open');
		})
	})
})