// import React, { useState } from 'react';
import Card from './Card'
import DropCard from './DropCard'


export default function CardContainer() {
    return(
        <div className="card-container">
            <Card title='Isnt Anything' image='card-img'>
                <DropCard />
            </Card>
            <Card title='Loveless' image='card-img-loveless'>
                <DropCard />
            </Card>
            <Card title='Eps' image='card-img-eps'>
                <DropCard />
            </Card>
        </div>
    )
}