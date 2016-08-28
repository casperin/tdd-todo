// @flow
type Props = {
  filter: string,
  onChange: (value: string) => void
}

import React from 'react'

export default ({filter, onChange}: Props) => {
  const _onChange = e => onChange(e.target.value)
  return <div className='filter'>
    <input placeholder='filter' value={filter} onChange={_onChange} />
  </div>
}
