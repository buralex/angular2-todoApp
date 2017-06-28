
import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'learn js',
                completed: true
            },
            {
                id: 2,
                title: 'learn angular',
                completed: false
            },
            {
                id: 3,
                title: 'write app',
                completed: false
            }
        ];
        return {todos: todos}
    }
}

