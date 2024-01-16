function Rainy(){
    return <h1>Bring your Umbrella!</h1>
}

function Sunny(){
    return <h1>Bring your sunglasses</h1>
}
const isRainy = false;

function RainOrShine(props){
    const isRainy = props.isRainy;
    return isRainy ? <Rainy /> : <Sunny />;
}

export default function RainApp3(){
    return(
        <div className={`${isRainy == true ? 'dark' : 'light'}`}>
            <RainOrShine isRainy = {isRainy}/>
        </div>
    )
}