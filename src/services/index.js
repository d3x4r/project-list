import { psd2htmlProjects, jsProjects, reactProjects } from './data';

const getPsd2HtmlProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...psd2htmlProjects].reverse()), 1200);
  });
};

const getJsProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...jsProjects].reverse()), 1200);
  });
};

const getReactProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...reactProjects].reverse()), 1200);
  });
};

export { getPsd2HtmlProjects, getJsProjects, getReactProjects };
