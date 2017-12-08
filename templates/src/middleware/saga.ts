import createSagaMiddleware from 'redux-saga'
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
    return sagaMiddleware.run(rootSaga)
}

export default sagaMiddleware;