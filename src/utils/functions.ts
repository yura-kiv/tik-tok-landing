export const handleSmoothScroll = (
  event: React.MouseEvent<HTMLAnchorElement>
) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  const targetElement = targetId ? document.getElementById(targetId) : null;

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};
