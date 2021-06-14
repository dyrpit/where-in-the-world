import { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface IParams {
	id: string;
}

const DetailsView: FC = () => {
	const { id } = useParams<IParams>();

	const history = useHistory();

	const handleGoBack = (): void => history.push('/');

	return (
		<div>
			<button onClick={handleGoBack}>Go back</button>
			{id}
		</div>
	);
};

export default DetailsView;
