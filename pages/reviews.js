import Head from "next/head"
import React, { useState, useEffect } from 'react'

const Reviews = ({reviews})=> {
  return (
    <>
    <Head>
        <title>Бургеры | Отзывы</title>
    </Head>
    <div>
        <h1>Отзывы клиентов</h1>
        <div>
            {reviews.length && reviews.map(r=>{
                return(
                    <div key={r.id}>
                        {`${r.id}.) ${r.body.slice(0,90)}...`}
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1', 
    {method: 'GET'}).then(response=>response.json())

    return ({
        props : {
            reviews : data
        }
    })
} 

export default Reviews
