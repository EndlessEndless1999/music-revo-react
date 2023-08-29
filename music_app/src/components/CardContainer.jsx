// import React, { useState } from 'react';
import Card from './Card'
import DropCard from './DropCard'


export default function CardContainer() {
    return(
        <div className="card-container">
            <Card title='Isnt Anything' image='card-img'>
                <DropCard 
                description="MBVs first album. Released in 1987. Would lay the foundations for their sound and shoegazing music as a whole."
                />
            </Card>
            <Card title='Loveless' image='card-img-loveless'>
                <DropCard
                description="MBVs second album, and most important. Would shape shoegazing and dream pop music for the 1990s and beyond."
                />
            </Card>
            <Card title='Eps' image='card-img-eps'>
                <DropCard 
                description="A collection of early EPs and single releases. Contains many essential tracks that are ommitted from the albums."
                />
            </Card>
        </div>
    )
}