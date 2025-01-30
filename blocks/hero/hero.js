export default async function decorate(block) {
  // Ensure the block is loaded before making changes
  const heroBlock = block.querySelector('.hero');
  
  if (!heroBlock) {
    console.log('Hero block not found.');
    return;
  }

  // Find the child divs (text, image, empty) inside the .hero block
  const childDivs = heroBlock.querySelectorAll('div');

  if (childDivs.length < 3) {
    console.log('Expected 3 child divs, but found:', childDivs.length);
    return;
  }

  // Step 1: Add specific classes to each part
  const textBlock = childDivs[0];  // First div (Text block)
  const imageBlock = childDivs[1]; // Second div (Image block)
  const emptyBlock = childDivs[2]; // Third div (Empty block)

  // Add classes for styling
  textBlock.classList.add('hero-text');  
  imageBlock.classList.add('hero-image'); 
  emptyBlock.classList.add('hero-empty');

  // Step 2: Apply Flex layout to the hero block
  heroBlock.classList.add('hero-layout'); 

  // Log to ensure classes are added
  console.log('Classes added:', {
    textBlock: textBlock.className,
    imageBlock: imageBlock.className,
    emptyBlock: emptyBlock.className,
    heroBlock: heroBlock.className
  });

  // Additional logic (optional) can be added here if needed.
}
