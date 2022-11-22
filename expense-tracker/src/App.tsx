
import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  
  const[filteredList, setFilteredList] = useState<Item[]>([]);
  
  const [currentMounth, setCurrentMounth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMounth))
  }, [list, currentMounth]);

  
  return(

    <C.Container>

      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>

        {/* Àrea de informações */}

        {/* Àrea de inserções */}
        
        <TableArea list={filteredList} />

      </C.Body>

    </C.Container>

  );

}

export default App;