import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Decorates the hero block to make text and image side by side
 * @param {Element} block The hero block element
 */
export default async function decorate(block) {
  // Step 1: Identify the text and image blocks
  const heroBlock = block.querySelector('.hero'); // Get the hero block
  const textBlock = heroBlock.querySelector('div:first-child'); // Get the first div (text)
  const imageBlock = heroBlock.querySelector('div:nth-child(2)'); // Get the second div (image)
  
  // Step 2: Add classes for styling
  textBlock.classList.add('hero-text');  // Add 'hero-text' class to the text block
  imageBlock.classList.add('hero-image'); // Add 'hero-image' class to the image block

  // Step 3: Apply flexbox layout (CSS will handle this)
  heroBlock.classList.add('hero-layout');  // Add 'hero-layout' class to apply flex layout

  // Your existing code (loading footer fragment) can go here if needed
}
