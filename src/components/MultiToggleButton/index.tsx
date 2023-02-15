import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { Theme } from 'types/theme';
import { ThemeColor } from 'styles/theme-color';
import { ThemeContext } from 'lib/ThemeContext';
import { GlobalStyle } from 'styles/globals';

interface IProps extends ViewProps {
    name: string;
    value: string;
    onChangeValue: (value: string) => void;
    options: Option[];
}

const MultiToggleButton: React.FC<IProps> = ({
                                                 name, value, onChangeValue, options,
                                                 style, ...props
                                             }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { theme } = useContext(ThemeContext);

    const styles = useMemo(() => createStyles(theme, options.length), [theme, options]);

    useEffect(() => {
        const maxIndex = options.length;
        const activeIndex = options.findIndex(({ value: _value }) => _value === value);
        Animated.timing(fadeAnim, {
            toValue: (23 * maxIndex / (maxIndex + 1)) * activeIndex + 5 * (activeIndex + 1),
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [options, value, fadeAnim]);

    return (
        <View style={styles.container}
              {...props}
        >
            <Text style={[GlobalStyle, styles.default, styles.label]}>
                {name}
            </Text>

            <View>
                <View style={styles.toggleList}>
                    {options.map(({label, value}, index) => (
                        <TouchableOpacity style={styles.toggleButton}
                                          key={index}
                                          onPress={_ => onChangeValue(value)}
                        >
                            <Text style={[GlobalStyle, styles.default]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.toggle}>
                    <Animated.View style={[styles.toggleBullet, {
                        transform: [{ translateX: fadeAnim }],
                    }]} />
                </View>
            </View>
        </View>
    );
};

const createStyles = (theme: Theme, maxIndex: number) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        default: {
            fontSize: 12,
            lineHeight: 11,
            textAlign: 'center',
            letterSpacing: 1,
            color: ThemeColor[theme].themeTextColor,
        },
        label: {
            textTransform: 'uppercase',
            paddingTop: 26,
            marginRight: 26,
        },
        toggleList: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 7,
            paddingRight: 7,
            marginBottom: 5,
            zIndex: 1,
        },
        toggleButton: {
            flex: 1,
        },
        toggle: {
            top: 16,
            width: 23.67 * maxIndex,
            height: 26,
            backgroundColor: ThemeColor[theme].themeBoxColor,
            borderRadius: 13,
        },
        toggleBullet: {
            top: 5,
            left: 0,
            width: 16,
            height: 16,
            backgroundColor: ThemeColor[theme].themePrimaryColor,
            borderRadius: 100,
        }
    });

export default MultiToggleButton;
