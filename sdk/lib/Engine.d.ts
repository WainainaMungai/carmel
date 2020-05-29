import { IEngine, ICommand, ISession, EngineState, SessionProps } from '.';
/**
 * Solely reponsible for running Carmel Commands.
 * It acts as the main entry point to the Carmel System.
 * Usually gets invoked by a Carmel Client, such as the Carmel CLI.
 * Only one instance available at all times.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Engine.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Engine implements IEngine {
    /** @internal */
    private _session?;
    /** @internal */
    private _state;
    /** @internal */
    private static _instance?;
    /** @internal */
    private constructor();
    /**
     * Makes sure that the Engine has a single instance
     */
    static get instance(): IEngine;
    /**
     * Move the Engine into a new {@linkcode EngineState}
     *
     * @param state The new {@linkcode EngineState}
     */
    changeState(state: EngineState): void;
    /**
     * Retrieves the current {@linkcode EngineState} of the Engine.
     */
    get state(): EngineState;
    /**
     * Checks whether the Engine has a valid {@linkcode Session}
     */
    get hasSession(): boolean;
    /**
     * Checks whether the Engine has been started or not.
     */
    get isStarted(): boolean;
    /**
     * Create a brand new  {@linkcode Session}
     *
     * @param props The {@linkcode SessionProps} with which to create a new {@linkcode Session}
     */
    newSession(props?: SessionProps): Promise<void>;
    /**
     * Starts a new Engine {@linkcode Session}.
     *
     * @param props The {@linkcode SessionProps} with which to initialize a new {@linkcode Session}
     */
    start(props?: SessionProps): Promise<ISession>;
    /**
     * Ends the current Engine {@linkcode Session} and clean up if necessary.
     */
    stop(): Promise<any>;
    /**
     * Executes a single {@linkcode ICommand}.
     *
     * @param command The {@linkcode ICommand} to execute
     */
    exec(command?: ICommand): Promise<void>;
    /**
     * Runs a {@linkcode Command} in a {@linkcode Session}.
     *
     * @param command The {@linkcode Command} to run
     * @param onlyOnce Whether we want to allow the Engine to process further commands or not
     */
    static run(command: ICommand, onlyOnce?: boolean): Promise<void>;
}