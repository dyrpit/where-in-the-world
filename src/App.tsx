import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useToggleTheme } from './hooks/useToggleTheme';
import { ALL_URL, useFetch } from './hooks/useFetch';
import { lightTheme, darkTheme } from './theme/theme';

import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import DetailsView from './views/DetailsView/DetailsView';
import HomeView from './views/HomeView/HomeView';
import Nav from './components/Nav/Nav';
import PageNotFoundView from './views/PageNotFoundView/PageNotFoundView';

import GlobalStyles from './theme/GlobalStyles';

const App: FC = () => {
	const [theme, toggleTheme] = useToggleTheme();

	const { data, isLoading, error } = useFetch(ALL_URL);

	return (
		<>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Nav theme={theme} toggleTheme={toggleTheme} />
				<ContentWrapper>
					<Router basename={process.env.PUBLIC_URL}>
						<Switch>
							<Route
								exact
								path='/'
								render={() => <HomeView data={data} isLoading={isLoading} error={error} />}
							/>
							<Route path='/details/:name' component={DetailsView} />
							<Route path='*' component={PageNotFoundView} />
						</Switch>
					</Router>
				</ContentWrapper>
			</ThemeProvider>
		</>
	);
};

export default App;
