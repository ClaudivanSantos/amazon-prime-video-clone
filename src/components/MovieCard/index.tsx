import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface IMovieProps {
  movieURL: ImageSourcePropType;
}

export const MovieCard = (props: IMovieProps) => {
  return (
    <TouchableOpacity>
      <Image style={styles.movieImage} source={props.movieURL} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    marginLeft: 15,
  },
});
