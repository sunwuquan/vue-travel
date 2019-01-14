let defaultCity = '北京'
try {
  defaultCity = localStorage.city || '北京'
} catch (e) {}
export default {
  city: defaultCity
}
