export abstract class GenericRepository<T> {
  abstract findAll(query?: string): Promise<T[]>;
  abstract findById(id: string): Promise<T>;
  abstract create(item: T): Promise<T>;
  abstract createMany(items: T[]): Promise<T[]>;
  abstract update(id: string, item: T): Promise<T>;
  abstract delete(id: string);
}