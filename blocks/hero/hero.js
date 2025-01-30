export default function decorate(block) {
  // Find the hero block
  const heroBlock = block.querySelector('.hero'); 

  // Find the text and image blocks inside hero block
  const textBlock = heroBlock.querySelector('div:first-child'); // Text content block
  const imageBlock = heroBlock.querySelector('div:nth-child(2)'); // Image content block
  const emptyBlock = heroBlock.querySelector('div:nth-child(3)'); // Empty content block

  // Step 1: Add classes to each part
  textBlock.classList.add('hero-text');  // Add 'hero-text' class to the text block
  imageBlock.classList.add('hero-image'); // Add 'hero-image' class to the image block
  emptyBlock.classList.add('hero-empty'); // Add 'hero-empty' class to the empty block

  // Step 2: Add flex layout to the hero block
  heroBlock.classList.add('hero-layout'); // Apply flex layout to hero block

  // Optionally, you can add any other decorations or logic here as per your requirement
}
