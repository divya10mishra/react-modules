import React,{useState} from 'react'
import CarouselCard from './carouselCard'

function carousel() {

   const data = [{
    picture:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/75455a171147259.646a3f9ca6065.png',
   title:'image2',
   id:'987'
    },{
     picture:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e1699a169669839.64510653cde1e.jpg',
     title:'image1',
     id:'678'
    },{
    picture:'https://images.indianexpress.com/2021/01/master-radhe-shyam-820.jpg?w=630',
    title:'image3',
    id:'563'
    }]


    const [activeIndex, setActiveIndex] = useState(0)

   const updateIndex = (currIndex) =>{
       console.log(currIndex,"active")
     if(currIndex<0){
         currIndex=0
     } else if(currIndex >= data.length) {
           currIndex=data.length-1
     } 

     setActiveIndex (currIndex)
   }





    return (
        <>
        <section style={{display:'flex'}}>
            
            
            <article className='carousel-container' style={{
                display:'flex',
                
                transform:`translate(-${activeIndex*30}%)`
            }}>
               {/* {Array(10)
               .fill('')
               .map((_,index)=>{
                return <CarouselCard num={activeIndex }/>
               })
               } */}
               {data?.map((item,index)=>{
                  return <CarouselCard key={item.id} details = {item}  />
               })}
            </article>
            </section>

            <section style={{
                display:'flex',
                justifyContent:'space-evenly'
            }}>
            <button
             style={{
                alignSelf:'center'
            }}
            onClick={()=>{
                updateIndex(activeIndex-1)
            }}>👈</button>
           
            <button 
            style={{
                alignSelf:'center'
            }}
            onClick={()=>{
                updateIndex(activeIndex+1)
            }}>👉</button>
        </section>
        </>
    )
}

export default carousel
