import { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { ZoomOut } from 'react-native-reanimated';

import theme from '../../theme';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {}
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.COLORS.BG_WHITE
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: '100%',
          height: '100%'
        }}
        // eslint-disable-next-line no-undef
        source={require('./splash.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;
