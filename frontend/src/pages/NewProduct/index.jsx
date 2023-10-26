import { Container, Wrapper, FormWrapper } from './styles'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { HomeButton } from '../../components/HomeButton'
import { FiArrowLeft } from 'react-icons/fi'

import React, { useState } from 'react'
import { api } from '../../services/api'

export function New() {
    const [msg, setMsg] = useState('Insira os dados do produto')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    
    const handleAddProduct = async () => {
        try {
            const data = {
                nome,
                descricao,
                preco,
                quantidade,
            }
            const response = await api.post('/New', data)

            console.log('Produto adicionado com sucesso:')
            setMsg('Produto adicionado com sucesso')

            setNome('')
            setDescricao('')
            setPreco('')
            setQuantidade('')
        } catch (error) {
            console.error('Erro ao adicionar o produto:', error)
            setMsg('Erro ao adicionar o produto')
        }

    }

    return (
        <Container>
            <HomeButton icon={FiArrowLeft} to='/' />

            <Wrapper>

                <h1>Adicionar produto</h1>

                <FormWrapper>
                    <Input label={'Nome:'} onChange={(e) => setNome(e.target.value)} value = {nome}/>
                    <TextArea label={'Descrição:'} onChange={(e) => setDescricao(e.target.value)} value = {descricao}/>
                    <Input label={'Preço:'} type='number' onChange={(e) => setPreco(e.target.value)} value = {preco}/>
                    <Input label={'Quantidade:'} type='number' onChange={(e) => setQuantidade(e.target.value)} value = {quantidade}/>
                    <Button title={'Adicionar'} onClick={handleAddProduct} />
                    <p>{msg}</p>
                </FormWrapper>

            </Wrapper>
        </Container>
    )
}