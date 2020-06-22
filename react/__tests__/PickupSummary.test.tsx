import React from 'react'

import PickupSummary from '../components/PickupSummary'
import { orderGroupQuery as fiftyItemOrder } from '../mocks/fiftyItemOrder'
import { renderWithOrderGroup } from '../utils/testUtils'

test('renders the number of items', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <PickupSummary />
  )

  expect(queryByText(/30 items/)).toBeTruthy()
})

test('renders the number of stores', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <PickupSummary />
  )

  expect(queryByText(/one store/)).toBeTruthy()
})

test('renders the pickup address', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <PickupSummary />
  )

  expect(queryByText(/copacabana no rio de janeiro/i)).toBeTruthy()
})
