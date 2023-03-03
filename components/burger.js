import Link from "next/link"
import styles from '../styles/Burgers.module.css'
import Image from "next/image"

const Burger = ({burger})=>{
    return(
        <Link key={burger.id} href={`/burgers/${burger.id}`} className={styles.burgerCard}>
          <div className={styles.imageContainer}>
            {/*layout="responsive" - При использовании layout="responsive" или layout="fill" реквизиты width и height относятся к исходным размерам изображения в пикселях, поэтому это повлияет на соотношение сторон (т. е. насколько масштабируется изображение по отношению к его контейнеру).*/}
            {/*objectFit="cover" - Устанавливает размер изображения относительно его родительского элемента*/}
           <Image src={burger.image} alt={burger.name} width={500} height={400} layout="responsive" objectFit="cover"/>
           </div>
           <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
              </div>
        </Link>
    )
}

export default Burger