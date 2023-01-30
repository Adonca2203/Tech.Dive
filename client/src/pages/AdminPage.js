import { useApi } from '../hooks/use-api';

export const Adminpage = (props) => {
    const { response } = useApi();
    return (
        <>
            <div>{response}</div>
            <div>This is the admin page</div>
        </>
    );
};

export default Adminpage;
