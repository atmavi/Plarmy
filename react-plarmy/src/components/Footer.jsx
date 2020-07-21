import React from 'react';

function Footer() {
   const year = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="footer__logo">
            Plarmy
            <div className="footer__copywrite">©{year} Plarmy. All Rights Reserved.</div>
         </div>

         <div className="footer__navigation">
            <ul className="footer__list">
               <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
               <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
               <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
               <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
               <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer;