# Movie Search App

This is a React Native application that allows users to search for movies using The Movie Database (TMDb) API.

## Features

- Search for movies by title
- Display movie details including:
  - Movie title
  - Movie poster
  - Release year
  - Average vote rating

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- React Native environment
- Expo CLI (if using Expo)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies: npm install or yarn install


## Configuration

The app uses The Movie Database (TMDb) API. You need to set up your API key:

1. Sign up for an account at [TMDb](https://www.themoviedb.org/)
2. Obtain your API key
3. Replace `TMDB_API_KEY` in the code with your actual API key

## Running the App

To start the app, run: npx expo start

## Usage

1. Enter a movie title in the search box
2. Press the "Ara" (Search) button
3. View the movie details displayed below

## Dependencies

- React
- React Native
- react-native-gesture-handler
- axios

## Note

This app is a basic implementation and can be extended with more features and improved error handling.


# Technologies and Features Used in This App

This React Native application leverages several modern web technologies and React features:

1. **React Hooks**: 
   - `useState`: Used for managing component-level state (search input, movie details).

2. **Third-party Libraries**:
   - `react-native-gesture-handler`: Provides the `GestureHandlerRootView` component for handling gestures.
   - `axios`: Used for making HTTP requests to the TMDb API.

3. **API Integration**:
   - The Movie Database (TMDb) API: Used to fetch movie data based on user searches.
