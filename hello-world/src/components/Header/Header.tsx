// 

type Props = {
    name: string;
    age: number;
};

export const Header = ({ name, age }: Props) => {
    return (
        <header>
            <h1>Me chamo {name} e tenho {age} anos. </h1>
        </header>
    );
};