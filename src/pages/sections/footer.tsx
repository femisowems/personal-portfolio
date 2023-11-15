import React from 'react';

// Data
import footerData from '../../data/footer.json';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">&copy; {footerData.copyright.name} {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
