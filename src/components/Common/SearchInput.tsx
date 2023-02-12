import {useRouter} from 'next/router';
import {ChangeEvent, FormEvent, useState} from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  className?: string;
  // onSubmit: () => void;
  type?: 'QUESTIONS' | 'USERS';
}

export default function SearchInput({className = '', type = 'QUESTIONS'}: SearchInputProps) {
  const router = useRouter();
  const [query, setQuery] = useState((router.query?.query ?? '') as string);

  const isSearchQuestions = type === 'QUESTIONS';

  const handleChange = (event: ChangeEvent) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // const trimmedQuery = query.trim();

    // // if (!trimmedQuery.length) {
    // //   alert('검색어를 입력해 주세요');

    // //   return;
    // // }

    router.push({pathname: isSearchQuestions ? '/questions' : '/users', query: {query}});
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <div className="input-group">
        <Input
          value={query}
          type="text"
          className={isSearchQuestions ? 'form-control bg-light border-0 small' : 'form-control border-1 mini'}
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={handleChange}></Input>
        {isSearchQuestions && (
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        )}
      </div>
    </Form>
  );
}

const Form = styled.form`
  padding-right: 16px;
`;

const Input = styled.input``;
