import {useRouter} from 'next/router';
import {ChangeEvent, FormEvent, useState} from 'react';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleChange = (event: ChangeEvent) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push({pathname: '/questions', query: {query}});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
  );
}
