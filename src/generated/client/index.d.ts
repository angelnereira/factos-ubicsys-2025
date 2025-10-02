
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
 * Model Configuracion
 * 
 */
export type Configuracion = $Result.DefaultSelection<Prisma.$ConfiguracionPayload>
/**
 * Model ConexionHKA
 * 
 */
export type ConexionHKA = $Result.DefaultSelection<Prisma.$ConexionHKAPayload>
/**
 * Model PuntoRecepcion
 * 
 */
export type PuntoRecepcion = $Result.DefaultSelection<Prisma.$PuntoRecepcionPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model FacturaItem
 * 
 */
export type FacturaItem = $Result.DefaultSelection<Prisma.$FacturaItemPayload>
/**
 * Model HKALog
 * 
 */
export type HKALog = $Result.DefaultSelection<Prisma.$HKALogPayload>
/**
 * Model FacturaCola
 * 
 */
export type FacturaCola = $Result.DefaultSelection<Prisma.$FacturaColaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Configuracions
 * const configuracions = await prisma.configuracion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Configuracions
   * const configuracions = await prisma.configuracion.findMany()
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
   * `prisma.configuracion`: Exposes CRUD operations for the **Configuracion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracions
    * const configuracions = await prisma.configuracion.findMany()
    * ```
    */
  get configuracion(): Prisma.ConfiguracionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conexionHKA`: Exposes CRUD operations for the **ConexionHKA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConexionHKAS
    * const conexionHKAS = await prisma.conexionHKA.findMany()
    * ```
    */
  get conexionHKA(): Prisma.ConexionHKADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puntoRecepcion`: Exposes CRUD operations for the **PuntoRecepcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PuntoRecepcions
    * const puntoRecepcions = await prisma.puntoRecepcion.findMany()
    * ```
    */
  get puntoRecepcion(): Prisma.PuntoRecepcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturaItem`: Exposes CRUD operations for the **FacturaItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacturaItems
    * const facturaItems = await prisma.facturaItem.findMany()
    * ```
    */
  get facturaItem(): Prisma.FacturaItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hKALog`: Exposes CRUD operations for the **HKALog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HKALogs
    * const hKALogs = await prisma.hKALog.findMany()
    * ```
    */
  get hKALog(): Prisma.HKALogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturaCola`: Exposes CRUD operations for the **FacturaCola** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacturaColas
    * const facturaColas = await prisma.facturaCola.findMany()
    * ```
    */
  get facturaCola(): Prisma.FacturaColaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Configuracion: 'Configuracion',
    ConexionHKA: 'ConexionHKA',
    PuntoRecepcion: 'PuntoRecepcion',
    Factura: 'Factura',
    FacturaItem: 'FacturaItem',
    HKALog: 'HKALog',
    FacturaCola: 'FacturaCola'
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
      modelProps: "configuracion" | "conexionHKA" | "puntoRecepcion" | "factura" | "facturaItem" | "hKALog" | "facturaCola"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Configuracion: {
        payload: Prisma.$ConfiguracionPayload<ExtArgs>
        fields: Prisma.ConfiguracionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          findMany: {
            args: Prisma.ConfiguracionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[]
          }
          create: {
            args: Prisma.ConfiguracionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          createMany: {
            args: Prisma.ConfiguracionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          update: {
            args: Prisma.ConfiguracionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion>
          }
          groupBy: {
            args: Prisma.ConfiguracionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracionCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionCountAggregateOutputType> | number
          }
        }
      }
      ConexionHKA: {
        payload: Prisma.$ConexionHKAPayload<ExtArgs>
        fields: Prisma.ConexionHKAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConexionHKAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConexionHKAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          findFirst: {
            args: Prisma.ConexionHKAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConexionHKAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          findMany: {
            args: Prisma.ConexionHKAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>[]
          }
          create: {
            args: Prisma.ConexionHKACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          createMany: {
            args: Prisma.ConexionHKACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConexionHKACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>[]
          }
          delete: {
            args: Prisma.ConexionHKADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          update: {
            args: Prisma.ConexionHKAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          deleteMany: {
            args: Prisma.ConexionHKADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConexionHKAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConexionHKAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>[]
          }
          upsert: {
            args: Prisma.ConexionHKAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConexionHKAPayload>
          }
          aggregate: {
            args: Prisma.ConexionHKAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConexionHKA>
          }
          groupBy: {
            args: Prisma.ConexionHKAGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConexionHKAGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConexionHKACountArgs<ExtArgs>
            result: $Utils.Optional<ConexionHKACountAggregateOutputType> | number
          }
        }
      }
      PuntoRecepcion: {
        payload: Prisma.$PuntoRecepcionPayload<ExtArgs>
        fields: Prisma.PuntoRecepcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuntoRecepcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuntoRecepcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          findFirst: {
            args: Prisma.PuntoRecepcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuntoRecepcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          findMany: {
            args: Prisma.PuntoRecepcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>[]
          }
          create: {
            args: Prisma.PuntoRecepcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          createMany: {
            args: Prisma.PuntoRecepcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PuntoRecepcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>[]
          }
          delete: {
            args: Prisma.PuntoRecepcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          update: {
            args: Prisma.PuntoRecepcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          deleteMany: {
            args: Prisma.PuntoRecepcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuntoRecepcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PuntoRecepcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>[]
          }
          upsert: {
            args: Prisma.PuntoRecepcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoRecepcionPayload>
          }
          aggregate: {
            args: Prisma.PuntoRecepcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuntoRecepcion>
          }
          groupBy: {
            args: Prisma.PuntoRecepcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuntoRecepcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuntoRecepcionCountArgs<ExtArgs>
            result: $Utils.Optional<PuntoRecepcionCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      FacturaItem: {
        payload: Prisma.$FacturaItemPayload<ExtArgs>
        fields: Prisma.FacturaItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          findFirst: {
            args: Prisma.FacturaItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          findMany: {
            args: Prisma.FacturaItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>[]
          }
          create: {
            args: Prisma.FacturaItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          createMany: {
            args: Prisma.FacturaItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>[]
          }
          delete: {
            args: Prisma.FacturaItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          update: {
            args: Prisma.FacturaItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          deleteMany: {
            args: Prisma.FacturaItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>[]
          }
          upsert: {
            args: Prisma.FacturaItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaItemPayload>
          }
          aggregate: {
            args: Prisma.FacturaItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturaItem>
          }
          groupBy: {
            args: Prisma.FacturaItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaItemCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaItemCountAggregateOutputType> | number
          }
        }
      }
      HKALog: {
        payload: Prisma.$HKALogPayload<ExtArgs>
        fields: Prisma.HKALogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HKALogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HKALogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          findFirst: {
            args: Prisma.HKALogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HKALogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          findMany: {
            args: Prisma.HKALogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>[]
          }
          create: {
            args: Prisma.HKALogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          createMany: {
            args: Prisma.HKALogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HKALogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>[]
          }
          delete: {
            args: Prisma.HKALogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          update: {
            args: Prisma.HKALogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          deleteMany: {
            args: Prisma.HKALogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HKALogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HKALogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>[]
          }
          upsert: {
            args: Prisma.HKALogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HKALogPayload>
          }
          aggregate: {
            args: Prisma.HKALogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHKALog>
          }
          groupBy: {
            args: Prisma.HKALogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HKALogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HKALogCountArgs<ExtArgs>
            result: $Utils.Optional<HKALogCountAggregateOutputType> | number
          }
        }
      }
      FacturaCola: {
        payload: Prisma.$FacturaColaPayload<ExtArgs>
        fields: Prisma.FacturaColaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaColaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaColaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          findFirst: {
            args: Prisma.FacturaColaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaColaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          findMany: {
            args: Prisma.FacturaColaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>[]
          }
          create: {
            args: Prisma.FacturaColaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          createMany: {
            args: Prisma.FacturaColaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaColaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>[]
          }
          delete: {
            args: Prisma.FacturaColaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          update: {
            args: Prisma.FacturaColaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaColaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaColaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaColaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaColaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaColaPayload>
          }
          aggregate: {
            args: Prisma.FacturaColaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturaCola>
          }
          groupBy: {
            args: Prisma.FacturaColaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaColaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaColaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaColaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    configuracion?: ConfiguracionOmit
    conexionHKA?: ConexionHKAOmit
    puntoRecepcion?: PuntoRecepcionOmit
    factura?: FacturaOmit
    facturaItem?: FacturaItemOmit
    hKALog?: HKALogOmit
    facturaCola?: FacturaColaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    items: number
    logs: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | FacturaCountOutputTypeCountItemsArgs
    logs?: boolean | FacturaCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaItemWhereInput
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HKALogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Configuracion
   */

  export type AggregateConfiguracion = {
    _count: ConfiguracionCountAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  export type ConfiguracionMinAggregateOutputType = {
    id: string | null
    nombre_empresa: string | null
    ruc: string | null
    razon_social: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    codigo_sucursal: string | null
    punto_facturacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionMaxAggregateOutputType = {
    id: string | null
    nombre_empresa: string | null
    ruc: string | null
    razon_social: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    codigo_sucursal: string | null
    punto_facturacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfiguracionCountAggregateOutputType = {
    id: number
    nombre_empresa: number
    ruc: number
    razon_social: number
    direccion: number
    telefono: number
    email: number
    codigo_sucursal: number
    punto_facturacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracionMinAggregateInputType = {
    id?: true
    nombre_empresa?: true
    ruc?: true
    razon_social?: true
    direccion?: true
    telefono?: true
    email?: true
    codigo_sucursal?: true
    punto_facturacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionMaxAggregateInputType = {
    id?: true
    nombre_empresa?: true
    ruc?: true
    razon_social?: true
    direccion?: true
    telefono?: true
    email?: true
    codigo_sucursal?: true
    punto_facturacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfiguracionCountAggregateInputType = {
    id?: true
    nombre_empresa?: true
    ruc?: true
    razon_social?: true
    direccion?: true
    telefono?: true
    email?: true
    codigo_sucursal?: true
    punto_facturacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracion to aggregate.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracions
    **/
    _count?: true | ConfiguracionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type GetConfiguracionAggregateType<T extends ConfiguracionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion[P]>
      : GetScalarType<T[P], AggregateConfiguracion[P]>
  }




  export type ConfiguracionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracionWhereInput
    orderBy?: ConfiguracionOrderByWithAggregationInput | ConfiguracionOrderByWithAggregationInput[]
    by: ConfiguracionScalarFieldEnum[] | ConfiguracionScalarFieldEnum
    having?: ConfiguracionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionCountAggregateInputType | true
    _min?: ConfiguracionMinAggregateInputType
    _max?: ConfiguracionMaxAggregateInputType
  }

  export type ConfiguracionGroupByOutputType = {
    id: string
    nombre_empresa: string
    ruc: string
    razon_social: string
    direccion: string | null
    telefono: string | null
    email: string | null
    codigo_sucursal: string
    punto_facturacion: string
    createdAt: Date
    updatedAt: Date
    _count: ConfiguracionCountAggregateOutputType | null
    _min: ConfiguracionMinAggregateOutputType | null
    _max: ConfiguracionMaxAggregateOutputType | null
  }

  type GetConfiguracionGroupByPayload<T extends ConfiguracionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_empresa?: boolean
    ruc?: boolean
    razon_social?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    codigo_sucursal?: boolean
    punto_facturacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracion"]>

  export type ConfiguracionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_empresa?: boolean
    ruc?: boolean
    razon_social?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    codigo_sucursal?: boolean
    punto_facturacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracion"]>

  export type ConfiguracionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_empresa?: boolean
    ruc?: boolean
    razon_social?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    codigo_sucursal?: boolean
    punto_facturacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracion"]>

  export type ConfiguracionSelectScalar = {
    id?: boolean
    nombre_empresa?: boolean
    ruc?: boolean
    razon_social?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    codigo_sucursal?: boolean
    punto_facturacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre_empresa" | "ruc" | "razon_social" | "direccion" | "telefono" | "email" | "codigo_sucursal" | "punto_facturacion" | "createdAt" | "updatedAt", ExtArgs["result"]["configuracion"]>

  export type $ConfiguracionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre_empresa: string
      ruc: string
      razon_social: string
      direccion: string | null
      telefono: string | null
      email: string | null
      codigo_sucursal: string
      punto_facturacion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuracion"]>
    composites: {}
  }

  type ConfiguracionGetPayload<S extends boolean | null | undefined | ConfiguracionDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracionPayload, S>

  type ConfiguracionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionCountAggregateInputType | true
    }

  export interface ConfiguracionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracion'], meta: { name: 'Configuracion' } }
    /**
     * Find zero or one Configuracion that matches the filter.
     * @param {ConfiguracionFindUniqueArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracionFindUniqueArgs>(args: SelectSubset<T, ConfiguracionFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracionFindUniqueOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindFirstArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracionFindFirstArgs>(args?: SelectSubset<T, ConfiguracionFindFirstArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindFirstOrThrowArgs} args - Arguments to find a Configuracion
     * @example
     * // Get one Configuracion
     * const configuracion = await prisma.configuracion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracions
     * const configuracions = await prisma.configuracion.findMany()
     * 
     * // Get first 10 Configuracions
     * const configuracions = await prisma.configuracion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracionFindManyArgs>(args?: SelectSubset<T, ConfiguracionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracion.
     * @param {ConfiguracionCreateArgs} args - Arguments to create a Configuracion.
     * @example
     * // Create one Configuracion
     * const Configuracion = await prisma.configuracion.create({
     *   data: {
     *     // ... data to create a Configuracion
     *   }
     * })
     * 
     */
    create<T extends ConfiguracionCreateArgs>(args: SelectSubset<T, ConfiguracionCreateArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracions.
     * @param {ConfiguracionCreateManyArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracionCreateManyArgs>(args?: SelectSubset<T, ConfiguracionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracions and returns the data saved in the database.
     * @param {ConfiguracionCreateManyAndReturnArgs} args - Arguments to create many Configuracions.
     * @example
     * // Create many Configuracions
     * const configuracion = await prisma.configuracion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracions and only return the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracion.
     * @param {ConfiguracionDeleteArgs} args - Arguments to delete one Configuracion.
     * @example
     * // Delete one Configuracion
     * const Configuracion = await prisma.configuracion.delete({
     *   where: {
     *     // ... filter to delete one Configuracion
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracionDeleteArgs>(args: SelectSubset<T, ConfiguracionDeleteArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracion.
     * @param {ConfiguracionUpdateArgs} args - Arguments to update one Configuracion.
     * @example
     * // Update one Configuracion
     * const configuracion = await prisma.configuracion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracionUpdateArgs>(args: SelectSubset<T, ConfiguracionUpdateArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracions.
     * @param {ConfiguracionDeleteManyArgs} args - Arguments to filter Configuracions to delete.
     * @example
     * // Delete a few Configuracions
     * const { count } = await prisma.configuracion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracionDeleteManyArgs>(args?: SelectSubset<T, ConfiguracionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracionUpdateManyArgs>(args: SelectSubset<T, ConfiguracionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracions and returns the data updated in the database.
     * @param {ConfiguracionUpdateManyAndReturnArgs} args - Arguments to update many Configuracions.
     * @example
     * // Update many Configuracions
     * const configuracion = await prisma.configuracion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracions and only return the `id`
     * const configuracionWithIdOnly = await prisma.configuracion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ConfiguracionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracion.
     * @param {ConfiguracionUpsertArgs} args - Arguments to update or create a Configuracion.
     * @example
     * // Update or create a Configuracion
     * const configuracion = await prisma.configuracion.upsert({
     *   create: {
     *     // ... data to create a Configuracion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracionUpsertArgs>(args: SelectSubset<T, ConfiguracionUpsertArgs<ExtArgs>>): Prisma__ConfiguracionClient<$Result.GetResult<Prisma.$ConfiguracionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionCountArgs} args - Arguments to filter Configuracions to count.
     * @example
     * // Count the number of Configuracions
     * const count = await prisma.configuracion.count({
     *   where: {
     *     // ... the filter for the Configuracions we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracionCountArgs>(
      args?: Subset<T, ConfiguracionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionAggregateArgs>(args: Subset<T, ConfiguracionAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionAggregateType<T>>

    /**
     * Group by Configuracion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionGroupByArgs} args - Group by arguments.
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
      T extends ConfiguracionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracionGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfiguracionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracion model
   */
  readonly fields: ConfiguracionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Configuracion model
   */
  interface ConfiguracionFieldRefs {
    readonly id: FieldRef<"Configuracion", 'String'>
    readonly nombre_empresa: FieldRef<"Configuracion", 'String'>
    readonly ruc: FieldRef<"Configuracion", 'String'>
    readonly razon_social: FieldRef<"Configuracion", 'String'>
    readonly direccion: FieldRef<"Configuracion", 'String'>
    readonly telefono: FieldRef<"Configuracion", 'String'>
    readonly email: FieldRef<"Configuracion", 'String'>
    readonly codigo_sucursal: FieldRef<"Configuracion", 'String'>
    readonly punto_facturacion: FieldRef<"Configuracion", 'String'>
    readonly createdAt: FieldRef<"Configuracion", 'DateTime'>
    readonly updatedAt: FieldRef<"Configuracion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuracion findUnique
   */
  export type ConfiguracionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion findUniqueOrThrow
   */
  export type ConfiguracionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion findFirst
   */
  export type ConfiguracionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion findFirstOrThrow
   */
  export type ConfiguracionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which Configuracion to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracions.
     */
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion findMany
   */
  export type ConfiguracionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter, which Configuracions to fetch.
     */
    where?: ConfiguracionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracions to fetch.
     */
    orderBy?: ConfiguracionOrderByWithRelationInput | ConfiguracionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracions.
     */
    cursor?: ConfiguracionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracions.
     */
    skip?: number
    distinct?: ConfiguracionScalarFieldEnum | ConfiguracionScalarFieldEnum[]
  }

  /**
   * Configuracion create
   */
  export type ConfiguracionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * The data needed to create a Configuracion.
     */
    data: XOR<ConfiguracionCreateInput, ConfiguracionUncheckedCreateInput>
  }

  /**
   * Configuracion createMany
   */
  export type ConfiguracionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracions.
     */
    data: ConfiguracionCreateManyInput | ConfiguracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracion createManyAndReturn
   */
  export type ConfiguracionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * The data used to create many Configuracions.
     */
    data: ConfiguracionCreateManyInput | ConfiguracionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracion update
   */
  export type ConfiguracionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * The data needed to update a Configuracion.
     */
    data: XOR<ConfiguracionUpdateInput, ConfiguracionUncheckedUpdateInput>
    /**
     * Choose, which Configuracion to update.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion updateMany
   */
  export type ConfiguracionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracions.
     */
    data: XOR<ConfiguracionUpdateManyMutationInput, ConfiguracionUncheckedUpdateManyInput>
    /**
     * Filter which Configuracions to update
     */
    where?: ConfiguracionWhereInput
    /**
     * Limit how many Configuracions to update.
     */
    limit?: number
  }

  /**
   * Configuracion updateManyAndReturn
   */
  export type ConfiguracionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * The data used to update Configuracions.
     */
    data: XOR<ConfiguracionUpdateManyMutationInput, ConfiguracionUncheckedUpdateManyInput>
    /**
     * Filter which Configuracions to update
     */
    where?: ConfiguracionWhereInput
    /**
     * Limit how many Configuracions to update.
     */
    limit?: number
  }

  /**
   * Configuracion upsert
   */
  export type ConfiguracionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * The filter to search for the Configuracion to update in case it exists.
     */
    where: ConfiguracionWhereUniqueInput
    /**
     * In case the Configuracion found by the `where` argument doesn't exist, create a new Configuracion with this data.
     */
    create: XOR<ConfiguracionCreateInput, ConfiguracionUncheckedCreateInput>
    /**
     * In case the Configuracion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracionUpdateInput, ConfiguracionUncheckedUpdateInput>
  }

  /**
   * Configuracion delete
   */
  export type ConfiguracionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
    /**
     * Filter which Configuracion to delete.
     */
    where: ConfiguracionWhereUniqueInput
  }

  /**
   * Configuracion deleteMany
   */
  export type ConfiguracionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracions to delete
     */
    where?: ConfiguracionWhereInput
    /**
     * Limit how many Configuracions to delete.
     */
    limit?: number
  }

  /**
   * Configuracion without action
   */
  export type ConfiguracionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracion
     */
    select?: ConfiguracionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracion
     */
    omit?: ConfiguracionOmit<ExtArgs> | null
  }


  /**
   * Model ConexionHKA
   */

  export type AggregateConexionHKA = {
    _count: ConexionHKACountAggregateOutputType | null
    _min: ConexionHKAMinAggregateOutputType | null
    _max: ConexionHKAMaxAggregateOutputType | null
  }

  export type ConexionHKAMinAggregateOutputType = {
    id: string | null
    ambiente: string | null
    token_empresa: string | null
    token_password: string | null
    url_base: string | null
    activo: boolean | null
    fecha_activacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConexionHKAMaxAggregateOutputType = {
    id: string | null
    ambiente: string | null
    token_empresa: string | null
    token_password: string | null
    url_base: string | null
    activo: boolean | null
    fecha_activacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConexionHKACountAggregateOutputType = {
    id: number
    ambiente: number
    token_empresa: number
    token_password: number
    url_base: number
    activo: number
    fecha_activacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConexionHKAMinAggregateInputType = {
    id?: true
    ambiente?: true
    token_empresa?: true
    token_password?: true
    url_base?: true
    activo?: true
    fecha_activacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConexionHKAMaxAggregateInputType = {
    id?: true
    ambiente?: true
    token_empresa?: true
    token_password?: true
    url_base?: true
    activo?: true
    fecha_activacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConexionHKACountAggregateInputType = {
    id?: true
    ambiente?: true
    token_empresa?: true
    token_password?: true
    url_base?: true
    activo?: true
    fecha_activacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConexionHKAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConexionHKA to aggregate.
     */
    where?: ConexionHKAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConexionHKAS to fetch.
     */
    orderBy?: ConexionHKAOrderByWithRelationInput | ConexionHKAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConexionHKAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConexionHKAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConexionHKAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConexionHKAS
    **/
    _count?: true | ConexionHKACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConexionHKAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConexionHKAMaxAggregateInputType
  }

  export type GetConexionHKAAggregateType<T extends ConexionHKAAggregateArgs> = {
        [P in keyof T & keyof AggregateConexionHKA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConexionHKA[P]>
      : GetScalarType<T[P], AggregateConexionHKA[P]>
  }




  export type ConexionHKAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConexionHKAWhereInput
    orderBy?: ConexionHKAOrderByWithAggregationInput | ConexionHKAOrderByWithAggregationInput[]
    by: ConexionHKAScalarFieldEnum[] | ConexionHKAScalarFieldEnum
    having?: ConexionHKAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConexionHKACountAggregateInputType | true
    _min?: ConexionHKAMinAggregateInputType
    _max?: ConexionHKAMaxAggregateInputType
  }

  export type ConexionHKAGroupByOutputType = {
    id: string
    ambiente: string
    token_empresa: string
    token_password: string
    url_base: string
    activo: boolean
    fecha_activacion: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ConexionHKACountAggregateOutputType | null
    _min: ConexionHKAMinAggregateOutputType | null
    _max: ConexionHKAMaxAggregateOutputType | null
  }

  type GetConexionHKAGroupByPayload<T extends ConexionHKAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConexionHKAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConexionHKAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConexionHKAGroupByOutputType[P]>
            : GetScalarType<T[P], ConexionHKAGroupByOutputType[P]>
        }
      >
    >


  export type ConexionHKASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ambiente?: boolean
    token_empresa?: boolean
    token_password?: boolean
    url_base?: boolean
    activo?: boolean
    fecha_activacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conexionHKA"]>

  export type ConexionHKASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ambiente?: boolean
    token_empresa?: boolean
    token_password?: boolean
    url_base?: boolean
    activo?: boolean
    fecha_activacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conexionHKA"]>

  export type ConexionHKASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ambiente?: boolean
    token_empresa?: boolean
    token_password?: boolean
    url_base?: boolean
    activo?: boolean
    fecha_activacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conexionHKA"]>

  export type ConexionHKASelectScalar = {
    id?: boolean
    ambiente?: boolean
    token_empresa?: boolean
    token_password?: boolean
    url_base?: boolean
    activo?: boolean
    fecha_activacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConexionHKAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ambiente" | "token_empresa" | "token_password" | "url_base" | "activo" | "fecha_activacion" | "createdAt" | "updatedAt", ExtArgs["result"]["conexionHKA"]>

  export type $ConexionHKAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConexionHKA"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ambiente: string
      token_empresa: string
      token_password: string
      url_base: string
      activo: boolean
      fecha_activacion: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conexionHKA"]>
    composites: {}
  }

  type ConexionHKAGetPayload<S extends boolean | null | undefined | ConexionHKADefaultArgs> = $Result.GetResult<Prisma.$ConexionHKAPayload, S>

  type ConexionHKACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConexionHKAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConexionHKACountAggregateInputType | true
    }

  export interface ConexionHKADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConexionHKA'], meta: { name: 'ConexionHKA' } }
    /**
     * Find zero or one ConexionHKA that matches the filter.
     * @param {ConexionHKAFindUniqueArgs} args - Arguments to find a ConexionHKA
     * @example
     * // Get one ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConexionHKAFindUniqueArgs>(args: SelectSubset<T, ConexionHKAFindUniqueArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConexionHKA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConexionHKAFindUniqueOrThrowArgs} args - Arguments to find a ConexionHKA
     * @example
     * // Get one ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConexionHKAFindUniqueOrThrowArgs>(args: SelectSubset<T, ConexionHKAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConexionHKA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAFindFirstArgs} args - Arguments to find a ConexionHKA
     * @example
     * // Get one ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConexionHKAFindFirstArgs>(args?: SelectSubset<T, ConexionHKAFindFirstArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConexionHKA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAFindFirstOrThrowArgs} args - Arguments to find a ConexionHKA
     * @example
     * // Get one ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConexionHKAFindFirstOrThrowArgs>(args?: SelectSubset<T, ConexionHKAFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConexionHKAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConexionHKAS
     * const conexionHKAS = await prisma.conexionHKA.findMany()
     * 
     * // Get first 10 ConexionHKAS
     * const conexionHKAS = await prisma.conexionHKA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conexionHKAWithIdOnly = await prisma.conexionHKA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConexionHKAFindManyArgs>(args?: SelectSubset<T, ConexionHKAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConexionHKA.
     * @param {ConexionHKACreateArgs} args - Arguments to create a ConexionHKA.
     * @example
     * // Create one ConexionHKA
     * const ConexionHKA = await prisma.conexionHKA.create({
     *   data: {
     *     // ... data to create a ConexionHKA
     *   }
     * })
     * 
     */
    create<T extends ConexionHKACreateArgs>(args: SelectSubset<T, ConexionHKACreateArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConexionHKAS.
     * @param {ConexionHKACreateManyArgs} args - Arguments to create many ConexionHKAS.
     * @example
     * // Create many ConexionHKAS
     * const conexionHKA = await prisma.conexionHKA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConexionHKACreateManyArgs>(args?: SelectSubset<T, ConexionHKACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConexionHKAS and returns the data saved in the database.
     * @param {ConexionHKACreateManyAndReturnArgs} args - Arguments to create many ConexionHKAS.
     * @example
     * // Create many ConexionHKAS
     * const conexionHKA = await prisma.conexionHKA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConexionHKAS and only return the `id`
     * const conexionHKAWithIdOnly = await prisma.conexionHKA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConexionHKACreateManyAndReturnArgs>(args?: SelectSubset<T, ConexionHKACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConexionHKA.
     * @param {ConexionHKADeleteArgs} args - Arguments to delete one ConexionHKA.
     * @example
     * // Delete one ConexionHKA
     * const ConexionHKA = await prisma.conexionHKA.delete({
     *   where: {
     *     // ... filter to delete one ConexionHKA
     *   }
     * })
     * 
     */
    delete<T extends ConexionHKADeleteArgs>(args: SelectSubset<T, ConexionHKADeleteArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConexionHKA.
     * @param {ConexionHKAUpdateArgs} args - Arguments to update one ConexionHKA.
     * @example
     * // Update one ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConexionHKAUpdateArgs>(args: SelectSubset<T, ConexionHKAUpdateArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConexionHKAS.
     * @param {ConexionHKADeleteManyArgs} args - Arguments to filter ConexionHKAS to delete.
     * @example
     * // Delete a few ConexionHKAS
     * const { count } = await prisma.conexionHKA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConexionHKADeleteManyArgs>(args?: SelectSubset<T, ConexionHKADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConexionHKAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConexionHKAS
     * const conexionHKA = await prisma.conexionHKA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConexionHKAUpdateManyArgs>(args: SelectSubset<T, ConexionHKAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConexionHKAS and returns the data updated in the database.
     * @param {ConexionHKAUpdateManyAndReturnArgs} args - Arguments to update many ConexionHKAS.
     * @example
     * // Update many ConexionHKAS
     * const conexionHKA = await prisma.conexionHKA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConexionHKAS and only return the `id`
     * const conexionHKAWithIdOnly = await prisma.conexionHKA.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ConexionHKAUpdateManyAndReturnArgs>(args: SelectSubset<T, ConexionHKAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConexionHKA.
     * @param {ConexionHKAUpsertArgs} args - Arguments to update or create a ConexionHKA.
     * @example
     * // Update or create a ConexionHKA
     * const conexionHKA = await prisma.conexionHKA.upsert({
     *   create: {
     *     // ... data to create a ConexionHKA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConexionHKA we want to update
     *   }
     * })
     */
    upsert<T extends ConexionHKAUpsertArgs>(args: SelectSubset<T, ConexionHKAUpsertArgs<ExtArgs>>): Prisma__ConexionHKAClient<$Result.GetResult<Prisma.$ConexionHKAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConexionHKAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKACountArgs} args - Arguments to filter ConexionHKAS to count.
     * @example
     * // Count the number of ConexionHKAS
     * const count = await prisma.conexionHKA.count({
     *   where: {
     *     // ... the filter for the ConexionHKAS we want to count
     *   }
     * })
    **/
    count<T extends ConexionHKACountArgs>(
      args?: Subset<T, ConexionHKACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConexionHKACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConexionHKA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConexionHKAAggregateArgs>(args: Subset<T, ConexionHKAAggregateArgs>): Prisma.PrismaPromise<GetConexionHKAAggregateType<T>>

    /**
     * Group by ConexionHKA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConexionHKAGroupByArgs} args - Group by arguments.
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
      T extends ConexionHKAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConexionHKAGroupByArgs['orderBy'] }
        : { orderBy?: ConexionHKAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConexionHKAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConexionHKAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConexionHKA model
   */
  readonly fields: ConexionHKAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConexionHKA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConexionHKAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ConexionHKA model
   */
  interface ConexionHKAFieldRefs {
    readonly id: FieldRef<"ConexionHKA", 'String'>
    readonly ambiente: FieldRef<"ConexionHKA", 'String'>
    readonly token_empresa: FieldRef<"ConexionHKA", 'String'>
    readonly token_password: FieldRef<"ConexionHKA", 'String'>
    readonly url_base: FieldRef<"ConexionHKA", 'String'>
    readonly activo: FieldRef<"ConexionHKA", 'Boolean'>
    readonly fecha_activacion: FieldRef<"ConexionHKA", 'DateTime'>
    readonly createdAt: FieldRef<"ConexionHKA", 'DateTime'>
    readonly updatedAt: FieldRef<"ConexionHKA", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConexionHKA findUnique
   */
  export type ConexionHKAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter, which ConexionHKA to fetch.
     */
    where: ConexionHKAWhereUniqueInput
  }

  /**
   * ConexionHKA findUniqueOrThrow
   */
  export type ConexionHKAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter, which ConexionHKA to fetch.
     */
    where: ConexionHKAWhereUniqueInput
  }

  /**
   * ConexionHKA findFirst
   */
  export type ConexionHKAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter, which ConexionHKA to fetch.
     */
    where?: ConexionHKAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConexionHKAS to fetch.
     */
    orderBy?: ConexionHKAOrderByWithRelationInput | ConexionHKAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConexionHKAS.
     */
    cursor?: ConexionHKAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConexionHKAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConexionHKAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConexionHKAS.
     */
    distinct?: ConexionHKAScalarFieldEnum | ConexionHKAScalarFieldEnum[]
  }

  /**
   * ConexionHKA findFirstOrThrow
   */
  export type ConexionHKAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter, which ConexionHKA to fetch.
     */
    where?: ConexionHKAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConexionHKAS to fetch.
     */
    orderBy?: ConexionHKAOrderByWithRelationInput | ConexionHKAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConexionHKAS.
     */
    cursor?: ConexionHKAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConexionHKAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConexionHKAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConexionHKAS.
     */
    distinct?: ConexionHKAScalarFieldEnum | ConexionHKAScalarFieldEnum[]
  }

  /**
   * ConexionHKA findMany
   */
  export type ConexionHKAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter, which ConexionHKAS to fetch.
     */
    where?: ConexionHKAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConexionHKAS to fetch.
     */
    orderBy?: ConexionHKAOrderByWithRelationInput | ConexionHKAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConexionHKAS.
     */
    cursor?: ConexionHKAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConexionHKAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConexionHKAS.
     */
    skip?: number
    distinct?: ConexionHKAScalarFieldEnum | ConexionHKAScalarFieldEnum[]
  }

  /**
   * ConexionHKA create
   */
  export type ConexionHKACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * The data needed to create a ConexionHKA.
     */
    data: XOR<ConexionHKACreateInput, ConexionHKAUncheckedCreateInput>
  }

  /**
   * ConexionHKA createMany
   */
  export type ConexionHKACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConexionHKAS.
     */
    data: ConexionHKACreateManyInput | ConexionHKACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConexionHKA createManyAndReturn
   */
  export type ConexionHKACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * The data used to create many ConexionHKAS.
     */
    data: ConexionHKACreateManyInput | ConexionHKACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConexionHKA update
   */
  export type ConexionHKAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * The data needed to update a ConexionHKA.
     */
    data: XOR<ConexionHKAUpdateInput, ConexionHKAUncheckedUpdateInput>
    /**
     * Choose, which ConexionHKA to update.
     */
    where: ConexionHKAWhereUniqueInput
  }

  /**
   * ConexionHKA updateMany
   */
  export type ConexionHKAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConexionHKAS.
     */
    data: XOR<ConexionHKAUpdateManyMutationInput, ConexionHKAUncheckedUpdateManyInput>
    /**
     * Filter which ConexionHKAS to update
     */
    where?: ConexionHKAWhereInput
    /**
     * Limit how many ConexionHKAS to update.
     */
    limit?: number
  }

  /**
   * ConexionHKA updateManyAndReturn
   */
  export type ConexionHKAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * The data used to update ConexionHKAS.
     */
    data: XOR<ConexionHKAUpdateManyMutationInput, ConexionHKAUncheckedUpdateManyInput>
    /**
     * Filter which ConexionHKAS to update
     */
    where?: ConexionHKAWhereInput
    /**
     * Limit how many ConexionHKAS to update.
     */
    limit?: number
  }

  /**
   * ConexionHKA upsert
   */
  export type ConexionHKAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * The filter to search for the ConexionHKA to update in case it exists.
     */
    where: ConexionHKAWhereUniqueInput
    /**
     * In case the ConexionHKA found by the `where` argument doesn't exist, create a new ConexionHKA with this data.
     */
    create: XOR<ConexionHKACreateInput, ConexionHKAUncheckedCreateInput>
    /**
     * In case the ConexionHKA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConexionHKAUpdateInput, ConexionHKAUncheckedUpdateInput>
  }

  /**
   * ConexionHKA delete
   */
  export type ConexionHKADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
    /**
     * Filter which ConexionHKA to delete.
     */
    where: ConexionHKAWhereUniqueInput
  }

  /**
   * ConexionHKA deleteMany
   */
  export type ConexionHKADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConexionHKAS to delete
     */
    where?: ConexionHKAWhereInput
    /**
     * Limit how many ConexionHKAS to delete.
     */
    limit?: number
  }

  /**
   * ConexionHKA without action
   */
  export type ConexionHKADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConexionHKA
     */
    select?: ConexionHKASelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConexionHKA
     */
    omit?: ConexionHKAOmit<ExtArgs> | null
  }


  /**
   * Model PuntoRecepcion
   */

  export type AggregatePuntoRecepcion = {
    _count: PuntoRecepcionCountAggregateOutputType | null
    _avg: PuntoRecepcionAvgAggregateOutputType | null
    _sum: PuntoRecepcionSumAggregateOutputType | null
    _min: PuntoRecepcionMinAggregateOutputType | null
    _max: PuntoRecepcionMaxAggregateOutputType | null
  }

  export type PuntoRecepcionAvgAggregateOutputType = {
    api_frecuencia: number | null
    db_port: number | null
    ftp_port: number | null
  }

  export type PuntoRecepcionSumAggregateOutputType = {
    api_frecuencia: number | null
    db_port: number | null
    ftp_port: number | null
  }

  export type PuntoRecepcionMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    metodo: string | null
    activo: boolean | null
    api_url: string | null
    api_method: string | null
    api_frecuencia: number | null
    db_tipo: string | null
    db_host: string | null
    db_port: number | null
    db_database: string | null
    db_usuario: string | null
    db_password: string | null
    db_tabla: string | null
    ftp_host: string | null
    ftp_port: number | null
    ftp_usuario: string | null
    ftp_password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PuntoRecepcionMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    metodo: string | null
    activo: boolean | null
    api_url: string | null
    api_method: string | null
    api_frecuencia: number | null
    db_tipo: string | null
    db_host: string | null
    db_port: number | null
    db_database: string | null
    db_usuario: string | null
    db_password: string | null
    db_tabla: string | null
    ftp_host: string | null
    ftp_port: number | null
    ftp_usuario: string | null
    ftp_password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PuntoRecepcionCountAggregateOutputType = {
    id: number
    nombre: number
    metodo: number
    activo: number
    api_url: number
    api_method: number
    api_headers: number
    api_frecuencia: number
    db_tipo: number
    db_host: number
    db_port: number
    db_database: number
    db_usuario: number
    db_password: number
    db_tabla: number
    ftp_host: number
    ftp_port: number
    ftp_usuario: number
    ftp_password: number
    mapeo_campos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PuntoRecepcionAvgAggregateInputType = {
    api_frecuencia?: true
    db_port?: true
    ftp_port?: true
  }

  export type PuntoRecepcionSumAggregateInputType = {
    api_frecuencia?: true
    db_port?: true
    ftp_port?: true
  }

  export type PuntoRecepcionMinAggregateInputType = {
    id?: true
    nombre?: true
    metodo?: true
    activo?: true
    api_url?: true
    api_method?: true
    api_frecuencia?: true
    db_tipo?: true
    db_host?: true
    db_port?: true
    db_database?: true
    db_usuario?: true
    db_password?: true
    db_tabla?: true
    ftp_host?: true
    ftp_port?: true
    ftp_usuario?: true
    ftp_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PuntoRecepcionMaxAggregateInputType = {
    id?: true
    nombre?: true
    metodo?: true
    activo?: true
    api_url?: true
    api_method?: true
    api_frecuencia?: true
    db_tipo?: true
    db_host?: true
    db_port?: true
    db_database?: true
    db_usuario?: true
    db_password?: true
    db_tabla?: true
    ftp_host?: true
    ftp_port?: true
    ftp_usuario?: true
    ftp_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PuntoRecepcionCountAggregateInputType = {
    id?: true
    nombre?: true
    metodo?: true
    activo?: true
    api_url?: true
    api_method?: true
    api_headers?: true
    api_frecuencia?: true
    db_tipo?: true
    db_host?: true
    db_port?: true
    db_database?: true
    db_usuario?: true
    db_password?: true
    db_tabla?: true
    ftp_host?: true
    ftp_port?: true
    ftp_usuario?: true
    ftp_password?: true
    mapeo_campos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PuntoRecepcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoRecepcion to aggregate.
     */
    where?: PuntoRecepcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoRecepcions to fetch.
     */
    orderBy?: PuntoRecepcionOrderByWithRelationInput | PuntoRecepcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuntoRecepcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoRecepcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoRecepcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PuntoRecepcions
    **/
    _count?: true | PuntoRecepcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuntoRecepcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuntoRecepcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuntoRecepcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuntoRecepcionMaxAggregateInputType
  }

  export type GetPuntoRecepcionAggregateType<T extends PuntoRecepcionAggregateArgs> = {
        [P in keyof T & keyof AggregatePuntoRecepcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuntoRecepcion[P]>
      : GetScalarType<T[P], AggregatePuntoRecepcion[P]>
  }




  export type PuntoRecepcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuntoRecepcionWhereInput
    orderBy?: PuntoRecepcionOrderByWithAggregationInput | PuntoRecepcionOrderByWithAggregationInput[]
    by: PuntoRecepcionScalarFieldEnum[] | PuntoRecepcionScalarFieldEnum
    having?: PuntoRecepcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuntoRecepcionCountAggregateInputType | true
    _avg?: PuntoRecepcionAvgAggregateInputType
    _sum?: PuntoRecepcionSumAggregateInputType
    _min?: PuntoRecepcionMinAggregateInputType
    _max?: PuntoRecepcionMaxAggregateInputType
  }

  export type PuntoRecepcionGroupByOutputType = {
    id: string
    nombre: string
    metodo: string
    activo: boolean
    api_url: string | null
    api_method: string | null
    api_headers: JsonValue | null
    api_frecuencia: number | null
    db_tipo: string | null
    db_host: string | null
    db_port: number | null
    db_database: string | null
    db_usuario: string | null
    db_password: string | null
    db_tabla: string | null
    ftp_host: string | null
    ftp_port: number | null
    ftp_usuario: string | null
    ftp_password: string | null
    mapeo_campos: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PuntoRecepcionCountAggregateOutputType | null
    _avg: PuntoRecepcionAvgAggregateOutputType | null
    _sum: PuntoRecepcionSumAggregateOutputType | null
    _min: PuntoRecepcionMinAggregateOutputType | null
    _max: PuntoRecepcionMaxAggregateOutputType | null
  }

  type GetPuntoRecepcionGroupByPayload<T extends PuntoRecepcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuntoRecepcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuntoRecepcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuntoRecepcionGroupByOutputType[P]>
            : GetScalarType<T[P], PuntoRecepcionGroupByOutputType[P]>
        }
      >
    >


  export type PuntoRecepcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    metodo?: boolean
    activo?: boolean
    api_url?: boolean
    api_method?: boolean
    api_headers?: boolean
    api_frecuencia?: boolean
    db_tipo?: boolean
    db_host?: boolean
    db_port?: boolean
    db_database?: boolean
    db_usuario?: boolean
    db_password?: boolean
    db_tabla?: boolean
    ftp_host?: boolean
    ftp_port?: boolean
    ftp_usuario?: boolean
    ftp_password?: boolean
    mapeo_campos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["puntoRecepcion"]>

  export type PuntoRecepcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    metodo?: boolean
    activo?: boolean
    api_url?: boolean
    api_method?: boolean
    api_headers?: boolean
    api_frecuencia?: boolean
    db_tipo?: boolean
    db_host?: boolean
    db_port?: boolean
    db_database?: boolean
    db_usuario?: boolean
    db_password?: boolean
    db_tabla?: boolean
    ftp_host?: boolean
    ftp_port?: boolean
    ftp_usuario?: boolean
    ftp_password?: boolean
    mapeo_campos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["puntoRecepcion"]>

  export type PuntoRecepcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    metodo?: boolean
    activo?: boolean
    api_url?: boolean
    api_method?: boolean
    api_headers?: boolean
    api_frecuencia?: boolean
    db_tipo?: boolean
    db_host?: boolean
    db_port?: boolean
    db_database?: boolean
    db_usuario?: boolean
    db_password?: boolean
    db_tabla?: boolean
    ftp_host?: boolean
    ftp_port?: boolean
    ftp_usuario?: boolean
    ftp_password?: boolean
    mapeo_campos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["puntoRecepcion"]>

  export type PuntoRecepcionSelectScalar = {
    id?: boolean
    nombre?: boolean
    metodo?: boolean
    activo?: boolean
    api_url?: boolean
    api_method?: boolean
    api_headers?: boolean
    api_frecuencia?: boolean
    db_tipo?: boolean
    db_host?: boolean
    db_port?: boolean
    db_database?: boolean
    db_usuario?: boolean
    db_password?: boolean
    db_tabla?: boolean
    ftp_host?: boolean
    ftp_port?: boolean
    ftp_usuario?: boolean
    ftp_password?: boolean
    mapeo_campos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PuntoRecepcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "metodo" | "activo" | "api_url" | "api_method" | "api_headers" | "api_frecuencia" | "db_tipo" | "db_host" | "db_port" | "db_database" | "db_usuario" | "db_password" | "db_tabla" | "ftp_host" | "ftp_port" | "ftp_usuario" | "ftp_password" | "mapeo_campos" | "createdAt" | "updatedAt", ExtArgs["result"]["puntoRecepcion"]>

  export type $PuntoRecepcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PuntoRecepcion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      metodo: string
      activo: boolean
      api_url: string | null
      api_method: string | null
      api_headers: Prisma.JsonValue | null
      api_frecuencia: number | null
      db_tipo: string | null
      db_host: string | null
      db_port: number | null
      db_database: string | null
      db_usuario: string | null
      db_password: string | null
      db_tabla: string | null
      ftp_host: string | null
      ftp_port: number | null
      ftp_usuario: string | null
      ftp_password: string | null
      mapeo_campos: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["puntoRecepcion"]>
    composites: {}
  }

  type PuntoRecepcionGetPayload<S extends boolean | null | undefined | PuntoRecepcionDefaultArgs> = $Result.GetResult<Prisma.$PuntoRecepcionPayload, S>

  type PuntoRecepcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PuntoRecepcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuntoRecepcionCountAggregateInputType | true
    }

  export interface PuntoRecepcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PuntoRecepcion'], meta: { name: 'PuntoRecepcion' } }
    /**
     * Find zero or one PuntoRecepcion that matches the filter.
     * @param {PuntoRecepcionFindUniqueArgs} args - Arguments to find a PuntoRecepcion
     * @example
     * // Get one PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuntoRecepcionFindUniqueArgs>(args: SelectSubset<T, PuntoRecepcionFindUniqueArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PuntoRecepcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PuntoRecepcionFindUniqueOrThrowArgs} args - Arguments to find a PuntoRecepcion
     * @example
     * // Get one PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuntoRecepcionFindUniqueOrThrowArgs>(args: SelectSubset<T, PuntoRecepcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoRecepcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionFindFirstArgs} args - Arguments to find a PuntoRecepcion
     * @example
     * // Get one PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuntoRecepcionFindFirstArgs>(args?: SelectSubset<T, PuntoRecepcionFindFirstArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoRecepcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionFindFirstOrThrowArgs} args - Arguments to find a PuntoRecepcion
     * @example
     * // Get one PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuntoRecepcionFindFirstOrThrowArgs>(args?: SelectSubset<T, PuntoRecepcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PuntoRecepcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PuntoRecepcions
     * const puntoRecepcions = await prisma.puntoRecepcion.findMany()
     * 
     * // Get first 10 PuntoRecepcions
     * const puntoRecepcions = await prisma.puntoRecepcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puntoRecepcionWithIdOnly = await prisma.puntoRecepcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PuntoRecepcionFindManyArgs>(args?: SelectSubset<T, PuntoRecepcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PuntoRecepcion.
     * @param {PuntoRecepcionCreateArgs} args - Arguments to create a PuntoRecepcion.
     * @example
     * // Create one PuntoRecepcion
     * const PuntoRecepcion = await prisma.puntoRecepcion.create({
     *   data: {
     *     // ... data to create a PuntoRecepcion
     *   }
     * })
     * 
     */
    create<T extends PuntoRecepcionCreateArgs>(args: SelectSubset<T, PuntoRecepcionCreateArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PuntoRecepcions.
     * @param {PuntoRecepcionCreateManyArgs} args - Arguments to create many PuntoRecepcions.
     * @example
     * // Create many PuntoRecepcions
     * const puntoRecepcion = await prisma.puntoRecepcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PuntoRecepcionCreateManyArgs>(args?: SelectSubset<T, PuntoRecepcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PuntoRecepcions and returns the data saved in the database.
     * @param {PuntoRecepcionCreateManyAndReturnArgs} args - Arguments to create many PuntoRecepcions.
     * @example
     * // Create many PuntoRecepcions
     * const puntoRecepcion = await prisma.puntoRecepcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PuntoRecepcions and only return the `id`
     * const puntoRecepcionWithIdOnly = await prisma.puntoRecepcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PuntoRecepcionCreateManyAndReturnArgs>(args?: SelectSubset<T, PuntoRecepcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PuntoRecepcion.
     * @param {PuntoRecepcionDeleteArgs} args - Arguments to delete one PuntoRecepcion.
     * @example
     * // Delete one PuntoRecepcion
     * const PuntoRecepcion = await prisma.puntoRecepcion.delete({
     *   where: {
     *     // ... filter to delete one PuntoRecepcion
     *   }
     * })
     * 
     */
    delete<T extends PuntoRecepcionDeleteArgs>(args: SelectSubset<T, PuntoRecepcionDeleteArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PuntoRecepcion.
     * @param {PuntoRecepcionUpdateArgs} args - Arguments to update one PuntoRecepcion.
     * @example
     * // Update one PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuntoRecepcionUpdateArgs>(args: SelectSubset<T, PuntoRecepcionUpdateArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PuntoRecepcions.
     * @param {PuntoRecepcionDeleteManyArgs} args - Arguments to filter PuntoRecepcions to delete.
     * @example
     * // Delete a few PuntoRecepcions
     * const { count } = await prisma.puntoRecepcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuntoRecepcionDeleteManyArgs>(args?: SelectSubset<T, PuntoRecepcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoRecepcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PuntoRecepcions
     * const puntoRecepcion = await prisma.puntoRecepcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuntoRecepcionUpdateManyArgs>(args: SelectSubset<T, PuntoRecepcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoRecepcions and returns the data updated in the database.
     * @param {PuntoRecepcionUpdateManyAndReturnArgs} args - Arguments to update many PuntoRecepcions.
     * @example
     * // Update many PuntoRecepcions
     * const puntoRecepcion = await prisma.puntoRecepcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PuntoRecepcions and only return the `id`
     * const puntoRecepcionWithIdOnly = await prisma.puntoRecepcion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PuntoRecepcionUpdateManyAndReturnArgs>(args: SelectSubset<T, PuntoRecepcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PuntoRecepcion.
     * @param {PuntoRecepcionUpsertArgs} args - Arguments to update or create a PuntoRecepcion.
     * @example
     * // Update or create a PuntoRecepcion
     * const puntoRecepcion = await prisma.puntoRecepcion.upsert({
     *   create: {
     *     // ... data to create a PuntoRecepcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PuntoRecepcion we want to update
     *   }
     * })
     */
    upsert<T extends PuntoRecepcionUpsertArgs>(args: SelectSubset<T, PuntoRecepcionUpsertArgs<ExtArgs>>): Prisma__PuntoRecepcionClient<$Result.GetResult<Prisma.$PuntoRecepcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PuntoRecepcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionCountArgs} args - Arguments to filter PuntoRecepcions to count.
     * @example
     * // Count the number of PuntoRecepcions
     * const count = await prisma.puntoRecepcion.count({
     *   where: {
     *     // ... the filter for the PuntoRecepcions we want to count
     *   }
     * })
    **/
    count<T extends PuntoRecepcionCountArgs>(
      args?: Subset<T, PuntoRecepcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuntoRecepcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PuntoRecepcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PuntoRecepcionAggregateArgs>(args: Subset<T, PuntoRecepcionAggregateArgs>): Prisma.PrismaPromise<GetPuntoRecepcionAggregateType<T>>

    /**
     * Group by PuntoRecepcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoRecepcionGroupByArgs} args - Group by arguments.
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
      T extends PuntoRecepcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuntoRecepcionGroupByArgs['orderBy'] }
        : { orderBy?: PuntoRecepcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PuntoRecepcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuntoRecepcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PuntoRecepcion model
   */
  readonly fields: PuntoRecepcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PuntoRecepcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuntoRecepcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PuntoRecepcion model
   */
  interface PuntoRecepcionFieldRefs {
    readonly id: FieldRef<"PuntoRecepcion", 'String'>
    readonly nombre: FieldRef<"PuntoRecepcion", 'String'>
    readonly metodo: FieldRef<"PuntoRecepcion", 'String'>
    readonly activo: FieldRef<"PuntoRecepcion", 'Boolean'>
    readonly api_url: FieldRef<"PuntoRecepcion", 'String'>
    readonly api_method: FieldRef<"PuntoRecepcion", 'String'>
    readonly api_headers: FieldRef<"PuntoRecepcion", 'Json'>
    readonly api_frecuencia: FieldRef<"PuntoRecepcion", 'Int'>
    readonly db_tipo: FieldRef<"PuntoRecepcion", 'String'>
    readonly db_host: FieldRef<"PuntoRecepcion", 'String'>
    readonly db_port: FieldRef<"PuntoRecepcion", 'Int'>
    readonly db_database: FieldRef<"PuntoRecepcion", 'String'>
    readonly db_usuario: FieldRef<"PuntoRecepcion", 'String'>
    readonly db_password: FieldRef<"PuntoRecepcion", 'String'>
    readonly db_tabla: FieldRef<"PuntoRecepcion", 'String'>
    readonly ftp_host: FieldRef<"PuntoRecepcion", 'String'>
    readonly ftp_port: FieldRef<"PuntoRecepcion", 'Int'>
    readonly ftp_usuario: FieldRef<"PuntoRecepcion", 'String'>
    readonly ftp_password: FieldRef<"PuntoRecepcion", 'String'>
    readonly mapeo_campos: FieldRef<"PuntoRecepcion", 'Json'>
    readonly createdAt: FieldRef<"PuntoRecepcion", 'DateTime'>
    readonly updatedAt: FieldRef<"PuntoRecepcion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PuntoRecepcion findUnique
   */
  export type PuntoRecepcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter, which PuntoRecepcion to fetch.
     */
    where: PuntoRecepcionWhereUniqueInput
  }

  /**
   * PuntoRecepcion findUniqueOrThrow
   */
  export type PuntoRecepcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter, which PuntoRecepcion to fetch.
     */
    where: PuntoRecepcionWhereUniqueInput
  }

  /**
   * PuntoRecepcion findFirst
   */
  export type PuntoRecepcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter, which PuntoRecepcion to fetch.
     */
    where?: PuntoRecepcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoRecepcions to fetch.
     */
    orderBy?: PuntoRecepcionOrderByWithRelationInput | PuntoRecepcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoRecepcions.
     */
    cursor?: PuntoRecepcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoRecepcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoRecepcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoRecepcions.
     */
    distinct?: PuntoRecepcionScalarFieldEnum | PuntoRecepcionScalarFieldEnum[]
  }

  /**
   * PuntoRecepcion findFirstOrThrow
   */
  export type PuntoRecepcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter, which PuntoRecepcion to fetch.
     */
    where?: PuntoRecepcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoRecepcions to fetch.
     */
    orderBy?: PuntoRecepcionOrderByWithRelationInput | PuntoRecepcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoRecepcions.
     */
    cursor?: PuntoRecepcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoRecepcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoRecepcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoRecepcions.
     */
    distinct?: PuntoRecepcionScalarFieldEnum | PuntoRecepcionScalarFieldEnum[]
  }

  /**
   * PuntoRecepcion findMany
   */
  export type PuntoRecepcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter, which PuntoRecepcions to fetch.
     */
    where?: PuntoRecepcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoRecepcions to fetch.
     */
    orderBy?: PuntoRecepcionOrderByWithRelationInput | PuntoRecepcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PuntoRecepcions.
     */
    cursor?: PuntoRecepcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoRecepcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoRecepcions.
     */
    skip?: number
    distinct?: PuntoRecepcionScalarFieldEnum | PuntoRecepcionScalarFieldEnum[]
  }

  /**
   * PuntoRecepcion create
   */
  export type PuntoRecepcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * The data needed to create a PuntoRecepcion.
     */
    data: XOR<PuntoRecepcionCreateInput, PuntoRecepcionUncheckedCreateInput>
  }

  /**
   * PuntoRecepcion createMany
   */
  export type PuntoRecepcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PuntoRecepcions.
     */
    data: PuntoRecepcionCreateManyInput | PuntoRecepcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoRecepcion createManyAndReturn
   */
  export type PuntoRecepcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * The data used to create many PuntoRecepcions.
     */
    data: PuntoRecepcionCreateManyInput | PuntoRecepcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PuntoRecepcion update
   */
  export type PuntoRecepcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * The data needed to update a PuntoRecepcion.
     */
    data: XOR<PuntoRecepcionUpdateInput, PuntoRecepcionUncheckedUpdateInput>
    /**
     * Choose, which PuntoRecepcion to update.
     */
    where: PuntoRecepcionWhereUniqueInput
  }

  /**
   * PuntoRecepcion updateMany
   */
  export type PuntoRecepcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PuntoRecepcions.
     */
    data: XOR<PuntoRecepcionUpdateManyMutationInput, PuntoRecepcionUncheckedUpdateManyInput>
    /**
     * Filter which PuntoRecepcions to update
     */
    where?: PuntoRecepcionWhereInput
    /**
     * Limit how many PuntoRecepcions to update.
     */
    limit?: number
  }

  /**
   * PuntoRecepcion updateManyAndReturn
   */
  export type PuntoRecepcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * The data used to update PuntoRecepcions.
     */
    data: XOR<PuntoRecepcionUpdateManyMutationInput, PuntoRecepcionUncheckedUpdateManyInput>
    /**
     * Filter which PuntoRecepcions to update
     */
    where?: PuntoRecepcionWhereInput
    /**
     * Limit how many PuntoRecepcions to update.
     */
    limit?: number
  }

  /**
   * PuntoRecepcion upsert
   */
  export type PuntoRecepcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * The filter to search for the PuntoRecepcion to update in case it exists.
     */
    where: PuntoRecepcionWhereUniqueInput
    /**
     * In case the PuntoRecepcion found by the `where` argument doesn't exist, create a new PuntoRecepcion with this data.
     */
    create: XOR<PuntoRecepcionCreateInput, PuntoRecepcionUncheckedCreateInput>
    /**
     * In case the PuntoRecepcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PuntoRecepcionUpdateInput, PuntoRecepcionUncheckedUpdateInput>
  }

  /**
   * PuntoRecepcion delete
   */
  export type PuntoRecepcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
    /**
     * Filter which PuntoRecepcion to delete.
     */
    where: PuntoRecepcionWhereUniqueInput
  }

  /**
   * PuntoRecepcion deleteMany
   */
  export type PuntoRecepcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoRecepcions to delete
     */
    where?: PuntoRecepcionWhereInput
    /**
     * Limit how many PuntoRecepcions to delete.
     */
    limit?: number
  }

  /**
   * PuntoRecepcion without action
   */
  export type PuntoRecepcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoRecepcion
     */
    select?: PuntoRecepcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoRecepcion
     */
    omit?: PuntoRecepcionOmit<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    total_neto: Decimal | null
    total_itbms: Decimal | null
    total_factura: Decimal | null
  }

  export type FacturaSumAggregateOutputType = {
    total_neto: Decimal | null
    total_itbms: Decimal | null
    total_factura: Decimal | null
  }

  export type FacturaMinAggregateOutputType = {
    id: string | null
    modo: string | null
    numero_factura: string | null
    punto_facturacion: string | null
    codigo_sucursal: string | null
    tipo_documento: string | null
    estado: string | null
    cufe: string | null
    cliente_tipo: string | null
    cliente_ruc: string | null
    cliente_nombre: string | null
    cliente_direccion: string | null
    cliente_email: string | null
    total_neto: Decimal | null
    total_itbms: Decimal | null
    total_factura: Decimal | null
    xml_firmado: string | null
    pdf_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: string | null
    modo: string | null
    numero_factura: string | null
    punto_facturacion: string | null
    codigo_sucursal: string | null
    tipo_documento: string | null
    estado: string | null
    cufe: string | null
    cliente_tipo: string | null
    cliente_ruc: string | null
    cliente_nombre: string | null
    cliente_direccion: string | null
    cliente_email: string | null
    total_neto: Decimal | null
    total_itbms: Decimal | null
    total_factura: Decimal | null
    xml_firmado: string | null
    pdf_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    modo: number
    numero_factura: number
    punto_facturacion: number
    codigo_sucursal: number
    tipo_documento: number
    estado: number
    cufe: number
    cliente_tipo: number
    cliente_ruc: number
    cliente_nombre: number
    cliente_direccion: number
    cliente_email: number
    total_neto: number
    total_itbms: number
    total_factura: number
    documento_original: number
    hka_response: number
    xml_firmado: number
    pdf_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    total_neto?: true
    total_itbms?: true
    total_factura?: true
  }

  export type FacturaSumAggregateInputType = {
    total_neto?: true
    total_itbms?: true
    total_factura?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    modo?: true
    numero_factura?: true
    punto_facturacion?: true
    codigo_sucursal?: true
    tipo_documento?: true
    estado?: true
    cufe?: true
    cliente_tipo?: true
    cliente_ruc?: true
    cliente_nombre?: true
    cliente_direccion?: true
    cliente_email?: true
    total_neto?: true
    total_itbms?: true
    total_factura?: true
    xml_firmado?: true
    pdf_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    modo?: true
    numero_factura?: true
    punto_facturacion?: true
    codigo_sucursal?: true
    tipo_documento?: true
    estado?: true
    cufe?: true
    cliente_tipo?: true
    cliente_ruc?: true
    cliente_nombre?: true
    cliente_direccion?: true
    cliente_email?: true
    total_neto?: true
    total_itbms?: true
    total_factura?: true
    xml_firmado?: true
    pdf_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    modo?: true
    numero_factura?: true
    punto_facturacion?: true
    codigo_sucursal?: true
    tipo_documento?: true
    estado?: true
    cufe?: true
    cliente_tipo?: true
    cliente_ruc?: true
    cliente_nombre?: true
    cliente_direccion?: true
    cliente_email?: true
    total_neto?: true
    total_itbms?: true
    total_factura?: true
    documento_original?: true
    hka_response?: true
    xml_firmado?: true
    pdf_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe: string | null
    cliente_tipo: string
    cliente_ruc: string | null
    cliente_nombre: string
    cliente_direccion: string | null
    cliente_email: string | null
    total_neto: Decimal
    total_itbms: Decimal
    total_factura: Decimal
    documento_original: JsonValue
    hka_response: JsonValue | null
    xml_firmado: string | null
    pdf_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modo?: boolean
    numero_factura?: boolean
    punto_facturacion?: boolean
    codigo_sucursal?: boolean
    tipo_documento?: boolean
    estado?: boolean
    cufe?: boolean
    cliente_tipo?: boolean
    cliente_ruc?: boolean
    cliente_nombre?: boolean
    cliente_direccion?: boolean
    cliente_email?: boolean
    total_neto?: boolean
    total_itbms?: boolean
    total_factura?: boolean
    documento_original?: boolean
    hka_response?: boolean
    xml_firmado?: boolean
    pdf_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Factura$itemsArgs<ExtArgs>
    logs?: boolean | Factura$logsArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modo?: boolean
    numero_factura?: boolean
    punto_facturacion?: boolean
    codigo_sucursal?: boolean
    tipo_documento?: boolean
    estado?: boolean
    cufe?: boolean
    cliente_tipo?: boolean
    cliente_ruc?: boolean
    cliente_nombre?: boolean
    cliente_direccion?: boolean
    cliente_email?: boolean
    total_neto?: boolean
    total_itbms?: boolean
    total_factura?: boolean
    documento_original?: boolean
    hka_response?: boolean
    xml_firmado?: boolean
    pdf_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modo?: boolean
    numero_factura?: boolean
    punto_facturacion?: boolean
    codigo_sucursal?: boolean
    tipo_documento?: boolean
    estado?: boolean
    cufe?: boolean
    cliente_tipo?: boolean
    cliente_ruc?: boolean
    cliente_nombre?: boolean
    cliente_direccion?: boolean
    cliente_email?: boolean
    total_neto?: boolean
    total_itbms?: boolean
    total_factura?: boolean
    documento_original?: boolean
    hka_response?: boolean
    xml_firmado?: boolean
    pdf_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id?: boolean
    modo?: boolean
    numero_factura?: boolean
    punto_facturacion?: boolean
    codigo_sucursal?: boolean
    tipo_documento?: boolean
    estado?: boolean
    cufe?: boolean
    cliente_tipo?: boolean
    cliente_ruc?: boolean
    cliente_nombre?: boolean
    cliente_direccion?: boolean
    cliente_email?: boolean
    total_neto?: boolean
    total_itbms?: boolean
    total_factura?: boolean
    documento_original?: boolean
    hka_response?: boolean
    xml_firmado?: boolean
    pdf_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modo" | "numero_factura" | "punto_facturacion" | "codigo_sucursal" | "tipo_documento" | "estado" | "cufe" | "cliente_tipo" | "cliente_ruc" | "cliente_nombre" | "cliente_direccion" | "cliente_email" | "total_neto" | "total_itbms" | "total_factura" | "documento_original" | "hka_response" | "xml_firmado" | "pdf_url" | "createdAt" | "updatedAt", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Factura$itemsArgs<ExtArgs>
    logs?: boolean | Factura$logsArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      items: Prisma.$FacturaItemPayload<ExtArgs>[]
      logs: Prisma.$HKALogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modo: string
      numero_factura: string
      punto_facturacion: string
      codigo_sucursal: string
      tipo_documento: string
      estado: string
      cufe: string | null
      cliente_tipo: string
      cliente_ruc: string | null
      cliente_nombre: string
      cliente_direccion: string | null
      cliente_email: string | null
      total_neto: Prisma.Decimal
      total_itbms: Prisma.Decimal
      total_factura: Prisma.Decimal
      documento_original: Prisma.JsonValue
      hka_response: Prisma.JsonValue | null
      xml_firmado: string | null
      pdf_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
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
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Factura$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Factura$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Factura$logsArgs<ExtArgs> = {}>(args?: Subset<T, Factura$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'String'>
    readonly modo: FieldRef<"Factura", 'String'>
    readonly numero_factura: FieldRef<"Factura", 'String'>
    readonly punto_facturacion: FieldRef<"Factura", 'String'>
    readonly codigo_sucursal: FieldRef<"Factura", 'String'>
    readonly tipo_documento: FieldRef<"Factura", 'String'>
    readonly estado: FieldRef<"Factura", 'String'>
    readonly cufe: FieldRef<"Factura", 'String'>
    readonly cliente_tipo: FieldRef<"Factura", 'String'>
    readonly cliente_ruc: FieldRef<"Factura", 'String'>
    readonly cliente_nombre: FieldRef<"Factura", 'String'>
    readonly cliente_direccion: FieldRef<"Factura", 'String'>
    readonly cliente_email: FieldRef<"Factura", 'String'>
    readonly total_neto: FieldRef<"Factura", 'Decimal'>
    readonly total_itbms: FieldRef<"Factura", 'Decimal'>
    readonly total_factura: FieldRef<"Factura", 'Decimal'>
    readonly documento_original: FieldRef<"Factura", 'Json'>
    readonly hka_response: FieldRef<"Factura", 'Json'>
    readonly xml_firmado: FieldRef<"Factura", 'String'>
    readonly pdf_url: FieldRef<"Factura", 'String'>
    readonly createdAt: FieldRef<"Factura", 'DateTime'>
    readonly updatedAt: FieldRef<"Factura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.items
   */
  export type Factura$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    where?: FacturaItemWhereInput
    orderBy?: FacturaItemOrderByWithRelationInput | FacturaItemOrderByWithRelationInput[]
    cursor?: FacturaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaItemScalarFieldEnum | FacturaItemScalarFieldEnum[]
  }

  /**
   * Factura.logs
   */
  export type Factura$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    where?: HKALogWhereInput
    orderBy?: HKALogOrderByWithRelationInput | HKALogOrderByWithRelationInput[]
    cursor?: HKALogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HKALogScalarFieldEnum | HKALogScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model FacturaItem
   */

  export type AggregateFacturaItem = {
    _count: FacturaItemCountAggregateOutputType | null
    _avg: FacturaItemAvgAggregateOutputType | null
    _sum: FacturaItemSumAggregateOutputType | null
    _min: FacturaItemMinAggregateOutputType | null
    _max: FacturaItemMaxAggregateOutputType | null
  }

  export type FacturaItemAvgAggregateOutputType = {
    cantidad: Decimal | null
    precio_unitario: Decimal | null
    descuento: Decimal | null
    valor_itbms: Decimal | null
    total: Decimal | null
  }

  export type FacturaItemSumAggregateOutputType = {
    cantidad: Decimal | null
    precio_unitario: Decimal | null
    descuento: Decimal | null
    valor_itbms: Decimal | null
    total: Decimal | null
  }

  export type FacturaItemMinAggregateOutputType = {
    id: string | null
    factura_id: string | null
    codigo: string | null
    descripcion: string | null
    cantidad: Decimal | null
    unidad_medida: string | null
    precio_unitario: Decimal | null
    descuento: Decimal | null
    tasa_itbms: string | null
    valor_itbms: Decimal | null
    total: Decimal | null
    createdAt: Date | null
  }

  export type FacturaItemMaxAggregateOutputType = {
    id: string | null
    factura_id: string | null
    codigo: string | null
    descripcion: string | null
    cantidad: Decimal | null
    unidad_medida: string | null
    precio_unitario: Decimal | null
    descuento: Decimal | null
    tasa_itbms: string | null
    valor_itbms: Decimal | null
    total: Decimal | null
    createdAt: Date | null
  }

  export type FacturaItemCountAggregateOutputType = {
    id: number
    factura_id: number
    codigo: number
    descripcion: number
    cantidad: number
    unidad_medida: number
    precio_unitario: number
    descuento: number
    tasa_itbms: number
    valor_itbms: number
    total: number
    createdAt: number
    _all: number
  }


  export type FacturaItemAvgAggregateInputType = {
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    valor_itbms?: true
    total?: true
  }

  export type FacturaItemSumAggregateInputType = {
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    valor_itbms?: true
    total?: true
  }

  export type FacturaItemMinAggregateInputType = {
    id?: true
    factura_id?: true
    codigo?: true
    descripcion?: true
    cantidad?: true
    unidad_medida?: true
    precio_unitario?: true
    descuento?: true
    tasa_itbms?: true
    valor_itbms?: true
    total?: true
    createdAt?: true
  }

  export type FacturaItemMaxAggregateInputType = {
    id?: true
    factura_id?: true
    codigo?: true
    descripcion?: true
    cantidad?: true
    unidad_medida?: true
    precio_unitario?: true
    descuento?: true
    tasa_itbms?: true
    valor_itbms?: true
    total?: true
    createdAt?: true
  }

  export type FacturaItemCountAggregateInputType = {
    id?: true
    factura_id?: true
    codigo?: true
    descripcion?: true
    cantidad?: true
    unidad_medida?: true
    precio_unitario?: true
    descuento?: true
    tasa_itbms?: true
    valor_itbms?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type FacturaItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaItem to aggregate.
     */
    where?: FacturaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaItems to fetch.
     */
    orderBy?: FacturaItemOrderByWithRelationInput | FacturaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacturaItems
    **/
    _count?: true | FacturaItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaItemMaxAggregateInputType
  }

  export type GetFacturaItemAggregateType<T extends FacturaItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturaItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturaItem[P]>
      : GetScalarType<T[P], AggregateFacturaItem[P]>
  }




  export type FacturaItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaItemWhereInput
    orderBy?: FacturaItemOrderByWithAggregationInput | FacturaItemOrderByWithAggregationInput[]
    by: FacturaItemScalarFieldEnum[] | FacturaItemScalarFieldEnum
    having?: FacturaItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaItemCountAggregateInputType | true
    _avg?: FacturaItemAvgAggregateInputType
    _sum?: FacturaItemSumAggregateInputType
    _min?: FacturaItemMinAggregateInputType
    _max?: FacturaItemMaxAggregateInputType
  }

  export type FacturaItemGroupByOutputType = {
    id: string
    factura_id: string
    codigo: string
    descripcion: string
    cantidad: Decimal
    unidad_medida: string
    precio_unitario: Decimal
    descuento: Decimal
    tasa_itbms: string
    valor_itbms: Decimal
    total: Decimal
    createdAt: Date
    _count: FacturaItemCountAggregateOutputType | null
    _avg: FacturaItemAvgAggregateOutputType | null
    _sum: FacturaItemSumAggregateOutputType | null
    _min: FacturaItemMinAggregateOutputType | null
    _max: FacturaItemMaxAggregateOutputType | null
  }

  type GetFacturaItemGroupByPayload<T extends FacturaItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaItemGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaItemGroupByOutputType[P]>
        }
      >
    >


  export type FacturaItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad_medida?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    tasa_itbms?: boolean
    valor_itbms?: boolean
    total?: boolean
    createdAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaItem"]>

  export type FacturaItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad_medida?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    tasa_itbms?: boolean
    valor_itbms?: boolean
    total?: boolean
    createdAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaItem"]>

  export type FacturaItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad_medida?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    tasa_itbms?: boolean
    valor_itbms?: boolean
    total?: boolean
    createdAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaItem"]>

  export type FacturaItemSelectScalar = {
    id?: boolean
    factura_id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cantidad?: boolean
    unidad_medida?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    tasa_itbms?: boolean
    valor_itbms?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type FacturaItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "factura_id" | "codigo" | "descripcion" | "cantidad" | "unidad_medida" | "precio_unitario" | "descuento" | "tasa_itbms" | "valor_itbms" | "total" | "createdAt", ExtArgs["result"]["facturaItem"]>
  export type FacturaItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }
  export type FacturaItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }
  export type FacturaItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }

  export type $FacturaItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacturaItem"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      factura_id: string
      codigo: string
      descripcion: string
      cantidad: Prisma.Decimal
      unidad_medida: string
      precio_unitario: Prisma.Decimal
      descuento: Prisma.Decimal
      tasa_itbms: string
      valor_itbms: Prisma.Decimal
      total: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["facturaItem"]>
    composites: {}
  }

  type FacturaItemGetPayload<S extends boolean | null | undefined | FacturaItemDefaultArgs> = $Result.GetResult<Prisma.$FacturaItemPayload, S>

  type FacturaItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaItemCountAggregateInputType | true
    }

  export interface FacturaItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacturaItem'], meta: { name: 'FacturaItem' } }
    /**
     * Find zero or one FacturaItem that matches the filter.
     * @param {FacturaItemFindUniqueArgs} args - Arguments to find a FacturaItem
     * @example
     * // Get one FacturaItem
     * const facturaItem = await prisma.facturaItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaItemFindUniqueArgs>(args: SelectSubset<T, FacturaItemFindUniqueArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacturaItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaItemFindUniqueOrThrowArgs} args - Arguments to find a FacturaItem
     * @example
     * // Get one FacturaItem
     * const facturaItem = await prisma.facturaItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemFindFirstArgs} args - Arguments to find a FacturaItem
     * @example
     * // Get one FacturaItem
     * const facturaItem = await prisma.facturaItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaItemFindFirstArgs>(args?: SelectSubset<T, FacturaItemFindFirstArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemFindFirstOrThrowArgs} args - Arguments to find a FacturaItem
     * @example
     * // Get one FacturaItem
     * const facturaItem = await prisma.facturaItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacturaItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacturaItems
     * const facturaItems = await prisma.facturaItem.findMany()
     * 
     * // Get first 10 FacturaItems
     * const facturaItems = await prisma.facturaItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaItemWithIdOnly = await prisma.facturaItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaItemFindManyArgs>(args?: SelectSubset<T, FacturaItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacturaItem.
     * @param {FacturaItemCreateArgs} args - Arguments to create a FacturaItem.
     * @example
     * // Create one FacturaItem
     * const FacturaItem = await prisma.facturaItem.create({
     *   data: {
     *     // ... data to create a FacturaItem
     *   }
     * })
     * 
     */
    create<T extends FacturaItemCreateArgs>(args: SelectSubset<T, FacturaItemCreateArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacturaItems.
     * @param {FacturaItemCreateManyArgs} args - Arguments to create many FacturaItems.
     * @example
     * // Create many FacturaItems
     * const facturaItem = await prisma.facturaItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaItemCreateManyArgs>(args?: SelectSubset<T, FacturaItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacturaItems and returns the data saved in the database.
     * @param {FacturaItemCreateManyAndReturnArgs} args - Arguments to create many FacturaItems.
     * @example
     * // Create many FacturaItems
     * const facturaItem = await prisma.facturaItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacturaItems and only return the `id`
     * const facturaItemWithIdOnly = await prisma.facturaItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacturaItem.
     * @param {FacturaItemDeleteArgs} args - Arguments to delete one FacturaItem.
     * @example
     * // Delete one FacturaItem
     * const FacturaItem = await prisma.facturaItem.delete({
     *   where: {
     *     // ... filter to delete one FacturaItem
     *   }
     * })
     * 
     */
    delete<T extends FacturaItemDeleteArgs>(args: SelectSubset<T, FacturaItemDeleteArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacturaItem.
     * @param {FacturaItemUpdateArgs} args - Arguments to update one FacturaItem.
     * @example
     * // Update one FacturaItem
     * const facturaItem = await prisma.facturaItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaItemUpdateArgs>(args: SelectSubset<T, FacturaItemUpdateArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacturaItems.
     * @param {FacturaItemDeleteManyArgs} args - Arguments to filter FacturaItems to delete.
     * @example
     * // Delete a few FacturaItems
     * const { count } = await prisma.facturaItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaItemDeleteManyArgs>(args?: SelectSubset<T, FacturaItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacturaItems
     * const facturaItem = await prisma.facturaItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaItemUpdateManyArgs>(args: SelectSubset<T, FacturaItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaItems and returns the data updated in the database.
     * @param {FacturaItemUpdateManyAndReturnArgs} args - Arguments to update many FacturaItems.
     * @example
     * // Update many FacturaItems
     * const facturaItem = await prisma.facturaItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacturaItems and only return the `id`
     * const facturaItemWithIdOnly = await prisma.facturaItem.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FacturaItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacturaItem.
     * @param {FacturaItemUpsertArgs} args - Arguments to update or create a FacturaItem.
     * @example
     * // Update or create a FacturaItem
     * const facturaItem = await prisma.facturaItem.upsert({
     *   create: {
     *     // ... data to create a FacturaItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacturaItem we want to update
     *   }
     * })
     */
    upsert<T extends FacturaItemUpsertArgs>(args: SelectSubset<T, FacturaItemUpsertArgs<ExtArgs>>): Prisma__FacturaItemClient<$Result.GetResult<Prisma.$FacturaItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacturaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemCountArgs} args - Arguments to filter FacturaItems to count.
     * @example
     * // Count the number of FacturaItems
     * const count = await prisma.facturaItem.count({
     *   where: {
     *     // ... the filter for the FacturaItems we want to count
     *   }
     * })
    **/
    count<T extends FacturaItemCountArgs>(
      args?: Subset<T, FacturaItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacturaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaItemAggregateArgs>(args: Subset<T, FacturaItemAggregateArgs>): Prisma.PrismaPromise<GetFacturaItemAggregateType<T>>

    /**
     * Group by FacturaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaItemGroupByArgs} args - Group by arguments.
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
      T extends FacturaItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaItemGroupByArgs['orderBy'] }
        : { orderBy?: FacturaItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacturaItem model
   */
  readonly fields: FacturaItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacturaItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacturaItem model
   */
  interface FacturaItemFieldRefs {
    readonly id: FieldRef<"FacturaItem", 'String'>
    readonly factura_id: FieldRef<"FacturaItem", 'String'>
    readonly codigo: FieldRef<"FacturaItem", 'String'>
    readonly descripcion: FieldRef<"FacturaItem", 'String'>
    readonly cantidad: FieldRef<"FacturaItem", 'Decimal'>
    readonly unidad_medida: FieldRef<"FacturaItem", 'String'>
    readonly precio_unitario: FieldRef<"FacturaItem", 'Decimal'>
    readonly descuento: FieldRef<"FacturaItem", 'Decimal'>
    readonly tasa_itbms: FieldRef<"FacturaItem", 'String'>
    readonly valor_itbms: FieldRef<"FacturaItem", 'Decimal'>
    readonly total: FieldRef<"FacturaItem", 'Decimal'>
    readonly createdAt: FieldRef<"FacturaItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacturaItem findUnique
   */
  export type FacturaItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter, which FacturaItem to fetch.
     */
    where: FacturaItemWhereUniqueInput
  }

  /**
   * FacturaItem findUniqueOrThrow
   */
  export type FacturaItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter, which FacturaItem to fetch.
     */
    where: FacturaItemWhereUniqueInput
  }

  /**
   * FacturaItem findFirst
   */
  export type FacturaItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter, which FacturaItem to fetch.
     */
    where?: FacturaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaItems to fetch.
     */
    orderBy?: FacturaItemOrderByWithRelationInput | FacturaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaItems.
     */
    cursor?: FacturaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaItems.
     */
    distinct?: FacturaItemScalarFieldEnum | FacturaItemScalarFieldEnum[]
  }

  /**
   * FacturaItem findFirstOrThrow
   */
  export type FacturaItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter, which FacturaItem to fetch.
     */
    where?: FacturaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaItems to fetch.
     */
    orderBy?: FacturaItemOrderByWithRelationInput | FacturaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaItems.
     */
    cursor?: FacturaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaItems.
     */
    distinct?: FacturaItemScalarFieldEnum | FacturaItemScalarFieldEnum[]
  }

  /**
   * FacturaItem findMany
   */
  export type FacturaItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter, which FacturaItems to fetch.
     */
    where?: FacturaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaItems to fetch.
     */
    orderBy?: FacturaItemOrderByWithRelationInput | FacturaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacturaItems.
     */
    cursor?: FacturaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaItems.
     */
    skip?: number
    distinct?: FacturaItemScalarFieldEnum | FacturaItemScalarFieldEnum[]
  }

  /**
   * FacturaItem create
   */
  export type FacturaItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FacturaItem.
     */
    data: XOR<FacturaItemCreateInput, FacturaItemUncheckedCreateInput>
  }

  /**
   * FacturaItem createMany
   */
  export type FacturaItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacturaItems.
     */
    data: FacturaItemCreateManyInput | FacturaItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaItem createManyAndReturn
   */
  export type FacturaItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * The data used to create many FacturaItems.
     */
    data: FacturaItemCreateManyInput | FacturaItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacturaItem update
   */
  export type FacturaItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FacturaItem.
     */
    data: XOR<FacturaItemUpdateInput, FacturaItemUncheckedUpdateInput>
    /**
     * Choose, which FacturaItem to update.
     */
    where: FacturaItemWhereUniqueInput
  }

  /**
   * FacturaItem updateMany
   */
  export type FacturaItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacturaItems.
     */
    data: XOR<FacturaItemUpdateManyMutationInput, FacturaItemUncheckedUpdateManyInput>
    /**
     * Filter which FacturaItems to update
     */
    where?: FacturaItemWhereInput
    /**
     * Limit how many FacturaItems to update.
     */
    limit?: number
  }

  /**
   * FacturaItem updateManyAndReturn
   */
  export type FacturaItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * The data used to update FacturaItems.
     */
    data: XOR<FacturaItemUpdateManyMutationInput, FacturaItemUncheckedUpdateManyInput>
    /**
     * Filter which FacturaItems to update
     */
    where?: FacturaItemWhereInput
    /**
     * Limit how many FacturaItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacturaItem upsert
   */
  export type FacturaItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FacturaItem to update in case it exists.
     */
    where: FacturaItemWhereUniqueInput
    /**
     * In case the FacturaItem found by the `where` argument doesn't exist, create a new FacturaItem with this data.
     */
    create: XOR<FacturaItemCreateInput, FacturaItemUncheckedCreateInput>
    /**
     * In case the FacturaItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaItemUpdateInput, FacturaItemUncheckedUpdateInput>
  }

  /**
   * FacturaItem delete
   */
  export type FacturaItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
    /**
     * Filter which FacturaItem to delete.
     */
    where: FacturaItemWhereUniqueInput
  }

  /**
   * FacturaItem deleteMany
   */
  export type FacturaItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaItems to delete
     */
    where?: FacturaItemWhereInput
    /**
     * Limit how many FacturaItems to delete.
     */
    limit?: number
  }

  /**
   * FacturaItem without action
   */
  export type FacturaItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaItem
     */
    select?: FacturaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaItem
     */
    omit?: FacturaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaItemInclude<ExtArgs> | null
  }


  /**
   * Model HKALog
   */

  export type AggregateHKALog = {
    _count: HKALogCountAggregateOutputType | null
    _avg: HKALogAvgAggregateOutputType | null
    _sum: HKALogSumAggregateOutputType | null
    _min: HKALogMinAggregateOutputType | null
    _max: HKALogMaxAggregateOutputType | null
  }

  export type HKALogAvgAggregateOutputType = {
    status_code: number | null
  }

  export type HKALogSumAggregateOutputType = {
    status_code: number | null
  }

  export type HKALogMinAggregateOutputType = {
    id: string | null
    factura_id: string | null
    operacion: string | null
    request: string | null
    response: string | null
    status_code: number | null
    createdAt: Date | null
  }

  export type HKALogMaxAggregateOutputType = {
    id: string | null
    factura_id: string | null
    operacion: string | null
    request: string | null
    response: string | null
    status_code: number | null
    createdAt: Date | null
  }

  export type HKALogCountAggregateOutputType = {
    id: number
    factura_id: number
    operacion: number
    request: number
    response: number
    status_code: number
    createdAt: number
    _all: number
  }


  export type HKALogAvgAggregateInputType = {
    status_code?: true
  }

  export type HKALogSumAggregateInputType = {
    status_code?: true
  }

  export type HKALogMinAggregateInputType = {
    id?: true
    factura_id?: true
    operacion?: true
    request?: true
    response?: true
    status_code?: true
    createdAt?: true
  }

  export type HKALogMaxAggregateInputType = {
    id?: true
    factura_id?: true
    operacion?: true
    request?: true
    response?: true
    status_code?: true
    createdAt?: true
  }

  export type HKALogCountAggregateInputType = {
    id?: true
    factura_id?: true
    operacion?: true
    request?: true
    response?: true
    status_code?: true
    createdAt?: true
    _all?: true
  }

  export type HKALogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HKALog to aggregate.
     */
    where?: HKALogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HKALogs to fetch.
     */
    orderBy?: HKALogOrderByWithRelationInput | HKALogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HKALogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HKALogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HKALogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HKALogs
    **/
    _count?: true | HKALogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HKALogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HKALogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HKALogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HKALogMaxAggregateInputType
  }

  export type GetHKALogAggregateType<T extends HKALogAggregateArgs> = {
        [P in keyof T & keyof AggregateHKALog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHKALog[P]>
      : GetScalarType<T[P], AggregateHKALog[P]>
  }




  export type HKALogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HKALogWhereInput
    orderBy?: HKALogOrderByWithAggregationInput | HKALogOrderByWithAggregationInput[]
    by: HKALogScalarFieldEnum[] | HKALogScalarFieldEnum
    having?: HKALogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HKALogCountAggregateInputType | true
    _avg?: HKALogAvgAggregateInputType
    _sum?: HKALogSumAggregateInputType
    _min?: HKALogMinAggregateInputType
    _max?: HKALogMaxAggregateInputType
  }

  export type HKALogGroupByOutputType = {
    id: string
    factura_id: string | null
    operacion: string
    request: string
    response: string
    status_code: number | null
    createdAt: Date
    _count: HKALogCountAggregateOutputType | null
    _avg: HKALogAvgAggregateOutputType | null
    _sum: HKALogSumAggregateOutputType | null
    _min: HKALogMinAggregateOutputType | null
    _max: HKALogMaxAggregateOutputType | null
  }

  type GetHKALogGroupByPayload<T extends HKALogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HKALogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HKALogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HKALogGroupByOutputType[P]>
            : GetScalarType<T[P], HKALogGroupByOutputType[P]>
        }
      >
    >


  export type HKALogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    operacion?: boolean
    request?: boolean
    response?: boolean
    status_code?: boolean
    createdAt?: boolean
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }, ExtArgs["result"]["hKALog"]>

  export type HKALogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    operacion?: boolean
    request?: boolean
    response?: boolean
    status_code?: boolean
    createdAt?: boolean
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }, ExtArgs["result"]["hKALog"]>

  export type HKALogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura_id?: boolean
    operacion?: boolean
    request?: boolean
    response?: boolean
    status_code?: boolean
    createdAt?: boolean
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }, ExtArgs["result"]["hKALog"]>

  export type HKALogSelectScalar = {
    id?: boolean
    factura_id?: boolean
    operacion?: boolean
    request?: boolean
    response?: boolean
    status_code?: boolean
    createdAt?: boolean
  }

  export type HKALogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "factura_id" | "operacion" | "request" | "response" | "status_code" | "createdAt", ExtArgs["result"]["hKALog"]>
  export type HKALogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }
  export type HKALogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }
  export type HKALogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | HKALog$facturaArgs<ExtArgs>
  }

  export type $HKALogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HKALog"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      factura_id: string | null
      operacion: string
      request: string
      response: string
      status_code: number | null
      createdAt: Date
    }, ExtArgs["result"]["hKALog"]>
    composites: {}
  }

  type HKALogGetPayload<S extends boolean | null | undefined | HKALogDefaultArgs> = $Result.GetResult<Prisma.$HKALogPayload, S>

  type HKALogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HKALogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HKALogCountAggregateInputType | true
    }

  export interface HKALogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HKALog'], meta: { name: 'HKALog' } }
    /**
     * Find zero or one HKALog that matches the filter.
     * @param {HKALogFindUniqueArgs} args - Arguments to find a HKALog
     * @example
     * // Get one HKALog
     * const hKALog = await prisma.hKALog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HKALogFindUniqueArgs>(args: SelectSubset<T, HKALogFindUniqueArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HKALog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HKALogFindUniqueOrThrowArgs} args - Arguments to find a HKALog
     * @example
     * // Get one HKALog
     * const hKALog = await prisma.hKALog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HKALogFindUniqueOrThrowArgs>(args: SelectSubset<T, HKALogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HKALog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogFindFirstArgs} args - Arguments to find a HKALog
     * @example
     * // Get one HKALog
     * const hKALog = await prisma.hKALog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HKALogFindFirstArgs>(args?: SelectSubset<T, HKALogFindFirstArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HKALog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogFindFirstOrThrowArgs} args - Arguments to find a HKALog
     * @example
     * // Get one HKALog
     * const hKALog = await prisma.hKALog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HKALogFindFirstOrThrowArgs>(args?: SelectSubset<T, HKALogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HKALogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HKALogs
     * const hKALogs = await prisma.hKALog.findMany()
     * 
     * // Get first 10 HKALogs
     * const hKALogs = await prisma.hKALog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hKALogWithIdOnly = await prisma.hKALog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HKALogFindManyArgs>(args?: SelectSubset<T, HKALogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HKALog.
     * @param {HKALogCreateArgs} args - Arguments to create a HKALog.
     * @example
     * // Create one HKALog
     * const HKALog = await prisma.hKALog.create({
     *   data: {
     *     // ... data to create a HKALog
     *   }
     * })
     * 
     */
    create<T extends HKALogCreateArgs>(args: SelectSubset<T, HKALogCreateArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HKALogs.
     * @param {HKALogCreateManyArgs} args - Arguments to create many HKALogs.
     * @example
     * // Create many HKALogs
     * const hKALog = await prisma.hKALog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HKALogCreateManyArgs>(args?: SelectSubset<T, HKALogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HKALogs and returns the data saved in the database.
     * @param {HKALogCreateManyAndReturnArgs} args - Arguments to create many HKALogs.
     * @example
     * // Create many HKALogs
     * const hKALog = await prisma.hKALog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HKALogs and only return the `id`
     * const hKALogWithIdOnly = await prisma.hKALog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HKALogCreateManyAndReturnArgs>(args?: SelectSubset<T, HKALogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HKALog.
     * @param {HKALogDeleteArgs} args - Arguments to delete one HKALog.
     * @example
     * // Delete one HKALog
     * const HKALog = await prisma.hKALog.delete({
     *   where: {
     *     // ... filter to delete one HKALog
     *   }
     * })
     * 
     */
    delete<T extends HKALogDeleteArgs>(args: SelectSubset<T, HKALogDeleteArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HKALog.
     * @param {HKALogUpdateArgs} args - Arguments to update one HKALog.
     * @example
     * // Update one HKALog
     * const hKALog = await prisma.hKALog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HKALogUpdateArgs>(args: SelectSubset<T, HKALogUpdateArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HKALogs.
     * @param {HKALogDeleteManyArgs} args - Arguments to filter HKALogs to delete.
     * @example
     * // Delete a few HKALogs
     * const { count } = await prisma.hKALog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HKALogDeleteManyArgs>(args?: SelectSubset<T, HKALogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HKALogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HKALogs
     * const hKALog = await prisma.hKALog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HKALogUpdateManyArgs>(args: SelectSubset<T, HKALogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HKALogs and returns the data updated in the database.
     * @param {HKALogUpdateManyAndReturnArgs} args - Arguments to update many HKALogs.
     * @example
     * // Update many HKALogs
     * const hKALog = await prisma.hKALog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HKALogs and only return the `id`
     * const hKALogWithIdOnly = await prisma.hKALog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends HKALogUpdateManyAndReturnArgs>(args: SelectSubset<T, HKALogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HKALog.
     * @param {HKALogUpsertArgs} args - Arguments to update or create a HKALog.
     * @example
     * // Update or create a HKALog
     * const hKALog = await prisma.hKALog.upsert({
     *   create: {
     *     // ... data to create a HKALog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HKALog we want to update
     *   }
     * })
     */
    upsert<T extends HKALogUpsertArgs>(args: SelectSubset<T, HKALogUpsertArgs<ExtArgs>>): Prisma__HKALogClient<$Result.GetResult<Prisma.$HKALogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HKALogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogCountArgs} args - Arguments to filter HKALogs to count.
     * @example
     * // Count the number of HKALogs
     * const count = await prisma.hKALog.count({
     *   where: {
     *     // ... the filter for the HKALogs we want to count
     *   }
     * })
    **/
    count<T extends HKALogCountArgs>(
      args?: Subset<T, HKALogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HKALogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HKALog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HKALogAggregateArgs>(args: Subset<T, HKALogAggregateArgs>): Prisma.PrismaPromise<GetHKALogAggregateType<T>>

    /**
     * Group by HKALog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HKALogGroupByArgs} args - Group by arguments.
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
      T extends HKALogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HKALogGroupByArgs['orderBy'] }
        : { orderBy?: HKALogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HKALogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHKALogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HKALog model
   */
  readonly fields: HKALogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HKALog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HKALogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends HKALog$facturaArgs<ExtArgs> = {}>(args?: Subset<T, HKALog$facturaArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HKALog model
   */
  interface HKALogFieldRefs {
    readonly id: FieldRef<"HKALog", 'String'>
    readonly factura_id: FieldRef<"HKALog", 'String'>
    readonly operacion: FieldRef<"HKALog", 'String'>
    readonly request: FieldRef<"HKALog", 'String'>
    readonly response: FieldRef<"HKALog", 'String'>
    readonly status_code: FieldRef<"HKALog", 'Int'>
    readonly createdAt: FieldRef<"HKALog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HKALog findUnique
   */
  export type HKALogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter, which HKALog to fetch.
     */
    where: HKALogWhereUniqueInput
  }

  /**
   * HKALog findUniqueOrThrow
   */
  export type HKALogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter, which HKALog to fetch.
     */
    where: HKALogWhereUniqueInput
  }

  /**
   * HKALog findFirst
   */
  export type HKALogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter, which HKALog to fetch.
     */
    where?: HKALogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HKALogs to fetch.
     */
    orderBy?: HKALogOrderByWithRelationInput | HKALogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HKALogs.
     */
    cursor?: HKALogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HKALogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HKALogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HKALogs.
     */
    distinct?: HKALogScalarFieldEnum | HKALogScalarFieldEnum[]
  }

  /**
   * HKALog findFirstOrThrow
   */
  export type HKALogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter, which HKALog to fetch.
     */
    where?: HKALogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HKALogs to fetch.
     */
    orderBy?: HKALogOrderByWithRelationInput | HKALogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HKALogs.
     */
    cursor?: HKALogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HKALogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HKALogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HKALogs.
     */
    distinct?: HKALogScalarFieldEnum | HKALogScalarFieldEnum[]
  }

  /**
   * HKALog findMany
   */
  export type HKALogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter, which HKALogs to fetch.
     */
    where?: HKALogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HKALogs to fetch.
     */
    orderBy?: HKALogOrderByWithRelationInput | HKALogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HKALogs.
     */
    cursor?: HKALogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HKALogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HKALogs.
     */
    skip?: number
    distinct?: HKALogScalarFieldEnum | HKALogScalarFieldEnum[]
  }

  /**
   * HKALog create
   */
  export type HKALogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * The data needed to create a HKALog.
     */
    data: XOR<HKALogCreateInput, HKALogUncheckedCreateInput>
  }

  /**
   * HKALog createMany
   */
  export type HKALogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HKALogs.
     */
    data: HKALogCreateManyInput | HKALogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HKALog createManyAndReturn
   */
  export type HKALogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * The data used to create many HKALogs.
     */
    data: HKALogCreateManyInput | HKALogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HKALog update
   */
  export type HKALogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * The data needed to update a HKALog.
     */
    data: XOR<HKALogUpdateInput, HKALogUncheckedUpdateInput>
    /**
     * Choose, which HKALog to update.
     */
    where: HKALogWhereUniqueInput
  }

  /**
   * HKALog updateMany
   */
  export type HKALogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HKALogs.
     */
    data: XOR<HKALogUpdateManyMutationInput, HKALogUncheckedUpdateManyInput>
    /**
     * Filter which HKALogs to update
     */
    where?: HKALogWhereInput
    /**
     * Limit how many HKALogs to update.
     */
    limit?: number
  }

  /**
   * HKALog updateManyAndReturn
   */
  export type HKALogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * The data used to update HKALogs.
     */
    data: XOR<HKALogUpdateManyMutationInput, HKALogUncheckedUpdateManyInput>
    /**
     * Filter which HKALogs to update
     */
    where?: HKALogWhereInput
    /**
     * Limit how many HKALogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HKALog upsert
   */
  export type HKALogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * The filter to search for the HKALog to update in case it exists.
     */
    where: HKALogWhereUniqueInput
    /**
     * In case the HKALog found by the `where` argument doesn't exist, create a new HKALog with this data.
     */
    create: XOR<HKALogCreateInput, HKALogUncheckedCreateInput>
    /**
     * In case the HKALog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HKALogUpdateInput, HKALogUncheckedUpdateInput>
  }

  /**
   * HKALog delete
   */
  export type HKALogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
    /**
     * Filter which HKALog to delete.
     */
    where: HKALogWhereUniqueInput
  }

  /**
   * HKALog deleteMany
   */
  export type HKALogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HKALogs to delete
     */
    where?: HKALogWhereInput
    /**
     * Limit how many HKALogs to delete.
     */
    limit?: number
  }

  /**
   * HKALog.factura
   */
  export type HKALog$facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
  }

  /**
   * HKALog without action
   */
  export type HKALogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HKALog
     */
    select?: HKALogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HKALog
     */
    omit?: HKALogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HKALogInclude<ExtArgs> | null
  }


  /**
   * Model FacturaCola
   */

  export type AggregateFacturaCola = {
    _count: FacturaColaCountAggregateOutputType | null
    _avg: FacturaColaAvgAggregateOutputType | null
    _sum: FacturaColaSumAggregateOutputType | null
    _min: FacturaColaMinAggregateOutputType | null
    _max: FacturaColaMaxAggregateOutputType | null
  }

  export type FacturaColaAvgAggregateOutputType = {
    intentos: number | null
  }

  export type FacturaColaSumAggregateOutputType = {
    intentos: number | null
  }

  export type FacturaColaMinAggregateOutputType = {
    id: string | null
    punto_recepcion: string | null
    estado: string | null
    intentos: number | null
    error_mensaje: string | null
    createdAt: Date | null
    procesadaAt: Date | null
  }

  export type FacturaColaMaxAggregateOutputType = {
    id: string | null
    punto_recepcion: string | null
    estado: string | null
    intentos: number | null
    error_mensaje: string | null
    createdAt: Date | null
    procesadaAt: Date | null
  }

  export type FacturaColaCountAggregateOutputType = {
    id: number
    punto_recepcion: number
    datos_originales: number
    estado: number
    intentos: number
    error_mensaje: number
    createdAt: number
    procesadaAt: number
    _all: number
  }


  export type FacturaColaAvgAggregateInputType = {
    intentos?: true
  }

  export type FacturaColaSumAggregateInputType = {
    intentos?: true
  }

  export type FacturaColaMinAggregateInputType = {
    id?: true
    punto_recepcion?: true
    estado?: true
    intentos?: true
    error_mensaje?: true
    createdAt?: true
    procesadaAt?: true
  }

  export type FacturaColaMaxAggregateInputType = {
    id?: true
    punto_recepcion?: true
    estado?: true
    intentos?: true
    error_mensaje?: true
    createdAt?: true
    procesadaAt?: true
  }

  export type FacturaColaCountAggregateInputType = {
    id?: true
    punto_recepcion?: true
    datos_originales?: true
    estado?: true
    intentos?: true
    error_mensaje?: true
    createdAt?: true
    procesadaAt?: true
    _all?: true
  }

  export type FacturaColaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaCola to aggregate.
     */
    where?: FacturaColaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaColas to fetch.
     */
    orderBy?: FacturaColaOrderByWithRelationInput | FacturaColaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaColaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaColas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaColas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacturaColas
    **/
    _count?: true | FacturaColaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaColaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaColaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaColaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaColaMaxAggregateInputType
  }

  export type GetFacturaColaAggregateType<T extends FacturaColaAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturaCola]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturaCola[P]>
      : GetScalarType<T[P], AggregateFacturaCola[P]>
  }




  export type FacturaColaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaColaWhereInput
    orderBy?: FacturaColaOrderByWithAggregationInput | FacturaColaOrderByWithAggregationInput[]
    by: FacturaColaScalarFieldEnum[] | FacturaColaScalarFieldEnum
    having?: FacturaColaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaColaCountAggregateInputType | true
    _avg?: FacturaColaAvgAggregateInputType
    _sum?: FacturaColaSumAggregateInputType
    _min?: FacturaColaMinAggregateInputType
    _max?: FacturaColaMaxAggregateInputType
  }

  export type FacturaColaGroupByOutputType = {
    id: string
    punto_recepcion: string
    datos_originales: JsonValue
    estado: string
    intentos: number
    error_mensaje: string | null
    createdAt: Date
    procesadaAt: Date | null
    _count: FacturaColaCountAggregateOutputType | null
    _avg: FacturaColaAvgAggregateOutputType | null
    _sum: FacturaColaSumAggregateOutputType | null
    _min: FacturaColaMinAggregateOutputType | null
    _max: FacturaColaMaxAggregateOutputType | null
  }

  type GetFacturaColaGroupByPayload<T extends FacturaColaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaColaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaColaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaColaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaColaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaColaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    punto_recepcion?: boolean
    datos_originales?: boolean
    estado?: boolean
    intentos?: boolean
    error_mensaje?: boolean
    createdAt?: boolean
    procesadaAt?: boolean
  }, ExtArgs["result"]["facturaCola"]>

  export type FacturaColaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    punto_recepcion?: boolean
    datos_originales?: boolean
    estado?: boolean
    intentos?: boolean
    error_mensaje?: boolean
    createdAt?: boolean
    procesadaAt?: boolean
  }, ExtArgs["result"]["facturaCola"]>

  export type FacturaColaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    punto_recepcion?: boolean
    datos_originales?: boolean
    estado?: boolean
    intentos?: boolean
    error_mensaje?: boolean
    createdAt?: boolean
    procesadaAt?: boolean
  }, ExtArgs["result"]["facturaCola"]>

  export type FacturaColaSelectScalar = {
    id?: boolean
    punto_recepcion?: boolean
    datos_originales?: boolean
    estado?: boolean
    intentos?: boolean
    error_mensaje?: boolean
    createdAt?: boolean
    procesadaAt?: boolean
  }

  export type FacturaColaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "punto_recepcion" | "datos_originales" | "estado" | "intentos" | "error_mensaje" | "createdAt" | "procesadaAt", ExtArgs["result"]["facturaCola"]>

  export type $FacturaColaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacturaCola"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      punto_recepcion: string
      datos_originales: Prisma.JsonValue
      estado: string
      intentos: number
      error_mensaje: string | null
      createdAt: Date
      procesadaAt: Date | null
    }, ExtArgs["result"]["facturaCola"]>
    composites: {}
  }

  type FacturaColaGetPayload<S extends boolean | null | undefined | FacturaColaDefaultArgs> = $Result.GetResult<Prisma.$FacturaColaPayload, S>

  type FacturaColaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaColaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaColaCountAggregateInputType | true
    }

  export interface FacturaColaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacturaCola'], meta: { name: 'FacturaCola' } }
    /**
     * Find zero or one FacturaCola that matches the filter.
     * @param {FacturaColaFindUniqueArgs} args - Arguments to find a FacturaCola
     * @example
     * // Get one FacturaCola
     * const facturaCola = await prisma.facturaCola.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaColaFindUniqueArgs>(args: SelectSubset<T, FacturaColaFindUniqueArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacturaCola that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaColaFindUniqueOrThrowArgs} args - Arguments to find a FacturaCola
     * @example
     * // Get one FacturaCola
     * const facturaCola = await prisma.facturaCola.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaColaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaColaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaCola that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaFindFirstArgs} args - Arguments to find a FacturaCola
     * @example
     * // Get one FacturaCola
     * const facturaCola = await prisma.facturaCola.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaColaFindFirstArgs>(args?: SelectSubset<T, FacturaColaFindFirstArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaCola that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaFindFirstOrThrowArgs} args - Arguments to find a FacturaCola
     * @example
     * // Get one FacturaCola
     * const facturaCola = await prisma.facturaCola.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaColaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaColaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacturaColas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacturaColas
     * const facturaColas = await prisma.facturaCola.findMany()
     * 
     * // Get first 10 FacturaColas
     * const facturaColas = await prisma.facturaCola.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaColaWithIdOnly = await prisma.facturaCola.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaColaFindManyArgs>(args?: SelectSubset<T, FacturaColaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacturaCola.
     * @param {FacturaColaCreateArgs} args - Arguments to create a FacturaCola.
     * @example
     * // Create one FacturaCola
     * const FacturaCola = await prisma.facturaCola.create({
     *   data: {
     *     // ... data to create a FacturaCola
     *   }
     * })
     * 
     */
    create<T extends FacturaColaCreateArgs>(args: SelectSubset<T, FacturaColaCreateArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacturaColas.
     * @param {FacturaColaCreateManyArgs} args - Arguments to create many FacturaColas.
     * @example
     * // Create many FacturaColas
     * const facturaCola = await prisma.facturaCola.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaColaCreateManyArgs>(args?: SelectSubset<T, FacturaColaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacturaColas and returns the data saved in the database.
     * @param {FacturaColaCreateManyAndReturnArgs} args - Arguments to create many FacturaColas.
     * @example
     * // Create many FacturaColas
     * const facturaCola = await prisma.facturaCola.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacturaColas and only return the `id`
     * const facturaColaWithIdOnly = await prisma.facturaCola.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaColaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaColaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacturaCola.
     * @param {FacturaColaDeleteArgs} args - Arguments to delete one FacturaCola.
     * @example
     * // Delete one FacturaCola
     * const FacturaCola = await prisma.facturaCola.delete({
     *   where: {
     *     // ... filter to delete one FacturaCola
     *   }
     * })
     * 
     */
    delete<T extends FacturaColaDeleteArgs>(args: SelectSubset<T, FacturaColaDeleteArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacturaCola.
     * @param {FacturaColaUpdateArgs} args - Arguments to update one FacturaCola.
     * @example
     * // Update one FacturaCola
     * const facturaCola = await prisma.facturaCola.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaColaUpdateArgs>(args: SelectSubset<T, FacturaColaUpdateArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacturaColas.
     * @param {FacturaColaDeleteManyArgs} args - Arguments to filter FacturaColas to delete.
     * @example
     * // Delete a few FacturaColas
     * const { count } = await prisma.facturaCola.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaColaDeleteManyArgs>(args?: SelectSubset<T, FacturaColaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaColas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacturaColas
     * const facturaCola = await prisma.facturaCola.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaColaUpdateManyArgs>(args: SelectSubset<T, FacturaColaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaColas and returns the data updated in the database.
     * @param {FacturaColaUpdateManyAndReturnArgs} args - Arguments to update many FacturaColas.
     * @example
     * // Update many FacturaColas
     * const facturaCola = await prisma.facturaCola.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacturaColas and only return the `id`
     * const facturaColaWithIdOnly = await prisma.facturaCola.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FacturaColaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaColaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacturaCola.
     * @param {FacturaColaUpsertArgs} args - Arguments to update or create a FacturaCola.
     * @example
     * // Update or create a FacturaCola
     * const facturaCola = await prisma.facturaCola.upsert({
     *   create: {
     *     // ... data to create a FacturaCola
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacturaCola we want to update
     *   }
     * })
     */
    upsert<T extends FacturaColaUpsertArgs>(args: SelectSubset<T, FacturaColaUpsertArgs<ExtArgs>>): Prisma__FacturaColaClient<$Result.GetResult<Prisma.$FacturaColaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacturaColas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaCountArgs} args - Arguments to filter FacturaColas to count.
     * @example
     * // Count the number of FacturaColas
     * const count = await prisma.facturaCola.count({
     *   where: {
     *     // ... the filter for the FacturaColas we want to count
     *   }
     * })
    **/
    count<T extends FacturaColaCountArgs>(
      args?: Subset<T, FacturaColaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaColaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacturaCola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaColaAggregateArgs>(args: Subset<T, FacturaColaAggregateArgs>): Prisma.PrismaPromise<GetFacturaColaAggregateType<T>>

    /**
     * Group by FacturaCola.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaColaGroupByArgs} args - Group by arguments.
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
      T extends FacturaColaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaColaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaColaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaColaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaColaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacturaCola model
   */
  readonly fields: FacturaColaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacturaCola.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaColaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FacturaCola model
   */
  interface FacturaColaFieldRefs {
    readonly id: FieldRef<"FacturaCola", 'String'>
    readonly punto_recepcion: FieldRef<"FacturaCola", 'String'>
    readonly datos_originales: FieldRef<"FacturaCola", 'Json'>
    readonly estado: FieldRef<"FacturaCola", 'String'>
    readonly intentos: FieldRef<"FacturaCola", 'Int'>
    readonly error_mensaje: FieldRef<"FacturaCola", 'String'>
    readonly createdAt: FieldRef<"FacturaCola", 'DateTime'>
    readonly procesadaAt: FieldRef<"FacturaCola", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacturaCola findUnique
   */
  export type FacturaColaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter, which FacturaCola to fetch.
     */
    where: FacturaColaWhereUniqueInput
  }

  /**
   * FacturaCola findUniqueOrThrow
   */
  export type FacturaColaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter, which FacturaCola to fetch.
     */
    where: FacturaColaWhereUniqueInput
  }

  /**
   * FacturaCola findFirst
   */
  export type FacturaColaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter, which FacturaCola to fetch.
     */
    where?: FacturaColaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaColas to fetch.
     */
    orderBy?: FacturaColaOrderByWithRelationInput | FacturaColaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaColas.
     */
    cursor?: FacturaColaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaColas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaColas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaColas.
     */
    distinct?: FacturaColaScalarFieldEnum | FacturaColaScalarFieldEnum[]
  }

  /**
   * FacturaCola findFirstOrThrow
   */
  export type FacturaColaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter, which FacturaCola to fetch.
     */
    where?: FacturaColaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaColas to fetch.
     */
    orderBy?: FacturaColaOrderByWithRelationInput | FacturaColaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaColas.
     */
    cursor?: FacturaColaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaColas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaColas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaColas.
     */
    distinct?: FacturaColaScalarFieldEnum | FacturaColaScalarFieldEnum[]
  }

  /**
   * FacturaCola findMany
   */
  export type FacturaColaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter, which FacturaColas to fetch.
     */
    where?: FacturaColaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaColas to fetch.
     */
    orderBy?: FacturaColaOrderByWithRelationInput | FacturaColaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacturaColas.
     */
    cursor?: FacturaColaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaColas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaColas.
     */
    skip?: number
    distinct?: FacturaColaScalarFieldEnum | FacturaColaScalarFieldEnum[]
  }

  /**
   * FacturaCola create
   */
  export type FacturaColaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * The data needed to create a FacturaCola.
     */
    data: XOR<FacturaColaCreateInput, FacturaColaUncheckedCreateInput>
  }

  /**
   * FacturaCola createMany
   */
  export type FacturaColaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacturaColas.
     */
    data: FacturaColaCreateManyInput | FacturaColaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaCola createManyAndReturn
   */
  export type FacturaColaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * The data used to create many FacturaColas.
     */
    data: FacturaColaCreateManyInput | FacturaColaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaCola update
   */
  export type FacturaColaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * The data needed to update a FacturaCola.
     */
    data: XOR<FacturaColaUpdateInput, FacturaColaUncheckedUpdateInput>
    /**
     * Choose, which FacturaCola to update.
     */
    where: FacturaColaWhereUniqueInput
  }

  /**
   * FacturaCola updateMany
   */
  export type FacturaColaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacturaColas.
     */
    data: XOR<FacturaColaUpdateManyMutationInput, FacturaColaUncheckedUpdateManyInput>
    /**
     * Filter which FacturaColas to update
     */
    where?: FacturaColaWhereInput
    /**
     * Limit how many FacturaColas to update.
     */
    limit?: number
  }

  /**
   * FacturaCola updateManyAndReturn
   */
  export type FacturaColaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * The data used to update FacturaColas.
     */
    data: XOR<FacturaColaUpdateManyMutationInput, FacturaColaUncheckedUpdateManyInput>
    /**
     * Filter which FacturaColas to update
     */
    where?: FacturaColaWhereInput
    /**
     * Limit how many FacturaColas to update.
     */
    limit?: number
  }

  /**
   * FacturaCola upsert
   */
  export type FacturaColaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * The filter to search for the FacturaCola to update in case it exists.
     */
    where: FacturaColaWhereUniqueInput
    /**
     * In case the FacturaCola found by the `where` argument doesn't exist, create a new FacturaCola with this data.
     */
    create: XOR<FacturaColaCreateInput, FacturaColaUncheckedCreateInput>
    /**
     * In case the FacturaCola was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaColaUpdateInput, FacturaColaUncheckedUpdateInput>
  }

  /**
   * FacturaCola delete
   */
  export type FacturaColaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
    /**
     * Filter which FacturaCola to delete.
     */
    where: FacturaColaWhereUniqueInput
  }

  /**
   * FacturaCola deleteMany
   */
  export type FacturaColaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaColas to delete
     */
    where?: FacturaColaWhereInput
    /**
     * Limit how many FacturaColas to delete.
     */
    limit?: number
  }

  /**
   * FacturaCola without action
   */
  export type FacturaColaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCola
     */
    select?: FacturaColaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCola
     */
    omit?: FacturaColaOmit<ExtArgs> | null
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


  export const ConfiguracionScalarFieldEnum: {
    id: 'id',
    nombre_empresa: 'nombre_empresa',
    ruc: 'ruc',
    razon_social: 'razon_social',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    codigo_sucursal: 'codigo_sucursal',
    punto_facturacion: 'punto_facturacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracionScalarFieldEnum = (typeof ConfiguracionScalarFieldEnum)[keyof typeof ConfiguracionScalarFieldEnum]


  export const ConexionHKAScalarFieldEnum: {
    id: 'id',
    ambiente: 'ambiente',
    token_empresa: 'token_empresa',
    token_password: 'token_password',
    url_base: 'url_base',
    activo: 'activo',
    fecha_activacion: 'fecha_activacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConexionHKAScalarFieldEnum = (typeof ConexionHKAScalarFieldEnum)[keyof typeof ConexionHKAScalarFieldEnum]


  export const PuntoRecepcionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    metodo: 'metodo',
    activo: 'activo',
    api_url: 'api_url',
    api_method: 'api_method',
    api_headers: 'api_headers',
    api_frecuencia: 'api_frecuencia',
    db_tipo: 'db_tipo',
    db_host: 'db_host',
    db_port: 'db_port',
    db_database: 'db_database',
    db_usuario: 'db_usuario',
    db_password: 'db_password',
    db_tabla: 'db_tabla',
    ftp_host: 'ftp_host',
    ftp_port: 'ftp_port',
    ftp_usuario: 'ftp_usuario',
    ftp_password: 'ftp_password',
    mapeo_campos: 'mapeo_campos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PuntoRecepcionScalarFieldEnum = (typeof PuntoRecepcionScalarFieldEnum)[keyof typeof PuntoRecepcionScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    modo: 'modo',
    numero_factura: 'numero_factura',
    punto_facturacion: 'punto_facturacion',
    codigo_sucursal: 'codigo_sucursal',
    tipo_documento: 'tipo_documento',
    estado: 'estado',
    cufe: 'cufe',
    cliente_tipo: 'cliente_tipo',
    cliente_ruc: 'cliente_ruc',
    cliente_nombre: 'cliente_nombre',
    cliente_direccion: 'cliente_direccion',
    cliente_email: 'cliente_email',
    total_neto: 'total_neto',
    total_itbms: 'total_itbms',
    total_factura: 'total_factura',
    documento_original: 'documento_original',
    hka_response: 'hka_response',
    xml_firmado: 'xml_firmado',
    pdf_url: 'pdf_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const FacturaItemScalarFieldEnum: {
    id: 'id',
    factura_id: 'factura_id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    unidad_medida: 'unidad_medida',
    precio_unitario: 'precio_unitario',
    descuento: 'descuento',
    tasa_itbms: 'tasa_itbms',
    valor_itbms: 'valor_itbms',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type FacturaItemScalarFieldEnum = (typeof FacturaItemScalarFieldEnum)[keyof typeof FacturaItemScalarFieldEnum]


  export const HKALogScalarFieldEnum: {
    id: 'id',
    factura_id: 'factura_id',
    operacion: 'operacion',
    request: 'request',
    response: 'response',
    status_code: 'status_code',
    createdAt: 'createdAt'
  };

  export type HKALogScalarFieldEnum = (typeof HKALogScalarFieldEnum)[keyof typeof HKALogScalarFieldEnum]


  export const FacturaColaScalarFieldEnum: {
    id: 'id',
    punto_recepcion: 'punto_recepcion',
    datos_originales: 'datos_originales',
    estado: 'estado',
    intentos: 'intentos',
    error_mensaje: 'error_mensaje',
    createdAt: 'createdAt',
    procesadaAt: 'procesadaAt'
  };

  export type FacturaColaScalarFieldEnum = (typeof FacturaColaScalarFieldEnum)[keyof typeof FacturaColaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ConfiguracionWhereInput = {
    AND?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    OR?: ConfiguracionWhereInput[]
    NOT?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    id?: StringFilter<"Configuracion"> | string
    nombre_empresa?: StringFilter<"Configuracion"> | string
    ruc?: StringFilter<"Configuracion"> | string
    razon_social?: StringFilter<"Configuracion"> | string
    direccion?: StringNullableFilter<"Configuracion"> | string | null
    telefono?: StringNullableFilter<"Configuracion"> | string | null
    email?: StringNullableFilter<"Configuracion"> | string | null
    codigo_sucursal?: StringFilter<"Configuracion"> | string
    punto_facturacion?: StringFilter<"Configuracion"> | string
    createdAt?: DateTimeFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeFilter<"Configuracion"> | Date | string
  }

  export type ConfiguracionOrderByWithRelationInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    ruc?: SortOrder
    razon_social?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    codigo_sucursal?: SortOrder
    punto_facturacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ruc?: string
    AND?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    OR?: ConfiguracionWhereInput[]
    NOT?: ConfiguracionWhereInput | ConfiguracionWhereInput[]
    nombre_empresa?: StringFilter<"Configuracion"> | string
    razon_social?: StringFilter<"Configuracion"> | string
    direccion?: StringNullableFilter<"Configuracion"> | string | null
    telefono?: StringNullableFilter<"Configuracion"> | string | null
    email?: StringNullableFilter<"Configuracion"> | string | null
    codigo_sucursal?: StringFilter<"Configuracion"> | string
    punto_facturacion?: StringFilter<"Configuracion"> | string
    createdAt?: DateTimeFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeFilter<"Configuracion"> | Date | string
  }, "id" | "ruc">

  export type ConfiguracionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    ruc?: SortOrder
    razon_social?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    codigo_sucursal?: SortOrder
    punto_facturacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracionCountOrderByAggregateInput
    _max?: ConfiguracionMaxOrderByAggregateInput
    _min?: ConfiguracionMinOrderByAggregateInput
  }

  export type ConfiguracionScalarWhereWithAggregatesInput = {
    AND?: ConfiguracionScalarWhereWithAggregatesInput | ConfiguracionScalarWhereWithAggregatesInput[]
    OR?: ConfiguracionScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracionScalarWhereWithAggregatesInput | ConfiguracionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuracion"> | string
    nombre_empresa?: StringWithAggregatesFilter<"Configuracion"> | string
    ruc?: StringWithAggregatesFilter<"Configuracion"> | string
    razon_social?: StringWithAggregatesFilter<"Configuracion"> | string
    direccion?: StringNullableWithAggregatesFilter<"Configuracion"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Configuracion"> | string | null
    email?: StringNullableWithAggregatesFilter<"Configuracion"> | string | null
    codigo_sucursal?: StringWithAggregatesFilter<"Configuracion"> | string
    punto_facturacion?: StringWithAggregatesFilter<"Configuracion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Configuracion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuracion"> | Date | string
  }

  export type ConexionHKAWhereInput = {
    AND?: ConexionHKAWhereInput | ConexionHKAWhereInput[]
    OR?: ConexionHKAWhereInput[]
    NOT?: ConexionHKAWhereInput | ConexionHKAWhereInput[]
    id?: StringFilter<"ConexionHKA"> | string
    ambiente?: StringFilter<"ConexionHKA"> | string
    token_empresa?: StringFilter<"ConexionHKA"> | string
    token_password?: StringFilter<"ConexionHKA"> | string
    url_base?: StringFilter<"ConexionHKA"> | string
    activo?: BoolFilter<"ConexionHKA"> | boolean
    fecha_activacion?: DateTimeNullableFilter<"ConexionHKA"> | Date | string | null
    createdAt?: DateTimeFilter<"ConexionHKA"> | Date | string
    updatedAt?: DateTimeFilter<"ConexionHKA"> | Date | string
  }

  export type ConexionHKAOrderByWithRelationInput = {
    id?: SortOrder
    ambiente?: SortOrder
    token_empresa?: SortOrder
    token_password?: SortOrder
    url_base?: SortOrder
    activo?: SortOrder
    fecha_activacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConexionHKAWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ambiente?: string
    AND?: ConexionHKAWhereInput | ConexionHKAWhereInput[]
    OR?: ConexionHKAWhereInput[]
    NOT?: ConexionHKAWhereInput | ConexionHKAWhereInput[]
    token_empresa?: StringFilter<"ConexionHKA"> | string
    token_password?: StringFilter<"ConexionHKA"> | string
    url_base?: StringFilter<"ConexionHKA"> | string
    activo?: BoolFilter<"ConexionHKA"> | boolean
    fecha_activacion?: DateTimeNullableFilter<"ConexionHKA"> | Date | string | null
    createdAt?: DateTimeFilter<"ConexionHKA"> | Date | string
    updatedAt?: DateTimeFilter<"ConexionHKA"> | Date | string
  }, "id" | "ambiente">

  export type ConexionHKAOrderByWithAggregationInput = {
    id?: SortOrder
    ambiente?: SortOrder
    token_empresa?: SortOrder
    token_password?: SortOrder
    url_base?: SortOrder
    activo?: SortOrder
    fecha_activacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConexionHKACountOrderByAggregateInput
    _max?: ConexionHKAMaxOrderByAggregateInput
    _min?: ConexionHKAMinOrderByAggregateInput
  }

  export type ConexionHKAScalarWhereWithAggregatesInput = {
    AND?: ConexionHKAScalarWhereWithAggregatesInput | ConexionHKAScalarWhereWithAggregatesInput[]
    OR?: ConexionHKAScalarWhereWithAggregatesInput[]
    NOT?: ConexionHKAScalarWhereWithAggregatesInput | ConexionHKAScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConexionHKA"> | string
    ambiente?: StringWithAggregatesFilter<"ConexionHKA"> | string
    token_empresa?: StringWithAggregatesFilter<"ConexionHKA"> | string
    token_password?: StringWithAggregatesFilter<"ConexionHKA"> | string
    url_base?: StringWithAggregatesFilter<"ConexionHKA"> | string
    activo?: BoolWithAggregatesFilter<"ConexionHKA"> | boolean
    fecha_activacion?: DateTimeNullableWithAggregatesFilter<"ConexionHKA"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConexionHKA"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConexionHKA"> | Date | string
  }

  export type PuntoRecepcionWhereInput = {
    AND?: PuntoRecepcionWhereInput | PuntoRecepcionWhereInput[]
    OR?: PuntoRecepcionWhereInput[]
    NOT?: PuntoRecepcionWhereInput | PuntoRecepcionWhereInput[]
    id?: StringFilter<"PuntoRecepcion"> | string
    nombre?: StringFilter<"PuntoRecepcion"> | string
    metodo?: StringFilter<"PuntoRecepcion"> | string
    activo?: BoolFilter<"PuntoRecepcion"> | boolean
    api_url?: StringNullableFilter<"PuntoRecepcion"> | string | null
    api_method?: StringNullableFilter<"PuntoRecepcion"> | string | null
    api_headers?: JsonNullableFilter<"PuntoRecepcion">
    api_frecuencia?: IntNullableFilter<"PuntoRecepcion"> | number | null
    db_tipo?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_host?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_port?: IntNullableFilter<"PuntoRecepcion"> | number | null
    db_database?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_usuario?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_password?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_tabla?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_host?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_port?: IntNullableFilter<"PuntoRecepcion"> | number | null
    ftp_usuario?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_password?: StringNullableFilter<"PuntoRecepcion"> | string | null
    mapeo_campos?: JsonNullableFilter<"PuntoRecepcion">
    createdAt?: DateTimeFilter<"PuntoRecepcion"> | Date | string
    updatedAt?: DateTimeFilter<"PuntoRecepcion"> | Date | string
  }

  export type PuntoRecepcionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    metodo?: SortOrder
    activo?: SortOrder
    api_url?: SortOrderInput | SortOrder
    api_method?: SortOrderInput | SortOrder
    api_headers?: SortOrderInput | SortOrder
    api_frecuencia?: SortOrderInput | SortOrder
    db_tipo?: SortOrderInput | SortOrder
    db_host?: SortOrderInput | SortOrder
    db_port?: SortOrderInput | SortOrder
    db_database?: SortOrderInput | SortOrder
    db_usuario?: SortOrderInput | SortOrder
    db_password?: SortOrderInput | SortOrder
    db_tabla?: SortOrderInput | SortOrder
    ftp_host?: SortOrderInput | SortOrder
    ftp_port?: SortOrderInput | SortOrder
    ftp_usuario?: SortOrderInput | SortOrder
    ftp_password?: SortOrderInput | SortOrder
    mapeo_campos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PuntoRecepcionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PuntoRecepcionWhereInput | PuntoRecepcionWhereInput[]
    OR?: PuntoRecepcionWhereInput[]
    NOT?: PuntoRecepcionWhereInput | PuntoRecepcionWhereInput[]
    nombre?: StringFilter<"PuntoRecepcion"> | string
    metodo?: StringFilter<"PuntoRecepcion"> | string
    activo?: BoolFilter<"PuntoRecepcion"> | boolean
    api_url?: StringNullableFilter<"PuntoRecepcion"> | string | null
    api_method?: StringNullableFilter<"PuntoRecepcion"> | string | null
    api_headers?: JsonNullableFilter<"PuntoRecepcion">
    api_frecuencia?: IntNullableFilter<"PuntoRecepcion"> | number | null
    db_tipo?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_host?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_port?: IntNullableFilter<"PuntoRecepcion"> | number | null
    db_database?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_usuario?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_password?: StringNullableFilter<"PuntoRecepcion"> | string | null
    db_tabla?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_host?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_port?: IntNullableFilter<"PuntoRecepcion"> | number | null
    ftp_usuario?: StringNullableFilter<"PuntoRecepcion"> | string | null
    ftp_password?: StringNullableFilter<"PuntoRecepcion"> | string | null
    mapeo_campos?: JsonNullableFilter<"PuntoRecepcion">
    createdAt?: DateTimeFilter<"PuntoRecepcion"> | Date | string
    updatedAt?: DateTimeFilter<"PuntoRecepcion"> | Date | string
  }, "id">

  export type PuntoRecepcionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    metodo?: SortOrder
    activo?: SortOrder
    api_url?: SortOrderInput | SortOrder
    api_method?: SortOrderInput | SortOrder
    api_headers?: SortOrderInput | SortOrder
    api_frecuencia?: SortOrderInput | SortOrder
    db_tipo?: SortOrderInput | SortOrder
    db_host?: SortOrderInput | SortOrder
    db_port?: SortOrderInput | SortOrder
    db_database?: SortOrderInput | SortOrder
    db_usuario?: SortOrderInput | SortOrder
    db_password?: SortOrderInput | SortOrder
    db_tabla?: SortOrderInput | SortOrder
    ftp_host?: SortOrderInput | SortOrder
    ftp_port?: SortOrderInput | SortOrder
    ftp_usuario?: SortOrderInput | SortOrder
    ftp_password?: SortOrderInput | SortOrder
    mapeo_campos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PuntoRecepcionCountOrderByAggregateInput
    _avg?: PuntoRecepcionAvgOrderByAggregateInput
    _max?: PuntoRecepcionMaxOrderByAggregateInput
    _min?: PuntoRecepcionMinOrderByAggregateInput
    _sum?: PuntoRecepcionSumOrderByAggregateInput
  }

  export type PuntoRecepcionScalarWhereWithAggregatesInput = {
    AND?: PuntoRecepcionScalarWhereWithAggregatesInput | PuntoRecepcionScalarWhereWithAggregatesInput[]
    OR?: PuntoRecepcionScalarWhereWithAggregatesInput[]
    NOT?: PuntoRecepcionScalarWhereWithAggregatesInput | PuntoRecepcionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PuntoRecepcion"> | string
    nombre?: StringWithAggregatesFilter<"PuntoRecepcion"> | string
    metodo?: StringWithAggregatesFilter<"PuntoRecepcion"> | string
    activo?: BoolWithAggregatesFilter<"PuntoRecepcion"> | boolean
    api_url?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    api_method?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    api_headers?: JsonNullableWithAggregatesFilter<"PuntoRecepcion">
    api_frecuencia?: IntNullableWithAggregatesFilter<"PuntoRecepcion"> | number | null
    db_tipo?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    db_host?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    db_port?: IntNullableWithAggregatesFilter<"PuntoRecepcion"> | number | null
    db_database?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    db_usuario?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    db_password?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    db_tabla?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    ftp_host?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    ftp_port?: IntNullableWithAggregatesFilter<"PuntoRecepcion"> | number | null
    ftp_usuario?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    ftp_password?: StringNullableWithAggregatesFilter<"PuntoRecepcion"> | string | null
    mapeo_campos?: JsonNullableWithAggregatesFilter<"PuntoRecepcion">
    createdAt?: DateTimeWithAggregatesFilter<"PuntoRecepcion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PuntoRecepcion"> | Date | string
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: StringFilter<"Factura"> | string
    modo?: StringFilter<"Factura"> | string
    numero_factura?: StringFilter<"Factura"> | string
    punto_facturacion?: StringFilter<"Factura"> | string
    codigo_sucursal?: StringFilter<"Factura"> | string
    tipo_documento?: StringFilter<"Factura"> | string
    estado?: StringFilter<"Factura"> | string
    cufe?: StringNullableFilter<"Factura"> | string | null
    cliente_tipo?: StringFilter<"Factura"> | string
    cliente_ruc?: StringNullableFilter<"Factura"> | string | null
    cliente_nombre?: StringFilter<"Factura"> | string
    cliente_direccion?: StringNullableFilter<"Factura"> | string | null
    cliente_email?: StringNullableFilter<"Factura"> | string | null
    total_neto?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    documento_original?: JsonFilter<"Factura">
    hka_response?: JsonNullableFilter<"Factura">
    xml_firmado?: StringNullableFilter<"Factura"> | string | null
    pdf_url?: StringNullableFilter<"Factura"> | string | null
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    items?: FacturaItemListRelationFilter
    logs?: HKALogListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    modo?: SortOrder
    numero_factura?: SortOrder
    punto_facturacion?: SortOrder
    codigo_sucursal?: SortOrder
    tipo_documento?: SortOrder
    estado?: SortOrder
    cufe?: SortOrderInput | SortOrder
    cliente_tipo?: SortOrder
    cliente_ruc?: SortOrderInput | SortOrder
    cliente_nombre?: SortOrder
    cliente_direccion?: SortOrderInput | SortOrder
    cliente_email?: SortOrderInput | SortOrder
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
    documento_original?: SortOrder
    hka_response?: SortOrderInput | SortOrder
    xml_firmado?: SortOrderInput | SortOrder
    pdf_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: FacturaItemOrderByRelationAggregateInput
    logs?: HKALogOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    modo?: StringFilter<"Factura"> | string
    numero_factura?: StringFilter<"Factura"> | string
    punto_facturacion?: StringFilter<"Factura"> | string
    codigo_sucursal?: StringFilter<"Factura"> | string
    tipo_documento?: StringFilter<"Factura"> | string
    estado?: StringFilter<"Factura"> | string
    cufe?: StringNullableFilter<"Factura"> | string | null
    cliente_tipo?: StringFilter<"Factura"> | string
    cliente_ruc?: StringNullableFilter<"Factura"> | string | null
    cliente_nombre?: StringFilter<"Factura"> | string
    cliente_direccion?: StringNullableFilter<"Factura"> | string | null
    cliente_email?: StringNullableFilter<"Factura"> | string | null
    total_neto?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    documento_original?: JsonFilter<"Factura">
    hka_response?: JsonNullableFilter<"Factura">
    xml_firmado?: StringNullableFilter<"Factura"> | string | null
    pdf_url?: StringNullableFilter<"Factura"> | string | null
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    items?: FacturaItemListRelationFilter
    logs?: HKALogListRelationFilter
  }, "id">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    modo?: SortOrder
    numero_factura?: SortOrder
    punto_facturacion?: SortOrder
    codigo_sucursal?: SortOrder
    tipo_documento?: SortOrder
    estado?: SortOrder
    cufe?: SortOrderInput | SortOrder
    cliente_tipo?: SortOrder
    cliente_ruc?: SortOrderInput | SortOrder
    cliente_nombre?: SortOrder
    cliente_direccion?: SortOrderInput | SortOrder
    cliente_email?: SortOrderInput | SortOrder
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
    documento_original?: SortOrder
    hka_response?: SortOrderInput | SortOrder
    xml_firmado?: SortOrderInput | SortOrder
    pdf_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Factura"> | string
    modo?: StringWithAggregatesFilter<"Factura"> | string
    numero_factura?: StringWithAggregatesFilter<"Factura"> | string
    punto_facturacion?: StringWithAggregatesFilter<"Factura"> | string
    codigo_sucursal?: StringWithAggregatesFilter<"Factura"> | string
    tipo_documento?: StringWithAggregatesFilter<"Factura"> | string
    estado?: StringWithAggregatesFilter<"Factura"> | string
    cufe?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    cliente_tipo?: StringWithAggregatesFilter<"Factura"> | string
    cliente_ruc?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    cliente_nombre?: StringWithAggregatesFilter<"Factura"> | string
    cliente_direccion?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    cliente_email?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    total_neto?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    documento_original?: JsonWithAggregatesFilter<"Factura">
    hka_response?: JsonNullableWithAggregatesFilter<"Factura">
    xml_firmado?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    pdf_url?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
  }

  export type FacturaItemWhereInput = {
    AND?: FacturaItemWhereInput | FacturaItemWhereInput[]
    OR?: FacturaItemWhereInput[]
    NOT?: FacturaItemWhereInput | FacturaItemWhereInput[]
    id?: StringFilter<"FacturaItem"> | string
    factura_id?: StringFilter<"FacturaItem"> | string
    codigo?: StringFilter<"FacturaItem"> | string
    descripcion?: StringFilter<"FacturaItem"> | string
    cantidad?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFilter<"FacturaItem"> | string
    precio_unitario?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFilter<"FacturaItem"> | string
    valor_itbms?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FacturaItem"> | Date | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
  }

  export type FacturaItemOrderByWithRelationInput = {
    id?: SortOrder
    factura_id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad_medida?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    tasa_itbms?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    factura?: FacturaOrderByWithRelationInput
  }

  export type FacturaItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacturaItemWhereInput | FacturaItemWhereInput[]
    OR?: FacturaItemWhereInput[]
    NOT?: FacturaItemWhereInput | FacturaItemWhereInput[]
    factura_id?: StringFilter<"FacturaItem"> | string
    codigo?: StringFilter<"FacturaItem"> | string
    descripcion?: StringFilter<"FacturaItem"> | string
    cantidad?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFilter<"FacturaItem"> | string
    precio_unitario?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFilter<"FacturaItem"> | string
    valor_itbms?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FacturaItem"> | Date | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
  }, "id">

  export type FacturaItemOrderByWithAggregationInput = {
    id?: SortOrder
    factura_id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad_medida?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    tasa_itbms?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: FacturaItemCountOrderByAggregateInput
    _avg?: FacturaItemAvgOrderByAggregateInput
    _max?: FacturaItemMaxOrderByAggregateInput
    _min?: FacturaItemMinOrderByAggregateInput
    _sum?: FacturaItemSumOrderByAggregateInput
  }

  export type FacturaItemScalarWhereWithAggregatesInput = {
    AND?: FacturaItemScalarWhereWithAggregatesInput | FacturaItemScalarWhereWithAggregatesInput[]
    OR?: FacturaItemScalarWhereWithAggregatesInput[]
    NOT?: FacturaItemScalarWhereWithAggregatesInput | FacturaItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacturaItem"> | string
    factura_id?: StringWithAggregatesFilter<"FacturaItem"> | string
    codigo?: StringWithAggregatesFilter<"FacturaItem"> | string
    descripcion?: StringWithAggregatesFilter<"FacturaItem"> | string
    cantidad?: DecimalWithAggregatesFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringWithAggregatesFilter<"FacturaItem"> | string
    precio_unitario?: DecimalWithAggregatesFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalWithAggregatesFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringWithAggregatesFilter<"FacturaItem"> | string
    valor_itbms?: DecimalWithAggregatesFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"FacturaItem"> | Date | string
  }

  export type HKALogWhereInput = {
    AND?: HKALogWhereInput | HKALogWhereInput[]
    OR?: HKALogWhereInput[]
    NOT?: HKALogWhereInput | HKALogWhereInput[]
    id?: StringFilter<"HKALog"> | string
    factura_id?: StringNullableFilter<"HKALog"> | string | null
    operacion?: StringFilter<"HKALog"> | string
    request?: StringFilter<"HKALog"> | string
    response?: StringFilter<"HKALog"> | string
    status_code?: IntNullableFilter<"HKALog"> | number | null
    createdAt?: DateTimeFilter<"HKALog"> | Date | string
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
  }

  export type HKALogOrderByWithRelationInput = {
    id?: SortOrder
    factura_id?: SortOrderInput | SortOrder
    operacion?: SortOrder
    request?: SortOrder
    response?: SortOrder
    status_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    factura?: FacturaOrderByWithRelationInput
  }

  export type HKALogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HKALogWhereInput | HKALogWhereInput[]
    OR?: HKALogWhereInput[]
    NOT?: HKALogWhereInput | HKALogWhereInput[]
    factura_id?: StringNullableFilter<"HKALog"> | string | null
    operacion?: StringFilter<"HKALog"> | string
    request?: StringFilter<"HKALog"> | string
    response?: StringFilter<"HKALog"> | string
    status_code?: IntNullableFilter<"HKALog"> | number | null
    createdAt?: DateTimeFilter<"HKALog"> | Date | string
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
  }, "id">

  export type HKALogOrderByWithAggregationInput = {
    id?: SortOrder
    factura_id?: SortOrderInput | SortOrder
    operacion?: SortOrder
    request?: SortOrder
    response?: SortOrder
    status_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HKALogCountOrderByAggregateInput
    _avg?: HKALogAvgOrderByAggregateInput
    _max?: HKALogMaxOrderByAggregateInput
    _min?: HKALogMinOrderByAggregateInput
    _sum?: HKALogSumOrderByAggregateInput
  }

  export type HKALogScalarWhereWithAggregatesInput = {
    AND?: HKALogScalarWhereWithAggregatesInput | HKALogScalarWhereWithAggregatesInput[]
    OR?: HKALogScalarWhereWithAggregatesInput[]
    NOT?: HKALogScalarWhereWithAggregatesInput | HKALogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HKALog"> | string
    factura_id?: StringNullableWithAggregatesFilter<"HKALog"> | string | null
    operacion?: StringWithAggregatesFilter<"HKALog"> | string
    request?: StringWithAggregatesFilter<"HKALog"> | string
    response?: StringWithAggregatesFilter<"HKALog"> | string
    status_code?: IntNullableWithAggregatesFilter<"HKALog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"HKALog"> | Date | string
  }

  export type FacturaColaWhereInput = {
    AND?: FacturaColaWhereInput | FacturaColaWhereInput[]
    OR?: FacturaColaWhereInput[]
    NOT?: FacturaColaWhereInput | FacturaColaWhereInput[]
    id?: StringFilter<"FacturaCola"> | string
    punto_recepcion?: StringFilter<"FacturaCola"> | string
    datos_originales?: JsonFilter<"FacturaCola">
    estado?: StringFilter<"FacturaCola"> | string
    intentos?: IntFilter<"FacturaCola"> | number
    error_mensaje?: StringNullableFilter<"FacturaCola"> | string | null
    createdAt?: DateTimeFilter<"FacturaCola"> | Date | string
    procesadaAt?: DateTimeNullableFilter<"FacturaCola"> | Date | string | null
  }

  export type FacturaColaOrderByWithRelationInput = {
    id?: SortOrder
    punto_recepcion?: SortOrder
    datos_originales?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    error_mensaje?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    procesadaAt?: SortOrderInput | SortOrder
  }

  export type FacturaColaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacturaColaWhereInput | FacturaColaWhereInput[]
    OR?: FacturaColaWhereInput[]
    NOT?: FacturaColaWhereInput | FacturaColaWhereInput[]
    punto_recepcion?: StringFilter<"FacturaCola"> | string
    datos_originales?: JsonFilter<"FacturaCola">
    estado?: StringFilter<"FacturaCola"> | string
    intentos?: IntFilter<"FacturaCola"> | number
    error_mensaje?: StringNullableFilter<"FacturaCola"> | string | null
    createdAt?: DateTimeFilter<"FacturaCola"> | Date | string
    procesadaAt?: DateTimeNullableFilter<"FacturaCola"> | Date | string | null
  }, "id">

  export type FacturaColaOrderByWithAggregationInput = {
    id?: SortOrder
    punto_recepcion?: SortOrder
    datos_originales?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    error_mensaje?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    procesadaAt?: SortOrderInput | SortOrder
    _count?: FacturaColaCountOrderByAggregateInput
    _avg?: FacturaColaAvgOrderByAggregateInput
    _max?: FacturaColaMaxOrderByAggregateInput
    _min?: FacturaColaMinOrderByAggregateInput
    _sum?: FacturaColaSumOrderByAggregateInput
  }

  export type FacturaColaScalarWhereWithAggregatesInput = {
    AND?: FacturaColaScalarWhereWithAggregatesInput | FacturaColaScalarWhereWithAggregatesInput[]
    OR?: FacturaColaScalarWhereWithAggregatesInput[]
    NOT?: FacturaColaScalarWhereWithAggregatesInput | FacturaColaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacturaCola"> | string
    punto_recepcion?: StringWithAggregatesFilter<"FacturaCola"> | string
    datos_originales?: JsonWithAggregatesFilter<"FacturaCola">
    estado?: StringWithAggregatesFilter<"FacturaCola"> | string
    intentos?: IntWithAggregatesFilter<"FacturaCola"> | number
    error_mensaje?: StringNullableWithAggregatesFilter<"FacturaCola"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FacturaCola"> | Date | string
    procesadaAt?: DateTimeNullableWithAggregatesFilter<"FacturaCola"> | Date | string | null
  }

  export type ConfiguracionCreateInput = {
    id?: string
    nombre_empresa: string
    ruc: string
    razon_social: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    codigo_sucursal?: string
    punto_facturacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUncheckedCreateInput = {
    id?: string
    nombre_empresa: string
    ruc: string
    razon_social: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    codigo_sucursal?: string
    punto_facturacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionCreateManyInput = {
    id?: string
    nombre_empresa: string
    ruc: string
    razon_social: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    codigo_sucursal?: string
    punto_facturacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    razon_social?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConexionHKACreateInput = {
    id?: string
    ambiente: string
    token_empresa: string
    token_password: string
    url_base: string
    activo?: boolean
    fecha_activacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConexionHKAUncheckedCreateInput = {
    id?: string
    ambiente: string
    token_empresa: string
    token_password: string
    url_base: string
    activo?: boolean
    fecha_activacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConexionHKAUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambiente?: StringFieldUpdateOperationsInput | string
    token_empresa?: StringFieldUpdateOperationsInput | string
    token_password?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConexionHKAUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambiente?: StringFieldUpdateOperationsInput | string
    token_empresa?: StringFieldUpdateOperationsInput | string
    token_password?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConexionHKACreateManyInput = {
    id?: string
    ambiente: string
    token_empresa: string
    token_password: string
    url_base: string
    activo?: boolean
    fecha_activacion?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConexionHKAUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambiente?: StringFieldUpdateOperationsInput | string
    token_empresa?: StringFieldUpdateOperationsInput | string
    token_password?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConexionHKAUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambiente?: StringFieldUpdateOperationsInput | string
    token_empresa?: StringFieldUpdateOperationsInput | string
    token_password?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_activacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoRecepcionCreateInput = {
    id?: string
    nombre: string
    metodo: string
    activo?: boolean
    api_url?: string | null
    api_method?: string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: number | null
    db_tipo?: string | null
    db_host?: string | null
    db_port?: number | null
    db_database?: string | null
    db_usuario?: string | null
    db_password?: string | null
    db_tabla?: string | null
    ftp_host?: string | null
    ftp_port?: number | null
    ftp_usuario?: string | null
    ftp_password?: string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PuntoRecepcionUncheckedCreateInput = {
    id?: string
    nombre: string
    metodo: string
    activo?: boolean
    api_url?: string | null
    api_method?: string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: number | null
    db_tipo?: string | null
    db_host?: string | null
    db_port?: number | null
    db_database?: string | null
    db_usuario?: string | null
    db_password?: string | null
    db_tabla?: string | null
    ftp_host?: string | null
    ftp_port?: number | null
    ftp_usuario?: string | null
    ftp_password?: string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PuntoRecepcionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    api_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_method?: NullableStringFieldUpdateOperationsInput | string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: NullableIntFieldUpdateOperationsInput | number | null
    db_tipo?: NullableStringFieldUpdateOperationsInput | string | null
    db_host?: NullableStringFieldUpdateOperationsInput | string | null
    db_port?: NullableIntFieldUpdateOperationsInput | number | null
    db_database?: NullableStringFieldUpdateOperationsInput | string | null
    db_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    db_password?: NullableStringFieldUpdateOperationsInput | string | null
    db_tabla?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_host?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_port?: NullableIntFieldUpdateOperationsInput | number | null
    ftp_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_password?: NullableStringFieldUpdateOperationsInput | string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoRecepcionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    api_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_method?: NullableStringFieldUpdateOperationsInput | string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: NullableIntFieldUpdateOperationsInput | number | null
    db_tipo?: NullableStringFieldUpdateOperationsInput | string | null
    db_host?: NullableStringFieldUpdateOperationsInput | string | null
    db_port?: NullableIntFieldUpdateOperationsInput | number | null
    db_database?: NullableStringFieldUpdateOperationsInput | string | null
    db_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    db_password?: NullableStringFieldUpdateOperationsInput | string | null
    db_tabla?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_host?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_port?: NullableIntFieldUpdateOperationsInput | number | null
    ftp_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_password?: NullableStringFieldUpdateOperationsInput | string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoRecepcionCreateManyInput = {
    id?: string
    nombre: string
    metodo: string
    activo?: boolean
    api_url?: string | null
    api_method?: string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: number | null
    db_tipo?: string | null
    db_host?: string | null
    db_port?: number | null
    db_database?: string | null
    db_usuario?: string | null
    db_password?: string | null
    db_tabla?: string | null
    ftp_host?: string | null
    ftp_port?: number | null
    ftp_usuario?: string | null
    ftp_password?: string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PuntoRecepcionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    api_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_method?: NullableStringFieldUpdateOperationsInput | string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: NullableIntFieldUpdateOperationsInput | number | null
    db_tipo?: NullableStringFieldUpdateOperationsInput | string | null
    db_host?: NullableStringFieldUpdateOperationsInput | string | null
    db_port?: NullableIntFieldUpdateOperationsInput | number | null
    db_database?: NullableStringFieldUpdateOperationsInput | string | null
    db_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    db_password?: NullableStringFieldUpdateOperationsInput | string | null
    db_tabla?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_host?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_port?: NullableIntFieldUpdateOperationsInput | number | null
    ftp_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_password?: NullableStringFieldUpdateOperationsInput | string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoRecepcionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    api_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_method?: NullableStringFieldUpdateOperationsInput | string | null
    api_headers?: NullableJsonNullValueInput | InputJsonValue
    api_frecuencia?: NullableIntFieldUpdateOperationsInput | number | null
    db_tipo?: NullableStringFieldUpdateOperationsInput | string | null
    db_host?: NullableStringFieldUpdateOperationsInput | string | null
    db_port?: NullableIntFieldUpdateOperationsInput | number | null
    db_database?: NullableStringFieldUpdateOperationsInput | string | null
    db_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    db_password?: NullableStringFieldUpdateOperationsInput | string | null
    db_tabla?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_host?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_port?: NullableIntFieldUpdateOperationsInput | number | null
    ftp_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    ftp_password?: NullableStringFieldUpdateOperationsInput | string | null
    mapeo_campos?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaCreateInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FacturaItemCreateNestedManyWithoutFacturaInput
    logs?: HKALogCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FacturaItemUncheckedCreateNestedManyWithoutFacturaInput
    logs?: HKALogUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FacturaItemUpdateManyWithoutFacturaNestedInput
    logs?: HKALogUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FacturaItemUncheckedUpdateManyWithoutFacturaNestedInput
    logs?: HKALogUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaItemCreateInput = {
    id?: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    factura: FacturaCreateNestedOneWithoutItemsInput
  }

  export type FacturaItemUncheckedCreateInput = {
    id?: string
    factura_id: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type FacturaItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factura?: FacturaUpdateOneRequiredWithoutItemsNestedInput
  }

  export type FacturaItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura_id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaItemCreateManyInput = {
    id?: string
    factura_id: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type FacturaItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura_id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogCreateInput = {
    id?: string
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
    factura?: FacturaCreateNestedOneWithoutLogsInput
  }

  export type HKALogUncheckedCreateInput = {
    id?: string
    factura_id?: string | null
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
  }

  export type HKALogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factura?: FacturaUpdateOneWithoutLogsNestedInput
  }

  export type HKALogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura_id?: NullableStringFieldUpdateOperationsInput | string | null
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogCreateManyInput = {
    id?: string
    factura_id?: string | null
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
  }

  export type HKALogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    factura_id?: NullableStringFieldUpdateOperationsInput | string | null
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaColaCreateInput = {
    id?: string
    punto_recepcion: string
    datos_originales: JsonNullValueInput | InputJsonValue
    estado?: string
    intentos?: number
    error_mensaje?: string | null
    createdAt?: Date | string
    procesadaAt?: Date | string | null
  }

  export type FacturaColaUncheckedCreateInput = {
    id?: string
    punto_recepcion: string
    datos_originales: JsonNullValueInput | InputJsonValue
    estado?: string
    intentos?: number
    error_mensaje?: string | null
    createdAt?: Date | string
    procesadaAt?: Date | string | null
  }

  export type FacturaColaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    punto_recepcion?: StringFieldUpdateOperationsInput | string
    datos_originales?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    error_mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procesadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacturaColaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    punto_recepcion?: StringFieldUpdateOperationsInput | string
    datos_originales?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    error_mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procesadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacturaColaCreateManyInput = {
    id?: string
    punto_recepcion: string
    datos_originales: JsonNullValueInput | InputJsonValue
    estado?: string
    intentos?: number
    error_mensaje?: string | null
    createdAt?: Date | string
    procesadaAt?: Date | string | null
  }

  export type FacturaColaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    punto_recepcion?: StringFieldUpdateOperationsInput | string
    datos_originales?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    error_mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procesadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacturaColaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    punto_recepcion?: StringFieldUpdateOperationsInput | string
    datos_originales?: JsonNullValueInput | InputJsonValue
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    error_mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procesadaAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConfiguracionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    ruc?: SortOrder
    razon_social?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    codigo_sucursal?: SortOrder
    punto_facturacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    ruc?: SortOrder
    razon_social?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    codigo_sucursal?: SortOrder
    punto_facturacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    ruc?: SortOrder
    razon_social?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    codigo_sucursal?: SortOrder
    punto_facturacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ConexionHKACountOrderByAggregateInput = {
    id?: SortOrder
    ambiente?: SortOrder
    token_empresa?: SortOrder
    token_password?: SortOrder
    url_base?: SortOrder
    activo?: SortOrder
    fecha_activacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConexionHKAMaxOrderByAggregateInput = {
    id?: SortOrder
    ambiente?: SortOrder
    token_empresa?: SortOrder
    token_password?: SortOrder
    url_base?: SortOrder
    activo?: SortOrder
    fecha_activacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConexionHKAMinOrderByAggregateInput = {
    id?: SortOrder
    ambiente?: SortOrder
    token_empresa?: SortOrder
    token_password?: SortOrder
    url_base?: SortOrder
    activo?: SortOrder
    fecha_activacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PuntoRecepcionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    metodo?: SortOrder
    activo?: SortOrder
    api_url?: SortOrder
    api_method?: SortOrder
    api_headers?: SortOrder
    api_frecuencia?: SortOrder
    db_tipo?: SortOrder
    db_host?: SortOrder
    db_port?: SortOrder
    db_database?: SortOrder
    db_usuario?: SortOrder
    db_password?: SortOrder
    db_tabla?: SortOrder
    ftp_host?: SortOrder
    ftp_port?: SortOrder
    ftp_usuario?: SortOrder
    ftp_password?: SortOrder
    mapeo_campos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PuntoRecepcionAvgOrderByAggregateInput = {
    api_frecuencia?: SortOrder
    db_port?: SortOrder
    ftp_port?: SortOrder
  }

  export type PuntoRecepcionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    metodo?: SortOrder
    activo?: SortOrder
    api_url?: SortOrder
    api_method?: SortOrder
    api_frecuencia?: SortOrder
    db_tipo?: SortOrder
    db_host?: SortOrder
    db_port?: SortOrder
    db_database?: SortOrder
    db_usuario?: SortOrder
    db_password?: SortOrder
    db_tabla?: SortOrder
    ftp_host?: SortOrder
    ftp_port?: SortOrder
    ftp_usuario?: SortOrder
    ftp_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PuntoRecepcionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    metodo?: SortOrder
    activo?: SortOrder
    api_url?: SortOrder
    api_method?: SortOrder
    api_frecuencia?: SortOrder
    db_tipo?: SortOrder
    db_host?: SortOrder
    db_port?: SortOrder
    db_database?: SortOrder
    db_usuario?: SortOrder
    db_password?: SortOrder
    db_tabla?: SortOrder
    ftp_host?: SortOrder
    ftp_port?: SortOrder
    ftp_usuario?: SortOrder
    ftp_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PuntoRecepcionSumOrderByAggregateInput = {
    api_frecuencia?: SortOrder
    db_port?: SortOrder
    ftp_port?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FacturaItemListRelationFilter = {
    every?: FacturaItemWhereInput
    some?: FacturaItemWhereInput
    none?: FacturaItemWhereInput
  }

  export type HKALogListRelationFilter = {
    every?: HKALogWhereInput
    some?: HKALogWhereInput
    none?: HKALogWhereInput
  }

  export type FacturaItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HKALogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    modo?: SortOrder
    numero_factura?: SortOrder
    punto_facturacion?: SortOrder
    codigo_sucursal?: SortOrder
    tipo_documento?: SortOrder
    estado?: SortOrder
    cufe?: SortOrder
    cliente_tipo?: SortOrder
    cliente_ruc?: SortOrder
    cliente_nombre?: SortOrder
    cliente_direccion?: SortOrder
    cliente_email?: SortOrder
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
    documento_original?: SortOrder
    hka_response?: SortOrder
    xml_firmado?: SortOrder
    pdf_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    modo?: SortOrder
    numero_factura?: SortOrder
    punto_facturacion?: SortOrder
    codigo_sucursal?: SortOrder
    tipo_documento?: SortOrder
    estado?: SortOrder
    cufe?: SortOrder
    cliente_tipo?: SortOrder
    cliente_ruc?: SortOrder
    cliente_nombre?: SortOrder
    cliente_direccion?: SortOrder
    cliente_email?: SortOrder
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
    xml_firmado?: SortOrder
    pdf_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    modo?: SortOrder
    numero_factura?: SortOrder
    punto_facturacion?: SortOrder
    codigo_sucursal?: SortOrder
    tipo_documento?: SortOrder
    estado?: SortOrder
    cufe?: SortOrder
    cliente_tipo?: SortOrder
    cliente_ruc?: SortOrder
    cliente_nombre?: SortOrder
    cliente_direccion?: SortOrder
    cliente_email?: SortOrder
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
    xml_firmado?: SortOrder
    pdf_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    total_neto?: SortOrder
    total_itbms?: SortOrder
    total_factura?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type FacturaItemCountOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad_medida?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    tasa_itbms?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type FacturaItemAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
  }

  export type FacturaItemMaxOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad_medida?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    tasa_itbms?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type FacturaItemMinOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    unidad_medida?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    tasa_itbms?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type FacturaItemSumOrderByAggregateInput = {
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    valor_itbms?: SortOrder
    total?: SortOrder
  }

  export type FacturaNullableScalarRelationFilter = {
    is?: FacturaWhereInput | null
    isNot?: FacturaWhereInput | null
  }

  export type HKALogCountOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    operacion?: SortOrder
    request?: SortOrder
    response?: SortOrder
    status_code?: SortOrder
    createdAt?: SortOrder
  }

  export type HKALogAvgOrderByAggregateInput = {
    status_code?: SortOrder
  }

  export type HKALogMaxOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    operacion?: SortOrder
    request?: SortOrder
    response?: SortOrder
    status_code?: SortOrder
    createdAt?: SortOrder
  }

  export type HKALogMinOrderByAggregateInput = {
    id?: SortOrder
    factura_id?: SortOrder
    operacion?: SortOrder
    request?: SortOrder
    response?: SortOrder
    status_code?: SortOrder
    createdAt?: SortOrder
  }

  export type HKALogSumOrderByAggregateInput = {
    status_code?: SortOrder
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

  export type FacturaColaCountOrderByAggregateInput = {
    id?: SortOrder
    punto_recepcion?: SortOrder
    datos_originales?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    error_mensaje?: SortOrder
    createdAt?: SortOrder
    procesadaAt?: SortOrder
  }

  export type FacturaColaAvgOrderByAggregateInput = {
    intentos?: SortOrder
  }

  export type FacturaColaMaxOrderByAggregateInput = {
    id?: SortOrder
    punto_recepcion?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    error_mensaje?: SortOrder
    createdAt?: SortOrder
    procesadaAt?: SortOrder
  }

  export type FacturaColaMinOrderByAggregateInput = {
    id?: SortOrder
    punto_recepcion?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    error_mensaje?: SortOrder
    createdAt?: SortOrder
    procesadaAt?: SortOrder
  }

  export type FacturaColaSumOrderByAggregateInput = {
    intentos?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacturaItemCreateNestedManyWithoutFacturaInput = {
    create?: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput> | FacturaItemCreateWithoutFacturaInput[] | FacturaItemUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaItemCreateOrConnectWithoutFacturaInput | FacturaItemCreateOrConnectWithoutFacturaInput[]
    createMany?: FacturaItemCreateManyFacturaInputEnvelope
    connect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
  }

  export type HKALogCreateNestedManyWithoutFacturaInput = {
    create?: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput> | HKALogCreateWithoutFacturaInput[] | HKALogUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: HKALogCreateOrConnectWithoutFacturaInput | HKALogCreateOrConnectWithoutFacturaInput[]
    createMany?: HKALogCreateManyFacturaInputEnvelope
    connect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
  }

  export type FacturaItemUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput> | FacturaItemCreateWithoutFacturaInput[] | FacturaItemUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaItemCreateOrConnectWithoutFacturaInput | FacturaItemCreateOrConnectWithoutFacturaInput[]
    createMany?: FacturaItemCreateManyFacturaInputEnvelope
    connect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
  }

  export type HKALogUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput> | HKALogCreateWithoutFacturaInput[] | HKALogUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: HKALogCreateOrConnectWithoutFacturaInput | HKALogCreateOrConnectWithoutFacturaInput[]
    createMany?: HKALogCreateManyFacturaInputEnvelope
    connect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FacturaItemUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput> | FacturaItemCreateWithoutFacturaInput[] | FacturaItemUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaItemCreateOrConnectWithoutFacturaInput | FacturaItemCreateOrConnectWithoutFacturaInput[]
    upsert?: FacturaItemUpsertWithWhereUniqueWithoutFacturaInput | FacturaItemUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: FacturaItemCreateManyFacturaInputEnvelope
    set?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    disconnect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    delete?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    connect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    update?: FacturaItemUpdateWithWhereUniqueWithoutFacturaInput | FacturaItemUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: FacturaItemUpdateManyWithWhereWithoutFacturaInput | FacturaItemUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: FacturaItemScalarWhereInput | FacturaItemScalarWhereInput[]
  }

  export type HKALogUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput> | HKALogCreateWithoutFacturaInput[] | HKALogUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: HKALogCreateOrConnectWithoutFacturaInput | HKALogCreateOrConnectWithoutFacturaInput[]
    upsert?: HKALogUpsertWithWhereUniqueWithoutFacturaInput | HKALogUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: HKALogCreateManyFacturaInputEnvelope
    set?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    disconnect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    delete?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    connect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    update?: HKALogUpdateWithWhereUniqueWithoutFacturaInput | HKALogUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: HKALogUpdateManyWithWhereWithoutFacturaInput | HKALogUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: HKALogScalarWhereInput | HKALogScalarWhereInput[]
  }

  export type FacturaItemUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput> | FacturaItemCreateWithoutFacturaInput[] | FacturaItemUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: FacturaItemCreateOrConnectWithoutFacturaInput | FacturaItemCreateOrConnectWithoutFacturaInput[]
    upsert?: FacturaItemUpsertWithWhereUniqueWithoutFacturaInput | FacturaItemUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: FacturaItemCreateManyFacturaInputEnvelope
    set?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    disconnect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    delete?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    connect?: FacturaItemWhereUniqueInput | FacturaItemWhereUniqueInput[]
    update?: FacturaItemUpdateWithWhereUniqueWithoutFacturaInput | FacturaItemUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: FacturaItemUpdateManyWithWhereWithoutFacturaInput | FacturaItemUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: FacturaItemScalarWhereInput | FacturaItemScalarWhereInput[]
  }

  export type HKALogUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput> | HKALogCreateWithoutFacturaInput[] | HKALogUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: HKALogCreateOrConnectWithoutFacturaInput | HKALogCreateOrConnectWithoutFacturaInput[]
    upsert?: HKALogUpsertWithWhereUniqueWithoutFacturaInput | HKALogUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: HKALogCreateManyFacturaInputEnvelope
    set?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    disconnect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    delete?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    connect?: HKALogWhereUniqueInput | HKALogWhereUniqueInput[]
    update?: HKALogUpdateWithWhereUniqueWithoutFacturaInput | HKALogUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: HKALogUpdateManyWithWhereWithoutFacturaInput | HKALogUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: HKALogScalarWhereInput | HKALogScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutItemsInput = {
    create?: XOR<FacturaCreateWithoutItemsInput, FacturaUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutItemsInput
    connect?: FacturaWhereUniqueInput
  }

  export type FacturaUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<FacturaCreateWithoutItemsInput, FacturaUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutItemsInput
    upsert?: FacturaUpsertWithoutItemsInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutItemsInput, FacturaUpdateWithoutItemsInput>, FacturaUncheckedUpdateWithoutItemsInput>
  }

  export type FacturaCreateNestedOneWithoutLogsInput = {
    create?: XOR<FacturaCreateWithoutLogsInput, FacturaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutLogsInput
    connect?: FacturaWhereUniqueInput
  }

  export type FacturaUpdateOneWithoutLogsNestedInput = {
    create?: XOR<FacturaCreateWithoutLogsInput, FacturaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutLogsInput
    upsert?: FacturaUpsertWithoutLogsInput
    disconnect?: FacturaWhereInput | boolean
    delete?: FacturaWhereInput | boolean
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutLogsInput, FacturaUpdateWithoutLogsInput>, FacturaUncheckedUpdateWithoutLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type FacturaItemCreateWithoutFacturaInput = {
    id?: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type FacturaItemUncheckedCreateWithoutFacturaInput = {
    id?: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type FacturaItemCreateOrConnectWithoutFacturaInput = {
    where: FacturaItemWhereUniqueInput
    create: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput>
  }

  export type FacturaItemCreateManyFacturaInputEnvelope = {
    data: FacturaItemCreateManyFacturaInput | FacturaItemCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type HKALogCreateWithoutFacturaInput = {
    id?: string
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
  }

  export type HKALogUncheckedCreateWithoutFacturaInput = {
    id?: string
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
  }

  export type HKALogCreateOrConnectWithoutFacturaInput = {
    where: HKALogWhereUniqueInput
    create: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput>
  }

  export type HKALogCreateManyFacturaInputEnvelope = {
    data: HKALogCreateManyFacturaInput | HKALogCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type FacturaItemUpsertWithWhereUniqueWithoutFacturaInput = {
    where: FacturaItemWhereUniqueInput
    update: XOR<FacturaItemUpdateWithoutFacturaInput, FacturaItemUncheckedUpdateWithoutFacturaInput>
    create: XOR<FacturaItemCreateWithoutFacturaInput, FacturaItemUncheckedCreateWithoutFacturaInput>
  }

  export type FacturaItemUpdateWithWhereUniqueWithoutFacturaInput = {
    where: FacturaItemWhereUniqueInput
    data: XOR<FacturaItemUpdateWithoutFacturaInput, FacturaItemUncheckedUpdateWithoutFacturaInput>
  }

  export type FacturaItemUpdateManyWithWhereWithoutFacturaInput = {
    where: FacturaItemScalarWhereInput
    data: XOR<FacturaItemUpdateManyMutationInput, FacturaItemUncheckedUpdateManyWithoutFacturaInput>
  }

  export type FacturaItemScalarWhereInput = {
    AND?: FacturaItemScalarWhereInput | FacturaItemScalarWhereInput[]
    OR?: FacturaItemScalarWhereInput[]
    NOT?: FacturaItemScalarWhereInput | FacturaItemScalarWhereInput[]
    id?: StringFilter<"FacturaItem"> | string
    factura_id?: StringFilter<"FacturaItem"> | string
    codigo?: StringFilter<"FacturaItem"> | string
    descripcion?: StringFilter<"FacturaItem"> | string
    cantidad?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFilter<"FacturaItem"> | string
    precio_unitario?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFilter<"FacturaItem"> | string
    valor_itbms?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"FacturaItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FacturaItem"> | Date | string
  }

  export type HKALogUpsertWithWhereUniqueWithoutFacturaInput = {
    where: HKALogWhereUniqueInput
    update: XOR<HKALogUpdateWithoutFacturaInput, HKALogUncheckedUpdateWithoutFacturaInput>
    create: XOR<HKALogCreateWithoutFacturaInput, HKALogUncheckedCreateWithoutFacturaInput>
  }

  export type HKALogUpdateWithWhereUniqueWithoutFacturaInput = {
    where: HKALogWhereUniqueInput
    data: XOR<HKALogUpdateWithoutFacturaInput, HKALogUncheckedUpdateWithoutFacturaInput>
  }

  export type HKALogUpdateManyWithWhereWithoutFacturaInput = {
    where: HKALogScalarWhereInput
    data: XOR<HKALogUpdateManyMutationInput, HKALogUncheckedUpdateManyWithoutFacturaInput>
  }

  export type HKALogScalarWhereInput = {
    AND?: HKALogScalarWhereInput | HKALogScalarWhereInput[]
    OR?: HKALogScalarWhereInput[]
    NOT?: HKALogScalarWhereInput | HKALogScalarWhereInput[]
    id?: StringFilter<"HKALog"> | string
    factura_id?: StringNullableFilter<"HKALog"> | string | null
    operacion?: StringFilter<"HKALog"> | string
    request?: StringFilter<"HKALog"> | string
    response?: StringFilter<"HKALog"> | string
    status_code?: IntNullableFilter<"HKALog"> | number | null
    createdAt?: DateTimeFilter<"HKALog"> | Date | string
  }

  export type FacturaCreateWithoutItemsInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HKALogCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutItemsInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HKALogUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutItemsInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutItemsInput, FacturaUncheckedCreateWithoutItemsInput>
  }

  export type FacturaUpsertWithoutItemsInput = {
    update: XOR<FacturaUpdateWithoutItemsInput, FacturaUncheckedUpdateWithoutItemsInput>
    create: XOR<FacturaCreateWithoutItemsInput, FacturaUncheckedCreateWithoutItemsInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutItemsInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutItemsInput, FacturaUncheckedUpdateWithoutItemsInput>
  }

  export type FacturaUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HKALogUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HKALogUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateWithoutLogsInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FacturaItemCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutLogsInput = {
    id?: string
    modo: string
    numero_factura: string
    punto_facturacion: string
    codigo_sucursal: string
    tipo_documento: string
    estado: string
    cufe?: string | null
    cliente_tipo: string
    cliente_ruc?: string | null
    cliente_nombre: string
    cliente_direccion?: string | null
    cliente_email?: string | null
    total_neto: Decimal | DecimalJsLike | number | string
    total_itbms: Decimal | DecimalJsLike | number | string
    total_factura: Decimal | DecimalJsLike | number | string
    documento_original: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: string | null
    pdf_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FacturaItemUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutLogsInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutLogsInput, FacturaUncheckedCreateWithoutLogsInput>
  }

  export type FacturaUpsertWithoutLogsInput = {
    update: XOR<FacturaUpdateWithoutLogsInput, FacturaUncheckedUpdateWithoutLogsInput>
    create: XOR<FacturaCreateWithoutLogsInput, FacturaUncheckedCreateWithoutLogsInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutLogsInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutLogsInput, FacturaUncheckedUpdateWithoutLogsInput>
  }

  export type FacturaUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FacturaItemUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modo?: StringFieldUpdateOperationsInput | string
    numero_factura?: StringFieldUpdateOperationsInput | string
    punto_facturacion?: StringFieldUpdateOperationsInput | string
    codigo_sucursal?: StringFieldUpdateOperationsInput | string
    tipo_documento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cufe?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_tipo?: StringFieldUpdateOperationsInput | string
    cliente_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_nombre?: StringFieldUpdateOperationsInput | string
    cliente_direccion?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_email?: NullableStringFieldUpdateOperationsInput | string | null
    total_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_factura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    documento_original?: JsonNullValueInput | InputJsonValue
    hka_response?: NullableJsonNullValueInput | InputJsonValue
    xml_firmado?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FacturaItemUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaItemCreateManyFacturaInput = {
    id?: string
    codigo: string
    descripcion: string
    cantidad: Decimal | DecimalJsLike | number | string
    unidad_medida: string
    precio_unitario: Decimal | DecimalJsLike | number | string
    descuento?: Decimal | DecimalJsLike | number | string
    tasa_itbms: string
    valor_itbms: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type HKALogCreateManyFacturaInput = {
    id?: string
    operacion: string
    request: string
    response: string
    status_code?: number | null
    createdAt?: Date | string
  }

  export type FacturaItemUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaItemUncheckedUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaItemUncheckedUpdateManyWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidad_medida?: StringFieldUpdateOperationsInput | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descuento?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasa_itbms?: StringFieldUpdateOperationsInput | string
    valor_itbms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogUncheckedUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HKALogUncheckedUpdateManyWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    operacion?: StringFieldUpdateOperationsInput | string
    request?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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