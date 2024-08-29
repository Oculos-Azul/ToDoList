import { useState } from "react";
import { Button, Form, Select, Input } from "./styledFom";

const Fom = ({AddTodo}) => {
    const [value, setValue] = useState("");
    const [cat, setCat] = useState("");

    const enviouu = (b) => {
        b.preventDefault();
        if (!value || !cat) return;
        AddTodo(value, cat);
        console.log(value, cat);
        setValue("");
        setCat("");
    };

    return (
        <div className="Form">
            <h2>Criar Tarefa</h2>
            <Form onSubmit={enviouu}>
                <Input
                    type="text"
                    placeholder="Título"
                    value={value}
                    onChange={(c) => setValue(c.target.value)}
                />
                <Select value={cat} onChange={(c) => setCat(c.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                </Select>
                <Button>Criar</Button>
            </Form>
        </div>
    );
};

export default Fom;
