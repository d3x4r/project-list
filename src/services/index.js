import { psd2htmlProjects, jsProjects, reactProjects } from './data';

const getPsd2HtmlProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...psd2htmlProjects].reverse()), 1500);
  });
};

const getJsProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...jsProjects].reverse()), 1500);
  });
};

const getReactProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...reactProjects].reverse()), 1500);
  });
};

export { getPsd2HtmlProjects, getJsProjects, getReactProjects };
