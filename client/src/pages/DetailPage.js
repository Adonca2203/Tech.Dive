import { useApi } from '../hooks/use-api';

const DetailPage = (props) => {
    const { response } = useApi();
    return (
        <>
            <div>{response}</div>
            <div>This is the detail page</div>
        </>
    );
};

export default DetailPage;
