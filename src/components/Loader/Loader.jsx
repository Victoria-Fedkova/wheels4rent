import { Watch } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#3470ff"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderBackdrop>
  );
};
