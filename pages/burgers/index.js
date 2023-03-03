import Burger from "@/components/burger"

export const getStaticProps = async ()=>{
    const data = await fetch('http://localhost:5000/items',{
        method : 'GET'
    }).then(response=>response.json())

    return ({
        props : {
            burgers : data
        }
    })
}

const Burgers = ({burgers})=>{
    return(
        <div>
            <h1>Наши бургеры</h1>
            {
                burgers.map(b=>{
                    return(
                        <Burger key={b.id} burger={b}/>
                    )
                })
            }
        </div>
    )
}

export default Burgers