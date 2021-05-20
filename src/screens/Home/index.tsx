import React from 'react';

import ButtonGames from '../../components/GameButton';
import ListOneGame from '../../components/ListOneGame';
import Header from '../../components/Header';

import { Container, Title, FilterText, FilterButtonArea,
          ListGamesArea } from './styles'; 

const Home: React.FC = () => {
  const changeGameHandler = () => {
    alert('oi')
  }

  return (
    <>
      <Header/>
      <Container>
        <Title> recent games </Title>
        <FilterText> filters </FilterText>
        <FilterButtonArea> 
          <ButtonGames 
            color='black'
            title="oi"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          LotoFacil
          </ButtonGames> 
          <ButtonGames 
            color='red'
            title="oi2"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          Quina
          </ButtonGames> 
          <ButtonGames 
            color='green'
            title="oi3"
            isActive={false}
            onPress={() => changeGameHandler()}
          > 
          LotoTodos
          </ButtonGames> 
        </FilterButtonArea>
      </Container>

      <ListGamesArea>
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        <ListOneGame 
          game={ { day:'01/01/2021', price: 250 , numbers:[1,2,3], game:{color:'red' , type: 'Loto'} }  }
        />
        
      </ListGamesArea>
    </>
  );
}

export default Home;