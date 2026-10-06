import ReactGA from 'react-ga4';

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: window.document.title });
};

export const initGA = () => {
  ReactGA.initialize('G-BR6STYQ3NY');
  logPageView();
};

export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
