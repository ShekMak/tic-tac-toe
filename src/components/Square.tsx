function Square(props: any) {

    function onChange(event: any) {
        
        event.preventDefault();
        
        if(props.winner === null)
            props.OnChange(props.id)
        else
            alert(`Game Over, ${props.winner} wins`);
    }

    return (
        <div onClick={onChange} className="w-1/3 border flex items-center justify-center border-white text-2xl text-white font-bold">
            { props.square || '-' }
        </div>
    );
}

export default  Square;