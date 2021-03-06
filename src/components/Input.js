import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'

const Input = ({ initial = '', onChange, ...props }) => (
  <State initial={{ value: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        bind: {
          onChange: event => setState({ value: event.target.value }),
          value: state.value,
        },
        set: value => setState(s => ({ value: set(value, s.value) })),
        value: state.value,
      })
    }
  </State>
)

export default Input
