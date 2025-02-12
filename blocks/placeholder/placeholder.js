import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
    const placeholders = await fetchPlaceholders('');

    const preElement = document.createElement('pre');
    preElement.textContent = JSON.stringify(placeholders, null, 2);

    block.appendChild(preElement);
}