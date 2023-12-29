import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { COUNT } from "../utils";
import "./unistyles_setup";

const Unistyles = () => {
  return <Demo />;
};

const Demo = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={styles.box} />
      ))}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  box: {
    borderColor: theme.colors.red,
    padding: 5,
    borderWidth: 2,
  },
}));

export default Unistyles;
