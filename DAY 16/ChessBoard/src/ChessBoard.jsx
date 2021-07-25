import css from "./ChessBoard.css"

function ChessBoard(){
    let boxes=[]
    for(let i=0;i<8;i++)
    {
     boxes.push(<div className="column" />)
    }
     return(
        <div className="App">
            <div className="Box">
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>
                <div className="row">{boxes}</div>

            </div>

        </div>
    )
}
export default ChessBoard;