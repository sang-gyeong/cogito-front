import {useRouter} from 'next/router';
import {ChangeEvent, FormEvent, useState} from 'react';
import styled from 'styled-components';

export default function SearchInput({className = ''}: {className?: string}) {
  const router = useRouter();
  const [query, setQuery] = useState((router.query?.query ?? '') as string);

  const handleChange = (event: ChangeEvent) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery.length) {
      alert('검색어를 입력해 주세요');

      return;
    }

    router.push({pathname: '/questions', query: {query}});
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="input-group">
        <Input
          value={query}
          type="text"
          className="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={handleChange}></Input>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
  );
}

const Input = styled.input``;
