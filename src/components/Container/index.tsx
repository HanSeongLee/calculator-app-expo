import React from 'react';
import styles from './style.module.scss';
import { View, ViewProps } from 'react-native';

interface IProps extends ViewProps {

}

const Container: React.FC<IProps> = ({ style, children, ...props }) => {
    return (
        <View style={[styles.container, style]}
              {...props}
        >
            {children}
        </View>
    );
};

export default Container;
