import { createContext } from "react";

export interface Config {
  ENVIRONMENT: string;
  API_BASE_URL: string;
}

export const loadConfig = async () => {
  const response = await fetch("/config.json");

  const config: Config = await response.json();

  return config;
};


export const ConfigContext = createContext<Config>({
  ENVIRONMENT: "",
  API_BASE_URL: "",
});

interface ConfigContextProviderProps {
  children: JSX.Element;
  config: Config;
}

export const ConfigContextProvider = (props: ConfigContextProviderProps) => {
  return (
    <ConfigContext.Provider value={props.config}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;