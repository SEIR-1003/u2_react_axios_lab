export default function Home(){
  return(
    <>
    <h2>Home</h2>
    <div className="homeContent">
    <p>This app serves as a demonstration of a Star Wars API called <a href="https://swapi.dev/" target="_blank">SWAPI</a>.  This page was created by Devon Jones as part of a Software Engineering course developed by General Assembly. </p>

    <p>Each section contains mapped results for starships, planets, and people featured in Star Wars. I coded conditional logic to change the way data displays, or if it displays at all, depending on the data retrieved from the API call. For instance, R2-D2 has no hair so no content will display for the hair property.</p>
    <p><strong>NOTE:</strong> The API call for the list of planets is intentionally broken so you can observe the conditional rendering of the guard operator. You can also see this gaurd breifly prior to load of each page upon refresh.</p>
    </div>

    
    </>
  
  )
}