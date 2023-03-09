import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import iconeLike from "../../img/like.png";
import iconeLikeada from  "../../img/likeada.png";
import send from "../../img/send.png";

const Lista = ({ data }) => {

  let { nome, imgperfil, imgPublicacao, descricao, likeada, likers } =
    data.item;

  const [countLikers, setCountLikers] = useState(likers);
  const [isLikeada, setIsLakeada] = useState(likeada);

  const handleLike = () => {
    if (isLikeada === true) {
      setIsLakeada(false);
      setCountLikers(countLikers - 1);
      console.log(countLikers, isLikeada);
    } else {
      setIsLakeada(true);
      setCountLikers(countLikers + 1);
      console.log(countLikers, isLikeada);
    }
  };

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image style={styles.fotoPerfil} source={{ uri: imgperfil }} />
        <Text style={styles.nomeUsuario}>{nome}</Text>
      </View>
      <Image
        style={styles.fotoPublicacao}
        source={{ uri: imgPublicacao }}
        resizeMode="cover"
      />
      <View style={styles.areaBtn}>
        <View>
          <TouchableOpacity onPress={handleLike}>
            <Image source={!isLikeada ? iconeLike : iconeLikeada} style={styles.icone} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={send} style={styles.icone} />
          </TouchableOpacity>
        </View>
      </View>
      {countLikers <= 0 ? (
        ""
      ) : (
        <Text style={styles.likes}>
          {countLikers} {countLikers > 1 ? "curtidas" : "curtida"}
        </Text>
      )}
      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{nome}</Text>
        <Text style={styles.descricaoRodape}>{descricao}</Text>
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
  likes: {
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Lista;
