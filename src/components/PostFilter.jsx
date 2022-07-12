import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
          <MyInput 
            placeholder={'поиск...'}
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}/>
          <MySelect
            defaultValue='Сортировка'
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
              {value: 'title', name: 'По заголовку'},
              {value: 'body', name: 'По тексту'},
            ]}
          />
        </div>
    )
}

export default PostFilter;