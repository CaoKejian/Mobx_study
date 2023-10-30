import { action, observable } from 'mobx';

class TodoStore {
  @observable
  todos = ['1', '2', '3'];
  @observable
  filter = "";

  @action
  handleChange = async () => {
    this.todos = ['已经改了！', 'haha']
  }
}

export default new TodoStore();
