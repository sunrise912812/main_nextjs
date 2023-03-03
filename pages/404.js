import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const NotFoundPage = ()=>{
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [countSecond, setCountSecond] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
        setCountSecond(3)
        setIsLoading(false)
    },[])
    isLoading && setInterval(()=>{setCountSecond(prev=>prev-1)},1000)
    return(
        <div className='not-found'>
            <h1>К сожелению...</h1>
            <h2>Такой страницы здесь нет!</h2>
            <p>Перехожу на <Link href='/'>главную</Link> через {countSecond} секунды...</p>
        </div>
    )
}

export default NotFoundPage