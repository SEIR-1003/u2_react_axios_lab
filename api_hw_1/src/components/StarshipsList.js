

export default function StarshipsList(props) {



  return (
    <div>
        {props.getShips}
    </div>
    
  );
}

//Vehicles, Films,
// export default function StarshipsList(props) {
//   const iterable = props.starShips;
// return (
//   <div className="grid">
//     {Object.keys(iterable).map((key)=> (
//       <div key={key} className="card">
//           {key}: {iterable[key]}
//       </div>
//     ))}
//   </div>
// );
// }
