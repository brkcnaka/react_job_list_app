export default function fetchDataStatusSwitch(status) {
  switch (status) {
    case 0:
      return 'Pending'
    case 1:
      return 'Loading...'
    case 2:
      return 'Choose'
    case 3:
      return 'Fetch Error!'

    default:
      return ''
  }
}
