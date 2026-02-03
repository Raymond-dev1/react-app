//React official style 

// export default function Fruits(){
//     const pairs = ['GBP', 'USD' , 'EUR', 'JPY', 'XAU']
//      const pairItems = pairs.map((pair) => (
//         <li key = {pair} >{pair}</li>
//      ));
//      return (
//      <ul>
//         {pairItems}
//      </ul>
//      )
// }

export default function Pairs(){
        const pairs = ['GBP', 'USD' , 'EUR', 'JPY', 'XAU']
        return(
            <div>
                <ul>
                    {pairs.map((pair) =>(
                        <li key= {pair}>{pair}</li>
                    ))}
                </ul>
            </div>
        )
}