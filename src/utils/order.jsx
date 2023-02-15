const order = (repos) => {

   return repos.sort((a, b) => {
      if (a.watchers > b.watchers) {
         return -1;
      }
      if (a.watchers < b.watchers) {
         return 1;
      }

      return 0;
   })
}
export default order;