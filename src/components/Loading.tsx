import { ClipLoader } from 'react-spinners';

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <div>
      <ClipLoader color="#36d7b7" loading={loading} />
    </div>
  );
}