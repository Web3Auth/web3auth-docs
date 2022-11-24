import { EXPO } from "../../choices";

export const getModuleImportRN = (mode: string) => {
  if (mode === EXPO) {
    return `
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";`;
  }

  return `
import * as WebBrowser from '@toruslabs/react-native-web-browser';`;
};
