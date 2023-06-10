import React from 'react'

function carouselCard({details,ind}) {
    return (
        <section style={{
            backgrounColor:'blue',
            padding:'5%'
        }}>
            <img src={details[ind]?.picture} alt={details[ind]?.title}/>
           <p>{details[ind]?.title}</p>
        </section>
    )
}

export default carouselCard
