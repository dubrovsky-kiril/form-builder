import React from 'react';

const handleFileChoose = cacheDataFromJson => e => {
  const file = e.target.files[0];

  if (file) {
    if (file.type === 'application/json') {
      const reader = new FileReader();

      reader.onload = e => {
        const data = JSON.parse(e.target.result)

        cacheDataFromJson(data);
      }

      reader.readAsText(file)
    } else {
      alert('Only JSON files are accepted');

      e.target.value = ''
    }
  }
}

export const LocalLoadForm = ({cacheDataFromJson}) => {
  return (
    <form className='load-local-form'>
      <label>Choose local JSON file</label>
      <input
        type='file'
        onChange={handleFileChoose(cacheDataFromJson)}
      />
    </form>
  )
};
