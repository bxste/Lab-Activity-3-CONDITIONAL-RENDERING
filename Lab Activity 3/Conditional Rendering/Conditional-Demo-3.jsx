function Rainy(){
    return(
        <h1>Bring your umbrella!</h1>
    );
}
function Sunny(){
    return(
        <h1>Bring your glasses!</h1>
    );
}
function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    }
    return(
        <Sunny />
    )
}

export default function RainApp2(){
    return(
        <div>
            <RainOrShine
                isRainy={false}
            />
        </div>
    )
}