export default function lazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy')

  const observerFn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target
        const dataSrc = image.getAttribute('data-src')

        if (dataSrc) {
          image.setAttribute('src', dataSrc)
          image.removeAttribute('data-src')
          observerFn.unobserve(image)
        }
      }
    })
  })

  lazyImages.forEach(image => observerFn.observe(image))
}