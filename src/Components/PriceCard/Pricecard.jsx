import React from 'react'
import PriceCardBox from '../PriceCardBox';

class Pricecard extends React.Component {
        constructor(){
            super();
            this.state={
                sections: [
                    {   
                        id : 1,
                        cardTitle : 'Starter WP blog',
                        cardPrice : '$23.22',
                        cardOffer : 'offer - 30%',
                        cardCapacity : '5TB',
                        cardSSHAccess : 'Unlimited',
                        cardDDOS : 'Unlimited',
                        
                    },
                    {  
                        id : 2,
                        cardTitle : 'Professional WP blog',
                        cardPrice : '$56.99',
                        cardOffer : 'offer - 30%',
                        cardCapacity : '5TB',
                        cardSSHAccess : 'Unlimited',
                        cardDDOS : 'Unlimited',
                        
                    },
                    {  
                        id : 3,
                        cardTitle : 'Professional WP store',
                        cardPrice : '$95.22',
                        cardOffer : 'offer - 30%',
                        cardCapacity : '5TB',
                        cardSSHAccess : 'Unlimited',
                        cardDDOS : 'Unlimited',
                        
                    },
                    
                ]
            }
        }

    render(){
        return(
                <div className='container coodiv-z-index-1 position-relative'>
                   <div className="row align-items-center justify-content-center">
                {
                    this.state.sections.map( ( { id,cardTitle, cardPrice, cardOffer, cardCapacity, cardSSHAccess, cardDDOS} ) => (
                        <PriceCardBox key={id} cardTitle={cardTitle} cardPrice={cardPrice} cardOffer={cardOffer} cardCapacity={cardCapacity} cardSSHAccess={cardSSHAccess} cardDDOS={cardDDOS}/>
                    ))
                }
                   </div>
                </div>
        );
    }



}

export default Pricecard;