export default function isObject (data: any) {
  return typeof data === 'object' && !Array.isArray(data)
}
