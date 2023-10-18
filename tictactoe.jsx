/** @format */

const Board = () => {
	// 1st player is X ie 1
	// State keeps track of next player and gameState
	const [player, setPlayer] = React.useState(1);
	const [gameState, setGameState] = React.useState([]);
	let status = `Winner is :${checkForWinner(gameState)}`;

	//  conditional logic to set a variable to either 'Player O' or  'Player X'
	var nextPlayer;
	if (player === 1) nextPlayer = ' Player x';
	if (player === 0) nextPlayer = ' Player 0';

	const takeTurn = (id) => {
		// continue game if no winner yet
		if (checkForWinner(gameState) === 'No Winner Yet') {
			// id is the square number, gameState is array of pair {square number, player}
			setGameState([...gameState, { id: id, player: player }]);
			setPlayer((player + 1) % 2); // get next player
			// console.log('checkForWinner(gameState) ', checkForWinner(gameState));
			return player;
		} else {
			return 2;
			//2 is coresponding to '' element in mark array
		}
	};
	function renderSquare(i) {
		// use properties to pass callback function takeTurn to Child
		return (
			<Square
				takeTurn={takeTurn}
				id={i}
				tik={0}
				filled={false}
			></Square>
		);
	}
	const restart = () => {
		location.reload(); //reload page ** hard reset*
		// setGameState( [] );
		// setPlayer(1); // Reset the player to 1 (X starts)
	};
	React.useEffect(() => {
		console.log('render');
	}, []);

	// console.log('re=rendered');
	return (
		<div className='game-board'>
			<div className='grid-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='grid-row'>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className='grid-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			<div id='info'>
				{/* 
          
          Display the player's turn <h1>
        */}
				<h1 id='turn'>
					Next Play:{' '}
					<span style={{ color: player === 1 ? 'red' : 'white' }}>{nextPlayer}</span>
				</h1>
				<h1>
					<span
						className={
							checkForWinner(gameState) === 'No Winner Yet' ? '' : 'blinking'
						}
						style={{ color: 'white' }}
					>
						{status}
					</span>
				</h1>
				<button
					id='reset'
					onClick={() => restart()}
				>
					RESTART
				</button>
			</div>
		</div>
	);
};

const Square = ({ takeTurn, id }) => {
	const mark = ['O', 'X', ''];
	// id is the square's number
	// filled tells you if square has been filled
	// tik tells you symbol in square (same as player)
	// You call takeTurn to tell Parent that the square has been filled
	const [filled, setFilled] = React.useState(false);
	const [tik, setTik] = React.useState(2);

	return (
		<button
			onClick={() => {
				if (!filled) {
					// Check if the square is not filled
					setTik(takeTurn(id));
					setFilled(true);
					console.log(`Square: ${id} filled by player: ${takeTurn(id)}`);
				}
			}}
		>
			<h1 className={mark[tik] === 'X' ? 'red' : 'white'}>{mark[tik]}</h1>
		</button>
	);
};

// Checking for Winner :
// Use JavaScript Sets to check players choices
// against winning combinations

const win = [
	// rows
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// cols
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	// diagonal
	[0, 4, 8],
	[2, 4, 6],
];

const checkPlayerTurn = (gameState) => {
	return gameState.player;
};

const checkForWinner = (gameState) => {
	// get array of box id's
	// can't be a winner in less than 5 turns
	if (gameState.length < 5) return 'No Winner Yet';
	let p0 = gameState.filter((item) => {
		if (item.player == 0) return item;
	});
	p0 = p0.map((item) => item.id);
	let px = gameState.filter((item) => {
		if (item.player == 1) return item;
	});
	px = px.map((item) => item.id);
	if (p0 != null && px != null) {
		var win0 = win.filter((item) => {
			return isSuperset(new Set(p0), new Set(item));
		});
		var winX = win.filter((item) => {
			return isSuperset(new Set(px), new Set(item));
		});
	}
	if (win0.length > 0) return 'Player O ';
	else if (winX.length > 0) return 'Player X ';
	return 'No Winner Yet';
};
// check if subset is in the set
function isSuperset(set, subset) {
	for (let elem of subset) {
		if (!set.has(elem)) {
			return false;
		}
	}
	return true;
}
const Game = () => {
	return (
		<div className='game'>
			<Board></Board>
		</div>
	);
};
// ========================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

// React 17 and older.
// ReactDOM.render(<Game />, document.getElementById('root'));
