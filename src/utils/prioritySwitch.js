export default function prioritySwitch(priority) {
  switch (priority) {
    case 1:
      return { name: 'Urgent', color: '#FB216C' }
    case 2:
      return { name: 'Regular', color: '#FEA400' }
    case 3:
      return { name: 'Trivial', color: '#0078E8' }

    default:
      return { name: '', color: '#000000' }
  }
}
