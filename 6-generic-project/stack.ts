{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next: StackNode<T> | null;
    };

    class StackImpl<T> implements Stack<T> {
        private head: StackNode<T> | null = null;
        private _size: number = 0;

        constructor(private capacity: number) {}

        get size(): number {
            return this._size;
        }

        push(value: T) {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!');
            }
            const newNode: StackNode<T> = {
                value,
                next: this.head,
            };
            this.head = newNode;
            this._size++;
        }

        pop(): T {
            // if (this.size === 0 || !this.head) {
            if (this.head == null) {
                throw new Error('Stack size is 0');
            }
            const popped = this.head.value;
            this.head = this.head.next;
            this._size--;
            return popped;
        }

        print() {
            console.log(`stack size: ${this.size}`);
            let next = this.head;
            while (next) {
                console.log(next);
                next = next ? next.next : null;
            }
        }
    }

    const stringStack = new StackImpl<string>(10);
    stringStack.push('a');
    stringStack.push('b');
    stringStack.push('c');
    stringStack.print();

    const objStack = new StackImpl<object>(10);
    objStack.push({ name: 'sh' });
    objStack.print();
}
