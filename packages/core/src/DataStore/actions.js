function setData(data, context, reducer) {
  const type = reducer.toUpperCase().split('_')[0] + '_SYNC';

  return {
    type,
    data,
    context
  };
}

function clearData(data, context, reducer) {
  const type = reducer.toUpperCase().split('_')[0] + '_CLEAR';

  return {
    type,
    data,
    context
  };
}

export { setData, clearData };
