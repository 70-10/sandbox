export class DIContainer<DependencyTypes> {
  private registry = new Map<
    keyof DependencyTypes,
    DependencyTypes[keyof DependencyTypes]
  >();

  register<Key extends keyof DependencyTypes, Args extends unknown[]>(
    key: Key,
    Constructor: new (...args: Args) => DependencyTypes[Key],
    ...args: Args
  ): void {
    const instance = new Constructor(...args);
    this.registry.set(key, instance);
  }

  get<K extends keyof DependencyTypes>(key: K): DependencyTypes[K] {
    const instance = this.registry.get(key);
    if (!instance) {
      throw new Error(`No instance found for key: ${String(key)}`);
    }
    return instance as DependencyTypes[K];
  }
}
