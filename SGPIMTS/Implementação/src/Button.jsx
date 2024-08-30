function Button({ list }) {
    const listobjetos = list.map(({nome,matricula}) => (
        <li>{matricula} - {nome}</li>
    ));

    return (
        <div>
            <ul>
                {listobjetos}
            </ul>
        </div>
    );
}

export default Button