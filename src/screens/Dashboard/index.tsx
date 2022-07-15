import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export function Dashboard() {

    const data = [
        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Desenvolvimento',
                icon: 'code'
            },
            date: '13/04/2020'
        },
        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Desenvolvimento',
                icon: 'code'
            },
            date: '13/04/2020'
        },
        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Desenvolvimento',
                icon: 'code'
            },
            date: '13/04/2020'
        },
        
];

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                        source={{uri: 'https://avatars.githubusercontent.com/u/65553463?v=4'}}
                        
                        />

                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Juathan</UserName>
                        </User>
                    </UserInfo>
                    <Icon name= 'power' />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type='up' 
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de abril' 
                />
                <HighlightCard
                    type='down'
                    title='Saídas' 
                    amount='R$ 1,259,00' 
                    lastTransaction='Última saida dia 03 de abril' 
                />
                <HighlightCard 
                    type='total'
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTransaction='01 à 16 de abril' 
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                data={data}
                renderItem={({ item }) => <TransactionCard data={item} />}
                showVerticalScrollIndicator = {false}
                contentContainerStyle={{ paddingBottom: 20 }}
                />
            </Transactions>
        </Container>
    );
}   