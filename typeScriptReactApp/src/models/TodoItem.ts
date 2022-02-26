export default class TodoItem {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.id = new Date().toISOString();
        this.text = todoText;
    }
}