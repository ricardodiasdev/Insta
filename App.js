import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Lista from "./src/components/Lista";

import feed from "./src/data/Feed";

import logo from "./src/img/logo.png";
import send from "./src/img/send.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={send} style={styles.send} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={feed}
        renderItem={(item ) => <Lista data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23,
  },
});
