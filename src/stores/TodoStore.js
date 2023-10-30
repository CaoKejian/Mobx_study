import { observable } from 'mobx';

class TodoStore {
  @observable
  todos = ['1', '2', '3'];
  @observable
  filter = "";
}

export default new TodoStore();
