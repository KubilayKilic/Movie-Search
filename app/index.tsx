import { useState } from "react";
import { Button, Text, View, Image, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios from "axios";

export default function Index() {
  const [search, setSearch] = useState("");
  const [displayedMovie, setDisplayedMovie] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [voteAvg, setVoteAvg] = useState("");

  const TMDB_API_KEY = "aa68f521ebd0de281b715c161add4cf7";

  const saveMovie = async (movieName: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: TMDB_API_KEY,
            query: movieName,
          },
        }
      );
      console.log(response.data); // API'den dönen veri
      const movie = response.data.results[0]; // İlk sonucun verileri, Batman, Batman Begins, Batman The Dark... diye gidiyor.
      if (movie) {
        setDisplayedMovie(movie.title);
        setMoviePoster(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
        setReleaseYear(movie.release_date.split("-")[0]);
        setVoteAvg(movie.vote_average.toFixed(1));
      } else {
        setDisplayedMovie("Film bulunamadı");
        setMoviePoster("");
        setReleaseYear("");
        setVoteAvg("");
      }
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
      setDisplayedMovie("Film bulunamadı");
      setMoviePoster("");
      setReleaseYear("");
      setVoteAvg("");
    }
  };

  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "blue",
            fontSize: 25,
          }}
        >
          Movie Search | Find
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            padding: 6,
            flexWrap: "wrap",
          }}
        >
          <TextInput
            placeholder="Film adını yazınız"
            style={{
              width: 220,
              height: 40,
            }}
            defaultValue={search}
            onChangeText={(newText) => setSearch(newText)}
          />
          <Button
            onPress={() => saveMovie(search)}
            title="Ara"
            color="#841584"
          />
        </View>
        <View>
          <Text
            style={{
              color: "red",
              fontSize: 30,
              marginHorizontal: "auto",
              marginBottom: 5,
            }}
          >
            {displayedMovie}
          </Text>
          {moviePoster ? (
            <Image
              source={{ uri: moviePoster }}
              style={{ width: 300, height: 450, marginBottom: 5 }}
            />
          ) : null}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {releaseYear ? (
              <Text
                style={{
                  color: "green",
                  fontSize: 30,
                }}
              >
                {releaseYear}
              </Text>
            ) : null}
            <Text
              style={{
                color: "purple",
                fontSize: 30,
              }}
            >
              {voteAvg}
            </Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
