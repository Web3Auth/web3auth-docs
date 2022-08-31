/* eslint-disable camelcase */
// web
import android from "./android";
import angular from "./angular";
import flutter from "./flutter";
import html from "./html";
import ios from "./ios";
import next from "./nextjs";
import react from "./react";
import react_native from "./react-native";
import unity from "./unity";
import vue from "./vue";

const frameworks = {
  html,
  react,
  next,
  vue,
  ios,
  android,
  flutter,
  angular,
  "react-native": react_native,
  unity,
};

export default frameworks;
