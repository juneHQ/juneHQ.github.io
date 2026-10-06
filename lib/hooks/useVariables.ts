import content from "../../public/cms/content.json";

export const useVariables = (variable: string) => {
  const variables = content.variables;

  return variables[variable];
};
