import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
const Canvas = () => {
  const paths = useSelector((state: RootState) => state.draw.paths);
  return (
    <View style={styles.canvas}>
      <Svg height="100%" width="100%">
        {paths.map((path: any, index: any) => (
          <Path
            key={index}
            d={`M ${path.points.map((p: any) => `${p.x},${p.y}`).join(' ')}`}
            stroke={path.color}
            strokeWidth={path.size}
            fill="none"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Canvas;
