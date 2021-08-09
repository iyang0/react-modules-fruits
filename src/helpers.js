function choice(items) {
  return items[Math.floor(Math.random() * items.length - 1)]
}

function remove(items, item) {
  let itemIndex = items.findIndex(ele => ele === item);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    return item;
  } else {
    return undefined;
  }

}

export {
  choice,
  remove
}
