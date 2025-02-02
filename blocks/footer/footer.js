import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.append(footer);

    //  var footerContent = document.querySelector('.footer-wrapper > .footer.block > div');
    // footerContent.style.display = 'none';
   //console.log(footerContent);
    
    var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
  mainFooter.setAttribute('class','outline-footer');

  var footDiv = document.createElement('div');
  footDiv.setAttribute('class','inner-footer');
  mainFooter.appendChild(footDiv);

    var footDivone = document.createElement('div');
  footDivone.setAttribute('class','flex-container');
  footDivone.classList.add('flex-container--multi-50');
  footDiv.appendChild(footDivone);

    var footOne = document.createElement('div');
footDivone.appendChild(footOne);
  
    var footLogos = document.createElement('div');
  footLogos.setAttribute('class','footer-logos');
  footLogos.setAttribute('itemscope','');
  footLogos.setAttribute('itemtype','http://schema.org/Organization');
  footOne.appendChild(footLogos);
 // footLogos.innerHTML = document.querySelector('.default-content-wrapper > p > picture');
footLogos.innerHTML = `                 <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674.63 147"><defs><style>.cls-1{fill:#003359;}.cls-1,.cls-2,.cls-3{stroke-width:0px;}.cls-2{fill:#009fda;}.cls-3{fill:#dc1928;}</style></defs><polygon class="cls-2" points="507.16 74.48 507.23 74.5 507.05 74.46 507.16 74.48"></polygon>
                         <path class="cls-2" d="M544.53,43.62h-15.97l-16.17,23.39c4.93,1.09,9.68,2.24,14.27,3.48l5.01-7.7,2.23,18.32c-3.8-1.13-7.72-2.2-11.76-3.22-.33-.08-.67-.16-.99-.25-.53-.13-1.05-.25-1.57-.39-.9-.22-1.83-.44-2.75-.65h-.04c-3.12-.74-6.31-1.45-9.56-2.11h-.07l-.11-.04c-3.79-.76-7.52-1.47-11.47-2.15h-.13c-15.76-2.71-32.78-4.64-50.66-5.64l-9.75,36.24h16.3l6.28-23.26c1.76.16,3.51.32,5.25.5l9.44,22.76h33.05l13.39-18.99c6.06,2.76,11.61,5.77,16.57,9.02l1.24,9.98h17.16l-9.17-59.3h-.02ZM488.62,101.44l-8.41-18.37c6.11-1.65,10.56-4.47,13.47-8.13l.03-.05c3.74,1.06,7.38,2.19,10.88,3.42l-15.98,23.13h.01Z"></path>
                         <path class="cls-2" d="M406.3,65.93l-9.97,36.98h16.39l9.93-37.01c-2.33-.03-4.66-.05-7.01-.05-3.13,0-6.24.03-9.33.08"></path>
                         <path class="cls-2" d="M442.44,57.95l3.68-13.91h-51.57l-3.73,13.81c8.11-.39,16.39-.6,24.81-.6,9.1,0,18.05.24,26.8.69"></path>
                         <path class="cls-2" d="M497.88,62.21c0-4.71-1.43-8.91-4.54-12.03-3.96-3.96-10.43-6.14-20.27-6.14h-22.22l-3.8,14.17c17.94,1.09,35,3.11,50.74,5.9.05-.62.08-1.27.08-1.91"></path>
                         <path class="cls-2" d="M594.67,83.32c-3.8,3.79-7.5,5.97-12.62,5.97-6.82,0-11.78-4.62-11.78-12.11,0-10.26,7.83-19.43,17.58-19.43,5.8,0,9.51,2.78,11.87,7.57l14.12-7.57c-3.53-9.08-11.85-14.89-23.88-14.89-22.62,0-36.76,18.09-36.76,35.5,0,.29.01.57.02.86.08,3.42.74,6.54,1.86,9.35,3.89,9.71,13.54,15.53,25.97,15.53.62,0,1.23-.02,1.82-.05,2.85-.13,5.47-.57,7.87-1.26,6.22-1.79,11.06-5.3,14.95-9.71l-11.01-9.77h0Z"></path>
                       <polygon class="cls-2" points="674.56 44.02 655.72 44.02 629.98 72.69 637.71 44.02 621.29 44.02 605.47 102.94 621.84 102.94 629.97 72.72 644.78 102.94 662.5 102.94 647.54 72.7 674.56 44.02"></polygon>
                       <path class="cls-1" d="M384.11,50.2c-3.96-3.96-10.43-6.14-20.27-6.14h-22.2l-5.26,19.57c16.12-2.73,33.54-4.65,51.83-5.63-.62-2.99-1.95-5.65-4.1-7.8"></path>
                       <path class="cls-1" d="M388.23,66.59c-16.11.86-31.54,2.45-45.98,4.69-.37.05-.72.11-1.07.16-1.03.17-2.06.33-3.08.5-.56.09-1.11.18-1.66.27-.84.14-1.67.29-2.5.43-.16.02-.31.05-.45.08-.51.09-1.01.18-1.51.26-1.32.24-2.64.49-3.94.74l-.66.12c-1.32.26-2.63.52-3.93.79-.48.1-.96.21-1.45.3-.88.18-1.76.37-2.63.57l-.15.04c-.52.12-1.04.22-1.55.34-.94.21-1.87.43-2.81.64-.44.11-.88.21-1.32.31-1.32.31-2.64.63-3.93.95-.3.08-.58.14-.87.22-1.03.27-2.05.53-3.06.8-.47.13-.94.25-1.41.38-.21.06-.43.12-.64.17h0c-.44.13-.89.24-1.33.37h-.01c-.18.05-.35.1-.54.15-.47.13-.94.27-1.41.4-.91.25-1.8.52-2.69.79-.35.1-.72.2-1.07.31-1.2.37-2.4.73-3.56,1.11-.37.12-.73.23-1.08.35-.84.27-1.68.54-2.51.82-.44.15-.89.3-1.33.45-.17.05-.34.12-.51.18l13.98-21.47,1.02,8.24c4.97-1.38,10.13-2.66,15.49-3.85l-3.64-23.57h-15.99l-40.97,59.3h17.65c7.51-6.43,17.39-12.26,29.14-17.31l2.17,17.31h17.16l-3.6-23.22c4.19-1.38,8.55-2.65,13.05-3.85l-7.27,27.07h16.29l5.46-20.22c2.21-.33,4.44-.65,6.69-.94l8.69,21.16h17.12l-9.09-19.85c10.19-2.78,15.77-8.76,17.25-16.51"></path>
                       <polygon class="cls-1" points="280.02 58.35 283.8 44.05 232.23 44.05 228.36 58.35 246.03 58.35 234 102.95 250.4 102.95 262.35 58.35 280.02 58.35"></polygon>
                    <path class="cls-1" d="M206.7,56.67c6.67-.79,13.23.71,16.86,1.79l3.59-13.22c-3.04-.97-8.85-2.32-17.55-2.2-14.39.21-24.99,8.33-24.99,20.03,0,8.65,5.98,12.7,15.32,16.23,8.23,3.2,9.84,4.38,9.84,6.65,0,2.69-2.77,4.37-6.65,4.37-1.07,0-2.13-.08-3.16-.22h0l-.12-.02c-.62-.09-1.24-.21-1.86-.35-5.92-1.23-11.06-3.47-15.28-6.51l-3.82,13.9c6,4.38,13.81,6.84,22.89,6.84,14.64,0,25.08-8.25,25.08-20.36,0-8.84-6.23-12.96-15.31-16.41-8.07-3.2-9.84-4.04-9.84-6.4,0-2.05,1.85-3.72,4.95-4.11h.06,0Z"></path>
                      <path class="cls-3" d="M0,73.5c0,31.4,19.68,58.16,47.38,68.67V4.84C19.68,15.34,0,42.1,0,73.49"></path>
                        <path class="cls-3" d="M73.37.13c-2.03,0-4.05.07-6.03.22v5.16h.37c27.96.2,50.48,21.53,50.27,47.64-.19,25.99-22.84,46.91-50.64,46.88v46.62c1.98.17,4,.23,6.03.23,40.51,0,73.38-32.85,73.38-73.38S113.88.13,73.37.13"></path>
                </svg>
`;
      var footLinksDiv = document.createElement('div');
  footLinksDiv.setAttribute('class','links');
