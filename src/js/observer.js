//Класс Наблюдатель
class Dep {
    constructor () {
        this.subscribers = [];
    }
    depend () {
        if (target && !this.subscribers.includes(target)){
            this.subscribers.push(target);
        }
    }
    notify () {
        this.subscribers.forEach(sub => sub());
    }
}