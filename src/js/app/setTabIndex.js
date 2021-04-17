/*
 * Remove menu nav links from the DOM
 */

export default function removeNavLinks() {
  const menuNavLinks = document.querySelectorAll('#menu a');

  menuNavLinks.forEach((el) => el.setAttribute('tabindex', '-1'));
}