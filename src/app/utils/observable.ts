
export interface Listener {
    (name: string, data: any): void;
}

export interface ObservableAction {
    (observable: Observable): void;
}

class Observable {

    protected action: ObservableAction;
    protected listeners: Listener[] = [];
    protected delay: number = 0;
    protected cancelled: boolean = false;

    public constructor (action: ObservableAction, delay: number = 0) {
        this.action = action;
        this.delay = delay;
    }

    /**
     * Add a listener to the observable
     * @param listener Listen function
     */
    public addListener(listener: Listener): void {
        this.listeners.push(listener);
    }

    /**
     * Trigger an event for the observable
     * @param name Name of the event
     * @param data Data of the event
     */
    public async trigger (name: string, data: any): Promise<boolean> {
        if (this.cancelled) {
            return false;
        }
        this.listeners.forEach((listener: Listener) => {
            listener(name, data);
        });
        
        await this.sleep(this.delay);
        return true;
    }

    /**
     * Start the async action
     */
    public start (): void {
        new Promise((resolve) => {
            this.action(this);
            resolve(true);
        });
    }

    public cancel (): void {
        this.cancelled = true;
    }

    protected sleep (time: number): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(true), time);
        })
    }
}

export default Observable;
