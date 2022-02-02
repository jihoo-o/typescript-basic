{
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next: StackNode | null;
    };

    class StackImpl implements Stack {
        private head: StackNode | null = null;
        private _size: number = 0;

        constructor(private capacity: number) {}

        get size(): number {
            return this._size;
        }

        push(value: string) {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!');
            }
            const newNode: StackNode = {
                value,
                next: this.head,
            };
            this.head = newNode;
            this._size++;
        }

        pop(): string {
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

    const stack = new StackImpl(10);
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    // stack.pop();

    stack.print();
}
