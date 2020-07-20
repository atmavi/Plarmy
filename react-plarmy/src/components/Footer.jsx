import React from 'react';

function Footer() {
   const year = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="footer__logo">
            Plarmy
            <div className="footer__copywrite">©{year} Plarmy. All Rights Reserved.</div>
         </div>

         <div class="footer__navigation">
            <ul class="footer__list">
               <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
               <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
               <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
               <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
               <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer;