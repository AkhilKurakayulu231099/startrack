export default async function decorate(block) {
  // Log the block to ensure we're working with the correct one
  console.log('Block:', block);

  // Find the 'hero' block directly, as the 'hero-wrapper' does not exist
  const heroBlock = block.querySelector('.hero block');

  if (!heroBlock) {
    console.log('Hero block not found.');
    return;
  }

  // Log the hero block to inspect its structure
  console.log('Hero block found:', heroBlock);

  // Get the first div inside the hero block (which contains the three sections)
  const childDivs = heroBlock.querySelectorAll('div > div');

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

  // Apply the flex layout to the hero block
  heroBlock.classList.add('hero-layout');

  // Log to verify that the correct classes are added
  console.log('Classes added:', {
    textBlock: textBlock.className,
    imageBlock: imageBlock.className,
    emptyBlock1: emptyBlock1.className,
    heroBlock: heroBlock.className
  });
}
