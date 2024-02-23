export interface ServiceInfo {
  info: string;
  version: string;
  endpoints: {
    characters: {
      [key: string]: string;
    };
  };
}
