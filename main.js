
function App() {

    const initialTitle = 'TiC-TaC-ToE';
    const Int_Board = {
                        a1: '',a2: '',a3: '',
                        b1: '',b2: '',b3: '',
                        c1: '',c2: '',c3: '',
                    };

    const [turn, setTurn] = React.useState(true); // for Check X or o
    const [isWin, setIsWin] = React.useState(false); // for Check win or lose
    const [board, setBoard] = React.useState(Int_Board); // for Show and update board game
    const [title, setTitle] = React.useState(initialTitle); // for Show and change title

    
    const [showPlayer,setShowPlayer] = React.useState(true);
    const [whoPlayer,setWhoPlayer] = React.useState(false);
    // const handleToggle = () => setBoard(!board);



    // Button reset board to begin value
    const BtnRest = (e) => {
        setTurn(true) // X start
        setBoard(Int_Board) // board to ''
        setIsWin(false) // board input avilable
        setTitle(initialTitle) // initialTitle = 'TiC-TaC-ToE'
        setWhoPlayer(false) 
        setShowPlayer(true) //
    };

    // obj win case
    const winCase = [   ['a1','a2','a3'],
                        ['b1','b2','b3'],
                        ['c1','c2','c3'],
                        ['a1','b1','c1'],
                        ['a2','b2','c2'],
                        ['a3','b3','c3'],
                        ['a1','b2','c3'],
                        ['a3','b2','c1']];

                        // set for use when Onclick updateboard
                        const updateBoard = (e) => {
                            // console.log('xxx --->',e.target.name)
                            
                            // check availble or not
                            if(board[e.target.name] === '' && isWin !== true){
                                    console.log('empty !!')
                    
                                    // check if turn == true --> 'X' turn
                                    // check if turn == false --> 'O' turn
                                    let player
                                    player = turn ? 'X' : 'O';

                                    // let showPlayer
                                    let nowplayer
                                    nowplayer = showPlayer ? 'Player O ': 'Player X' ;
                                    
                                    setShowPlayer(showPlayer)
                                    console.log(nowplayer)
                                    
                                    // update board
                                    setBoard({...board, [e.target.name]: player});
                                    // dummy value for current round
                                    let tempBoard = {...board, [e.target.name]: player}
                    
                                    winCase.forEach(el => {

                                        // console.log('to win', tempBoard[el[0]])
                                        // console.log('to win', tempBoard[el[1]])
                                        // console.log('to win', tempBoard[el[2]])
                                        console.log('--------------- turn ', player)

                                        ///when win
                                        if(player === tempBoard[el[0]] && player === tempBoard[el[1]] && player === tempBoard[el[2]]){
                                            console.log(`----> player ${player} win !`)
                                            // setBoard(Int_Board)
                                            setIsWin(true) // board cant click more

                                            setTitle(`Player ${player} win !`)
                                            nowplayer = `Oopps!!`
                                
                                        } else {///test if (tempBoard === draw)/// {
                                            //test setIsEnd(true)
                                            //test setTitle(`Draw`)
                    
                                        }
                              
                                    });
                    
                                    // toggle between turn
                                    setTurn(!turn)
                                    setShowPlayer(!showPlayer)

                                    // send update to whoPlayer
                                    setWhoPlayer(nowplayer)
                                    // console.log(player)
                                } 
                            else {
                                    console.log('already placed !!')
                                }
                                console.log('on click')
                            };
                    
                    
                    
return (
    <div className='container'>
        <h1>{title}</h1>
        {/* <h1>{showPlayer}</h1> */}

        <div className='player-container'>
            <h2>{whoPlayer} </h2>
        </div>

        <div className='container-xo'>
            <button className='buttonxo' name='a1' onClick={updateBoard}>{board.a1}</button>
            <button className='buttonxo' name='a2' onClick={updateBoard}>{board.a2}</button>
            <button className='buttonxo' name='a3' onClick={updateBoard}>{board.a3}</button>
        </div>
                     
        <div className='container-xo'>
            <button className='buttonxo' name='b1' onClick={updateBoard}>{board.b1}</button>
            <button className='buttonxo' name='b2' onClick={updateBoard}>{board.b2}</button>
            <button className='buttonxo' name='b3' onClick={updateBoard}>{board.b3}</button>
        </div>
                      
        <div className='container-xo'>
            <button className='buttonxo' name='c1' onClick={updateBoard}>{board.c1}</button>
            <button className='buttonxo' name='c2' onClick={updateBoard}>{board.c2}</button>
            <button className='buttonxo' name='c3' onClick={updateBoard}>{board.c3}</button>
        </div>
                         

        <div className='btnrest-container'>
            {/* {isWin && <button className='btnreset' onClick={BtnRest}> RESET</button>} */}
            <button className='btnreset' onClick={BtnRest}>R e s e t</button>
        </div>
    </div>

    );
}
                    
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
                    
                    
                    
                    






