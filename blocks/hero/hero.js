export default async function decorate(block) {
  // Log the block to ensure we're working with the correct one
  console.log('Block:', block);

  // Find the first 'hero-wrapper' block within the passed block
  const heroWrapper = block.querySelector('.hero-wrapper');  // Correctly targeting the 'hero-wrapper'

  if (!heroWrapper) {
    console.log('Hero wrapper block not found.');
    return;
  }

  // Log the hero wrapper to inspect its structure
  console.log('Hero wrapper found:', heroWrapper);

  // Get the first three child divs inside the hero-wrapper block
  const childDivs = heroWrapper.querySelectorAll('div');

  if (childDivs.length < 3) {
    console.log('Expected 3 child divs, but found:', childDivs.length);
    return;
  }

  // Assign specific classes to each section (text, image, empty)
  const textBlock = childDivs[0];  // First div (Text block)
  const imageBlock = childDivs[1]; // Second div (Image block)
  const emptyBlock1 = childDivs[2]; // Third div (Empty block)

  // Add specific classes for styling
  textBlock.classList.add('hero-text');
  imageBlock.classList.add('hero-image');
  emptyBlock1.classList.add('hero-empty');

  // Apply the flex layout to the hero wrapper
  heroWrapper.classList.add('hero-layout');

  // Log to verify that the correct classes are added
  console.log('Classes added:', {
    textBlock: textBlock.className,
    imageBlock: imageBlock.className,
    emptyBlock1: emptyBlock1.className,
    heroWrapper: heroWrapper.className
  });
}
