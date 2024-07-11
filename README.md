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

2. **React Native Components**:
   - `View`: For creating container layouts.
   - `Text`: For displaying text content.
   - `Image`: For rendering movie posters.
   - `TextInput`: For the search input field.
   - `Button`: For the search action button.

3. **Third-party Libraries**:
   - `react-native-gesture-handler`: Provides the `GestureHandlerRootView` component for handling gestures.
   - `axios`: Used for making HTTP requests to the TMDb API.

4. **API Integration**:
   - The Movie Database (TMDb) API: Used to fetch movie data based on user searches.

5. **Async/Await**: 
   - Used in the `saveMovie` function for handling asynchronous API calls.

6. **Error Handling**:
   - Basic error handling is implemented in the API call using try/catch.

7. **Conditional Rendering**:
   - Used to display movie details only when available.

8. **String Manipulation**:
   - Used for extracting the release year from the full date.

9. **Number Formatting**:
   - `toFixed()` method used to format the vote average.

10. **Inline Styling**:
    - React Native's inline style objects are used for component styling.

This app demonstrates a practical implementation of these technologies in a real-world scenario, creating a functional movie search application with a clean and intuitive user interface.
