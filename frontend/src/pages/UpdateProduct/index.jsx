import { Container, Wrapper, FormWrapper } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { HomeButton } from '../../components/HomeButton'
import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api'


import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export function Update() {
    const location = useLocation()
    const { data } = location.state

    const { id, nome, descricao, preco, quantidade } = data;

    const updateProduct = async () => {
        const updatedData = {
            nome: nomeInput,
            descricao: descricaoInput,
            preco: precoInput,
            quantidade: quantidadeInput,
        };

        try {
            const response = await api.put(`/produtos/${id}`, updatedData);
            console.log('Produto atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar o produto', error);
        }
    }

    const [nomeInput, setNome] = useState(nome)
    const [descricaoInput, setDescricao] = useState(descricao)
    const [precoInput, setPreco] = useState(preco)
    const [quantidadeInput, setQuantidade] = useState(quantidade)

    return (
        <Container>
            <HomeButton icon={FiArrowLeft} to='/' />

            <Wrapper>

                <h1>Atualizar produto</h1>

                <FormWrapper>
                    <Input label={'Nome:'} onChange={(e) => setNome(e.target.value)} value={nomeInput} />
                    <TextArea label={'Descrição:'} onChange={(e) => setDescricao(e.target.value)} value={descricaoInput} />
                    <Input label={'Preço:'} type='number' onChange={(e) => setPreco(e.target.value)} value={precoInput} />
                    <Input label={'Quantidade:'} type='number' onChange={(e) => setQuantidade(e.target.value)} value={quantidadeInput} />
                    <Button title={'Atualizar'} onClick={updateProduct} />
                </FormWrapper>

            </Wrapper>
        </Container>
    )
}