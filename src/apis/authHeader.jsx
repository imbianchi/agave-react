
export default () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  };
};
