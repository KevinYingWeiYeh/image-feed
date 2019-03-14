export const createImage = data => {
  return { type: 'CREATE_IMAGE', payload: {title:data.title.value, url:data.url.value} }
}
