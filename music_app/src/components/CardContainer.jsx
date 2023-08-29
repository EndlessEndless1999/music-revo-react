// import React, { useState } from 'react';
import Card from './Card'
import DropCard from './DropCard'


export default function CardContainer() {
    return(
        <div className="card-container">
            <Card title='Isnt Anything' image='card-img'>
                <DropCard 
                description="MBVs first album. Released in 1987. "
                tracklist={['Soft as Snow', 'Lose my breath', 'Cupid Come', 'Still in a Dream', 'No more sorry', 'All I need', 'Feed me with your kiss', 'SueisFine', 'Several Girls Galore', 'You never should', 'Nothing much to lose', 'I can see it' ]}
                />
            </Card>
            <Card title='Loveless' image='card-img-loveless'>
                <DropCard
                description="MBVs second album, and most important. "
                tracklist={['Only Shallow', 'Loomer', 'Touched', 'To Here Knows When', 'When You Sleep', 'I Only Said', 'Come In Alone', 'Sometimes', 'Blown A Wish', 'What You Want', 'Soon']}
                />
            </Card>
            <Card title='Eps' image='card-img-eps'>
                <DropCard 
                description="A collection of early EPs and single releases."
                tracklist={['You made me realise', 'Slow', 'Thorn', 'Cigarette in your bed', 'Drive It All Over Me', 'I Believe', 'Emptiness Inside', 'I Need No Trust', 'Soon', 'Glider', 'Dont Ask Why', 'Off Your Face']}
                />
            </Card>
        </div>
    )
}