import { ThreeDots } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3470ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderBackdrop>
  );
};
