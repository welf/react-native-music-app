import { useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  StyleProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const AnimatedText = ({ text, animatedTreshold, style }: AnimatedTextProps) => {
  const translateX = useSharedValue(0);

  const shouldAnimate = text.length >= animatedTreshold;

  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) return;

    translateX.value = withDelay(
      1000,
      withRepeat(withTiming(-textWidth, { duration: 5000, easing: Easing.linear }), -1, true),
    );

    return () => {
      // Cancel the animation when the component unmounts
      cancelAnimation(translateX);
      // Reset the value when the component unmounts
      translateX.value = 0;
    };
  }, [shouldAnimate, textWidth, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        style,
        animatedStyle,
        shouldAnimate && {
          width: 9999, // prevent text ellipsis with a width of 9999
        },
      ]}
    >
      {text}
    </Animated.Text>
  );
};

export type AnimatedTextProps = {
  text: string;
  animatedTreshold: number;
  style?: StyleProps;
};
