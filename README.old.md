<img src="https://i.imgur.com/go18uJE.jpg">

## SEIR 1003

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://www.swapi.dev/) and render its data. 

## Setup + Starting Instructions 

1. Create a new react app in this folder. (`npx create-react-app .`)
2. Clean up CRA starter code and verify app loads without issue.
3. Import React-Router Dependencies (`npm i react-router-dom`)
4. Create a Landing page with a link to your /starship route.
5. Setup your App to Router to render a `<StarshipsList />` Component in a /starships route.  (You can start with boilerplate components to get started)
6. After verifying react-router pathing is working displays the correct component
7. Test out the SWAPI data in Insomia to see what it looks like and what types of data you'll be working with

## Primary App Goals
1. Obtain all of the starships from the API Endpoint: `https://swapi.dev/api/starships`) and display each ship inside your `<StarshipsList/>`. 
1. Use `useEffect` to make the request as soon as your topmost-level component loads (App), and store it in state (starShips).
1. Map and render all information from your API call

1. Add links on your landing page to /Startships, /planets, and /characters
1. In each of those routes, run a similar API call rendering and mapping data in each component for those endpoints
1. In which component do we want to make these calls? Do we want to, do we need to pass everything as props to each component?

## Stretch Goals
1.Use a guard operator to render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Add some custom CSS styling to approximate a cool, sci-fi aesthetic. 


