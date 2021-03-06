import React from 'react'

import styled from 'styled-components'
import MdDelete from 'react-icons/lib/md/delete'

const DeleteItem = props =>
  <div {...props}>
    <MdDelete size="24" />
  </div>

export default styled(DeleteItem)`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 34px;
  height: 34px;
  opacity: 0.7;
  background-color: #ffffff;
  border-radius: 50%;

  & :hover {
    background-color: #433e3d;
    color: #ffffff;
  }
`
