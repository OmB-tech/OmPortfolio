export function animateScroll(): void {
  // Function to check if an element is in the viewport
  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    )
  }

  // Function to handle scroll-triggered animations
  const handleScrollAnimations = (): void => {
    const animatedElements = document.querySelectorAll<HTMLElement>(".animate-on-scroll")

    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate-active")
      }
    })
  }

  // Attach scroll listener
  window.addEventListener("scroll", handleScrollAnimations)

  // Initial run to animate elements already in view
  setTimeout(handleScrollAnimations, 100)
}
