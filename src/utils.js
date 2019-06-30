import { Platform, PixelRatio } from "react-native";

export function getPixelSize(pxs) {
  return Platform.select({
    ios: pxs,
    android: PixelRatio.getPixelSizeForLayoutSize(pxs)
  });
}
