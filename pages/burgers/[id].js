import styles from '../../styles/Burgers.module.css'
import Image from 'next/image'

export const getStaticPaths = async ()=>{ //Функция для создания динамических маршрутов
    const data = await fetch('http://localhost:5000/items',{
        method : 'GET'
    }).then(response=>response.json())

    const paths = data.map(burger=>{
        return(
            {params : {id : burger.id}}
        )
    }) // Заполняем масив динамическими маршрутами

    return(
        {
            paths,
            fallback : false //При переходе на не существующию страницу возвращать ошибку 404 
        }
    )
}

export const getStaticProps = async ({params})=>{
    const data = await fetch(`http://localhost:5000/items/${params.id}`,{
        method : 'GET'
    }).then(response=>response.json())

    return(
        {
            props : {
                burger : data
            }
        }
    )
}

const Details = ({burger})=>{
    return(
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}>
            <Image src={burger.image} alt={burger.name} width={500} height={400} layout="responsive" objectFit="cover"/>
            </div>
            <p>{burger.desc}</p>
        </div>
    )
}

export default Details