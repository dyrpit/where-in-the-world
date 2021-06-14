import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useToggleTheme } from './hooks/useToggleTheme';

import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import DetailsView from './views/DetailsView/DetailsView';
import HomeView from './views/HomeView/HomeView';
import Nav from './components/Nav/Nav';

import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/theme';

function App() {
	const [theme, toggleTheme] = useToggleTheme();
	return (
		<>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Nav theme={theme} toggleTheme={toggleTheme} />
				<ContentWrapper>
					<Router>
						<Switch>
							<Route exact path='/' component={HomeView} />
							<Route path='/:id' component={DetailsView} />
						</Switch>
					</Router>
				</ContentWrapper>
			</ThemeProvider>
		</>
	);
}

export default App;
