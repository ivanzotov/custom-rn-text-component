import React, {
  PropTypes,
  PureComponent,
} from 'react'
import ReactNative from 'react-native'
import styles from './styles'

export default class Text extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
  }

  setNativeProps(props) {
    this.text.setNativeProps(props)
  }

  render() {
    return (
      <ReactNative.Text
        ref={ref => (this.text = ref)}
        {...this.props}
        style={[
          styles.default,
          this.props.style,
        ]}
      />
    )
  }
}