footDivone.appendChild(footLinksDiv);

  var footNav = document.createElement('nav');
  footLinksDiv.appendChild(footNav);

    var footUL = document.createElement('ul');
  footUL.setAttribute('class','footer-links');
  footNav.appendChild(footUL);
  footUL.innerHTML =  `  <li>
                        <a href="/about-us" title="About us" data-event="site interaction" data-category="footer navigation" data-description="About us" class="footer-link">About us
                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/terms-and-conditions" title="Terms &amp; conditions" data-event="site interaction" data-category="footer navigation" data-description="Terms &amp; conditions" class="footer-link">Terms &amp; conditions                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://auspost.com.au/privacy" title="Privacy" data-event="site interaction" data-category="footer navigation" data-description="Privacy" class="footer-link">Privacy
                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/complaints-and-feedback" title="Complaints and feedback" data-event="site interaction" data-category="footer navigation" data-description="Complaints and feedback" class="footer-link">Complaints and feedback                          <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/alerts" title="Alerts" data-event="site interaction" data-category="footer navigation" data-description="Alerts" class="footer-link">Alerts                            <span class="icon--10">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M18.44 10.566l-.679-.714c-.011-.013-.028-.017-.044-.03L8.951.591a1.848 1.848 0 00-2.711 0l-.68.712a2.096 2.096 0 000 2.854l7.45 7.843-7.45 7.84a2.098 2.098 0 000 2.857l.68.71c.747.79 1.961.79 2.71 0l8.767-9.227c.014-.014.033-.018.044-.033l.68-.712c.375-.396.56-.916.559-1.435a2.065 2.065 0 00-.56-1.435z"></path>
                              </svg>
                            </span>
                        </a>
                    </li>`;

    var footcpyrightDiv = document.createElement('div');
  footcpyrightDiv.setAttribute('class','copyright');
