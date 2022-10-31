export default function Characters(props){
    return(
        <div className="grid">
            {
                props.apiCh.map((cc)=>(
                    <div key={cc.name} className="card">
                        <h2>{cc.name}</h2>
                        <div>Stats
                            <ul>height: {cc.height}cm</ul>
                            <ul>weight: {cc.mass}kg</ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}