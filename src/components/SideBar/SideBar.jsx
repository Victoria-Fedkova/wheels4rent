import { useEffect } from 'react';
import { SideBarWrapper } from './SideBar.styled';
import { SideBarSlider } from './SideBarForm/SIdeBarSlider';
import { SideBarForm } from './SideBarForm/SideBarForm';
import { useMediaQuery } from 'react-responsive';

export const SideBar = ({ currentState }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  useEffect(() => {
    if (currentState && isMobile) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [currentState, isMobile]);

  return (
    <SideBarWrapper $isOpen={currentState}>
      <SideBarForm />
      <SideBarSlider />
    </SideBarWrapper>
  );
};
