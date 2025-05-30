
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
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produks
 * const produks = await prisma.produk.findMany()
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
   * // Fetch zero or more Produks
   * const produks = await prisma.produk.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Produk: 'Produk',
    Transaksi: 'Transaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "produk" | "transaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    produk?: ProdukOmit
    transaksi?: TransaksiOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    transaksi: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | ProdukCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id_produk: number | null
    harga: number | null
    stok: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id_produk: number | null
    harga: number | null
    stok: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: number | null
    stok: number | null
    foto: string | null
    deskripsi: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    harga: number | null
    stok: number | null
    foto: string | null
    deskripsi: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id_produk: number
    nama_produk: number
    harga: number
    stok: number
    foto: number
    deskripsi: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id_produk?: true
    harga?: true
    stok?: true
  }

  export type ProdukSumAggregateInputType = {
    id_produk?: true
    harga?: true
    stok?: true
  }

  export type ProdukMinAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
  }

  export type ProdukMaxAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
  }

  export type ProdukCountAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    harga?: true
    stok?: true
    foto?: true
    deskripsi?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id_produk: number
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
    transaksi?: boolean | Produk$transaksiArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    id_produk?: boolean
    nama_produk?: boolean
    harga?: boolean
    stok?: boolean
    foto?: boolean
    deskripsi?: boolean
  }

  export type ProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produk" | "nama_produk" | "harga" | "stok" | "foto" | "deskripsi", ExtArgs["result"]["produk"]>
  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | Produk$transaksiArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produk: number
      nama_produk: string
      harga: number
      stok: number
      foto: string
      deskripsi: string
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.findMany({ select: { id_produk: true } })
     * 
     */
    findMany<T extends ProdukFindManyArgs>(args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends ProdukCreateArgs>(args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukCreateManyArgs>(args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.createManyAndReturn({
     *   select: { id_produk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends ProdukDeleteArgs>(args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukUpdateArgs>(args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.updateManyAndReturn({
     *   select: { id_produk: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends Produk$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, Produk$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produk model
   */
  interface ProdukFieldRefs {
    readonly id_produk: FieldRef<"Produk", 'Int'>
    readonly nama_produk: FieldRef<"Produk", 'String'>
    readonly harga: FieldRef<"Produk", 'Int'>
    readonly stok: FieldRef<"Produk", 'Int'>
    readonly foto: FieldRef<"Produk", 'String'>
    readonly deskripsi: FieldRef<"Produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }

  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk createManyAndReturn
   */
  export type ProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk updateManyAndReturn
   */
  export type ProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }

  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to delete.
     */
    limit?: number
  }

  /**
   * Produk.transaksi
   */
  export type Produk$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id_transaksi: number | null
    id_produk: number | null
    total_harga: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id_transaksi: number | null
    id_produk: number | null
    total_harga: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id_transaksi: number | null
    id_produk: number | null
    nama_pembeli: string | null
    tanggal: Date | null
    total_harga: number | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id_transaksi: number | null
    id_produk: number | null
    nama_pembeli: string | null
    tanggal: Date | null
    total_harga: number | null
  }

  export type TransaksiCountAggregateOutputType = {
    id_transaksi: number
    id_produk: number
    nama_pembeli: number
    tanggal: number
    total_harga: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    total_harga?: true
  }

  export type TransaksiSumAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    total_harga?: true
  }

  export type TransaksiMinAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pembeli?: true
    tanggal?: true
    total_harga?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pembeli?: true
    tanggal?: true
    total_harga?: true
  }

  export type TransaksiCountAggregateInputType = {
    id_transaksi?: true
    id_produk?: true
    nama_pembeli?: true
    tanggal?: true
    total_harga?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id_transaksi: number
    id_produk: number
    nama_pembeli: string
    tanggal: Date
    total_harga: number
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pembeli?: boolean
    tanggal?: boolean
    total_harga?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pembeli?: boolean
    tanggal?: boolean
    total_harga?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pembeli?: boolean
    tanggal?: boolean
    total_harga?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectScalar = {
    id_transaksi?: boolean
    id_produk?: boolean
    nama_pembeli?: boolean
    tanggal?: boolean
    total_harga?: boolean
  }

  export type TransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transaksi" | "id_produk" | "nama_pembeli" | "tanggal" | "total_harga", ExtArgs["result"]["transaksi"]>
  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type TransaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type TransaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transaksi: number
      id_produk: number
      nama_pembeli: string
      tanggal: Date
      total_harga: number
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiFindUniqueArgs>(args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiFindFirstArgs>(args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.findMany({ select: { id_transaksi: true } })
     * 
     */
    findMany<T extends TransaksiFindManyArgs>(args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends TransaksiCreateArgs>(args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiCreateManyArgs>(args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {TransaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { id_transaksi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends TransaksiDeleteArgs>(args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiUpdateArgs>(args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiDeleteManyArgs>(args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiUpdateManyArgs>(args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {TransaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.updateManyAndReturn({
     *   select: { id_transaksi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiUpsertArgs>(args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
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
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaksi model
   */
  interface TransaksiFieldRefs {
    readonly id_transaksi: FieldRef<"Transaksi", 'Int'>
    readonly id_produk: FieldRef<"Transaksi", 'Int'>
    readonly nama_pembeli: FieldRef<"Transaksi", 'String'>
    readonly tanggal: FieldRef<"Transaksi", 'DateTime'>
    readonly total_harga: FieldRef<"Transaksi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi createManyAndReturn
   */
  export type TransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to update.
     */
    limit?: number
  }

  /**
   * Transaksi updateManyAndReturn
   */
  export type TransaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to delete.
     */
    limit?: number
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
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


  export const ProdukScalarFieldEnum: {
    id_produk: 'id_produk',
    nama_produk: 'nama_produk',
    harga: 'harga',
    stok: 'stok',
    foto: 'foto',
    deskripsi: 'deskripsi'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id_transaksi: 'id_transaksi',
    id_produk: 'id_produk',
    nama_pembeli: 'nama_pembeli',
    tanggal: 'tanggal',
    total_harga: 'total_harga'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id_produk?: IntFilter<"Produk"> | number
    nama_produk?: StringFilter<"Produk"> | string
    harga?: IntFilter<"Produk"> | number
    stok?: IntFilter<"Produk"> | number
    foto?: StringFilter<"Produk"> | string
    deskripsi?: StringFilter<"Produk"> | string
    transaksi?: TransaksiListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    transaksi?: TransaksiOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id_produk?: number
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    nama_produk?: StringFilter<"Produk"> | string
    harga?: IntFilter<"Produk"> | number
    stok?: IntFilter<"Produk"> | number
    foto?: StringFilter<"Produk"> | string
    deskripsi?: StringFilter<"Produk"> | string
    transaksi?: TransaksiListRelationFilter
  }, "id_produk">

  export type ProdukOrderByWithAggregationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    id_produk?: IntWithAggregatesFilter<"Produk"> | number
    nama_produk?: StringWithAggregatesFilter<"Produk"> | string
    harga?: IntWithAggregatesFilter<"Produk"> | number
    stok?: IntWithAggregatesFilter<"Produk"> | number
    foto?: StringWithAggregatesFilter<"Produk"> | string
    deskripsi?: StringWithAggregatesFilter<"Produk"> | string
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id_transaksi?: IntFilter<"Transaksi"> | number
    id_produk?: IntFilter<"Transaksi"> | number
    nama_pembeli?: StringFilter<"Transaksi"> | string
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: IntFilter<"Transaksi"> | number
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type TransaksiOrderByWithRelationInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pembeli?: SortOrder
    tanggal?: SortOrder
    total_harga?: SortOrder
    produk?: ProdukOrderByWithRelationInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    id_transaksi?: number
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id_produk?: IntFilter<"Transaksi"> | number
    nama_pembeli?: StringFilter<"Transaksi"> | string
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: IntFilter<"Transaksi"> | number
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "id_transaksi">

  export type TransaksiOrderByWithAggregationInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pembeli?: SortOrder
    tanggal?: SortOrder
    total_harga?: SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    id_transaksi?: IntWithAggregatesFilter<"Transaksi"> | number
    id_produk?: IntWithAggregatesFilter<"Transaksi"> | number
    nama_pembeli?: StringWithAggregatesFilter<"Transaksi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    total_harga?: IntWithAggregatesFilter<"Transaksi"> | number
  }

  export type ProdukCreateInput = {
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
    transaksi?: TransaksiCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    id_produk?: number
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    id_produk?: number
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
  }

  export type ProdukUpdateManyMutationInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukUncheckedUpdateManyInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiCreateInput = {
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
    produk: ProdukCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateInput = {
    id_transaksi?: number
    id_produk: number
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
  }

  export type TransaksiUpdateInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
    produk?: ProdukUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiCreateManyInput = {
    id_transaksi?: number
    id_produk: number
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
  }

  export type TransaksiUpdateManyMutationInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiUncheckedUpdateManyInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransaksiListRelationFilter = {
    every?: TransaksiWhereInput
    some?: TransaksiWhereInput
    none?: TransaksiWhereInput
  }

  export type TransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    id_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    id_produk?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProdukScalarRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type TransaksiCountOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pembeli?: SortOrder
    tanggal?: SortOrder
    total_harga?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    total_harga?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pembeli?: SortOrder
    tanggal?: SortOrder
    total_harga?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    nama_pembeli?: SortOrder
    tanggal?: SortOrder
    total_harga?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_produk?: SortOrder
    total_harga?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TransaksiCreateNestedManyWithoutProdukInput = {
    create?: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput> | TransaksiCreateWithoutProdukInput[] | TransaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutProdukInput | TransaksiCreateOrConnectWithoutProdukInput[]
    createMany?: TransaksiCreateManyProdukInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput> | TransaksiCreateWithoutProdukInput[] | TransaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutProdukInput | TransaksiCreateOrConnectWithoutProdukInput[]
    createMany?: TransaksiCreateManyProdukInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransaksiUpdateManyWithoutProdukNestedInput = {
    create?: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput> | TransaksiCreateWithoutProdukInput[] | TransaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutProdukInput | TransaksiCreateOrConnectWithoutProdukInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutProdukInput | TransaksiUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: TransaksiCreateManyProdukInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutProdukInput | TransaksiUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutProdukInput | TransaksiUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput> | TransaksiCreateWithoutProdukInput[] | TransaksiUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutProdukInput | TransaksiCreateOrConnectWithoutProdukInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutProdukInput | TransaksiUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: TransaksiCreateManyProdukInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutProdukInput | TransaksiUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutProdukInput | TransaksiUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type ProdukCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<ProdukCreateWithoutTransaksiInput, ProdukUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutTransaksiInput
    connect?: ProdukWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProdukUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<ProdukCreateWithoutTransaksiInput, ProdukUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutTransaksiInput
    upsert?: ProdukUpsertWithoutTransaksiInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutTransaksiInput, ProdukUpdateWithoutTransaksiInput>, ProdukUncheckedUpdateWithoutTransaksiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TransaksiCreateWithoutProdukInput = {
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
  }

  export type TransaksiUncheckedCreateWithoutProdukInput = {
    id_transaksi?: number
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
  }

  export type TransaksiCreateOrConnectWithoutProdukInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput>
  }

  export type TransaksiCreateManyProdukInputEnvelope = {
    data: TransaksiCreateManyProdukInput | TransaksiCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutProdukInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutProdukInput, TransaksiUncheckedUpdateWithoutProdukInput>
    create: XOR<TransaksiCreateWithoutProdukInput, TransaksiUncheckedCreateWithoutProdukInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutProdukInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutProdukInput, TransaksiUncheckedUpdateWithoutProdukInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutProdukInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutProdukInput>
  }

  export type TransaksiScalarWhereInput = {
    AND?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    OR?: TransaksiScalarWhereInput[]
    NOT?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    id_transaksi?: IntFilter<"Transaksi"> | number
    id_produk?: IntFilter<"Transaksi"> | number
    nama_pembeli?: StringFilter<"Transaksi"> | string
    tanggal?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: IntFilter<"Transaksi"> | number
  }

  export type ProdukCreateWithoutTransaksiInput = {
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
  }

  export type ProdukUncheckedCreateWithoutTransaksiInput = {
    id_produk?: number
    nama_produk: string
    harga: number
    stok: number
    foto: string
    deskripsi: string
  }

  export type ProdukCreateOrConnectWithoutTransaksiInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutTransaksiInput, ProdukUncheckedCreateWithoutTransaksiInput>
  }

  export type ProdukUpsertWithoutTransaksiInput = {
    update: XOR<ProdukUpdateWithoutTransaksiInput, ProdukUncheckedUpdateWithoutTransaksiInput>
    create: XOR<ProdukCreateWithoutTransaksiInput, ProdukUncheckedCreateWithoutTransaksiInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutTransaksiInput, ProdukUncheckedUpdateWithoutTransaksiInput>
  }

  export type ProdukUpdateWithoutTransaksiInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukUncheckedUpdateWithoutTransaksiInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiCreateManyProdukInput = {
    id_transaksi?: number
    nama_pembeli: string
    tanggal: Date | string
    total_harga: number
  }

  export type TransaksiUpdateWithoutProdukInput = {
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiUncheckedUpdateWithoutProdukInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiUncheckedUpdateManyWithoutProdukInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    nama_pembeli?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: IntFieldUpdateOperationsInput | number
  }



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