import '../../mock/index'
import axois from 'axios'

export function goods() {
  return axois.get('/api/goods')
}


export function seller(id) {
  return axois.get('/api/seller?id=' + id)
}

export function rating() {
  return axois.get('/api/ratings')
}
