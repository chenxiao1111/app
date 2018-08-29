
/*
* 配置屏幕基本参数变量
* */
import {Dimensions,PixelRatio,Platform} from  'react-native';
export default {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    btnRadius:20
}