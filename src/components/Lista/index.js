import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  findNodeHandle,
} from "react-native";

import iconeLike from "../../img/like.png";
import send from "../../img/send.png";

const Lista = ({ data }) => {
  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image
          style={styles.fotoPerfil}
          source={{ uri: data.item.imgperfil }}
        />
        <Text style={styles.nomeUsuario}>{data.item.nome}</Text>
      </View>
      <Image
        style={styles.fotoPublicacao}
        source={{ uri: data.item.imgPublicacao }}
        resizeMode="cover"
      />
      <View style={styles.areaBtn}>
        <View>
          <TouchableOpacity>
            <Image source={iconeLike} style={styles.icone} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={send} style={styles.icone} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{data.item.nome}</Text>
        <Text style={styles.descricaoRodape}>{data.item.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areaFeed: {
    flex: 1,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: "left",
    color: "black",
  },
  fotoPerfil: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  icone: {
    width: 33,
    height: 33,
    marginHorizontal: 6,
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
  },
  descricaoRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 5,
  },
});

export default Lista;
