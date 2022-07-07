import { API_BASE_URL } from 'constants/ApiConstant'

const PriorityServices = {}

PriorityServices.fetchPriorityLabel = function () {
  return fetch(`${API_BASE_URL}/prioritylabeldata`).then((response) =>
    response.json()
  )
}

export default PriorityServices
