export default function isJsonString(data: string) {
  try {
    const regex = /^\{.*\}$/
    if (!regex.test(data)) {
      return false
    }
    JSON.parse(data)
    return true
  } catch {
    return false
  }
}
