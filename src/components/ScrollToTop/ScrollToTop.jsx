import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ToTopBtn } from './ScrollToTop.styled';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <ToTopBtn>
        {' '}
        {showTopBtn && (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="icon-position icon-style"
            onClick={goToTop}
          />
        )}{' '}
      </ToTopBtn>
    </>
  );
};
