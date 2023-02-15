import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { ThemeContextWrapper } from './lib/ThemeContext';
import CalculatorScreen from 'screens/CalculatorScreen';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadCustomFonts = async () => {
    await Font.loadAsync({
      'League Spartan': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadCustomFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

    return (
        <ThemeContextWrapper>
            <CalculatorScreen />
        </ThemeContextWrapper>
    );
};

