import { useApi } from '../hooks/use-api';

export const MainPage = (props) => {
    const { response } = useApi();
    return (
        <>
            <div>{response}</div>
            <div>This is the main page</div>
        </>
    );
};

export default MainPage;
