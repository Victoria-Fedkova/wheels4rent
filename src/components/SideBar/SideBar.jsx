import { SideBarWrapper } from './SideBar.styled';
import { SideBarSlider } from './SideBarForm/SIdeBarSlider';
import { SideBarForm } from './SideBarForm/SideBarForm';
export const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarForm />
      <SideBarSlider />
    </SideBarWrapper>
  );
};
