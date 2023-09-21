import { useEffect } from 'react';
import { SideBarWrapper } from './SideBar.styled';
import { SideBarSlider } from './SideBarForm/SIdeBarSlider';
import { SideBarForm } from './SideBarForm/SideBarForm';

export const SideBar = ({ currentState }) => {
  useEffect(() => {
    // Applying on mount
    if (currentState) document.body.style.overflow = 'hidden';
    // Applying on unmount
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [currentState]);

  return (
    <SideBarWrapper $isOpen={currentState}>
      <SideBarForm />
      <SideBarSlider />
    </SideBarWrapper>
  );
};
