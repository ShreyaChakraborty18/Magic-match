// import './SingleCard.css';


// export default function SingleCard({ card, handleChoice, flipped }) {

//     const handleClick = () => {
//         handleChoice(card)
//     }
//     return (
//         <div className='card' >
//         <div className={flipped ? "flipped" : ""}>
//           <img className="front" src={card.src} alt="card front" />
//           <img className="back" 
//                src="/img/cover-2.png" 
//                onClick={handleClick}
//                alt="card back"
//             />
//         </div>
//       </div>
//     )
// }

import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        console.log('d')
        if (!disabled) {
            console.log('e')
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover-2.png" onClick={handleClick} alt="cover" />
            </div>
        </div>
    )
}