import {
    Text,
    useColorScheme,
    View
  } from 'react-native';
import { styles } from '../assets/Styles';
import type {PropsWithChildren} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

  type SectionProps = PropsWithChildren<{
    title: string;
  }>;


  function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
            
          ]}>
          {title}
        </Text>
        {children}
      </View>
    );
  }

  export default Section;