footDivone.appendChild(footcpyrightDiv);
 footcpyrightDiv.innerHTML = document.querySelector('.dx-copyright > div > div > p').textContent;

document.querySelector('.dx-copyright > div > div > p').style.display = 'none';
  var footanchor = document.createElement('div');
  footanchor.setAttribute('class','social');
  footDivone.appendChild(footanchor);
footanchor.innerHTML = `<a class="gf-social-links-icon" href="https://www.linkedin.com/company/australia-post" target="_blank" aria-label="Australia Post linkedin" data-event="site interaction" data-description="linkedin" data-platform="linkedin">
                <span class="icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 5.6a1.6 1.6 0 11-3.201-.001A1.6 1.6 0 017.2 5.6zM20 13.914c0-2.988-.483-5.296-3.973-5.296C13.5 8.618 12 9.845 12 10.5V8.8H8.8V20H12v-5.49c0-1.446.744-2.85 2.538-2.85 1.766 0 2.262 1.657 2.262 2.943V20H20v-6.086zM4 20h3.2V8.8H4V20z"></path></svg>
                </span>
            </a>`;
  var lastfoot = document.querySelector('div');
  lastfoot.setAttribute('class','atsifooter');
 mainFooter .appendChild(lastfoot);
  lastfoot.innerHTML = `<div class="atsifooter">
  <div class="atsifooter__container">
         <img class="atsifooter__img" src="https://startrack.com.au/content/dam/global/svg-icons/custom/logos/ap-acknowledgement-logos.svg" alt="" aria-hidden="true" tabindex="-1">
     <div class="atsifooter__msg font-caption">
       <div class="rte-wrapper cmp-text">
  <p>Australia Post acknowledges the Traditional Custodians of the land on which we operate, live and gather as &ZeroWidthSpace;a team. We recognise their continuing connection &ZeroWidthSpace;to land, water and community. We pay respect to Elders &ZeroWidthSpace;past, present and emerging.<br>
</p>
</div>
</div>
  </div>
</div>`;

 
}
