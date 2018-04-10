import React from 'react';

const handleOnChange = cacheDataFromJson => e => {
  e.preventDefault();

  const url = e.target.jsonUrl.value;

  fetch(url)
    .then(response => response.json())
    .then(data => cacheDataFromJson(data))
    .catch(error => alert('Something wrong with the url'))
}

export const LoadFromUrlForm = ({cacheDataFromJson}) => {
  return (
    <form
      className='load-from-url-form'
      onSubmit={handleOnChange(cacheDataFromJson)}
    >
      <label>Paste JSON url address</label>
      <input type='url' name='jsonUrl' />
      <button>Get JSON</button>
    </form>
  )
};
