import { handleAction } from './AppDispatcher';

//Export as singleton
export default {
    
    selectTicker(ticker) {
        handleAction({
          actionType: 'SELECT_TICKER',
          data: ticker
        })
      }
};