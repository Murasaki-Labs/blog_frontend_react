import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative mt-10 overflow-hidden"
      style={{ background: 'var(--color-footer-bg)' }}
    >
      <div className="absolute bottom-0 left-0 right-0 w-full h-56 pointer-events-none">
        <div
          className="absolute bottom-0 w-full h-full opacity-20 animate-wave"
          style={{
            backgroundImage: 'url(/assets/images/waves-black.svg)',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundSize: 'auto 270px',
          }}
        ></div>
        <div
          className="absolute bottom-0 w-full h-full opacity-20 animate-wave-delayed"
          style={{
            backgroundImage: 'url(/assets/images/waves-black.svg)',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom',
            backgroundSize: 'auto 270px',
          }}
        ></div>
      </div>
      <div className="container mx-auto py-8 px-4 relative z-10">
        <div className="flex flex-col items-center">
          <p className="text-xs text-blue-400">© 2025 Murasaki Labs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
