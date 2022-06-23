export interface TypeThemeData {
  metadata: {
    nameId: string;
    name: string;
    creator: string;
    description: string;
    tags: Array<string>;
    version: string;
  };
  light?: ThemeData;
  dark?: ThemeData;
}
export interface ThemeData {
  accent?: string;
  background?: string;
  primaryBackground?: string;
  chatBackground?: string;
  foreground?: string;
  secondaryForeground?: string;
  messageBox?: string;
  mention?: string;
  success?: string;
  warning?: string;
  error?: string;
  hover?: string;
  primaryHeader?: string;
  status?: {
    online?: string;
    away?: string;
    streaming?: string;
    invisible?: string;
  };
}
