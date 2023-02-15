import React, { useContext, useMemo } from 'react';
import Header from 'components/Header';
import Container from 'components/Container';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { Theme } from 'types/theme';
import { ThemeColor } from '../../styles/theme-color';
import { ThemeContext } from '../../lib/ThemeContext';
import CalculatorContainer from 'containers/CalculatorContainer';

const CalculatorScreen: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Container>
                <CalculatorContainer />
            </Container>
            <StatusBar style={ThemeColor[theme].themeStatusBar as StatusBarStyle || 'auto'} />
        </SafeAreaView>
    );
};

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            color: ThemeColor[theme].themeTextColor,
            backgroundColor: ThemeColor[theme].themeBackgroundColor,
        }
    });

export default CalculatorScreen;
