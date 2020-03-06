import { psd2htmlProjects, jsProjects, reactProjects } from './data';

const getPsd2HtmlProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(psd2htmlProjects), 3000);
  });
};

const getJsProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jsProjects), 3000);
  });
};

const getReactProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(psd2htmlProjects), 3000);
  });
};

export { getPsd2HtmlProjects, getJsProjects, getReactProjects };
