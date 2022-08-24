### Communicate Data between two independent component in React
1. if you want to transfer data between two independent component in the the react we have to follow the below method
   - Rxjs store
   - global event-driven system
   - PubSub system
2. Event bus implementation using PuSub Pattern. this will allow to listen and dispatch the event from components.
3. Event bus haa 3 methods On, dispatch and remove

```
const eventBust= {
   on(event, callback) {
   }
   dispatch(event, data) {
   }
   remove(event, callback) {
   }
}
```
