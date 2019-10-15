export const formatDate = (timestamp) => {
  let date = new Date(timestamp * 1000);
  var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let completeDate = `${day} ${month} ${year} ${hour}:${minute}`;
  return completeDate;
}