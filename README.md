

In this project, we'll create a
simple movie listing application
that fetches movie data from an
API and displays it dynamically.

Step 1: Set up the project

-  Create a new React project using
Create React App or your preferred method.
-  Open the project in your preferred
code editor.

Step 2: Create a MovieList component

-  Create a new file called MovieList.js.
-  Inside the MovieList component,
fetch movie data from an API using 
fetch or your preferred library.
-  Store the fetched movie data in
the component's state using useState.
-  Render the list of movies using
the map function.

Step 3: Create a Movie component

-  Create a new file called Movie.js.
-  Inside the Movie component,
receive the movie data as props.
-  Display the movie information, 
such as title, release year,
and description.

Step 4: Implement React.lazy

-  In your main component file 
(e.g., App.js), import React and
lazy from the react package.
-  Use the lazy function to
dynamically import the MovieList component.
-  Create a new state variable to
track when the component has
finished loading using useState.
-  Use the Suspense component from
React to wrap the lazy-loaded
MovieList component and display
a fallback UI while it's loading.
-  Render the MovieList component
within the Suspense component,
passing any necessary props.

Step 5: Test and verify

-  Run your project and make sure
the movie list is displayed correctly.
-  Verify that the MovieList component
is lazy-loaded and that the fallback
UI is displayed during the loading process.
-  Check the network tab in your browser's
developer tools to ensure that the
MovieList component is not loaded
immediately but rather on-demand.

Note that you'll need to replace the
API endpoint (https://api.example.com/movies)
with your own movie data source.


