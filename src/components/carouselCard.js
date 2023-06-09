import React from 'react'

function carouselCard({details}) {
    // console.log(details)
    // [picture,title] = details
    return (
        <section>
            <img src={details.picture} alt={details.title}/>
           <p>{details.title}</p>
        </section>
    )
}

export default carouselCard
