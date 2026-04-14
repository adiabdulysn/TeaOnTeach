
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model divisions
 * 
 */
export type divisions = $Result.DefaultSelection<Prisma.$divisionsPayload>
/**
 * Model roles
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model ticket_documents
 * 
 */
export type ticket_documents = $Result.DefaultSelection<Prisma.$ticket_documentsPayload>
/**
 * Model ticket_priorities
 * 
 */
export type ticket_priorities = $Result.DefaultSelection<Prisma.$ticket_prioritiesPayload>
/**
 * Model ticket_reply_documents
 * 
 */
export type ticket_reply_documents = $Result.DefaultSelection<Prisma.$ticket_reply_documentsPayload>
/**
 * Model ticket_replys
 * 
 */
export type ticket_replys = $Result.DefaultSelection<Prisma.$ticket_replysPayload>
/**
 * Model ticket_statuses
 * 
 */
export type ticket_statuses = $Result.DefaultSelection<Prisma.$ticket_statusesPayload>
/**
 * Model ticket_types
 * 
 */
export type ticket_types = $Result.DefaultSelection<Prisma.$ticket_typesPayload>
/**
 * Model tickets
 * 
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ticket_replys_ticket_attch: {
  Y: 'Y',
  N: 'N'
};

export type ticket_replys_ticket_attch = (typeof ticket_replys_ticket_attch)[keyof typeof ticket_replys_ticket_attch]


export const tickets_ticket_attach: {
  Y: 'Y',
  N: 'N'
};

export type tickets_ticket_attach = (typeof tickets_ticket_attach)[keyof typeof tickets_ticket_attach]

}

export type ticket_replys_ticket_attch = $Enums.ticket_replys_ticket_attch

export const ticket_replys_ticket_attch: typeof $Enums.ticket_replys_ticket_attch

export type tickets_ticket_attach = $Enums.tickets_ticket_attach

export const tickets_ticket_attach: typeof $Enums.tickets_ticket_attach

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs>;

  /**
   * `prisma.divisions`: Exposes CRUD operations for the **divisions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.divisions.findMany()
    * ```
    */
  get divisions(): Prisma.divisionsDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.ticket_documents`: Exposes CRUD operations for the **ticket_documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_documents
    * const ticket_documents = await prisma.ticket_documents.findMany()
    * ```
    */
  get ticket_documents(): Prisma.ticket_documentsDelegate<ExtArgs>;

  /**
   * `prisma.ticket_priorities`: Exposes CRUD operations for the **ticket_priorities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_priorities
    * const ticket_priorities = await prisma.ticket_priorities.findMany()
    * ```
    */
  get ticket_priorities(): Prisma.ticket_prioritiesDelegate<ExtArgs>;

  /**
   * `prisma.ticket_reply_documents`: Exposes CRUD operations for the **ticket_reply_documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_reply_documents
    * const ticket_reply_documents = await prisma.ticket_reply_documents.findMany()
    * ```
    */
  get ticket_reply_documents(): Prisma.ticket_reply_documentsDelegate<ExtArgs>;

  /**
   * `prisma.ticket_replys`: Exposes CRUD operations for the **ticket_replys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_replys
    * const ticket_replys = await prisma.ticket_replys.findMany()
    * ```
    */
  get ticket_replys(): Prisma.ticket_replysDelegate<ExtArgs>;

  /**
   * `prisma.ticket_statuses`: Exposes CRUD operations for the **ticket_statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_statuses
    * const ticket_statuses = await prisma.ticket_statuses.findMany()
    * ```
    */
  get ticket_statuses(): Prisma.ticket_statusesDelegate<ExtArgs>;

  /**
   * `prisma.ticket_types`: Exposes CRUD operations for the **ticket_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_types
    * const ticket_types = await prisma.ticket_types.findMany()
    * ```
    */
  get ticket_types(): Prisma.ticket_typesDelegate<ExtArgs>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    divisions: 'divisions',
    roles: 'roles',
    ticket_documents: 'ticket_documents',
    ticket_priorities: 'ticket_priorities',
    ticket_reply_documents: 'ticket_reply_documents',
    ticket_replys: 'ticket_replys',
    ticket_statuses: 'ticket_statuses',
    ticket_types: 'ticket_types',
    tickets: 'tickets',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "categories" | "divisions" | "roles" | "ticket_documents" | "ticket_priorities" | "ticket_reply_documents" | "ticket_replys" | "ticket_statuses" | "ticket_types" | "tickets" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      divisions: {
        payload: Prisma.$divisionsPayload<ExtArgs>
        fields: Prisma.divisionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.divisionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.divisionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          findFirst: {
            args: Prisma.divisionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.divisionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          findMany: {
            args: Prisma.divisionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>[]
          }
          create: {
            args: Prisma.divisionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          createMany: {
            args: Prisma.divisionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.divisionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          update: {
            args: Prisma.divisionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          deleteMany: {
            args: Prisma.divisionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.divisionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.divisionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionsPayload>
          }
          aggregate: {
            args: Prisma.DivisionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivisions>
          }
          groupBy: {
            args: Prisma.divisionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.divisionsCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionsCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      ticket_documents: {
        payload: Prisma.$ticket_documentsPayload<ExtArgs>
        fields: Prisma.ticket_documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          findFirst: {
            args: Prisma.ticket_documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          findMany: {
            args: Prisma.ticket_documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>[]
          }
          create: {
            args: Prisma.ticket_documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          createMany: {
            args: Prisma.ticket_documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          update: {
            args: Prisma.ticket_documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          deleteMany: {
            args: Prisma.ticket_documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_documentsPayload>
          }
          aggregate: {
            args: Prisma.Ticket_documentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_documents>
          }
          groupBy: {
            args: Prisma.ticket_documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_documentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_documentsCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_documentsCountAggregateOutputType> | number
          }
        }
      }
      ticket_priorities: {
        payload: Prisma.$ticket_prioritiesPayload<ExtArgs>
        fields: Prisma.ticket_prioritiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_prioritiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_prioritiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          findFirst: {
            args: Prisma.ticket_prioritiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_prioritiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          findMany: {
            args: Prisma.ticket_prioritiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>[]
          }
          create: {
            args: Prisma.ticket_prioritiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          createMany: {
            args: Prisma.ticket_prioritiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_prioritiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          update: {
            args: Prisma.ticket_prioritiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          deleteMany: {
            args: Prisma.ticket_prioritiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_prioritiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_prioritiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_prioritiesPayload>
          }
          aggregate: {
            args: Prisma.Ticket_prioritiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_priorities>
          }
          groupBy: {
            args: Prisma.ticket_prioritiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_prioritiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_prioritiesCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_prioritiesCountAggregateOutputType> | number
          }
        }
      }
      ticket_reply_documents: {
        payload: Prisma.$ticket_reply_documentsPayload<ExtArgs>
        fields: Prisma.ticket_reply_documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_reply_documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_reply_documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          findFirst: {
            args: Prisma.ticket_reply_documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_reply_documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          findMany: {
            args: Prisma.ticket_reply_documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>[]
          }
          create: {
            args: Prisma.ticket_reply_documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          createMany: {
            args: Prisma.ticket_reply_documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_reply_documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          update: {
            args: Prisma.ticket_reply_documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          deleteMany: {
            args: Prisma.ticket_reply_documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_reply_documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_reply_documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_reply_documentsPayload>
          }
          aggregate: {
            args: Prisma.Ticket_reply_documentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_reply_documents>
          }
          groupBy: {
            args: Prisma.ticket_reply_documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_reply_documentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_reply_documentsCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_reply_documentsCountAggregateOutputType> | number
          }
        }
      }
      ticket_replys: {
        payload: Prisma.$ticket_replysPayload<ExtArgs>
        fields: Prisma.ticket_replysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_replysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_replysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          findFirst: {
            args: Prisma.ticket_replysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_replysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          findMany: {
            args: Prisma.ticket_replysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>[]
          }
          create: {
            args: Prisma.ticket_replysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          createMany: {
            args: Prisma.ticket_replysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_replysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          update: {
            args: Prisma.ticket_replysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          deleteMany: {
            args: Prisma.ticket_replysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_replysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_replysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_replysPayload>
          }
          aggregate: {
            args: Prisma.Ticket_replysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_replys>
          }
          groupBy: {
            args: Prisma.ticket_replysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_replysGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_replysCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_replysCountAggregateOutputType> | number
          }
        }
      }
      ticket_statuses: {
        payload: Prisma.$ticket_statusesPayload<ExtArgs>
        fields: Prisma.ticket_statusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_statusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_statusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          findFirst: {
            args: Prisma.ticket_statusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_statusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          findMany: {
            args: Prisma.ticket_statusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>[]
          }
          create: {
            args: Prisma.ticket_statusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          createMany: {
            args: Prisma.ticket_statusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_statusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          update: {
            args: Prisma.ticket_statusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          deleteMany: {
            args: Prisma.ticket_statusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_statusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_statusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_statusesPayload>
          }
          aggregate: {
            args: Prisma.Ticket_statusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_statuses>
          }
          groupBy: {
            args: Prisma.ticket_statusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_statusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_statusesCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_statusesCountAggregateOutputType> | number
          }
        }
      }
      ticket_types: {
        payload: Prisma.$ticket_typesPayload<ExtArgs>
        fields: Prisma.ticket_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          findFirst: {
            args: Prisma.ticket_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          findMany: {
            args: Prisma.ticket_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>[]
          }
          create: {
            args: Prisma.ticket_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          createMany: {
            args: Prisma.ticket_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          update: {
            args: Prisma.ticket_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          deleteMany: {
            args: Prisma.ticket_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_typesPayload>
          }
          aggregate: {
            args: Prisma.Ticket_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_types>
          }
          groupBy: {
            args: Prisma.ticket_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_typesCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    tickets: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CategoriesCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type DivisionsCountOutputType
   */

  export type DivisionsCountOutputType = {
    tickets: number
  }

  export type DivisionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | DivisionsCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * DivisionsCountOutputType without action
   */
  export type DivisionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsCountOutputType
     */
    select?: DivisionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisionsCountOutputType without action
   */
  export type DivisionsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type Ticket_prioritiesCountOutputType
   */

  export type Ticket_prioritiesCountOutputType = {
    tickets: number
  }

  export type Ticket_prioritiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Ticket_prioritiesCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Ticket_prioritiesCountOutputType without action
   */
  export type Ticket_prioritiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_prioritiesCountOutputType
     */
    select?: Ticket_prioritiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_prioritiesCountOutputType without action
   */
  export type Ticket_prioritiesCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type Ticket_replysCountOutputType
   */

  export type Ticket_replysCountOutputType = {
    ticket_reply_documents: number
  }

  export type Ticket_replysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_reply_documents?: boolean | Ticket_replysCountOutputTypeCountTicket_reply_documentsArgs
  }

  // Custom InputTypes
  /**
   * Ticket_replysCountOutputType without action
   */
  export type Ticket_replysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_replysCountOutputType
     */
    select?: Ticket_replysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_replysCountOutputType without action
   */
  export type Ticket_replysCountOutputTypeCountTicket_reply_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_reply_documentsWhereInput
  }


  /**
   * Count Type Ticket_statusesCountOutputType
   */

  export type Ticket_statusesCountOutputType = {
    ticket_replys: number
    tickets: number
  }

  export type Ticket_statusesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_replys?: boolean | Ticket_statusesCountOutputTypeCountTicket_replysArgs
    tickets?: boolean | Ticket_statusesCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Ticket_statusesCountOutputType without action
   */
  export type Ticket_statusesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_statusesCountOutputType
     */
    select?: Ticket_statusesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_statusesCountOutputType without action
   */
  export type Ticket_statusesCountOutputTypeCountTicket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_replysWhereInput
  }

  /**
   * Ticket_statusesCountOutputType without action
   */
  export type Ticket_statusesCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type Ticket_typesCountOutputType
   */

  export type Ticket_typesCountOutputType = {
    tickets: number
  }

  export type Ticket_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Ticket_typesCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Ticket_typesCountOutputType without action
   */
  export type Ticket_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_typesCountOutputType
     */
    select?: Ticket_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_typesCountOutputType without action
   */
  export type Ticket_typesCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type TicketsCountOutputType
   */

  export type TicketsCountOutputType = {
    ticket_documents: number
    ticket_replys: number
  }

  export type TicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_documents?: boolean | TicketsCountOutputTypeCountTicket_documentsArgs
    ticket_replys?: boolean | TicketsCountOutputTypeCountTicket_replysArgs
  }

  // Custom InputTypes
  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketsCountOutputType
     */
    select?: TicketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountTicket_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_documentsWhereInput
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountTicket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_replysWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ticket_replys: number
    tickets_tickets_created_user_idTousers: number
    tickets_tickets_updated_user_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_replys?: boolean | UsersCountOutputTypeCountTicket_replysArgs
    tickets_tickets_created_user_idTousers?: boolean | UsersCountOutputTypeCountTickets_tickets_created_user_idTousersArgs
    tickets_tickets_updated_user_idTousers?: boolean | UsersCountOutputTypeCountTickets_tickets_updated_user_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_replysWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTickets_tickets_created_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTickets_tickets_updated_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
    icon: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
    icon: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    color: number
    created_at: number
    updated_at: number
    icon: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
    color?: true
    created_at?: true
    updated_at?: true
    icon?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    color?: true
    created_at?: true
    updated_at?: true
    icon?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    color?: true
    created_at?: true
    updated_at?: true
    icon?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    category_name: string
    color: string
    created_at: Date | null
    updated_at: Date | null
    icon: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon?: boolean
    tickets?: boolean | categories$ticketsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>


  export type categoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
    icon?: boolean
  }

  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | categories$ticketsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
      color: string
      created_at: Date | null
      updated_at: Date | null
      icon: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends categories$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, categories$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */ 
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'Int'>
    readonly category_name: FieldRef<"categories", 'String'>
    readonly color: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
    readonly icon: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
  }

  /**
   * categories.tickets
   */
  export type categories$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model divisions
   */

  export type AggregateDivisions = {
    _count: DivisionsCountAggregateOutputType | null
    _avg: DivisionsAvgAggregateOutputType | null
    _sum: DivisionsSumAggregateOutputType | null
    _min: DivisionsMinAggregateOutputType | null
    _max: DivisionsMaxAggregateOutputType | null
  }

  export type DivisionsAvgAggregateOutputType = {
    division_id: number | null
  }

  export type DivisionsSumAggregateOutputType = {
    division_id: number | null
  }

  export type DivisionsMinAggregateOutputType = {
    division_id: number | null
    division_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DivisionsMaxAggregateOutputType = {
    division_id: number | null
    division_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DivisionsCountAggregateOutputType = {
    division_id: number
    division_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DivisionsAvgAggregateInputType = {
    division_id?: true
  }

  export type DivisionsSumAggregateInputType = {
    division_id?: true
  }

  export type DivisionsMinAggregateInputType = {
    division_id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DivisionsMaxAggregateInputType = {
    division_id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DivisionsCountAggregateInputType = {
    division_id?: true
    division_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DivisionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which divisions to aggregate.
     */
    where?: divisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionsOrderByWithRelationInput | divisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: divisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned divisions
    **/
    _count?: true | DivisionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionsMaxAggregateInputType
  }

  export type GetDivisionsAggregateType<T extends DivisionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisions[P]>
      : GetScalarType<T[P], AggregateDivisions[P]>
  }




  export type divisionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: divisionsWhereInput
    orderBy?: divisionsOrderByWithAggregationInput | divisionsOrderByWithAggregationInput[]
    by: DivisionsScalarFieldEnum[] | DivisionsScalarFieldEnum
    having?: divisionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionsCountAggregateInputType | true
    _avg?: DivisionsAvgAggregateInputType
    _sum?: DivisionsSumAggregateInputType
    _min?: DivisionsMinAggregateInputType
    _max?: DivisionsMaxAggregateInputType
  }

  export type DivisionsGroupByOutputType = {
    division_id: number
    division_name: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: DivisionsCountAggregateOutputType | null
    _avg: DivisionsAvgAggregateOutputType | null
    _sum: DivisionsSumAggregateOutputType | null
    _min: DivisionsMinAggregateOutputType | null
    _max: DivisionsMaxAggregateOutputType | null
  }

  type GetDivisionsGroupByPayload<T extends divisionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionsGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionsGroupByOutputType[P]>
        }
      >
    >


  export type divisionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    division_id?: boolean
    division_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    tickets?: boolean | divisions$ticketsArgs<ExtArgs>
    _count?: boolean | DivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisions"]>


  export type divisionsSelectScalar = {
    division_id?: boolean
    division_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type divisionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | divisions$ticketsArgs<ExtArgs>
    _count?: boolean | DivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $divisionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "divisions"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      division_id: number
      division_name: string
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["divisions"]>
    composites: {}
  }

  type divisionsGetPayload<S extends boolean | null | undefined | divisionsDefaultArgs> = $Result.GetResult<Prisma.$divisionsPayload, S>

  type divisionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<divisionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DivisionsCountAggregateInputType | true
    }

  export interface divisionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['divisions'], meta: { name: 'divisions' } }
    /**
     * Find zero or one Divisions that matches the filter.
     * @param {divisionsFindUniqueArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends divisionsFindUniqueArgs>(args: SelectSubset<T, divisionsFindUniqueArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Divisions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {divisionsFindUniqueOrThrowArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends divisionsFindUniqueOrThrowArgs>(args: SelectSubset<T, divisionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsFindFirstArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends divisionsFindFirstArgs>(args?: SelectSubset<T, divisionsFindFirstArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Divisions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsFindFirstOrThrowArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends divisionsFindFirstOrThrowArgs>(args?: SelectSubset<T, divisionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.divisions.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.divisions.findMany({ take: 10 })
     * 
     * // Only select the `division_id`
     * const divisionsWithDivision_idOnly = await prisma.divisions.findMany({ select: { division_id: true } })
     * 
     */
    findMany<T extends divisionsFindManyArgs>(args?: SelectSubset<T, divisionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Divisions.
     * @param {divisionsCreateArgs} args - Arguments to create a Divisions.
     * @example
     * // Create one Divisions
     * const Divisions = await prisma.divisions.create({
     *   data: {
     *     // ... data to create a Divisions
     *   }
     * })
     * 
     */
    create<T extends divisionsCreateArgs>(args: SelectSubset<T, divisionsCreateArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Divisions.
     * @param {divisionsCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const divisions = await prisma.divisions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends divisionsCreateManyArgs>(args?: SelectSubset<T, divisionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Divisions.
     * @param {divisionsDeleteArgs} args - Arguments to delete one Divisions.
     * @example
     * // Delete one Divisions
     * const Divisions = await prisma.divisions.delete({
     *   where: {
     *     // ... filter to delete one Divisions
     *   }
     * })
     * 
     */
    delete<T extends divisionsDeleteArgs>(args: SelectSubset<T, divisionsDeleteArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Divisions.
     * @param {divisionsUpdateArgs} args - Arguments to update one Divisions.
     * @example
     * // Update one Divisions
     * const divisions = await prisma.divisions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends divisionsUpdateArgs>(args: SelectSubset<T, divisionsUpdateArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Divisions.
     * @param {divisionsDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.divisions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends divisionsDeleteManyArgs>(args?: SelectSubset<T, divisionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const divisions = await prisma.divisions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends divisionsUpdateManyArgs>(args: SelectSubset<T, divisionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Divisions.
     * @param {divisionsUpsertArgs} args - Arguments to update or create a Divisions.
     * @example
     * // Update or create a Divisions
     * const divisions = await prisma.divisions.upsert({
     *   create: {
     *     // ... data to create a Divisions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Divisions we want to update
     *   }
     * })
     */
    upsert<T extends divisionsUpsertArgs>(args: SelectSubset<T, divisionsUpsertArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.divisions.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends divisionsCountArgs>(
      args?: Subset<T, divisionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivisionsAggregateArgs>(args: Subset<T, DivisionsAggregateArgs>): Prisma.PrismaPromise<GetDivisionsAggregateType<T>>

    /**
     * Group by Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends divisionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: divisionsGroupByArgs['orderBy'] }
        : { orderBy?: divisionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, divisionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the divisions model
   */
  readonly fields: divisionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for divisions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__divisionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends divisions$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, divisions$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the divisions model
   */ 
  interface divisionsFieldRefs {
    readonly division_id: FieldRef<"divisions", 'Int'>
    readonly division_name: FieldRef<"divisions", 'String'>
    readonly created_at: FieldRef<"divisions", 'DateTime'>
    readonly updated_at: FieldRef<"divisions", 'DateTime'>
    readonly deleted_at: FieldRef<"divisions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * divisions findUnique
   */
  export type divisionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where: divisionsWhereUniqueInput
  }

  /**
   * divisions findUniqueOrThrow
   */
  export type divisionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where: divisionsWhereUniqueInput
  }

  /**
   * divisions findFirst
   */
  export type divisionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where?: divisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionsOrderByWithRelationInput | divisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for divisions.
     */
    cursor?: divisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of divisions.
     */
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }

  /**
   * divisions findFirstOrThrow
   */
  export type divisionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where?: divisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionsOrderByWithRelationInput | divisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for divisions.
     */
    cursor?: divisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of divisions.
     */
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }

  /**
   * divisions findMany
   */
  export type divisionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where?: divisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionsOrderByWithRelationInput | divisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing divisions.
     */
    cursor?: divisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }

  /**
   * divisions create
   */
  export type divisionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * The data needed to create a divisions.
     */
    data: XOR<divisionsCreateInput, divisionsUncheckedCreateInput>
  }

  /**
   * divisions createMany
   */
  export type divisionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many divisions.
     */
    data: divisionsCreateManyInput | divisionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * divisions update
   */
  export type divisionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * The data needed to update a divisions.
     */
    data: XOR<divisionsUpdateInput, divisionsUncheckedUpdateInput>
    /**
     * Choose, which divisions to update.
     */
    where: divisionsWhereUniqueInput
  }

  /**
   * divisions updateMany
   */
  export type divisionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update divisions.
     */
    data: XOR<divisionsUpdateManyMutationInput, divisionsUncheckedUpdateManyInput>
    /**
     * Filter which divisions to update
     */
    where?: divisionsWhereInput
  }

  /**
   * divisions upsert
   */
  export type divisionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * The filter to search for the divisions to update in case it exists.
     */
    where: divisionsWhereUniqueInput
    /**
     * In case the divisions found by the `where` argument doesn't exist, create a new divisions with this data.
     */
    create: XOR<divisionsCreateInput, divisionsUncheckedCreateInput>
    /**
     * In case the divisions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<divisionsUpdateInput, divisionsUncheckedUpdateInput>
  }

  /**
   * divisions delete
   */
  export type divisionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
    /**
     * Filter which divisions to delete.
     */
    where: divisionsWhereUniqueInput
  }

  /**
   * divisions deleteMany
   */
  export type divisionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which divisions to delete
     */
    where?: divisionsWhereInput
  }

  /**
   * divisions.tickets
   */
  export type divisions$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * divisions without action
   */
  export type divisionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the divisions
     */
    select?: divisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionsInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RolesSumAggregateOutputType = {
    role_id: number | null
  }

  export type RolesMinAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    permissions: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    permissions: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    role_id: number
    role_name: number
    permissions: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    role_id?: true
  }

  export type RolesSumAggregateInputType = {
    role_id?: true
  }

  export type RolesMinAggregateInputType = {
    role_id?: true
    role_name?: true
    permissions?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    role_id?: true
    role_name?: true
    permissions?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    role_id?: true
    role_name?: true
    permissions?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    role_id: number
    role_name: string
    permissions: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    permissions?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>


  export type rolesSelectScalar = {
    role_id?: boolean
    role_name?: boolean
    permissions?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: string
      permissions: string | null
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const rolesWithRole_idOnly = await prisma.roles.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly role_id: FieldRef<"roles", 'Int'>
    readonly role_name: FieldRef<"roles", 'String'>
    readonly permissions: FieldRef<"roles", 'String'>
    readonly description: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model ticket_documents
   */

  export type AggregateTicket_documents = {
    _count: Ticket_documentsCountAggregateOutputType | null
    _avg: Ticket_documentsAvgAggregateOutputType | null
    _sum: Ticket_documentsSumAggregateOutputType | null
    _min: Ticket_documentsMinAggregateOutputType | null
    _max: Ticket_documentsMaxAggregateOutputType | null
  }

  export type Ticket_documentsAvgAggregateOutputType = {
    ticket_document_id: number | null
    ticket_id: number | null
    file_size: number | null
  }

  export type Ticket_documentsSumAggregateOutputType = {
    ticket_document_id: bigint | null
    ticket_id: bigint | null
    file_size: number | null
  }

  export type Ticket_documentsMinAggregateOutputType = {
    ticket_document_id: bigint | null
    ticket_id: bigint | null
    file_name: string | null
    file_path: string | null
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_documentsMaxAggregateOutputType = {
    ticket_document_id: bigint | null
    ticket_id: bigint | null
    file_name: string | null
    file_path: string | null
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_documentsCountAggregateOutputType = {
    ticket_document_id: number
    ticket_id: number
    file_name: number
    file_path: number
    file_size: number
    file_extension: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ticket_documentsAvgAggregateInputType = {
    ticket_document_id?: true
    ticket_id?: true
    file_size?: true
  }

  export type Ticket_documentsSumAggregateInputType = {
    ticket_document_id?: true
    ticket_id?: true
    file_size?: true
  }

  export type Ticket_documentsMinAggregateInputType = {
    ticket_document_id?: true
    ticket_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_documentsMaxAggregateInputType = {
    ticket_document_id?: true
    ticket_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_documentsCountAggregateInputType = {
    ticket_document_id?: true
    ticket_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ticket_documentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_documents to aggregate.
     */
    where?: ticket_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_documents to fetch.
     */
    orderBy?: ticket_documentsOrderByWithRelationInput | ticket_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_documents
    **/
    _count?: true | Ticket_documentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_documentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_documentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_documentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_documentsMaxAggregateInputType
  }

  export type GetTicket_documentsAggregateType<T extends Ticket_documentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_documents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_documents[P]>
      : GetScalarType<T[P], AggregateTicket_documents[P]>
  }




  export type ticket_documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_documentsWhereInput
    orderBy?: ticket_documentsOrderByWithAggregationInput | ticket_documentsOrderByWithAggregationInput[]
    by: Ticket_documentsScalarFieldEnum[] | Ticket_documentsScalarFieldEnum
    having?: ticket_documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_documentsCountAggregateInputType | true
    _avg?: Ticket_documentsAvgAggregateInputType
    _sum?: Ticket_documentsSumAggregateInputType
    _min?: Ticket_documentsMinAggregateInputType
    _max?: Ticket_documentsMaxAggregateInputType
  }

  export type Ticket_documentsGroupByOutputType = {
    ticket_document_id: bigint
    ticket_id: bigint
    file_name: string
    file_path: string
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Ticket_documentsCountAggregateOutputType | null
    _avg: Ticket_documentsAvgAggregateOutputType | null
    _sum: Ticket_documentsSumAggregateOutputType | null
    _min: Ticket_documentsMinAggregateOutputType | null
    _max: Ticket_documentsMaxAggregateOutputType | null
  }

  type GetTicket_documentsGroupByPayload<T extends ticket_documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_documentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_documentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_documentsGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_documentsGroupByOutputType[P]>
        }
      >
    >


  export type ticket_documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_document_id?: boolean
    ticket_id?: boolean
    file_name?: boolean
    file_path?: boolean
    file_size?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    tickets?: boolean | ticketsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_documents"]>


  export type ticket_documentsSelectScalar = {
    ticket_document_id?: boolean
    ticket_id?: boolean
    file_name?: boolean
    file_path?: boolean
    file_size?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ticket_documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ticketsDefaultArgs<ExtArgs>
  }

  export type $ticket_documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_documents"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_document_id: bigint
      ticket_id: bigint
      file_name: string
      file_path: string
      file_size: number | null
      file_extension: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ticket_documents"]>
    composites: {}
  }

  type ticket_documentsGetPayload<S extends boolean | null | undefined | ticket_documentsDefaultArgs> = $Result.GetResult<Prisma.$ticket_documentsPayload, S>

  type ticket_documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_documentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_documentsCountAggregateInputType | true
    }

  export interface ticket_documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_documents'], meta: { name: 'ticket_documents' } }
    /**
     * Find zero or one Ticket_documents that matches the filter.
     * @param {ticket_documentsFindUniqueArgs} args - Arguments to find a Ticket_documents
     * @example
     * // Get one Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_documentsFindUniqueArgs>(args: SelectSubset<T, ticket_documentsFindUniqueArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_documents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_documentsFindUniqueOrThrowArgs} args - Arguments to find a Ticket_documents
     * @example
     * // Get one Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsFindFirstArgs} args - Arguments to find a Ticket_documents
     * @example
     * // Get one Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_documentsFindFirstArgs>(args?: SelectSubset<T, ticket_documentsFindFirstArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsFindFirstOrThrowArgs} args - Arguments to find a Ticket_documents
     * @example
     * // Get one Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findMany()
     * 
     * // Get first 10 Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.findMany({ take: 10 })
     * 
     * // Only select the `ticket_document_id`
     * const ticket_documentsWithTicket_document_idOnly = await prisma.ticket_documents.findMany({ select: { ticket_document_id: true } })
     * 
     */
    findMany<T extends ticket_documentsFindManyArgs>(args?: SelectSubset<T, ticket_documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_documents.
     * @param {ticket_documentsCreateArgs} args - Arguments to create a Ticket_documents.
     * @example
     * // Create one Ticket_documents
     * const Ticket_documents = await prisma.ticket_documents.create({
     *   data: {
     *     // ... data to create a Ticket_documents
     *   }
     * })
     * 
     */
    create<T extends ticket_documentsCreateArgs>(args: SelectSubset<T, ticket_documentsCreateArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_documents.
     * @param {ticket_documentsCreateManyArgs} args - Arguments to create many Ticket_documents.
     * @example
     * // Create many Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_documentsCreateManyArgs>(args?: SelectSubset<T, ticket_documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_documents.
     * @param {ticket_documentsDeleteArgs} args - Arguments to delete one Ticket_documents.
     * @example
     * // Delete one Ticket_documents
     * const Ticket_documents = await prisma.ticket_documents.delete({
     *   where: {
     *     // ... filter to delete one Ticket_documents
     *   }
     * })
     * 
     */
    delete<T extends ticket_documentsDeleteArgs>(args: SelectSubset<T, ticket_documentsDeleteArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_documents.
     * @param {ticket_documentsUpdateArgs} args - Arguments to update one Ticket_documents.
     * @example
     * // Update one Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_documentsUpdateArgs>(args: SelectSubset<T, ticket_documentsUpdateArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_documents.
     * @param {ticket_documentsDeleteManyArgs} args - Arguments to filter Ticket_documents to delete.
     * @example
     * // Delete a few Ticket_documents
     * const { count } = await prisma.ticket_documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_documentsDeleteManyArgs>(args?: SelectSubset<T, ticket_documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_documentsUpdateManyArgs>(args: SelectSubset<T, ticket_documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_documents.
     * @param {ticket_documentsUpsertArgs} args - Arguments to update or create a Ticket_documents.
     * @example
     * // Update or create a Ticket_documents
     * const ticket_documents = await prisma.ticket_documents.upsert({
     *   create: {
     *     // ... data to create a Ticket_documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_documents we want to update
     *   }
     * })
     */
    upsert<T extends ticket_documentsUpsertArgs>(args: SelectSubset<T, ticket_documentsUpsertArgs<ExtArgs>>): Prisma__ticket_documentsClient<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsCountArgs} args - Arguments to filter Ticket_documents to count.
     * @example
     * // Count the number of Ticket_documents
     * const count = await prisma.ticket_documents.count({
     *   where: {
     *     // ... the filter for the Ticket_documents we want to count
     *   }
     * })
    **/
    count<T extends ticket_documentsCountArgs>(
      args?: Subset<T, ticket_documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_documentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_documentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_documentsAggregateArgs>(args: Subset<T, Ticket_documentsAggregateArgs>): Prisma.PrismaPromise<GetTicket_documentsAggregateType<T>>

    /**
     * Group by Ticket_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_documentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_documentsGroupByArgs['orderBy'] }
        : { orderBy?: ticket_documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_documentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_documents model
   */
  readonly fields: ticket_documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends ticketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketsDefaultArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_documents model
   */ 
  interface ticket_documentsFieldRefs {
    readonly ticket_document_id: FieldRef<"ticket_documents", 'BigInt'>
    readonly ticket_id: FieldRef<"ticket_documents", 'BigInt'>
    readonly file_name: FieldRef<"ticket_documents", 'String'>
    readonly file_path: FieldRef<"ticket_documents", 'String'>
    readonly file_size: FieldRef<"ticket_documents", 'Int'>
    readonly file_extension: FieldRef<"ticket_documents", 'String'>
    readonly created_at: FieldRef<"ticket_documents", 'DateTime'>
    readonly updated_at: FieldRef<"ticket_documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_documents findUnique
   */
  export type ticket_documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_documents to fetch.
     */
    where: ticket_documentsWhereUniqueInput
  }

  /**
   * ticket_documents findUniqueOrThrow
   */
  export type ticket_documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_documents to fetch.
     */
    where: ticket_documentsWhereUniqueInput
  }

  /**
   * ticket_documents findFirst
   */
  export type ticket_documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_documents to fetch.
     */
    where?: ticket_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_documents to fetch.
     */
    orderBy?: ticket_documentsOrderByWithRelationInput | ticket_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_documents.
     */
    cursor?: ticket_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_documents.
     */
    distinct?: Ticket_documentsScalarFieldEnum | Ticket_documentsScalarFieldEnum[]
  }

  /**
   * ticket_documents findFirstOrThrow
   */
  export type ticket_documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_documents to fetch.
     */
    where?: ticket_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_documents to fetch.
     */
    orderBy?: ticket_documentsOrderByWithRelationInput | ticket_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_documents.
     */
    cursor?: ticket_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_documents.
     */
    distinct?: Ticket_documentsScalarFieldEnum | Ticket_documentsScalarFieldEnum[]
  }

  /**
   * ticket_documents findMany
   */
  export type ticket_documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_documents to fetch.
     */
    where?: ticket_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_documents to fetch.
     */
    orderBy?: ticket_documentsOrderByWithRelationInput | ticket_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_documents.
     */
    cursor?: ticket_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_documents.
     */
    skip?: number
    distinct?: Ticket_documentsScalarFieldEnum | Ticket_documentsScalarFieldEnum[]
  }

  /**
   * ticket_documents create
   */
  export type ticket_documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_documents.
     */
    data: XOR<ticket_documentsCreateInput, ticket_documentsUncheckedCreateInput>
  }

  /**
   * ticket_documents createMany
   */
  export type ticket_documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_documents.
     */
    data: ticket_documentsCreateManyInput | ticket_documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_documents update
   */
  export type ticket_documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_documents.
     */
    data: XOR<ticket_documentsUpdateInput, ticket_documentsUncheckedUpdateInput>
    /**
     * Choose, which ticket_documents to update.
     */
    where: ticket_documentsWhereUniqueInput
  }

  /**
   * ticket_documents updateMany
   */
  export type ticket_documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_documents.
     */
    data: XOR<ticket_documentsUpdateManyMutationInput, ticket_documentsUncheckedUpdateManyInput>
    /**
     * Filter which ticket_documents to update
     */
    where?: ticket_documentsWhereInput
  }

  /**
   * ticket_documents upsert
   */
  export type ticket_documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_documents to update in case it exists.
     */
    where: ticket_documentsWhereUniqueInput
    /**
     * In case the ticket_documents found by the `where` argument doesn't exist, create a new ticket_documents with this data.
     */
    create: XOR<ticket_documentsCreateInput, ticket_documentsUncheckedCreateInput>
    /**
     * In case the ticket_documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_documentsUpdateInput, ticket_documentsUncheckedUpdateInput>
  }

  /**
   * ticket_documents delete
   */
  export type ticket_documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    /**
     * Filter which ticket_documents to delete.
     */
    where: ticket_documentsWhereUniqueInput
  }

  /**
   * ticket_documents deleteMany
   */
  export type ticket_documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_documents to delete
     */
    where?: ticket_documentsWhereInput
  }

  /**
   * ticket_documents without action
   */
  export type ticket_documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
  }


  /**
   * Model ticket_priorities
   */

  export type AggregateTicket_priorities = {
    _count: Ticket_prioritiesCountAggregateOutputType | null
    _avg: Ticket_prioritiesAvgAggregateOutputType | null
    _sum: Ticket_prioritiesSumAggregateOutputType | null
    _min: Ticket_prioritiesMinAggregateOutputType | null
    _max: Ticket_prioritiesMaxAggregateOutputType | null
  }

  export type Ticket_prioritiesAvgAggregateOutputType = {
    ticket_priority_id: number | null
  }

  export type Ticket_prioritiesSumAggregateOutputType = {
    ticket_priority_id: number | null
  }

  export type Ticket_prioritiesMinAggregateOutputType = {
    ticket_priority_id: number | null
    ticket_priority_name: string | null
    color: string | null
    icon: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ticket_prioritiesMaxAggregateOutputType = {
    ticket_priority_id: number | null
    ticket_priority_name: string | null
    color: string | null
    icon: string | null
    is_default: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Ticket_prioritiesCountAggregateOutputType = {
    ticket_priority_id: number
    ticket_priority_name: number
    color: number
    icon: number
    is_default: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ticket_prioritiesAvgAggregateInputType = {
    ticket_priority_id?: true
  }

  export type Ticket_prioritiesSumAggregateInputType = {
    ticket_priority_id?: true
  }

  export type Ticket_prioritiesMinAggregateInputType = {
    ticket_priority_id?: true
    ticket_priority_name?: true
    color?: true
    icon?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ticket_prioritiesMaxAggregateInputType = {
    ticket_priority_id?: true
    ticket_priority_name?: true
    color?: true
    icon?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ticket_prioritiesCountAggregateInputType = {
    ticket_priority_id?: true
    ticket_priority_name?: true
    color?: true
    icon?: true
    is_default?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ticket_prioritiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_priorities to aggregate.
     */
    where?: ticket_prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_priorities to fetch.
     */
    orderBy?: ticket_prioritiesOrderByWithRelationInput | ticket_prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_priorities
    **/
    _count?: true | Ticket_prioritiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_prioritiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_prioritiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_prioritiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_prioritiesMaxAggregateInputType
  }

  export type GetTicket_prioritiesAggregateType<T extends Ticket_prioritiesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_priorities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_priorities[P]>
      : GetScalarType<T[P], AggregateTicket_priorities[P]>
  }




  export type ticket_prioritiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_prioritiesWhereInput
    orderBy?: ticket_prioritiesOrderByWithAggregationInput | ticket_prioritiesOrderByWithAggregationInput[]
    by: Ticket_prioritiesScalarFieldEnum[] | Ticket_prioritiesScalarFieldEnum
    having?: ticket_prioritiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_prioritiesCountAggregateInputType | true
    _avg?: Ticket_prioritiesAvgAggregateInputType
    _sum?: Ticket_prioritiesSumAggregateInputType
    _min?: Ticket_prioritiesMinAggregateInputType
    _max?: Ticket_prioritiesMaxAggregateInputType
  }

  export type Ticket_prioritiesGroupByOutputType = {
    ticket_priority_id: number
    ticket_priority_name: string
    color: string | null
    icon: string | null
    is_default: boolean | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: Ticket_prioritiesCountAggregateOutputType | null
    _avg: Ticket_prioritiesAvgAggregateOutputType | null
    _sum: Ticket_prioritiesSumAggregateOutputType | null
    _min: Ticket_prioritiesMinAggregateOutputType | null
    _max: Ticket_prioritiesMaxAggregateOutputType | null
  }

  type GetTicket_prioritiesGroupByPayload<T extends ticket_prioritiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_prioritiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_prioritiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_prioritiesGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_prioritiesGroupByOutputType[P]>
        }
      >
    >


  export type ticket_prioritiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_priority_id?: boolean
    ticket_priority_name?: boolean
    color?: boolean
    icon?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    tickets?: boolean | ticket_priorities$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_prioritiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_priorities"]>


  export type ticket_prioritiesSelectScalar = {
    ticket_priority_id?: boolean
    ticket_priority_name?: boolean
    color?: boolean
    icon?: boolean
    is_default?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ticket_prioritiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ticket_priorities$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_prioritiesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticket_prioritiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_priorities"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_priority_id: number
      ticket_priority_name: string
      color: string | null
      icon: string | null
      is_default: boolean | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["ticket_priorities"]>
    composites: {}
  }

  type ticket_prioritiesGetPayload<S extends boolean | null | undefined | ticket_prioritiesDefaultArgs> = $Result.GetResult<Prisma.$ticket_prioritiesPayload, S>

  type ticket_prioritiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_prioritiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_prioritiesCountAggregateInputType | true
    }

  export interface ticket_prioritiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_priorities'], meta: { name: 'ticket_priorities' } }
    /**
     * Find zero or one Ticket_priorities that matches the filter.
     * @param {ticket_prioritiesFindUniqueArgs} args - Arguments to find a Ticket_priorities
     * @example
     * // Get one Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_prioritiesFindUniqueArgs>(args: SelectSubset<T, ticket_prioritiesFindUniqueArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_priorities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_prioritiesFindUniqueOrThrowArgs} args - Arguments to find a Ticket_priorities
     * @example
     * // Get one Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_prioritiesFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_prioritiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesFindFirstArgs} args - Arguments to find a Ticket_priorities
     * @example
     * // Get one Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_prioritiesFindFirstArgs>(args?: SelectSubset<T, ticket_prioritiesFindFirstArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_priorities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesFindFirstOrThrowArgs} args - Arguments to find a Ticket_priorities
     * @example
     * // Get one Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_prioritiesFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_prioritiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findMany()
     * 
     * // Get first 10 Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.findMany({ take: 10 })
     * 
     * // Only select the `ticket_priority_id`
     * const ticket_prioritiesWithTicket_priority_idOnly = await prisma.ticket_priorities.findMany({ select: { ticket_priority_id: true } })
     * 
     */
    findMany<T extends ticket_prioritiesFindManyArgs>(args?: SelectSubset<T, ticket_prioritiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_priorities.
     * @param {ticket_prioritiesCreateArgs} args - Arguments to create a Ticket_priorities.
     * @example
     * // Create one Ticket_priorities
     * const Ticket_priorities = await prisma.ticket_priorities.create({
     *   data: {
     *     // ... data to create a Ticket_priorities
     *   }
     * })
     * 
     */
    create<T extends ticket_prioritiesCreateArgs>(args: SelectSubset<T, ticket_prioritiesCreateArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_priorities.
     * @param {ticket_prioritiesCreateManyArgs} args - Arguments to create many Ticket_priorities.
     * @example
     * // Create many Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_prioritiesCreateManyArgs>(args?: SelectSubset<T, ticket_prioritiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_priorities.
     * @param {ticket_prioritiesDeleteArgs} args - Arguments to delete one Ticket_priorities.
     * @example
     * // Delete one Ticket_priorities
     * const Ticket_priorities = await prisma.ticket_priorities.delete({
     *   where: {
     *     // ... filter to delete one Ticket_priorities
     *   }
     * })
     * 
     */
    delete<T extends ticket_prioritiesDeleteArgs>(args: SelectSubset<T, ticket_prioritiesDeleteArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_priorities.
     * @param {ticket_prioritiesUpdateArgs} args - Arguments to update one Ticket_priorities.
     * @example
     * // Update one Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_prioritiesUpdateArgs>(args: SelectSubset<T, ticket_prioritiesUpdateArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_priorities.
     * @param {ticket_prioritiesDeleteManyArgs} args - Arguments to filter Ticket_priorities to delete.
     * @example
     * // Delete a few Ticket_priorities
     * const { count } = await prisma.ticket_priorities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_prioritiesDeleteManyArgs>(args?: SelectSubset<T, ticket_prioritiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_prioritiesUpdateManyArgs>(args: SelectSubset<T, ticket_prioritiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_priorities.
     * @param {ticket_prioritiesUpsertArgs} args - Arguments to update or create a Ticket_priorities.
     * @example
     * // Update or create a Ticket_priorities
     * const ticket_priorities = await prisma.ticket_priorities.upsert({
     *   create: {
     *     // ... data to create a Ticket_priorities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_priorities we want to update
     *   }
     * })
     */
    upsert<T extends ticket_prioritiesUpsertArgs>(args: SelectSubset<T, ticket_prioritiesUpsertArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesCountArgs} args - Arguments to filter Ticket_priorities to count.
     * @example
     * // Count the number of Ticket_priorities
     * const count = await prisma.ticket_priorities.count({
     *   where: {
     *     // ... the filter for the Ticket_priorities we want to count
     *   }
     * })
    **/
    count<T extends ticket_prioritiesCountArgs>(
      args?: Subset<T, ticket_prioritiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_prioritiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_prioritiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_prioritiesAggregateArgs>(args: Subset<T, Ticket_prioritiesAggregateArgs>): Prisma.PrismaPromise<GetTicket_prioritiesAggregateType<T>>

    /**
     * Group by Ticket_priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_prioritiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_prioritiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_prioritiesGroupByArgs['orderBy'] }
        : { orderBy?: ticket_prioritiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_prioritiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_prioritiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_priorities model
   */
  readonly fields: ticket_prioritiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_priorities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_prioritiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends ticket_priorities$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ticket_priorities$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_priorities model
   */ 
  interface ticket_prioritiesFieldRefs {
    readonly ticket_priority_id: FieldRef<"ticket_priorities", 'Int'>
    readonly ticket_priority_name: FieldRef<"ticket_priorities", 'String'>
    readonly color: FieldRef<"ticket_priorities", 'String'>
    readonly icon: FieldRef<"ticket_priorities", 'String'>
    readonly is_default: FieldRef<"ticket_priorities", 'Boolean'>
    readonly created_at: FieldRef<"ticket_priorities", 'DateTime'>
    readonly updated_at: FieldRef<"ticket_priorities", 'DateTime'>
    readonly deleted_at: FieldRef<"ticket_priorities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_priorities findUnique
   */
  export type ticket_prioritiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_priorities to fetch.
     */
    where: ticket_prioritiesWhereUniqueInput
  }

  /**
   * ticket_priorities findUniqueOrThrow
   */
  export type ticket_prioritiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_priorities to fetch.
     */
    where: ticket_prioritiesWhereUniqueInput
  }

  /**
   * ticket_priorities findFirst
   */
  export type ticket_prioritiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_priorities to fetch.
     */
    where?: ticket_prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_priorities to fetch.
     */
    orderBy?: ticket_prioritiesOrderByWithRelationInput | ticket_prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_priorities.
     */
    cursor?: ticket_prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_priorities.
     */
    distinct?: Ticket_prioritiesScalarFieldEnum | Ticket_prioritiesScalarFieldEnum[]
  }

  /**
   * ticket_priorities findFirstOrThrow
   */
  export type ticket_prioritiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_priorities to fetch.
     */
    where?: ticket_prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_priorities to fetch.
     */
    orderBy?: ticket_prioritiesOrderByWithRelationInput | ticket_prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_priorities.
     */
    cursor?: ticket_prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_priorities.
     */
    distinct?: Ticket_prioritiesScalarFieldEnum | Ticket_prioritiesScalarFieldEnum[]
  }

  /**
   * ticket_priorities findMany
   */
  export type ticket_prioritiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_priorities to fetch.
     */
    where?: ticket_prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_priorities to fetch.
     */
    orderBy?: ticket_prioritiesOrderByWithRelationInput | ticket_prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_priorities.
     */
    cursor?: ticket_prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_priorities.
     */
    skip?: number
    distinct?: Ticket_prioritiesScalarFieldEnum | Ticket_prioritiesScalarFieldEnum[]
  }

  /**
   * ticket_priorities create
   */
  export type ticket_prioritiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_priorities.
     */
    data: XOR<ticket_prioritiesCreateInput, ticket_prioritiesUncheckedCreateInput>
  }

  /**
   * ticket_priorities createMany
   */
  export type ticket_prioritiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_priorities.
     */
    data: ticket_prioritiesCreateManyInput | ticket_prioritiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_priorities update
   */
  export type ticket_prioritiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_priorities.
     */
    data: XOR<ticket_prioritiesUpdateInput, ticket_prioritiesUncheckedUpdateInput>
    /**
     * Choose, which ticket_priorities to update.
     */
    where: ticket_prioritiesWhereUniqueInput
  }

  /**
   * ticket_priorities updateMany
   */
  export type ticket_prioritiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_priorities.
     */
    data: XOR<ticket_prioritiesUpdateManyMutationInput, ticket_prioritiesUncheckedUpdateManyInput>
    /**
     * Filter which ticket_priorities to update
     */
    where?: ticket_prioritiesWhereInput
  }

  /**
   * ticket_priorities upsert
   */
  export type ticket_prioritiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_priorities to update in case it exists.
     */
    where: ticket_prioritiesWhereUniqueInput
    /**
     * In case the ticket_priorities found by the `where` argument doesn't exist, create a new ticket_priorities with this data.
     */
    create: XOR<ticket_prioritiesCreateInput, ticket_prioritiesUncheckedCreateInput>
    /**
     * In case the ticket_priorities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_prioritiesUpdateInput, ticket_prioritiesUncheckedUpdateInput>
  }

  /**
   * ticket_priorities delete
   */
  export type ticket_prioritiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
    /**
     * Filter which ticket_priorities to delete.
     */
    where: ticket_prioritiesWhereUniqueInput
  }

  /**
   * ticket_priorities deleteMany
   */
  export type ticket_prioritiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_priorities to delete
     */
    where?: ticket_prioritiesWhereInput
  }

  /**
   * ticket_priorities.tickets
   */
  export type ticket_priorities$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * ticket_priorities without action
   */
  export type ticket_prioritiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_priorities
     */
    select?: ticket_prioritiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_prioritiesInclude<ExtArgs> | null
  }


  /**
   * Model ticket_reply_documents
   */

  export type AggregateTicket_reply_documents = {
    _count: Ticket_reply_documentsCountAggregateOutputType | null
    _avg: Ticket_reply_documentsAvgAggregateOutputType | null
    _sum: Ticket_reply_documentsSumAggregateOutputType | null
    _min: Ticket_reply_documentsMinAggregateOutputType | null
    _max: Ticket_reply_documentsMaxAggregateOutputType | null
  }

  export type Ticket_reply_documentsAvgAggregateOutputType = {
    ticket_reply_document_id: number | null
    ticket_reply_id: number | null
    file_size: number | null
  }

  export type Ticket_reply_documentsSumAggregateOutputType = {
    ticket_reply_document_id: bigint | null
    ticket_reply_id: bigint | null
    file_size: number | null
  }

  export type Ticket_reply_documentsMinAggregateOutputType = {
    ticket_reply_document_id: bigint | null
    ticket_reply_id: bigint | null
    file_name: string | null
    file_path: string | null
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_reply_documentsMaxAggregateOutputType = {
    ticket_reply_document_id: bigint | null
    ticket_reply_id: bigint | null
    file_name: string | null
    file_path: string | null
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_reply_documentsCountAggregateOutputType = {
    ticket_reply_document_id: number
    ticket_reply_id: number
    file_name: number
    file_path: number
    file_size: number
    file_extension: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ticket_reply_documentsAvgAggregateInputType = {
    ticket_reply_document_id?: true
    ticket_reply_id?: true
    file_size?: true
  }

  export type Ticket_reply_documentsSumAggregateInputType = {
    ticket_reply_document_id?: true
    ticket_reply_id?: true
    file_size?: true
  }

  export type Ticket_reply_documentsMinAggregateInputType = {
    ticket_reply_document_id?: true
    ticket_reply_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_reply_documentsMaxAggregateInputType = {
    ticket_reply_document_id?: true
    ticket_reply_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_reply_documentsCountAggregateInputType = {
    ticket_reply_document_id?: true
    ticket_reply_id?: true
    file_name?: true
    file_path?: true
    file_size?: true
    file_extension?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ticket_reply_documentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_reply_documents to aggregate.
     */
    where?: ticket_reply_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_reply_documents to fetch.
     */
    orderBy?: ticket_reply_documentsOrderByWithRelationInput | ticket_reply_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_reply_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_reply_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_reply_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_reply_documents
    **/
    _count?: true | Ticket_reply_documentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_reply_documentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_reply_documentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_reply_documentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_reply_documentsMaxAggregateInputType
  }

  export type GetTicket_reply_documentsAggregateType<T extends Ticket_reply_documentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_reply_documents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_reply_documents[P]>
      : GetScalarType<T[P], AggregateTicket_reply_documents[P]>
  }




  export type ticket_reply_documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_reply_documentsWhereInput
    orderBy?: ticket_reply_documentsOrderByWithAggregationInput | ticket_reply_documentsOrderByWithAggregationInput[]
    by: Ticket_reply_documentsScalarFieldEnum[] | Ticket_reply_documentsScalarFieldEnum
    having?: ticket_reply_documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_reply_documentsCountAggregateInputType | true
    _avg?: Ticket_reply_documentsAvgAggregateInputType
    _sum?: Ticket_reply_documentsSumAggregateInputType
    _min?: Ticket_reply_documentsMinAggregateInputType
    _max?: Ticket_reply_documentsMaxAggregateInputType
  }

  export type Ticket_reply_documentsGroupByOutputType = {
    ticket_reply_document_id: bigint
    ticket_reply_id: bigint
    file_name: string
    file_path: string
    file_size: number | null
    file_extension: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Ticket_reply_documentsCountAggregateOutputType | null
    _avg: Ticket_reply_documentsAvgAggregateOutputType | null
    _sum: Ticket_reply_documentsSumAggregateOutputType | null
    _min: Ticket_reply_documentsMinAggregateOutputType | null
    _max: Ticket_reply_documentsMaxAggregateOutputType | null
  }

  type GetTicket_reply_documentsGroupByPayload<T extends ticket_reply_documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_reply_documentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_reply_documentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_reply_documentsGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_reply_documentsGroupByOutputType[P]>
        }
      >
    >


  export type ticket_reply_documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_reply_document_id?: boolean
    ticket_reply_id?: boolean
    file_name?: boolean
    file_path?: boolean
    file_size?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
    ticket_replys?: boolean | ticket_replysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_reply_documents"]>


  export type ticket_reply_documentsSelectScalar = {
    ticket_reply_document_id?: boolean
    ticket_reply_id?: boolean
    file_name?: boolean
    file_path?: boolean
    file_size?: boolean
    file_extension?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ticket_reply_documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_replys?: boolean | ticket_replysDefaultArgs<ExtArgs>
  }

  export type $ticket_reply_documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_reply_documents"
    objects: {
      ticket_replys: Prisma.$ticket_replysPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_reply_document_id: bigint
      ticket_reply_id: bigint
      file_name: string
      file_path: string
      file_size: number | null
      file_extension: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ticket_reply_documents"]>
    composites: {}
  }

  type ticket_reply_documentsGetPayload<S extends boolean | null | undefined | ticket_reply_documentsDefaultArgs> = $Result.GetResult<Prisma.$ticket_reply_documentsPayload, S>

  type ticket_reply_documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_reply_documentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_reply_documentsCountAggregateInputType | true
    }

  export interface ticket_reply_documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_reply_documents'], meta: { name: 'ticket_reply_documents' } }
    /**
     * Find zero or one Ticket_reply_documents that matches the filter.
     * @param {ticket_reply_documentsFindUniqueArgs} args - Arguments to find a Ticket_reply_documents
     * @example
     * // Get one Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_reply_documentsFindUniqueArgs>(args: SelectSubset<T, ticket_reply_documentsFindUniqueArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_reply_documents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_reply_documentsFindUniqueOrThrowArgs} args - Arguments to find a Ticket_reply_documents
     * @example
     * // Get one Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_reply_documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_reply_documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_reply_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsFindFirstArgs} args - Arguments to find a Ticket_reply_documents
     * @example
     * // Get one Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_reply_documentsFindFirstArgs>(args?: SelectSubset<T, ticket_reply_documentsFindFirstArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_reply_documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsFindFirstOrThrowArgs} args - Arguments to find a Ticket_reply_documents
     * @example
     * // Get one Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_reply_documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_reply_documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_reply_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findMany()
     * 
     * // Get first 10 Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.findMany({ take: 10 })
     * 
     * // Only select the `ticket_reply_document_id`
     * const ticket_reply_documentsWithTicket_reply_document_idOnly = await prisma.ticket_reply_documents.findMany({ select: { ticket_reply_document_id: true } })
     * 
     */
    findMany<T extends ticket_reply_documentsFindManyArgs>(args?: SelectSubset<T, ticket_reply_documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_reply_documents.
     * @param {ticket_reply_documentsCreateArgs} args - Arguments to create a Ticket_reply_documents.
     * @example
     * // Create one Ticket_reply_documents
     * const Ticket_reply_documents = await prisma.ticket_reply_documents.create({
     *   data: {
     *     // ... data to create a Ticket_reply_documents
     *   }
     * })
     * 
     */
    create<T extends ticket_reply_documentsCreateArgs>(args: SelectSubset<T, ticket_reply_documentsCreateArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_reply_documents.
     * @param {ticket_reply_documentsCreateManyArgs} args - Arguments to create many Ticket_reply_documents.
     * @example
     * // Create many Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_reply_documentsCreateManyArgs>(args?: SelectSubset<T, ticket_reply_documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_reply_documents.
     * @param {ticket_reply_documentsDeleteArgs} args - Arguments to delete one Ticket_reply_documents.
     * @example
     * // Delete one Ticket_reply_documents
     * const Ticket_reply_documents = await prisma.ticket_reply_documents.delete({
     *   where: {
     *     // ... filter to delete one Ticket_reply_documents
     *   }
     * })
     * 
     */
    delete<T extends ticket_reply_documentsDeleteArgs>(args: SelectSubset<T, ticket_reply_documentsDeleteArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_reply_documents.
     * @param {ticket_reply_documentsUpdateArgs} args - Arguments to update one Ticket_reply_documents.
     * @example
     * // Update one Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_reply_documentsUpdateArgs>(args: SelectSubset<T, ticket_reply_documentsUpdateArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_reply_documents.
     * @param {ticket_reply_documentsDeleteManyArgs} args - Arguments to filter Ticket_reply_documents to delete.
     * @example
     * // Delete a few Ticket_reply_documents
     * const { count } = await prisma.ticket_reply_documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_reply_documentsDeleteManyArgs>(args?: SelectSubset<T, ticket_reply_documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_reply_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_reply_documentsUpdateManyArgs>(args: SelectSubset<T, ticket_reply_documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_reply_documents.
     * @param {ticket_reply_documentsUpsertArgs} args - Arguments to update or create a Ticket_reply_documents.
     * @example
     * // Update or create a Ticket_reply_documents
     * const ticket_reply_documents = await prisma.ticket_reply_documents.upsert({
     *   create: {
     *     // ... data to create a Ticket_reply_documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_reply_documents we want to update
     *   }
     * })
     */
    upsert<T extends ticket_reply_documentsUpsertArgs>(args: SelectSubset<T, ticket_reply_documentsUpsertArgs<ExtArgs>>): Prisma__ticket_reply_documentsClient<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_reply_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsCountArgs} args - Arguments to filter Ticket_reply_documents to count.
     * @example
     * // Count the number of Ticket_reply_documents
     * const count = await prisma.ticket_reply_documents.count({
     *   where: {
     *     // ... the filter for the Ticket_reply_documents we want to count
     *   }
     * })
    **/
    count<T extends ticket_reply_documentsCountArgs>(
      args?: Subset<T, ticket_reply_documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_reply_documentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_reply_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_reply_documentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_reply_documentsAggregateArgs>(args: Subset<T, Ticket_reply_documentsAggregateArgs>): Prisma.PrismaPromise<GetTicket_reply_documentsAggregateType<T>>

    /**
     * Group by Ticket_reply_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_reply_documentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_reply_documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_reply_documentsGroupByArgs['orderBy'] }
        : { orderBy?: ticket_reply_documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_reply_documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_reply_documentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_reply_documents model
   */
  readonly fields: ticket_reply_documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_reply_documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_reply_documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_replys<T extends ticket_replysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_replysDefaultArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_reply_documents model
   */ 
  interface ticket_reply_documentsFieldRefs {
    readonly ticket_reply_document_id: FieldRef<"ticket_reply_documents", 'BigInt'>
    readonly ticket_reply_id: FieldRef<"ticket_reply_documents", 'BigInt'>
    readonly file_name: FieldRef<"ticket_reply_documents", 'String'>
    readonly file_path: FieldRef<"ticket_reply_documents", 'String'>
    readonly file_size: FieldRef<"ticket_reply_documents", 'Int'>
    readonly file_extension: FieldRef<"ticket_reply_documents", 'String'>
    readonly created_at: FieldRef<"ticket_reply_documents", 'DateTime'>
    readonly updated_at: FieldRef<"ticket_reply_documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_reply_documents findUnique
   */
  export type ticket_reply_documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_reply_documents to fetch.
     */
    where: ticket_reply_documentsWhereUniqueInput
  }

  /**
   * ticket_reply_documents findUniqueOrThrow
   */
  export type ticket_reply_documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_reply_documents to fetch.
     */
    where: ticket_reply_documentsWhereUniqueInput
  }

  /**
   * ticket_reply_documents findFirst
   */
  export type ticket_reply_documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_reply_documents to fetch.
     */
    where?: ticket_reply_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_reply_documents to fetch.
     */
    orderBy?: ticket_reply_documentsOrderByWithRelationInput | ticket_reply_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_reply_documents.
     */
    cursor?: ticket_reply_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_reply_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_reply_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_reply_documents.
     */
    distinct?: Ticket_reply_documentsScalarFieldEnum | Ticket_reply_documentsScalarFieldEnum[]
  }

  /**
   * ticket_reply_documents findFirstOrThrow
   */
  export type ticket_reply_documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_reply_documents to fetch.
     */
    where?: ticket_reply_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_reply_documents to fetch.
     */
    orderBy?: ticket_reply_documentsOrderByWithRelationInput | ticket_reply_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_reply_documents.
     */
    cursor?: ticket_reply_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_reply_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_reply_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_reply_documents.
     */
    distinct?: Ticket_reply_documentsScalarFieldEnum | Ticket_reply_documentsScalarFieldEnum[]
  }

  /**
   * ticket_reply_documents findMany
   */
  export type ticket_reply_documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter, which ticket_reply_documents to fetch.
     */
    where?: ticket_reply_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_reply_documents to fetch.
     */
    orderBy?: ticket_reply_documentsOrderByWithRelationInput | ticket_reply_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_reply_documents.
     */
    cursor?: ticket_reply_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_reply_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_reply_documents.
     */
    skip?: number
    distinct?: Ticket_reply_documentsScalarFieldEnum | Ticket_reply_documentsScalarFieldEnum[]
  }

  /**
   * ticket_reply_documents create
   */
  export type ticket_reply_documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_reply_documents.
     */
    data: XOR<ticket_reply_documentsCreateInput, ticket_reply_documentsUncheckedCreateInput>
  }

  /**
   * ticket_reply_documents createMany
   */
  export type ticket_reply_documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_reply_documents.
     */
    data: ticket_reply_documentsCreateManyInput | ticket_reply_documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_reply_documents update
   */
  export type ticket_reply_documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_reply_documents.
     */
    data: XOR<ticket_reply_documentsUpdateInput, ticket_reply_documentsUncheckedUpdateInput>
    /**
     * Choose, which ticket_reply_documents to update.
     */
    where: ticket_reply_documentsWhereUniqueInput
  }

  /**
   * ticket_reply_documents updateMany
   */
  export type ticket_reply_documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_reply_documents.
     */
    data: XOR<ticket_reply_documentsUpdateManyMutationInput, ticket_reply_documentsUncheckedUpdateManyInput>
    /**
     * Filter which ticket_reply_documents to update
     */
    where?: ticket_reply_documentsWhereInput
  }

  /**
   * ticket_reply_documents upsert
   */
  export type ticket_reply_documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_reply_documents to update in case it exists.
     */
    where: ticket_reply_documentsWhereUniqueInput
    /**
     * In case the ticket_reply_documents found by the `where` argument doesn't exist, create a new ticket_reply_documents with this data.
     */
    create: XOR<ticket_reply_documentsCreateInput, ticket_reply_documentsUncheckedCreateInput>
    /**
     * In case the ticket_reply_documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_reply_documentsUpdateInput, ticket_reply_documentsUncheckedUpdateInput>
  }

  /**
   * ticket_reply_documents delete
   */
  export type ticket_reply_documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    /**
     * Filter which ticket_reply_documents to delete.
     */
    where: ticket_reply_documentsWhereUniqueInput
  }

  /**
   * ticket_reply_documents deleteMany
   */
  export type ticket_reply_documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_reply_documents to delete
     */
    where?: ticket_reply_documentsWhereInput
  }

  /**
   * ticket_reply_documents without action
   */
  export type ticket_reply_documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
  }


  /**
   * Model ticket_replys
   */

  export type AggregateTicket_replys = {
    _count: Ticket_replysCountAggregateOutputType | null
    _avg: Ticket_replysAvgAggregateOutputType | null
    _sum: Ticket_replysSumAggregateOutputType | null
    _min: Ticket_replysMinAggregateOutputType | null
    _max: Ticket_replysMaxAggregateOutputType | null
  }

  export type Ticket_replysAvgAggregateOutputType = {
    ticket_reply_id: number | null
    ticket_id: number | null
    ticket_status_id: number | null
    pic_user_id: number | null
  }

  export type Ticket_replysSumAggregateOutputType = {
    ticket_reply_id: bigint | null
    ticket_id: bigint | null
    ticket_status_id: number | null
    pic_user_id: bigint | null
  }

  export type Ticket_replysMinAggregateOutputType = {
    ticket_reply_id: bigint | null
    ticket_id: bigint | null
    ticket_status_id: number | null
    pic_user_id: bigint | null
    reply_description: string | null
    ticket_attch: $Enums.ticket_replys_ticket_attch | null
    created_at: Date | null
  }

  export type Ticket_replysMaxAggregateOutputType = {
    ticket_reply_id: bigint | null
    ticket_id: bigint | null
    ticket_status_id: number | null
    pic_user_id: bigint | null
    reply_description: string | null
    ticket_attch: $Enums.ticket_replys_ticket_attch | null
    created_at: Date | null
  }

  export type Ticket_replysCountAggregateOutputType = {
    ticket_reply_id: number
    ticket_id: number
    ticket_status_id: number
    pic_user_id: number
    reply_description: number
    ticket_attch: number
    created_at: number
    _all: number
  }


  export type Ticket_replysAvgAggregateInputType = {
    ticket_reply_id?: true
    ticket_id?: true
    ticket_status_id?: true
    pic_user_id?: true
  }

  export type Ticket_replysSumAggregateInputType = {
    ticket_reply_id?: true
    ticket_id?: true
    ticket_status_id?: true
    pic_user_id?: true
  }

  export type Ticket_replysMinAggregateInputType = {
    ticket_reply_id?: true
    ticket_id?: true
    ticket_status_id?: true
    pic_user_id?: true
    reply_description?: true
    ticket_attch?: true
    created_at?: true
  }

  export type Ticket_replysMaxAggregateInputType = {
    ticket_reply_id?: true
    ticket_id?: true
    ticket_status_id?: true
    pic_user_id?: true
    reply_description?: true
    ticket_attch?: true
    created_at?: true
  }

  export type Ticket_replysCountAggregateInputType = {
    ticket_reply_id?: true
    ticket_id?: true
    ticket_status_id?: true
    pic_user_id?: true
    reply_description?: true
    ticket_attch?: true
    created_at?: true
    _all?: true
  }

  export type Ticket_replysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_replys to aggregate.
     */
    where?: ticket_replysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_replys to fetch.
     */
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_replysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_replys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_replys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_replys
    **/
    _count?: true | Ticket_replysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_replysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_replysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_replysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_replysMaxAggregateInputType
  }

  export type GetTicket_replysAggregateType<T extends Ticket_replysAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_replys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_replys[P]>
      : GetScalarType<T[P], AggregateTicket_replys[P]>
  }




  export type ticket_replysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_replysWhereInput
    orderBy?: ticket_replysOrderByWithAggregationInput | ticket_replysOrderByWithAggregationInput[]
    by: Ticket_replysScalarFieldEnum[] | Ticket_replysScalarFieldEnum
    having?: ticket_replysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_replysCountAggregateInputType | true
    _avg?: Ticket_replysAvgAggregateInputType
    _sum?: Ticket_replysSumAggregateInputType
    _min?: Ticket_replysMinAggregateInputType
    _max?: Ticket_replysMaxAggregateInputType
  }

  export type Ticket_replysGroupByOutputType = {
    ticket_reply_id: bigint
    ticket_id: bigint
    ticket_status_id: number
    pic_user_id: bigint
    reply_description: string | null
    ticket_attch: $Enums.ticket_replys_ticket_attch
    created_at: Date | null
    _count: Ticket_replysCountAggregateOutputType | null
    _avg: Ticket_replysAvgAggregateOutputType | null
    _sum: Ticket_replysSumAggregateOutputType | null
    _min: Ticket_replysMinAggregateOutputType | null
    _max: Ticket_replysMaxAggregateOutputType | null
  }

  type GetTicket_replysGroupByPayload<T extends ticket_replysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_replysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_replysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_replysGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_replysGroupByOutputType[P]>
        }
      >
    >


  export type ticket_replysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_reply_id?: boolean
    ticket_id?: boolean
    ticket_status_id?: boolean
    pic_user_id?: boolean
    reply_description?: boolean
    ticket_attch?: boolean
    created_at?: boolean
    ticket_statuses?: boolean | ticket_statusesDefaultArgs<ExtArgs>
    tickets?: boolean | ticketsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    ticket_reply_documents?: boolean | ticket_replys$ticket_reply_documentsArgs<ExtArgs>
    _count?: boolean | Ticket_replysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_replys"]>


  export type ticket_replysSelectScalar = {
    ticket_reply_id?: boolean
    ticket_id?: boolean
    ticket_status_id?: boolean
    pic_user_id?: boolean
    reply_description?: boolean
    ticket_attch?: boolean
    created_at?: boolean
  }

  export type ticket_replysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_statuses?: boolean | ticket_statusesDefaultArgs<ExtArgs>
    tickets?: boolean | ticketsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    ticket_reply_documents?: boolean | ticket_replys$ticket_reply_documentsArgs<ExtArgs>
    _count?: boolean | Ticket_replysCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticket_replysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_replys"
    objects: {
      ticket_statuses: Prisma.$ticket_statusesPayload<ExtArgs>
      tickets: Prisma.$ticketsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      ticket_reply_documents: Prisma.$ticket_reply_documentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_reply_id: bigint
      ticket_id: bigint
      ticket_status_id: number
      pic_user_id: bigint
      reply_description: string | null
      ticket_attch: $Enums.ticket_replys_ticket_attch
      created_at: Date | null
    }, ExtArgs["result"]["ticket_replys"]>
    composites: {}
  }

  type ticket_replysGetPayload<S extends boolean | null | undefined | ticket_replysDefaultArgs> = $Result.GetResult<Prisma.$ticket_replysPayload, S>

  type ticket_replysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_replysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_replysCountAggregateInputType | true
    }

  export interface ticket_replysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_replys'], meta: { name: 'ticket_replys' } }
    /**
     * Find zero or one Ticket_replys that matches the filter.
     * @param {ticket_replysFindUniqueArgs} args - Arguments to find a Ticket_replys
     * @example
     * // Get one Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_replysFindUniqueArgs>(args: SelectSubset<T, ticket_replysFindUniqueArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_replys that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_replysFindUniqueOrThrowArgs} args - Arguments to find a Ticket_replys
     * @example
     * // Get one Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_replysFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_replysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_replys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysFindFirstArgs} args - Arguments to find a Ticket_replys
     * @example
     * // Get one Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_replysFindFirstArgs>(args?: SelectSubset<T, ticket_replysFindFirstArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_replys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysFindFirstOrThrowArgs} args - Arguments to find a Ticket_replys
     * @example
     * // Get one Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_replysFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_replysFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_replys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findMany()
     * 
     * // Get first 10 Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.findMany({ take: 10 })
     * 
     * // Only select the `ticket_reply_id`
     * const ticket_replysWithTicket_reply_idOnly = await prisma.ticket_replys.findMany({ select: { ticket_reply_id: true } })
     * 
     */
    findMany<T extends ticket_replysFindManyArgs>(args?: SelectSubset<T, ticket_replysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_replys.
     * @param {ticket_replysCreateArgs} args - Arguments to create a Ticket_replys.
     * @example
     * // Create one Ticket_replys
     * const Ticket_replys = await prisma.ticket_replys.create({
     *   data: {
     *     // ... data to create a Ticket_replys
     *   }
     * })
     * 
     */
    create<T extends ticket_replysCreateArgs>(args: SelectSubset<T, ticket_replysCreateArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_replys.
     * @param {ticket_replysCreateManyArgs} args - Arguments to create many Ticket_replys.
     * @example
     * // Create many Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_replysCreateManyArgs>(args?: SelectSubset<T, ticket_replysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_replys.
     * @param {ticket_replysDeleteArgs} args - Arguments to delete one Ticket_replys.
     * @example
     * // Delete one Ticket_replys
     * const Ticket_replys = await prisma.ticket_replys.delete({
     *   where: {
     *     // ... filter to delete one Ticket_replys
     *   }
     * })
     * 
     */
    delete<T extends ticket_replysDeleteArgs>(args: SelectSubset<T, ticket_replysDeleteArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_replys.
     * @param {ticket_replysUpdateArgs} args - Arguments to update one Ticket_replys.
     * @example
     * // Update one Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_replysUpdateArgs>(args: SelectSubset<T, ticket_replysUpdateArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_replys.
     * @param {ticket_replysDeleteManyArgs} args - Arguments to filter Ticket_replys to delete.
     * @example
     * // Delete a few Ticket_replys
     * const { count } = await prisma.ticket_replys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_replysDeleteManyArgs>(args?: SelectSubset<T, ticket_replysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_replys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_replysUpdateManyArgs>(args: SelectSubset<T, ticket_replysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_replys.
     * @param {ticket_replysUpsertArgs} args - Arguments to update or create a Ticket_replys.
     * @example
     * // Update or create a Ticket_replys
     * const ticket_replys = await prisma.ticket_replys.upsert({
     *   create: {
     *     // ... data to create a Ticket_replys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_replys we want to update
     *   }
     * })
     */
    upsert<T extends ticket_replysUpsertArgs>(args: SelectSubset<T, ticket_replysUpsertArgs<ExtArgs>>): Prisma__ticket_replysClient<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_replys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysCountArgs} args - Arguments to filter Ticket_replys to count.
     * @example
     * // Count the number of Ticket_replys
     * const count = await prisma.ticket_replys.count({
     *   where: {
     *     // ... the filter for the Ticket_replys we want to count
     *   }
     * })
    **/
    count<T extends ticket_replysCountArgs>(
      args?: Subset<T, ticket_replysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_replysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_replys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_replysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_replysAggregateArgs>(args: Subset<T, Ticket_replysAggregateArgs>): Prisma.PrismaPromise<GetTicket_replysAggregateType<T>>

    /**
     * Group by Ticket_replys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_replysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_replysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_replysGroupByArgs['orderBy'] }
        : { orderBy?: ticket_replysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_replysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_replysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_replys model
   */
  readonly fields: ticket_replysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_replys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_replysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_statuses<T extends ticket_statusesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_statusesDefaultArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tickets<T extends ticketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketsDefaultArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_reply_documents<T extends ticket_replys$ticket_reply_documentsArgs<ExtArgs> = {}>(args?: Subset<T, ticket_replys$ticket_reply_documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_reply_documentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_replys model
   */ 
  interface ticket_replysFieldRefs {
    readonly ticket_reply_id: FieldRef<"ticket_replys", 'BigInt'>
    readonly ticket_id: FieldRef<"ticket_replys", 'BigInt'>
    readonly ticket_status_id: FieldRef<"ticket_replys", 'Int'>
    readonly pic_user_id: FieldRef<"ticket_replys", 'BigInt'>
    readonly reply_description: FieldRef<"ticket_replys", 'String'>
    readonly ticket_attch: FieldRef<"ticket_replys", 'ticket_replys_ticket_attch'>
    readonly created_at: FieldRef<"ticket_replys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_replys findUnique
   */
  export type ticket_replysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter, which ticket_replys to fetch.
     */
    where: ticket_replysWhereUniqueInput
  }

  /**
   * ticket_replys findUniqueOrThrow
   */
  export type ticket_replysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter, which ticket_replys to fetch.
     */
    where: ticket_replysWhereUniqueInput
  }

  /**
   * ticket_replys findFirst
   */
  export type ticket_replysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter, which ticket_replys to fetch.
     */
    where?: ticket_replysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_replys to fetch.
     */
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_replys.
     */
    cursor?: ticket_replysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_replys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_replys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_replys.
     */
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * ticket_replys findFirstOrThrow
   */
  export type ticket_replysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter, which ticket_replys to fetch.
     */
    where?: ticket_replysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_replys to fetch.
     */
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_replys.
     */
    cursor?: ticket_replysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_replys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_replys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_replys.
     */
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * ticket_replys findMany
   */
  export type ticket_replysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter, which ticket_replys to fetch.
     */
    where?: ticket_replysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_replys to fetch.
     */
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_replys.
     */
    cursor?: ticket_replysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_replys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_replys.
     */
    skip?: number
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * ticket_replys create
   */
  export type ticket_replysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_replys.
     */
    data: XOR<ticket_replysCreateInput, ticket_replysUncheckedCreateInput>
  }

  /**
   * ticket_replys createMany
   */
  export type ticket_replysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_replys.
     */
    data: ticket_replysCreateManyInput | ticket_replysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_replys update
   */
  export type ticket_replysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_replys.
     */
    data: XOR<ticket_replysUpdateInput, ticket_replysUncheckedUpdateInput>
    /**
     * Choose, which ticket_replys to update.
     */
    where: ticket_replysWhereUniqueInput
  }

  /**
   * ticket_replys updateMany
   */
  export type ticket_replysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_replys.
     */
    data: XOR<ticket_replysUpdateManyMutationInput, ticket_replysUncheckedUpdateManyInput>
    /**
     * Filter which ticket_replys to update
     */
    where?: ticket_replysWhereInput
  }

  /**
   * ticket_replys upsert
   */
  export type ticket_replysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_replys to update in case it exists.
     */
    where: ticket_replysWhereUniqueInput
    /**
     * In case the ticket_replys found by the `where` argument doesn't exist, create a new ticket_replys with this data.
     */
    create: XOR<ticket_replysCreateInput, ticket_replysUncheckedCreateInput>
    /**
     * In case the ticket_replys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_replysUpdateInput, ticket_replysUncheckedUpdateInput>
  }

  /**
   * ticket_replys delete
   */
  export type ticket_replysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    /**
     * Filter which ticket_replys to delete.
     */
    where: ticket_replysWhereUniqueInput
  }

  /**
   * ticket_replys deleteMany
   */
  export type ticket_replysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_replys to delete
     */
    where?: ticket_replysWhereInput
  }

  /**
   * ticket_replys.ticket_reply_documents
   */
  export type ticket_replys$ticket_reply_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_reply_documents
     */
    select?: ticket_reply_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_reply_documentsInclude<ExtArgs> | null
    where?: ticket_reply_documentsWhereInput
    orderBy?: ticket_reply_documentsOrderByWithRelationInput | ticket_reply_documentsOrderByWithRelationInput[]
    cursor?: ticket_reply_documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_reply_documentsScalarFieldEnum | Ticket_reply_documentsScalarFieldEnum[]
  }

  /**
   * ticket_replys without action
   */
  export type ticket_replysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
  }


  /**
   * Model ticket_statuses
   */

  export type AggregateTicket_statuses = {
    _count: Ticket_statusesCountAggregateOutputType | null
    _avg: Ticket_statusesAvgAggregateOutputType | null
    _sum: Ticket_statusesSumAggregateOutputType | null
    _min: Ticket_statusesMinAggregateOutputType | null
    _max: Ticket_statusesMaxAggregateOutputType | null
  }

  export type Ticket_statusesAvgAggregateOutputType = {
    ticket_status_id: number | null
  }

  export type Ticket_statusesSumAggregateOutputType = {
    ticket_status_id: number | null
  }

  export type Ticket_statusesMinAggregateOutputType = {
    ticket_status_id: number | null
    ticket_name: string | null
    color: string | null
    is_default: boolean | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_statusesMaxAggregateOutputType = {
    ticket_status_id: number | null
    ticket_name: string | null
    color: string | null
    is_default: boolean | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ticket_statusesCountAggregateOutputType = {
    ticket_status_id: number
    ticket_name: number
    color: number
    is_default: number
    deleted_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ticket_statusesAvgAggregateInputType = {
    ticket_status_id?: true
  }

  export type Ticket_statusesSumAggregateInputType = {
    ticket_status_id?: true
  }

  export type Ticket_statusesMinAggregateInputType = {
    ticket_status_id?: true
    ticket_name?: true
    color?: true
    is_default?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_statusesMaxAggregateInputType = {
    ticket_status_id?: true
    ticket_name?: true
    color?: true
    is_default?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Ticket_statusesCountAggregateInputType = {
    ticket_status_id?: true
    ticket_name?: true
    color?: true
    is_default?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ticket_statusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_statuses to aggregate.
     */
    where?: ticket_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_statuses to fetch.
     */
    orderBy?: ticket_statusesOrderByWithRelationInput | ticket_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_statuses
    **/
    _count?: true | Ticket_statusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_statusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_statusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_statusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_statusesMaxAggregateInputType
  }

  export type GetTicket_statusesAggregateType<T extends Ticket_statusesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_statuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_statuses[P]>
      : GetScalarType<T[P], AggregateTicket_statuses[P]>
  }




  export type ticket_statusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_statusesWhereInput
    orderBy?: ticket_statusesOrderByWithAggregationInput | ticket_statusesOrderByWithAggregationInput[]
    by: Ticket_statusesScalarFieldEnum[] | Ticket_statusesScalarFieldEnum
    having?: ticket_statusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_statusesCountAggregateInputType | true
    _avg?: Ticket_statusesAvgAggregateInputType
    _sum?: Ticket_statusesSumAggregateInputType
    _min?: Ticket_statusesMinAggregateInputType
    _max?: Ticket_statusesMaxAggregateInputType
  }

  export type Ticket_statusesGroupByOutputType = {
    ticket_status_id: number
    ticket_name: string
    color: string
    is_default: boolean
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Ticket_statusesCountAggregateOutputType | null
    _avg: Ticket_statusesAvgAggregateOutputType | null
    _sum: Ticket_statusesSumAggregateOutputType | null
    _min: Ticket_statusesMinAggregateOutputType | null
    _max: Ticket_statusesMaxAggregateOutputType | null
  }

  type GetTicket_statusesGroupByPayload<T extends ticket_statusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_statusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_statusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_statusesGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_statusesGroupByOutputType[P]>
        }
      >
    >


  export type ticket_statusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_status_id?: boolean
    ticket_name?: boolean
    color?: boolean
    is_default?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    ticket_replys?: boolean | ticket_statuses$ticket_replysArgs<ExtArgs>
    tickets?: boolean | ticket_statuses$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_statuses"]>


  export type ticket_statusesSelectScalar = {
    ticket_status_id?: boolean
    ticket_name?: boolean
    color?: boolean
    is_default?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ticket_statusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_replys?: boolean | ticket_statuses$ticket_replysArgs<ExtArgs>
    tickets?: boolean | ticket_statuses$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticket_statusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_statuses"
    objects: {
      ticket_replys: Prisma.$ticket_replysPayload<ExtArgs>[]
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_status_id: number
      ticket_name: string
      color: string
      is_default: boolean
      deleted_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["ticket_statuses"]>
    composites: {}
  }

  type ticket_statusesGetPayload<S extends boolean | null | undefined | ticket_statusesDefaultArgs> = $Result.GetResult<Prisma.$ticket_statusesPayload, S>

  type ticket_statusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_statusesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_statusesCountAggregateInputType | true
    }

  export interface ticket_statusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_statuses'], meta: { name: 'ticket_statuses' } }
    /**
     * Find zero or one Ticket_statuses that matches the filter.
     * @param {ticket_statusesFindUniqueArgs} args - Arguments to find a Ticket_statuses
     * @example
     * // Get one Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_statusesFindUniqueArgs>(args: SelectSubset<T, ticket_statusesFindUniqueArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_statuses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_statusesFindUniqueOrThrowArgs} args - Arguments to find a Ticket_statuses
     * @example
     * // Get one Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_statusesFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_statusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesFindFirstArgs} args - Arguments to find a Ticket_statuses
     * @example
     * // Get one Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_statusesFindFirstArgs>(args?: SelectSubset<T, ticket_statusesFindFirstArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_statuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesFindFirstOrThrowArgs} args - Arguments to find a Ticket_statuses
     * @example
     * // Get one Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_statusesFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_statusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findMany()
     * 
     * // Get first 10 Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.findMany({ take: 10 })
     * 
     * // Only select the `ticket_status_id`
     * const ticket_statusesWithTicket_status_idOnly = await prisma.ticket_statuses.findMany({ select: { ticket_status_id: true } })
     * 
     */
    findMany<T extends ticket_statusesFindManyArgs>(args?: SelectSubset<T, ticket_statusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_statuses.
     * @param {ticket_statusesCreateArgs} args - Arguments to create a Ticket_statuses.
     * @example
     * // Create one Ticket_statuses
     * const Ticket_statuses = await prisma.ticket_statuses.create({
     *   data: {
     *     // ... data to create a Ticket_statuses
     *   }
     * })
     * 
     */
    create<T extends ticket_statusesCreateArgs>(args: SelectSubset<T, ticket_statusesCreateArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_statuses.
     * @param {ticket_statusesCreateManyArgs} args - Arguments to create many Ticket_statuses.
     * @example
     * // Create many Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_statusesCreateManyArgs>(args?: SelectSubset<T, ticket_statusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_statuses.
     * @param {ticket_statusesDeleteArgs} args - Arguments to delete one Ticket_statuses.
     * @example
     * // Delete one Ticket_statuses
     * const Ticket_statuses = await prisma.ticket_statuses.delete({
     *   where: {
     *     // ... filter to delete one Ticket_statuses
     *   }
     * })
     * 
     */
    delete<T extends ticket_statusesDeleteArgs>(args: SelectSubset<T, ticket_statusesDeleteArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_statuses.
     * @param {ticket_statusesUpdateArgs} args - Arguments to update one Ticket_statuses.
     * @example
     * // Update one Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_statusesUpdateArgs>(args: SelectSubset<T, ticket_statusesUpdateArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_statuses.
     * @param {ticket_statusesDeleteManyArgs} args - Arguments to filter Ticket_statuses to delete.
     * @example
     * // Delete a few Ticket_statuses
     * const { count } = await prisma.ticket_statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_statusesDeleteManyArgs>(args?: SelectSubset<T, ticket_statusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_statusesUpdateManyArgs>(args: SelectSubset<T, ticket_statusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_statuses.
     * @param {ticket_statusesUpsertArgs} args - Arguments to update or create a Ticket_statuses.
     * @example
     * // Update or create a Ticket_statuses
     * const ticket_statuses = await prisma.ticket_statuses.upsert({
     *   create: {
     *     // ... data to create a Ticket_statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_statuses we want to update
     *   }
     * })
     */
    upsert<T extends ticket_statusesUpsertArgs>(args: SelectSubset<T, ticket_statusesUpsertArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesCountArgs} args - Arguments to filter Ticket_statuses to count.
     * @example
     * // Count the number of Ticket_statuses
     * const count = await prisma.ticket_statuses.count({
     *   where: {
     *     // ... the filter for the Ticket_statuses we want to count
     *   }
     * })
    **/
    count<T extends ticket_statusesCountArgs>(
      args?: Subset<T, ticket_statusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_statusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_statusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_statusesAggregateArgs>(args: Subset<T, Ticket_statusesAggregateArgs>): Prisma.PrismaPromise<GetTicket_statusesAggregateType<T>>

    /**
     * Group by Ticket_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_statusesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_statusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_statusesGroupByArgs['orderBy'] }
        : { orderBy?: ticket_statusesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_statusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_statusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_statuses model
   */
  readonly fields: ticket_statusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_statusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_replys<T extends ticket_statuses$ticket_replysArgs<ExtArgs> = {}>(args?: Subset<T, ticket_statuses$ticket_replysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends ticket_statuses$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ticket_statuses$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_statuses model
   */ 
  interface ticket_statusesFieldRefs {
    readonly ticket_status_id: FieldRef<"ticket_statuses", 'Int'>
    readonly ticket_name: FieldRef<"ticket_statuses", 'String'>
    readonly color: FieldRef<"ticket_statuses", 'String'>
    readonly is_default: FieldRef<"ticket_statuses", 'Boolean'>
    readonly deleted_at: FieldRef<"ticket_statuses", 'DateTime'>
    readonly created_at: FieldRef<"ticket_statuses", 'DateTime'>
    readonly updated_at: FieldRef<"ticket_statuses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket_statuses findUnique
   */
  export type ticket_statusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_statuses to fetch.
     */
    where: ticket_statusesWhereUniqueInput
  }

  /**
   * ticket_statuses findUniqueOrThrow
   */
  export type ticket_statusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_statuses to fetch.
     */
    where: ticket_statusesWhereUniqueInput
  }

  /**
   * ticket_statuses findFirst
   */
  export type ticket_statusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_statuses to fetch.
     */
    where?: ticket_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_statuses to fetch.
     */
    orderBy?: ticket_statusesOrderByWithRelationInput | ticket_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_statuses.
     */
    cursor?: ticket_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_statuses.
     */
    distinct?: Ticket_statusesScalarFieldEnum | Ticket_statusesScalarFieldEnum[]
  }

  /**
   * ticket_statuses findFirstOrThrow
   */
  export type ticket_statusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_statuses to fetch.
     */
    where?: ticket_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_statuses to fetch.
     */
    orderBy?: ticket_statusesOrderByWithRelationInput | ticket_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_statuses.
     */
    cursor?: ticket_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_statuses.
     */
    distinct?: Ticket_statusesScalarFieldEnum | Ticket_statusesScalarFieldEnum[]
  }

  /**
   * ticket_statuses findMany
   */
  export type ticket_statusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_statuses to fetch.
     */
    where?: ticket_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_statuses to fetch.
     */
    orderBy?: ticket_statusesOrderByWithRelationInput | ticket_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_statuses.
     */
    cursor?: ticket_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_statuses.
     */
    skip?: number
    distinct?: Ticket_statusesScalarFieldEnum | Ticket_statusesScalarFieldEnum[]
  }

  /**
   * ticket_statuses create
   */
  export type ticket_statusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_statuses.
     */
    data: XOR<ticket_statusesCreateInput, ticket_statusesUncheckedCreateInput>
  }

  /**
   * ticket_statuses createMany
   */
  export type ticket_statusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_statuses.
     */
    data: ticket_statusesCreateManyInput | ticket_statusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_statuses update
   */
  export type ticket_statusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_statuses.
     */
    data: XOR<ticket_statusesUpdateInput, ticket_statusesUncheckedUpdateInput>
    /**
     * Choose, which ticket_statuses to update.
     */
    where: ticket_statusesWhereUniqueInput
  }

  /**
   * ticket_statuses updateMany
   */
  export type ticket_statusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_statuses.
     */
    data: XOR<ticket_statusesUpdateManyMutationInput, ticket_statusesUncheckedUpdateManyInput>
    /**
     * Filter which ticket_statuses to update
     */
    where?: ticket_statusesWhereInput
  }

  /**
   * ticket_statuses upsert
   */
  export type ticket_statusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_statuses to update in case it exists.
     */
    where: ticket_statusesWhereUniqueInput
    /**
     * In case the ticket_statuses found by the `where` argument doesn't exist, create a new ticket_statuses with this data.
     */
    create: XOR<ticket_statusesCreateInput, ticket_statusesUncheckedCreateInput>
    /**
     * In case the ticket_statuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_statusesUpdateInput, ticket_statusesUncheckedUpdateInput>
  }

  /**
   * ticket_statuses delete
   */
  export type ticket_statusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
    /**
     * Filter which ticket_statuses to delete.
     */
    where: ticket_statusesWhereUniqueInput
  }

  /**
   * ticket_statuses deleteMany
   */
  export type ticket_statusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_statuses to delete
     */
    where?: ticket_statusesWhereInput
  }

  /**
   * ticket_statuses.ticket_replys
   */
  export type ticket_statuses$ticket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    where?: ticket_replysWhereInput
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    cursor?: ticket_replysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * ticket_statuses.tickets
   */
  export type ticket_statuses$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * ticket_statuses without action
   */
  export type ticket_statusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_statuses
     */
    select?: ticket_statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_statusesInclude<ExtArgs> | null
  }


  /**
   * Model ticket_types
   */

  export type AggregateTicket_types = {
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  export type Ticket_typesAvgAggregateOutputType = {
    ticket_type_id: number | null
  }

  export type Ticket_typesSumAggregateOutputType = {
    ticket_type_id: number | null
  }

  export type Ticket_typesMinAggregateOutputType = {
    ticket_type_id: number | null
    ticket_type_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: string | null
  }

  export type Ticket_typesMaxAggregateOutputType = {
    ticket_type_id: number | null
    ticket_type_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: string | null
  }

  export type Ticket_typesCountAggregateOutputType = {
    ticket_type_id: number
    ticket_type_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Ticket_typesAvgAggregateInputType = {
    ticket_type_id?: true
  }

  export type Ticket_typesSumAggregateInputType = {
    ticket_type_id?: true
  }

  export type Ticket_typesMinAggregateInputType = {
    ticket_type_id?: true
    ticket_type_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ticket_typesMaxAggregateInputType = {
    ticket_type_id?: true
    ticket_type_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Ticket_typesCountAggregateInputType = {
    ticket_type_id?: true
    ticket_type_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Ticket_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_types to aggregate.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_types
    **/
    _count?: true | Ticket_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type GetTicket_typesAggregateType<T extends Ticket_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_types[P]>
      : GetScalarType<T[P], AggregateTicket_types[P]>
  }




  export type ticket_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_typesWhereInput
    orderBy?: ticket_typesOrderByWithAggregationInput | ticket_typesOrderByWithAggregationInput[]
    by: Ticket_typesScalarFieldEnum[] | Ticket_typesScalarFieldEnum
    having?: ticket_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_typesCountAggregateInputType | true
    _avg?: Ticket_typesAvgAggregateInputType
    _sum?: Ticket_typesSumAggregateInputType
    _min?: Ticket_typesMinAggregateInputType
    _max?: Ticket_typesMaxAggregateInputType
  }

  export type Ticket_typesGroupByOutputType = {
    ticket_type_id: number
    ticket_type_name: string
    created_at: Date
    updated_at: Date | null
    deleted_at: string | null
    _count: Ticket_typesCountAggregateOutputType | null
    _avg: Ticket_typesAvgAggregateOutputType | null
    _sum: Ticket_typesSumAggregateOutputType | null
    _min: Ticket_typesMinAggregateOutputType | null
    _max: Ticket_typesMaxAggregateOutputType | null
  }

  type GetTicket_typesGroupByPayload<T extends ticket_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_typesGroupByOutputType[P]>
        }
      >
    >


  export type ticket_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_type_id?: boolean
    ticket_type_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    tickets?: boolean | ticket_types$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_types"]>


  export type ticket_typesSelectScalar = {
    ticket_type_id?: boolean
    ticket_type_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ticket_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ticket_types$ticketsArgs<ExtArgs>
    _count?: boolean | Ticket_typesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticket_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_types"
    objects: {
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_type_id: number
      ticket_type_name: string
      created_at: Date
      updated_at: Date | null
      deleted_at: string | null
    }, ExtArgs["result"]["ticket_types"]>
    composites: {}
  }

  type ticket_typesGetPayload<S extends boolean | null | undefined | ticket_typesDefaultArgs> = $Result.GetResult<Prisma.$ticket_typesPayload, S>

  type ticket_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticket_typesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ticket_typesCountAggregateInputType | true
    }

  export interface ticket_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_types'], meta: { name: 'ticket_types' } }
    /**
     * Find zero or one Ticket_types that matches the filter.
     * @param {ticket_typesFindUniqueArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_typesFindUniqueArgs>(args: SelectSubset<T, ticket_typesFindUniqueArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket_types that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticket_typesFindUniqueOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindFirstArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_typesFindFirstArgs>(args?: SelectSubset<T, ticket_typesFindFirstArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindFirstOrThrowArgs} args - Arguments to find a Ticket_types
     * @example
     * // Get one Ticket_types
     * const ticket_types = await prisma.ticket_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ticket_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany()
     * 
     * // Get first 10 Ticket_types
     * const ticket_types = await prisma.ticket_types.findMany({ take: 10 })
     * 
     * // Only select the `ticket_type_id`
     * const ticket_typesWithTicket_type_idOnly = await prisma.ticket_types.findMany({ select: { ticket_type_id: true } })
     * 
     */
    findMany<T extends ticket_typesFindManyArgs>(args?: SelectSubset<T, ticket_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket_types.
     * @param {ticket_typesCreateArgs} args - Arguments to create a Ticket_types.
     * @example
     * // Create one Ticket_types
     * const Ticket_types = await prisma.ticket_types.create({
     *   data: {
     *     // ... data to create a Ticket_types
     *   }
     * })
     * 
     */
    create<T extends ticket_typesCreateArgs>(args: SelectSubset<T, ticket_typesCreateArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ticket_types.
     * @param {ticket_typesCreateManyArgs} args - Arguments to create many Ticket_types.
     * @example
     * // Create many Ticket_types
     * const ticket_types = await prisma.ticket_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_typesCreateManyArgs>(args?: SelectSubset<T, ticket_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_types.
     * @param {ticket_typesDeleteArgs} args - Arguments to delete one Ticket_types.
     * @example
     * // Delete one Ticket_types
     * const Ticket_types = await prisma.ticket_types.delete({
     *   where: {
     *     // ... filter to delete one Ticket_types
     *   }
     * })
     * 
     */
    delete<T extends ticket_typesDeleteArgs>(args: SelectSubset<T, ticket_typesDeleteArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket_types.
     * @param {ticket_typesUpdateArgs} args - Arguments to update one Ticket_types.
     * @example
     * // Update one Ticket_types
     * const ticket_types = await prisma.ticket_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_typesUpdateArgs>(args: SelectSubset<T, ticket_typesUpdateArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ticket_types.
     * @param {ticket_typesDeleteManyArgs} args - Arguments to filter Ticket_types to delete.
     * @example
     * // Delete a few Ticket_types
     * const { count } = await prisma.ticket_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_typesDeleteManyArgs>(args?: SelectSubset<T, ticket_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_types
     * const ticket_types = await prisma.ticket_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_typesUpdateManyArgs>(args: SelectSubset<T, ticket_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_types.
     * @param {ticket_typesUpsertArgs} args - Arguments to update or create a Ticket_types.
     * @example
     * // Update or create a Ticket_types
     * const ticket_types = await prisma.ticket_types.upsert({
     *   create: {
     *     // ... data to create a Ticket_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_types we want to update
     *   }
     * })
     */
    upsert<T extends ticket_typesUpsertArgs>(args: SelectSubset<T, ticket_typesUpsertArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesCountArgs} args - Arguments to filter Ticket_types to count.
     * @example
     * // Count the number of Ticket_types
     * const count = await prisma.ticket_types.count({
     *   where: {
     *     // ... the filter for the Ticket_types we want to count
     *   }
     * })
    **/
    count<T extends ticket_typesCountArgs>(
      args?: Subset<T, ticket_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_typesAggregateArgs>(args: Subset<T, Ticket_typesAggregateArgs>): Prisma.PrismaPromise<GetTicket_typesAggregateType<T>>

    /**
     * Group by Ticket_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_typesGroupByArgs['orderBy'] }
        : { orderBy?: ticket_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_types model
   */
  readonly fields: ticket_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends ticket_types$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ticket_types$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_types model
   */ 
  interface ticket_typesFieldRefs {
    readonly ticket_type_id: FieldRef<"ticket_types", 'Int'>
    readonly ticket_type_name: FieldRef<"ticket_types", 'String'>
    readonly created_at: FieldRef<"ticket_types", 'DateTime'>
    readonly updated_at: FieldRef<"ticket_types", 'DateTime'>
    readonly deleted_at: FieldRef<"ticket_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ticket_types findUnique
   */
  export type ticket_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types findUniqueOrThrow
   */
  export type ticket_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types findFirst
   */
  export type ticket_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types findFirstOrThrow
   */
  export type ticket_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_types.
     */
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types findMany
   */
  export type ticket_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter, which ticket_types to fetch.
     */
    where?: ticket_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_types to fetch.
     */
    orderBy?: ticket_typesOrderByWithRelationInput | ticket_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_types.
     */
    cursor?: ticket_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_types.
     */
    skip?: number
    distinct?: Ticket_typesScalarFieldEnum | Ticket_typesScalarFieldEnum[]
  }

  /**
   * ticket_types create
   */
  export type ticket_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_types.
     */
    data: XOR<ticket_typesCreateInput, ticket_typesUncheckedCreateInput>
  }

  /**
   * ticket_types createMany
   */
  export type ticket_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_types.
     */
    data: ticket_typesCreateManyInput | ticket_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_types update
   */
  export type ticket_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_types.
     */
    data: XOR<ticket_typesUpdateInput, ticket_typesUncheckedUpdateInput>
    /**
     * Choose, which ticket_types to update.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types updateMany
   */
  export type ticket_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_types.
     */
    data: XOR<ticket_typesUpdateManyMutationInput, ticket_typesUncheckedUpdateManyInput>
    /**
     * Filter which ticket_types to update
     */
    where?: ticket_typesWhereInput
  }

  /**
   * ticket_types upsert
   */
  export type ticket_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_types to update in case it exists.
     */
    where: ticket_typesWhereUniqueInput
    /**
     * In case the ticket_types found by the `where` argument doesn't exist, create a new ticket_types with this data.
     */
    create: XOR<ticket_typesCreateInput, ticket_typesUncheckedCreateInput>
    /**
     * In case the ticket_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_typesUpdateInput, ticket_typesUncheckedUpdateInput>
  }

  /**
   * ticket_types delete
   */
  export type ticket_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
    /**
     * Filter which ticket_types to delete.
     */
    where: ticket_typesWhereUniqueInput
  }

  /**
   * ticket_types deleteMany
   */
  export type ticket_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_types to delete
     */
    where?: ticket_typesWhereInput
  }

  /**
   * ticket_types.tickets
   */
  export type ticket_types$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * ticket_types without action
   */
  export type ticket_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_types
     */
    select?: ticket_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_typesInclude<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    ticket_id: number | null
    ticket_type_id: number | null
    category_id: number | null
    division_id: number | null
    ticket_priority_id: number | null
    ticket_status_id: number | null
    created_user_id: number | null
    updated_user_id: number | null
  }

  export type TicketsSumAggregateOutputType = {
    ticket_id: bigint | null
    ticket_type_id: number | null
    category_id: number | null
    division_id: number | null
    ticket_priority_id: number | null
    ticket_status_id: number | null
    created_user_id: bigint | null
    updated_user_id: bigint | null
  }

  export type TicketsMinAggregateOutputType = {
    ticket_id: bigint | null
    ticket_number: string | null
    ticket_subject: string | null
    ticket_detail: string | null
    requestor_name: string | null
    ticket_type_id: number | null
    category_id: number | null
    division_id: number | null
    ticket_priority_id: number | null
    ticket_status_id: number | null
    ticket_attach: $Enums.tickets_ticket_attach | null
    ticket_start_date: Date | null
    ticket_end_date: Date | null
    created_user_id: bigint | null
    created_at: Date | null
    updated_user_id: bigint | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    ticket_id: bigint | null
    ticket_number: string | null
    ticket_subject: string | null
    ticket_detail: string | null
    requestor_name: string | null
    ticket_type_id: number | null
    category_id: number | null
    division_id: number | null
    ticket_priority_id: number | null
    ticket_status_id: number | null
    ticket_attach: $Enums.tickets_ticket_attach | null
    ticket_start_date: Date | null
    ticket_end_date: Date | null
    created_user_id: bigint | null
    created_at: Date | null
    updated_user_id: bigint | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    ticket_id: number
    ticket_number: number
    ticket_subject: number
    ticket_detail: number
    requestor_name: number
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach: number
    ticket_start_date: number
    ticket_end_date: number
    created_user_id: number
    created_at: number
    updated_user_id: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    ticket_id?: true
    ticket_type_id?: true
    category_id?: true
    division_id?: true
    ticket_priority_id?: true
    ticket_status_id?: true
    created_user_id?: true
    updated_user_id?: true
  }

  export type TicketsSumAggregateInputType = {
    ticket_id?: true
    ticket_type_id?: true
    category_id?: true
    division_id?: true
    ticket_priority_id?: true
    ticket_status_id?: true
    created_user_id?: true
    updated_user_id?: true
  }

  export type TicketsMinAggregateInputType = {
    ticket_id?: true
    ticket_number?: true
    ticket_subject?: true
    ticket_detail?: true
    requestor_name?: true
    ticket_type_id?: true
    category_id?: true
    division_id?: true
    ticket_priority_id?: true
    ticket_status_id?: true
    ticket_attach?: true
    ticket_start_date?: true
    ticket_end_date?: true
    created_user_id?: true
    created_at?: true
    updated_user_id?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TicketsMaxAggregateInputType = {
    ticket_id?: true
    ticket_number?: true
    ticket_subject?: true
    ticket_detail?: true
    requestor_name?: true
    ticket_type_id?: true
    category_id?: true
    division_id?: true
    ticket_priority_id?: true
    ticket_status_id?: true
    ticket_attach?: true
    ticket_start_date?: true
    ticket_end_date?: true
    created_user_id?: true
    created_at?: true
    updated_user_id?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TicketsCountAggregateInputType = {
    ticket_id?: true
    ticket_number?: true
    ticket_subject?: true
    ticket_detail?: true
    requestor_name?: true
    ticket_type_id?: true
    category_id?: true
    division_id?: true
    ticket_priority_id?: true
    ticket_status_id?: true
    ticket_attach?: true
    ticket_start_date?: true
    ticket_end_date?: true
    created_user_id?: true
    created_at?: true
    updated_user_id?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    ticket_id: bigint
    ticket_number: string
    ticket_subject: string
    ticket_detail: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach: $Enums.tickets_ticket_attach
    ticket_start_date: Date | null
    ticket_end_date: Date | null
    created_user_id: bigint
    created_at: Date | null
    updated_user_id: bigint | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    ticket_number?: boolean
    ticket_subject?: boolean
    ticket_detail?: boolean
    requestor_name?: boolean
    ticket_type_id?: boolean
    category_id?: boolean
    division_id?: boolean
    ticket_priority_id?: boolean
    ticket_status_id?: boolean
    ticket_attach?: boolean
    ticket_start_date?: boolean
    ticket_end_date?: boolean
    created_user_id?: boolean
    created_at?: boolean
    updated_user_id?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ticket_documents?: boolean | tickets$ticket_documentsArgs<ExtArgs>
    ticket_replys?: boolean | tickets$ticket_replysArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    divisions?: boolean | divisionsDefaultArgs<ExtArgs>
    ticket_priorities?: boolean | ticket_prioritiesDefaultArgs<ExtArgs>
    ticket_statuses?: boolean | ticket_statusesDefaultArgs<ExtArgs>
    ticket_types?: boolean | ticket_typesDefaultArgs<ExtArgs>
    users_tickets_created_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_tickets_updated_user_idTousers?: boolean | tickets$users_tickets_updated_user_idTousersArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>


  export type ticketsSelectScalar = {
    ticket_id?: boolean
    ticket_number?: boolean
    ticket_subject?: boolean
    ticket_detail?: boolean
    requestor_name?: boolean
    ticket_type_id?: boolean
    category_id?: boolean
    division_id?: boolean
    ticket_priority_id?: boolean
    ticket_status_id?: boolean
    ticket_attach?: boolean
    ticket_start_date?: boolean
    ticket_end_date?: boolean
    created_user_id?: boolean
    created_at?: boolean
    updated_user_id?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_documents?: boolean | tickets$ticket_documentsArgs<ExtArgs>
    ticket_replys?: boolean | tickets$ticket_replysArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    divisions?: boolean | divisionsDefaultArgs<ExtArgs>
    ticket_priorities?: boolean | ticket_prioritiesDefaultArgs<ExtArgs>
    ticket_statuses?: boolean | ticket_statusesDefaultArgs<ExtArgs>
    ticket_types?: boolean | ticket_typesDefaultArgs<ExtArgs>
    users_tickets_created_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_tickets_updated_user_idTousers?: boolean | tickets$users_tickets_updated_user_idTousersArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {
      ticket_documents: Prisma.$ticket_documentsPayload<ExtArgs>[]
      ticket_replys: Prisma.$ticket_replysPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
      divisions: Prisma.$divisionsPayload<ExtArgs>
      ticket_priorities: Prisma.$ticket_prioritiesPayload<ExtArgs>
      ticket_statuses: Prisma.$ticket_statusesPayload<ExtArgs>
      ticket_types: Prisma.$ticket_typesPayload<ExtArgs>
      users_tickets_created_user_idTousers: Prisma.$usersPayload<ExtArgs>
      users_tickets_updated_user_idTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: bigint
      ticket_number: string
      ticket_subject: string
      ticket_detail: string | null
      requestor_name: string
      ticket_type_id: number
      category_id: number
      division_id: number
      ticket_priority_id: number
      ticket_status_id: number
      ticket_attach: $Enums.tickets_ticket_attach
      ticket_start_date: Date | null
      ticket_end_date: Date | null
      created_user_id: bigint
      created_at: Date | null
      updated_user_id: bigint | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const ticketsWithTicket_idOnly = await prisma.tickets.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_documents<T extends tickets$ticket_documentsArgs<ExtArgs> = {}>(args?: Subset<T, tickets$ticket_documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_documentsPayload<ExtArgs>, T, "findMany"> | Null>
    ticket_replys<T extends tickets$ticket_replysArgs<ExtArgs> = {}>(args?: Subset<T, tickets$ticket_replysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    divisions<T extends divisionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, divisionsDefaultArgs<ExtArgs>>): Prisma__divisionsClient<$Result.GetResult<Prisma.$divisionsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_priorities<T extends ticket_prioritiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_prioritiesDefaultArgs<ExtArgs>>): Prisma__ticket_prioritiesClient<$Result.GetResult<Prisma.$ticket_prioritiesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_statuses<T extends ticket_statusesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_statusesDefaultArgs<ExtArgs>>): Prisma__ticket_statusesClient<$Result.GetResult<Prisma.$ticket_statusesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket_types<T extends ticket_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_typesDefaultArgs<ExtArgs>>): Prisma__ticket_typesClient<$Result.GetResult<Prisma.$ticket_typesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users_tickets_created_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users_tickets_updated_user_idTousers<T extends tickets$users_tickets_updated_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, tickets$users_tickets_updated_user_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tickets model
   */ 
  interface ticketsFieldRefs {
    readonly ticket_id: FieldRef<"tickets", 'BigInt'>
    readonly ticket_number: FieldRef<"tickets", 'String'>
    readonly ticket_subject: FieldRef<"tickets", 'String'>
    readonly ticket_detail: FieldRef<"tickets", 'String'>
    readonly requestor_name: FieldRef<"tickets", 'String'>
    readonly ticket_type_id: FieldRef<"tickets", 'Int'>
    readonly category_id: FieldRef<"tickets", 'Int'>
    readonly division_id: FieldRef<"tickets", 'Int'>
    readonly ticket_priority_id: FieldRef<"tickets", 'Int'>
    readonly ticket_status_id: FieldRef<"tickets", 'Int'>
    readonly ticket_attach: FieldRef<"tickets", 'tickets_ticket_attach'>
    readonly ticket_start_date: FieldRef<"tickets", 'DateTime'>
    readonly ticket_end_date: FieldRef<"tickets", 'DateTime'>
    readonly created_user_id: FieldRef<"tickets", 'BigInt'>
    readonly created_at: FieldRef<"tickets", 'DateTime'>
    readonly updated_user_id: FieldRef<"tickets", 'BigInt'>
    readonly updated_at: FieldRef<"tickets", 'DateTime'>
    readonly deleted_at: FieldRef<"tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
  }

  /**
   * tickets.ticket_documents
   */
  export type tickets$ticket_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_documents
     */
    select?: ticket_documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_documentsInclude<ExtArgs> | null
    where?: ticket_documentsWhereInput
    orderBy?: ticket_documentsOrderByWithRelationInput | ticket_documentsOrderByWithRelationInput[]
    cursor?: ticket_documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_documentsScalarFieldEnum | Ticket_documentsScalarFieldEnum[]
  }

  /**
   * tickets.ticket_replys
   */
  export type tickets$ticket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    where?: ticket_replysWhereInput
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    cursor?: ticket_replysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * tickets.users_tickets_updated_user_idTousers
   */
  export type tickets$users_tickets_updated_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: bigint | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: bigint | null
    user_name: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role_id: number | null
    is_active: boolean | null
    verify_token: string | null
    login_at: Date | null
    logout_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: bigint | null
    user_name: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role_id: number | null
    is_active: boolean | null
    verify_token: string | null
    login_at: Date | null
    logout_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    full_name: number
    email: number
    password: number
    role_id: number
    is_active: number
    verify_token: number
    login_at: number
    logout_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_name?: true
    full_name?: true
    email?: true
    password?: true
    role_id?: true
    is_active?: true
    verify_token?: true
    login_at?: true
    logout_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    full_name?: true
    email?: true
    password?: true
    role_id?: true
    is_active?: true
    verify_token?: true
    login_at?: true
    logout_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    full_name?: true
    email?: true
    password?: true
    role_id?: true
    is_active?: true
    verify_token?: true
    login_at?: true
    logout_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: bigint
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active: boolean
    verify_token: string | null
    login_at: Date | null
    logout_at: Date | null
    created_at: Date
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    is_active?: boolean
    verify_token?: boolean
    login_at?: boolean
    logout_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    ticket_replys?: boolean | users$ticket_replysArgs<ExtArgs>
    tickets_tickets_created_user_idTousers?: boolean | users$tickets_tickets_created_user_idTousersArgs<ExtArgs>
    tickets_tickets_updated_user_idTousers?: boolean | users$tickets_tickets_updated_user_idTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    is_active?: boolean
    verify_token?: boolean
    login_at?: boolean
    logout_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_replys?: boolean | users$ticket_replysArgs<ExtArgs>
    tickets_tickets_created_user_idTousers?: boolean | users$tickets_tickets_created_user_idTousersArgs<ExtArgs>
    tickets_tickets_updated_user_idTousers?: boolean | users$tickets_tickets_updated_user_idTousersArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      ticket_replys: Prisma.$ticket_replysPayload<ExtArgs>[]
      tickets_tickets_created_user_idTousers: Prisma.$ticketsPayload<ExtArgs>[]
      tickets_tickets_updated_user_idTousers: Prisma.$ticketsPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      user_name: string
      full_name: string
      email: string
      password: string
      role_id: number
      is_active: boolean
      verify_token: string | null
      login_at: Date | null
      logout_at: Date | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_replys<T extends users$ticket_replysArgs<ExtArgs> = {}>(args?: Subset<T, users$ticket_replysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_replysPayload<ExtArgs>, T, "findMany"> | Null>
    tickets_tickets_created_user_idTousers<T extends users$tickets_tickets_created_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tickets_tickets_created_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    tickets_tickets_updated_user_idTousers<T extends users$tickets_tickets_updated_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tickets_tickets_updated_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany"> | Null>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'BigInt'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly verify_token: FieldRef<"users", 'String'>
    readonly login_at: FieldRef<"users", 'DateTime'>
    readonly logout_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.ticket_replys
   */
  export type users$ticket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_replys
     */
    select?: ticket_replysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_replysInclude<ExtArgs> | null
    where?: ticket_replysWhereInput
    orderBy?: ticket_replysOrderByWithRelationInput | ticket_replysOrderByWithRelationInput[]
    cursor?: ticket_replysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_replysScalarFieldEnum | Ticket_replysScalarFieldEnum[]
  }

  /**
   * users.tickets_tickets_created_user_idTousers
   */
  export type users$tickets_tickets_created_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * users.tickets_tickets_updated_user_idTousers
   */
  export type users$tickets_tickets_updated_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    color: 'color',
    created_at: 'created_at',
    updated_at: 'updated_at',
    icon: 'icon'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const DivisionsScalarFieldEnum: {
    division_id: 'division_id',
    division_name: 'division_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DivisionsScalarFieldEnum = (typeof DivisionsScalarFieldEnum)[keyof typeof DivisionsScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name',
    permissions: 'permissions',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Ticket_documentsScalarFieldEnum: {
    ticket_document_id: 'ticket_document_id',
    ticket_id: 'ticket_id',
    file_name: 'file_name',
    file_path: 'file_path',
    file_size: 'file_size',
    file_extension: 'file_extension',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ticket_documentsScalarFieldEnum = (typeof Ticket_documentsScalarFieldEnum)[keyof typeof Ticket_documentsScalarFieldEnum]


  export const Ticket_prioritiesScalarFieldEnum: {
    ticket_priority_id: 'ticket_priority_id',
    ticket_priority_name: 'ticket_priority_name',
    color: 'color',
    icon: 'icon',
    is_default: 'is_default',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ticket_prioritiesScalarFieldEnum = (typeof Ticket_prioritiesScalarFieldEnum)[keyof typeof Ticket_prioritiesScalarFieldEnum]


  export const Ticket_reply_documentsScalarFieldEnum: {
    ticket_reply_document_id: 'ticket_reply_document_id',
    ticket_reply_id: 'ticket_reply_id',
    file_name: 'file_name',
    file_path: 'file_path',
    file_size: 'file_size',
    file_extension: 'file_extension',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ticket_reply_documentsScalarFieldEnum = (typeof Ticket_reply_documentsScalarFieldEnum)[keyof typeof Ticket_reply_documentsScalarFieldEnum]


  export const Ticket_replysScalarFieldEnum: {
    ticket_reply_id: 'ticket_reply_id',
    ticket_id: 'ticket_id',
    ticket_status_id: 'ticket_status_id',
    pic_user_id: 'pic_user_id',
    reply_description: 'reply_description',
    ticket_attch: 'ticket_attch',
    created_at: 'created_at'
  };

  export type Ticket_replysScalarFieldEnum = (typeof Ticket_replysScalarFieldEnum)[keyof typeof Ticket_replysScalarFieldEnum]


  export const Ticket_statusesScalarFieldEnum: {
    ticket_status_id: 'ticket_status_id',
    ticket_name: 'ticket_name',
    color: 'color',
    is_default: 'is_default',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ticket_statusesScalarFieldEnum = (typeof Ticket_statusesScalarFieldEnum)[keyof typeof Ticket_statusesScalarFieldEnum]


  export const Ticket_typesScalarFieldEnum: {
    ticket_type_id: 'ticket_type_id',
    ticket_type_name: 'ticket_type_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Ticket_typesScalarFieldEnum = (typeof Ticket_typesScalarFieldEnum)[keyof typeof Ticket_typesScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    ticket_id: 'ticket_id',
    ticket_number: 'ticket_number',
    ticket_subject: 'ticket_subject',
    ticket_detail: 'ticket_detail',
    requestor_name: 'requestor_name',
    ticket_type_id: 'ticket_type_id',
    category_id: 'category_id',
    division_id: 'division_id',
    ticket_priority_id: 'ticket_priority_id',
    ticket_status_id: 'ticket_status_id',
    ticket_attach: 'ticket_attach',
    ticket_start_date: 'ticket_start_date',
    ticket_end_date: 'ticket_end_date',
    created_user_id: 'created_user_id',
    created_at: 'created_at',
    updated_user_id: 'updated_user_id',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    role_id: 'role_id',
    is_active: 'is_active',
    verify_token: 'verify_token',
    login_at: 'login_at',
    logout_at: 'logout_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ticket_replys_ticket_attch'
   */
  export type Enumticket_replys_ticket_attchFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_replys_ticket_attch'>
    


  /**
   * Reference to a field of type 'tickets_ticket_attach'
   */
  export type Enumtickets_ticket_attachFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tickets_ticket_attach'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: IntFilter<"categories"> | number
    category_name?: StringFilter<"categories"> | string
    color?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    icon?: StringNullableFilter<"categories"> | string | null
    tickets?: TicketsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    color?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    category_name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    color?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    icon?: StringNullableFilter<"categories"> | string | null
    tickets?: TicketsListRelationFilter
  }, "category_id" | "category_name">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    color?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"categories"> | number
    category_name?: StringWithAggregatesFilter<"categories"> | string
    color?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    icon?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type divisionsWhereInput = {
    AND?: divisionsWhereInput | divisionsWhereInput[]
    OR?: divisionsWhereInput[]
    NOT?: divisionsWhereInput | divisionsWhereInput[]
    division_id?: IntFilter<"divisions"> | number
    division_name?: StringFilter<"divisions"> | string
    created_at?: DateTimeFilter<"divisions"> | Date | string
    updated_at?: DateTimeNullableFilter<"divisions"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"divisions"> | Date | string | null
    tickets?: TicketsListRelationFilter
  }

  export type divisionsOrderByWithRelationInput = {
    division_id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type divisionsWhereUniqueInput = Prisma.AtLeast<{
    division_id?: number
    division_name?: string
    AND?: divisionsWhereInput | divisionsWhereInput[]
    OR?: divisionsWhereInput[]
    NOT?: divisionsWhereInput | divisionsWhereInput[]
    created_at?: DateTimeFilter<"divisions"> | Date | string
    updated_at?: DateTimeNullableFilter<"divisions"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"divisions"> | Date | string | null
    tickets?: TicketsListRelationFilter
  }, "division_id" | "division_name">

  export type divisionsOrderByWithAggregationInput = {
    division_id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: divisionsCountOrderByAggregateInput
    _avg?: divisionsAvgOrderByAggregateInput
    _max?: divisionsMaxOrderByAggregateInput
    _min?: divisionsMinOrderByAggregateInput
    _sum?: divisionsSumOrderByAggregateInput
  }

  export type divisionsScalarWhereWithAggregatesInput = {
    AND?: divisionsScalarWhereWithAggregatesInput | divisionsScalarWhereWithAggregatesInput[]
    OR?: divisionsScalarWhereWithAggregatesInput[]
    NOT?: divisionsScalarWhereWithAggregatesInput | divisionsScalarWhereWithAggregatesInput[]
    division_id?: IntWithAggregatesFilter<"divisions"> | number
    division_name?: StringWithAggregatesFilter<"divisions"> | string
    created_at?: DateTimeWithAggregatesFilter<"divisions"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"divisions"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"divisions"> | Date | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    role_id?: IntFilter<"roles"> | number
    role_name?: StringFilter<"roles"> | string
    permissions?: StringNullableFilter<"roles"> | string | null
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    permissions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    role_name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    permissions?: StringNullableFilter<"roles"> | string | null
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }, "role_id" | "role_name">

  export type rolesOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    permissions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"roles"> | number
    role_name?: StringWithAggregatesFilter<"roles"> | string
    permissions?: StringNullableWithAggregatesFilter<"roles"> | string | null
    description?: StringNullableWithAggregatesFilter<"roles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type ticket_documentsWhereInput = {
    AND?: ticket_documentsWhereInput | ticket_documentsWhereInput[]
    OR?: ticket_documentsWhereInput[]
    NOT?: ticket_documentsWhereInput | ticket_documentsWhereInput[]
    ticket_document_id?: BigIntFilter<"ticket_documents"> | bigint | number
    ticket_id?: BigIntFilter<"ticket_documents"> | bigint | number
    file_name?: StringFilter<"ticket_documents"> | string
    file_path?: StringFilter<"ticket_documents"> | string
    file_size?: IntNullableFilter<"ticket_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
    tickets?: XOR<TicketsRelationFilter, ticketsWhereInput>
  }

  export type ticket_documentsOrderByWithRelationInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByWithRelationInput
  }

  export type ticket_documentsWhereUniqueInput = Prisma.AtLeast<{
    ticket_document_id?: bigint | number
    file_name?: string
    AND?: ticket_documentsWhereInput | ticket_documentsWhereInput[]
    OR?: ticket_documentsWhereInput[]
    NOT?: ticket_documentsWhereInput | ticket_documentsWhereInput[]
    ticket_id?: BigIntFilter<"ticket_documents"> | bigint | number
    file_path?: StringFilter<"ticket_documents"> | string
    file_size?: IntNullableFilter<"ticket_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
    tickets?: XOR<TicketsRelationFilter, ticketsWhereInput>
  }, "ticket_document_id" | "file_name">

  export type ticket_documentsOrderByWithAggregationInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ticket_documentsCountOrderByAggregateInput
    _avg?: ticket_documentsAvgOrderByAggregateInput
    _max?: ticket_documentsMaxOrderByAggregateInput
    _min?: ticket_documentsMinOrderByAggregateInput
    _sum?: ticket_documentsSumOrderByAggregateInput
  }

  export type ticket_documentsScalarWhereWithAggregatesInput = {
    AND?: ticket_documentsScalarWhereWithAggregatesInput | ticket_documentsScalarWhereWithAggregatesInput[]
    OR?: ticket_documentsScalarWhereWithAggregatesInput[]
    NOT?: ticket_documentsScalarWhereWithAggregatesInput | ticket_documentsScalarWhereWithAggregatesInput[]
    ticket_document_id?: BigIntWithAggregatesFilter<"ticket_documents"> | bigint | number
    ticket_id?: BigIntWithAggregatesFilter<"ticket_documents"> | bigint | number
    file_name?: StringWithAggregatesFilter<"ticket_documents"> | string
    file_path?: StringWithAggregatesFilter<"ticket_documents"> | string
    file_size?: IntNullableWithAggregatesFilter<"ticket_documents"> | number | null
    file_extension?: StringNullableWithAggregatesFilter<"ticket_documents"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ticket_documents"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ticket_documents"> | Date | string | null
  }

  export type ticket_prioritiesWhereInput = {
    AND?: ticket_prioritiesWhereInput | ticket_prioritiesWhereInput[]
    OR?: ticket_prioritiesWhereInput[]
    NOT?: ticket_prioritiesWhereInput | ticket_prioritiesWhereInput[]
    ticket_priority_id?: IntFilter<"ticket_priorities"> | number
    ticket_priority_name?: StringFilter<"ticket_priorities"> | string
    color?: StringNullableFilter<"ticket_priorities"> | string | null
    icon?: StringNullableFilter<"ticket_priorities"> | string | null
    is_default?: BoolNullableFilter<"ticket_priorities"> | boolean | null
    created_at?: DateTimeFilter<"ticket_priorities"> | Date | string
    updated_at?: DateTimeNullableFilter<"ticket_priorities"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ticket_priorities"> | Date | string | null
    tickets?: TicketsListRelationFilter
  }

  export type ticket_prioritiesOrderByWithRelationInput = {
    ticket_priority_id?: SortOrder
    ticket_priority_name?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    is_default?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type ticket_prioritiesWhereUniqueInput = Prisma.AtLeast<{
    ticket_priority_id?: number
    ticket_priority_name?: string
    AND?: ticket_prioritiesWhereInput | ticket_prioritiesWhereInput[]
    OR?: ticket_prioritiesWhereInput[]
    NOT?: ticket_prioritiesWhereInput | ticket_prioritiesWhereInput[]
    color?: StringNullableFilter<"ticket_priorities"> | string | null
    icon?: StringNullableFilter<"ticket_priorities"> | string | null
    is_default?: BoolNullableFilter<"ticket_priorities"> | boolean | null
    created_at?: DateTimeFilter<"ticket_priorities"> | Date | string
    updated_at?: DateTimeNullableFilter<"ticket_priorities"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"ticket_priorities"> | Date | string | null
    tickets?: TicketsListRelationFilter
  }, "ticket_priority_id" | "ticket_priority_name">

  export type ticket_prioritiesOrderByWithAggregationInput = {
    ticket_priority_id?: SortOrder
    ticket_priority_name?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    is_default?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ticket_prioritiesCountOrderByAggregateInput
    _avg?: ticket_prioritiesAvgOrderByAggregateInput
    _max?: ticket_prioritiesMaxOrderByAggregateInput
    _min?: ticket_prioritiesMinOrderByAggregateInput
    _sum?: ticket_prioritiesSumOrderByAggregateInput
  }

  export type ticket_prioritiesScalarWhereWithAggregatesInput = {
    AND?: ticket_prioritiesScalarWhereWithAggregatesInput | ticket_prioritiesScalarWhereWithAggregatesInput[]
    OR?: ticket_prioritiesScalarWhereWithAggregatesInput[]
    NOT?: ticket_prioritiesScalarWhereWithAggregatesInput | ticket_prioritiesScalarWhereWithAggregatesInput[]
    ticket_priority_id?: IntWithAggregatesFilter<"ticket_priorities"> | number
    ticket_priority_name?: StringWithAggregatesFilter<"ticket_priorities"> | string
    color?: StringNullableWithAggregatesFilter<"ticket_priorities"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ticket_priorities"> | string | null
    is_default?: BoolNullableWithAggregatesFilter<"ticket_priorities"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"ticket_priorities"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"ticket_priorities"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ticket_priorities"> | Date | string | null
  }

  export type ticket_reply_documentsWhereInput = {
    AND?: ticket_reply_documentsWhereInput | ticket_reply_documentsWhereInput[]
    OR?: ticket_reply_documentsWhereInput[]
    NOT?: ticket_reply_documentsWhereInput | ticket_reply_documentsWhereInput[]
    ticket_reply_document_id?: BigIntFilter<"ticket_reply_documents"> | bigint | number
    ticket_reply_id?: BigIntFilter<"ticket_reply_documents"> | bigint | number
    file_name?: StringFilter<"ticket_reply_documents"> | string
    file_path?: StringFilter<"ticket_reply_documents"> | string
    file_size?: IntNullableFilter<"ticket_reply_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_reply_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
    ticket_replys?: XOR<Ticket_replysRelationFilter, ticket_replysWhereInput>
  }

  export type ticket_reply_documentsOrderByWithRelationInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    ticket_replys?: ticket_replysOrderByWithRelationInput
  }

  export type ticket_reply_documentsWhereUniqueInput = Prisma.AtLeast<{
    ticket_reply_document_id?: bigint | number
    file_name?: string
    AND?: ticket_reply_documentsWhereInput | ticket_reply_documentsWhereInput[]
    OR?: ticket_reply_documentsWhereInput[]
    NOT?: ticket_reply_documentsWhereInput | ticket_reply_documentsWhereInput[]
    ticket_reply_id?: BigIntFilter<"ticket_reply_documents"> | bigint | number
    file_path?: StringFilter<"ticket_reply_documents"> | string
    file_size?: IntNullableFilter<"ticket_reply_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_reply_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
    ticket_replys?: XOR<Ticket_replysRelationFilter, ticket_replysWhereInput>
  }, "ticket_reply_document_id" | "file_name">

  export type ticket_reply_documentsOrderByWithAggregationInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrderInput | SortOrder
    file_extension?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ticket_reply_documentsCountOrderByAggregateInput
    _avg?: ticket_reply_documentsAvgOrderByAggregateInput
    _max?: ticket_reply_documentsMaxOrderByAggregateInput
    _min?: ticket_reply_documentsMinOrderByAggregateInput
    _sum?: ticket_reply_documentsSumOrderByAggregateInput
  }

  export type ticket_reply_documentsScalarWhereWithAggregatesInput = {
    AND?: ticket_reply_documentsScalarWhereWithAggregatesInput | ticket_reply_documentsScalarWhereWithAggregatesInput[]
    OR?: ticket_reply_documentsScalarWhereWithAggregatesInput[]
    NOT?: ticket_reply_documentsScalarWhereWithAggregatesInput | ticket_reply_documentsScalarWhereWithAggregatesInput[]
    ticket_reply_document_id?: BigIntWithAggregatesFilter<"ticket_reply_documents"> | bigint | number
    ticket_reply_id?: BigIntWithAggregatesFilter<"ticket_reply_documents"> | bigint | number
    file_name?: StringWithAggregatesFilter<"ticket_reply_documents"> | string
    file_path?: StringWithAggregatesFilter<"ticket_reply_documents"> | string
    file_size?: IntNullableWithAggregatesFilter<"ticket_reply_documents"> | number | null
    file_extension?: StringNullableWithAggregatesFilter<"ticket_reply_documents"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ticket_reply_documents"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ticket_reply_documents"> | Date | string | null
  }

  export type ticket_replysWhereInput = {
    AND?: ticket_replysWhereInput | ticket_replysWhereInput[]
    OR?: ticket_replysWhereInput[]
    NOT?: ticket_replysWhereInput | ticket_replysWhereInput[]
    ticket_reply_id?: BigIntFilter<"ticket_replys"> | bigint | number
    ticket_id?: BigIntFilter<"ticket_replys"> | bigint | number
    ticket_status_id?: IntFilter<"ticket_replys"> | number
    pic_user_id?: BigIntFilter<"ticket_replys"> | bigint | number
    reply_description?: StringNullableFilter<"ticket_replys"> | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFilter<"ticket_replys"> | $Enums.ticket_replys_ticket_attch
    created_at?: DateTimeNullableFilter<"ticket_replys"> | Date | string | null
    ticket_statuses?: XOR<Ticket_statusesRelationFilter, ticket_statusesWhereInput>
    tickets?: XOR<TicketsRelationFilter, ticketsWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
    ticket_reply_documents?: Ticket_reply_documentsListRelationFilter
  }

  export type ticket_replysOrderByWithRelationInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
    reply_description?: SortOrderInput | SortOrder
    ticket_attch?: SortOrder
    created_at?: SortOrderInput | SortOrder
    ticket_statuses?: ticket_statusesOrderByWithRelationInput
    tickets?: ticketsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    ticket_reply_documents?: ticket_reply_documentsOrderByRelationAggregateInput
  }

  export type ticket_replysWhereUniqueInput = Prisma.AtLeast<{
    ticket_reply_id?: bigint | number
    AND?: ticket_replysWhereInput | ticket_replysWhereInput[]
    OR?: ticket_replysWhereInput[]
    NOT?: ticket_replysWhereInput | ticket_replysWhereInput[]
    ticket_id?: BigIntFilter<"ticket_replys"> | bigint | number
    ticket_status_id?: IntFilter<"ticket_replys"> | number
    pic_user_id?: BigIntFilter<"ticket_replys"> | bigint | number
    reply_description?: StringNullableFilter<"ticket_replys"> | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFilter<"ticket_replys"> | $Enums.ticket_replys_ticket_attch
    created_at?: DateTimeNullableFilter<"ticket_replys"> | Date | string | null
    ticket_statuses?: XOR<Ticket_statusesRelationFilter, ticket_statusesWhereInput>
    tickets?: XOR<TicketsRelationFilter, ticketsWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
    ticket_reply_documents?: Ticket_reply_documentsListRelationFilter
  }, "ticket_reply_id">

  export type ticket_replysOrderByWithAggregationInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
    reply_description?: SortOrderInput | SortOrder
    ticket_attch?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ticket_replysCountOrderByAggregateInput
    _avg?: ticket_replysAvgOrderByAggregateInput
    _max?: ticket_replysMaxOrderByAggregateInput
    _min?: ticket_replysMinOrderByAggregateInput
    _sum?: ticket_replysSumOrderByAggregateInput
  }

  export type ticket_replysScalarWhereWithAggregatesInput = {
    AND?: ticket_replysScalarWhereWithAggregatesInput | ticket_replysScalarWhereWithAggregatesInput[]
    OR?: ticket_replysScalarWhereWithAggregatesInput[]
    NOT?: ticket_replysScalarWhereWithAggregatesInput | ticket_replysScalarWhereWithAggregatesInput[]
    ticket_reply_id?: BigIntWithAggregatesFilter<"ticket_replys"> | bigint | number
    ticket_id?: BigIntWithAggregatesFilter<"ticket_replys"> | bigint | number
    ticket_status_id?: IntWithAggregatesFilter<"ticket_replys"> | number
    pic_user_id?: BigIntWithAggregatesFilter<"ticket_replys"> | bigint | number
    reply_description?: StringNullableWithAggregatesFilter<"ticket_replys"> | string | null
    ticket_attch?: Enumticket_replys_ticket_attchWithAggregatesFilter<"ticket_replys"> | $Enums.ticket_replys_ticket_attch
    created_at?: DateTimeNullableWithAggregatesFilter<"ticket_replys"> | Date | string | null
  }

  export type ticket_statusesWhereInput = {
    AND?: ticket_statusesWhereInput | ticket_statusesWhereInput[]
    OR?: ticket_statusesWhereInput[]
    NOT?: ticket_statusesWhereInput | ticket_statusesWhereInput[]
    ticket_status_id?: IntFilter<"ticket_statuses"> | number
    ticket_name?: StringFilter<"ticket_statuses"> | string
    color?: StringFilter<"ticket_statuses"> | string
    is_default?: BoolFilter<"ticket_statuses"> | boolean
    deleted_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    ticket_replys?: Ticket_replysListRelationFilter
    tickets?: TicketsListRelationFilter
  }

  export type ticket_statusesOrderByWithRelationInput = {
    ticket_status_id?: SortOrder
    ticket_name?: SortOrder
    color?: SortOrder
    is_default?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    ticket_replys?: ticket_replysOrderByRelationAggregateInput
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type ticket_statusesWhereUniqueInput = Prisma.AtLeast<{
    ticket_status_id?: number
    ticket_name?: string
    AND?: ticket_statusesWhereInput | ticket_statusesWhereInput[]
    OR?: ticket_statusesWhereInput[]
    NOT?: ticket_statusesWhereInput | ticket_statusesWhereInput[]
    color?: StringFilter<"ticket_statuses"> | string
    is_default?: BoolFilter<"ticket_statuses"> | boolean
    deleted_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    created_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_statuses"> | Date | string | null
    ticket_replys?: Ticket_replysListRelationFilter
    tickets?: TicketsListRelationFilter
  }, "ticket_status_id" | "ticket_name">

  export type ticket_statusesOrderByWithAggregationInput = {
    ticket_status_id?: SortOrder
    ticket_name?: SortOrder
    color?: SortOrder
    is_default?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ticket_statusesCountOrderByAggregateInput
    _avg?: ticket_statusesAvgOrderByAggregateInput
    _max?: ticket_statusesMaxOrderByAggregateInput
    _min?: ticket_statusesMinOrderByAggregateInput
    _sum?: ticket_statusesSumOrderByAggregateInput
  }

  export type ticket_statusesScalarWhereWithAggregatesInput = {
    AND?: ticket_statusesScalarWhereWithAggregatesInput | ticket_statusesScalarWhereWithAggregatesInput[]
    OR?: ticket_statusesScalarWhereWithAggregatesInput[]
    NOT?: ticket_statusesScalarWhereWithAggregatesInput | ticket_statusesScalarWhereWithAggregatesInput[]
    ticket_status_id?: IntWithAggregatesFilter<"ticket_statuses"> | number
    ticket_name?: StringWithAggregatesFilter<"ticket_statuses"> | string
    color?: StringWithAggregatesFilter<"ticket_statuses"> | string
    is_default?: BoolWithAggregatesFilter<"ticket_statuses"> | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ticket_statuses"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ticket_statuses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ticket_statuses"> | Date | string | null
  }

  export type ticket_typesWhereInput = {
    AND?: ticket_typesWhereInput | ticket_typesWhereInput[]
    OR?: ticket_typesWhereInput[]
    NOT?: ticket_typesWhereInput | ticket_typesWhereInput[]
    ticket_type_id?: IntFilter<"ticket_types"> | number
    ticket_type_name?: StringFilter<"ticket_types"> | string
    created_at?: DateTimeFilter<"ticket_types"> | Date | string
    updated_at?: DateTimeNullableFilter<"ticket_types"> | Date | string | null
    deleted_at?: StringNullableFilter<"ticket_types"> | string | null
    tickets?: TicketsListRelationFilter
  }

  export type ticket_typesOrderByWithRelationInput = {
    ticket_type_id?: SortOrder
    ticket_type_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type ticket_typesWhereUniqueInput = Prisma.AtLeast<{
    ticket_type_id?: number
    ticket_type_name?: string
    AND?: ticket_typesWhereInput | ticket_typesWhereInput[]
    OR?: ticket_typesWhereInput[]
    NOT?: ticket_typesWhereInput | ticket_typesWhereInput[]
    created_at?: DateTimeFilter<"ticket_types"> | Date | string
    updated_at?: DateTimeNullableFilter<"ticket_types"> | Date | string | null
    deleted_at?: StringNullableFilter<"ticket_types"> | string | null
    tickets?: TicketsListRelationFilter
  }, "ticket_type_id" | "ticket_type_name">

  export type ticket_typesOrderByWithAggregationInput = {
    ticket_type_id?: SortOrder
    ticket_type_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ticket_typesCountOrderByAggregateInput
    _avg?: ticket_typesAvgOrderByAggregateInput
    _max?: ticket_typesMaxOrderByAggregateInput
    _min?: ticket_typesMinOrderByAggregateInput
    _sum?: ticket_typesSumOrderByAggregateInput
  }

  export type ticket_typesScalarWhereWithAggregatesInput = {
    AND?: ticket_typesScalarWhereWithAggregatesInput | ticket_typesScalarWhereWithAggregatesInput[]
    OR?: ticket_typesScalarWhereWithAggregatesInput[]
    NOT?: ticket_typesScalarWhereWithAggregatesInput | ticket_typesScalarWhereWithAggregatesInput[]
    ticket_type_id?: IntWithAggregatesFilter<"ticket_types"> | number
    ticket_type_name?: StringWithAggregatesFilter<"ticket_types"> | string
    created_at?: DateTimeWithAggregatesFilter<"ticket_types"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"ticket_types"> | Date | string | null
    deleted_at?: StringNullableWithAggregatesFilter<"ticket_types"> | string | null
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    ticket_id?: BigIntFilter<"tickets"> | bigint | number
    ticket_number?: StringFilter<"tickets"> | string
    ticket_subject?: StringFilter<"tickets"> | string
    ticket_detail?: StringNullableFilter<"tickets"> | string | null
    requestor_name?: StringFilter<"tickets"> | string
    ticket_type_id?: IntFilter<"tickets"> | number
    category_id?: IntFilter<"tickets"> | number
    division_id?: IntFilter<"tickets"> | number
    ticket_priority_id?: IntFilter<"tickets"> | number
    ticket_status_id?: IntFilter<"tickets"> | number
    ticket_attach?: Enumtickets_ticket_attachFilter<"tickets"> | $Enums.tickets_ticket_attach
    ticket_start_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    ticket_end_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    created_user_id?: BigIntFilter<"tickets"> | bigint | number
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    updated_user_id?: BigIntNullableFilter<"tickets"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    ticket_documents?: Ticket_documentsListRelationFilter
    ticket_replys?: Ticket_replysListRelationFilter
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    divisions?: XOR<DivisionsRelationFilter, divisionsWhereInput>
    ticket_priorities?: XOR<Ticket_prioritiesRelationFilter, ticket_prioritiesWhereInput>
    ticket_statuses?: XOR<Ticket_statusesRelationFilter, ticket_statusesWhereInput>
    ticket_types?: XOR<Ticket_typesRelationFilter, ticket_typesWhereInput>
    users_tickets_created_user_idTousers?: XOR<UsersRelationFilter, usersWhereInput>
    users_tickets_updated_user_idTousers?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type ticketsOrderByWithRelationInput = {
    ticket_id?: SortOrder
    ticket_number?: SortOrder
    ticket_subject?: SortOrder
    ticket_detail?: SortOrderInput | SortOrder
    requestor_name?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    ticket_attach?: SortOrder
    ticket_start_date?: SortOrderInput | SortOrder
    ticket_end_date?: SortOrderInput | SortOrder
    created_user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_user_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ticket_documents?: ticket_documentsOrderByRelationAggregateInput
    ticket_replys?: ticket_replysOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    divisions?: divisionsOrderByWithRelationInput
    ticket_priorities?: ticket_prioritiesOrderByWithRelationInput
    ticket_statuses?: ticket_statusesOrderByWithRelationInput
    ticket_types?: ticket_typesOrderByWithRelationInput
    users_tickets_created_user_idTousers?: usersOrderByWithRelationInput
    users_tickets_updated_user_idTousers?: usersOrderByWithRelationInput
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: bigint | number
    ticket_number?: string
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    ticket_subject?: StringFilter<"tickets"> | string
    ticket_detail?: StringNullableFilter<"tickets"> | string | null
    requestor_name?: StringFilter<"tickets"> | string
    ticket_type_id?: IntFilter<"tickets"> | number
    category_id?: IntFilter<"tickets"> | number
    division_id?: IntFilter<"tickets"> | number
    ticket_priority_id?: IntFilter<"tickets"> | number
    ticket_status_id?: IntFilter<"tickets"> | number
    ticket_attach?: Enumtickets_ticket_attachFilter<"tickets"> | $Enums.tickets_ticket_attach
    ticket_start_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    ticket_end_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    created_user_id?: BigIntFilter<"tickets"> | bigint | number
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    updated_user_id?: BigIntNullableFilter<"tickets"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    ticket_documents?: Ticket_documentsListRelationFilter
    ticket_replys?: Ticket_replysListRelationFilter
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    divisions?: XOR<DivisionsRelationFilter, divisionsWhereInput>
    ticket_priorities?: XOR<Ticket_prioritiesRelationFilter, ticket_prioritiesWhereInput>
    ticket_statuses?: XOR<Ticket_statusesRelationFilter, ticket_statusesWhereInput>
    ticket_types?: XOR<Ticket_typesRelationFilter, ticket_typesWhereInput>
    users_tickets_created_user_idTousers?: XOR<UsersRelationFilter, usersWhereInput>
    users_tickets_updated_user_idTousers?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "ticket_id" | "ticket_number">

  export type ticketsOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    ticket_number?: SortOrder
    ticket_subject?: SortOrder
    ticket_detail?: SortOrderInput | SortOrder
    requestor_name?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    ticket_attach?: SortOrder
    ticket_start_date?: SortOrderInput | SortOrder
    ticket_end_date?: SortOrderInput | SortOrder
    created_user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_user_id?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    ticket_id?: BigIntWithAggregatesFilter<"tickets"> | bigint | number
    ticket_number?: StringWithAggregatesFilter<"tickets"> | string
    ticket_subject?: StringWithAggregatesFilter<"tickets"> | string
    ticket_detail?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    requestor_name?: StringWithAggregatesFilter<"tickets"> | string
    ticket_type_id?: IntWithAggregatesFilter<"tickets"> | number
    category_id?: IntWithAggregatesFilter<"tickets"> | number
    division_id?: IntWithAggregatesFilter<"tickets"> | number
    ticket_priority_id?: IntWithAggregatesFilter<"tickets"> | number
    ticket_status_id?: IntWithAggregatesFilter<"tickets"> | number
    ticket_attach?: Enumtickets_ticket_attachWithAggregatesFilter<"tickets"> | $Enums.tickets_ticket_attach
    ticket_start_date?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    ticket_end_date?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    created_user_id?: BigIntWithAggregatesFilter<"tickets"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    updated_user_id?: BigIntNullableWithAggregatesFilter<"tickets"> | bigint | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"tickets"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: BigIntFilter<"users"> | bigint | number
    user_name?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    is_active?: BoolFilter<"users"> | boolean
    verify_token?: StringNullableFilter<"users"> | string | null
    login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    logout_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    ticket_replys?: Ticket_replysListRelationFilter
    tickets_tickets_created_user_idTousers?: TicketsListRelationFilter
    tickets_tickets_updated_user_idTousers?: TicketsListRelationFilter
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    verify_token?: SortOrderInput | SortOrder
    login_at?: SortOrderInput | SortOrder
    logout_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    ticket_replys?: ticket_replysOrderByRelationAggregateInput
    tickets_tickets_created_user_idTousers?: ticketsOrderByRelationAggregateInput
    tickets_tickets_updated_user_idTousers?: ticketsOrderByRelationAggregateInput
    roles?: rolesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number
    user_name?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    is_active?: BoolFilter<"users"> | boolean
    verify_token?: StringNullableFilter<"users"> | string | null
    login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    logout_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    ticket_replys?: Ticket_replysListRelationFilter
    tickets_tickets_created_user_idTousers?: TicketsListRelationFilter
    tickets_tickets_updated_user_idTousers?: TicketsListRelationFilter
    roles?: XOR<RolesRelationFilter, rolesWhereInput>
  }, "user_id" | "user_name">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    verify_token?: SortOrderInput | SortOrder
    login_at?: SortOrderInput | SortOrder
    logout_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    user_name?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntWithAggregatesFilter<"users"> | number
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    verify_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    login_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    logout_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type categoriesCreateInput = {
    category_name: string
    color: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon?: string | null
    tickets?: ticketsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: number
    category_name: string
    color: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon?: string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: number
    category_name: string
    color: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type divisionsCreateInput = {
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    tickets?: ticketsCreateNestedManyWithoutDivisionsInput
  }

  export type divisionsUncheckedCreateInput = {
    division_id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutDivisionsInput
  }

  export type divisionsUpdateInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUpdateManyWithoutDivisionsNestedInput
  }

  export type divisionsUncheckedUpdateInput = {
    division_id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutDivisionsNestedInput
  }

  export type divisionsCreateManyInput = {
    division_id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type divisionsUpdateManyMutationInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type divisionsUncheckedUpdateManyInput = {
    division_id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesCreateInput = {
    role_name: string
    permissions?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    role_id?: number
    role_name: string
    permissions?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    role_id?: number
    role_name: string
    permissions?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsCreateInput = {
    ticket_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tickets: ticketsCreateNestedOneWithoutTicket_documentsInput
  }

  export type ticket_documentsUncheckedCreateInput = {
    ticket_document_id?: bigint | number
    ticket_id: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_documentsUpdateInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUpdateOneRequiredWithoutTicket_documentsNestedInput
  }

  export type ticket_documentsUncheckedUpdateInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsCreateManyInput = {
    ticket_document_id?: bigint | number
    ticket_id: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_documentsUpdateManyMutationInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsUncheckedUpdateManyInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_prioritiesCreateInput = {
    ticket_priority_name: string
    color?: string | null
    icon?: string | null
    is_default?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    tickets?: ticketsCreateNestedManyWithoutTicket_prioritiesInput
  }

  export type ticket_prioritiesUncheckedCreateInput = {
    ticket_priority_id?: number
    ticket_priority_name: string
    color?: string | null
    icon?: string | null
    is_default?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutTicket_prioritiesInput
  }

  export type ticket_prioritiesUpdateInput = {
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUpdateManyWithoutTicket_prioritiesNestedInput
  }

  export type ticket_prioritiesUncheckedUpdateInput = {
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutTicket_prioritiesNestedInput
  }

  export type ticket_prioritiesCreateManyInput = {
    ticket_priority_id?: number
    ticket_priority_name: string
    color?: string | null
    icon?: string | null
    is_default?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticket_prioritiesUpdateManyMutationInput = {
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_prioritiesUncheckedUpdateManyInput = {
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsCreateInput = {
    ticket_reply_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ticket_replys: ticket_replysCreateNestedOneWithoutTicket_reply_documentsInput
  }

  export type ticket_reply_documentsUncheckedCreateInput = {
    ticket_reply_document_id?: bigint | number
    ticket_reply_id: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_reply_documentsUpdateInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateOneRequiredWithoutTicket_reply_documentsNestedInput
  }

  export type ticket_reply_documentsUncheckedUpdateInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsCreateManyInput = {
    ticket_reply_document_id?: bigint | number
    ticket_reply_id: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_reply_documentsUpdateManyMutationInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsUncheckedUpdateManyInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_replysCreateInput = {
    ticket_reply_id?: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicket_replysInput
    tickets: ticketsCreateNestedOneWithoutTicket_replysInput
    users: usersCreateNestedOneWithoutTicket_replysInput
    ticket_reply_documents?: ticket_reply_documentsCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysUncheckedCreateInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    ticket_status_id: number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysUpdateInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicket_replysNestedInput
    tickets?: ticketsUpdateOneRequiredWithoutTicket_replysNestedInput
    users?: usersUpdateOneRequiredWithoutTicket_replysNestedInput
    ticket_reply_documents?: ticket_reply_documentsUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysCreateManyInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    ticket_status_id: number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
  }

  export type ticket_replysUpdateManyMutationInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_replysUncheckedUpdateManyInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_statusesCreateInput = {
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicket_statusesInput
    tickets?: ticketsCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesUncheckedCreateInput = {
    ticket_status_id?: number
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicket_statusesInput
    tickets?: ticketsUncheckedCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesUpdateInput = {
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutTicket_statusesNestedInput
    tickets?: ticketsUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticket_statusesUncheckedUpdateInput = {
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicket_statusesNestedInput
    tickets?: ticketsUncheckedUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticket_statusesCreateManyInput = {
    ticket_status_id?: number
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_statusesUpdateManyMutationInput = {
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_statusesUncheckedUpdateManyInput = {
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_typesCreateInput = {
    ticket_type_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: string | null
    tickets?: ticketsCreateNestedManyWithoutTicket_typesInput
  }

  export type ticket_typesUncheckedCreateInput = {
    ticket_type_id?: number
    ticket_type_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutTicket_typesInput
  }

  export type ticket_typesUpdateInput = {
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketsUpdateManyWithoutTicket_typesNestedInput
  }

  export type ticket_typesUncheckedUpdateInput = {
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutTicket_typesNestedInput
  }

  export type ticket_typesCreateManyInput = {
    ticket_type_id?: number
    ticket_type_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: string | null
  }

  export type ticket_typesUpdateManyMutationInput = {
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticket_typesUncheckedUpdateManyInput = {
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketsCreateInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsUpdateInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsCreateManyInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateManyMutationInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUncheckedUpdateManyInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
  }

  export type usersUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TicketsListRelationFilter = {
    every?: ticketsWhereInput
    some?: ticketsWhereInput
    none?: ticketsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    icon?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type divisionsCountOrderByAggregateInput = {
    division_id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type divisionsAvgOrderByAggregateInput = {
    division_id?: SortOrder
  }

  export type divisionsMaxOrderByAggregateInput = {
    division_id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type divisionsMinOrderByAggregateInput = {
    division_id?: SortOrder
    division_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type divisionsSumOrderByAggregateInput = {
    division_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    permissions?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    permissions?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    permissions?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TicketsRelationFilter = {
    is?: ticketsWhereInput
    isNot?: ticketsWhereInput
  }

  export type ticket_documentsCountOrderByAggregateInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_documentsAvgOrderByAggregateInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_size?: SortOrder
  }

  export type ticket_documentsMaxOrderByAggregateInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_documentsMinOrderByAggregateInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_documentsSumOrderByAggregateInput = {
    ticket_document_id?: SortOrder
    ticket_id?: SortOrder
    file_size?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ticket_prioritiesCountOrderByAggregateInput = {
    ticket_priority_id?: SortOrder
    ticket_priority_name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_prioritiesAvgOrderByAggregateInput = {
    ticket_priority_id?: SortOrder
  }

  export type ticket_prioritiesMaxOrderByAggregateInput = {
    ticket_priority_id?: SortOrder
    ticket_priority_name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_prioritiesMinOrderByAggregateInput = {
    ticket_priority_id?: SortOrder
    ticket_priority_name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_prioritiesSumOrderByAggregateInput = {
    ticket_priority_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Ticket_replysRelationFilter = {
    is?: ticket_replysWhereInput
    isNot?: ticket_replysWhereInput
  }

  export type ticket_reply_documentsCountOrderByAggregateInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_reply_documentsAvgOrderByAggregateInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_size?: SortOrder
  }

  export type ticket_reply_documentsMaxOrderByAggregateInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_reply_documentsMinOrderByAggregateInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_name?: SortOrder
    file_path?: SortOrder
    file_size?: SortOrder
    file_extension?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_reply_documentsSumOrderByAggregateInput = {
    ticket_reply_document_id?: SortOrder
    ticket_reply_id?: SortOrder
    file_size?: SortOrder
  }

  export type Enumticket_replys_ticket_attchFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_replys_ticket_attch | Enumticket_replys_ticket_attchFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_replys_ticket_attch[]
    notIn?: $Enums.ticket_replys_ticket_attch[]
    not?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel> | $Enums.ticket_replys_ticket_attch
  }

  export type Ticket_statusesRelationFilter = {
    is?: ticket_statusesWhereInput
    isNot?: ticket_statusesWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Ticket_reply_documentsListRelationFilter = {
    every?: ticket_reply_documentsWhereInput
    some?: ticket_reply_documentsWhereInput
    none?: ticket_reply_documentsWhereInput
  }

  export type ticket_reply_documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticket_replysCountOrderByAggregateInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
    reply_description?: SortOrder
    ticket_attch?: SortOrder
    created_at?: SortOrder
  }

  export type ticket_replysAvgOrderByAggregateInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
  }

  export type ticket_replysMaxOrderByAggregateInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
    reply_description?: SortOrder
    ticket_attch?: SortOrder
    created_at?: SortOrder
  }

  export type ticket_replysMinOrderByAggregateInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
    reply_description?: SortOrder
    ticket_attch?: SortOrder
    created_at?: SortOrder
  }

  export type ticket_replysSumOrderByAggregateInput = {
    ticket_reply_id?: SortOrder
    ticket_id?: SortOrder
    ticket_status_id?: SortOrder
    pic_user_id?: SortOrder
  }

  export type Enumticket_replys_ticket_attchWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_replys_ticket_attch | Enumticket_replys_ticket_attchFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_replys_ticket_attch[]
    notIn?: $Enums.ticket_replys_ticket_attch[]
    not?: NestedEnumticket_replys_ticket_attchWithAggregatesFilter<$PrismaModel> | $Enums.ticket_replys_ticket_attch
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel>
    _max?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Ticket_replysListRelationFilter = {
    every?: ticket_replysWhereInput
    some?: ticket_replysWhereInput
    none?: ticket_replysWhereInput
  }

  export type ticket_replysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticket_statusesCountOrderByAggregateInput = {
    ticket_status_id?: SortOrder
    ticket_name?: SortOrder
    color?: SortOrder
    is_default?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_statusesAvgOrderByAggregateInput = {
    ticket_status_id?: SortOrder
  }

  export type ticket_statusesMaxOrderByAggregateInput = {
    ticket_status_id?: SortOrder
    ticket_name?: SortOrder
    color?: SortOrder
    is_default?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_statusesMinOrderByAggregateInput = {
    ticket_status_id?: SortOrder
    ticket_name?: SortOrder
    color?: SortOrder
    is_default?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ticket_statusesSumOrderByAggregateInput = {
    ticket_status_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ticket_typesCountOrderByAggregateInput = {
    ticket_type_id?: SortOrder
    ticket_type_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_typesAvgOrderByAggregateInput = {
    ticket_type_id?: SortOrder
  }

  export type ticket_typesMaxOrderByAggregateInput = {
    ticket_type_id?: SortOrder
    ticket_type_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_typesMinOrderByAggregateInput = {
    ticket_type_id?: SortOrder
    ticket_type_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticket_typesSumOrderByAggregateInput = {
    ticket_type_id?: SortOrder
  }

  export type Enumtickets_ticket_attachFilter<$PrismaModel = never> = {
    equals?: $Enums.tickets_ticket_attach | Enumtickets_ticket_attachFieldRefInput<$PrismaModel>
    in?: $Enums.tickets_ticket_attach[]
    notIn?: $Enums.tickets_ticket_attach[]
    not?: NestedEnumtickets_ticket_attachFilter<$PrismaModel> | $Enums.tickets_ticket_attach
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Ticket_documentsListRelationFilter = {
    every?: ticket_documentsWhereInput
    some?: ticket_documentsWhereInput
    none?: ticket_documentsWhereInput
  }

  export type CategoriesRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type DivisionsRelationFilter = {
    is?: divisionsWhereInput
    isNot?: divisionsWhereInput
  }

  export type Ticket_prioritiesRelationFilter = {
    is?: ticket_prioritiesWhereInput
    isNot?: ticket_prioritiesWhereInput
  }

  export type Ticket_typesRelationFilter = {
    is?: ticket_typesWhereInput
    isNot?: ticket_typesWhereInput
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ticket_documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketsCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    ticket_number?: SortOrder
    ticket_subject?: SortOrder
    ticket_detail?: SortOrder
    requestor_name?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    ticket_attach?: SortOrder
    ticket_start_date?: SortOrder
    ticket_end_date?: SortOrder
    created_user_id?: SortOrder
    created_at?: SortOrder
    updated_user_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    ticket_id?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    created_user_id?: SortOrder
    updated_user_id?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    ticket_number?: SortOrder
    ticket_subject?: SortOrder
    ticket_detail?: SortOrder
    requestor_name?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    ticket_attach?: SortOrder
    ticket_start_date?: SortOrder
    ticket_end_date?: SortOrder
    created_user_id?: SortOrder
    created_at?: SortOrder
    updated_user_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    ticket_number?: SortOrder
    ticket_subject?: SortOrder
    ticket_detail?: SortOrder
    requestor_name?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    ticket_attach?: SortOrder
    ticket_start_date?: SortOrder
    ticket_end_date?: SortOrder
    created_user_id?: SortOrder
    created_at?: SortOrder
    updated_user_id?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    ticket_id?: SortOrder
    ticket_type_id?: SortOrder
    category_id?: SortOrder
    division_id?: SortOrder
    ticket_priority_id?: SortOrder
    ticket_status_id?: SortOrder
    created_user_id?: SortOrder
    updated_user_id?: SortOrder
  }

  export type Enumtickets_ticket_attachWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tickets_ticket_attach | Enumtickets_ticket_attachFieldRefInput<$PrismaModel>
    in?: $Enums.tickets_ticket_attach[]
    notIn?: $Enums.tickets_ticket_attach[]
    not?: NestedEnumtickets_ticket_attachWithAggregatesFilter<$PrismaModel> | $Enums.tickets_ticket_attach
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtickets_ticket_attachFilter<$PrismaModel>
    _max?: NestedEnumtickets_ticket_attachFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type RolesRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    verify_token?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    verify_token?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    verify_token?: SortOrder
    login_at?: SortOrder
    logout_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type ticketsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput> | ticketsCreateWithoutCategoriesInput[] | ticketsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutCategoriesInput | ticketsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ticketsCreateManyCategoriesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput> | ticketsCreateWithoutCategoriesInput[] | ticketsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutCategoriesInput | ticketsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ticketsCreateManyCategoriesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ticketsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput> | ticketsCreateWithoutCategoriesInput[] | ticketsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutCategoriesInput | ticketsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutCategoriesInput | ticketsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ticketsCreateManyCategoriesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutCategoriesInput | ticketsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutCategoriesInput | ticketsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ticketsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput> | ticketsCreateWithoutCategoriesInput[] | ticketsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutCategoriesInput | ticketsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutCategoriesInput | ticketsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ticketsCreateManyCategoriesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutCategoriesInput | ticketsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutCategoriesInput | ticketsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsCreateNestedManyWithoutDivisionsInput = {
    create?: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput> | ticketsCreateWithoutDivisionsInput[] | ticketsUncheckedCreateWithoutDivisionsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutDivisionsInput | ticketsCreateOrConnectWithoutDivisionsInput[]
    createMany?: ticketsCreateManyDivisionsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutDivisionsInput = {
    create?: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput> | ticketsCreateWithoutDivisionsInput[] | ticketsUncheckedCreateWithoutDivisionsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutDivisionsInput | ticketsCreateOrConnectWithoutDivisionsInput[]
    createMany?: ticketsCreateManyDivisionsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ticketsUpdateManyWithoutDivisionsNestedInput = {
    create?: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput> | ticketsCreateWithoutDivisionsInput[] | ticketsUncheckedCreateWithoutDivisionsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutDivisionsInput | ticketsCreateOrConnectWithoutDivisionsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutDivisionsInput | ticketsUpsertWithWhereUniqueWithoutDivisionsInput[]
    createMany?: ticketsCreateManyDivisionsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutDivisionsInput | ticketsUpdateWithWhereUniqueWithoutDivisionsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutDivisionsInput | ticketsUpdateManyWithWhereWithoutDivisionsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutDivisionsNestedInput = {
    create?: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput> | ticketsCreateWithoutDivisionsInput[] | ticketsUncheckedCreateWithoutDivisionsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutDivisionsInput | ticketsCreateOrConnectWithoutDivisionsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutDivisionsInput | ticketsUpsertWithWhereUniqueWithoutDivisionsInput[]
    createMany?: ticketsCreateManyDivisionsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutDivisionsInput | ticketsUpdateWithWhereUniqueWithoutDivisionsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutDivisionsInput | ticketsUpdateManyWithWhereWithoutDivisionsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ticketsCreateNestedOneWithoutTicket_documentsInput = {
    create?: XOR<ticketsCreateWithoutTicket_documentsInput, ticketsUncheckedCreateWithoutTicket_documentsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_documentsInput
    connect?: ticketsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ticketsUpdateOneRequiredWithoutTicket_documentsNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_documentsInput, ticketsUncheckedCreateWithoutTicket_documentsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_documentsInput
    upsert?: ticketsUpsertWithoutTicket_documentsInput
    connect?: ticketsWhereUniqueInput
    update?: XOR<XOR<ticketsUpdateToOneWithWhereWithoutTicket_documentsInput, ticketsUpdateWithoutTicket_documentsInput>, ticketsUncheckedUpdateWithoutTicket_documentsInput>
  }

  export type ticketsCreateNestedManyWithoutTicket_prioritiesInput = {
    create?: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput> | ticketsCreateWithoutTicket_prioritiesInput[] | ticketsUncheckedCreateWithoutTicket_prioritiesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_prioritiesInput | ticketsCreateOrConnectWithoutTicket_prioritiesInput[]
    createMany?: ticketsCreateManyTicket_prioritiesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutTicket_prioritiesInput = {
    create?: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput> | ticketsCreateWithoutTicket_prioritiesInput[] | ticketsUncheckedCreateWithoutTicket_prioritiesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_prioritiesInput | ticketsCreateOrConnectWithoutTicket_prioritiesInput[]
    createMany?: ticketsCreateManyTicket_prioritiesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ticketsUpdateManyWithoutTicket_prioritiesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput> | ticketsCreateWithoutTicket_prioritiesInput[] | ticketsUncheckedCreateWithoutTicket_prioritiesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_prioritiesInput | ticketsCreateOrConnectWithoutTicket_prioritiesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_prioritiesInput | ticketsUpsertWithWhereUniqueWithoutTicket_prioritiesInput[]
    createMany?: ticketsCreateManyTicket_prioritiesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_prioritiesInput | ticketsUpdateWithWhereUniqueWithoutTicket_prioritiesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_prioritiesInput | ticketsUpdateManyWithWhereWithoutTicket_prioritiesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_prioritiesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput> | ticketsCreateWithoutTicket_prioritiesInput[] | ticketsUncheckedCreateWithoutTicket_prioritiesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_prioritiesInput | ticketsCreateOrConnectWithoutTicket_prioritiesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_prioritiesInput | ticketsUpsertWithWhereUniqueWithoutTicket_prioritiesInput[]
    createMany?: ticketsCreateManyTicket_prioritiesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_prioritiesInput | ticketsUpdateWithWhereUniqueWithoutTicket_prioritiesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_prioritiesInput | ticketsUpdateManyWithWhereWithoutTicket_prioritiesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticket_replysCreateNestedOneWithoutTicket_reply_documentsInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_reply_documentsInput, ticket_replysUncheckedCreateWithoutTicket_reply_documentsInput>
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_reply_documentsInput
    connect?: ticket_replysWhereUniqueInput
  }

  export type ticket_replysUpdateOneRequiredWithoutTicket_reply_documentsNestedInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_reply_documentsInput, ticket_replysUncheckedCreateWithoutTicket_reply_documentsInput>
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_reply_documentsInput
    upsert?: ticket_replysUpsertWithoutTicket_reply_documentsInput
    connect?: ticket_replysWhereUniqueInput
    update?: XOR<XOR<ticket_replysUpdateToOneWithWhereWithoutTicket_reply_documentsInput, ticket_replysUpdateWithoutTicket_reply_documentsInput>, ticket_replysUncheckedUpdateWithoutTicket_reply_documentsInput>
  }

  export type ticket_statusesCreateNestedOneWithoutTicket_replysInput = {
    create?: XOR<ticket_statusesCreateWithoutTicket_replysInput, ticket_statusesUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: ticket_statusesCreateOrConnectWithoutTicket_replysInput
    connect?: ticket_statusesWhereUniqueInput
  }

  export type ticketsCreateNestedOneWithoutTicket_replysInput = {
    create?: XOR<ticketsCreateWithoutTicket_replysInput, ticketsUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_replysInput
    connect?: ticketsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTicket_replysInput = {
    create?: XOR<usersCreateWithoutTicket_replysInput, usersUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicket_replysInput
    connect?: usersWhereUniqueInput
  }

  export type ticket_reply_documentsCreateNestedManyWithoutTicket_replysInput = {
    create?: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput> | ticket_reply_documentsCreateWithoutTicket_replysInput[] | ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput[]
    connectOrCreate?: ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput | ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput[]
    createMany?: ticket_reply_documentsCreateManyTicket_replysInputEnvelope
    connect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
  }

  export type ticket_reply_documentsUncheckedCreateNestedManyWithoutTicket_replysInput = {
    create?: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput> | ticket_reply_documentsCreateWithoutTicket_replysInput[] | ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput[]
    connectOrCreate?: ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput | ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput[]
    createMany?: ticket_reply_documentsCreateManyTicket_replysInputEnvelope
    connect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
  }

  export type Enumticket_replys_ticket_attchFieldUpdateOperationsInput = {
    set?: $Enums.ticket_replys_ticket_attch
  }

  export type ticket_statusesUpdateOneRequiredWithoutTicket_replysNestedInput = {
    create?: XOR<ticket_statusesCreateWithoutTicket_replysInput, ticket_statusesUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: ticket_statusesCreateOrConnectWithoutTicket_replysInput
    upsert?: ticket_statusesUpsertWithoutTicket_replysInput
    connect?: ticket_statusesWhereUniqueInput
    update?: XOR<XOR<ticket_statusesUpdateToOneWithWhereWithoutTicket_replysInput, ticket_statusesUpdateWithoutTicket_replysInput>, ticket_statusesUncheckedUpdateWithoutTicket_replysInput>
  }

  export type ticketsUpdateOneRequiredWithoutTicket_replysNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_replysInput, ticketsUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_replysInput
    upsert?: ticketsUpsertWithoutTicket_replysInput
    connect?: ticketsWhereUniqueInput
    update?: XOR<XOR<ticketsUpdateToOneWithWhereWithoutTicket_replysInput, ticketsUpdateWithoutTicket_replysInput>, ticketsUncheckedUpdateWithoutTicket_replysInput>
  }

  export type usersUpdateOneRequiredWithoutTicket_replysNestedInput = {
    create?: XOR<usersCreateWithoutTicket_replysInput, usersUncheckedCreateWithoutTicket_replysInput>
    connectOrCreate?: usersCreateOrConnectWithoutTicket_replysInput
    upsert?: usersUpsertWithoutTicket_replysInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTicket_replysInput, usersUpdateWithoutTicket_replysInput>, usersUncheckedUpdateWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsUpdateManyWithoutTicket_replysNestedInput = {
    create?: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput> | ticket_reply_documentsCreateWithoutTicket_replysInput[] | ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput[]
    connectOrCreate?: ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput | ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput[]
    upsert?: ticket_reply_documentsUpsertWithWhereUniqueWithoutTicket_replysInput | ticket_reply_documentsUpsertWithWhereUniqueWithoutTicket_replysInput[]
    createMany?: ticket_reply_documentsCreateManyTicket_replysInputEnvelope
    set?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    disconnect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    delete?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    connect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    update?: ticket_reply_documentsUpdateWithWhereUniqueWithoutTicket_replysInput | ticket_reply_documentsUpdateWithWhereUniqueWithoutTicket_replysInput[]
    updateMany?: ticket_reply_documentsUpdateManyWithWhereWithoutTicket_replysInput | ticket_reply_documentsUpdateManyWithWhereWithoutTicket_replysInput[]
    deleteMany?: ticket_reply_documentsScalarWhereInput | ticket_reply_documentsScalarWhereInput[]
  }

  export type ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysNestedInput = {
    create?: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput> | ticket_reply_documentsCreateWithoutTicket_replysInput[] | ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput[]
    connectOrCreate?: ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput | ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput[]
    upsert?: ticket_reply_documentsUpsertWithWhereUniqueWithoutTicket_replysInput | ticket_reply_documentsUpsertWithWhereUniqueWithoutTicket_replysInput[]
    createMany?: ticket_reply_documentsCreateManyTicket_replysInputEnvelope
    set?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    disconnect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    delete?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    connect?: ticket_reply_documentsWhereUniqueInput | ticket_reply_documentsWhereUniqueInput[]
    update?: ticket_reply_documentsUpdateWithWhereUniqueWithoutTicket_replysInput | ticket_reply_documentsUpdateWithWhereUniqueWithoutTicket_replysInput[]
    updateMany?: ticket_reply_documentsUpdateManyWithWhereWithoutTicket_replysInput | ticket_reply_documentsUpdateManyWithWhereWithoutTicket_replysInput[]
    deleteMany?: ticket_reply_documentsScalarWhereInput | ticket_reply_documentsScalarWhereInput[]
  }

  export type ticket_replysCreateNestedManyWithoutTicket_statusesInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput> | ticket_replysCreateWithoutTicket_statusesInput[] | ticket_replysUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_statusesInput | ticket_replysCreateOrConnectWithoutTicket_statusesInput[]
    createMany?: ticket_replysCreateManyTicket_statusesInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type ticketsCreateNestedManyWithoutTicket_statusesInput = {
    create?: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput> | ticketsCreateWithoutTicket_statusesInput[] | ticketsUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_statusesInput | ticketsCreateOrConnectWithoutTicket_statusesInput[]
    createMany?: ticketsCreateManyTicket_statusesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticket_replysUncheckedCreateNestedManyWithoutTicket_statusesInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput> | ticket_replysCreateWithoutTicket_statusesInput[] | ticket_replysUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_statusesInput | ticket_replysCreateOrConnectWithoutTicket_statusesInput[]
    createMany?: ticket_replysCreateManyTicket_statusesInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutTicket_statusesInput = {
    create?: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput> | ticketsCreateWithoutTicket_statusesInput[] | ticketsUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_statusesInput | ticketsCreateOrConnectWithoutTicket_statusesInput[]
    createMany?: ticketsCreateManyTicket_statusesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ticket_replysUpdateManyWithoutTicket_statusesNestedInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput> | ticket_replysCreateWithoutTicket_statusesInput[] | ticket_replysUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_statusesInput | ticket_replysCreateOrConnectWithoutTicket_statusesInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutTicket_statusesInput | ticket_replysUpsertWithWhereUniqueWithoutTicket_statusesInput[]
    createMany?: ticket_replysCreateManyTicket_statusesInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutTicket_statusesInput | ticket_replysUpdateWithWhereUniqueWithoutTicket_statusesInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutTicket_statusesInput | ticket_replysUpdateManyWithWhereWithoutTicket_statusesInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type ticketsUpdateManyWithoutTicket_statusesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput> | ticketsCreateWithoutTicket_statusesInput[] | ticketsUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_statusesInput | ticketsCreateOrConnectWithoutTicket_statusesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_statusesInput | ticketsUpsertWithWhereUniqueWithoutTicket_statusesInput[]
    createMany?: ticketsCreateManyTicket_statusesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_statusesInput | ticketsUpdateWithWhereUniqueWithoutTicket_statusesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_statusesInput | ticketsUpdateManyWithWhereWithoutTicket_statusesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticket_replysUncheckedUpdateManyWithoutTicket_statusesNestedInput = {
    create?: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput> | ticket_replysCreateWithoutTicket_statusesInput[] | ticket_replysUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicket_statusesInput | ticket_replysCreateOrConnectWithoutTicket_statusesInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutTicket_statusesInput | ticket_replysUpsertWithWhereUniqueWithoutTicket_statusesInput[]
    createMany?: ticket_replysCreateManyTicket_statusesInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutTicket_statusesInput | ticket_replysUpdateWithWhereUniqueWithoutTicket_statusesInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutTicket_statusesInput | ticket_replysUpdateManyWithWhereWithoutTicket_statusesInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_statusesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput> | ticketsCreateWithoutTicket_statusesInput[] | ticketsUncheckedCreateWithoutTicket_statusesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_statusesInput | ticketsCreateOrConnectWithoutTicket_statusesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_statusesInput | ticketsUpsertWithWhereUniqueWithoutTicket_statusesInput[]
    createMany?: ticketsCreateManyTicket_statusesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_statusesInput | ticketsUpdateWithWhereUniqueWithoutTicket_statusesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_statusesInput | ticketsUpdateManyWithWhereWithoutTicket_statusesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput> | ticketsCreateWithoutTicket_typesInput[] | ticketsUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_typesInput | ticketsCreateOrConnectWithoutTicket_typesInput[]
    createMany?: ticketsCreateManyTicket_typesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutTicket_typesInput = {
    create?: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput> | ticketsCreateWithoutTicket_typesInput[] | ticketsUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_typesInput | ticketsCreateOrConnectWithoutTicket_typesInput[]
    createMany?: ticketsCreateManyTicket_typesInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput> | ticketsCreateWithoutTicket_typesInput[] | ticketsUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_typesInput | ticketsCreateOrConnectWithoutTicket_typesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_typesInput | ticketsUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: ticketsCreateManyTicket_typesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_typesInput | ticketsUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_typesInput | ticketsUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_typesNestedInput = {
    create?: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput> | ticketsCreateWithoutTicket_typesInput[] | ticketsUncheckedCreateWithoutTicket_typesInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutTicket_typesInput | ticketsCreateOrConnectWithoutTicket_typesInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutTicket_typesInput | ticketsUpsertWithWhereUniqueWithoutTicket_typesInput[]
    createMany?: ticketsCreateManyTicket_typesInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutTicket_typesInput | ticketsUpdateWithWhereUniqueWithoutTicket_typesInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutTicket_typesInput | ticketsUpdateManyWithWhereWithoutTicket_typesInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticket_documentsCreateNestedManyWithoutTicketsInput = {
    create?: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput> | ticket_documentsCreateWithoutTicketsInput[] | ticket_documentsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_documentsCreateOrConnectWithoutTicketsInput | ticket_documentsCreateOrConnectWithoutTicketsInput[]
    createMany?: ticket_documentsCreateManyTicketsInputEnvelope
    connect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
  }

  export type ticket_replysCreateNestedManyWithoutTicketsInput = {
    create?: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput> | ticket_replysCreateWithoutTicketsInput[] | ticket_replysUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicketsInput | ticket_replysCreateOrConnectWithoutTicketsInput[]
    createMany?: ticket_replysCreateManyTicketsInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutTicketsInput = {
    create?: XOR<categoriesCreateWithoutTicketsInput, categoriesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTicketsInput
    connect?: categoriesWhereUniqueInput
  }

  export type divisionsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<divisionsCreateWithoutTicketsInput, divisionsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: divisionsCreateOrConnectWithoutTicketsInput
    connect?: divisionsWhereUniqueInput
  }

  export type ticket_prioritiesCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ticket_prioritiesCreateWithoutTicketsInput, ticket_prioritiesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_prioritiesCreateOrConnectWithoutTicketsInput
    connect?: ticket_prioritiesWhereUniqueInput
  }

  export type ticket_statusesCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ticket_statusesCreateWithoutTicketsInput, ticket_statusesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_statusesCreateOrConnectWithoutTicketsInput
    connect?: ticket_statusesWhereUniqueInput
  }

  export type ticket_typesCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ticket_typesCreateWithoutTicketsInput, ticket_typesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_typesCreateOrConnectWithoutTicketsInput
    connect?: ticket_typesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput = {
    create?: XOR<usersCreateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_created_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTickets_tickets_created_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput = {
    create?: XOR<usersCreateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_updated_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTickets_tickets_updated_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput> | ticket_documentsCreateWithoutTicketsInput[] | ticket_documentsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_documentsCreateOrConnectWithoutTicketsInput | ticket_documentsCreateOrConnectWithoutTicketsInput[]
    createMany?: ticket_documentsCreateManyTicketsInputEnvelope
    connect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
  }

  export type ticket_replysUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput> | ticket_replysCreateWithoutTicketsInput[] | ticket_replysUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicketsInput | ticket_replysCreateOrConnectWithoutTicketsInput[]
    createMany?: ticket_replysCreateManyTicketsInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type Enumtickets_ticket_attachFieldUpdateOperationsInput = {
    set?: $Enums.tickets_ticket_attach
  }

  export type ticket_documentsUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput> | ticket_documentsCreateWithoutTicketsInput[] | ticket_documentsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_documentsCreateOrConnectWithoutTicketsInput | ticket_documentsCreateOrConnectWithoutTicketsInput[]
    upsert?: ticket_documentsUpsertWithWhereUniqueWithoutTicketsInput | ticket_documentsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: ticket_documentsCreateManyTicketsInputEnvelope
    set?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    disconnect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    delete?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    connect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    update?: ticket_documentsUpdateWithWhereUniqueWithoutTicketsInput | ticket_documentsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: ticket_documentsUpdateManyWithWhereWithoutTicketsInput | ticket_documentsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: ticket_documentsScalarWhereInput | ticket_documentsScalarWhereInput[]
  }

  export type ticket_replysUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput> | ticket_replysCreateWithoutTicketsInput[] | ticket_replysUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicketsInput | ticket_replysCreateOrConnectWithoutTicketsInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutTicketsInput | ticket_replysUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: ticket_replysCreateManyTicketsInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutTicketsInput | ticket_replysUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutTicketsInput | ticket_replysUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<categoriesCreateWithoutTicketsInput, categoriesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutTicketsInput
    upsert?: categoriesUpsertWithoutTicketsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutTicketsInput, categoriesUpdateWithoutTicketsInput>, categoriesUncheckedUpdateWithoutTicketsInput>
  }

  export type divisionsUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<divisionsCreateWithoutTicketsInput, divisionsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: divisionsCreateOrConnectWithoutTicketsInput
    upsert?: divisionsUpsertWithoutTicketsInput
    connect?: divisionsWhereUniqueInput
    update?: XOR<XOR<divisionsUpdateToOneWithWhereWithoutTicketsInput, divisionsUpdateWithoutTicketsInput>, divisionsUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ticket_prioritiesCreateWithoutTicketsInput, ticket_prioritiesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_prioritiesCreateOrConnectWithoutTicketsInput
    upsert?: ticket_prioritiesUpsertWithoutTicketsInput
    connect?: ticket_prioritiesWhereUniqueInput
    update?: XOR<XOR<ticket_prioritiesUpdateToOneWithWhereWithoutTicketsInput, ticket_prioritiesUpdateWithoutTicketsInput>, ticket_prioritiesUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ticket_statusesCreateWithoutTicketsInput, ticket_statusesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_statusesCreateOrConnectWithoutTicketsInput
    upsert?: ticket_statusesUpsertWithoutTicketsInput
    connect?: ticket_statusesWhereUniqueInput
    update?: XOR<XOR<ticket_statusesUpdateToOneWithWhereWithoutTicketsInput, ticket_statusesUpdateWithoutTicketsInput>, ticket_statusesUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_typesUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ticket_typesCreateWithoutTicketsInput, ticket_typesUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ticket_typesCreateOrConnectWithoutTicketsInput
    upsert?: ticket_typesUpsertWithoutTicketsInput
    connect?: ticket_typesWhereUniqueInput
    update?: XOR<XOR<ticket_typesUpdateToOneWithWhereWithoutTicketsInput, ticket_typesUpdateWithoutTicketsInput>, ticket_typesUncheckedUpdateWithoutTicketsInput>
  }

  export type usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_created_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTickets_tickets_created_user_idTousersInput
    upsert?: usersUpsertWithoutTickets_tickets_created_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTickets_tickets_created_user_idTousersInput, usersUpdateWithoutTickets_tickets_created_user_idTousersInput>, usersUncheckedUpdateWithoutTickets_tickets_created_user_idTousersInput>
  }

  export type usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_updated_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTickets_tickets_updated_user_idTousersInput
    upsert?: usersUpsertWithoutTickets_tickets_updated_user_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTickets_tickets_updated_user_idTousersInput, usersUpdateWithoutTickets_tickets_updated_user_idTousersInput>, usersUncheckedUpdateWithoutTickets_tickets_updated_user_idTousersInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput> | ticket_documentsCreateWithoutTicketsInput[] | ticket_documentsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_documentsCreateOrConnectWithoutTicketsInput | ticket_documentsCreateOrConnectWithoutTicketsInput[]
    upsert?: ticket_documentsUpsertWithWhereUniqueWithoutTicketsInput | ticket_documentsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: ticket_documentsCreateManyTicketsInputEnvelope
    set?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    disconnect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    delete?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    connect?: ticket_documentsWhereUniqueInput | ticket_documentsWhereUniqueInput[]
    update?: ticket_documentsUpdateWithWhereUniqueWithoutTicketsInput | ticket_documentsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: ticket_documentsUpdateManyWithWhereWithoutTicketsInput | ticket_documentsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: ticket_documentsScalarWhereInput | ticket_documentsScalarWhereInput[]
  }

  export type ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput> | ticket_replysCreateWithoutTicketsInput[] | ticket_replysUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutTicketsInput | ticket_replysCreateOrConnectWithoutTicketsInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutTicketsInput | ticket_replysUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: ticket_replysCreateManyTicketsInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutTicketsInput | ticket_replysUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutTicketsInput | ticket_replysUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type ticket_replysCreateNestedManyWithoutUsersInput = {
    create?: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput> | ticket_replysCreateWithoutUsersInput[] | ticket_replysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutUsersInput | ticket_replysCreateOrConnectWithoutUsersInput[]
    createMany?: ticket_replysCreateManyUsersInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type ticketsCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_created_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_created_user_idTousersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_updated_user_idTousersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type ticket_replysUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput> | ticket_replysCreateWithoutUsersInput[] | ticket_replysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutUsersInput | ticket_replysCreateOrConnectWithoutUsersInput[]
    createMany?: ticket_replysCreateManyUsersInputEnvelope
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_created_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_created_user_idTousersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_updated_user_idTousersInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticket_replysUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput> | ticket_replysCreateWithoutUsersInput[] | ticket_replysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutUsersInput | ticket_replysCreateOrConnectWithoutUsersInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutUsersInput | ticket_replysUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ticket_replysCreateManyUsersInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutUsersInput | ticket_replysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutUsersInput | ticket_replysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type ticketsUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_created_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput | ticketsUpsertWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_created_user_idTousersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput | ticketsUpdateWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsers_tickets_created_user_idTousersInput | ticketsUpdateManyWithWhereWithoutUsers_tickets_created_user_idTousersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpsertWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_updated_user_idTousersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpdateWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpdateManyWithWhereWithoutUsers_tickets_updated_user_idTousersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type ticket_replysUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput> | ticket_replysCreateWithoutUsersInput[] | ticket_replysUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ticket_replysCreateOrConnectWithoutUsersInput | ticket_replysCreateOrConnectWithoutUsersInput[]
    upsert?: ticket_replysUpsertWithWhereUniqueWithoutUsersInput | ticket_replysUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ticket_replysCreateManyUsersInputEnvelope
    set?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    disconnect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    delete?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    connect?: ticket_replysWhereUniqueInput | ticket_replysWhereUniqueInput[]
    update?: ticket_replysUpdateWithWhereUniqueWithoutUsersInput | ticket_replysUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ticket_replysUpdateManyWithWhereWithoutUsersInput | ticket_replysUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_created_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput | ticketsUpsertWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_created_user_idTousersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput | ticketsUpdateWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsers_tickets_created_user_idTousersInput | ticketsUpdateManyWithWhereWithoutUsers_tickets_created_user_idTousersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput = {
    create?: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput> | ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput[] | ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput | ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpsertWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput[]
    createMany?: ticketsCreateManyUsers_tickets_updated_user_idTousersInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpdateWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutUsers_tickets_updated_user_idTousersInput | ticketsUpdateManyWithWhereWithoutUsers_tickets_updated_user_idTousersInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumticket_replys_ticket_attchFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_replys_ticket_attch | Enumticket_replys_ticket_attchFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_replys_ticket_attch[]
    notIn?: $Enums.ticket_replys_ticket_attch[]
    not?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel> | $Enums.ticket_replys_ticket_attch
  }

  export type NestedEnumticket_replys_ticket_attchWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_replys_ticket_attch | Enumticket_replys_ticket_attchFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_replys_ticket_attch[]
    notIn?: $Enums.ticket_replys_ticket_attch[]
    not?: NestedEnumticket_replys_ticket_attchWithAggregatesFilter<$PrismaModel> | $Enums.ticket_replys_ticket_attch
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel>
    _max?: NestedEnumticket_replys_ticket_attchFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumtickets_ticket_attachFilter<$PrismaModel = never> = {
    equals?: $Enums.tickets_ticket_attach | Enumtickets_ticket_attachFieldRefInput<$PrismaModel>
    in?: $Enums.tickets_ticket_attach[]
    notIn?: $Enums.tickets_ticket_attach[]
    not?: NestedEnumtickets_ticket_attachFilter<$PrismaModel> | $Enums.tickets_ticket_attach
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumtickets_ticket_attachWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tickets_ticket_attach | Enumtickets_ticket_attachFieldRefInput<$PrismaModel>
    in?: $Enums.tickets_ticket_attach[]
    notIn?: $Enums.tickets_ticket_attach[]
    not?: NestedEnumtickets_ticket_attachWithAggregatesFilter<$PrismaModel> | $Enums.tickets_ticket_attach
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtickets_ticket_attachFilter<$PrismaModel>
    _max?: NestedEnumtickets_ticket_attachFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ticketsCreateWithoutCategoriesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutCategoriesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutCategoriesInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput>
  }

  export type ticketsCreateManyCategoriesInputEnvelope = {
    data: ticketsCreateManyCategoriesInput | ticketsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type ticketsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutCategoriesInput, ticketsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ticketsCreateWithoutCategoriesInput, ticketsUncheckedCreateWithoutCategoriesInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutCategoriesInput, ticketsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ticketsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ticketsScalarWhereInput = {
    AND?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    OR?: ticketsScalarWhereInput[]
    NOT?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    ticket_id?: BigIntFilter<"tickets"> | bigint | number
    ticket_number?: StringFilter<"tickets"> | string
    ticket_subject?: StringFilter<"tickets"> | string
    ticket_detail?: StringNullableFilter<"tickets"> | string | null
    requestor_name?: StringFilter<"tickets"> | string
    ticket_type_id?: IntFilter<"tickets"> | number
    category_id?: IntFilter<"tickets"> | number
    division_id?: IntFilter<"tickets"> | number
    ticket_priority_id?: IntFilter<"tickets"> | number
    ticket_status_id?: IntFilter<"tickets"> | number
    ticket_attach?: Enumtickets_ticket_attachFilter<"tickets"> | $Enums.tickets_ticket_attach
    ticket_start_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    ticket_end_date?: DateTimeNullableFilter<"tickets"> | Date | string | null
    created_user_id?: BigIntFilter<"tickets"> | bigint | number
    created_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    updated_user_id?: BigIntNullableFilter<"tickets"> | bigint | number | null
    updated_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tickets"> | Date | string | null
  }

  export type ticketsCreateWithoutDivisionsInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutDivisionsInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutDivisionsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput>
  }

  export type ticketsCreateManyDivisionsInputEnvelope = {
    data: ticketsCreateManyDivisionsInput | ticketsCreateManyDivisionsInput[]
    skipDuplicates?: boolean
  }

  export type ticketsUpsertWithWhereUniqueWithoutDivisionsInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutDivisionsInput, ticketsUncheckedUpdateWithoutDivisionsInput>
    create: XOR<ticketsCreateWithoutDivisionsInput, ticketsUncheckedCreateWithoutDivisionsInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutDivisionsInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutDivisionsInput, ticketsUncheckedUpdateWithoutDivisionsInput>
  }

  export type ticketsUpdateManyWithWhereWithoutDivisionsInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutDivisionsInput>
  }

  export type usersCreateWithoutRolesInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: BigIntFilter<"users"> | bigint | number
    user_name?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    is_active?: BoolFilter<"users"> | boolean
    verify_token?: StringNullableFilter<"users"> | string | null
    login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    logout_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type ticketsCreateWithoutTicket_documentsInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutTicket_documentsInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutTicket_documentsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutTicket_documentsInput, ticketsUncheckedCreateWithoutTicket_documentsInput>
  }

  export type ticketsUpsertWithoutTicket_documentsInput = {
    update: XOR<ticketsUpdateWithoutTicket_documentsInput, ticketsUncheckedUpdateWithoutTicket_documentsInput>
    create: XOR<ticketsCreateWithoutTicket_documentsInput, ticketsUncheckedCreateWithoutTicket_documentsInput>
    where?: ticketsWhereInput
  }

  export type ticketsUpdateToOneWithWhereWithoutTicket_documentsInput = {
    where?: ticketsWhereInput
    data: XOR<ticketsUpdateWithoutTicket_documentsInput, ticketsUncheckedUpdateWithoutTicket_documentsInput>
  }

  export type ticketsUpdateWithoutTicket_documentsInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutTicket_documentsInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsCreateWithoutTicket_prioritiesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutTicket_prioritiesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutTicket_prioritiesInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput>
  }

  export type ticketsCreateManyTicket_prioritiesInputEnvelope = {
    data: ticketsCreateManyTicket_prioritiesInput | ticketsCreateManyTicket_prioritiesInput[]
    skipDuplicates?: boolean
  }

  export type ticketsUpsertWithWhereUniqueWithoutTicket_prioritiesInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutTicket_prioritiesInput, ticketsUncheckedUpdateWithoutTicket_prioritiesInput>
    create: XOR<ticketsCreateWithoutTicket_prioritiesInput, ticketsUncheckedCreateWithoutTicket_prioritiesInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutTicket_prioritiesInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutTicket_prioritiesInput, ticketsUncheckedUpdateWithoutTicket_prioritiesInput>
  }

  export type ticketsUpdateManyWithWhereWithoutTicket_prioritiesInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutTicket_prioritiesInput>
  }

  export type ticket_replysCreateWithoutTicket_reply_documentsInput = {
    ticket_reply_id?: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicket_replysInput
    tickets: ticketsCreateNestedOneWithoutTicket_replysInput
    users: usersCreateNestedOneWithoutTicket_replysInput
  }

  export type ticket_replysUncheckedCreateWithoutTicket_reply_documentsInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    ticket_status_id: number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
  }

  export type ticket_replysCreateOrConnectWithoutTicket_reply_documentsInput = {
    where: ticket_replysWhereUniqueInput
    create: XOR<ticket_replysCreateWithoutTicket_reply_documentsInput, ticket_replysUncheckedCreateWithoutTicket_reply_documentsInput>
  }

  export type ticket_replysUpsertWithoutTicket_reply_documentsInput = {
    update: XOR<ticket_replysUpdateWithoutTicket_reply_documentsInput, ticket_replysUncheckedUpdateWithoutTicket_reply_documentsInput>
    create: XOR<ticket_replysCreateWithoutTicket_reply_documentsInput, ticket_replysUncheckedCreateWithoutTicket_reply_documentsInput>
    where?: ticket_replysWhereInput
  }

  export type ticket_replysUpdateToOneWithWhereWithoutTicket_reply_documentsInput = {
    where?: ticket_replysWhereInput
    data: XOR<ticket_replysUpdateWithoutTicket_reply_documentsInput, ticket_replysUncheckedUpdateWithoutTicket_reply_documentsInput>
  }

  export type ticket_replysUpdateWithoutTicket_reply_documentsInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicket_replysNestedInput
    tickets?: ticketsUpdateOneRequiredWithoutTicket_replysNestedInput
    users?: usersUpdateOneRequiredWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateWithoutTicket_reply_documentsInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_statusesCreateWithoutTicket_replysInput = {
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tickets?: ticketsCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesUncheckedCreateWithoutTicket_replysInput = {
    ticket_status_id?: number
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesCreateOrConnectWithoutTicket_replysInput = {
    where: ticket_statusesWhereUniqueInput
    create: XOR<ticket_statusesCreateWithoutTicket_replysInput, ticket_statusesUncheckedCreateWithoutTicket_replysInput>
  }

  export type ticketsCreateWithoutTicket_replysInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutTicket_replysInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutTicket_replysInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutTicket_replysInput, ticketsUncheckedCreateWithoutTicket_replysInput>
  }

  export type usersCreateWithoutTicket_replysInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    tickets_tickets_created_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTicket_replysInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    tickets_tickets_created_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutTicket_replysInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTicket_replysInput, usersUncheckedCreateWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsCreateWithoutTicket_replysInput = {
    ticket_reply_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput = {
    ticket_reply_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_reply_documentsCreateOrConnectWithoutTicket_replysInput = {
    where: ticket_reply_documentsWhereUniqueInput
    create: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsCreateManyTicket_replysInputEnvelope = {
    data: ticket_reply_documentsCreateManyTicket_replysInput | ticket_reply_documentsCreateManyTicket_replysInput[]
    skipDuplicates?: boolean
  }

  export type ticket_statusesUpsertWithoutTicket_replysInput = {
    update: XOR<ticket_statusesUpdateWithoutTicket_replysInput, ticket_statusesUncheckedUpdateWithoutTicket_replysInput>
    create: XOR<ticket_statusesCreateWithoutTicket_replysInput, ticket_statusesUncheckedCreateWithoutTicket_replysInput>
    where?: ticket_statusesWhereInput
  }

  export type ticket_statusesUpdateToOneWithWhereWithoutTicket_replysInput = {
    where?: ticket_statusesWhereInput
    data: XOR<ticket_statusesUpdateWithoutTicket_replysInput, ticket_statusesUncheckedUpdateWithoutTicket_replysInput>
  }

  export type ticket_statusesUpdateWithoutTicket_replysInput = {
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticket_statusesUncheckedUpdateWithoutTicket_replysInput = {
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticketsUpsertWithoutTicket_replysInput = {
    update: XOR<ticketsUpdateWithoutTicket_replysInput, ticketsUncheckedUpdateWithoutTicket_replysInput>
    create: XOR<ticketsCreateWithoutTicket_replysInput, ticketsUncheckedCreateWithoutTicket_replysInput>
    where?: ticketsWhereInput
  }

  export type ticketsUpdateToOneWithWhereWithoutTicket_replysInput = {
    where?: ticketsWhereInput
    data: XOR<ticketsUpdateWithoutTicket_replysInput, ticketsUncheckedUpdateWithoutTicket_replysInput>
  }

  export type ticketsUpdateWithoutTicket_replysInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutTicket_replysInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type usersUpsertWithoutTicket_replysInput = {
    update: XOR<usersUpdateWithoutTicket_replysInput, usersUncheckedUpdateWithoutTicket_replysInput>
    create: XOR<usersCreateWithoutTicket_replysInput, usersUncheckedCreateWithoutTicket_replysInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTicket_replysInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTicket_replysInput, usersUncheckedUpdateWithoutTicket_replysInput>
  }

  export type usersUpdateWithoutTicket_replysInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets_tickets_created_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTicket_replysInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets_tickets_created_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
  }

  export type ticket_reply_documentsUpsertWithWhereUniqueWithoutTicket_replysInput = {
    where: ticket_reply_documentsWhereUniqueInput
    update: XOR<ticket_reply_documentsUpdateWithoutTicket_replysInput, ticket_reply_documentsUncheckedUpdateWithoutTicket_replysInput>
    create: XOR<ticket_reply_documentsCreateWithoutTicket_replysInput, ticket_reply_documentsUncheckedCreateWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsUpdateWithWhereUniqueWithoutTicket_replysInput = {
    where: ticket_reply_documentsWhereUniqueInput
    data: XOR<ticket_reply_documentsUpdateWithoutTicket_replysInput, ticket_reply_documentsUncheckedUpdateWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsUpdateManyWithWhereWithoutTicket_replysInput = {
    where: ticket_reply_documentsScalarWhereInput
    data: XOR<ticket_reply_documentsUpdateManyMutationInput, ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysInput>
  }

  export type ticket_reply_documentsScalarWhereInput = {
    AND?: ticket_reply_documentsScalarWhereInput | ticket_reply_documentsScalarWhereInput[]
    OR?: ticket_reply_documentsScalarWhereInput[]
    NOT?: ticket_reply_documentsScalarWhereInput | ticket_reply_documentsScalarWhereInput[]
    ticket_reply_document_id?: BigIntFilter<"ticket_reply_documents"> | bigint | number
    ticket_reply_id?: BigIntFilter<"ticket_reply_documents"> | bigint | number
    file_name?: StringFilter<"ticket_reply_documents"> | string
    file_path?: StringFilter<"ticket_reply_documents"> | string
    file_size?: IntNullableFilter<"ticket_reply_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_reply_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_reply_documents"> | Date | string | null
  }

  export type ticket_replysCreateWithoutTicket_statusesInput = {
    ticket_reply_id?: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    tickets: ticketsCreateNestedOneWithoutTicket_replysInput
    users: usersCreateNestedOneWithoutTicket_replysInput
    ticket_reply_documents?: ticket_reply_documentsCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysUncheckedCreateWithoutTicket_statusesInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysCreateOrConnectWithoutTicket_statusesInput = {
    where: ticket_replysWhereUniqueInput
    create: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput>
  }

  export type ticket_replysCreateManyTicket_statusesInputEnvelope = {
    data: ticket_replysCreateManyTicket_statusesInput | ticket_replysCreateManyTicket_statusesInput[]
    skipDuplicates?: boolean
  }

  export type ticketsCreateWithoutTicket_statusesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutTicket_statusesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutTicket_statusesInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput>
  }

  export type ticketsCreateManyTicket_statusesInputEnvelope = {
    data: ticketsCreateManyTicket_statusesInput | ticketsCreateManyTicket_statusesInput[]
    skipDuplicates?: boolean
  }

  export type ticket_replysUpsertWithWhereUniqueWithoutTicket_statusesInput = {
    where: ticket_replysWhereUniqueInput
    update: XOR<ticket_replysUpdateWithoutTicket_statusesInput, ticket_replysUncheckedUpdateWithoutTicket_statusesInput>
    create: XOR<ticket_replysCreateWithoutTicket_statusesInput, ticket_replysUncheckedCreateWithoutTicket_statusesInput>
  }

  export type ticket_replysUpdateWithWhereUniqueWithoutTicket_statusesInput = {
    where: ticket_replysWhereUniqueInput
    data: XOR<ticket_replysUpdateWithoutTicket_statusesInput, ticket_replysUncheckedUpdateWithoutTicket_statusesInput>
  }

  export type ticket_replysUpdateManyWithWhereWithoutTicket_statusesInput = {
    where: ticket_replysScalarWhereInput
    data: XOR<ticket_replysUpdateManyMutationInput, ticket_replysUncheckedUpdateManyWithoutTicket_statusesInput>
  }

  export type ticket_replysScalarWhereInput = {
    AND?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
    OR?: ticket_replysScalarWhereInput[]
    NOT?: ticket_replysScalarWhereInput | ticket_replysScalarWhereInput[]
    ticket_reply_id?: BigIntFilter<"ticket_replys"> | bigint | number
    ticket_id?: BigIntFilter<"ticket_replys"> | bigint | number
    ticket_status_id?: IntFilter<"ticket_replys"> | number
    pic_user_id?: BigIntFilter<"ticket_replys"> | bigint | number
    reply_description?: StringNullableFilter<"ticket_replys"> | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFilter<"ticket_replys"> | $Enums.ticket_replys_ticket_attch
    created_at?: DateTimeNullableFilter<"ticket_replys"> | Date | string | null
  }

  export type ticketsUpsertWithWhereUniqueWithoutTicket_statusesInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutTicket_statusesInput, ticketsUncheckedUpdateWithoutTicket_statusesInput>
    create: XOR<ticketsCreateWithoutTicket_statusesInput, ticketsUncheckedCreateWithoutTicket_statusesInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutTicket_statusesInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutTicket_statusesInput, ticketsUncheckedUpdateWithoutTicket_statusesInput>
  }

  export type ticketsUpdateManyWithWhereWithoutTicket_statusesInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutTicket_statusesInput>
  }

  export type ticketsCreateWithoutTicket_typesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutTicket_typesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutTicket_typesInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput>
  }

  export type ticketsCreateManyTicket_typesInputEnvelope = {
    data: ticketsCreateManyTicket_typesInput | ticketsCreateManyTicket_typesInput[]
    skipDuplicates?: boolean
  }

  export type ticketsUpsertWithWhereUniqueWithoutTicket_typesInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutTicket_typesInput, ticketsUncheckedUpdateWithoutTicket_typesInput>
    create: XOR<ticketsCreateWithoutTicket_typesInput, ticketsUncheckedCreateWithoutTicket_typesInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutTicket_typesInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutTicket_typesInput, ticketsUncheckedUpdateWithoutTicket_typesInput>
  }

  export type ticketsUpdateManyWithWhereWithoutTicket_typesInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutTicket_typesInput>
  }

  export type ticket_documentsCreateWithoutTicketsInput = {
    ticket_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_documentsUncheckedCreateWithoutTicketsInput = {
    ticket_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_documentsCreateOrConnectWithoutTicketsInput = {
    where: ticket_documentsWhereUniqueInput
    create: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_documentsCreateManyTicketsInputEnvelope = {
    data: ticket_documentsCreateManyTicketsInput | ticket_documentsCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type ticket_replysCreateWithoutTicketsInput = {
    ticket_reply_id?: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicket_replysInput
    users: usersCreateNestedOneWithoutTicket_replysInput
    ticket_reply_documents?: ticket_reply_documentsCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysUncheckedCreateWithoutTicketsInput = {
    ticket_reply_id?: bigint | number
    ticket_status_id: number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysCreateOrConnectWithoutTicketsInput = {
    where: ticket_replysWhereUniqueInput
    create: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_replysCreateManyTicketsInputEnvelope = {
    data: ticket_replysCreateManyTicketsInput | ticket_replysCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutTicketsInput = {
    category_name: string
    color: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon?: string | null
  }

  export type categoriesUncheckedCreateWithoutTicketsInput = {
    category_id?: number
    category_name: string
    color: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    icon?: string | null
  }

  export type categoriesCreateOrConnectWithoutTicketsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutTicketsInput, categoriesUncheckedCreateWithoutTicketsInput>
  }

  export type divisionsCreateWithoutTicketsInput = {
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type divisionsUncheckedCreateWithoutTicketsInput = {
    division_id?: number
    division_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type divisionsCreateOrConnectWithoutTicketsInput = {
    where: divisionsWhereUniqueInput
    create: XOR<divisionsCreateWithoutTicketsInput, divisionsUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_prioritiesCreateWithoutTicketsInput = {
    ticket_priority_name: string
    color?: string | null
    icon?: string | null
    is_default?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticket_prioritiesUncheckedCreateWithoutTicketsInput = {
    ticket_priority_id?: number
    ticket_priority_name: string
    color?: string | null
    icon?: string | null
    is_default?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticket_prioritiesCreateOrConnectWithoutTicketsInput = {
    where: ticket_prioritiesWhereUniqueInput
    create: XOR<ticket_prioritiesCreateWithoutTicketsInput, ticket_prioritiesUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_statusesCreateWithoutTicketsInput = {
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesUncheckedCreateWithoutTicketsInput = {
    ticket_status_id?: number
    ticket_name: string
    color?: string
    is_default?: boolean
    deleted_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicket_statusesInput
  }

  export type ticket_statusesCreateOrConnectWithoutTicketsInput = {
    where: ticket_statusesWhereUniqueInput
    create: XOR<ticket_statusesCreateWithoutTicketsInput, ticket_statusesUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_typesCreateWithoutTicketsInput = {
    ticket_type_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: string | null
  }

  export type ticket_typesUncheckedCreateWithoutTicketsInput = {
    ticket_type_id?: number
    ticket_type_name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: string | null
  }

  export type ticket_typesCreateOrConnectWithoutTicketsInput = {
    where: ticket_typesWhereUniqueInput
    create: XOR<ticket_typesCreateWithoutTicketsInput, ticket_typesUncheckedCreateWithoutTicketsInput>
  }

  export type usersCreateWithoutTickets_tickets_created_user_idTousersInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutUsersInput
    tickets_tickets_updated_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTickets_tickets_created_user_idTousersInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutUsersInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_updated_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutTickets_tickets_created_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_created_user_idTousersInput>
  }

  export type usersCreateWithoutTickets_tickets_updated_user_idTousersInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTickets_tickets_updated_user_idTousersInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    role_id: number
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutUsersInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedCreateNestedManyWithoutUsers_tickets_created_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutTickets_tickets_updated_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_updated_user_idTousersInput>
  }

  export type ticket_documentsUpsertWithWhereUniqueWithoutTicketsInput = {
    where: ticket_documentsWhereUniqueInput
    update: XOR<ticket_documentsUpdateWithoutTicketsInput, ticket_documentsUncheckedUpdateWithoutTicketsInput>
    create: XOR<ticket_documentsCreateWithoutTicketsInput, ticket_documentsUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_documentsUpdateWithWhereUniqueWithoutTicketsInput = {
    where: ticket_documentsWhereUniqueInput
    data: XOR<ticket_documentsUpdateWithoutTicketsInput, ticket_documentsUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_documentsUpdateManyWithWhereWithoutTicketsInput = {
    where: ticket_documentsScalarWhereInput
    data: XOR<ticket_documentsUpdateManyMutationInput, ticket_documentsUncheckedUpdateManyWithoutTicketsInput>
  }

  export type ticket_documentsScalarWhereInput = {
    AND?: ticket_documentsScalarWhereInput | ticket_documentsScalarWhereInput[]
    OR?: ticket_documentsScalarWhereInput[]
    NOT?: ticket_documentsScalarWhereInput | ticket_documentsScalarWhereInput[]
    ticket_document_id?: BigIntFilter<"ticket_documents"> | bigint | number
    ticket_id?: BigIntFilter<"ticket_documents"> | bigint | number
    file_name?: StringFilter<"ticket_documents"> | string
    file_path?: StringFilter<"ticket_documents"> | string
    file_size?: IntNullableFilter<"ticket_documents"> | number | null
    file_extension?: StringNullableFilter<"ticket_documents"> | string | null
    created_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ticket_documents"> | Date | string | null
  }

  export type ticket_replysUpsertWithWhereUniqueWithoutTicketsInput = {
    where: ticket_replysWhereUniqueInput
    update: XOR<ticket_replysUpdateWithoutTicketsInput, ticket_replysUncheckedUpdateWithoutTicketsInput>
    create: XOR<ticket_replysCreateWithoutTicketsInput, ticket_replysUncheckedCreateWithoutTicketsInput>
  }

  export type ticket_replysUpdateWithWhereUniqueWithoutTicketsInput = {
    where: ticket_replysWhereUniqueInput
    data: XOR<ticket_replysUpdateWithoutTicketsInput, ticket_replysUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_replysUpdateManyWithWhereWithoutTicketsInput = {
    where: ticket_replysScalarWhereInput
    data: XOR<ticket_replysUpdateManyMutationInput, ticket_replysUncheckedUpdateManyWithoutTicketsInput>
  }

  export type categoriesUpsertWithoutTicketsInput = {
    update: XOR<categoriesUpdateWithoutTicketsInput, categoriesUncheckedUpdateWithoutTicketsInput>
    create: XOR<categoriesCreateWithoutTicketsInput, categoriesUncheckedCreateWithoutTicketsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutTicketsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutTicketsInput, categoriesUncheckedUpdateWithoutTicketsInput>
  }

  export type categoriesUpdateWithoutTicketsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutTicketsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type divisionsUpsertWithoutTicketsInput = {
    update: XOR<divisionsUpdateWithoutTicketsInput, divisionsUncheckedUpdateWithoutTicketsInput>
    create: XOR<divisionsCreateWithoutTicketsInput, divisionsUncheckedCreateWithoutTicketsInput>
    where?: divisionsWhereInput
  }

  export type divisionsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: divisionsWhereInput
    data: XOR<divisionsUpdateWithoutTicketsInput, divisionsUncheckedUpdateWithoutTicketsInput>
  }

  export type divisionsUpdateWithoutTicketsInput = {
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type divisionsUncheckedUpdateWithoutTicketsInput = {
    division_id?: IntFieldUpdateOperationsInput | number
    division_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_prioritiesUpsertWithoutTicketsInput = {
    update: XOR<ticket_prioritiesUpdateWithoutTicketsInput, ticket_prioritiesUncheckedUpdateWithoutTicketsInput>
    create: XOR<ticket_prioritiesCreateWithoutTicketsInput, ticket_prioritiesUncheckedCreateWithoutTicketsInput>
    where?: ticket_prioritiesWhereInput
  }

  export type ticket_prioritiesUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ticket_prioritiesWhereInput
    data: XOR<ticket_prioritiesUpdateWithoutTicketsInput, ticket_prioritiesUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_prioritiesUpdateWithoutTicketsInput = {
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_prioritiesUncheckedUpdateWithoutTicketsInput = {
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_statusesUpsertWithoutTicketsInput = {
    update: XOR<ticket_statusesUpdateWithoutTicketsInput, ticket_statusesUncheckedUpdateWithoutTicketsInput>
    create: XOR<ticket_statusesCreateWithoutTicketsInput, ticket_statusesUncheckedCreateWithoutTicketsInput>
    where?: ticket_statusesWhereInput
  }

  export type ticket_statusesUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ticket_statusesWhereInput
    data: XOR<ticket_statusesUpdateWithoutTicketsInput, ticket_statusesUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_statusesUpdateWithoutTicketsInput = {
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticket_statusesUncheckedUpdateWithoutTicketsInput = {
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicket_statusesNestedInput
  }

  export type ticket_typesUpsertWithoutTicketsInput = {
    update: XOR<ticket_typesUpdateWithoutTicketsInput, ticket_typesUncheckedUpdateWithoutTicketsInput>
    create: XOR<ticket_typesCreateWithoutTicketsInput, ticket_typesUncheckedCreateWithoutTicketsInput>
    where?: ticket_typesWhereInput
  }

  export type ticket_typesUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ticket_typesWhereInput
    data: XOR<ticket_typesUpdateWithoutTicketsInput, ticket_typesUncheckedUpdateWithoutTicketsInput>
  }

  export type ticket_typesUpdateWithoutTicketsInput = {
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticket_typesUncheckedUpdateWithoutTicketsInput = {
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    ticket_type_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutTickets_tickets_created_user_idTousersInput = {
    update: XOR<usersUpdateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedUpdateWithoutTickets_tickets_created_user_idTousersInput>
    create: XOR<usersCreateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_created_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTickets_tickets_created_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTickets_tickets_created_user_idTousersInput, usersUncheckedUpdateWithoutTickets_tickets_created_user_idTousersInput>
  }

  export type usersUpdateWithoutTickets_tickets_created_user_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutUsersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTickets_tickets_created_user_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutUsersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
  }

  export type usersUpsertWithoutTickets_tickets_updated_user_idTousersInput = {
    update: XOR<usersUpdateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedUpdateWithoutTickets_tickets_updated_user_idTousersInput>
    create: XOR<usersCreateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedCreateWithoutTickets_tickets_updated_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTickets_tickets_updated_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTickets_tickets_updated_user_idTousersInput, usersUncheckedUpdateWithoutTickets_tickets_updated_user_idTousersInput>
  }

  export type usersUpdateWithoutTickets_tickets_updated_user_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTickets_tickets_updated_user_idTousersInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
  }

  export type ticket_replysCreateWithoutUsersInput = {
    ticket_reply_id?: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicket_replysInput
    tickets: ticketsCreateNestedOneWithoutTicket_replysInput
    ticket_reply_documents?: ticket_reply_documentsCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysUncheckedCreateWithoutUsersInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    ticket_status_id: number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedCreateNestedManyWithoutTicket_replysInput
  }

  export type ticket_replysCreateOrConnectWithoutUsersInput = {
    where: ticket_replysWhereUniqueInput
    create: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput>
  }

  export type ticket_replysCreateManyUsersInputEnvelope = {
    data: ticket_replysCreateManyUsersInput | ticket_replysCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ticketsCreateWithoutUsers_tickets_created_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_updated_user_idTousers?: usersCreateNestedOneWithoutTickets_tickets_updated_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutUsers_tickets_created_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput>
  }

  export type ticketsCreateManyUsers_tickets_created_user_idTousersInputEnvelope = {
    data: ticketsCreateManyUsers_tickets_created_user_idTousersInput | ticketsCreateManyUsers_tickets_created_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysCreateNestedManyWithoutTicketsInput
    categories: categoriesCreateNestedOneWithoutTicketsInput
    divisions: divisionsCreateNestedOneWithoutTicketsInput
    ticket_priorities: ticket_prioritiesCreateNestedOneWithoutTicketsInput
    ticket_statuses: ticket_statusesCreateNestedOneWithoutTicketsInput
    ticket_types: ticket_typesCreateNestedOneWithoutTicketsInput
    users_tickets_created_user_idTousers: usersCreateNestedOneWithoutTickets_tickets_created_user_idTousersInput
  }

  export type ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    ticket_documents?: ticket_documentsUncheckedCreateNestedManyWithoutTicketsInput
    ticket_replys?: ticket_replysUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutUsers_tickets_updated_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput>
  }

  export type ticketsCreateManyUsers_tickets_updated_user_idTousersInputEnvelope = {
    data: ticketsCreateManyUsers_tickets_updated_user_idTousersInput | ticketsCreateManyUsers_tickets_updated_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUsersInput = {
    role_name: string
    permissions?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    role_id?: number
    role_name: string
    permissions?: string | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type ticket_replysUpsertWithWhereUniqueWithoutUsersInput = {
    where: ticket_replysWhereUniqueInput
    update: XOR<ticket_replysUpdateWithoutUsersInput, ticket_replysUncheckedUpdateWithoutUsersInput>
    create: XOR<ticket_replysCreateWithoutUsersInput, ticket_replysUncheckedCreateWithoutUsersInput>
  }

  export type ticket_replysUpdateWithWhereUniqueWithoutUsersInput = {
    where: ticket_replysWhereUniqueInput
    data: XOR<ticket_replysUpdateWithoutUsersInput, ticket_replysUncheckedUpdateWithoutUsersInput>
  }

  export type ticket_replysUpdateManyWithWhereWithoutUsersInput = {
    where: ticket_replysScalarWhereInput
    data: XOR<ticket_replysUpdateManyMutationInput, ticket_replysUncheckedUpdateManyWithoutUsersInput>
  }

  export type ticketsUpsertWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedUpdateWithoutUsers_tickets_created_user_idTousersInput>
    create: XOR<ticketsCreateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_created_user_idTousersInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutUsers_tickets_created_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutUsers_tickets_created_user_idTousersInput, ticketsUncheckedUpdateWithoutUsers_tickets_created_user_idTousersInput>
  }

  export type ticketsUpdateManyWithWhereWithoutUsers_tickets_created_user_idTousersInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersInput>
  }

  export type ticketsUpsertWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedUpdateWithoutUsers_tickets_updated_user_idTousersInput>
    create: XOR<ticketsCreateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedCreateWithoutUsers_tickets_updated_user_idTousersInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutUsers_tickets_updated_user_idTousersInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutUsers_tickets_updated_user_idTousersInput, ticketsUncheckedUpdateWithoutUsers_tickets_updated_user_idTousersInput>
  }

  export type ticketsUpdateManyWithWhereWithoutUsers_tickets_updated_user_idTousersInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersInput>
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateManyCategoriesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateWithoutCategoriesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutCategoriesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutCategoriesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateManyDivisionsInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateWithoutDivisionsInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutDivisionsInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutDivisionsInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyRolesInput = {
    user_id?: bigint | number
    user_name: string
    full_name: string
    email: string
    password: string
    is_active?: boolean
    verify_token?: string | null
    login_at?: Date | string | null
    logout_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutRolesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutUsersNestedInput
    tickets_tickets_created_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersNestedInput
    tickets_tickets_updated_user_idTousers?: ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    verify_token?: NullableStringFieldUpdateOperationsInput | string | null
    login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateManyTicket_prioritiesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateWithoutTicket_prioritiesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutTicket_prioritiesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_prioritiesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsCreateManyTicket_replysInput = {
    ticket_reply_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_reply_documentsUpdateWithoutTicket_replysInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsUncheckedUpdateWithoutTicket_replysInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysInput = {
    ticket_reply_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_replysCreateManyTicket_statusesInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
  }

  export type ticketsCreateManyTicket_statusesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticket_replysUpdateWithoutTicket_statusesInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUpdateOneRequiredWithoutTicket_replysNestedInput
    users?: usersUpdateOneRequiredWithoutTicket_replysNestedInput
    ticket_reply_documents?: ticket_reply_documentsUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateWithoutTicket_statusesInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateManyWithoutTicket_statusesInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpdateWithoutTicket_statusesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutTicket_statusesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_statusesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsCreateManyTicket_typesInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsUpdateWithoutTicket_typesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutTicket_typesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutTicket_typesInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsCreateManyTicketsInput = {
    ticket_document_id?: bigint | number
    file_name: string
    file_path: string
    file_size?: number | null
    file_extension?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ticket_replysCreateManyTicketsInput = {
    ticket_reply_id?: bigint | number
    ticket_status_id: number
    pic_user_id: bigint | number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
  }

  export type ticket_documentsUpdateWithoutTicketsInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsUncheckedUpdateWithoutTicketsInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_documentsUncheckedUpdateManyWithoutTicketsInput = {
    ticket_document_id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    file_extension?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_replysUpdateWithoutTicketsInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicket_replysNestedInput
    users?: usersUpdateOneRequiredWithoutTicket_replysNestedInput
    ticket_reply_documents?: ticket_reply_documentsUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateWithoutTicketsInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateManyWithoutTicketsInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    pic_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticket_replysCreateManyUsersInput = {
    ticket_reply_id?: bigint | number
    ticket_id: bigint | number
    ticket_status_id: number
    reply_description?: string | null
    ticket_attch?: $Enums.ticket_replys_ticket_attch
    created_at?: Date | string | null
  }

  export type ticketsCreateManyUsers_tickets_created_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_at?: Date | string | null
    updated_user_id?: bigint | number | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticketsCreateManyUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: bigint | number
    ticket_number: string
    ticket_subject: string
    ticket_detail?: string | null
    requestor_name: string
    ticket_type_id: number
    category_id: number
    division_id: number
    ticket_priority_id: number
    ticket_status_id: number
    ticket_attach?: $Enums.tickets_ticket_attach
    ticket_start_date?: Date | string | null
    ticket_end_date?: Date | string | null
    created_user_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type ticket_replysUpdateWithoutUsersInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicket_replysNestedInput
    tickets?: ticketsUpdateOneRequiredWithoutTicket_replysNestedInput
    ticket_reply_documents?: ticket_reply_documentsUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateWithoutUsersInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_reply_documents?: ticket_reply_documentsUncheckedUpdateManyWithoutTicket_replysNestedInput
  }

  export type ticket_replysUncheckedUpdateManyWithoutUsersInput = {
    ticket_reply_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    reply_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_attch?: Enumticket_replys_ticket_attchFieldUpdateOperationsInput | $Enums.ticket_replys_ticket_attch
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpdateWithoutUsers_tickets_created_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_updated_user_idTousers?: usersUpdateOneWithoutTickets_tickets_updated_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutUsers_tickets_created_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutUsers_tickets_created_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketsUpdateWithoutUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUpdateManyWithoutTicketsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutTicketsNestedInput
    divisions?: divisionsUpdateOneRequiredWithoutTicketsNestedInput
    ticket_priorities?: ticket_prioritiesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_statuses?: ticket_statusesUpdateOneRequiredWithoutTicketsNestedInput
    ticket_types?: ticket_typesUpdateOneRequiredWithoutTicketsNestedInput
    users_tickets_created_user_idTousers?: usersUpdateOneRequiredWithoutTickets_tickets_created_user_idTousersNestedInput
  }

  export type ticketsUncheckedUpdateWithoutUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_documents?: ticket_documentsUncheckedUpdateManyWithoutTicketsNestedInput
    ticket_replys?: ticket_replysUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutUsers_tickets_updated_user_idTousersInput = {
    ticket_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticket_number?: StringFieldUpdateOperationsInput | string
    ticket_subject?: StringFieldUpdateOperationsInput | string
    ticket_detail?: NullableStringFieldUpdateOperationsInput | string | null
    requestor_name?: StringFieldUpdateOperationsInput | string
    ticket_type_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    division_id?: IntFieldUpdateOperationsInput | number
    ticket_priority_id?: IntFieldUpdateOperationsInput | number
    ticket_status_id?: IntFieldUpdateOperationsInput | number
    ticket_attach?: Enumtickets_ticket_attachFieldUpdateOperationsInput | $Enums.tickets_ticket_attach
    ticket_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionsCountOutputTypeDefaultArgs instead
     */
    export type DivisionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ticket_prioritiesCountOutputTypeDefaultArgs instead
     */
    export type Ticket_prioritiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ticket_prioritiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ticket_replysCountOutputTypeDefaultArgs instead
     */
    export type Ticket_replysCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ticket_replysCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ticket_statusesCountOutputTypeDefaultArgs instead
     */
    export type Ticket_statusesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ticket_statusesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ticket_typesCountOutputTypeDefaultArgs instead
     */
    export type Ticket_typesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ticket_typesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketsCountOutputTypeDefaultArgs instead
     */
    export type TicketsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriesDefaultArgs instead
     */
    export type categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use divisionsDefaultArgs instead
     */
    export type divisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = divisionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_documentsDefaultArgs instead
     */
    export type ticket_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_documentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_prioritiesDefaultArgs instead
     */
    export type ticket_prioritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_prioritiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_reply_documentsDefaultArgs instead
     */
    export type ticket_reply_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_reply_documentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_replysDefaultArgs instead
     */
    export type ticket_replysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_replysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_statusesDefaultArgs instead
     */
    export type ticket_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_statusesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticket_typesDefaultArgs instead
     */
    export type ticket_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticket_typesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ticketsDefaultArgs instead
     */
    export type ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ticketsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}