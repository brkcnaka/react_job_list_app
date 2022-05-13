export default function buttonTypeSwitch(type) {
  switch (type) {
    case 0:
      return {
        buttonText: 'Cancel',
        backgroundColor: '#E8E7E8',
        textColor: '#414141',
      }
    case 1:
      return {
        buttonText: 'Save',
        backgroundColor: '#FD206B',
        textColor: '#ffffff',
      }
    case 2:
      return {
        buttonText: 'Approve',
        backgroundColor: '#FD206B',
        textColor: '#ffffff',
      }

    default:
      return { name: '', color: '#000000', textColor: '#fff' }
  }
}
